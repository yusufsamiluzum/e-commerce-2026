# DataPulse — Multi-Tenant B2C E-Commerce Platform

DataPulse, üç farklı kullanıcı rolünü (Müşteri, Mağaza Sahibi, Platform Yöneticisi) destekleyen, yerleşik analitik ve yapay zeka destekli Text2SQL chatbot içeren tam kapsamlı bir e-ticaret platformudur.

---

## Teknoloji Yığını

| Katman | Teknoloji |
|--------|-----------|
| Frontend | Angular 19 (SSR), Tailwind CSS v4 |
| Backend | Spring Boot 3, Java 21, Spring Security |
| Veritabanı | MySQL 8 |
| Ödeme | Stripe |
| AI Chatbot | Python (FastAPI), LangGraph, Multi-LLM |
| Altyapı | Docker, Docker Compose |

---

## Servisler ve Portlar

| Servis | Port | Açıklama |
|--------|------|----------|
| Frontend (Angular SSR) | 4200 | Ana uygulama arayüzü |
| Backend (Spring Boot) | 8080 | REST API |
| MySQL | 3306 | Veritabanı |
| phpMyAdmin | 8081 | Veritabanı yönetim arayüzü |
| AI Chatbot (Python) | 8000 | Opsiyonel — ayrıca başlatılır |

---

## Hızlı Başlangıç

### Gereksinimler

