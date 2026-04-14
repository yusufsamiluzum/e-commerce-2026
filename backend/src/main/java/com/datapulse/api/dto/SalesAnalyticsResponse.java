package com.datapulse.api.dto;

import java.math.BigDecimal;
import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class SalesAnalyticsResponse {

    // Özet
    private BigDecimal totalRevenue;
    private long totalOrders;
    private long totalProductsSold;

    // En çok satan ürünler
    private List<TopProduct> topProducts;

    // Sipariş statü dağılımı
    private List<StatusCount> statusDistribution;

    // Günlük gelir grafiği verisi
    private List<DailyRevenue> dailyRevenue;

    @Data
    @Builder
    @AllArgsConstructor
    @NoArgsConstructor
    public static class TopProduct {
        private String productName;
        private String sku;
        private long totalQuantitySold;
        private BigDecimal totalRevenue;
    }

    @Data
    @Builder
    @AllArgsConstructor
    @NoArgsConstructor
    public static class StatusCount {
        private String status;
        private long count;
    }

    @Data
    @Builder
    @AllArgsConstructor
    @NoArgsConstructor
    public static class DailyRevenue {
        private String date;
        private BigDecimal revenue;
        private long orderCount;
    }
}
