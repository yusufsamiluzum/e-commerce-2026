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
                // Preflight (OPTIONS) isteklerine izin ver
                .requestMatchers(HttpMethod.OPTIONS, "/**").permitAll() 
                
                // Herkese açık endpointler
                .requestMatchers("/api/auth/**").permitAll()
                .requestMatchers(HttpMethod.GET, "/api/products", "/api/products/**").permitAll()
                // BURAYI EKLEDİK: Kategorilere herkes erişebilsin
                .requestMatchers(HttpMethod.GET, "/api/categories", "/api/categories/**").permitAll()
                // Upload edilen görseller herkese açık (statik dosya)
                .requestMatchers("/uploads/**").permitAll()
                .requestMatchers("/error").permitAll() 
                
                // Yorum Ekleme gibi POST işlemleri giriş gerektirsin
                .requestMatchers(HttpMethod.POST, "/api/products/*/reviews").authenticated()
                
                // Rol bazlı kısıtlamalar (Admin, Corporate vb.)
                .requestMatchers("/api/admin/**").hasRole("ADMIN")
                .requestMatchers("/api/corporate/**").hasAnyRole("CORPORATE", "ADMIN")
                .requestMatchers("/api/user/**").authenticated()

                // AI Chatbot — giriş yapmış herkes erişebilir (rol kontrolü @PreAuthorize ile)
                .requestMatchers("/api/chat/**").authenticated()
                
                // Geri kalan her şey giriş gerektirsin
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
        config.setAllowedOriginPatterns(List.of("*"));
        config.setAllowedMethods(Arrays.asList("GET", "POST", "PUT", "DELETE", "OPTIONS", "PATCH"));
        config.setAllowedHeaders(List.of("*")); // Allow ALL headers (Fixes SSR issues)
        config.setAllowCredentials(true); 
        
        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**", config);
        return new CorsFilter(source);
    }
}
