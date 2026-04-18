package com.datapulse.api.repositories;

import com.datapulse.api.entities.Refund;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RefundRepository extends JpaRepository<Refund, Long> {
    Page<Refund> findAllByOrderByProcessedAtDesc(Pageable pageable);
    Page<Refund> findByStatusOrderByProcessedAtDesc(String status, Pageable pageable);
    long countByStatus(String status);
}
