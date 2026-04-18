package com.datapulse.api.dto;

import java.math.BigDecimal;
import java.time.LocalDateTime;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data @NoArgsConstructor @AllArgsConstructor @Builder
public class AdminRefundDto {
    private Long id;
    private Long orderId;
    private String userName;
    private String userEmail;
    private String storeName;
    private String productName;
    private BigDecimal refundAmount;
    private String reason;
    private String status;
    private LocalDateTime processedAt;
}
