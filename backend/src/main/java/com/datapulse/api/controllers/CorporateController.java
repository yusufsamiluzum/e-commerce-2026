package com.datapulse.api.controllers;

import java.time.LocalDate;
import java.util.List;
import java.util.Map;

import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.datapulse.api.dto.CorporateOrderDto;
import com.datapulse.api.dto.CorporateProductDto;
import com.datapulse.api.dto.CustomerSegmentationResponse;
import com.datapulse.api.dto.InventoryItemDto;
import com.datapulse.api.dto.ProductRequest;
import com.datapulse.api.dto.SalesAnalyticsResponse;
import com.datapulse.api.dto.StoreDashboardResponse;
import com.datapulse.api.dto.StoreDto;
import com.datapulse.api.dto.StoreRequest;
import com.datapulse.api.dto.StoreReviewDto;
import com.datapulse.api.entities.Category;
import com.datapulse.api.entities.OrderStatus;
import com.datapulse.api.repositories.CategoryRepository;
import com.datapulse.api.services.CatalogService;
import com.datapulse.api.services.CorporateAnalyticsService;
import com.datapulse.api.services.CustomerSegmentationService;
import com.datapulse.api.services.InventoryService;
import com.datapulse.api.services.OrderManagementService;
import com.datapulse.api.services.ReviewManagementService;
import com.datapulse.api.services.SalesAnalyticsService;
import com.datapulse.api.services.StoreService;

import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/corporate")
@RequiredArgsConstructor
@PreAuthorize("hasAnyRole('CORPORATE', 'ADMIN')")
public class CorporateController {

    private final StoreService storeService;
    private final CorporateAnalyticsService corporateAnalyticsService;
    private final CatalogService catalogService;
    private final OrderManagementService orderManagementService;
    private final InventoryService inventoryService;
    private final SalesAnalyticsService salesAnalyticsService;
    private final CustomerSegmentationService customerSegmentationService;
    private final ReviewManagementService reviewManagementService;
    private final CategoryRepository categoryRepository;

    // ─── Mağaza Yönetimi ───────────────────────────────────────────

    @PostMapping("/store")
    public ResponseEntity<StoreDto> createStore(
            Authentication authentication,
            @Valid @RequestBody StoreRequest request) {
        String email = authentication.getName();
        StoreDto store = storeService.createStore(email, request);
        return ResponseEntity.ok(store);
    }

    @GetMapping("/store")
    public ResponseEntity<StoreDto> getMyStore(Authentication authentication) {
        String email = authentication.getName();
        StoreDto store = storeService.getMyStore(email);
        return ResponseEntity.ok(store);
    }

    @PutMapping("/store")
    public ResponseEntity<StoreDto> updateStore(
            Authentication authentication,
            @Valid @RequestBody StoreRequest request) {
        String email = authentication.getName();
        StoreDto store = storeService.updateStore(email, request);
        return ResponseEntity.ok(store);
    }

    // ─── Dashboard ────────────────────────────────────────────────

    @GetMapping("/dashboard")
    public ResponseEntity<StoreDashboardResponse> getDashboard(Authentication authentication) {
        String email = authentication.getName();
        StoreDashboardResponse dashboard = corporateAnalyticsService.getDashboard(email);
        return ResponseEntity.ok(dashboard);
    }

    // ─── Ürün Kataloğu (CRUD) ─────────────────────────────────────

    @GetMapping("/products")
    public ResponseEntity<List<CorporateProductDto>> getMyProducts(Authentication authentication) {
        String email = authentication.getName();
        return ResponseEntity.ok(catalogService.getMyProducts(email));
    }

    @GetMapping("/products/{id}")
    public ResponseEntity<CorporateProductDto> getProductDetail(
            Authentication authentication,
            @PathVariable Long id) {
        String email = authentication.getName();
        return ResponseEntity.ok(catalogService.getProductDetail(email, id));
    }

    @PostMapping("/products")
    public ResponseEntity<CorporateProductDto> createProduct(
            Authentication authentication,
            @Valid @RequestBody ProductRequest request) {
        String email = authentication.getName();
        return ResponseEntity.ok(catalogService.createProduct(email, request));
    }

    @PutMapping("/products/{id}")
    public ResponseEntity<CorporateProductDto> updateProduct(
            Authentication authentication,
            @PathVariable Long id,
            @Valid @RequestBody ProductRequest request) {
        String email = authentication.getName();
        return ResponseEntity.ok(catalogService.updateProduct(email, id, request));
    }

