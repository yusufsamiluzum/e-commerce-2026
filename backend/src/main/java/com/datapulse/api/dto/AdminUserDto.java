package com.datapulse.api.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class AdminUserDto {
    private Long id;
    private String fullName;
    private String email;
    private String roleType;
    private String status;
    private String gender;
    private LocalDateTime createdAt;
}
