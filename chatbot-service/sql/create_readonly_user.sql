-- ============================================================
-- DataPulse Chatbot — Read-Only MySQL Kullanıcı Oluşturma
-- ============================================================
-- Bu script, chatbot servisinin veritabanına YALNIZCA okuma
-- yetkisiyle erişmesini sağlar. LLM tarafından üretilen SQL'in
-- INSERT, UPDATE, DELETE gibi tehlikeli işlemleri çalıştırması
-- veritabanı seviyesinde engellenir.
--
-- KULLANIM:
--   mysql -u root -p < chatbot-service/sql/create_readonly_user.sql
-- ============================================================

-- 1. Read-Only kullanıcı oluştur
CREATE USER IF NOT EXISTS 'chatbot_readonly'@'%' 
  IDENTIFIED BY 'chatbot_secure_pass';

-- 2. Sadece SELECT yetkisi ver
GRANT SELECT ON datapulse_db.* TO 'chatbot_readonly'@'%';

-- 3. Hassas tablolara erişimi kısıtla (opsiyonel — ek güvenlik katmanı)
-- Not: Uygulama seviyesinde de password_hash sütunu engelleniyor,
-- ancak DB seviyesinde de VIEW ile filtrelemek mümkündür:
--
-- CREATE VIEW datapulse_db.v_users_safe AS
--   SELECT id, full_name, email, role_type, gender, status, created_at
--   FROM datapulse_db.users;
-- GRANT SELECT ON datapulse_db.v_users_safe TO 'chatbot_readonly'@'%';
-- REVOKE SELECT ON datapulse_db.users FROM 'chatbot_readonly'@'%';

-- 4. Yetkileri uygula
FLUSH PRIVILEGES;

-- Doğrulama sorgusu
SHOW GRANTS FOR 'chatbot_readonly'@'%';
