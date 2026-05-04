"""
DataPulse AI Chatbot — FastAPI Entrypoint

Çoklu LLM provider desteği ile Multi-Agent Text2SQL chatbot servisi.
Admin panelinden LLM provider değiştirilebilir (OpenAI, Anthropic Claude, Ollama).
"""

import os
import logging

from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, Field
from typing import Optional
from dotenv import load_dotenv

load_dotenv()

# Logging yapılandırması
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger("chatbot-service")

app = FastAPI(
    title="DataPulse AI Chatbot",
    description="Multi-Agent Text2SQL Chatbot Service",
    version="1.0.0"
)

# CORS — Spring Boot backend'den gelen isteklere izin ver
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:8080", "http://backend:8080"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


# --- Pydantic Modelleri ---

class ChatRequest(BaseModel):
    """Chat isteği — Spring Boot backend'den gelir."""
    question: str = Field(..., min_length=1, max_length=1000)
    user_role: str = Field(..., pattern="^(INDIVIDUAL|CORPORATE|ADMIN)$")
    user_id: str
    store_id: Optional[str] = None
    # Admin tarafından ayarlanan LLM provider bilgisi
    llm_provider: str = Field(default="openai")
    llm_model: str = Field(default="gpt-4o-mini")
    api_key: Optional[str] = None  # Admin panelinden DB'ye kaydedilen key


class ChatResponse(BaseModel):
    """Chat yanıtı — Spring Boot backend'e döner."""
    text_response: str
    plotly_json: Optional[str] = None
    raw_data: Optional[list] = None
    sql_query: Optional[str] = None  # Debug/transparency için


# --- LLM Provider Factory ---

def get_llm(provider: str, model: str, api_key: Optional[str] = None):
    """
    Admin ayarlarına göre uygun LLM provider'ı döndürür.
    api_key önce parametreden, yoksa .env'den okunur.
    Desteklenen provider'lar: openai, anthropic, gemini, groq, ollama
    """
    if provider == "openai":
        from langchain_openai import ChatOpenAI
        return ChatOpenAI(
            model=model or "gpt-4o-mini",
            api_key=api_key or os.getenv("OPENAI_API_KEY"),
            temperature=0
        )
    elif provider == "anthropic":
        from langchain_community.chat_models import ChatAnthropic
        return ChatAnthropic(
            model=model or "claude-3-haiku-20240307",
            api_key=api_key or os.getenv("ANTHROPIC_API_KEY"),
            temperature=0
        )
    elif provider == "gemini":
        from langchain_google_genai import ChatGoogleGenerativeAI
        gemini_model = model or "gemini-2.5-flash"
        if "1.5" in gemini_model or "gemini-pro" == gemini_model:
            gemini_model = "gemini-2.5-flash"
        return ChatGoogleGenerativeAI(
            model=gemini_model,
            google_api_key=api_key or os.getenv("GOOGLE_API_KEY"),
            temperature=0
        )
    elif provider == "ollama":
        from langchain_community.chat_models import ChatOllama
        return ChatOllama(
            model=model or "llama3",
            base_url=os.getenv("OLLAMA_BASE_URL", "http://localhost:11434"),
            temperature=0
        )
    elif provider == "groq":
        from langchain_groq import ChatGroq
        groq_model = model or "llama-3.3-70b-versatile"
        deprecated_models = ["llama3-70b-8192", "llama3-8b-8192", "mixtral-8x7b-32768"]
        if groq_model in deprecated_models:
            groq_model = "llama-3.3-70b-versatile"
        return ChatGroq(
            model=groq_model,
            api_key=api_key or os.getenv("GROQ_API_KEY"),
            temperature=0
        )
    else:
        raise ValueError(f"Desteklenmeyen LLM provider: {provider}")


# --- API Endpoints ---

@app.get("/health")
async def health_check():
    """Servis sağlık kontrolü."""
    return {"status": "healthy", "service": "datapulse-chatbot"}


@app.post("/chat", response_model=ChatResponse)
async def chat(request: ChatRequest):
    """
    Ana chat endpoint'i.
    Spring Boot backend'den gelen soruyu işler ve yanıt döner.
    """
    logger.info(
        f"Chat isteği: role={request.user_role}, user_id={request.user_id}, "
        f"provider={request.llm_provider}, question={request.question[:50]}..."
    )

    try:
        # DB'den api_key gelmiyorsa .env'deki DEFAULT_LLM_PROVIDER'a düş
        effective_provider = request.llm_provider.lower()
        effective_model = request.llm_model
        if not request.api_key:
            env_provider = os.getenv("DEFAULT_LLM_PROVIDER")
            env_model = os.getenv("DEFAULT_LLM_MODEL")
            if env_provider:
                effective_provider = env_provider.lower()
                effective_model = env_model or effective_model

        llm = get_llm(effective_provider, effective_model, request.api_key)

        # LangGraph'ı import et ve graph'ı oluştur
        from agents.graph import build_graph
        graph = build_graph(llm)

        # Başlangıç state'i
        initial_state = {
            "question": request.question,
            "sql_query": None,
            "query_result": None,
            "error": None,
            "final_answer": None,
            "visualization_code": None,
            "is_in_scope": False,
            "iteration_count": 0,
            "user_role": request.user_role,
            "user_id": request.user_id,
            "store_id": request.store_id
        }

        # Graph'ı çalıştır
        result = graph.invoke(initial_state)

        return ChatResponse(
            text_response=result.get("final_answer", "Bir yanıt üretilemedi."),
            plotly_json=result.get("visualization_code"),
            raw_data=result.get("query_result"),
            sql_query=result.get("sql_query")
        )

    except ValueError as e:
        raise HTTPException(status_code=400, detail=str(e))
    except Exception as e:
        logger.error(f"Chat hatası: {str(e)}", exc_info=True)
        raise HTTPException(
            status_code=500,
            detail="Chatbot isteği işlenirken bir hata oluştu."
        )


if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
