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
public class AuditLogDto {
    private Long id;
    private Long userId;
    private String userName;
    private String actionPerformed;
    private String entityType;
    private Long entityId;
    private String ipAddress;
    private LocalDateTime timestamp;
}
