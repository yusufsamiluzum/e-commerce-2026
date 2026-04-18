package com.datapulse.api.repositories;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import com.datapulse.api.entities.AuditLog;

public interface AuditLogRepository extends JpaRepository<AuditLog, Long> {
    Page<AuditLog> findAllByOrderByTimestampDesc(Pageable pageable);
    Page<AuditLog> findByUserIdOrderByTimestampDesc(Long userId, Pageable pageable);
    Page<AuditLog> findByEntityTypeOrderByTimestampDesc(String entityType, Pageable pageable);
}
