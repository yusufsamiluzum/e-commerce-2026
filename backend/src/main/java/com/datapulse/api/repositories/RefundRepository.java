package com.datapulse.api.repositories;

import com.datapulse.api.entities.Refund;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface RefundRepository extends JpaRepository<Refund, Long> {
    Page<Refund> findAllByOrderByProcessedAtDesc(Pageable pageable);
    Page<Refund> findByStatusOrderByProcessedAtDesc(String status, Pageable pageable);
    long countByStatus(String status);

    // ─── Corporate: Mağazaya gelen iadeler ────────────────
    List<Refund> findByOrder_Store_IdOrderByProcessedAtDesc(Long storeId);
    List<Refund> findByOrder_Store_IdAndStatusOrderByProcessedAtDesc(Long storeId, String status);
    long countByOrder_Store_IdAndStatus(Long storeId, String status);
}
