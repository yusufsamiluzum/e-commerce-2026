package com.datapulse.api.dto;

import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class CustomerSegmentationResponse {

    private long totalCustomers;
    private List<CitySegment> byCity;
    private List<MembershipSegment> byMembership;
    private List<TopCustomer> topCustomers;

    @Data @Builder @AllArgsConstructor @NoArgsConstructor
    public static class CitySegment {
        private String city;
        private long count;
    }

    @Data @Builder @AllArgsConstructor @NoArgsConstructor
    public static class MembershipSegment {
        private String membershipType;
        private long count;
    }

    @Data @Builder @AllArgsConstructor @NoArgsConstructor
    public static class TopCustomer {
        private String customerName;
        private String email;
        private String city;
        private String membershipType;
        private long totalOrders;
        private double totalSpent;
    }
}
