package com.datapulse.api.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class RefundRequest {
    private Long orderId;
    private Long orderItemId;
    private String reason;
}
