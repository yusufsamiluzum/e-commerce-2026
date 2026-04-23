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
import com.datapulse.api.repositories.StoreRepository;
import com.datapulse.api.repositories.UserRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class RefundService {

    private final RefundRepository refundRepository;
    private final UserRepository userRepository;
    private final OrderRepository orderRepository;
    private final OrderItemRepository orderItemRepository;
    private final StoreRepository storeRepository;

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

    // ─── Satıcı: Mağazaya gelen iade talepleri ───────────

    @Transactional(readOnly = true)
    public List<com.datapulse.api.dto.StoreRefundDto> getStoreRefunds(String sellerEmail, String status) {
        User seller = userRepository.findByEmail(sellerEmail)
                .orElseThrow(() -> new RuntimeException("User not found"));
        com.datapulse.api.entities.Store store = storeRepository.findByOwnerId(seller.getId())
                .stream().findFirst().orElseThrow(() -> new RuntimeException("Store not found"));

        List<Refund> refunds;
        if (status != null && !status.isEmpty()) {
            refunds = refundRepository.findByOrder_Store_IdAndStatusOrderByProcessedAtDesc(store.getId(), status);
        } else {
            refunds = refundRepository.findByOrder_Store_IdOrderByProcessedAtDesc(store.getId());
        }

        return refunds.stream().map(this::mapToStoreRefundDto).collect(Collectors.toList());
    }

    @Transactional(readOnly = true)
    public long getStorePendingRefundCount(String sellerEmail) {
        User seller = userRepository.findByEmail(sellerEmail)
                .orElseThrow(() -> new RuntimeException("User not found"));
        com.datapulse.api.entities.Store store = storeRepository.findByOwnerId(seller.getId())
                .stream().findFirst().orElseThrow(() -> new RuntimeException("Store not found"));
        return refundRepository.countByOrder_Store_IdAndStatus(store.getId(), "PENDING");
    }

    /**
     * Satıcı kararı: İade talebini onayla veya reddet.
     * Satıcı sadece kendi mağazasına gelen iadeleri yönetebilir.
     */
    @Transactional
    public com.datapulse.api.dto.StoreRefundDto respondToRefund(String sellerEmail, Long refundId, String newStatus) {
        User seller = userRepository.findByEmail(sellerEmail)
                .orElseThrow(() -> new RuntimeException("User not found"));
        com.datapulse.api.entities.Store store = storeRepository.findByOwnerId(seller.getId())
                .stream().findFirst().orElseThrow(() -> new RuntimeException("Store not found"));

        Refund refund = refundRepository.findById(refundId)
                .orElseThrow(() -> new ResourceNotFoundException("Refund not found: " + refundId));

        // Satıcı sadece kendi mağazasının iadesini yönetebilir
        if (!refund.getOrder().getStore().getId().equals(store.getId())) {
            throw new RuntimeException("Unauthorized: this refund does not belong to your store");
        }

        refund.setStatus(newStatus);
        return mapToStoreRefundDto(refundRepository.save(refund));
    }

    private com.datapulse.api.dto.StoreRefundDto mapToStoreRefundDto(Refund refund) {
        Order order = refund.getOrder();
        String productName = "—";
        if (refund.getOrderItem() != null && refund.getOrderItem().getProduct() != null) {
            productName = refund.getOrderItem().getProduct().getName();
        } else if (order.getItems() != null && !order.getItems().isEmpty()) {
            productName = order.getItems().stream()
                    .filter(item -> item.getProduct() != null)
                    .map(item -> item.getProduct().getName())
                    .collect(Collectors.joining(", "));
        }

        return com.datapulse.api.dto.StoreRefundDto.builder()
                .id(refund.getId())
                .orderId(order.getId())
                .customerName(order.getUser().getFullName())
                .customerEmail(order.getUser().getEmail())
                .productName(productName)
                .refundAmount(refund.getRefundAmount())
                .reason(refund.getReason())
                .status(refund.getStatus())
                .processedAt(refund.getProcessedAt())
                .build();
    }
}
