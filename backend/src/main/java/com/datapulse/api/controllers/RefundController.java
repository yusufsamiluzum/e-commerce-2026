package com.datapulse.api.controllers;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.datapulse.api.dto.RefundDto;
import com.datapulse.api.dto.RefundRequest;
import com.datapulse.api.services.RefundService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/refunds")
@RequiredArgsConstructor
public class RefundController {

    private final RefundService refundService;

    @GetMapping
    @PreAuthorize("hasAnyRole('INDIVIDUAL', 'CORPORATE')")
    public ResponseEntity<List<RefundDto>> getMyRefunds(Authentication authentication) {
        String email = authentication.getName();
        List<RefundDto> refunds = refundService.getUserRefunds(email);
        return ResponseEntity.ok(refunds);
    }

    @PostMapping
    @PreAuthorize("hasAnyRole('INDIVIDUAL', 'CORPORATE')")
    public ResponseEntity<?> createRefund(Authentication authentication,
                                          @RequestBody RefundRequest request) {
        try {
            String email = authentication.getName();
            RefundDto created = refundService.createRefund(email, request);
            return ResponseEntity.ok(created);
        } catch (IllegalStateException e) {
            return ResponseEntity.badRequest().body(java.util.Map.of("error", e.getMessage()));
        } catch (Exception e) {
            return ResponseEntity.status(403).body(java.util.Map.of("error", e.getMessage()));
        }
    }
}
