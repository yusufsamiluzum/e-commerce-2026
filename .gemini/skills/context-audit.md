---
name: context-audit
description: Asistanın o anki hafızasında tuttuğu kuralları, proje durumunu ve odak noktasını bir teşhis raporu (diagnostic report) olarak sunar.
trigger: "/context"
---

# Görev: Sistem Bağlamı (Context) ve Hafıza Denetimi

Kullanıcı `/context` komutunu girdiğinde, hiçbir kod üretme. Sadece şu anki hafızanı, projenin mevcut durumunu ve aktif olarak uyguladığı kuralları aşağıdaki formatta raporla.

## 1. Aktif Anayasa ve Kurallar
* `docs/project-requirements.md` (RBAC sınırları) dosyasını hatırlıyor musun? En kritik kuralı tek cümleyle özetle.
* `AI_RULES.md` (Frontend ve Backend standartları) dosyasını hatırlıyor musun? Hangi teknolojileri (Örn: Signals, DTO) kullanman gerektiğini kısaca belirt.

## 2. Mevcut Odak (Current Focus)
* Şu an üzerinde çalıştığımız veya en son konuştuğumuz özellik/dosya nedir?
* Hafızanda bekleyen, yarım kalmış bir görev (Phase) var mı?

## 3. Sistem Uyarıları (System Diagnostics)
* Eğer sohbet çok uzadıysa ve Context Window (Bağlam Penceresi) dolmaya başladıysa, kullanıcıya "Hafızam dolmak üzere, temiz bir sohbet (New Chat) açmanız performansı artırabilir" şeklinde bir uyarı ver.
