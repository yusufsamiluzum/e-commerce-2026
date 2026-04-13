package com.datapulse.api.controllers;

import com.datapulse.api.dto.MyReviewResponse;
import com.datapulse.api.entities.User;
import com.datapulse.api.repositories.UserRepository;
import com.datapulse.api.services.ReviewService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/users/me/reviews")
@CrossOrigin(origins = "*")
@RequiredArgsConstructor
public class MyReviewController {

    private final ReviewService reviewService;
    private final UserRepository userRepository;

    @GetMapping
    public ResponseEntity<?> getMyReviews() {
        try {
            Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
            if (authentication == null || !authentication.isAuthenticated() || "anonymousUser".equals(authentication.getPrincipal())) {
                return ResponseEntity.status(401).body("User not authenticated");
            }
            String email = authentication.getName();
            User user = userRepository.findByEmail(email).orElseThrow(() -> new RuntimeException("Logged in user not found"));
            
            List<MyReviewResponse> reviews = reviewService.getMyReviews(user.getId());
            return ResponseEntity.ok(reviews);
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(java.util.Map.of("error", e.getMessage()));
        }
    }
}
