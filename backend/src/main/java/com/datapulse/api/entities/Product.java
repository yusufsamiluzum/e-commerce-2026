package com.datapulse.api.entities;

import java.math.BigDecimal;
import java.time.LocalDateTime;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.PrePersist;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "products")
@Data @NoArgsConstructor @AllArgsConstructor @Builder
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "store_id", nullable = false)
    private Store store;

    @Column(name = "category_id")
    private Long categoryId;

    @Column(nullable = false, unique = true)
    private String sku;

    @Column(nullable = false)
    private String name;

    @Column(columnDefinition = "TEXT")
    private String description;

    @Column(nullable = false, precision = 10, scale = 2)
    private BigDecimal unitPrice;

    @Column(nullable = false)
    private Integer stockQuantity;

    // --- UI SUPPORT FIELDS ---

    @Column(precision = 10, scale = 2)
    private BigDecimal originalPrice; // Supports strikethrough & discount math

    private String imageUrl; // Supports the main product card image

    @Builder.Default
    @Column(nullable = false)
    private Double averageRating = 0.0; // Cached for performance

    @Builder.Default
    @Column(nullable = false)
    private Integer reviewCount = 0; // Cached for performance

    @Builder.Default
    @Column(nullable = false)
    private Boolean isFeatured = false; // Supports the "Featured" dropdown filter

    @Column(nullable = false, updatable = false)
    private LocalDateTime createdAt; // Supports the "New" badge logic

    // -------------------------

    @Builder.Default
    @Column(nullable = false)
    private Boolean isActive = true;

    @PrePersist
    protected void onCreate() {
        this.createdAt = LocalDateTime.now();
    }
}