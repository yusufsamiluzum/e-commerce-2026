"""
DB Schema — Veritabanı şema bilgisini LLM context'i için metin formatında üretir.
DataPulse e-commerce platform entity yapısına uygun statik şema tanımı.
"""


def get_db_schema() -> str:
    """
    Veritabanı şemasını LLM'in anlayabileceği metin formatında döndürür.
    Entity sınıflarından türetilmiş statik tanım — performans ve güvenlik için
    INFORMATION_SCHEMA sorgusu yerine bu yaklaşım tercih edildi.
    """
    return """
=== DataPulse E-Commerce Database Schema ===

TABLE: users
  - id (BIGINT, PK, AUTO_INCREMENT)
  - full_name (VARCHAR, NOT NULL)
  - email (VARCHAR, NOT NULL, UNIQUE)
  - password_hash (VARCHAR, NOT NULL) [RESTRICTED - DO NOT QUERY]
  - role_type (ENUM: 'INDIVIDUAL', 'CORPORATE', 'ADMIN')
  - gender (VARCHAR, NULLABLE)
  - status (ENUM: 'ACTIVE', 'SUSPENDED')
  - created_at (DATETIME)

TABLE: stores
  - id (BIGINT, PK, AUTO_INCREMENT)
  - owner_id (BIGINT, FK -> users.id)
  - name (VARCHAR, NOT NULL)
  - description (TEXT, NULLABLE)
  - status (ENUM: 'PENDING', 'APPROVED', 'SUSPENDED')
  - base_currency (VARCHAR(3), NOT NULL)
  - created_at (DATETIME)

TABLE: categories
  - id (BIGINT, PK, AUTO_INCREMENT)
  - name (VARCHAR, NOT NULL)

TABLE: products
  - id (BIGINT, PK, AUTO_INCREMENT)
  - store_id (BIGINT, FK -> stores.id)
  - category_id (BIGINT, FK -> categories.id)
  - name (VARCHAR, NOT NULL)
  - description (TEXT)
  - price (DECIMAL(10,2), NOT NULL)
  - original_price (DECIMAL(10,2)) — indirim öncesi fiyat
  - stock (INT, NOT NULL)
  - image_url (VARCHAR)
  - average_rating (DOUBLE)
  - review_count (INT)
  - is_featured (BOOLEAN)
  - created_at (DATETIME)
  - updated_at (DATETIME)

TABLE: product_images
  - id (BIGINT, PK, AUTO_INCREMENT)
  - product_id (BIGINT, FK -> products.id)
  - image_url (VARCHAR, NOT NULL)
  - is_primary (BOOLEAN)

TABLE: orders
  - id (BIGINT, PK, AUTO_INCREMENT)
  - user_id (BIGINT, FK -> users.id) — siparişi veren müşteri
  - store_id (BIGINT, FK -> stores.id) — siparişin ait olduğu mağaza
  - payment_method_id (BIGINT, NOT NULL)
  - status (ENUM: 'PENDING', 'CONFIRMED', 'SHIPPED', 'DELIVERED', 'CANCELLED')
  - total_price (DECIMAL(10,2), NOT NULL)
  - order_date (DATETIME, NOT NULL)

TABLE: order_items
  - id (BIGINT, PK, AUTO_INCREMENT)
  - order_id (BIGINT, FK -> orders.id)
  - product_id (BIGINT, FK -> products.id)
  - store_id (BIGINT, FK -> stores.id)
  - quantity (INT, NOT NULL)
  - unit_price (DECIMAL(10,2), NOT NULL)
  - total_price (DECIMAL(10,2), NOT NULL)

TABLE: reviews
  - id (BIGINT, PK, AUTO_INCREMENT)
  - product_id (BIGINT, FK -> products.id)
  - user_id (BIGINT, FK -> users.id)
  - rating (INT, 1-5)
  - comment (TEXT)
  - is_approved (BOOLEAN)
  - created_at (DATETIME)
  - updated_at (DATETIME)

TABLE: refunds
  - id (BIGINT, PK, AUTO_INCREMENT)
  - order_id (BIGINT, FK -> orders.id)
  - user_id (BIGINT, FK -> users.id)
  - store_id (BIGINT, FK -> stores.id)
  - reason (TEXT, NOT NULL)
  - status (ENUM: 'PENDING', 'APPROVED', 'REJECTED')
  - amount (DECIMAL(10,2), NOT NULL)
  - created_at (DATETIME)
  - resolved_at (DATETIME)

TABLE: shipments
  - id (BIGINT, PK, AUTO_INCREMENT)
  - order_id (BIGINT, FK -> orders.id)
  - carrier (VARCHAR, NOT NULL)
  - tracking_number (VARCHAR)
  - status (VARCHAR)
  - shipped_at (DATETIME)
  - delivered_at (DATETIME)

TABLE: payment_methods
  - id (BIGINT, PK, AUTO_INCREMENT)
  - user_id (BIGINT, FK -> users.id)
  - card_type (VARCHAR)
  - last_four_digits (VARCHAR(4))
  - expiry_date (VARCHAR)
  - is_default (BOOLEAN)

TABLE: user_preferences
  - id (BIGINT, PK, AUTO_INCREMENT)
  - user_id (BIGINT, FK -> users.id, UNIQUE)
  - theme (VARCHAR)
  - language (VARCHAR)
  - notifications_enabled (BOOLEAN)

TABLE: system_configs
  - id (BIGINT, PK, AUTO_INCREMENT)
  - config_key (VARCHAR, UNIQUE, NOT NULL)
  - config_value (TEXT)
  - description (VARCHAR)
  - updated_at (DATETIME)

TABLE: audit_logs
  - id (BIGINT, PK, AUTO_INCREMENT)
  - user_id (BIGINT, FK -> users.id)
  - action (VARCHAR, NOT NULL)
  - entity_type (VARCHAR)
  - entity_id (BIGINT)
  - details (TEXT)
  - created_at (DATETIME)

=== KEY RELATIONSHIPS ===
- stores.owner_id -> users.id (store owner is a CORPORATE user)
- products.store_id -> stores.id (products belong to a store)
- orders.user_id -> users.id (customer who placed the order)
- orders.store_id -> stores.id (store that fulfills the order)
- order_items.order_id -> orders.id
- order_items.product_id -> products.id
- reviews.product_id -> products.id
- reviews.user_id -> users.id
- refunds.order_id -> orders.id
- refunds.user_id -> users.id
- refunds.store_id -> stores.id
"""
