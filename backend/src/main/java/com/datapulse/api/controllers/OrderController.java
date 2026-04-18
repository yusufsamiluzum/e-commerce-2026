package com.datapulse.api.controllers;

import com.datapulse.api.dto.OrderDto;
import com.datapulse.api.dto.OrderRequest;
import com.datapulse.api.services.OrderService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import java.util.List;

// [Düzeltme #3] @CrossOrigin kaldırıldı — CORS yönetimi global SecurityConfig üzerinden yapılıyor.
@RestController
@RequestMapping("/api/orders")
@RequiredArgsConstructor
// [Düzeltme #4] Tüm endpoint'ler için rol bazlı yetkilendirme eklendi.
// Kurallarınıza göre geçerli roller: INDIVIDUAL, CORPORATE, ADMIN
@PreAuthorize("hasAnyRole('INDIVIDUAL', 'CORPORATE')")
public class OrderController {

    // [Düzeltme #4] UserRepository kaldırıldı — kullanıcı çözümleme service
    // katmanına taşındı.
    private final OrderService orderService;

    // [Düzeltme #1] Dönüş tipi artık OrderDto — entity dışarıya sızmıyor.
    // [Düzeltme #2] Try-catch kaldırıldı — hatalar GlobalExceptionHandler
    // tarafından yakalanacak.
    @PostMapping
    public ResponseEntity<OrderDto> createOrder(
            @RequestBody OrderRequest request,
            Authentication authentication) {

        OrderDto createdOrder = orderService.createOrder(request, authentication.getName());
        return ResponseEntity.ok(createdOrder);
    }

    @GetMapping
    public ResponseEntity<List<OrderDto>> getMyOrders(Authentication authentication) {
        List<OrderDto> orders = orderService.getUserOrders(authentication.getName());
        return ResponseEntity.ok(orders);
    }

    @GetMapping("/{id}")
    public ResponseEntity<OrderDto> getOrderDetails(
            @PathVariable Long id,
            Authentication authentication) {

        OrderDto orderDetails = orderService.getOrderDetails(id, authentication.getName());
        return ResponseEntity.ok(orderDetails);
    }

    @PatchMapping("/{id}/cancel")
    public ResponseEntity<OrderDto> cancelOrder(
            @PathVariable Long id,
            Authentication authentication) {

        OrderDto cancelled = orderService.cancelOrder(id, authentication.getName());
        return ResponseEntity.ok(cancelled);
    }
}
