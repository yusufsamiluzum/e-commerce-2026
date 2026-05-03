package com.datapulse.api.services;

import java.math.BigDecimal;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.datapulse.api.dto.AdminOrderDto;
import com.datapulse.api.dto.AdminRefundDto;
import com.datapulse.api.dto.AdminReviewDto;
import com.datapulse.api.dto.AdminStoreDto;
import com.datapulse.api.dto.AdminUserDto;
import com.datapulse.api.dto.AuditLogDto;
import com.datapulse.api.dto.CategoryDto;
import com.datapulse.api.dto.PlatformStatsDto;
import com.datapulse.api.dto.SystemConfigDto;
import com.datapulse.api.entities.AuditLog;
import com.datapulse.api.entities.Category;
import com.datapulse.api.entities.Order;
import com.datapulse.api.entities.OrderStatus;
import com.datapulse.api.entities.Refund;
import com.datapulse.api.entities.Review;
import com.datapulse.api.entities.RoleType;
import com.datapulse.api.entities.Shipment;
import com.datapulse.api.entities.Store;
import com.datapulse.api.entities.StoreStatus;
import com.datapulse.api.entities.SystemConfig;
import com.datapulse.api.entities.User;
import com.datapulse.api.entities.UserStatus;
import com.datapulse.api.exceptions.ResourceNotFoundException;
import com.datapulse.api.repositories.AuditLogRepository;
import com.datapulse.api.repositories.CategoryRepository;
import com.datapulse.api.repositories.OrderRepository;
import com.datapulse.api.repositories.ProductRepository;
import com.datapulse.api.repositories.RefundRepository;
import com.datapulse.api.repositories.ReviewRepository;
import com.datapulse.api.repositories.ShipmentRepository;
import com.datapulse.api.repositories.StoreRepository;
import com.datapulse.api.repositories.SystemConfigRepository;
import com.datapulse.api.repositories.UserRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class AdminService {

    private final UserRepository userRepository;
    private final StoreRepository storeRepository;
    private final OrderRepository orderRepository;
    private final ProductRepository productRepository;
    private final CategoryRepository categoryRepository;
    private final SystemConfigRepository systemConfigRepository;
    private final AuditLogRepository auditLogRepository;
    private final ShipmentRepository shipmentRepository;
    private final RefundRepository refundRepository;
    private final ReviewRepository reviewRepository;

    // ─── Platform Dashboard ──────────────────────────────────────

    @Transactional(readOnly = true)
    public PlatformStatsDto getPlatformStats() {
        return PlatformStatsDto.builder()
                .totalUsers(userRepository.count())
                .totalIndividualUsers(userRepository.countByRoleType(RoleType.INDIVIDUAL))
                .totalCorporateUsers(userRepository.countByRoleType(RoleType.CORPORATE))
                .totalStores(storeRepository.count())
                .activeStores(storeRepository.countByStatus(StoreStatus.ACTIVE))
                .pendingStores(storeRepository.countByStatus(StoreStatus.PENDING_APPROVAL))
                .suspendedStores(storeRepository.countByStatus(StoreStatus.SUSPENDED))
                .totalOrders(orderRepository.count())
                .totalRevenue(orderRepository.sumTotalRevenuePlatformWide())
                .suspendedUsers(userRepository.countByStatus(UserStatus.SUSPENDED))
                .totalProducts(productRepository.count())
                .totalCategories(categoryRepository.count())
                .build();
    }

    // ─── Kullanıcı Yönetimi ──────────────────────────────────────

    @Transactional(readOnly = true)
    public Page<AdminUserDto> getAllUsers(Pageable pageable) {
        return userRepository.findAllByOrderByCreatedAtDesc(pageable)
                .map(this::mapUserToDto);
    }

    @Transactional
    public AdminUserDto updateUserStatus(Long userId, UserStatus newStatus, Long adminId) {
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new ResourceNotFoundException("Kullanıcı bulunamadı: " + userId));

        UserStatus oldStatus = user.getStatus();
        user.setStatus(newStatus);
        User saved = userRepository.save(user);

        // Audit log kaydı
        writeAuditLog(adminId, "UPDATE_USER_STATUS",
                "USER", userId,
                "Status: " + oldStatus + " → " + newStatus);

        return mapUserToDto(saved);
    }

    // ─── Mağaza Yönetimi ─────────────────────────────────────────

    @Transactional(readOnly = true)
    public Page<AdminStoreDto> getAllStores(Pageable pageable) {
        return storeRepository.findAllByOrderByCreatedAtDesc(pageable)
                .map(this::mapStoreToDto);
    }

    @Transactional(readOnly = true)
    public AdminStoreDto getStoreDetail(Long storeId) {
        Store store = storeRepository.findById(storeId)
                .orElseThrow(() -> new ResourceNotFoundException("Mağaza bulunamadı: " + storeId));
        return mapStoreToDto(store);
    }

    @Transactional
    public AdminStoreDto updateStoreStatus(Long storeId, StoreStatus newStatus, Long adminId) {
        Store store = storeRepository.findById(storeId)
                .orElseThrow(() -> new ResourceNotFoundException("Mağaza bulunamadı: " + storeId));

        StoreStatus oldStatus = store.getStatus();
        store.setStatus(newStatus);
        Store saved = storeRepository.save(store);

        // Audit log kaydı
        writeAuditLog(adminId, "UPDATE_STORE_STATUS",
                "STORE", storeId,
                "Status: " + oldStatus + " → " + newStatus);

        return mapStoreToDto(saved);
    }

    // ─── Mağaza Karşılaştırma (Cross-Store Comparison) ──────────

    @Transactional(readOnly = true)
    public List<AdminStoreDto> getStoreComparison() {
        List<Store> allStores = storeRepository.findAll();
        return allStores.stream()
                .map(this::mapStoreToDto)
                .collect(Collectors.toList());
    }

    // ─── Sipariş Yönetimi (Admin Gözetimi) ──────────────────────
    // Sipariş akışı müşteri ↔ satıcı arasında olup admin yalnızca
    // izleme ve gerektiğinde müdahale yetkisine sahiptir.

    @Transactional(readOnly = true)
    public Page<AdminOrderDto> getAllOrders(Pageable pageable) {
        return orderRepository.findAllByOrderByOrderDateDesc(pageable)
                .map(this::mapOrderToDto);
    }

    @Transactional(readOnly = true)
    public Page<AdminOrderDto> getOrdersByStatus(OrderStatus status, Pageable pageable) {
        return orderRepository.findByStatusOrderByOrderDateDesc(status, pageable)
                .map(this::mapOrderToDto);
    }

    /**
     * Admin müdahalesi: Sipariş durumunu değiştirir.
     * Kullanım senaryoları: Anlaşmazlık çözümü, hatalı durum düzeltme.
     */
    @Transactional
    public AdminOrderDto updateOrderStatus(Long orderId, OrderStatus newStatus, Long adminId) {
        Order order = orderRepository.findById(orderId)
                .orElseThrow(() -> new ResourceNotFoundException("Sipariş bulunamadı: " + orderId));

        OrderStatus oldStatus = order.getStatus();
        order.setStatus(newStatus);
        Order saved = orderRepository.save(order);

        writeAuditLog(adminId, "ADMIN_UPDATE_ORDER_STATUS",
                "ORDER", orderId,
                "Status: " + oldStatus + " → " + newStatus);

        return mapOrderToDto(saved);
    }

    /**
     * Dashboard gelir trend verisi — son N gün platform geneli günlük gelir +
     * sipariş sayısı.
     */
    @Transactional(readOnly = true)
    public List<Object[]> getRevenueTrend(int days) {
        java.time.LocalDateTime end = java.time.LocalDateTime.now();
        java.time.LocalDateTime start = end.minusDays(days);
        return orderRepository.dailyRevenuePlatformWide(start, end);
    }

    // ─── Kategori Yönetimi ───────────────────────────────────────

    @Transactional(readOnly = true)
    public List<CategoryDto> getAllCategories() {
        List<Category> allCategories = categoryRepository.findAll();
        // Kök kategorileri bul ve ağaç yapısı oluştur
        return allCategories.stream()
                .filter(c -> c.getParent() == null)
                .map(this::mapCategoryToDto)
                .collect(Collectors.toList());
    }

    @Transactional
    public CategoryDto createCategory(String name, Long parentId, Long adminId) {
        Category category = new Category();
        category.setName(name);

        if (parentId != null) {
            Category parent = categoryRepository.findById(parentId)
                    .orElseThrow(() -> new ResourceNotFoundException("Üst kategori bulunamadı: " + parentId));
            category.setParent(parent);
        }

        Category saved = categoryRepository.save(category);

        writeAuditLog(adminId, "CREATE_CATEGORY", "CATEGORY", saved.getId(), null);

        return mapCategoryToDto(saved);
    }

    @Transactional
    public CategoryDto updateCategory(Long categoryId, String newName, Long adminId) {
        Category category = categoryRepository.findById(categoryId)
                .orElseThrow(() -> new ResourceNotFoundException("Kategori bulunamadı: " + categoryId));

        category.setName(newName);
        Category saved = categoryRepository.save(category);

        writeAuditLog(adminId, "UPDATE_CATEGORY", "CATEGORY", categoryId, null);

        return mapCategoryToDto(saved);
    }

    @Transactional
    public void deleteCategory(Long categoryId, Long adminId) {
        Category category = categoryRepository.findById(categoryId)
                .orElseThrow(() -> new ResourceNotFoundException("Kategori bulunamadı: " + categoryId));

        writeAuditLog(adminId, "DELETE_CATEGORY", "CATEGORY", categoryId, null);

        categoryRepository.delete(category);
    }

    // ─── Sistem Konfigürasyonu ────────────────────────────────────

    @Transactional(readOnly = true)
    public List<SystemConfigDto> getAllConfigs() {
        return systemConfigRepository.findAll().stream()
                .map(this::mapConfigToDto)
                .collect(Collectors.toList());
    }

    @Transactional
    public SystemConfigDto updateConfig(Long configId, String newValue, Long adminId) {
        SystemConfig config = systemConfigRepository.findById(configId)
                .orElseThrow(() -> new ResourceNotFoundException("Konfigürasyon bulunamadı: " + configId));

        config.setConfigValue(newValue);
        config.setLastUpdatedBy(adminId);
        SystemConfig saved = systemConfigRepository.save(config);

        writeAuditLog(adminId, "UPDATE_CONFIG", "SYSTEM_CONFIG", configId, null);

        return mapConfigToDto(saved);
    }

    // ─── İade Yönetimi (Anlaşmazlık Çözümü) ─────────────────────
    // Akış: Müşteri talep → Satıcı yanıtlar → Anlaşmazlıkta admin karar verici.

    @Transactional(readOnly = true)
    public Page<AdminRefundDto> getAllRefunds(Pageable pageable) {
        return refundRepository.findAllByOrderByProcessedAtDesc(pageable)
                .map(this::mapRefundToDto);
    }

    @Transactional(readOnly = true)
    public Page<AdminRefundDto> getRefundsByStatus(String status, Pageable pageable) {
        return refundRepository.findByStatusOrderByProcessedAtDesc(status, pageable)
                .map(this::mapRefundToDto);
    }

    @Transactional(readOnly = true)
    public long getPendingRefundCount() {
        return refundRepository.countByStatus("PENDING");
    }

    /**
     * Admin kararı: İade talebini onayla veya reddet.
     * Anlaşmazlık durumunda admin son karar mercidir.
     */
    @Transactional
    public AdminRefundDto updateRefundStatus(Long refundId, String newStatus, Long adminId) {
        Refund refund = refundRepository.findById(refundId)
                .orElseThrow(() -> new ResourceNotFoundException("İade talebi bulunamadı: " + refundId));

        String oldStatus = refund.getStatus();
        refund.setStatus(newStatus);
        Refund saved = refundRepository.save(refund);

        writeAuditLog(adminId, "ADMIN_REFUND_DECISION",
                "REFUND", refundId,
                "Status: " + oldStatus + " → " + newStatus);

        return mapRefundToDto(saved);
    }

    // ─── Yorum Moderasyonu ─────────────────────────────────────────

    @Transactional(readOnly = true)
    public Page<AdminReviewDto> getAllReviews(Pageable pageable) {
        return reviewRepository.findAllByOrderByCreatedAtDesc(pageable)
                .map(this::mapReviewToDto);
    }

    @Transactional(readOnly = true)
    public Page<AdminReviewDto> getReviewsBySentiment(String sentiment, Pageable pageable) {
        return reviewRepository.findBySentimentOrderByCreatedAtDesc(sentiment, pageable)
                .map(this::mapReviewToDto);
    }

    @Transactional
    public void deleteReview(Long reviewId, Long adminId) {
        Review review = reviewRepository.findById(reviewId)
                .orElseThrow(() -> new ResourceNotFoundException("Yorum bulunamadı: " + reviewId));

        writeAuditLog(adminId, "DELETE_REVIEW", "REVIEW", reviewId,
                "Product: " + review.getProduct().getName() + " | User: " + review.getUser().getFullName());

        reviewRepository.delete(review);
    }

    // ─── CSV Export ──────────────────────────────────────────────

    @Transactional(readOnly = true)
    public String exportUsersCsv() {
        StringBuilder sb = new StringBuilder();
        sb.append("ID,Full Name,Email,Role,Status,Gender,Created At\n");
        userRepository.findAll().forEach(u -> sb.append(String.format("%d,\"%s\",\"%s\",%s,%s,%s,%s\n",
                u.getId(), u.getFullName(), u.getEmail(), u.getRoleType(), u.getStatus(),
                u.getGender() != null ? u.getGender() : "", u.getCreatedAt())));
        return sb.toString();
    }

    @Transactional(readOnly = true)
    public String exportOrdersCsv() {
        StringBuilder sb = new StringBuilder();
        sb.append("ID,User,Email,Store,Status,Total Price,Order Date,Item Count\n");
        orderRepository.findAll().forEach(o -> sb.append(String.format("%d,\"%s\",\"%s\",\"%s\",%s,%.2f,%s,%d\n",
                o.getId(), o.getUser().getFullName(), o.getUser().getEmail(),
                o.getStore().getName(), o.getStatus(), o.getTotalPrice(),
                o.getOrderDate(), o.getItems() != null ? o.getItems().size() : 0)));
        return sb.toString();
    }

    @Transactional(readOnly = true)
    public String exportStoresCsv() {
        StringBuilder sb = new StringBuilder();
        sb.append("ID,Store Name,Owner,Owner Email,Status,Currency,Created At\n");
        storeRepository.findAll().forEach(s -> sb.append(String.format("%d,\"%s\",\"%s\",\"%s\",%s,%s,%s\n",
                s.getId(), s.getName(), s.getOwner().getFullName(), s.getOwner().getEmail(),
                s.getStatus(), s.getBaseCurrency(), s.getCreatedAt())));
        return sb.toString();
    }

    // ─── Audit Log Görüntüleme ────────────────────────────────────

    @Transactional(readOnly = true)
    public Page<AuditLogDto> getAuditLogs(Pageable pageable) {
        return auditLogRepository.findAllByOrderByTimestampDesc(pageable)
                .map(this::mapAuditLogToDto);
    }

    @Transactional(readOnly = true)
    public Page<AuditLogDto> getAuditLogsByEntityType(String entityType, Pageable pageable) {
        return auditLogRepository.findByEntityTypeOrderByTimestampDesc(entityType, pageable)
                .map(this::mapAuditLogToDto);
    }

    // ─── Audit Log Yazma (İç kullanım) ───────────────────────────

    private void writeAuditLog(Long userId, String action, String entityType, Long entityId, String details) {
        AuditLog log = AuditLog.builder()
                .userId(userId)
                .actionPerformed(action + (details != null ? " | " + details : ""))
                .entityType(entityType)
                .entityId(entityId)
                .build();
        auditLogRepository.save(log);
    }

    // ─── Mapper Metotları ────────────────────────────────────────

    private AdminUserDto mapUserToDto(User user) {
        return AdminUserDto.builder()
                .id(user.getId())
                .fullName(user.getFullName())
                .email(user.getEmail())
                .roleType(user.getRoleType().name())
                .status(user.getStatus().name())
                .gender(user.getGender())
                .createdAt(user.getCreatedAt())
                .build();
    }

    private AdminStoreDto mapStoreToDto(Store store) {
        long totalProducts = productRepository.countByStoreIdAndIsActive(store.getId(), true)
                + productRepository.countByStoreIdAndIsActive(store.getId(), false);
        long activeProducts = productRepository.countByStoreIdAndIsActive(store.getId(), true);
        long totalOrders = orderRepository.countByStoreIdAndStatusNot(store.getId(), OrderStatus.CANCELLED);
        BigDecimal revenue = orderRepository.sumRevenueByStoreId(store.getId());
        Double avgRating = productRepository.averageRatingByStoreId(store.getId());

        return AdminStoreDto.builder()
                .id(store.getId())
                .name(store.getName())
                .description(store.getDescription())
                .status(store.getStatus().name())
                .baseCurrency(store.getBaseCurrency())
                .createdAt(store.getCreatedAt())
                .ownerName(store.getOwner().getFullName())
                .ownerEmail(store.getOwner().getEmail())
                .totalProducts(totalProducts)
                .activeProducts(activeProducts)
                .totalOrders(totalOrders)
                .totalRevenue(revenue != null ? revenue : BigDecimal.ZERO)
                .averageRating(avgRating != null ? avgRating : 0.0)
                .build();
    }

    private CategoryDto mapCategoryToDto(Category category) {
        List<CategoryDto> children = List.of();
        if (category.getSubCategories() != null && !category.getSubCategories().isEmpty()) {
            children = category.getSubCategories().stream()
                    .map(this::mapCategoryToDto)
                    .collect(Collectors.toList());
        }
        return CategoryDto.builder()
                .id(category.getId())
                .name(category.getName())
                .parentId(category.getParent() != null ? category.getParent().getId() : null)
                .children(children)
                .build();
    }

    private SystemConfigDto mapConfigToDto(SystemConfig config) {
        return SystemConfigDto.builder()
                .id(config.getId())
                .configKey(config.getConfigKey())
                .configValue(config.getConfigValue())
                .isSecret(config.isSecret())
                .updatedAt(config.getUpdatedAt())
                .build();
    }

    private AuditLogDto mapAuditLogToDto(AuditLog log) {
        // Kullanıcı adını çöz (audit log sadece userId tutuyor)
        String userName = "System";
        if (log.getUserId() != null) {
            userName = userRepository.findById(log.getUserId())
                    .map(User::getFullName)
                    .orElse("Deleted User #" + log.getUserId());
        }

        return AuditLogDto.builder()
                .id(log.getId())
                .userId(log.getUserId())
                .userName(userName)
                .actionPerformed(log.getActionPerformed())
                .entityType(log.getEntityType())
                .entityId(log.getEntityId())
                .ipAddress(log.getIpAddress())
                .timestamp(log.getTimestamp())
                .build();
    }

    private AdminOrderDto mapOrderToDto(Order order) {
        // Kargo bilgisini al (varsa)
        String shipmentStatus = null;
        String trackingNumber = null;
        String carrier = null;
        var shipment = shipmentRepository.findByOrderId(order.getId());
        if (shipment.isPresent()) {
            Shipment s = shipment.get();
            shipmentStatus = s.getStatus();
            trackingNumber = s.getTrackingNumber();
            carrier = s.getCarrier();
        }

        return AdminOrderDto.builder()
                .id(order.getId())
                .userName(order.getUser().getFullName())
                .userEmail(order.getUser().getEmail())
                .storeName(order.getStore().getName())
                .storeId(order.getStore().getId())
                .status(order.getStatus().name())
                .totalPrice(order.getTotalPrice())
                .orderDate(order.getOrderDate())
                .itemCount(order.getItems() != null ? order.getItems().size() : 0)
                .shipmentStatus(shipmentStatus)
                .trackingNumber(trackingNumber)
                .carrier(carrier)
                .build();
    }

    private AdminRefundDto mapRefundToDto(Refund refund) {
        Order order = refund.getOrder();
        String productName = "—";

        // Önce refund'a bağlı orderItem'dan ürünü al
        if (refund.getOrderItem() != null && refund.getOrderItem().getProduct() != null) {
            productName = refund.getOrderItem().getProduct().getName();
        }
        // orderItem null ise, siparişteki ürünleri göster (fallback)
        else if (order.getItems() != null && !order.getItems().isEmpty()) {
            productName = order.getItems().stream()
                    .filter(item -> item.getProduct() != null)
                    .map(item -> item.getProduct().getName())
                    .collect(java.util.stream.Collectors.joining(", "));
        }

        return AdminRefundDto.builder()
                .id(refund.getId())
                .orderId(order.getId())
                .userName(order.getUser().getFullName())
                .userEmail(order.getUser().getEmail())
                .storeName(order.getStore().getName())
                .productName(productName)
                .refundAmount(refund.getRefundAmount())
                .reason(refund.getReason())
                .status(refund.getStatus())
                .processedAt(refund.getProcessedAt())
                .build();
    }

    private AdminReviewDto mapReviewToDto(Review review) {
        return AdminReviewDto.builder()
                .id(review.getId())
                .userName(review.getUser().getFullName())
                .userEmail(review.getUser().getEmail())
                .productName(review.getProduct().getName())
                .storeName(review.getProduct().getStore().getName())
                .starRating(review.getStarRating())
                .sentiment(review.getSentiment())
                .reviewText(review.getReviewText())
                .helpfulVotes(review.getHelpfulVotes())
                .totalVotes(review.getTotalVotes())
                .createdAt(review.getCreatedAt())
                .build();
    }
}
