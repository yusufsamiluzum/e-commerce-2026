"""
Error Agent — SQL hatasını analiz eder ve düzeltilmiş SQL üretir.
- Max 3 deneme (iteration_count kontrolü)
- Hata mesajı + orijinal SQL'i LLM'e vererek fix ister
"""

from langchain_core.messages import SystemMessage, HumanMessage

from agents.state import AgentState

ERROR_SYSTEM_PROMPT = """You are an expert SQL error recovery specialist for a MySQL e-commerce database.
You diagnose SQL errors and produce corrected queries.

RULES:
1. Analyze the error message and the original SQL query carefully.
2. Output ONLY the corrected SQL query. No explanation, no markdown.
3. The corrected query must be a valid MySQL SELECT statement.
4. Never change the intent of the original query — only fix the error.
5. Never use DROP, DELETE, INSERT, UPDATE, ALTER, CREATE, or TRUNCATE.
6. Never query the `password_hash` column.

DATABASE SCHEMA:
{db_schema}
"""

MAX_RETRIES = 3


def error_agent(state: AgentState, llm, db_schema: str) -> AgentState:
    """
    SQL hatasını analiz eder, düzeltilmiş SQL üretir.
    iteration_count kontrolü graph.py tarafında yapılır.
    """
    system_prompt = ERROR_SYSTEM_PROMPT.format(db_schema=db_schema)

    messages = [
        SystemMessage(content=system_prompt),
        HumanMessage(content=(
            f"Original question: {state['question']}\n\n"
            f"Failed SQL query:\n{state.get('sql_query', 'N/A')}\n\n"
            f"Error message:\n{state.get('error', 'Unknown error')}\n\n"
            f"Please provide a corrected SQL query."
        ))
    ]

    response = llm.invoke(messages)
    fixed_sql = response.content.strip()

    # Markdown code block temizliği
    if fixed_sql.startswith("```"):
        lines = fixed_sql.split("\n")
        fixed_sql = "\n".join(
            line for line in lines
            if not line.strip().startswith("```")
        ).strip()

    return {
        **state,
        "sql_query": fixed_sql,
        "error": None,
        "iteration_count": state["iteration_count"] + 1
    }
