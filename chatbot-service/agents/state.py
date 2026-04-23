"""
AgentState — LangGraph state machine için merkezi durum tanımı.
Tüm agent'lar bu state üzerinden veri paylaşır.
"""

from typing import TypedDict, Optional, Any


class AgentState(TypedDict):
    # Kullanıcının doğal dildeki sorusu
    question: str

    # SQL Agent tarafından üretilen ham SQL sorgusu
    sql_query: Optional[str]

    # Sorgu sonucu (pandas DataFrame dict veya liste formatında)
    query_result: Optional[Any]

    # Hata mesajı (SQL execution hatası)
    error: Optional[str]

    # Analysis Agent tarafından üretilen doğal dil cevabı
    final_answer: Optional[str]

    # Visualization Agent tarafından üretilen Plotly JSON config
    visualization_code: Optional[str]

    # Guardrail Agent tarafından belirlenen kapsam durumu
    is_in_scope: bool

    # Hata düzeltme döngüsünü sınırlamak için sayaç (max 3)
    iteration_count: int

    # RBAC bilgileri — JWT'den çıkarılır, LLM'e güvenilmez
    user_role: str       # INDIVIDUAL | CORPORATE | ADMIN
    user_id: str         # Kullanıcı ID
    store_id: Optional[str]  # Corporate kullanıcılar için mağaza ID
