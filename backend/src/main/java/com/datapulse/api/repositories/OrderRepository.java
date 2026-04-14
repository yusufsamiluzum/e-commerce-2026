package com.datapulse.api.repositories;

import com.datapulse.api.entities.Order;
import com.datapulse.api.entities.OrderStatus;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.List;

public interface OrderRepository extends JpaRepository<Order, Long> {
    List<Order> findByUserIdOrderByOrderDateDesc(Long userId);

    // ─── Corporate: Mağaza bazlı sorgular ───────────────────────

    List<Order> findByStoreIdOrderByOrderDateDesc(Long storeId);

    List<Order> findByStoreIdAndStatusOrderByOrderDateDesc(Long storeId, OrderStatus status);

    // Drill-down: İptal edilen siparişleri hariç tut, LocalDate ile tam gün eşleştirmesi yap
    @Query("SELECT o FROM Order o WHERE o.store.id = :storeId AND o.status <> 'CANCELLED' AND CAST(o.orderDate AS DATE) = :date ORDER BY o.orderDate DESC")
    List<Order> findByStoreIdAndOrderDateCast(@Param("storeId") Long storeId, @Param("date") java.time.LocalDate date);

    long countByStoreId(Long storeId);

    long countByStoreIdAndStatus(Long storeId, OrderStatus status);

    // Gelir hesaplaması — sadece iptal edilmemiş siparişler
    @Query("SELECT COALESCE(SUM(o.totalPrice), 0) FROM Order o WHERE o.store.id = :storeId AND o.status <> 'CANCELLED'")
    BigDecimal sumTotalPriceByStoreId(@Param("storeId") Long storeId);

    // ─── Tarih aralığı filtreli sorgular ─────────────────────────

    @Query("SELECT COALESCE(SUM(o.totalPrice), 0) FROM Order o WHERE o.store.id = :storeId AND o.status <> 'CANCELLED' AND o.orderDate BETWEEN :start AND :end")
    BigDecimal sumTotalPriceByStoreIdAndDateRange(@Param("storeId") Long storeId, @Param("start") LocalDateTime start, @Param("end") LocalDateTime end);

    @Query("SELECT COUNT(o) FROM Order o WHERE o.store.id = :storeId AND o.orderDate BETWEEN :start AND :end")
    long countByStoreIdAndDateRange(@Param("storeId") Long storeId, @Param("start") LocalDateTime start, @Param("end") LocalDateTime end);

    @Query("SELECT COUNT(o) FROM Order o WHERE o.store.id = :storeId AND o.status = :status AND o.orderDate BETWEEN :start AND :end")
    long countByStoreIdAndStatusAndDateRange(@Param("storeId") Long storeId, @Param("status") OrderStatus status, @Param("start") LocalDateTime start, @Param("end") LocalDateTime end);

    // Günlük gelir breakdown: [tarih, gelir, sipariş sayısı] — sadece iptal edilmemiş siparişler
    @Query("SELECT CAST(o.orderDate AS DATE), COALESCE(SUM(o.totalPrice), 0), COUNT(o) " +
           "FROM Order o WHERE o.store.id = :storeId AND o.status <> 'CANCELLED' AND o.orderDate BETWEEN :start AND :end " +
           "GROUP BY CAST(o.orderDate AS DATE) ORDER BY CAST(o.orderDate AS DATE)")
    List<Object[]> dailyRevenueByStoreIdAndDateRange(@Param("storeId") Long storeId, @Param("start") LocalDateTime start, @Param("end") LocalDateTime end);
}
