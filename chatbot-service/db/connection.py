"""
DB Connection — MySQL bağlantı havuzu ve güvenli sorgu çalıştırma.

GÜVENLİK:
- Sadece SELECT sorgularına izin verilir (DML/DDL bloklanır)
- Hassas sütunlar (password_hash vb.) filtrelenir
- Connection pooling ile performans optimizasyonu
"""

import re
import os

import mysql.connector
from mysql.connector import pooling
from dotenv import load_dotenv

load_dotenv()

# Tehlikeli SQL ifadelerini tespit eden regex
DANGEROUS_SQL_PATTERN = re.compile(
    r"\b(INSERT|UPDATE|DELETE|DROP|ALTER|CREATE|TRUNCATE|GRANT|REVOKE|EXEC|EXECUTE)\b",
    re.IGNORECASE
)

# Hassas sütunlar — sorgularda erişimi engellenen alanlar
SENSITIVE_COLUMNS = {
    "password_hash", "passwordhash", "password",
    "api_key", "apikey",
    "secret_key", "secretkey",
    "jwt_secret"
}

# Hassas sütun regex (SELECT listesinde yakalamak için)
SENSITIVE_COLUMN_PATTERN = re.compile(
    r"\b(" + "|".join(SENSITIVE_COLUMNS) + r")\b",
    re.IGNORECASE
)

# Connection pool yapılandırması
_pool = None


def _get_pool():
    """Lazy-init connection pool."""
    global _pool
    if _pool is None:
        _pool = pooling.MySQLConnectionPool(
            pool_name="chatbot_pool",
            pool_size=5,
            host=os.getenv("DB_HOST", "localhost"),
            port=int(os.getenv("DB_PORT", "3306")),
            database=os.getenv("DB_NAME", "datapulse_db"),
            user=os.getenv("DB_READONLY_USER", os.getenv("DB_USER", "root")),
            password=os.getenv("DB_READONLY_PASSWORD", os.getenv("DB_PASSWORD", "password123")),
            charset="utf8mb4",
            collation="utf8mb4_general_ci",
            autocommit=True
        )
    return _pool


def validate_query(sql: str) -> tuple[bool, str]:
    """
    SQL sorgusunu güvenlik kurallarına göre doğrular.
    Returns: (is_valid, error_message)
    """
    if not sql or not sql.strip():
        return False, "Boş sorgu gönderildi."

    # DML/DDL kontrolü
    if DANGEROUS_SQL_PATTERN.search(sql):
        return False, "Güvenlik ihlali: Sadece SELECT sorgularına izin verilmektedir."

    # SELECT ile başlamalı (WITH CTE'ler de olabilir)
    stripped = sql.strip().upper()
    if not (stripped.startswith("SELECT") or stripped.startswith("WITH")):
        return False, "Güvenlik ihlali: Sorgu SELECT veya WITH ile başlamalıdır."

    # Hassas sütun kontrolü
    if SENSITIVE_COLUMN_PATTERN.search(sql):
        return False, "Güvenlik ihlali: Hassas sütunlara erişim engellendi (password_hash, api_key vb.)."

    # SELECT * kontrolü — hassas tablolarda wildcard engelleme
    sensitive_tables = {"users"}
    select_star_pattern = re.compile(
        r"SELECT\s+\*\s+FROM\s+(" + "|".join(sensitive_tables) + r")\b",
        re.IGNORECASE
    )
    if select_star_pattern.search(sql):
        return False, "Güvenlik ihlali: 'users' tablosunda SELECT * kullanılamaz. Belirli sütunları seçin."

    return True, ""


def execute_readonly_query(sql: str) -> tuple[list[dict] | None, str | None]:
    """
    Güvenli SQL sorgusu çalıştırır.
    Returns: (results_as_list_of_dicts, error_message)
    """
    # Önce güvenlik doğrulaması
    is_valid, error_msg = validate_query(sql)
    if not is_valid:
        return None, error_msg

    conn = None
    cursor = None
    try:
        pool = _get_pool()
        conn = pool.get_connection()
        cursor = conn.cursor(dictionary=True)
        cursor.execute(sql)
        results = cursor.fetchall()

        # Sonuçları serializable hale getir (Decimal, datetime vb.)
        clean_results = []
        for row in results:
            clean_row = {}
            for key, value in row.items():
                if hasattr(value, "__float__"):
                    clean_row[key] = float(value)
                elif hasattr(value, "isoformat"):
                    clean_row[key] = value.isoformat()
                else:
                    clean_row[key] = value
            clean_results.append(clean_row)

        return clean_results, None

    except Exception as e:
        return None, str(e)
    finally:
        if cursor:
            cursor.close()
        if conn:
            conn.close()
