# DataPulse Projesi - Copilot Geliştirici Talimatları ve Mimari Standartlar

Bu belge, projenin kesin mimari kurallarını, teknoloji yığınını ve kodlama standartlarını içerir. AI asistanı olarak kod üretirken, refactoring yaparken veya hata ayıklarken BURADAKİ KURALLARA KESİNLİKLE UYMALISIN. Kendi varsayılan eğitim verilerini kullanmak yerine bu projenin güncel bağlamını baz al.

## 💻 1. Teknoloji Yığını ve Kesin Kurallar
- **Frontend:** Angular 17+ (Standalone Components, yeni Control Flow), RxJS, Tailwind CSS v4.
- **Backend:** Java, Spring Boot, Spring Security (JWT), Hibernate/JPA, MySQL.
- **Yasaklı Teknolojiler:** Eski Angular yapıları (`*ngIf`, `*ngFor`, `NgModule`), Bootstrap, saf CSS/SCSS yazımı (Tailwind ile çözülebilen durumlar için).

## 🏗️ 2. Frontend (Angular) Geliştirme Standartları
- **Modern Control Flow Şarttır:** Şablonlarda KESİNLİKLE `*ngIf`, `*ngFor`, `*ngSwitch` KULLANMA. Sadece Angular'ın yeni `@if`, `@for`, `@empty` ve `@switch` bloklarını kullan.
- **Stil ve Tasarım (Tailwind CSS):** Projede Tailwind CSS kullanılmaktadır (`@use 'tailwindcss'`). Tasarımlar için harici SCSS dosyalarına özel sınıflar yazmak yerine Tailwind'in utility sınıflarını (`flex`, `grid`, `animate-pulse`, `text-gray-900` vb.) kullan. Yükleme (loading) durumları için `animate-pulse` ile skeleton loader yapıları kur.
- **Veri Akışı ve RxJS:** Bileşenlerde (Component) verileri `.subscribe()` ile yönetmek yerine, mümkün olduğunca `Observable` veya `BehaviorSubject` kullan ve HTML tarafında `async` pipe (`categories$ | async`) ile tüket.
- **Modüler Klasör Yapısı:** Kodlar `features/` (örn: catalog, cart, checkout) ve `core/` (guards, interceptors, layout) şeklinde ayrılmıştır. İçe aktarmaları (import) buna göre yap.

## 🧱 3. Backend (Spring Boot) Geliştirme Standartları
- **Entity Tasarımları ve UI Optimizasyonu:**
  - `User` entity'si Spring Security `UserDetails` arayüzünü implemente eder. Yetki (Role) kontrolleri `RoleType` üzerinden ("ROLE_" ön ekiyle) yapılır.
  - `Product` entity'si sadece veritabanı kaydı değil, arayüz performansını artırmak için özel alanlar barındırır. Ürün listelerken `originalPrice` (indirim çizik fiyatı), `averageRating`, `reviewCount`, `isFeatured` gibi alanları tekrar hesaplama; doğrudan entity/DTO üzerinden kullan.
  - İlişkiler: `Product` -> `Store` (ManyToOne), `Order` -> `User` & `Store` (ManyToOne), `Order` -> `OrderItem` (OneToMany).
- **Tasarım Desenleri (Design Patterns) - ÇOK ÖNEMLİ:**
  - Kayıt ve Ödeme işlemleri için projede **Strategy Pattern** kullanılmaktadır. Yeni bir ödeme (Stripe, PayPal) veya kayıt (Admin, Corporate, Individual) sistemi eklerken veya düzenlerken basit `if/else` blokları yazma. Mevcut `PaymentStrategy` veya `RegistrationStrategy` interface'lerini implemente eden sınıflar (`...Strategy.java`) oluştur.
- **DTO Mimarisi:** İstemciye (client) kesinlikle `@Entity` sınıflarını döndürme. Her zaman `Request` ve `Response` DTO'ları kullan (örn: `OrderRequest`, `ProductDto`). Nesne oluştururken `Lombok`'un `@Builder` desenini kullan.
- **Bağımlılık Enjeksiyonu:** `@Autowired` (Field injection) KULLANMA. Her zaman Constructor Injection (`@RequiredArgsConstructor` ile) kullan.
- **Hata Yönetimi:** Hataları controller'da try-catch ile yakalamak yerine özel istisnalar (örn: `ResourceNotFoundException`) fırlat ve projedeki `GlobalExceptionHandler`'ın bunu yakalamasına izin ver.

## 🤖 4. AI Davranış ve Yanıt Kuralları
1. **Halüsinasyon Önleyici:** Bilmediğin bir sınıf, kütüphane veya veritabanı alanı uydurma. İstediğin bir veri eksikse, bunu önce arayüzden veya DTO'dan kontrol et.
2. **Dil:** Açıklayıcı metinleri, yorum satırlarını ve dokümantasyonu Türkçe yaz. Değişken, sınıf, metot ve dosya isimlerini kesinlikle İngilizce yaz (camelCase veya PascalCase standartlarına uyarak).
3. **Güvenlik:** API endpoint'lerini yazarken Spring Security bağlamını (`JwtAuthenticationFilter`) unutma ve rollere (`ROLE_ADMIN`, `ROLE_CUSTOMER`) dikkat ederek kurgula.
