# DataPulse Projesi - Copilot Geliştirici Talimatları ve Mimari Standartlar

Bu belge, projenin kesin mimari kurallarını, teknoloji yığınını ve kodlama standartlarını içerir. AI asistanı olarak kod üretirken, refactoring yaparken veya hata ayıklarken BURADAKİ KURALLARA KESİNLİKLE UYMALISIN. Kendi varsayılan eğitim verilerini kullanmak yerine bu projenin güncel bağlamını baz al.

## 💻 1. Teknoloji Yığını ve Kesin Kurallar

- **Frontend:** Angular 17+ (Standalone Components, yeni Control Flow), RxJS, Tailwind CSS v4.
- **Backend:** Java, Spring Boot, Spring Security (JWT), Hibernate/JPA, MySQL.
- **Yasaklı Teknolojiler:** Eski Angular yapıları (`*ngIf`, `*ngFor`, `NgModule`), Bootstrap, saf CSS/SCSS yazımı (Tailwind ile çözülebilen durumlar için).

## 🏗️ 2. Frontend (Angular) Geliştirme Standartları

- **Modern Control Flow Şarttır:** Şablonlarda KESİNLİKLE `*ngIf`, `*ngFor`, `*ngSwitch` KULLANMA. Sadece Angular'ın yeni `@if`, `@for`, `@empty` ve `@switch` bloklarını kullan.
- **Stil ve Tasarım (Tailwind CSS):** Projede Tailwind CSS kullanılmaktadır (`@use 'tailwindcss'`). Tasarımlar için harici SCSS dosyalarına özel sınıflar yazmak yerine Tailwind'in utility sınıflarını (`flex`, `grid`, `animate-pulse`, `text-gray-900` vb.) kullan. Yükleme (loading) durumları için `animate-pulse` ile skeleton loader yapıları kur.
- **Veri Akışı ve RxJS / Signals:** Yeni bileşenler yazarken veya mevcut bileşenleri refactor ederken `Observable` + `async` pipe YERİNE `toSignal()` kullan. Bu yaklaşım flicker önler, double-subscription riskini ortadan kaldırır ve change detection'ı optimize eder.
  ```typescript
  // ✅ DOĞRU — toSignal ile
  profile = toSignal(
    this.userService.getProfile().pipe(catchError(() => of(null))),
    { initialValue: null }
  );

  // ❌ YANLIŞ — async pipe ile
  profile$: Observable<ProfileDto> = this.userService.getProfile();
  // HTML: @if (profile$ | async; as profile) {...}
  ```
  - `initialValue: null` → yükleniyor (skeleton göster)
  - `data` gelince → içerik render
  - Template'de `@if (data() === null)` ile null check yaparak skeleton ve içeriği AYRı bloklarda tut. `@if (data(); as d)` desenini KULLANMA — Angular bu kombinasyonda tip çözümlemesinde hata verir, özellikle `Array` metodlarında (`length`, `@for`) çakışma çıkar.

- **Modüler Klasör Yapısı:** Kodlar `features/` (örn: catalog, cart, checkout) ve `core/` (guards, interceptors, layout) şeklinde ayrılmıştır. İçe aktarmaları (import) buna göre yap.
- **Angular SSR (Server-Side Rendering) ve API Çağrıları:** Servislerde (örn: `HttpClient.get(...)`) istek atarken URL'lerde KESİNLİKLE göreceli (relative) path (ör: `const apiUrl = "/api/users"`) KULLANMA. URL'ler daima MUTLAK (absolute) olmalıdır (`http://localhost:8080/api/...`). SSR sırasında `localhost:4200` üzerinden atılan izinsiz/hatalı rotalar Spring Boot'a ulaşmaz; bu durum `Unexpected token '<', "<!DOCTYPE "... is not valid JSON` gibi sonsuz döngü ve root HTML hataları doğurur.
- **SSR & Yetkili (Auth) Yönlendirmeleri:** Giriş izni ("Cookie/access_token", "localStorage") gerektiren `/auth`, `/individual`, `/corporate`, `/admin`, `/checkout`, `/cart` gibi rotaların `app.routes.server.ts` konfigürasyonunda mutlaka `renderMode: RenderMode.Client` olarak ayarlanmış olmasına DİKKAT ET. SSR Node.js motorunda cookie bulunmadığı için arkada 403 yiyerek "Application bundle generation failed" hatasına ve 500 döngülerine neden olur.

