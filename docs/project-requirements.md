# DataPulse E-Commerce & Analytics Platform - Mimari ve İş Gereksinimleri Dokümanı

Bu doküman, sistemin genel mimarisini, kullanıcı rollerinin kesin yetki sınırlarını ve entegrasyon kurallarını tanımlar. **Yapay zeka asistanları (Agents) herhangi bir kod üretmeden veya mimari karar vermeden önce bu dosyadaki kuralları KESİN OLARAK referans almalıdır.**

## 1. Proje Özeti ve Teknoloji Yığını
Bu proje, Metabase benzeri modern iş zekası özelliklerine sahip, çok kullanıcılı (multi-tenant) bir e-ticaret veri analitiği platformudur. Sisteme "Multi-Agent Text2SQL" doğal dil işleme modülü entegre edilecektir.

* **Backend:** Spring Boot (Java 21, Spring Security JWT, JPA/Hibernate)
* **Frontend:** Angular (SSR, Signals, RxJS, Tailwind CSS)
* **Database:** MySQL / PostgreSQL
* **AI Entegrasyonu:** Multi-Agent Text2SQL Agentic AI (LangGraph ve Chainlit kullanılarak veritabanı sorgularını doğal dilde yanıtlama)

---

## 2. Kullanıcı Rolleri ve Kesin Yetki Sınırları (RBAC)
Sistemde 3 temel rol bulunmaktadır. Katı güvenlik kuralları gereği, bir rolün yetkisindeki bir işlem başka bir role SIZAMAZ. Yeni bir UI veya API geliştirilirken bu sınırlar %100 korunmalıdır.

### 2.1. ADMIN (Sistem Yöneticisi)
En üst düzey yetkiye sahiptir. Sadece global yönetim işlemlerini yapar, mağazaların iç işleyişine karışmaz.
* **Sistem Yönetimi:** Platformun genel ayarlarını ve global konfigürasyonlarını (SystemConfig) yönetir.
* **Mağaza Onay Süreçleri:** Yeni açılan mağazaları (Corporate hesapları) onaylar, askıya alır veya kapatır.
* **Kullanıcı Yönetimi:** Sistemdeki tüm kullanıcıları (Bireysel ve Kurumsal) yönetir, banlar veya yetkilerini düzenler.
* **Platform Analitiği:** Tüm platformun (bütün mağazaların toplamı) genel gelir ve büyüme istatistiklerini görür.
* **Domain (Frontend):** Sadece `src/app/features/admin` modülü altında çalışır.

### 2.2. CORPORATE (Kurumsal Kullanıcı / Mağaza Sahibi)
Sistemi bir "Satıcı" ve "Analist" olarak kullanır. Multi-tenant yapısı gereği **SADECE kendi mağazasına (Store) ait** verileri görebilir ve yönetebilir.
* **Mağaza Yönetimi & Envanter:** Kendi ürünlerini kataloğa ekler, günceller, siler ve stok takibi (Inventory Control) yapar.
* **Sipariş Karşılama (Fulfillment):** Müşterilerin verdiği siparişlerin durumunu günceller ve kargoya verir.
* **Analitik & Müşteri İçgörüsü:** Kendi mağazasına ait "Sales Analytics" (Satış analitiği), gelir raporlama ve "Customer Segmentation" (Müşteri segmentasyonu) verilerini görür.
* **Domain (Frontend):** Sadece `src/app/features/corporate` modülü altında çalışır.

### 2.3. INDIVIDUAL (Bireysel Kullanıcı / Müşteri)
Sistemin standart alışveriş yapan son kullanıcısıdır.
* **Alışveriş Süreci:** Ürün arama (Catalog), sepete ekleme (Cart) ve güvenli ödeme (Checkout).
* **Profil ve Geçmiş:** Kendi profil yönetimini yapar, sadece kendi "Sipariş Geçmişini (Order History)" ve iadelerini (Refunds) görür.
* **Etkileşim:** Satın aldığı ürünlere yorum (Review) yazar.
* **Kişisel Analitik:** Kendi alışveriş alışkanlıkları üzerine "Harcama Analizi (Spending Analysis)" raporunu görür.
* **Domain (Frontend):** Sadece `src/app/features/individual` ve `checkout`, `cart` modülleri altında çalışır.

---

## 3. Güvenlik ve Mimari Prensipler (Asistanlara Direktifler)

1.  **Authorization (Yetkilendirme):** Spring Boot tarafında yazılan tüm Controller endpoint'leri kesinlikle `@PreAuthorize` ile korunmalıdır. Hiçbir endpoint yetki doğrulaması olmadan dışarı açılamaz.
2.  **Veri İzolasyonu (Corporate):** Kurumsal kullanıcılar için yazılan her Repository veya Service sorgusu, mutlaka kullanıcının kendi `storeId` veya `corporateId` parametresini filtre olarak KULLANMAK ZORUNDADIR. Bir satıcının başka bir satıcının siparişini görmesi güvenlik ihlalidir.
3.  **Frontend Yönlendirmesi:** Angular tarafındaki her route, yetkiye uygun Guard (`RoleGuard`, `AuthGuard`) ile korunmalı ve uygun olmayan rol durumunda "Unauthorized" ekranına atılmalıdır.
4.  **Kapsam Dışı Üretim Yasaktır:** Asistandan "Müşterilerin ürün ekleyebileceği bir form yap" gibi bir istek gelirse, Asistan bu dokümanı referans göstererek işlemi REDDETMELİ ve "Individual kullanıcıların ürün ekleme yetkisi yoktur" diyerek güvenlik uyarısı vermelidir.
