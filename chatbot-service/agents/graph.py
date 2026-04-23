"""
LangGraph State Machine — Multi-Agent orchestration.
5 agent'ı tek bir yürütülebilir graph olarak birleştirir.

Flow:
  User Input → Guardrail → [greeting/out_of_scope → END]
                          → [in_scope → SQL Agent → Execute SQL]
                              → [error → Error Agent (max 3) → Execute SQL]
                              → [success → Analysis Agent → Viz Decision]
                                  → [no graph → END]
                                  → [graph → Visualization Agent → END]
"""

from langgraph.graph import StateGraph, END

from agents.state import AgentState
from agents.guardrail import guardrail_agent
from agents.sql_agent import sql_agent
from agents.error_agent import error_agent, MAX_RETRIES
from agents.analysis_agent import analysis_agent
from agents.visualization_agent import visualization_agent, should_visualize
from db.connection import execute_readonly_query
from db.schema import get_db_schema
from security.rbac import enforce_rbac


def build_graph(llm):
    """
    LangGraph state machine'i oluşturur ve compile eder.
    llm parametresi ile farklı LLM provider'lar desteklenir.
    """
    db_schema = get_db_schema()

    # --- Node tanımları ---

    def guardrail_node(state: AgentState) -> AgentState:
        return guardrail_agent(state, llm)

    def sql_node(state: AgentState) -> AgentState:
        return sql_agent(state, llm, db_schema)

    def execute_sql_node(state: AgentState) -> AgentState:
        """SQL sorgusunu güvenli şekilde çalıştırır."""
        sql = state.get("sql_query", "")

        # RBAC enforcement — LLM çıktısına güvenme, backend'de doğrula
        enforced_sql, rbac_error = enforce_rbac(
            sql,
            state["user_role"],
            state["user_id"],
            state.get("store_id")
        )

        if rbac_error:
            return {
                **state,
                "error": f"RBAC ihlali: {rbac_error}",
                "iteration_count": state["iteration_count"] + 1
            }

        # Sorguyu çalıştır
        results, error = execute_readonly_query(enforced_sql)

        if error:
            return {
                **state,
                "sql_query": enforced_sql,
                "error": error,
                "query_result": None
            }

        return {
            **state,
            "sql_query": enforced_sql,
            "query_result": results,
            "error": None
        }

    def error_node(state: AgentState) -> AgentState:
        return error_agent(state, llm, db_schema)

    def analysis_node(state: AgentState) -> AgentState:
        return analysis_agent(state, llm)

    def viz_node(state: AgentState) -> AgentState:
        return visualization_agent(state, llm)

    # --- Conditional edge fonksiyonları ---

    def after_guardrail(state: AgentState) -> str:
        """Guardrail sonrası yönlendirme."""
        if state.get("is_in_scope"):
            return "sql_agent"
        return END  # greeting veya out_of_scope → final_answer zaten set edildi

    def after_execute(state: AgentState) -> str:
        """SQL execution sonrası yönlendirme."""
        if state.get("error"):
            if state.get("iteration_count", 0) >= MAX_RETRIES:
                # Max deneme aşıldı — hata mesajı ile çık
                return "max_retries_exceeded"
            return "error_agent"
        return "analysis_agent"

    def after_analysis(state: AgentState) -> str:
        """Analiz sonrası grafik kararı."""
        if should_visualize(state, llm):
            return "viz_agent"
        return END

    def max_retries_node(state: AgentState) -> AgentState:
        """Max deneme aşıldığında kullanıcıya hata mesajı döner."""
        return {
            **state,
            "final_answer": (
                "Üzgünüm, sorgunuzu işlerken teknik bir hata oluştu ve "
                f"{MAX_RETRIES} deneme sonrasında çözemedim. 😔\n\n"
                f"Hata detayı: {state.get('error', 'Bilinmeyen hata')}\n\n"
                "Lütfen sorunuzu farklı şekilde ifade etmeyi deneyin."
            )
        }

    # --- Graph oluşturma ---

    graph = StateGraph(AgentState)

    # Node'ları ekle
    graph.add_node("guardrail", guardrail_node)
    graph.add_node("sql_agent", sql_node)
    graph.add_node("execute_sql", execute_sql_node)
    graph.add_node("error_agent", error_node)
    graph.add_node("analysis_agent", analysis_node)
    graph.add_node("viz_agent", viz_node)
    graph.add_node("max_retries_exceeded", max_retries_node)

    # Entry point
    graph.set_entry_point("guardrail")

    # Edge'leri tanımla
    graph.add_conditional_edges("guardrail", after_guardrail, {
        "sql_agent": "sql_agent",
        END: END
    })

    graph.add_edge("sql_agent", "execute_sql")

    graph.add_conditional_edges("execute_sql", after_execute, {
        "error_agent": "error_agent",
        "analysis_agent": "analysis_agent",
        "max_retries_exceeded": "max_retries_exceeded"
    })

    # Error agent düzeltilmiş SQL'i tekrar execute'a gönderir
    graph.add_edge("error_agent", "execute_sql")

    graph.add_conditional_edges("analysis_agent", after_analysis, {
        "viz_agent": "viz_agent",
        END: END
    })

    graph.add_edge("viz_agent", END)
    graph.add_edge("max_retries_exceeded", END)

    return graph.compile()
