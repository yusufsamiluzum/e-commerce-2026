package com.datapulse.api.dto;

import java.math.BigDecimal;

import lombok.Data;

@Data
public class ProductDto {
    private Long id;
    private String sku;
    private String name;
    private String category;
    private BigDecimal price;
    private BigDecimal originalPrice;
    private Double rating;
    private Integer reviewCount;
    private String imageUrl;
    private BadgeDto badge;

    // Getters and Setters (or use Lombok @Data)
    @Data
    public static class BadgeDto {
        private String text;
        private String type;
        // Getters and Setters
    }
}