# Ember — Claude Code Handoff Brief

> Bu dosya, Claude Design'da kurulan Ember marka tasarım sistemini Angular projeme uygulamak için Claude Code'a verilecek brief'tir.

---

## 🎯 Görev

Mevcut Angular 18+ / Tailwind CSS v4 e-ticaret projemin tüm sayfalarını **Ember** marka tasarım sistemine göre yenilemek. Backend ve fonksiyonlar çalışıyor, sadece UI yenilenecek. Hiçbir mevcut özellik bozulmayacak, çalışmayan butonlar/linkler oluşmayacak.

---

## 📁 Sana Verdiğim Referanslar

`design-references/` klasöründe:
- `01-individual-header-and-home.html` — Claude Design'da tasarlanmış INDIVIDUAL header + hero + KPI özeti. **Bu dosyayı oku, tasarım dilini bundan çıkar.**

Bu tek dosyada şunlar var ve tüm projeye yayılacak:
- ember header yapısı (logo, kategoriler dropdown, arama, AI/Hesap/Sepet butonları)
- Krem (#FEF7ED) + beyaz kart düzeni
- "Sıcak fırsatlar" hero pattern (büyük başlık + alt metin + CTA + dekoratif görsel)
- KPI kartları stili ("Bu ayki özetin": Bu ay harcama, Sipariş, Tasarruf)
- Buton, link, breadcrumb gibi atomik bileşenler

---

## 🎨 Tasarım Sistemi (Ember Design System)

### Marka
- **İsim:** ember (her zaman küçük harfle)
- **Logo:** Mercan-kırmızı gradient kare (rounded-lg) + içinde alev ikonu

### Renk Paleti

| Amaç | Hex | Tailwind |
|------|-----|----------|
| Ana aksan | `#F97316` | `orange-500` |
| Logo gradient | `#F97316 → #DC2626` | `from-orange-500 to-red-600` |
| İkincil | `#F59E0B` | `amber-500` |
| Pozitif (büyüme, başarı) | `#65A30D` | `lime-600` |
| Hata / iptal | `#DC2626` | `red-600` |
| Metin (ana) | `#1C1917` | `stone-900` |
| Metin (ikincil) | `#78716C` | `stone-500` |
| Sayfa zemini | `#FEF7ED` | `orange-50` |
| Kart zemini | `#FFFFFF` | `white` |
| Border | `#E7E5E4` | `stone-200` |

### Tipografi
- **Font:** Inter (variable, hem upright hem italic — her ikisi de yüklendi)
- Sayfa başlığı: 28px / weight 500
- Bölüm başlığı: 20px / weight 500
- Alt başlık: 16px / weight 500
- Gövde: 14px / weight 400
- Yardımcı: 12px / weight 400

### Şekiller & Spacing
- Kartlar: `rounded-xl` (12px)
- Butonlar/inputlar: `rounded-lg` (8px)
- Rozetler: `rounded-full`
- Border: `border-stone-200` (her yerde tutarlı, 0.5px hissi)
- Gölge: yok ya da çok hafif — modern düz görünüm

---

## 🧩 Üç Rol — Tek Dil, Üç Ton

Aynı font, aynı border-radius, aynı butonlar — tonlar farklı:

- **INDIVIDUAL** (müşteri): Beyaz zemin + krem alt şeritler. Sıcak, davetkâr.
- **CORPORATE** (mağaza sahibi): Beyaz kompakt panel + sol sidebar (krem ya da beyaz). Veri yoğun, profesyonel.
- **ADMIN** (platform operatörü): Sıcak siyah `#1C1917` header + sol koyu sidebar. Mercan logo üzerinde parlar, kırmızı admin avatar.

---

## 🗺️ Sayfa Listesi (uygulanacak)

### INDIVIDUAL
- `/catalog` — Ürün listeleme (sol filtre, üst sıralama, 4 kolon grid, sayfalama)
- `/catalog/:id` — Ürün detay (galeri + birincil görsel, fiyat, stok, mağaza, yorumlar)
- `/cart` — Sepet
- `/checkout` — Adres + kargo + Stripe/PayPal ödeme
- `/checkout/success` — Sipariş onayı
- `/auth/login`, `/auth/register` — Bireysel auth
- `/auth/admin-login` — Admin auth
- `/individual/profile/*` — 8 sekme:
  - `user-profile`, `profile-management`, `user-orders`, `purchase-history`,
    `my-reviews`, `my-preferences`, `user-refunds`, `spending-analysis`

### CORPORATE (sol sidebar navigasyon)
- `corporate/store-setup`, `corporate/profile`
- `corporate/dashboard` — KPI kartları + grafikler
- `corporate/catalog` — Ürün yönetimi (çoklu görsel, sürükle-bırak, deactivate/reactivate)
- `corporate/inventory` — Stok + düşük stok uyarıları
- `corporate/orders` — Sipariş durumu (PENDING → PROCESSING → SHIPPED → DELIVERED)
- `corporate/refunds` — İade talepleri
- `corporate/analytics` — Satış grafiği, en çok satanlar, müşteri segmentasyonu (RFM)
- `corporate/customers` — Segmentasyonlu müşteri listesi
- `corporate/reviews` — Yorum + yanıt yazma

### ADMIN (sol koyu sidebar navigasyon)
- `admin/dashboard` — Platform geneli + gelir trendi grafiği
- `admin/users` — 3 rol filtreli kullanıcı listesi
- `admin/stores` — Onay bekleyen + aktif + askıya alınmış + karşılaştırma
- `admin/orders` — Platform geneli + admin override
- `admin/refunds`, `admin/reviews`, `admin/categories`
- `admin/audit-logs` — Denetim logları
- `admin/analytics`, `admin/config`
- CSV export butonları (kullanıcılar, siparişler, mağazalar)

### Ortak
- `/ai-assistant` — AI sohbet (chat baloncukları + tablo render + grafik render + provider seçici)

---

## ⚙️ Önemli Bileşenler

- **Durum rozetleri:** Pending (amber), Processing (mavi-amber), Shipped (mor-mercan), Delivered (yeşil/lime), Cancelled (kırmızı), Onay bekliyor (gri)
- **KPI kartları:** beyaz arka plan, küçük gri label, 24px/500 sayı, altında trend oku (yeşil ↑ / kırmızı ↓)
- **Empty state:** sıcak ikonlar + açıklayıcı metin + CTA buton
- **Skeleton loaders:** sayfa yüklenirken
- **Toast bildirimleri:** her aksiyon sonrası
- **Modal/dialog:** silme + durum değişikliği onayları için

---

## 🔧 Teknik Bağlam

- **Frontend:** Angular 18+ (SSR), Tailwind CSS v4
- **State:** RxJS + Angular Signals
- **Lazy-loaded** feature modülleri
- **Mobile-first** responsive (özellikle INDIVIDUAL akışı)
- **Sadece light mode** — dark mode öncelik değil
- **Backend:** Spring Boot REST + JWT (HttpOnly cookie)
- **DB:** MySQL 8
- **Ödeme:** Stripe + PayPal
- **AI:** Python FastAPI + LangGraph (5 düğümlü)
- **Dosya:** `/uploads` lokal, max 10MB

---

## ✅ Çalışma Sırası (önerim)

### Faz 1 — Tasarım Sistemini Kodlaştır
1. `tailwind.config` dosyasında Ember renklerini tanımla (custom color extension)
2. Inter fontunu projeye ekle (lokal hosting, hem upright hem italic variable)
3. Ortak component'ler oluştur veya günceller:
   - `<ember-button>` — primary, secondary, ghost, danger varyantları
   - `<ember-input>`, `<ember-select>`, `<ember-checkbox>`, `<ember-toggle>`
   - `<ember-badge>` — durum rozetleri
   - `<ember-card>` — beyaz kart container
   - `<ember-kpi-card>` — KPI gösterimi
   - `<ember-empty-state>`, `<ember-skeleton>`, `<ember-toast>`

### Faz 2 — Layout & Navigation
4. **INDIVIDUAL header** — referans HTML'den birebir uyarla
5. **CORPORATE layout** — beyaz sidebar + content area
6. **ADMIN layout** — koyu sidebar + content area
7. **Footer** (her rol için ortak)

### Faz 3 — Sayfaları Uygula (öncelik sırasıyla)
8. **INDIVIDUAL Catalog** — en çok kullanılan sayfa
9. **INDIVIDUAL Ürün detay**
10. **CORPORATE Dashboard** — markanın "veri-odaklı" vaadi
11. **AI Asistan** — ayırt edici özellik
12. **ADMIN Dashboard**
13. **Sepet + Checkout**
14. INDIVIDUAL Profil 8 sekmesi
15. CORPORATE diğer sayfalar (catalog, inventory, orders, refunds, analytics, customers, reviews)
16. ADMIN diğer sayfalar (users, stores, orders, refunds, reviews, categories, audit-logs, analytics, config)
17. Auth sayfaları (login, register, admin-login)

---

## 🚫 Kurallar (sıkı uy)

1. **Mevcut TypeScript mantığını ASLA bozma.** Sadece HTML template ve CSS/Tailwind class'larını değiştir. Service çağrıları, form validation, routing, state yönetimi olduğu gibi kalır.
2. **Çalışmayan buton ASLA olmasın.** Tasarımda bir buton varsa, kodda da gerçek bir aksiyona bağlı olmalı. Yoksa çıkar.
3. **Backend'de olmayan özelliği UI'da gösterme.** Örnek: favori/wishlist yok → kalp ikonu kart üzerinde olmasın.
4. **Tutarlı ol.** Her sayfada aynı buton stili, aynı kart radius, aynı boşluklar.
5. **Önce tasarım sistemi, sonra sayfalar.** Her sayfayı sıfırdan tasarlama — Faz 1'deki ortak bileşenleri kullan.
6. **Dosya başına bir component değişikliği.** Bir sayfayı değiştirirken bana özet ver, onayımı bekle, sonra diğerine geç.

---

## 📌 İlk Komutum

> "design-references/01-individual-header-and-home.html dosyasını oku.
> Sonra projemin tailwind.config dosyasını incele.
> Faz 1 — Adım 1'i yap: tailwind.config'de Ember renk paletini tanımla
> ve Inter fontunu projeye ekle. Önce plan ver, onayımı bekle, sonra uygula."
