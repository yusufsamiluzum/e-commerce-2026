package com.datapulse.api.controllers;

import com.datapulse.api.dto.UserPreferenceDto;
import com.datapulse.api.entities.User;
import com.datapulse.api.services.UserPreferenceService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/users/me/preferences")
@RequiredArgsConstructor
public class UserPreferenceController {

    private final UserPreferenceService userPreferenceService;

    @GetMapping
    public ResponseEntity<UserPreferenceDto> getMyPreferences(@AuthenticationPrincipal User user) {
        return ResponseEntity.ok(userPreferenceService.getUserPreferences(user.getId()));
    }

    @PutMapping
    public ResponseEntity<UserPreferenceDto> updateMyPreferences(
            @AuthenticationPrincipal User user,
            @RequestBody UserPreferenceDto dto) {
        return ResponseEntity.ok(userPreferenceService.updateUserPreferences(user.getId(), dto));
    }
}
