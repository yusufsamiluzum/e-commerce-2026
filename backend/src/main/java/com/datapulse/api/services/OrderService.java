package com.datapulse.api.services;

import com.datapulse.api.dto.OrderDto;
import com.datapulse.api.dto.OrderItemDto;
import com.datapulse.api.dto.OrderRequest;
import com.datapulse.api.entities.*;
import com.datapulse.api.exceptions.ResourceNotFoundException;
import com.datapulse.api.repositories.*;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class OrderService {
    private final OrderRepository orderRepository;
    private final OrderItemRepository orderItemRepository;
    private final UserRepository userRepository;
    private final StoreRepository storeRepository;
    private final ProductRepository productRepository;

    @Transactional
    public Order createOrder(OrderRequest request) {
        User user = userRepository.findById(request.getUserId())
                .orElseThrow(() -> new ResourceNotFoundException("User not found"));

        if (request.getItems() == null || request.getItems().isEmpty()) {
            throw new IllegalArgumentException("Order must contain at least one item.");
        }

        Product firstProduct = productRepository.findById(request.getItems().get(0).getProductId())
                .orElseThrow(() -> new ResourceNotFoundException("Product not found"));
        Store store = firstProduct.getStore();

        Order order = new Order();
        order.setUser(user);
        order.setStore(store);
        order.setPaymentMethodId(1L); // Assuming 1L is Stripe
        order.setStatus(OrderStatus.PENDING);
        order.setItems(new ArrayList<>());
        
        BigDecimal total = BigDecimal.ZERO;

        for (OrderRequest.OrderItemRequest itemReq : request.getItems()) {
            Product product = productRepository.findById(itemReq.getProductId())
                    .orElseThrow(() -> new ResourceNotFoundException("Product not found"));
            
            OrderItem item = new OrderItem();
            item.setOrder(order);
            item.setProduct(product);
            item.setQuantity(itemReq.getQuantity());
            
            BigDecimal unitPrice = product.getUnitPrice();
            BigDecimal itemTotal = unitPrice.multiply(new BigDecimal(itemReq.getQuantity()));
            
            item.setUnitPrice(unitPrice);
            item.setTotalPrice(itemTotal);
            
            total = total.add(itemTotal);
            order.getItems().add(item);
        }

        order.setTotalPrice(total);
        return orderRepository.save(order);
    }

    public List<OrderDto> getUserOrders(Long userId) {
        List<Order> orders = orderRepository.findByUserIdOrderByOrderDateDesc(userId);
        return orders.stream().map(this::mapToDto).collect(Collectors.toList());
    }

    public OrderDto getOrderDetails(Long orderId, Long userId) {
        Order order = orderRepository.findById(orderId)
                .orElseThrow(() -> new ResourceNotFoundException("Order not found with id: " + orderId));
        
        if (!order.getUser().getId().equals(userId)) {
            throw new RuntimeException("Unauthorized access to order"); // Could be an AccessDeniedException
        }
        
        return mapToDto(order);
    }

    private OrderDto mapToDto(Order order) {
        List<OrderItemDto> itemDtos = order.getItems().stream().map(item -> {
            Product product = item.getProduct();
            return OrderItemDto.builder()
                    .id(item.getId())
                    .productId(product.getId())
                    .productName(product.getName())
                    .productImageUrl(product.getImageUrl())
                    .quantity(item.getQuantity())
                    .unitPrice(item.getUnitPrice())
                    .totalPrice(item.getTotalPrice())
                    .build();
        }).collect(Collectors.toList());

        return OrderDto.builder()
                .id(order.getId())
                .status(order.getStatus())
                .totalPrice(order.getTotalPrice())
                .orderDate(order.getOrderDate())
                .storeName(order.getStore() != null ? order.getStore().getName() : "Unknown Store")
                .items(itemDtos)
                .build();
    }
}
