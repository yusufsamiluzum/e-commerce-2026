package com.datapulse.api.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class PlatformStatsDto {
    private long totalUsers;
    private long totalIndividualUsers;
    private long totalCorporateUsers;
    private long totalStores;
    private long activeStores;
    private long pendingStores;
    private long suspendedStores;
    private long totalOrders;
    private BigDecimal totalRevenue;
    private long suspendedUsers;
    private long totalProducts;
    private long totalCategories;
}
