# Ember UI Yenileme Planı

## Faz 1 — Tasarım Sistemini Kodlaştır

- [x] **Adım 1:** `styles.scss` — Ember renkleri (`@theme`) + Inter font ✅
- [x] **Adım 2:** Shared component'ler oluştur: ✅
  - `ember-button` (primary / secondary / ghost / danger)
  - `ember-badge` (durum rozetleri)
  - `ember-card`, `ember-kpi-card`
  - `ember-empty-state`, `ember-skeleton`, `ember-toast`
  - `ToastService` (signals tabanlı, providedIn root)

## Faz 2 — Layout & Navigation

- [x] **Adım 3:** INDIVIDUAL header — navbar'ı Ember'e çevir (krem zemin, turuncu logo, kategori bar) ✅
- [x] **Adım 4:** CORPORATE layout — beyaz sol sidebar ✅
- [x] **Adım 5:** ADMIN layout — koyu sol sidebar ✅
- [x] **Adım 6:** Footer ✅

## Faz 3 — Sayfalar (öncelik sırasıyla)

- [x] **Adım 7:** INDIVIDUAL Catalog (`/catalog`) ✅
- [x] **Adım 8:** INDIVIDUAL Ürün detay (`/catalog/:id`) ✅
- [x] **Adım 9:** CORPORATE Dashboard ✅
- [x] **Adım 10:** AI Asistan ✅
- [x] **Adım 11:** ADMIN Dashboard ✅
- [x] **Adım 12:** Sepet + Checkout ✅
- [x] **Adım 13:** INDIVIDUAL Profil (8 sekme) ✅
- [x] **Adım 14:** CORPORATE diğer sayfalar (catalog, inventory, orders, refunds, analytics, customers, reviews)
- [ ] **Adım 15:** ADMIN diğer sayfalar (users, stores, orders, refunds, reviews, categories, audit-logs, analytics, config)
- [ ] **Adım 16:** Auth sayfaları (login, register, admin-login)

## Kurallar

- Her adımda özet verilir, onay alınır, sonra geçilir.
- Mevcut TypeScript mantığı asla bozulmaz — sadece HTML template ve Tailwind class'ları değişir.
- Çalışmayan buton olmaz; backend'de olmayan özellik UI'da gösterilmez.
- Tüm sayfalarda aynı buton stili, kart radius, boşluklar kullanılır.
