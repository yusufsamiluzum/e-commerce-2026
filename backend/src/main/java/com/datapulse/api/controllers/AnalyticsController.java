package com.datapulse.api.controllers;

import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.datapulse.api.dto.SpendingAnalysisResponse;
import com.datapulse.api.services.AnalyticsService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/analytics")
@RequiredArgsConstructor
public class AnalyticsController {

    private final AnalyticsService analyticsService;

    @GetMapping("/spending")
    @PreAuthorize("hasAnyRole('INDIVIDUAL', 'CORPORATE')")
    public ResponseEntity<SpendingAnalysisResponse> getSpendingAnalysis(Authentication authentication) {
        String email = authentication.getName();
        SpendingAnalysisResponse analysis = analyticsService.getSpendingAnalysis(email);
        return ResponseEntity.ok(analysis);
    }
}
