package com.datapulse.api.dto;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class CorporateProductDto {
    private Long id;
    private String sku;
    private String name;
    private String description;
    private BigDecimal unitPrice;
    private BigDecimal originalPrice;
    private Integer stockQuantity;
    private Long categoryId;
    private String categoryName;
    private String imageUrl;
    private Double averageRating;
    private Integer reviewCount;
    private Boolean isFeatured;
    private Boolean isActive;
    private LocalDateTime createdAt;
    private List<ProductImageDto> images;
}
