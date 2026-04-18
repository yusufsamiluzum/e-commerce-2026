package com.datapulse.api.repositories;

import java.util.Optional;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.datapulse.api.entities.RoleType;
import com.datapulse.api.entities.User;
import com.datapulse.api.entities.UserStatus;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    
    // You will definitely need this later for Spring Security/JWT login
    Optional<User> findByEmail(String email);

    // ─── Admin: Platform istatistikleri ──────────────────────────
    long countByRoleType(RoleType roleType);
    long countByStatus(UserStatus status);

    // ─── Admin: Kullanıcı yönetimi (sayfalı) ────────────────────
    Page<User> findAllByOrderByCreatedAtDesc(Pageable pageable);
}