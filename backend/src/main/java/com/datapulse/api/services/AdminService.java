package com.datapulse.api.services;

import java.math.BigDecimal;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.datapulse.api.dto.AdminStoreDto;
import com.datapulse.api.dto.AdminUserDto;
import com.datapulse.api.dto.AuditLogDto;
import com.datapulse.api.dto.CategoryDto;
import com.datapulse.api.dto.PlatformStatsDto;
import com.datapulse.api.dto.SystemConfigDto;
import com.datapulse.api.entities.AuditLog;
import com.datapulse.api.entities.Category;
import com.datapulse.api.entities.OrderStatus;
import com.datapulse.api.entities.RoleType;
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
}
