package com.datapulse.api.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.datapulse.api.entities.Product;

@Repository
public interface ProductRepository extends JpaRepository<Product, Long>, JpaSpecificationExecutor<Product> {
    // Spring Data JPA will automatically implement this search query
    List<Product> findByNameContainingIgnoreCase(String name);

    // ─── Corporate: Mağaza bazlı sorgular ───────────────────────

    List<Product> findByStoreIdOrderByCreatedAtDesc(Long storeId);

    List<Product> findByStoreIdAndIsActiveOrderByCreatedAtDesc(Long storeId, Boolean isActive);

    long countByStoreIdAndIsActive(Long storeId, Boolean isActive);

    long countByStoreIdAndStockQuantityLessThan(Long storeId, Integer threshold);

    @Query("SELECT COALESCE(AVG(r.starRating), 0) FROM Review r WHERE r.product.store.id = :storeId")
    Double averageRatingByStoreId(@Param("storeId") Long storeId);
}
