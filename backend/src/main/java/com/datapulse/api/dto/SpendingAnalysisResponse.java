package com.datapulse.api.dto;

import java.math.BigDecimal;
import java.util.Map;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class SpendingAnalysisResponse {
    private BigDecimal totalSpent;
    private Integer totalOrders;
    private BigDecimal totalRefunded;
    private BigDecimal averageOrderValue;
    
    // Key: Month (e.g., "2026-03"), Value: Spent amount
    private Map<String, BigDecimal> monthlySpending;
}
