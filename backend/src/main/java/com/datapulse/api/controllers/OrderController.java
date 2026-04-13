package com.datapulse.api.controllers;

import com.datapulse.api.dto.OrderRequest;
import com.datapulse.api.dto.OrderDto;
import com.datapulse.api.entities.Order;
import com.datapulse.api.services.OrderService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.datapulse.api.entities.User;
import com.datapulse.api.repositories.UserRepository;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.Authentication;

import java.util.List;

@RestController
@RequestMapping("/api/orders")
@CrossOrigin(origins = "*")
@RequiredArgsConstructor
public class OrderController {

    private final OrderService orderService;
    private final UserRepository userRepository;

    @PostMapping
    public ResponseEntity<?> createOrder(@RequestBody OrderRequest request) {
        try {
            Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
            if (authentication == null || !authentication.isAuthenticated() || "anonymousUser".equals(authentication.getPrincipal())) {
                return ResponseEntity.status(401).body("User not authenticated");
            }
            String email = authentication.getName();
            User user = userRepository.findByEmail(email).orElseThrow(() -> new RuntimeException("Logged in user not found"));
            
            request.setUserId(user.getId());
            Order order = orderService.createOrder(request);
            return ResponseEntity.ok().body(java.util.Map.of(
                "message", "Order created successfully",
                "orderId", order.getId()
            ));
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(java.util.Map.of("error", e.getMessage()));
        }
    }

    @GetMapping
    public ResponseEntity<?> getMyOrders() {
        try {
            Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
            if (authentication == null || !authentication.isAuthenticated() || "anonymousUser".equals(authentication.getPrincipal())) {
                return ResponseEntity.status(401).body("User not authenticated");
            }
            String email = authentication.getName();
            User user = userRepository.findByEmail(email).orElseThrow(() -> new RuntimeException("Logged in user not found"));
            
            List<OrderDto> orders = orderService.getUserOrders(user.getId());
            return ResponseEntity.ok(orders);
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(java.util.Map.of("error", e.getMessage()));
        }
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getOrderDetails(@PathVariable Long id) {
        try {
            Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
            if (authentication == null || !authentication.isAuthenticated() || "anonymousUser".equals(authentication.getPrincipal())) {
                return ResponseEntity.status(401).body("User not authenticated");
            }
            String email = authentication.getName();
            User user = userRepository.findByEmail(email).orElseThrow(() -> new RuntimeException("Logged in user not found"));

            OrderDto orderDetails = orderService.getOrderDetails(id, user.getId());
            return ResponseEntity.ok(orderDetails);
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(java.util.Map.of("error", e.getMessage()));
        }
    }

    @PatchMapping("/{id}/cancel")
    public ResponseEntity<?> cancelOrder(@PathVariable Long id) {
        try {
            Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
            if (authentication == null || !authentication.isAuthenticated() || "anonymousUser".equals(authentication.getPrincipal())) {
                return ResponseEntity.status(401).body("User not authenticated");
            }
            String email = authentication.getName();
            User user = userRepository.findByEmail(email).orElseThrow(() -> new RuntimeException("Logged in user not found"));

            OrderDto cancelled = orderService.cancelOrder(id, user.getId());
            return ResponseEntity.ok(cancelled);
        } catch (IllegalStateException e) {
            return ResponseEntity.badRequest().body(java.util.Map.of("error", e.getMessage()));
        } catch (Exception e) {
            return ResponseEntity.status(403).body(java.util.Map.of("error", e.getMessage()));
        }
    }
}

