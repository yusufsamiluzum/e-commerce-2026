# DataPulse — Proje Tanıtımı

> Bu doküman, **DataPulse** platformunun tasarım çalışması için hazırlanmış kapsamlı tanıtımıdır. UI henüz tüm özelliklerini yansıtacak olgunluğa ulaşmadığı için içerik **backend yetenekleri ve sayfa rotaları** baz alınarak yazılmıştır.

---

## 1. Platform Nedir?

**DataPulse**, çok kiracılı (multi-tenant) bir B2C e-ticaret platformudur. Klasik bir mağaza/alışveriş deneyiminin üzerine iki temel farklılaştırıcı özellik eklenmiştir:

1. **Yerleşik analitik altyapısı** — hem mağaza sahipleri hem de platform yöneticileri için satış, müşteri segmentasyonu, stok ve gelir trendi panelleri.
2. **Doğal dilde sorgu yapan AI asistanı (Text2SQL chatbot)** — kullanıcı rolüne göre yetkilendirilmiş, salt-okunur SQL sorgularıyla anlık veri analizi yapan LangGraph tabanlı bir agent.

Platform üç farklı kullanıcı rolüne hizmet verir; her rolün UI modülü ve API uç-noktaları **tamamen birbirinden ayrıdır**:

| Rol | Tanım | Ana Görevi |
|------|-------|------------|
| **INDIVIDUAL** | Bireysel müşteri | Ürün keşfi, satın alma, iade, yorum |
| **CORPORATE** | Mağaza sahibi (kurumsal satıcı) | Kendi mağazasını, ürünlerini, stoklarını, siparişlerini ve analitiğini yönetir |
| **ADMIN** | Platform operatörü | Tüm platformu yönetir; kullanıcı/mağaza onayı, kategori, denetim, raporlama |

---

## 2. Üst Düzey Mimari

- **Frontend:** Angular 18+ (SSR), Tailwind CSS v4, RxJS + Angular Signals, lazy-loaded feature modülleri.
- **Backend:** Spring Boot REST API, JWT (HttpOnly cookie ile), Spring Security RBAC, JPA/Hibernate.
- **Veritabanı:** MySQL 8.
- **Ödeme:** Stripe SDK + PayPal entegrasyonu.
- **AI Asistanı:** Python FastAPI + LangGraph 5 düğümlü state machine (Guardrail → SQL Agent → Error Agent → Analysis Agent → Viz Agent).
- **Dosya Yükleme:** Yerel `/uploads` dizini, `/uploads/**` üzerinden public servis (max 10 MB/dosya).

### Marka Kimliği İpuçları (Tasarım için)
- **Ad:** sen belirle.
- **Vurgu:** Veriyle güçlendirilmiş alışveriş; kuru bir e-ticaret değil, içgörü sunan bir platform.
- **Rol ayrımı görsel olarak hissedilmeli:** Müşteri arayüzü sıcak/davetkâr, kurumsal panel çalışkan/profesyonel, admin paneli analitik/güçlü olmalı.

---

## 3. INDIVIDUAL (Müşteri) Deneyimi

### 3.1 Ziyaretçi & Auth Akışı
- `/auth/login` — Bireysel giriş
- `/auth/register` — Bireysel kayıt
- `/auth/admin-login` — Admin için ayrı giriş ekranı
- Kayıt sırasında bireysel ve kurumsal akışlar farklı endpointlere düşer (`/api/auth/register/individual`, `/api/auth/register/corporate`).

### 3.2 Katalog & Keşif (`/catalog`)
- **Ürün listesi sayfası** — kategori ağacında gezinme, filtreleme (fiyat, kategori, mağaza, puan vb.), sıralama, sayfalama.
- **Ürün detay sayfası** — galeri (çoklu görsel + birincil görsel işareti), fiyat, stok durumu, mağaza bilgisi, yorumlar bölümü.
- **Kategori ağacı** — hiyerarşik (parent/child) gösterim. Backend hem `tree` hem `flat` formatında sunabiliyor.
- **Ürün kartı** — listede tekrarlayan birim; tasarımı ana keşif deneyimini belirler.
- **Yorumlar bileşeni** — yıldız puanı, yorum metni, mağaza yanıtı (varsa).