## 🧱 3. Backend (Spring Boot) Geliştirme Standartları

- **Entity Tasarımları ve UI Optimizasyonu:**
  - `User` entity'si Spring Security `UserDetails` arayüzünü implemente eder. Yetki (Role) kontrolleri `RoleType` üzerinden ("ROLE\_" ön ekiyle) yapılır.
  - `Product` entity'si sadece veritabanı kaydı değil, arayüz performansını artırmak için özel alanlar barındırır. Ürün listelerken `originalPrice` (indirim çizik fiyatı), `averageRating`, `reviewCount`, `isFeatured` gibi alanları tekrar hesaplama; doğrudan entity/DTO üzerinden kullan.
  - İlişkiler: `Product` -> `Store` (ManyToOne), `Order` -> `User` & `Store` (ManyToOne), `Order` -> `OrderItem` (OneToMany).
- **Tasarım Desenleri (Design Patterns) - ÇOK ÖNEMLİ:**
  - Kayıt ve Ödeme işlemleri için projede **Strategy Pattern** kullanılmaktadır. Yeni bir ödeme (Stripe, PayPal) veya kayıt (Admin, Corporate, Individual) sistemi eklerken veya düzenlerken basit `if/else` blokları yazma. Mevcut `PaymentStrategy` veya `RegistrationStrategy` interface'lerini implemente eden sınıflar (`...Strategy.java`) oluştur.
- **DTO Mimarisi:** İstemciye (client) kesinlikle `@Entity` sınıflarını döndürme. Her zaman `Request` ve `Response` DTO'ları kullan (örn: `OrderRequest`, `ProductDto`). Nesne oluştururken `Lombok`'un `@Builder` desenini kullan.
- **Bağımlılık Enjeksiyonu:** `@Autowired` (Field injection) KULLANMA. Her zaman Constructor Injection (`@RequiredArgsConstructor` ile) kullan.
- **Hata Yönetimi:** Hataları controller'da try-catch ile yakalamak yerine özel istisnalar (örn: `ResourceNotFoundException`) fırlat ve projedeki `GlobalExceptionHandler`'ın bunu yakalamasına izin ver.
- **Spring Security Rol Kalibrasyonu (403 Hata Önleme):** `@PreAuthorize("hasAnyRole(...)")` parametrelerinde `CUSTOMER_INDIVIDUAL` ya da `USER` gibi uydurma rol isimleri ASLA kullanma. Veritabanında `User` entity'sinin `roleType` özelliğinde `INDIVIDUAL`, `CORPORATE`, `ADMIN` (Enum) tutulur ve Spring Security prefix'i `"ROLE_" + roleType` olacak şekilde eşleştirilir (Örn: `hasAnyRole('INDIVIDUAL', 'CORPORATE')` veya `hasRole('ADMIN')`).
- **JPA & `@Transactional(readOnly = true)`:** Veritabanına yazma/güncelleme/oluşturma esnasında Spring JPA 500 hatası almamak için salt okunur `readOnly = true` bayrağını YALNIZCA Select (`findAll`, `findById` vs.) atılan metotlarda kullan. Eğer içerisinde `.orElseGet(() -> repository.save(...))` şeklinde bir "bulamazsan oluştur (Fallback)" mantığı taşıyan metotlar yazarsan (örn: Tercihler veya Profil eksikse), kesinlikle KULLANMA. Yerine sadece `@Transactional` ekle.

## 🎨 4. UI Geçiş Animasyonları ve UX Standartları