- [Docker Desktop](https://www.docker.com/products/docker-desktop/)

### Çalıştırma (Core — Chatbot Hariç)

```bash
docker-compose up --build
```

Uygulama hazır olduğunda: [http://localhost:4200](http://localhost:4200)

### Chatbot Dahil Çalıştırma

```bash
# Önce chatbot-service/.env dosyasını oluşturun (aşağıya bakın)
docker-compose --profile chatbot up --build
```

### Servis Bazlı Yeniden Build

```bash
docker-compose up --build backend
```

---

## Test Kullanıcıları

Her kullanıcı için şifre: `123Pa$$word!`

| Rol | E-posta |
|-----|---------|
| Admin | `admin@test.com` |
| Mağaza Sahibi | `seller1@test.com` |
| Mağaza Sahibi | `seller2@test.com` |
| Mağaza Sahibi | `seller3@test.com` |
| Müşteri | `customer1@test.com` |
| Müşteri | `customer2@test.com` |
| ... | `customer3@test.com` — `customer10@test.com` |

> **Not:** Backend her yeniden başlatıldığında veritabanı sıfırlanır (`ddl-auto=create`). Test verileri `DatabaseSeeder.java` tarafından otomatik yüklenir.

---

## Kullanıcı Rolleri ve Özellikler

### INDIVIDUAL (Müşteri)
- Ürün kataloğu, arama ve filtreleme
- Alışveriş sepeti ve ödeme (Stripe entegrasyonu)
- Sipariş takibi ve iade talebi
- Ürün değerlendirme ve yorum
- AI chatbot erişimi

### CORPORATE (Mağaza Sahibi)
- Mağaza ve ürün yönetimi (görsel yükleme dahil)
- Sipariş ve kargo yönetimi
- Satış analitiği ve müşteri segmentasyonu
- İade yönetimi
- AI chatbot erişimi (mağazaya özel sorgular)

### ADMIN (Platform Yöneticisi)
- Platform geneli dashboard ve gelir analitiği
- Kullanıcı ve mağaza yönetimi (askıya alma, onaylama)
- Sipariş ve iade moderasyonu
- Kategori yönetimi
- Sistem konfigürasyonu (LLM sağlayıcı, Stripe key, vergi oranı vb.)
- Audit log takibi
- CSV dışa aktarma

---

## AI Chatbot (Text2SQL)

Chatbot, doğal dil soruları SQL sorgusuna çeviren 5 node'lu bir LangGraph state machine kullanır:

```
Guardrail → SQL Agent → [Error Agent (maks. 3 deneme)] → Analysis Agent → [Viz Agent]
```

RBAC güvenliği: Müşteriler yalnızca kendi verilerini, mağaza sahipleri yalnızca kendi mağaza verilerini sorgulayabilir.

### Desteklenen LLM Sağlayıcılar

Admin panelinden dinamik olarak değiştirilebilir:

| Sağlayıcı | Model Örnekleri |
|-----------|-----------------|
| OpenAI | `gpt-4o-mini`, `gpt-4o` |
| Anthropic | `claude-sonnet-4-6` |
| Gemini | `gemini-2.0-flash` |
| Groq | `llama-3.3-70b-versatile` |
| Ollama | `llama3.2` (local) |

### Chatbot için .env Dosyası

```bash
# chatbot-service/.env
OPENAI_API_KEY=sk-...
ANTHROPIC_API_KEY=sk-ant-...
GEMINI_API_KEY=AIza...
GROQ_API_KEY=gsk_...
```

En az bir sağlayıcı key'i girilmesi yeterlidir.

---

## Proje Yapısı

```
e-commerce-2026/
├── backend/                  # Spring Boot REST API
│   └── src/main/java/com/datapulse/api/
│       ├── controllers/      # 15 controller (Auth, Order, Corporate, Admin vb.)
│       ├── services/         # İş mantığı
│       ├── entities/         # JPA entity'leri (User, Product, Order, Store vb.)
│       ├── repositories/     # Spring Data JPA repository'leri
│       ├── security/         # JWT filtresi, SecurityConfig
│       └── config/           # DatabaseSeeder (otomatik seed verisi)
├── frontend/                 # Angular 19 SSR uygulaması
│   └── src/app/
│       ├── core/             # Auth, interceptor, guard, layout, servisler
│       ├── features/         # Rol bazlı modüller (catalog, cart, corporate, admin vb.)
│       └── environments/     # environment.ts (dev) / environment.prod.ts (prod)
├── chatbot-service/          # Python FastAPI + LangGraph
│   ├── main.py               # API entry point
│   ├── agents/               # LangGraph node'ları
│   └── security/             # RBAC enforcement
└── docker-compose.yml        # Tüm servisleri bir arada çalıştırır
```

---

## Geliştirme Ortamı (Docker Olmadan)

### Backend

```bash
cd backend
./mvnw spring-boot:run        # Çalıştır (localhost:3306'da MySQL gerekir)
./mvnw compile                # Sadece derle
./mvnw test                   # Testleri çalıştır
./mvnw package -DskipTests    # JAR oluştur
```

### Frontend

```bash
cd frontend
npm install
npm start                     # Dev server — http://localhost:4200
npm run build                 # Production build
```

### Chatbot

```bash
cd chatbot-service
pip install -r requirements.txt
uvicorn main:app --reload --port 8000
```

---

## Cloud Deploy

Production ortamı için `frontend/src/environments/environment.prod.ts` dosyasındaki `apiUrl` alanını backend'in gerçek adresiyle güncelleyin:

```typescript
export const environment = {
  production: true,
  apiUrl: 'https://api.yourdomain.com'
};
```

Ardından `npm run build` komutu otomatik olarak production environment'ı kullanır.

> **Üretim öncesi yapılması gerekenler:**
> - `application.properties` içinde `ddl-auto=create` → `validate` veya `update` yapın
> - JWT secret'ı güvenli bir değerle değiştirin
> - Stripe key'i `STRIPE_API_KEY` environment variable ile geçin

---

## Güvenlik Mimarisi

- **JWT**: HttpOnly cookie ile saklanır (24 saat geçerli), `Authorization` header kullanılmaz
- **RBAC**: İki katmanlı — URL seviyesi (`SecurityConfig`) + metot seviyesi (`@PreAuthorize`)
- **Veri izolasyonu**: Her sorgu JWT'den alınan `user_id` / `store_id` ile filtrelenir
- **CORS**: Yalnızca `http://localhost:4200` (production'da güncellenmesi gerekir)
- **Dosya yükleme**: Maks. 10 MB/dosya, `./uploads/` dizinine kaydedilir
