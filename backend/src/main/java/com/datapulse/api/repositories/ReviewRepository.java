package com.datapulse.api.repositories;

import com.datapulse.api.entities.Review;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface ReviewRepository extends JpaRepository<Review, Long> {
    List<Review> findByProductIdOrderByCreatedAtDesc(Long productId);
    List<Review> findByUserIdOrderByCreatedAtDesc(Long userId);

    // ─── Corporate: Mağaza ürünlerinin yorumları ─────────────
    List<Review> findByProduct_Store_IdOrderByCreatedAtDesc(Long storeId);
    long countByProduct_Store_Id(Long storeId);
}
