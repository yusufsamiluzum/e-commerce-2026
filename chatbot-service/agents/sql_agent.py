"""
SQL Agent — Doğal dil sorusunu SQL sorgusuna çevirir.
- DB şemasını context olarak kullanır
- RBAC bilgilerini (user_role, user_id, store_id) WHERE clause'a enjekte eder
"""

from langchain_core.messages import SystemMessage, HumanMessage

from agents.state import AgentState

SQL_SYSTEM_PROMPT = """You are a senior SQL developer specializing in e-commerce databases.
You work with a MySQL database for the DataPulse e-commerce platform.

CRITICAL RULES:
1. Generate ONLY valid MySQL SQL queries. No markdown, no explanation, no formatting.
2. Output ONLY the raw SQL query text, nothing else.
3. Never use DROP, DELETE, INSERT, UPDATE, ALTER, CREATE, or TRUNCATE statements.
4. Only SELECT queries are allowed.
5. Never query the `password_hash` column from any table.
6. Always use proper JOINs when referencing related tables.
7. Use aliases for readability.

ROLE-BASED ACCESS CONTROL (CRITICAL):
{rbac_instructions}

DATABASE SCHEMA:
{db_schema}
"""

RBAC_TEMPLATES = {
    "INDIVIDUAL": (
        "The current user is an INDIVIDUAL customer with user_id = {user_id}. "
        "They can ONLY see their own data. You MUST add `WHERE user_id = {user_id}` "
        "or equivalent filter on every query involving users, orders, reviews, or refunds. "
        "They cannot see other users' data or store management data."
    ),
    "CORPORATE": (
        "The current user is a CORPORATE store owner with store_id = {store_id}. "
        "They can ONLY see data related to their own store. You MUST add "
        "`WHERE store_id = {store_id}` or equivalent filter on every query involving "
        "products, orders, order_items, reviews, shipments, or refunds. "
        "They cannot see other stores' data or platform-wide statistics."
    ),
    "ADMIN": (
        "The current user is an ADMIN with full platform access. "
        "No data restrictions apply. They can query all tables without filters."
    )
}


def sql_agent(state: AgentState, llm, db_schema: str) -> AgentState:
    """
    Kullanıcının sorusunu veritabanı şeması ve RBAC kurallarına göre SQL'e çevirir.
    """
    user_role = state["user_role"]
    user_id = state["user_id"]
    store_id = state.get("store_id", "")

    # RBAC talimatlarını role'a göre hazırla
    rbac_template = RBAC_TEMPLATES.get(user_role, RBAC_TEMPLATES["INDIVIDUAL"])
    rbac_instructions = rbac_template.format(user_id=user_id, store_id=store_id)

    system_prompt = SQL_SYSTEM_PROMPT.format(
        rbac_instructions=rbac_instructions,
        db_schema=db_schema
    )

    # Eğer önceki iterasyonda hata varsa, düzeltme bağlamı ekle
    error_context = ""
    if state.get("error"):
        error_context = (
            f"\n\nPREVIOUS ATTEMPT FAILED with this error:\n{state['error']}\n"
            f"The failed SQL was:\n{state.get('sql_query', 'N/A')}\n"
            f"Please fix the SQL query to resolve this error."
        )

    messages = [
        SystemMessage(content=system_prompt),
        HumanMessage(content=state["question"] + error_context)
    ]

    response = llm.invoke(messages)
    sql_query = response.content.strip()

    # Markdown code block temizliği (LLM bazen ```sql ... ``` ile sarar)
    if sql_query.startswith("```"):
        lines = sql_query.split("\n")
        sql_query = "\n".join(
            line for line in lines
            if not line.strip().startswith("```")
        ).strip()

    return {
        **state,
        "sql_query": sql_query,
        "error": None  # Yeni deneme, eski hatayı temizle
    }
