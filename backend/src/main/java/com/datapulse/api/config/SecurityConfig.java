package com.datapulse.api.config;

import java.util.Arrays;
import java.util.List;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.method.configuration.EnableMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.web.filter.CorsFilter;

import com.datapulse.api.security.JwtAuthenticationFilter;

import lombok.RequiredArgsConstructor;

@Configuration
@EnableWebSecurity
@RequiredArgsConstructor
@EnableMethodSecurity(prePostEnabled = true) // Allows using @PreAuthorize on controller methods
public class SecurityConfig {

    private final JwtAuthenticationFilter jwtAuthFilter;
    private final AuthenticationProvider authenticationProvider;

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http
            .cors(Customizer.withDefaults()) // Uses the CorsFilter bean defined below
            .csrf(csrf -> csrf.disable()) 
            .sessionManagement(session -> session.sessionCreationPolicy(SessionCreationPolicy.STATELESS)) 
            .authorizeHttpRequests(auth -> auth
                // Allow preflight checks
                .requestMatchers(HttpMethod.OPTIONS, "/**").permitAll() 
                
                // Public endpoints
                .requestMatchers("/api/auth/**").permitAll()
                .requestMatchers("/api/products", "/api/products/**").permitAll() 
                .requestMatchers("/error").permitAll() // CRITICAL: Stop Spring from blocking its own error messages 
                
                // --- ROLE-BASED ACCESS CONTROL (RBAC) ---
                // Here we restrict paths to specific roles (matching the roles from the Jwt filter)
                // "hasRole('ADMIN')" looks for "ROLE_ADMIN" in UserDetails
                .requestMatchers("/api/admin/**").hasRole("ADMIN")
                
                // For instance, let's say only corporate and admin can manage bulk data
                .requestMatchers("/api/corporate/**").hasAnyRole("CORPORATE", "ADMIN")
                
                // User paths that are generic maybe specific to ONLY logged-in users regardless of rank
                .requestMatchers("/api/user/**").authenticated()
                // ----------------------------------------
                
                .anyRequest().authenticated() 
            )
            .authenticationProvider(authenticationProvider)
            .addFilterBefore(jwtAuthFilter, UsernamePasswordAuthenticationFilter.class);
        
        return http.build();
    }

    // A globally registered CORS filter is much more reliable for Angular SSR
    @Bean
    public CorsFilter corsFilter() {
        CorsConfiguration config = new CorsConfiguration();
        config.setAllowedOrigins(List.of("http://localhost:4200"));
        config.setAllowedMethods(Arrays.asList("GET", "POST", "PUT", "DELETE", "OPTIONS", "PATCH"));
        config.setAllowedHeaders(List.of("*")); // Allow ALL headers (Fixes SSR issues)
        config.setAllowCredentials(true); 
        
        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**", config);
        return new CorsFilter(source);
    }
}
