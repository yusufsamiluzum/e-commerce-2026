package com.datapulse.api.controllers;

import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseCookie;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.datapulse.api.dto.AuthRequest;
import com.datapulse.api.dto.AuthResponse;
import com.datapulse.api.dto.RegisterAdminRequest;
import com.datapulse.api.dto.RegisterCorporateRequest;
import com.datapulse.api.dto.RegisterIndividualRequest;
import com.datapulse.api.services.AuthService;

import lombok.RequiredArgsConstructor;

// These endpoints are public (configured in SecurityConfig to allow everyone) except admin register
@RestController
@RequestMapping("/api/auth")
@RequiredArgsConstructor
public class AuthController {

    private final AuthService authService;

    @PostMapping("/register/individual")
    public ResponseEntity<Void> registerIndividual(@RequestBody RegisterIndividualRequest request) {
        authService.registerIndividual(request);
        return ResponseEntity.ok().build();
    }

    @PostMapping("/register/corporate")
    public ResponseEntity<Void> registerCorporate(@RequestBody RegisterCorporateRequest request) {
        authService.registerCorporate(request);
        return ResponseEntity.ok().build();
    }

    @PostMapping("/admin/register")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<Void> registerAdmin(@RequestBody RegisterAdminRequest request) {
        authService.registerAdmin(request);
        return ResponseEntity.ok().build();
    }

    @PostMapping("/login/individual")
    public ResponseEntity<AuthResponse> loginIndividual(@RequestBody AuthRequest request) {
        return processLogin(authService.loginIndividual(request));
    }

    @PostMapping("/login/corporate")
    public ResponseEntity<AuthResponse> loginCorporate(@RequestBody AuthRequest request) {
        return processLogin(authService.loginCorporate(request));
    }

    @PostMapping("/login/admin")
    public ResponseEntity<AuthResponse> loginAdmin(@RequestBody AuthRequest request) {
        return processLogin(authService.loginAdmin(request));
    }

    private ResponseEntity<AuthResponse> processLogin(AuthResponse responseBody) {
        // Package the JWT token into an HttpOnly cookie
        ResponseCookie cookie = ResponseCookie.from("access_token", responseBody.getToken())
            .httpOnly(true) // Browser JS cannot read this cookie, protects against XSS
            .secure(false) // Set to 'true' in production with HTTPS
            .path("/") // Available across the whole app
            .sameSite("Strict") // Protects against CSRF
            .maxAge(24 * 60 * 60) // 1 day expiration
            .build();
            
        // We set the token to null so it's not sent in the JSON body payload anymore
        responseBody.setToken(null);
        
        return ResponseEntity.ok()
            .header(HttpHeaders.SET_COOKIE, cookie.toString())
            .body(responseBody);
    }
}