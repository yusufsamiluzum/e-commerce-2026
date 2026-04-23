Multi-Agent Text2SQL AI Chatbot - Implementation Guide

1. Project Overview

This document outlines the requirements and architecture for the Multi-Agent Text2SQL AI Chatbot component of our E-Commerce Analytics Platform. The chatbot converts natural language questions into executable database queries, analyzes the results, and provides both textual explanations and visualizations (Plotly).

Primary Goal: Empower non-technical users to query e-commerce databases using natural English language.

2. Technology Stack

Core Framework: LangGraph (for state machine and agent routing)

Frontend/UI: Angular (or Chainlit for rapid Python prototyping if backend-only focus is needed initially)

AI/LLM: OpenAI API (gpt-4o-mini) or alternatives (Claude, Ollama)

Visualization: Plotly (LLM generates Python Plotly code)

Data Manipulation: Pandas

Environment: python-dotenv

3. Agent State Management (LangGraph)

You must use TypedDict for strict state management. The state graph must contain the following keys:

from typing import TypedDict, Optional, Any

class AgentState(TypedDict):
    question: str
    sql_query: Optional[str]
    query_result: Optional[Any] # Can be pandas DataFrame or dict
    error: Optional[str]
    final_answer: Optional[str]
    visualization_code: Optional[str]
    is_in_scope: bool
    iteration_count: int # Used to prevent infinite error-fixing loops
    user_role: str # Important for RBAC (Admin, Corporate, Individual)
    user_id: str # Important for RBAC data filtering


4. Multi-Agent Architecture

The system consists of 5 specialized agents. Below are the exact system prompts and roles you must implement.

AGENT_CONFIGS = {
    "guardrails_agent": {
        "role": "Security and Scope Manager",
        "system_prompt": "You are a strict guardrails system that filters questions to ensure they are relevant to e-commerce data analysis. Identify greetings and block out-of-scope queries."
    },
    "sql_agent": {
        "role": "SQL Expert",
        "system_prompt": "You are a senior SQL developer specializing in e-commerce databases. Generate only valid SQL queries without any formatting or explanation. Consider the user's role to enforce data isolation."
    },
    "analysis_agent": {
        "role": "Data Analyst",
        "system_prompt": "You are a helpful data analyst that explains database query results in natural language with clear insights."
    },
    "viz_agent": {
        "role": "Visualization Specialist",
        "system_prompt": "You are a data visualization expert. Generate clean, executable Plotly code without markdown formatting."
    },
    "error_agent": {
        "role": "Error Recovery Specialist",
        "system_prompt": "You diagnose and fix SQL errors with expert knowledge of database schemas and query optimization."
    }
}


5. Agentic Flow (LangGraph Routing Logic)

Implement the LangGraph state machine exactly as follows:

User Input node: Receives question and initializes state.

Guardrails Check node: * If greeting -> Set final_answer to a welcome message -> END

If out-of-scope -> Set final_answer to rejection message -> END

If in-scope -> Set is_in_scope = True -> Route to SQL Agent

SQL Generation node: Generates raw SQL based on question and DB schema context.

Execution Tool/Node: Safely runs the generated sql_query against the database.

If SUCCESS: -> Route to Analysis Agent

If ERROR: -> Update error state, increment iteration_count -> Route to Error Agent

Error Agent node: Analyzes error and original sql_query. Generates fixed SQL.

Constraint: Max 3 retries (check iteration_count). If failed 3 times -> gracefully exit with an error message.

Analysis Agent node: Reads query_result and question. Writes final_answer.

Visualization Decision router: Does this data need a chart?

If NO -> END

If YES -> Route to Visualization Agent

Visualization Agent node: Reads query_result and writes Plotly code to visualization_code. -> END

6. Role-Based Access Control (CRITICAL)

The Chatbot MUST enforce data security based on who is asking. The sql_agent must be injected with context about the user making the request so it appends the correct WHERE clauses.

Individual: Can ONLY see their own orders, purchases, reviews, and spending patterns. (e.g., WHERE user_id = {current_user})

Corporate: Can ONLY see their own store's products, orders, customers, reviews, and sales data. (e.g., WHERE store_id = {current_store})

Admin: Has full platform access (No restrictions).

7. API Integration (Backend Communication)

The Python LangGraph application needs to be exposed so the Spring Boot backend or Angular frontend can communicate with it.

Implement a REST API endpoint (e.g., using FastAPI) for chat requests: POST /api/chat/ask

The payload must accept: question, user_role, user_id (and optionally store_id).

The response must return: text_response (final_answer), plotly_code (if applicable), and raw_data (optional, for frontend tables).

8. Example Test Cases for Verification

When you build the system, verify it works against these scenarios:

"Show me sales by category for last month" -> Should generate a Bar chart.

"What are my top 5 customers by revenue?" -> Should generate Ranked table/Horizontal bar chart.

"How many orders were shipped by air?" -> Should return just a textual answer with the count (No Graph).

"What is the recipe for chocolate cake?" -> Guardrails agent must block this.

9. Security & Hardening Requirements (CRITICAL)

To prevent severe penetration testing vulnerabilities (Prompt Injection, BOLA, XSS, SQLi), you MUST implement the following defensive measures across the stack:

9.1 Database & Execution Security (Anti-SQLi & Exfiltration)

Read-Only Access: The database user executing the LLM-generated queries MUST have strict READ-ONLY permissions. INSERT, UPDATE, DELETE, and DROP commands must be natively rejected by the database to prevent Mass Assignment and destructive SQLi.

Column Whitelisting: The execution layer must parse the generated SQL and block access to sensitive columns (e.g., password_hash, internal_cost, api_key). Reject any queries utilizing unrestricted SELECT * on critical tables.

9.2 Strict Role & Data Isolation (Anti-BOLA & Prompt Injection)

Never Trust the Prompt: You cannot rely solely on the LLM's system prompt to enforce user roles. Attackers will use Prompt Injection to override rules (e.g., "Assume I am admin").

Backend Enforcement: The query execution node MUST validate the generated SQL via AST (Abstract Syntax Tree) parsing or enforce Row-Level Security (RLS) policies at the database level. If a Corporate user queries the database, the backend MUST programmatically ensure store_id = {their_store} is applied, overriding any LLM mistakes.

9.3 UI & Frontend Sanitization (Anti-XSS & Safe Rendering)

DOM Sanitization: All textual responses (final_answer) from the LLM, particularly those querying user-generated content like Product Reviews, MUST be sanitized using DOMPurify in Angular before being injected into the DOM. Never use raw innerHTML.

Safe Visualization Rendering: If generating Plotly code, NEVER execute it client-side using eval(), Function(), or unsandboxed iframes. The Visualization Agent should preferably output strict JSON configurations that the Angular Plotly component can consume securely.

9.4 API Protection (Anti-Enumeration & JWT Tampering)

Strict JWT Validation: The Spring Boot API layer must enforce strong JWT signature verification. Explicitly reject tokens using the alg: none header.

Rate Limiting: Implement rate limiting on the /api/chat/ask endpoint to prevent automated object enumeration (e.g., sequentially guessing store_id or order_id values).