### 3.3 Sepet & Ödeme (`/cart`, `/checkout`)
- **Sepet sayfası** — adet güncelleme, satır silme, ara toplam.
- **Checkout sayfası** — adres, kargo bilgisi, ödeme seçimi.
- **Ödeme bileşenleri:** Stripe ve PayPal için ayrı bileşenler.
- **Başarı sayfası** — sipariş onayı.

### 3.4 Kullanıcı Profili (`/individual/profile`)
Tek bir profil layout'u içinde sekmeli yapı:

| Sayfa | Amacı |
|-------|--------|
| `user-profile` | Profil görünümü (özet) |
| `profile-management` | Bilgileri düzenleme |
| `user-orders` | Aktif & geçmiş siparişler, sipariş iptali |
| `purchase-history` | Detaylı satın alma kayıtları |
| `my-reviews` | Bıraktığım yorumlar |
| `my-preferences` | Kullanıcı tercihleri (bildirim, tema vb.) |
| `user-refunds` | İade talepleri ve durumları |
| `spending-analysis` | **Kullanıcının kendi harcama analitiği** (kategori bazlı, zaman bazlı) |

> "spending-analysis" sayfası, müşteri tarafında bile analitik sunan bir özellik — tasarımda öne çıkarılmaya değer.

### 3.5 AI Asistan (`/ai-assistant`)
Tüm girişli kullanıcılar erişebilir. INDIVIDUAL kullanıcı doğal dilde sorabilir:
- *"Geçen ay en çok hangi kategoride harcadım?"*
- *"Bekleyen iade taleplerim neler?"*

Asistan kullanıcı rolüne göre veri kapsamını otomatik kısıtlar.

---

## 4. CORPORATE (Mağaza Sahibi) Deneyimi

### 4.1 Mağaza Kurulumu & Profil
- `corporate/store-setup` — kayıt sonrası mağaza oluşturma akışı.
- `corporate/profile` — mağaza bilgilerini güncelleme, logo, açıklama.
- Mağaza durumu (`StoreStatus`) admin onayına tabidir — onay bekleyen durum tasarımda görselleştirilmeli.

### 4.2 Dashboard (`corporate/dashboard`)
Mağazaya özel KPI paneli: toplam satış, sipariş sayısı, dönüşüm, en çok satan ürünler, son siparişler — backend `CorporateAnalyticsService` ve `SalesAnalyticsService` üzerinden tek endpointte (`/api/corporate/dashboard`) sunulur.

### 4.3 Katalog Yönetimi (`corporate/catalog`)
- Ürün listesi (mağazanın kendi ürünleri).
- Yeni ürün ekleme / mevcut ürünü düzenleme.
- **Ürün görselleri:** çoklu yükleme, sürükle-bırak sıralama, birincil görsel seçimi (`/api/products/{id}/images/reorder`).
- Yumuşak silme (deactivate) + reaktive etme (`PATCH /products/{id}/reactivate`).

### 4.4 Stok Yönetimi (`corporate/inventory`)
- Tüm ürünlerin anlık stok seviyeleri.
- Hızlı stok güncelleme: `PATCH /api/corporate/inventory/{productId}/stock`.
- Düşük stok uyarıları için görsel imzalar gerekir.

### 4.5 Sipariş Yönetimi (`corporate/orders`)
- Mağazaya gelen siparişler.
- Durum güncelleme akışı: PENDING → PROCESSING → SHIPPED → DELIVERED (OrderStatus enum).
- Her durum geçişi için onay/aksiyon butonları.

### 4.6 İade Yönetimi (`corporate/refunds`)
- Müşterilerden gelen iade talepleri.
- Durum güncelleme (onay/red).
- *Yeni eklenen özellik* — son commit'te kurumsal iade akışı tamamlandı.

