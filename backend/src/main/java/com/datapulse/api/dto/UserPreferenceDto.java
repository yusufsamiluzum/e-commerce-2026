package com.datapulse.api.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class UserPreferenceDto {
    private boolean emailNotifications;
    private boolean smsNotifications;
    private String theme;
    private String language;
}
