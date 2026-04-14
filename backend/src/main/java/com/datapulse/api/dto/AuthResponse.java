package com.datapulse.api.dto;

import com.datapulse.api.entities.RoleType;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class AuthResponse {
    private String token;
    private RoleType role;
    private String fullName;
    private String email;
    
    // Corporate kullanicilarin magaza acip acmadigini belirtir
    // Eger role == CORPORATE ve hasStore == false ise frontend Store_Setup tarafina gonderecek
    private Boolean hasStore;
}