### 4.7 Analitik (`corporate/analytics`)
- Satış grafiği (zaman serisi)
- En çok satan ürünler
- Kategori dağılımı
- Müşteri segmentasyonu (RFM benzeri analiz — `CustomerSegmentationService`)

### 4.8 Müşteriler (`corporate/customers`)
Mağazadan alışveriş yapmış müşterilerin segmentasyonlu listesi (sadık müşteri, riskli müşteri vb.).

### 4.9 Yorumlar (`corporate/reviews`)
- Mağazaya gelen tüm yorumlar.
- Yoruma yanıt yazma / yanıtı silme.

---

## 5. ADMIN (Platform Operatörü) Deneyimi

### 5.1 Dashboard (`admin/dashboard`)
- Platform genel durumu: toplam kullanıcı, aktif mağaza, günlük sipariş, toplam ciro.
- **Gelir trendi grafiği** — `/api/admin/dashboard/revenue-trend` endpoint'i ile ayrı bir veri akışı.

### 5.2 Kullanıcı Yönetimi (`admin/users`)
- Tüm kullanıcıların (her üç rol) listesi.
- Filtreleme (role, durum, kayıt tarihi).
- Kullanıcı durumu değiştirme: aktif / pasif / askıya alınmış (`UserStatus`).

### 5.3 Mağaza Yönetimi (`admin/stores`)
- Tüm mağazalar (onay bekleyen / aktif / askıya alınmış).
- Mağaza detay sayfası.
- **Mağaza karşılaştırma** ekranı (`/api/admin/stores/comparison`) — birden çok mağazanın metriklerini yan yana.

### 5.4 Sipariş Yönetimi (`admin/orders`)
- Platform genelinde tüm siparişler.
- Durum müdahalesi (admin override).

### 5.5 İade Yönetimi (`admin/refunds`)
- Tüm iadeler (mağaza ayrımı yapmadan).
- Statü güncelleme.

### 5.6 Yorum Moderasyonu (`admin/reviews`)
- Tüm yorumların listesi.
- Uygunsuz yorum silme.

### 5.7 Kategori Yönetimi (`admin/categories`)
- Hiyerarşik kategori ağacı CRUD.
- Üst kategori seçimi (parent picker).

### 5.8 Sistem Konfigürasyonu (`admin/config`)
- `SystemConfig` tablosundan platform ayarlarını okuma/güncelleme.

### 5.9 Denetim Logları (`admin/audit-logs`)
- Kim, ne zaman, hangi kaydı değiştirdi (`AuditLog` entity).
- Filtreleme: kullanıcı, aksiyon tipi, tarih aralığı.

### 5.10 Analitik (`admin/analytics`)
- Platform geneli analitik — tüm mağazaların toplu görünümü.

### 5.11 Veri Dışa Aktarma
Admin tarafında üç adet CSV export endpoint'i mevcut:
- `/api/admin/export/users`
- `/api/admin/export/orders`
- `/api/admin/export/stores`

UI'da "Dışa Aktar" butonları olmalı.

---

## 6. AI Asistan — Tüm Roller İçin Ortak Sayfa

### `/ai-assistant`
- **Sohbet arayüzü** — kullanıcı doğal dilde soru yazar.
- Backend chatbot servisini (`/api/chat/ask`) çağırır.
- LangGraph pipeline:
  1. **Guardrail** — zararlı/yetkisiz istek kontrolü
  2. **SQL Agent** — Text2SQL üretimi
  3. **Error Agent** — hatalı SQL'i max 3 kez düzeltir
  4. **Analysis Agent** — sonuçları yorumlar
  5. **Viz Agent** — uygunsa grafik önerir
- Çoklu LLM sağlayıcı: OpenAI, Anthropic, Gemini, Groq, Ollama. UI'da provider seçici olabilir.
- **RBAC otomatik kapsamlanır:** INDIVIDUAL kendi verisini, CORPORATE kendi mağazasını, ADMIN tüm platformu sorgulayabilir.

