package com.datapulse.api.controllers;

import java.util.List;
import java.util.Map;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
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

import com.datapulse.api.dto.AdminStoreDto;
import com.datapulse.api.dto.AdminUserDto;
import com.datapulse.api.dto.AuditLogDto;
import com.datapulse.api.dto.CategoryDto;
import com.datapulse.api.dto.PlatformStatsDto;
import com.datapulse.api.dto.SystemConfigDto;
import com.datapulse.api.entities.StoreStatus;
import com.datapulse.api.entities.User;
import com.datapulse.api.entities.UserStatus;
import com.datapulse.api.services.AdminService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/admin")
@RequiredArgsConstructor
@PreAuthorize("hasRole('ADMIN')")
public class AdminController {

    private final AdminService adminService;

    // ─── Platform Dashboard ──────────────────────────────────────

    @GetMapping("/dashboard")
    public ResponseEntity<PlatformStatsDto> getDashboard() {
        return ResponseEntity.ok(adminService.getPlatformStats());
    }

    // ─── Kullanıcı Yönetimi ──────────────────────────────────────

    @GetMapping("/users")
    public ResponseEntity<Page<AdminUserDto>> getAllUsers(
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "20") int size) {
        Pageable pageable = PageRequest.of(page, size);
        return ResponseEntity.ok(adminService.getAllUsers(pageable));
    }

    @PatchMapping("/users/{id}/status")
    public ResponseEntity<AdminUserDto> updateUserStatus(
            Authentication authentication,
            @PathVariable Long id,
            @RequestBody Map<String, String> body) {
        Long adminId = ((User) authentication.getPrincipal()).getId();
        UserStatus newStatus = UserStatus.valueOf(body.get("status").toUpperCase());
        return ResponseEntity.ok(adminService.updateUserStatus(id, newStatus, adminId));
    }

    // ─── Mağaza Yönetimi ─────────────────────────────────────────

    @GetMapping("/stores")
    public ResponseEntity<Page<AdminStoreDto>> getAllStores(
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "20") int size) {
        Pageable pageable = PageRequest.of(page, size);
        return ResponseEntity.ok(adminService.getAllStores(pageable));
    }

    @GetMapping("/stores/{id}")
    public ResponseEntity<AdminStoreDto> getStoreDetail(@PathVariable Long id) {
        return ResponseEntity.ok(adminService.getStoreDetail(id));
    }

    @PatchMapping("/stores/{id}/status")
    public ResponseEntity<AdminStoreDto> updateStoreStatus(
            Authentication authentication,
            @PathVariable Long id,
            @RequestBody Map<String, String> body) {
        Long adminId = ((User) authentication.getPrincipal()).getId();
        StoreStatus newStatus = StoreStatus.valueOf(body.get("status").toUpperCase());
        return ResponseEntity.ok(adminService.updateStoreStatus(id, newStatus, adminId));
    }

    // ─── Mağaza Karşılaştırma (Cross-Store Comparison) ──────────

    @GetMapping("/stores/comparison")
    public ResponseEntity<List<AdminStoreDto>> getStoreComparison() {
        return ResponseEntity.ok(adminService.getStoreComparison());
    }

    // ─── Kategori Yönetimi ───────────────────────────────────────

    @GetMapping("/categories")
    public ResponseEntity<List<CategoryDto>> getAllCategories() {
        return ResponseEntity.ok(adminService.getAllCategories());
    }

    @PostMapping("/categories")
    public ResponseEntity<CategoryDto> createCategory(
            Authentication authentication,
            @RequestBody Map<String, Object> body) {
        Long adminId = ((User) authentication.getPrincipal()).getId();
        String name = (String) body.get("name");
        Long parentId = body.get("parentId") != null ? ((Number) body.get("parentId")).longValue() : null;
        return ResponseEntity.ok(adminService.createCategory(name, parentId, adminId));
    }

    @PutMapping("/categories/{id}")
    public ResponseEntity<CategoryDto> updateCategory(
            Authentication authentication,
            @PathVariable Long id,
            @RequestBody Map<String, String> body) {
        Long adminId = ((User) authentication.getPrincipal()).getId();
        return ResponseEntity.ok(adminService.updateCategory(id, body.get("name"), adminId));
    }

    @DeleteMapping("/categories/{id}")
    public ResponseEntity<Void> deleteCategory(
            Authentication authentication,
            @PathVariable Long id) {
        Long adminId = ((User) authentication.getPrincipal()).getId();
        adminService.deleteCategory(id, adminId);
        return ResponseEntity.noContent().build();
    }

    // ─── Sistem Konfigürasyonu ────────────────────────────────────

    @GetMapping("/config")
    public ResponseEntity<List<SystemConfigDto>> getAllConfigs() {
        return ResponseEntity.ok(adminService.getAllConfigs());
    }

    @PutMapping("/config/{id}")
    public ResponseEntity<SystemConfigDto> updateConfig(
            Authentication authentication,
            @PathVariable Long id,
            @RequestBody Map<String, String> body) {
        Long adminId = ((User) authentication.getPrincipal()).getId();
        return ResponseEntity.ok(adminService.updateConfig(id, body.get("value"), adminId));
    }

    // ─── Audit Log Görüntüleme ────────────────────────────────────

    @GetMapping("/audit-logs")
    public ResponseEntity<Page<AuditLogDto>> getAuditLogs(
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "20") int size,
            @RequestParam(required = false) String entityType) {
        Pageable pageable = PageRequest.of(page, size);
        if (entityType != null && !entityType.isEmpty()) {
            return ResponseEntity.ok(adminService.getAuditLogsByEntityType(entityType, pageable));
        }
        return ResponseEntity.ok(adminService.getAuditLogs(pageable));
    }
}
