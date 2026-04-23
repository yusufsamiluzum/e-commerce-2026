"""
Analysis Agent — Sorgu sonuçlarını doğal dilde açıklar.
- query_result + question alır
- Kullanıcıya anlaşılır bir özet yazar (final_answer)
"""

from langchain_core.messages import SystemMessage, HumanMessage

from agents.state import AgentState

ANALYSIS_SYSTEM_PROMPT = """You are a helpful data analyst for the DataPulse e-commerce platform.
Your job is to explain database query results in clear, natural language.

RULES:
1. Provide a concise, insightful summary of the data.
2. Highlight key findings, trends, or notable values.
3. Use bullet points or numbered lists for multiple data points.
4. Format numbers nicely (e.g., currency with ₺ symbol, percentages with %).
5. If the result is empty, say so clearly and suggest possible reasons.
6. Respond in the same language as the user's question (Turkish or English).
7. Keep the response under 300 words.
8. Do NOT include any SQL or technical details in your response."""


def analysis_agent(state: AgentState, llm) -> AgentState:
    """
    Sorgu sonuçlarını kullanıcının sorusu bağlamında analiz eder.
    """
    query_result = state.get("query_result")

    # Sonuç boşsa kısa yanıt
    if not query_result or (isinstance(query_result, list) and len(query_result) == 0):
        return {
            **state,
            "final_answer": (
                "Sorgunuz için herhangi bir sonuç bulunamadı. "
                "Farklı bir zaman aralığı veya filtre deneyebilirsiniz."
            )
        }

    # Sonucu LLM'e gönder
    result_str = str(query_result)
    # Çok büyük sonuçları kırp (token limiti aşımını önle)
    if len(result_str) > 4000:
        result_str = result_str[:4000] + "\n... (sonuçlar kırpıldı)"

    messages = [
        SystemMessage(content=ANALYSIS_SYSTEM_PROMPT),
        HumanMessage(content=(
            f"User's question: {state['question']}\n\n"
            f"Query results:\n{result_str}"
        ))
    ]

    response = llm.invoke(messages)

    return {
        **state,
        "final_answer": response.content.strip()
    }
