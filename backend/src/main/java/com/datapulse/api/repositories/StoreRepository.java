package com.datapulse.api.repositories;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.datapulse.api.entities.Store;
import com.datapulse.api.entities.StoreStatus;
import com.datapulse.api.entities.User;

@Repository
public interface StoreRepository extends JpaRepository<Store, Long> {
    
    // Optional: A custom query method that might be useful later 
    // for the Corporate dashboard to find all stores owned by a specific user
    List<Store> findByOwnerId(Long ownerId);
    
    List<Store> findByOwner(User owner);

    // ─── Admin: Mağaza istatistikleri ──────────────────────────
    long countByStatus(StoreStatus status);

    // ─── Admin: Mağaza yönetimi (sayfalı) ────────────────────
    Page<Store> findAllByOrderByCreatedAtDesc(Pageable pageable);
}
