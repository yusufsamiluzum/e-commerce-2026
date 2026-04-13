package com.datapulse.api.repositories;

import com.datapulse.api.entities.ProductImage;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;

public interface ProductImageRepository extends JpaRepository<ProductImage, Long> {

    List<ProductImage> findByProductIdOrderByDisplayOrderAsc(Long productId);

    Optional<ProductImage> findByProductIdAndIsPrimaryTrue(Long productId);

    @Modifying
    @Query("UPDATE ProductImage pi SET pi.isPrimary = false WHERE pi.product.id = :productId")
    void clearPrimaryForProduct(@Param("productId") Long productId);

    @Query("SELECT COALESCE(MAX(pi.displayOrder), -1) FROM ProductImage pi WHERE pi.product.id = :productId")
    Integer findMaxDisplayOrder(@Param("productId") Long productId);
}
