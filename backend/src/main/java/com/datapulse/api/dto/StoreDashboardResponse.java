package com.datapulse.api.dto;

import java.math.BigDecimal;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class StoreDashboardResponse {

    // Gelir
    private BigDecimal totalRevenue;
    private long totalOrders;
    private BigDecimal averageOrderValue;

    // Ürünler
    private long activeProducts;
    private long lowStockProducts;

    // Siparişler
    private long pendingOrders;
    private long processingOrders;
    private long shippedOrders;
    private long deliveredOrders;
    private long cancelledOrders;

    // Yorumlar
    private double averageRating;
    private long totalReviews;
}
