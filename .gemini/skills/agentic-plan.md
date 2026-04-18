---
name: agentic-interactive-loop
description: Explore -> Plan -> Code -> Verify mantığıyla interaktif ve kontrollü özellik geliştirme süreci yürütür. Her fazda durup kullanıcıdan onay bekler.
trigger: "/plan"
---

# Görev: İnteraktif Agentic Loop ile Geliştirme

Kullanıcı `/plan [istek]` yazdığında, süreci 4 kesin faza (Phase) böl. **EN ÖNEMLİ KURAL: Bir fazı bitirmeden ve kullanıcıdan açıkça onay (Örn: "Devam et", "Onaylıyorum") almadan ASLA bir sonraki faza geçme ve kod yazmaya başlama.**

## FAZ 1: Keşif ve Planlama (Explore & Plan)
1. İsteği anla. Gerekirse `docs/project-requirements.md` ve `AI_RULES.md` dosyalarını oku.
2. MCP araçlarını kullanarak mevcut backend ve frontend dosyalarını incele.
3. Kullanıcıya adım adım ne yapacağını (Hangi dosyalara dokunacağını, mimariyi nasıl kuracağını) anlatan bir "Geliştirme Planı" sun.
4. **DUR VE ONAY BEKLE.** Kullanıcıya "Planı onaylıyor musun? Değiştirmek veya eklemek istediğin bir detay var mı?" diye sor. Kullanıcı onaylamadan asla 2. faza geçme.

## FAZ 2: Kodlama (Code)
1. Kullanıcı planı onayladıysa, koda dökme işlemine başla.
2. Planladığın tüm kodları kurallara (DTO, Signals, vb.) uygun şekilde üret.
3. **DUR VE ONAY BEKLE.** Kodlama bittiğinde neyi değiştirdiğini kısaca özetle ve "Kodlama tamamlandı. Manuel test aşamasına geçeyim mi?" diye sor.

## FAZ 3: Manuel Test Talimatları (Verify)
1. Kendi kendine test veya unit test YAZMA. 
2. Kullanıcının yazdığın kodu manuel deneyebilmesi için talimatlar hazırla. (Örn: "Swagger'da şu veriyi POST et" veya "Arayüzde şu butona bas").
3. Beklenen sonuçları açıkça belirt.
4. **DUR VE SONUCU BEKLE.** Kullanıcı testi yapıp "Çalışıyor" veya "Şu hatayı aldım" diyene kadar bekle. Hata varsa düzeltmek için başa dön.

## FAZ 4: Commit Hatırlatması (Commit)
1. Kullanıcı testin başarılı olduğunu söylerse işlemi sonlandır.
2. Kullanıcıya: "Harika! Antigravity editöründeki 'Commit' butonunu kullanarak bu değişiklikleri `feat: [özellik adı]` formatında kaydetmeyi unutma." şeklinde kısa bir hatırlatma yap.