> Tasarım açısından: chat baloncukları + tablo render + grafik render (recharts/chart.js benzeri) + "düşünme adımları" gösterimi (opsiyonel).

---

## 7. Roller Arası Ortak Bileşenler

- **Üst navigasyon (header):** Rol bazlı dinamik menü; misafir/INDIVIDUAL/CORPORATE/ADMIN için farklı içerik.
- **Footer:** kategori bağlantıları, marka bilgisi.
- **Bildirim/toast sistemi:** her aksiyon sonrası geri bildirim.
- **Modal & confirm dialog'ları:** silme/durum değişikliği onayları.
- **Boş durum (empty state) ekranları:** sepet boş, sipariş yok, sonuç bulunamadı vb.
- **Yükleme iskeletleri (skeleton loaders).**
- **Form bileşenleri:** input, select, file upload, multi-select.

---

## 8. Tasarım İçin Önerilen Vurgular

1. **Üç farklı dünya, tek marka:** INDIVIDUAL/CORPORATE/ADMIN aynı tasarım dilini paylaşmalı ama her birinin "tonu" farklı olmalı.
2. **Veri görselleştirme öne çıkmalı:** Grafikler, KPI kartları, trend göstergeleri tasarımın merkezi olmalı — DataPulse markası bunu vaat ediyor.
3. **AI asistanı ikinci sınıf vatandaş olmamalı:** Ana navigasyondan kolay erişilebilir, davetkâr bir yer almalı.
4. **Onay/durum akışları görsel olmalı:** Mağaza onayı, sipariş durumu, iade durumu için renkli rozetler ve adımlı göstergeler.
5. **Mobile-first düşünmek faydalı** — özellikle INDIVIDUAL akışı için.

---

## 9. Mevcut Sayfaların Hızlı Haritası

```
/                           → /catalog'a yönlendirir
/catalog                    → ürün listesi
/catalog/:id                → ürün detayı
/cart                       → sepet
/checkout                   → ödeme
/checkout/success           → sipariş başarılı
/auth/login | /register     → bireysel auth
/auth/admin-login           → admin auth
/individual/profile/*       → 8 alt sekme (profil, siparişler, iadeler, yorumlar, harcama analizi vb.)
/corporate/dashboard        → mağaza paneli
/corporate/catalog          → ürün yönetimi
/corporate/inventory        → stok
/corporate/orders           → sipariş yönetimi
/corporate/refunds          → iade yönetimi
/corporate/analytics        → analitik
/corporate/customers        → müşteri segmentasyonu
/corporate/reviews          → yorum yönetimi
/corporate/profile          → mağaza profili
/admin/dashboard            → admin paneli
/admin/users                → kullanıcı yönetimi
/admin/stores               → mağaza yönetimi
/admin/orders               → sipariş yönetimi
/admin/refunds              → iade yönetimi
/admin/reviews              → yorum moderasyonu
/admin/categories           → kategori yönetimi
/admin/audit-logs           → denetim logları
/admin/analytics            → platform analitiği
/admin/config               → sistem konfigürasyonu
/ai-assistant               → AI sohbet sayfası
```

---

## 10. Özet (TL;DR)

DataPulse, üç farklı kullanıcı rolü için ayrılmış **veri-odaklı bir e-ticaret platformudur**. Müşterilere zengin keşif ve kişisel harcama analizi; mağaza sahiplerine satış/stok/müşteri içgörüleri; platform yöneticilerine tüm ekosistem üzerinde tam kontrol ve denetim sunar. Doğal dilde veri sorabilen AI asistanı, her üç rolün de kendi yetki kapsamı içinde anlık içgörü almasını sağlar. Tasarım, bu üç ayrı dünyayı tek bir tutarlı marka altında, **veri görselleştirmeyi merkeze koyarak** birleştirmelidir.
