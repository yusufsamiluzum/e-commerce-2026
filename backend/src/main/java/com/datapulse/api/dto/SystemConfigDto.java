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
public class SystemConfigDto {
    private Long id;
    private String configKey;
    private String configValue;
    private LocalDateTime updatedAt;
}
