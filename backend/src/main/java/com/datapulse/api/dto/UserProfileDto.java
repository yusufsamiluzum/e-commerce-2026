package com.datapulse.api.dto;

import java.time.LocalDateTime;

import com.datapulse.api.entities.RoleType;
import com.datapulse.api.entities.UserStatus;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class UserProfileDto {
    private Long id;
    private String fullName;
    private String email;
    private String gender;
    private RoleType roleType;
    private UserStatus status;
    private LocalDateTime createdAt;
    
    // Customer profile specific fields
    private Integer age;
    private String city;
    private String membershipType;
}
