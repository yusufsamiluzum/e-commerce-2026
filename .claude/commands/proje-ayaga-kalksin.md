Projeyi karma modda ayağa kaldır (MySQL Docker, backend ve frontend local) ve Chrome'da aç.

Sırayla şu adımları uygula:

## 1. MySQL'i başlat
```bash
docker-compose up -d db
```
Container healthy olana kadar bekle (docker inspect ile kontrol et, max 10 deneme, 3'er saniye ara).

## 2. Backend'i başlat
`/home/yusuf/e-commerce-2026/backend` klasöründe:
```bash
nohup mvn spring-boot:run > /tmp/datapulse-backend.log 2>&1 &
echo $! > /tmp/datapulse-backend.pid
```

## 3. Frontend'i başlat
`/home/yusuf/e-commerce-2026/frontend` klasöründe:
```bash
nohup ng serve > /tmp/datapulse-frontend.log 2>&1 &
echo $! > /tmp/datapulse-frontend.pid
```

## 4. Hazır olmasını bekle
- Backend için port 8080'i kontrol et: `curl -s http://localhost:8080/api/products` — 200 dönene kadar 5'er saniye bekle, max 24 deneme (2 dakika).
- Frontend için port 4200'ü kontrol et: `curl -s http://localhost:4200` — 200 dönene kadar 5'er saniye bekle, max 12 deneme (1 dakika).

## 5. Chrome'u aç
```bash
google-chrome http://localhost:4200 &
```

## 6. Özet
Kullanıcıya şunu göster:
- ✅ MySQL: Docker (port 3306)
- ✅ Backend: Local (port 8080) — log: /tmp/datapulse-backend.log
- ✅ Frontend: Local (port 4200) — log: /tmp/datapulse-frontend.log
- 🌐 Chrome açıldı: http://localhost:4200
