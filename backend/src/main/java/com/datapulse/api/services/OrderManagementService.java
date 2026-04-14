package com.datapulse.api.services;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.datapulse.api.dto.CorporateOrderDto;
import com.datapulse.api.entities.Order;
import com.datapulse.api.entities.OrderStatus;
import com.datapulse.api.entities.Store;
import com.datapulse.api.exceptions.ResourceNotFoundException;
import com.datapulse.api.repositories.OrderRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class OrderManagementService {

    private final OrderRepository orderRepository;
    private final StoreService storeService;

    /**
     * Mağazanın tüm siparişlerini listele
     */
    @Transactional(readOnly = true)
    public List<CorporateOrderDto> getStoreOrders(String ownerEmail) {
        Store store = storeService.getStoreEntityByOwnerEmail(ownerEmail);
        List<Order> orders = orderRepository.findByStoreIdOrderByOrderDateDesc(store.getId());
        return orders.stream().map(this::mapToDto).collect(Collectors.toList());
    }

    /**
     * Belirli tarihteki siparişleri listele — grafik ile aynı CAST mantığı
     */
    @Transactional(readOnly = true)
    public List<CorporateOrderDto> getStoreOrdersByDate(String ownerEmail, java.time.LocalDate date) {
        Store store = storeService.getStoreEntityByOwnerEmail(ownerEmail);
        // CAST(orderDate AS DATE) = date → grafik ile birebir tutarlı
        List<Order> orders = orderRepository.findByStoreIdAndOrderDateCast(store.getId(), date);
        return orders.stream().map(this::mapToDto).collect(Collectors.toList());
    }

    /**
     * Belirli statüdeki siparişleri listele
     */
    @Transactional(readOnly = true)
    public List<CorporateOrderDto> getStoreOrdersByStatus(String ownerEmail, OrderStatus status) {
        Store store = storeService.getStoreEntityByOwnerEmail(ownerEmail);
        List<Order> orders = orderRepository.findByStoreIdAndStatusOrderByOrderDateDesc(store.getId(), status);
        return orders.stream().map(this::mapToDto).collect(Collectors.toList());
    }

    /**
     * Sipariş durumunu güncelle (ör: PENDING → PROCESSING → SHIPPED → DELIVERED)
     */
    @Transactional
    public CorporateOrderDto updateOrderStatus(String ownerEmail, Long orderId, OrderStatus newStatus) {
        Store store = storeService.getStoreEntityByOwnerEmail(ownerEmail);
        Order order = orderRepository.findById(orderId)
                .orElseThrow(() -> new ResourceNotFoundException("Sipariş bulunamadı: " + orderId));

        if (!order.getStore().getId().equals(store.getId())) {
            throw new IllegalStateException("Bu sipariş sizin mağazanıza ait değil");
        }

        order.setStatus(newStatus);
        return mapToDto(orderRepository.save(order));
    }

    private CorporateOrderDto mapToDto(Order order) {
        List<CorporateOrderDto.OrderItemDto> items = List.of();
        if (order.getItems() != null) {
            items = order.getItems().stream()
                    .map(item -> CorporateOrderDto.OrderItemDto.builder()
                            .id(item.getId())
                            .productName(item.getProduct() != null ? item.getProduct().getName() : "—")
                            .productSku(item.getProduct() != null ? item.getProduct().getSku() : "—")
                            .quantity(item.getQuantity())
                            .unitPrice(item.getUnitPrice())
                            .totalPrice(item.getTotalPrice())
                            .build())
                    .collect(Collectors.toList());
        }

        return CorporateOrderDto.builder()
                .id(order.getId())
                .customerName(order.getUser() != null ? order.getUser().getFullName() : "—")
                .customerEmail(order.getUser() != null ? order.getUser().getEmail() : "—")
                .status(order.getStatus().name())
                .totalPrice(order.getTotalPrice())
                .orderDate(order.getOrderDate() != null ? order.getOrderDate().toString() : null)
                .items(items)
                .build();
    }
}
