---
name: build-admin-feature
description: Proje dokümanındaki (PDF) "Admin" rolü yetkilerine uygun olarak; sistem yönetimi, mağaza onayı, kullanıcı yönetimi gibi özellikleri yetki korumalı (RBAC) şekilde geliştirir.
trigger: "/admin"
---

# Görev: Admin Domain'i İçin Güvenli Full-Stack Geliştirme

Kullanıcı `/admin [Özellik Açıklaması]` komutunu kullandığında, bu isteği kesinlikle **ADMIN** yetki sınırları içerisinde ve aşağıdaki adımlara harfiyen uyarak geliştir.

## Adım 0: Dokümantasyon Analizi (ZORUNLU)
1. Kod yazmaya başlamadan önce projedeki `docs/project-requirements.md` dosyasını oku.
2. Senden istenen özelliğin (feature) bu dokümandaki **Admin Rolü Sınırları** içinde olup olmadığını kontrol et. Sınırlara uyuyorsa Adım 1'e geç.

## Adım 1: Güvenlik ve Backend (Spring Boot)
1. Bu özelliğin gerçekten Admin yetkisi gerektirdiğini doğrula (Kullanıcıları banlama, mağaza onaylama, global istatistikleri görme vb.).
2. `my-springboot-mcp` aracını kullanarak ilgili Controller'ı (örn: `AdminController` veya ilgili modül) bul veya oluştur.
3. **KRİTİK KURAL:** Yazdığın her yeni endpoint'e mutlaka Admin yetkisi gerektiren Spring Security notasyonunu (örneğin `@PreAuthorize("hasRole('ADMIN')")`) ekle.
4. Yanıtlar için her zaman DTO kullan (Örn: `UserManagementDto`). Entity sınıflarını doğrudan dışarı açma.

## Adım 2: Frontend Entegrasyonu (Angular)
1. `my-angular-mcp` aracını kullanarak işlemleri SADECE `src/app/features/admin` modülü ve altındaki klasörlerde gerçekleştir. Diğer modüllere (individual, corporate) dokunma.
2. Yeni UI bileşenlerini yazarken Tailwind CSS kullan ve state yönetimi için Angular Signals (`signal`, `computed`) tercih et.
3. API ile haberleşecek servis çağrılarını yaz. HTTP isteklerinin `core/interceptors/auth.interceptor.ts` üzerinden JWT token'ı ile çıkacağından emin ol.
4. Yeni oluşturduğun sayfaların `admin-routing-module.ts` içinde `AuthGuard` ve `RoleGuard` ile korunduğundan emin ol.

## Adım 3: Güvenlik Raporu ve Özet
İşlemi bitirdiğinde bana bir Türkçe özet ver. Bu özette özellikle **endpoint'leri nasıl koruduğunu** ve **frontend rotalarını dış erişime nasıl kapattığını** açıkça belirt.
