package com.datapulse.api.dto;

import java.math.BigDecimal;
import java.time.LocalDateTime;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data @NoArgsConstructor @AllArgsConstructor @Builder
public class AdminOrderDto {
    private Long id;
    private String userName;
    private String userEmail;
    private String storeName;
    private Long storeId;
    private String status;
    private BigDecimal totalPrice;
    private LocalDateTime orderDate;
    private int itemCount;
    // Kargo bilgileri (varsa)
    private String shipmentStatus;
    private String trackingNumber;
    private String carrier;
}
