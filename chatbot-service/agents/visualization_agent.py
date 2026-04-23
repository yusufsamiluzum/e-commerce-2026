"""
Visualization Agent — Grafik gerekip gerekmediğine karar verir
ve gerekirse güvenli Plotly JSON config üretir.

GÜVENLİK: eval() veya Function() ile çalıştırılacak Python/JS kodu üretMEZ.
Bunun yerine doğrudan Plotly.js tarafından tüketilebilecek saf JSON üretir.
"""

import json

from langchain_core.messages import SystemMessage, HumanMessage

from agents.state import AgentState

# Grafik gerekip gerekmediğine karar veren prompt
VIZ_DECISION_PROMPT = """You are a data visualization decision maker.
Given the user's question and the query results, decide if a chart/graph would be helpful.

A chart IS helpful when:
- Data has multiple categories or groups to compare
- Data shows trends over time
- Data has numerical values that benefit from visual comparison

A chart is NOT helpful when:
- The result is a single number or count
- The result is a simple yes/no answer
- The data has only 1-2 rows with no comparison value

Respond with ONLY one word: yes or no"""

# Plotly JSON config üretici prompt
VIZ_GENERATION_PROMPT = """You are a data visualization expert who creates Plotly.js chart configurations.

CRITICAL RULES:
1. Output ONLY a valid JSON object that Plotly.js can consume directly.
2. The JSON must have "data" and "layout" keys.
3. Use dark theme colors: background "#1a1a2e", text "#e0e0e0", gridlines "#333".
4. Use vibrant accent colors: ["#7c3aed", "#3b82f6", "#10b981", "#f59e0b", "#ef4444", "#ec4899"].
5. Choose the most appropriate chart type (bar, line, pie, scatter, horizontal bar).
6. Include proper axis labels and a descriptive title.
7. NO markdown, NO explanation, NO code — ONLY the JSON object.
8. Make sure all string values are properly escaped for JSON.

Example output format:
{
  "data": [{"type": "bar", "x": ["A", "B"], "y": [10, 20], "marker": {"color": "#7c3aed"}}],
  "layout": {"title": {"text": "Sales"}, "paper_bgcolor": "#1a1a2e", "plot_bgcolor": "#1a1a2e", "font": {"color": "#e0e0e0"}}
}"""


def should_visualize(state: AgentState, llm) -> bool:
    """Grafik gerekip gerekmediğine karar verir."""
    messages = [
        SystemMessage(content=VIZ_DECISION_PROMPT),
        HumanMessage(content=(
            f"Question: {state['question']}\n"
            f"Results: {str(state.get('query_result', ''))[:2000]}"
        ))
    ]

    response = llm.invoke(messages)
    return "yes" in response.content.strip().lower()


def visualization_agent(state: AgentState, llm) -> AgentState:
    """
    Sorgu sonuçlarına uygun Plotly JSON config üretir.
    Güvenlik: Python kodu değil, saf JSON üretilir.
    """
    query_result = state.get("query_result", [])
    result_str = str(query_result)
    if len(result_str) > 3000:
        result_str = result_str[:3000] + "\n... (kırpıldı)"

    messages = [
        SystemMessage(content=VIZ_GENERATION_PROMPT),
        HumanMessage(content=(
            f"Question: {state['question']}\n\n"
            f"Data to visualize:\n{result_str}"
        ))
    ]

    response = llm.invoke(messages)
    viz_content = response.content.strip()

    # JSON code block temizliği
    if viz_content.startswith("```"):
        lines = viz_content.split("\n")
        viz_content = "\n".join(
            line for line in lines
            if not line.strip().startswith("```")
        ).strip()

    # JSON geçerliliğini doğrula
    try:
        parsed = json.loads(viz_content)
        # Güvenlik: sadece "data" ve "layout" key'lerine izin ver
        safe_config = {
            "data": parsed.get("data", []),
            "layout": parsed.get("layout", {})
        }
        viz_content = json.dumps(safe_config)
    except json.JSONDecodeError:
        # JSON parse edilemezse grafik gösterme
        viz_content = None

    return {
        **state,
        "visualization_code": viz_content
    }
