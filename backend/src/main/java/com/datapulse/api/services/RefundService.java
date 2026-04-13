package com.datapulse.api.services;

import java.math.BigDecimal;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.datapulse.api.dto.RefundDto;
import com.datapulse.api.dto.RefundRequest;
import com.datapulse.api.entities.Order;
import com.datapulse.api.entities.OrderItem;
import com.datapulse.api.entities.Refund;
import com.datapulse.api.entities.User;
import com.datapulse.api.exceptions.ResourceNotFoundException;
import com.datapulse.api.repositories.OrderItemRepository;
import com.datapulse.api.repositories.OrderRepository;
import com.datapulse.api.repositories.RefundRepository;
import com.datapulse.api.repositories.UserRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class RefundService {

    private final RefundRepository refundRepository;
    private final UserRepository userRepository;
    private final OrderRepository orderRepository;
    private final OrderItemRepository orderItemRepository;

    @Transactional(readOnly = true)
    public List<RefundDto> getUserRefunds(String email) {
        User user = userRepository.findByEmail(email)
                .orElseThrow(() -> new RuntimeException("User not found"));

        List<Refund> refunds = refundRepository.findAll().stream()
                .filter(r -> r.getOrder().getUser().getId().equals(user.getId()))
                .collect(Collectors.toList());

        return refunds.stream().map(this::mapToDto).collect(Collectors.toList());
    }

    @Transactional
    public RefundDto createRefund(String email, RefundRequest request) {
        User user = userRepository.findByEmail(email)
                .orElseThrow(() -> new RuntimeException("User not found"));

        Order order = orderRepository.findById(request.getOrderId())
                .orElseThrow(() -> new ResourceNotFoundException("Order not found: " + request.getOrderId()));

        if (!order.getUser().getId().equals(user.getId())) {
            throw new RuntimeException("Unauthorized: this order does not belong to you");
        }

        if (!"DELIVERED".equalsIgnoreCase(order.getStatus().name())) {
            throw new IllegalStateException("Refunds can only be requested for DELIVERED orders");
        }

        // Daha önce aynı kalem için iade var mı?
        boolean alreadyRequested = refundRepository.findAll().stream()
                .anyMatch(r -> r.getOrder().getId().equals(order.getId())
                        && r.getOrderItem() != null
                        && r.getOrderItem().getId().equals(request.getOrderItemId()));
        if (alreadyRequested) {
            throw new IllegalStateException("A refund for this item has already been requested");
        }

        OrderItem orderItem = null;
        BigDecimal refundAmount;

        if (request.getOrderItemId() != null) {
            orderItem = orderItemRepository.findById(request.getOrderItemId())
                    .orElseThrow(() -> new ResourceNotFoundException("Order item not found: " + request.getOrderItemId()));
            refundAmount = orderItem.getTotalPrice();
        } else {
            refundAmount = order.getTotalPrice();
        }

        Refund refund = Refund.builder()
                .order(order)
                .orderItem(orderItem)
                .refundAmount(refundAmount)
                .reason(request.getReason())
                .status("PENDING")
                .build();

        return mapToDto(refundRepository.save(refund));
    }

    private RefundDto mapToDto(Refund refund) {
        return RefundDto.builder()
                .id(refund.getId())
                .orderId(refund.getOrder().getId())
                .orderItemId(refund.getOrderItem() != null ? refund.getOrderItem().getId() : null)
                .refundAmount(refund.getRefundAmount())
                .reason(refund.getReason())
                .status(refund.getStatus())
                .processedAt(refund.getProcessedAt())
                .build();
    }
}
