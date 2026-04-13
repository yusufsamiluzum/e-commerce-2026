package com.datapulse.api.services;

import java.math.BigDecimal;
import java.math.RoundingMode;
import java.time.format.DateTimeFormatter;
import java.util.List;
import java.util.Map;
import java.util.TreeMap;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.datapulse.api.dto.SpendingAnalysisResponse;
import com.datapulse.api.entities.Order;
import com.datapulse.api.entities.Refund;
import com.datapulse.api.entities.User;
import com.datapulse.api.repositories.OrderRepository;
import com.datapulse.api.repositories.RefundRepository;
import com.datapulse.api.repositories.UserRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class AnalyticsService {

    private final OrderRepository orderRepository;
    private final RefundRepository refundRepository;
    private final UserRepository userRepository;

    @Transactional(readOnly = true)
    public SpendingAnalysisResponse getSpendingAnalysis(String email) {
        User user = userRepository.findByEmail(email)
                .orElseThrow(() -> new RuntimeException("User not found"));

        List<Order> orders = orderRepository.findByUserIdOrderByOrderDateDesc(user.getId());
        
        // Sum total spent
        BigDecimal totalSpent = orders.stream()
                .map(Order::getTotalPrice)
                .reduce(BigDecimal.ZERO, BigDecimal::add);

        // Map monthly spending
        Map<String, BigDecimal> monthlySpending = orders.stream()
                .collect(Collectors.groupingBy(
                        order -> order.getOrderDate().format(DateTimeFormatter.ofPattern("yyyy-MM")),
                        TreeMap::new,
                        Collectors.mapping(Order::getTotalPrice, Collectors.reducing(BigDecimal.ZERO, BigDecimal::add))
                ));

        // Get total refunded
        List<Refund> refunds = refundRepository.findAll().stream() // Simple workaround for now
                .filter(r -> r.getOrder().getUser().getId().equals(user.getId()))
                .collect(Collectors.toList());

        BigDecimal totalRefunded = refunds.stream()
                .map(Refund::getRefundAmount)
                .reduce(BigDecimal.ZERO, BigDecimal::add);

        // Avg Order Value
        BigDecimal averageOrderValue = BigDecimal.ZERO;
        if (!orders.isEmpty()) {
            averageOrderValue = totalSpent.divide(new BigDecimal(orders.size()), 2, RoundingMode.HALF_UP);
        }

        return SpendingAnalysisResponse.builder()
                .totalSpent(totalSpent)
                .totalOrders(orders.size())
                .totalRefunded(totalRefunded)
                .averageOrderValue(averageOrderValue)
                .monthlySpending(monthlySpending)
                .build();
    }
}
