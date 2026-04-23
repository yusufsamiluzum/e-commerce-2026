Backend'i yeniden derle ve başlat. Frontend zaten ng serve ile otomatik güncelleniyor.

## 1. Backend'i durdur
```bash
kill $(cat /tmp/datapulse-backend.pid 2>/dev/null) 2>/dev/null || kill $(lsof -ti:8080) 2>/dev/null
```
Portun serbest kalması için 2 saniye bekle.

## 2. Backend'i yeniden başlat
`/home/yusuf/e-commerce-2026/backend` klasöründe:
```bash
nohup mvn spring-boot:run > /tmp/datapulse-backend.log 2>&1 &
echo $! > /tmp/datapulse-backend.pid
```

## 3. Hazır olmasını bekle
Port 8080'i kontrol et: `curl -s http://localhost:8080/api/products` — 200 dönene kadar 5'er saniye bekle, max 24 deneme (2 dakika).

## 4. Özet
- ✅ Backend yeniden derlendi ve başlatıldı (port 8080)
- ℹ️ Frontend zaten çalışıyor, ng serve otomatik güncelledi
- Log: /tmp/datapulse-backend.log
