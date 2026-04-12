package com.datapulse.api.services;

import com.datapulse.api.dto.OrderRequest;
import com.datapulse.api.entities.*;
import com.datapulse.api.exceptions.ResourceNotFoundException;
import com.datapulse.api.repositories.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.math.BigDecimal;
import java.util.ArrayList;

@Service
public class OrderService {
    private final OrderRepository orderRepository;
    private final OrderItemRepository orderItemRepository;
    private final UserRepository userRepository;
    private final StoreRepository storeRepository;
    private final ProductRepository productRepository;

    @Autowired
    public OrderService(OrderRepository orderRepository, OrderItemRepository orderItemRepository,
                        UserRepository userRepository, StoreRepository storeRepository, ProductRepository productRepository) {
        this.orderRepository = orderRepository;
        this.orderItemRepository = orderItemRepository;
        this.userRepository = userRepository;
        this.storeRepository = storeRepository;
        this.productRepository = productRepository;
    }

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
}
