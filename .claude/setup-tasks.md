# Claude Code Setup Tasks

## Tamamlananlar
- [x] `CLAUDE.md` oluşturuldu (`/init` ile)

---

## Yapılacaklar

### MCP Servers
- [x] **mcp-server-mysql** — DB'yi doğrudan sorgulayabileyim (migration, veri analizi için)
  ```bash
  npm install -g @modelcontextprotocol/server-mysql
  # claude mcp add mysql -- npx @modelcontextprotocol/server-mysql mysql://root:password123@localhost:3306/datapulse_db
  ```
- [x] **mcp-server-docker** — Container logları ve durumlarını okuyabileyim
  ```bash
  # claude mcp add docker -- docker-mcp
  ```
- [ ] **@modelcontextprotocol/server-github** — PR açma, issue takibi
  ```bash
  # claude mcp add github -- npx @modelcontextprotocol/server-github
  # GITHUB_PERSONAL_ACCESS_TOKEN gerektirir
  ```

### İzin Ayarları (Permission Allowlist)
- [ ] `/fewer-permission-prompts` skill'ini çalıştır — sık kullandığım araçlar için izin sorularını azaltır
  - Hedef komutlar: `mvn`, `ng`, `docker-compose`, `git log`, `git diff`, `grep`, `find`

### Hooks
- [ ] Dosya değişince otomatik `git diff --stat` göster (ne değiştiğini takip etmek için)
- [ ] Backend Java dosyası değişince `mvn compile` çalıştır (hata erken yakalamak için)
  - `/update-config` skill'i ile yapılandırılabilir

---

## Notlar
- MCP server'ları eklemek için Docker servisleri çalışıyor olmalı
- MySQL MCP için `datapulse_db` bağlantısı: `mysql://root:password123@localhost:3306/datapulse_db`
- Hook'lar `.claude/settings.json` içine yazılır
