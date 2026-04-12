package com.datapulse.api.dto;

import lombok.Data;
import java.util.List;

@Data
public class OrderRequest {
    private Long userId;
    private Long storeId;
    private String paymentMethod;
    private List<OrderItemRequest> items;
    private ShippingAddress address;

    @Data
    public static class OrderItemRequest {
        private Long productId;
        private Integer quantity;
    }

    @Data
    public static class ShippingAddress {
        private String fullName;
        private String line1;
        private String city;
        private String zipCode;
    }
}
