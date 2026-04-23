"""
RBAC Enforcement — SQL AST ile rol bazlı veri izolasyonunu doğrular.

GÜVENLİK PRENSİBİ: LLM'in ürettiği SQL'e güvenilmez.
Bu modül, üretilen SQL'i parse ederek RBAC kurallarının uygulandığını doğrular.
Kurallar ihlal edilirse sorgu çalıştırılmaz.
"""

import re

import sqlparse


def enforce_rbac(sql: str, user_role: str, user_id: str, store_id: str | None) -> tuple[str, str | None]:
    """
    SQL sorgusuna RBAC kurallarını backend seviyesinde uygular.
    LLM WHERE clause eklemeyi unutsa bile, burada zorunlu kılınır.

    Returns: (modified_sql, error_message)
    - error_message None ise sorgu güvenli
    - error_message varsa sorgu çalıştırılMAZ
    """
    if not sql or not sql.strip():
        return sql, "Boş SQL sorgusu."

    # ADMIN → kısıtlama yok
    if user_role == "ADMIN":
        return sql, None

    # SQL'i parse et
    parsed = sqlparse.parse(sql)
    if not parsed:
        return sql, "SQL parse edilemedi."

    statement = parsed[0]

    # INDIVIDUAL kullanıcı kontrolü
    if user_role == "INDIVIDUAL":
        return _enforce_individual(sql, user_id)

    # CORPORATE kullanıcı kontrolü
    if user_role == "CORPORATE":
        return _enforce_corporate(sql, store_id)

    return sql, f"Bilinmeyen rol: {user_role}"


def _enforce_individual(sql: str, user_id: str) -> tuple[str, str | None]:
    """
    INDIVIDUAL kullanıcı için user_id filtresi zorunluluğunu kontrol eder.
    Eğer WHERE clause'da user_id yoksa otomatik ekler.
    """
    # Erişilebilir tablolar (kullanıcıya ait veri içerenler)
    user_tables = {"orders", "reviews", "refunds", "payment_methods", "user_preferences"}

    # Sorgudaki tabloları tespit et
    tables_in_query = _extract_tables(sql)

    # Kullanıcıya ait tablo varsa user_id filtresi kontrol et
    needs_filter = tables_in_query & user_tables

    if not needs_filter:
        # Sadece genel tablolar (products, categories) — filtre gerekmez
        # Ama yine de kullanıcı kendi siparişlerini görmeli
        return sql, None

    # user_id filtresi var mı kontrol et
    user_id_pattern = re.compile(
        rf"\buser_id\s*=\s*{re.escape(str(user_id))}\b",
        re.IGNORECASE
    )
    # Alias ile de kontrol et (o.user_id = ...)
    user_id_alias_pattern = re.compile(
        rf"\.\s*user_id\s*=\s*{re.escape(str(user_id))}\b",
        re.IGNORECASE
    )

    if user_id_pattern.search(sql) or user_id_alias_pattern.search(sql):
        return sql, None

    # Filtre yoksa otomatik ekle (güvenlik katmanı)
    sql = _inject_where_clause(sql, f"user_id = {user_id}")
    return sql, None


def _enforce_corporate(sql: str, store_id: str | None) -> tuple[str, str | None]:
    """
    CORPORATE kullanıcı için store_id filtresi zorunluluğunu kontrol eder.
    """
    if not store_id:
        return sql, "Corporate kullanıcı için store_id bulunamadı."

    # Mağaza verisi içeren tablolar
    store_tables = {"products", "orders", "order_items", "reviews", "refunds", "shipments"}

    tables_in_query = _extract_tables(sql)
    needs_filter = tables_in_query & store_tables

    if not needs_filter:
        return sql, None

    # store_id filtresi var mı kontrol et
    store_id_pattern = re.compile(
        rf"\bstore_id\s*=\s*{re.escape(str(store_id))}\b",
        re.IGNORECASE
    )
    store_id_alias_pattern = re.compile(
        rf"\.\s*store_id\s*=\s*{re.escape(str(store_id))}\b",
        re.IGNORECASE
    )

    if store_id_pattern.search(sql) or store_id_alias_pattern.search(sql):
        return sql, None

    # Filtre yoksa otomatik ekle
    sql = _inject_where_clause(sql, f"store_id = {store_id}")
    return sql, None


def _extract_tables(sql: str) -> set[str]:
    """SQL sorgusundan tablo isimlerini çıkarır."""
    tables = set()

    # FROM ve JOIN clause'larından tablo isimlerini çek
    # Basit regex — karmaşık subquery'ler için sqlparse token analizi gerekebilir
    from_pattern = re.compile(
        r"\b(?:FROM|JOIN)\s+(\w+)",
        re.IGNORECASE
    )
    for match in from_pattern.finditer(sql):
        tables.add(match.group(1).lower())

    return tables


def _inject_where_clause(sql: str, condition: str) -> str:
    """
    SQL sorgusuna WHERE veya AND clause olarak koşul ekler.
    Mevcut WHERE varsa AND ile ekler, yoksa WHERE olarak ekler.
    """
    # WHERE clause var mı kontrol et
    where_pattern = re.compile(r"\bWHERE\b", re.IGNORECASE)

    if where_pattern.search(sql):
        # Mevcut WHERE'e AND ile ekle
        # İlk WHERE'den sonra AND ekle
        match = where_pattern.search(sql)
        insert_pos = match.end()
        sql = sql[:insert_pos] + f" {condition} AND" + sql[insert_pos:]
    else:
        # GROUP BY, ORDER BY, LIMIT veya sorgu sonundan önce WHERE ekle
        insert_pattern = re.compile(
            r"\b(GROUP\s+BY|ORDER\s+BY|LIMIT|HAVING)\b",
            re.IGNORECASE
        )
        match = insert_pattern.search(sql)
        if match:
            insert_pos = match.start()
            sql = sql[:insert_pos] + f" WHERE {condition} " + sql[insert_pos:]
        else:
            # Sorgu sonuna ekle (noktalı virgülden önce)
            sql = sql.rstrip().rstrip(";")
            sql = f"{sql} WHERE {condition}"

    return sql
