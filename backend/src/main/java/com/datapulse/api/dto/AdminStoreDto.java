package com.datapulse.api.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;
import java.time.LocalDateTime;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class AdminStoreDto {
    private Long id;
    private String name;
    private String description;
    private String status;
    private String baseCurrency;
    private LocalDateTime createdAt;

    // Sahip bilgileri
    private String ownerName;
    private String ownerEmail;

    // Mağaza metrikleri (store detail / cross-store comparison için)
    private long totalProducts;
    private long activeProducts;
    private long totalOrders;
    private BigDecimal totalRevenue;
    private double averageRating;
}
