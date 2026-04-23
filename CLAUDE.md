# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**DataPulse** is a multi-tenant B2C e-commerce platform with built-in analytics and an AI chatbot (Text2SQL). Three user roles — `INDIVIDUAL` (customer), `CORPORATE` (store owner), `ADMIN` (platform operator) — each have fully separate UI modules and backend endpoint sets.

---

## Services & Ports

| Service | Port | Notes |
|---------|------|-------|
| Angular SSR Frontend | 4200 (host) → 4000 (container) | |
| Spring Boot API | 8080 | |
| MySQL | 3306 | DB: `datapulse_db`, root pw: `password123` |
| phpMyAdmin | 8081 | |
| Python Chatbot (optional) | 8000 | Start with `--profile chatbot` |

---

## Common Commands

### Docker (primary way to run everything)
```bash
# Start core services (db, backend, frontend)
docker-compose up --build

# Include chatbot service
docker-compose --profile chatbot up --build

# Rebuild a single service
docker-compose up --build backend
```

### Backend (Spring Boot)
```bash
cd backend

# Run locally (requires MySQL on 3306)
./mvnw spring-boot:run

# Build JAR
./mvnw package -DskipTests

# Run all tests
./mvnw test

# Run a single test class
./mvnw test -Dtest=OrderServiceTest

# Compile only (fast check for errors)
./mvnw compile
```

### Frontend (Angular)
```bash
cd frontend

# Dev server (proxies API calls to localhost:8080)
npm start          # ng serve on port 4200

# Production build
npm run build

# Run tests (Vitest)
npm test

# SSR server (after build)
npm run serve:ssr:datapulse-frontend
```

### Chatbot Service (Python)
```bash
cd chatbot-service

# Install deps
pip install -r requirements.txt

# Run locally
uvicorn main:app --reload --port 8000

# Requires .env with: OPENAI_API_KEY / ANTHROPIC_API_KEY / GEMINI_API_KEY / GROQ_API_KEY
```

---

## Architecture

### Backend (`backend/src/main/java/com/datapulse/api/`)

**Key constraint:** `spring.jpa.hibernate.ddl-auto=create` — the schema is **dropped and recreated** on every backend restart. All seed data comes from `DatabaseSeeder.java` (implements `CommandLineRunner`).

**RBAC is dual-layered:**
1. `SecurityConfig.java` — URL-level role checks (`hasRole("ADMIN")`, etc.)
2. `@PreAuthorize` on controller methods — fine-grained method-level checks

**Data isolation pattern:** Corporate queries always filter by `store_id` tied to the authenticated user. Individual queries filter by `user_id`. Never trust frontend-supplied IDs without cross-checking against the JWT principal.

**Controller → Service mapping (one-to-one by domain):**
- `AuthController` → `AuthService` (JWT generation, user registration)
- `CorporateController` → `CatalogService`, `InventoryService`, `SalesAnalyticsService`, `CustomerSegmentationService`, `ReviewManagementService`, `OrderManagementService`
- `AdminController` → `AdminService`
- `OrderController` → `OrderService`
- `ChatController` → `ChatService` (proxies to Python chatbot at `chatbot.service.url`)
- `PaymentController` → Stripe SDK (key: `STRIPE_API_KEY` env var, fallback: `sk_test_placeholder`)

**JWT:** Stored in `HttpOnly` cookie, 24h expiry. The `JwtAuthenticationFilter` reads the cookie, not the `Authorization` header. CORS is restricted to `http://localhost:4200`.

**File uploads:** Stored at `./uploads/` relative to the working directory. Served publicly at `/uploads/**`. Max 10MB per file, 15MB per request.

### Frontend (`frontend/src/app/`)

**Module structure is strictly role-separated:**
- `features/catalog`, `features/cart`, `features/checkout`, `features/individual` → INDIVIDUAL only (guarded by `notCorporateGuard`)
- `features/corporate` → CORPORATE + ADMIN
- `features/admin` → ADMIN only
- `features/auth` → public
- `features/ai-assistant` → all authenticated users

**State management:** Angular Signals for synchronous auth state (`currentUserRole`, `currentUserName`, `hasStore`). RxJS Observables for all async HTTP. Non-sensitive auth state (role, name, email) is persisted in `localStorage` for page refresh.

**HTTP:** All requests include cookies automatically (Angular `withCredentials`). No `Authorization` header is used. The `AuthService` is the single source of truth for role/identity.

**Routing:** All feature modules are lazy-loaded. Guards are in `core/guards/auth.guard.ts` — `authGuard` (blocks guests), `roleGuard` (checks `data.roles`), `notCorporateGuard` (blocks CORPORATE from customer pages).

**Styling:** Tailwind CSS v4 with PostCSS. Prettier configured for 100-char line width, single quotes, Angular HTML parser.

### Chatbot Service (`chatbot-service/`)

5-node LangGraph state machine: `Guardrail → SQL Agent → [Error Agent (max 3 retries)] → Analysis Agent → [Viz Agent]`.

RBAC is enforced in `security/` before SQL execution — queries are scoped by `user_role`, `user_id`, and `store_id` received in the request body from the Spring backend. The chatbot runs **read-only SELECT** queries only.

Multi-provider LLM support: OpenAI, Anthropic, Gemini, Groq, Ollama. Provider is selected per-request via the `llm_provider` field passed from `ChatController`.

---

## Seed Data (DatabaseSeeder)

On every backend start, the seeder creates:
- 1 ADMIN user
- Multiple CORPORATE users (each with a store)
- Multiple INDIVIDUAL users
- Categories, products, orders, reviews, refunds, shipments

Check `DatabaseSeeder.java` for exact email/password values used in dev.

---

## Key Gotchas

- **Schema resets on every restart** (`ddl-auto=create`). Don't store test data directly in the DB expecting it to persist through a backend restart.
- **CORS is hardcoded** to `http://localhost:4200` in `SecurityConfig.java`. Add new origins there if needed.
- **Chatbot is optional** — the main platform works without it. `ChatService` will fail gracefully if the Python service is down.
- **Stripe key** falls back to `sk_test_placeholder` if `STRIPE_API_KEY` env var is unset — payment calls will fail but the app will start.
- **`ddl-auto=create` vs production**: Before deploying, switch to `validate` or `update` and provide a real JWT secret (not the hardcoded one in `application.properties`).
