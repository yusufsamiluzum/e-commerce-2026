---
name: create-fullstack-feature
description: Verilen bir veritabanı tablosu veya ihtiyaç için Spring Boot backend ve Angular frontend kodlarını baştan sona eksiksiz üretir.
trigger: "/feature"
---

# Görev: Full-Stack Özellik Geliştirme

Kullanıcı senden `/feature [Özellik Adı]` komutuyla yeni bir özellik istediğinde, adım adım aşağıdaki iş akışını harfiyen uygula. Adımları atlama.

## Adım 1: Backend Analizi ve Üretimi (Spring Boot)
1. `my-springboot-mcp` aracını kullanarak `entities` klasörüne bak. Kullanıcının istediği özelliğe ait bir Entity var mı kontrol et.
2. Yoksa, Java 21 ve JPA standartlarına uygun bir Entity oluştur.
3. Bu Entity için sadece veri transferinde kullanılacak Request ve Response DTO'larını yaz.
4. Repository, Service (Interface ve Impl) ve en son Controller katmanlarını oluştur. Controller'ı yazarken `AI_RULES.md` kurallarına uyduğundan emin ol.

## Adım 2: Frontend Analizi ve Üretimi (Angular)
1. `my-angular-mcp` aracını kullanarak Angular projesindeki `core/services` klasörünü kontrol et.
2. Backend'de oluşturduğun Controller'ın endpoint'lerini tüketecek bir `[isim].service.ts` yaz. (Kurallardaki gibi RxJS pipe'larını kullan).
3. Gelen DTO ile %100 eşleşen bir TypeScript modeli (`[isim].ts`) oluştur.

## Adım 3: Raporlama
İşlemi bitirdiğinde, bana hangi dosyaları oluşturduğunu/güncellediğini ve sistemin genel yapısının nasıl bağlandığını açıklayan kısa bir Türkçe özet sun.
