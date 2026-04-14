package com.datapulse.api.repositories;

import com.datapulse.api.entities.OrderItem;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.time.LocalDateTime;
import java.util.List;

public interface OrderItemRepository extends JpaRepository<OrderItem, Long> {

    // ─── Corporate: Satış analitiği sorguları ─────────────
    // NOT: İptal edilen siparişlerin ürünleri gelir/satış istatistiklerine dahil edilmez

    @Query("SELECT oi.product.name, oi.product.sku, SUM(oi.quantity), SUM(oi.totalPrice) " +
           "FROM OrderItem oi WHERE oi.order.store.id = :storeId AND oi.order.status <> 'CANCELLED' " +
           "GROUP BY oi.product.id, oi.product.name, oi.product.sku " +
           "ORDER BY SUM(oi.quantity) DESC")
    List<Object[]> findTopSellingProductsByStoreId(@Param("storeId") Long storeId);

    @Query("SELECT COALESCE(SUM(oi.quantity), 0) FROM OrderItem oi WHERE oi.order.store.id = :storeId AND oi.order.status <> 'CANCELLED'")
    long sumQuantityByStoreId(@Param("storeId") Long storeId);

    // ─── Tarih aralığı filtreli ──────────────────────────

    @Query("SELECT oi.product.name, oi.product.sku, SUM(oi.quantity), SUM(oi.totalPrice) " +
           "FROM OrderItem oi WHERE oi.order.store.id = :storeId AND oi.order.status <> 'CANCELLED' " +
           "AND oi.order.orderDate BETWEEN :start AND :end " +
           "GROUP BY oi.product.id, oi.product.name, oi.product.sku " +
           "ORDER BY SUM(oi.quantity) DESC")
    List<Object[]> findTopSellingByStoreIdAndDateRange(@Param("storeId") Long storeId, @Param("start") LocalDateTime start, @Param("end") LocalDateTime end);

    @Query("SELECT COALESCE(SUM(oi.quantity), 0) FROM OrderItem oi WHERE oi.order.store.id = :storeId AND oi.order.status <> 'CANCELLED' AND oi.order.orderDate BETWEEN :start AND :end")
    long sumQuantityByStoreIdAndDateRange(@Param("storeId") Long storeId, @Param("start") LocalDateTime start, @Param("end") LocalDateTime end);
}
