"""
Guardrail Agent — Kullanıcı girdisini filtreler.
- Selamlama (greeting) → hoş geldiniz mesajı → END
- Kapsam dışı (out-of-scope) → ret mesajı → END
- Kapsam içi (in-scope) → SQL Agent'a yönlendirme
"""

from langchain_core.messages import SystemMessage, HumanMessage

from agents.state import AgentState

GUARDRAIL_SYSTEM_PROMPT = """You are a strict guardrails system for an e-commerce analytics platform called DataPulse.
Your job is to classify user messages into exactly one of three categories:

1. **greeting** — The user is greeting or saying hello (e.g., "hi", "hello", "merhaba", "hey", "selam", "nasılsın").
2. **in_scope** — The user is asking a question related to e-commerce data, orders, products, sales, customers, revenue, reviews, shipments, refunds, categories, stores, or analytics.
3. **out_of_scope** — The user is asking something unrelated to e-commerce (e.g., recipes, weather, sports, politics, coding help, math problems).

Respond with ONLY one of these exact words: greeting, in_scope, out_of_scope
Do NOT add any explanation or extra text."""

GREETING_RESPONSE = ("Merhaba! 👋 Ben DataPulse AI Asistanınızım. "
                      "E-ticaret verileriniz hakkında sorular sorabilirsiniz. "
                      "Örneğin: \"Son ayın en çok satan ürünleri neler?\" veya "
                      "\"Bugünkü toplam gelir ne kadar?\"")

OUT_OF_SCOPE_RESPONSE = ("Üzgünüm, bu soru e-ticaret veri analitiği kapsamının dışında. 🚫 "
                          "Ben sadece siparişler, ürünler, satışlar, müşteriler, iadeler ve "
                          "mağaza verileri hakkındaki sorularınızı yanıtlayabilirim.")


def guardrail_agent(state: AgentState, llm) -> AgentState:
    """
    Kullanıcının sorusunu analiz eder ve uygun kategoriye yönlendirir.
    """
    messages = [
        SystemMessage(content=GUARDRAIL_SYSTEM_PROMPT),
        HumanMessage(content=state["question"])
    ]

    response = llm.invoke(messages)
    classification = response.content.strip().lower()

    if "greeting" in classification:
        return {
            **state,
            "is_in_scope": False,
            "final_answer": GREETING_RESPONSE
        }
    elif "out_of_scope" in classification:
        return {
            **state,
            "is_in_scope": False,
            "final_answer": OUT_OF_SCOPE_RESPONSE
        }
    else:
        # in_scope — SQL Agent'a yönlendirilecek
        return {
            **state,
            "is_in_scope": True
        }
