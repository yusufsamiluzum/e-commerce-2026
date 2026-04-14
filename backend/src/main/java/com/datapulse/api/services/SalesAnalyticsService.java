package com.datapulse.api.services;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.datapulse.api.dto.SalesAnalyticsResponse;
import com.datapulse.api.entities.OrderStatus;
import com.datapulse.api.entities.Store;
import com.datapulse.api.repositories.OrderItemRepository;
import com.datapulse.api.repositories.OrderRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class SalesAnalyticsService {

        private final OrderRepository orderRepository;
        private final OrderItemRepository orderItemRepository;
        private final StoreService storeService;

        @Transactional(readOnly = true)
        public SalesAnalyticsResponse getAnalytics(String ownerEmail, LocalDate startDate, LocalDate endDate) {
                Store store = storeService.getStoreEntityByOwnerEmail(ownerEmail);
                Long storeId = store.getId();

                boolean hasDateFilter = startDate != null && endDate != null;
                LocalDateTime start = hasDateFilter ? startDate.atStartOfDay() : null;
                LocalDateTime end = hasDateFilter ? endDate.atTime(LocalTime.MAX) : null;

                // Toplam gelir & sipariş sayısı
                BigDecimal totalRevenue;
                long totalOrders;
                long totalProductsSold;

                if (hasDateFilter) {
                        totalRevenue = orderRepository.sumTotalPriceByStoreIdAndDateRange(storeId, start, end);
                        totalOrders = orderRepository.countByStoreIdAndDateRange(storeId, start, end);
                        totalProductsSold = orderItemRepository.sumQuantityByStoreIdAndDateRange(storeId, start, end);
                } else {
                        totalRevenue = orderRepository.sumTotalPriceByStoreId(storeId);
                        totalOrders = orderRepository.countByStoreId(storeId);
                        totalProductsSold = orderItemRepository.sumQuantityByStoreId(storeId);
                }
                if (totalRevenue == null)
                        totalRevenue = BigDecimal.ZERO;

                // En çok satan ürünler
                List<Object[]> topRaw = hasDateFilter
                                ? orderItemRepository.findTopSellingByStoreIdAndDateRange(storeId, start, end)
                                : orderItemRepository.findTopSellingProductsByStoreId(storeId);
                List<SalesAnalyticsResponse.TopProduct> topProducts = topRaw.stream()
                                .limit(10)
                                .map(row -> SalesAnalyticsResponse.TopProduct.builder()
                                                .productName((String) row[0])
                                                .sku((String) row[1])
                                                .totalQuantitySold((Long) row[2])
                                                .totalRevenue((BigDecimal) row[3])
                                                .build())
                                .collect(Collectors.toList());

                // Sipariş statü dağılımı
                List<SalesAnalyticsResponse.StatusCount> statusDistribution = List.of(
                                buildStatusCount(storeId, OrderStatus.PENDING, hasDateFilter, start, end),
                                buildStatusCount(storeId, OrderStatus.PROCESSING, hasDateFilter, start, end),
                                buildStatusCount(storeId, OrderStatus.SHIPPED, hasDateFilter, start, end),
                                buildStatusCount(storeId, OrderStatus.DELIVERED, hasDateFilter, start, end),
                                buildStatusCount(storeId, OrderStatus.CANCELLED, hasDateFilter, start, end));

                // Günlük gelir breakdown (grafik verisi)
                List<SalesAnalyticsResponse.DailyRevenue> dailyRevenue;
                if (hasDateFilter) {
                        dailyRevenue = orderRepository.dailyRevenueByStoreIdAndDateRange(storeId, start, end).stream()
                                        .map(row -> SalesAnalyticsResponse.DailyRevenue.builder()
                                                        .date(row[0].toString())
                                                        .revenue((BigDecimal) row[1])
                                                        .orderCount((Long) row[2])
                                                        .build())
                                        .collect(Collectors.toList());
                } else {
                        // Filtre yoksa son 30 günü göster
                        LocalDateTime last30Start = LocalDateTime.now().minusDays(30);
                        LocalDateTime now = LocalDateTime.now();
                        dailyRevenue = orderRepository.dailyRevenueByStoreIdAndDateRange(storeId, last30Start, now)
                                        .stream()
                                        .map(row -> SalesAnalyticsResponse.DailyRevenue.builder()
                                                        .date(row[0].toString())
                                                        .revenue((BigDecimal) row[1])
                                                        .orderCount((Long) row[2])
                                                        .build())
                                        .collect(Collectors.toList());
                }

                return SalesAnalyticsResponse.builder()
                                .totalRevenue(totalRevenue)
                                .totalOrders(totalOrders)
                                .totalProductsSold(totalProductsSold)
                                .topProducts(topProducts)
                                .statusDistribution(statusDistribution)
                                .dailyRevenue(dailyRevenue)
                                .build();
        }

        // Geriye uyumlu — parametresiz
        @Transactional(readOnly = true)
        public SalesAnalyticsResponse getAnalytics(String ownerEmail) {
                return getAnalytics(ownerEmail, null, null);
        }

        private SalesAnalyticsResponse.StatusCount buildStatusCount(Long storeId, OrderStatus status,
                        boolean hasDateFilter, LocalDateTime start, LocalDateTime end) {
                long count = hasDateFilter
                                ? orderRepository.countByStoreIdAndStatusAndDateRange(storeId, status, start, end)
                                : orderRepository.countByStoreIdAndStatus(storeId, status);
                return SalesAnalyticsResponse.StatusCount.builder()
                                .status(status.name())
                                .count(count)
                                .build();
        }
}
