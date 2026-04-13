package com.datapulse.api.controllers;

import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.datapulse.api.dto.UserProfileDto;
import com.datapulse.api.dto.UserProfileUpdateRequest;
import com.datapulse.api.services.UserService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/users")
@RequiredArgsConstructor
public class UserController {

    private final UserService userService;

    @GetMapping("/profile")
    @PreAuthorize("hasAnyRole('INDIVIDUAL', 'CORPORATE', 'ADMIN')")
    public ResponseEntity<UserProfileDto> getProfile(Authentication authentication) {
        String email = authentication.getName();
        UserProfileDto profile = userService.getUserProfile(email);
        return ResponseEntity.ok(profile);
    }

    @PutMapping("/profile")
    @PreAuthorize("hasAnyRole('INDIVIDUAL', 'CORPORATE', 'ADMIN')")
    public ResponseEntity<UserProfileDto> updateProfile(
            Authentication authentication,
            @RequestBody UserProfileUpdateRequest request) {
        
        String email = authentication.getName();
        UserProfileDto updatedProfile = userService.updateUserProfile(email, request);
        return ResponseEntity.ok(updatedProfile);
    }
}
