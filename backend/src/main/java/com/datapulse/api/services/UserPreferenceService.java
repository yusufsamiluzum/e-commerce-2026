package com.datapulse.api.services;

import com.datapulse.api.dto.UserPreferenceDto;
import com.datapulse.api.entities.User;
import com.datapulse.api.entities.UserPreference;
import com.datapulse.api.exceptions.ResourceNotFoundException;
import com.datapulse.api.repositories.UserPreferenceRepository;
import com.datapulse.api.repositories.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
public class UserPreferenceService {

    private final UserPreferenceRepository userPreferenceRepository;
    private final UserRepository userRepository;

    @Transactional
    public UserPreferenceDto getUserPreferences(Long userId) {
        UserPreference preference = userPreferenceRepository.findByUserId(userId)
            .orElseGet(() -> {
                User user = userRepository.findById(userId)
                    .orElseThrow(() -> new ResourceNotFoundException("User not found"));
                UserPreference newPreference = UserPreference.builder()
                    .user(user)
                    .emailNotifications(true)
                    .smsNotifications(false)
                    .theme("LIGHT")
                    .language("TR")
                    .build();
                return userPreferenceRepository.save(newPreference);
            });

        return UserPreferenceDto.builder()
            .emailNotifications(preference.isEmailNotifications())
            .smsNotifications(preference.isSmsNotifications())
            .theme(preference.getTheme())
            .language(preference.getLanguage())
            .build();
    }

    @Transactional
    public UserPreferenceDto updateUserPreferences(Long userId, UserPreferenceDto dto) {
        UserPreference preference = userPreferenceRepository.findByUserId(userId)
            .orElseGet(() -> {
                User user = userRepository.findById(userId)
                    .orElseThrow(() -> new ResourceNotFoundException("User not found"));
                return UserPreference.builder()
                    .user(user)
                    .build();
            });

        preference.setEmailNotifications(dto.isEmailNotifications());
        preference.setSmsNotifications(dto.isSmsNotifications());
        preference.setTheme(dto.getTheme());
        preference.setLanguage(dto.getLanguage());

        userPreferenceRepository.save(preference);

        return dto;
    }
}
