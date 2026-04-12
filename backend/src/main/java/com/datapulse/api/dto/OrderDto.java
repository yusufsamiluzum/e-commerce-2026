package com.datapulse.api.dto;

import com.datapulse.api.entities.OrderStatus;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class OrderDto {
    private Long id;
    private OrderStatus status;
    private BigDecimal totalPrice;
    private LocalDateTime orderDate;
    private String storeName;
    private List<OrderItemDto> items;
}
