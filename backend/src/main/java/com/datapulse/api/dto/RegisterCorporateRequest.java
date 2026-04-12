package com.datapulse.api.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class RegisterCorporateRequest {
    private String representativeName; 
    private String email;
    private String password;
    
    private String companyName;
    private String taxId;
    private String taxOffice;
}