- **Route Geçişleri — View Transitions API:** `app.config.ts` içinde `provideRouter(routes, withViewTransitions())` aktiftir. `styles.scss` içindeki `::view-transition-old/new` kurallarına DOKUNMA; yanlış yapılandırma kullanıcıya kötü deneyim yaşatır.
  - **Karanlık ekran (dark flash) anti-pattern:** `::view-transition-old(root)` üzerine `opacity: 0` animasyonu EKLEME. Eski sayfa görünür kalmalı (`animation: none`), yeni sayfa üstüne fade-in yapmalıdır.
  - **Çifte translateY anti-pattern:** `::view-transition-new` + `.profile-main > *` gibi birden fazla katmanda `translateY` tanımlarsan bunlar birikerek "aşağı çekilme" hissi yaratır. Sadece bir animasyon katmanında `translateY` kullan, diğerinde sadece `opacity`.
  - Doğru konfigürasyon şablonu:
    ```scss
    ::view-transition-old(root) { animation: none; }
    ::view-transition-new(root) { animation: vt-fade-in 180ms ease-out both; }
    @keyframes vt-fade-in { from { opacity: 0; } to { opacity: 1; } }

    .profile-main > * {
      animation: profile-enter 0.2s ease-out both;
    }
    @keyframes profile-enter {
      from { opacity: 0; transform: translateY(4px); }
      to   { opacity: 1; transform: translateY(0); }
    }
    ```
- **SSR Hydration Flicker:** `provideClientHydration(withEventReplay())` Angular 17+'da HTTP Transfer Cache'i varsayılan olarak aktif eder — `withHttpTransferCache()` diye bir fonksiyon YOKTUR ekleme. Backend'e erişim gerektiren sayfaları `app.routes.server.ts`'de `RenderMode.Client` olarak işaretle.
- **Index.html Boot Flash:** `body { background: #0a0a0f }` ve `app-root:empty` CSS ile Angular yüklenene kadar boş beyaz ekran önlenir. Bu tanımları `src/index.html` içindeki `<style>` bloğunda tut.

## 🗃️ 5. Ürün Görseli (ProductImage) Mimarisi

- `ProductImage` entity'si `Product` ile `@OneToMany` ilişkisindedir (`cascade = ALL, orphanRemoval = true`).
- `isPrimary = true` olan görsel otomatik olarak `Product.imageUrl` alanıyla senkronize edilir (`ProductImageService.setPrimary`, `deleteImage` metodları).
- Görseller `/uploads/` dizininde UUID isimli olarak saklanır. `WebMvcConfig` ile `/uploads/**` → `./uploads/` olarak serve edilir; `SecurityConfig`'de bu path `permitAll()` ile açıktır.
- Frontend `Product` modelinde `images?: ProductImage[]` alanı mevcuttur. Ürün detay sayfasında thumbnail şeridi yalnızca `images.length > 1` olduğunda gösterilir.
- `CORPORATE` kullanıcılar yalnızca kendi mağazalarının ürünlerine görsel yükleyebilir (ownership check `ProductImageService.checkOwnership` içinde yapılır: `store.getOwner().getId()`).

## 🤖 6. AI Davranış ve Yanıt Kuralları

1. **Halüsinasyon Önleyici:** Bilmediğin bir sınıf, kütüphane veya veritabanı alanı uydurma. İstediğin bir veri eksikse, bunu önce arayüzden veya DTO'dan kontrol et.
2. **Dil:** Açıklayıcı metinleri, yorum satırlarını ve dokümantasyonu Türkçe yaz. Değişken, sınıf, metot ve dosya isimlerini kesinlikle İngilizce yaz (camelCase veya PascalCase standartlarına uyarak).
3. **Güvenlik:** API endpoint'lerini yazarken Spring Security bağlamını (`JwtAuthenticationFilter`) unutma ve rollere (`ROLE_ADMIN`, `ROLE_INDIVIDUAL`, `ROLE_CORPORATE`) dikkat ederek kurgula.
4. **Entity Alan Adlarını Doğrula:** Spring JPA entity sınıflarında bir alan adı kullanmadan önce (`getUser()`, `getStore()` vb.) ilgili entity dosyasını kontrol et. Örn: `Store` entity'sinde mağaza sahibi alanı `owner`'dır → `store.getOwner()`, `store.getUser()` DEĞİL.
