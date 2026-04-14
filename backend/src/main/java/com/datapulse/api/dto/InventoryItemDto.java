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
public class InventoryItemDto {
    private Long productId;
    private String productName;
    private String sku;
    private String categoryName;
    private Integer stockQuantity;
    private BigDecimal unitPrice;
    private Boolean isActive;
    private String stockStatus; // "OK", "LOW", "OUT_OF_STOCK"
}
