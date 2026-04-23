Projeyi durdur: backend, frontend ve MySQL'i kapat.

Sırayla şu adımları uygula:

## 1. Frontend'i durdur
```bash
kill $(cat /tmp/datapulse-frontend.pid 2>/dev/null) 2>/dev/null || kill $(lsof -ti:4200) 2>/dev/null
rm -f /tmp/datapulse-frontend.pid
```

## 2. Backend'i durdur
```bash
kill $(cat /tmp/datapulse-backend.pid 2>/dev/null) 2>/dev/null || kill $(lsof -ti:8080) 2>/dev/null
rm -f /tmp/datapulse-backend.pid
```

## 3. MySQL'i durdur
```bash
docker-compose stop db
```

## 4. Özet
Kullanıcıya şunu göster:
- ⏹ Frontend durduruldu (port 4200 serbest)
- ⏹ Backend durduruldu (port 8080 serbest)
- ⏹ MySQL durduruldu (port 3306 serbest)

Not: Veritabanı verileri `db_data` volume'unda korunuyor, kayıp yok.