    @DeleteMapping("/products/{id}")
    public ResponseEntity<Void> deactivateProduct(
            Authentication authentication,
            @PathVariable Long id) {
        String email = authentication.getName();
        catalogService.deactivateProduct(email, id);
        return ResponseEntity.noContent().build();
    }

    @PatchMapping("/products/{id}/reactivate")
    public ResponseEntity<Void> reactivateProduct(
            Authentication authentication,
            @PathVariable Long id) {
        String email = authentication.getName();
        catalogService.reactivateProduct(email, id);
        return ResponseEntity.noContent().build();
    }

    // ─── Kategoriler (yardımcı endpoint) ──────────────────────────

    @GetMapping("/categories")
    public ResponseEntity<List<Category>> getCategories() {
        return ResponseEntity.ok(categoryRepository.findAll());
    }

    // ─── Sipariş Yönetimi ─────────────────────────────────────────

    @GetMapping("/orders")
    public ResponseEntity<List<CorporateOrderDto>> getStoreOrders(
            Authentication authentication,
            @RequestParam(required = false) String status,
            @RequestParam(required = false) String date) {
        String email = authentication.getName();
        if (date != null && !date.isEmpty()) {
            java.time.LocalDate localDate = java.time.LocalDate.parse(date);
            return ResponseEntity.ok(orderManagementService.getStoreOrdersByDate(email, localDate));
        }
        if (status != null && !status.isEmpty()) {
            OrderStatus orderStatus = OrderStatus.valueOf(status.toUpperCase());
            return ResponseEntity.ok(orderManagementService.getStoreOrdersByStatus(email, orderStatus));
        }
        return ResponseEntity.ok(orderManagementService.getStoreOrders(email));
    }

    @PatchMapping("/orders/{id}/status")
    public ResponseEntity<CorporateOrderDto> updateOrderStatus(
            Authentication authentication,
            @PathVariable Long id,
            @RequestBody Map<String, String> body) {
        String email = authentication.getName();
        OrderStatus newStatus = OrderStatus.valueOf(body.get("status").toUpperCase());
        return ResponseEntity.ok(orderManagementService.updateOrderStatus(email, id, newStatus));
    }

    // ─── Envanter Yönetimi ─────────────────────────────────────────

    @GetMapping("/inventory")
    public ResponseEntity<List<InventoryItemDto>> getInventory(Authentication authentication) {
        String email = authentication.getName();
        return ResponseEntity.ok(inventoryService.getInventory(email));
    }

    @PatchMapping("/inventory/{productId}/stock")
    public ResponseEntity<InventoryItemDto> updateStock(
            Authentication authentication,
            @PathVariable Long productId,
            @RequestBody Map<String, Integer> body) {
        String email = authentication.getName();
        return ResponseEntity.ok(inventoryService.updateStock(email, productId, body.get("quantity")));
    }

    // ─── Satış Analitiği ──────────────────────────────────────────

    @GetMapping("/analytics")
    public ResponseEntity<SalesAnalyticsResponse> getSalesAnalytics(
            Authentication authentication,
            @RequestParam(required = false) LocalDate startDate,
            @RequestParam(required = false) LocalDate endDate) {
        String email = authentication.getName();
        return ResponseEntity.ok(salesAnalyticsService.getAnalytics(email, startDate, endDate));
    }

    // ─── Müşteri Segmentasyonu ──────────────────────────────

    @GetMapping("/customers")
    public ResponseEntity<CustomerSegmentationResponse> getCustomerSegmentation(Authentication authentication) {
        String email = authentication.getName();
        return ResponseEntity.ok(customerSegmentationService.getSegmentation(email));
    }

    // ─── Yorum Yönetimi ───────────────────────────────────────

    @GetMapping("/reviews")
    public ResponseEntity<List<StoreReviewDto>> getStoreReviews(Authentication authentication) {
        String email = authentication.getName();
        return ResponseEntity.ok(reviewManagementService.getStoreReviews(email));
    }

    @PutMapping("/reviews/{reviewId}/reply")
    public ResponseEntity<StoreReviewDto> replyToReview(
            Authentication authentication,
            @PathVariable Long reviewId,
            @RequestBody Map<String, String> body) {
        String email = authentication.getName();
        String replyText = body.get("reply");
        return ResponseEntity.ok(reviewManagementService.replyToReview(email, reviewId, replyText));
    }

    @DeleteMapping("/reviews/{reviewId}/reply")
    public ResponseEntity<StoreReviewDto> deleteReply(
            Authentication authentication,
            @PathVariable Long reviewId) {
        String email = authentication.getName();
        return ResponseEntity.ok(reviewManagementService.deleteReply(email, reviewId));
    }
}
