package com.datapulse.api.dto;

import java.math.BigDecimal;
import java.time.LocalDateTime;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data @Builder @AllArgsConstructor @NoArgsConstructor
public class StoreRefundDto {
    private Long id;
    private Long orderId;
    private String customerName;
    private String customerEmail;
    private String productName;
    private BigDecimal refundAmount;
    private String reason;
    private String status;
    private LocalDateTime processedAt;
}
