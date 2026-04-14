package com.datapulse.api.services;

import java.math.BigDecimal;
import java.math.RoundingMode;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.datapulse.api.dto.StoreDashboardResponse;
import com.datapulse.api.entities.OrderStatus;
import com.datapulse.api.entities.Store;
import com.datapulse.api.repositories.OrderRepository;
import com.datapulse.api.repositories.ProductRepository;
import com.datapulse.api.repositories.ReviewRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class CorporateAnalyticsService {

    private final OrderRepository orderRepository;
    private final ProductRepository productRepository;
    private final ReviewRepository reviewRepository;
    private final StoreService storeService;

    private static final int LOW_STOCK_THRESHOLD = 10;

    @Transactional(readOnly = true)
    public StoreDashboardResponse getDashboard(String ownerEmail) {
        Store store = storeService.getStoreEntityByOwnerEmail(ownerEmail);
        Long storeId = store.getId();

        // Gelir metrikleri
        BigDecimal totalRevenue = orderRepository.sumTotalPriceByStoreId(storeId);
        long totalOrders = orderRepository.countByStoreId(storeId);
        BigDecimal averageOrderValue = BigDecimal.ZERO;
        if (totalOrders > 0) {
            averageOrderValue = totalRevenue.divide(new BigDecimal(totalOrders), 2, RoundingMode.HALF_UP);
        }

        // Ürün metrikleri
        long activeProducts = productRepository.countByStoreIdAndIsActive(storeId, true);
        long lowStockProducts = productRepository.countByStoreIdAndStockQuantityLessThan(storeId, LOW_STOCK_THRESHOLD);

        // Sipariş statü dağılımı
        long pendingOrders = orderRepository.countByStoreIdAndStatus(storeId, OrderStatus.PENDING);
        long processingOrders = orderRepository.countByStoreIdAndStatus(storeId, OrderStatus.PROCESSING);
        long shippedOrders = orderRepository.countByStoreIdAndStatus(storeId, OrderStatus.SHIPPED);
        long deliveredOrders = orderRepository.countByStoreIdAndStatus(storeId, OrderStatus.DELIVERED);
        long cancelledOrders = orderRepository.countByStoreIdAndStatus(storeId, OrderStatus.CANCELLED);

        // Yorum metrikleri
        Double averageRating = productRepository.averageRatingByStoreId(storeId);
        long totalReviews = reviewRepository.countByProduct_Store_Id(storeId);

        return StoreDashboardResponse.builder()
                .totalRevenue(totalRevenue)
                .totalOrders(totalOrders)
                .averageOrderValue(averageOrderValue)
                .activeProducts(activeProducts)
                .lowStockProducts(lowStockProducts)
                .pendingOrders(pendingOrders)
                .processingOrders(processingOrders)
                .shippedOrders(shippedOrders)
                .deliveredOrders(deliveredOrders)
                .cancelledOrders(cancelledOrders)
                .averageRating(averageRating != null ? averageRating : 0.0)
                .totalReviews(totalReviews)
                .build();
    }
}
