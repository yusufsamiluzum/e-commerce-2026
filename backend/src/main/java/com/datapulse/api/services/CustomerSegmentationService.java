package com.datapulse.api.services;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.datapulse.api.dto.CustomerSegmentationResponse;
import com.datapulse.api.entities.Order;
import com.datapulse.api.entities.Store;
import com.datapulse.api.entities.User;
import com.datapulse.api.repositories.CustomerProfileRepository;
import com.datapulse.api.repositories.OrderRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class CustomerSegmentationService {

    private final OrderRepository orderRepository;
    private final CustomerProfileRepository customerProfileRepository;
    private final StoreService storeService;

    @Transactional(readOnly = true)
    public CustomerSegmentationResponse getSegmentation(String ownerEmail) {
        Store store = storeService.getStoreEntityByOwnerEmail(ownerEmail);
        List<Order> orders = orderRepository.findByStoreIdOrderByOrderDateDesc(store.getId());

        // Benzersiz müşteriler
        Map<Long, User> uniqueCustomers = new LinkedHashMap<>();
        Map<Long, Long> customerOrderCount = new LinkedHashMap<>();
        Map<Long, Double> customerSpending = new LinkedHashMap<>();

        for (Order order : orders) {
            User user = order.getUser();
            if (user == null) continue;
            uniqueCustomers.putIfAbsent(user.getId(), user);
            customerOrderCount.merge(user.getId(), 1L, Long::sum);
            customerSpending.merge(user.getId(),
                    order.getTotalPrice() != null ? order.getTotalPrice().doubleValue() : 0.0,
                    Double::sum);
        }

        // Şehir bazlı segmentasyon
        Map<String, Long> cityMap = new LinkedHashMap<>();
        Map<String, Long> membershipMap = new LinkedHashMap<>();

        for (User user : uniqueCustomers.values()) {
            customerProfileRepository.findByUserId(user.getId()).ifPresent(profile -> {
                String city = profile.getCity() != null ? profile.getCity() : "Bilinmiyor";
                String membership = profile.getMembershipType() != null ? profile.getMembershipType() : "Standart";
                cityMap.merge(city, 1L, Long::sum);
                membershipMap.merge(membership, 1L, Long::sum);
            });
        }

        List<CustomerSegmentationResponse.CitySegment> byCity = cityMap.entrySet().stream()
                .map(e -> CustomerSegmentationResponse.CitySegment.builder()
                        .city(e.getKey()).count(e.getValue()).build())
                .sorted((a, b) -> Long.compare(b.getCount(), a.getCount()))
                .collect(Collectors.toList());

        List<CustomerSegmentationResponse.MembershipSegment> byMembership = membershipMap.entrySet().stream()
                .map(e -> CustomerSegmentationResponse.MembershipSegment.builder()
                        .membershipType(e.getKey()).count(e.getValue()).build())
                .sorted((a, b) -> Long.compare(b.getCount(), a.getCount()))
                .collect(Collectors.toList());

        // En çok alışveriş yapan müşteriler
        List<CustomerSegmentationResponse.TopCustomer> topCustomers = uniqueCustomers.values().stream()
                .map(user -> {
                    var profile = customerProfileRepository.findByUserId(user.getId()).orElse(null);
                    return CustomerSegmentationResponse.TopCustomer.builder()
                            .customerName(user.getFullName())
                            .email(user.getEmail())
                            .city(profile != null && profile.getCity() != null ? profile.getCity() : "—")
                            .membershipType(profile != null && profile.getMembershipType() != null ? profile.getMembershipType() : "—")
                            .totalOrders(customerOrderCount.getOrDefault(user.getId(), 0L))
                            .totalSpent(customerSpending.getOrDefault(user.getId(), 0.0))
                            .build();
                })
                .sorted((a, b) -> Double.compare(b.getTotalSpent(), a.getTotalSpent()))
                .limit(10)
                .collect(Collectors.toList());

        return CustomerSegmentationResponse.builder()
                .totalCustomers(uniqueCustomers.size())
                .byCity(byCity)
                .byMembership(byMembership)
                .topCustomers(topCustomers)
                .build();
    }
}
