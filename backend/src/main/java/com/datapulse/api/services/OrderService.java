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

    // createOrder artık email parametresi alıyor ve OrderDto döndürüyor
    @Transactional
    public OrderDto createOrder(OrderRequest request, String email) {
        User user = userRepository.findByEmail(email)
                .orElseThrow(() -> new ResourceNotFoundException("Oturum açmış kullanıcı bulunamadı"));

        request.setUserId(user.getId());

        if (request.getItems() == null || request.getItems().isEmpty()) {
            throw new IllegalArgumentException("Sipariş en az bir ürün içermelidir.");
        }

        Product firstProduct = productRepository.findById(request.getItems().get(0).getProductId())
                .orElseThrow(() -> new ResourceNotFoundException("Ürün bulunamadı"));
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
                    .orElseThrow(() -> new ResourceNotFoundException("Ürün bulunamadı"));

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
        Order savedOrder = orderRepository.save(order);
        return mapToDto(savedOrder);
    }

    public List<OrderDto> getUserOrders(String email) {
        User user = userRepository.findByEmail(email)
                .orElseThrow(() -> new ResourceNotFoundException("Kullanıcı bulunamadı"));
        List<Order> orders = orderRepository.findByUserIdOrderByOrderDateDesc(user.getId());
        return orders.stream().map(this::mapToDto).collect(Collectors.toList());
    }

    public OrderDto getOrderDetails(Long orderId, String email) {
        User user = userRepository.findByEmail(email)
                .orElseThrow(() -> new ResourceNotFoundException("Kullanıcı bulunamadı"));
        Order order = orderRepository.findById(orderId)
                .orElseThrow(() -> new ResourceNotFoundException("Sipariş bulunamadı: " + orderId));

        if (!order.getUser().getId().equals(user.getId())) {
            throw new RuntimeException("Bu siparişe erişim yetkiniz yok");
        }

        return mapToDto(order);
    }

    @Transactional
    public OrderDto cancelOrder(Long orderId, String email) {
        User user = userRepository.findByEmail(email)
                .orElseThrow(() -> new ResourceNotFoundException("Kullanıcı bulunamadı"));
        Order order = orderRepository.findById(orderId)
                .orElseThrow(() -> new ResourceNotFoundException("Sipariş bulunamadı: " + orderId));

        if (!order.getUser().getId().equals(user.getId())) {
            throw new RuntimeException("Bu sipariş size ait değil");
        }

        if (order.getStatus() != OrderStatus.PENDING) {
            throw new IllegalStateException(
                "Yalnızca PENDING durumundaki siparişler iptal edilebilir. Mevcut durum: " + order.getStatus()
            );
        }

        order.setStatus(OrderStatus.CANCELLED);
        return mapToDto(orderRepository.save(order));
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
