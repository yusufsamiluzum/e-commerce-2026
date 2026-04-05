package com.datapulse.api.repositories;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.datapulse.api.entities.User;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    
    // You will definitely need this later for Spring Security/JWT login
    Optional<User> findByEmail(String email);
}