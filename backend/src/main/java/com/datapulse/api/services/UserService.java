package com.datapulse.api.services;

import java.util.Optional;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.datapulse.api.dto.UserProfileDto;
import com.datapulse.api.dto.UserProfileUpdateRequest;
import com.datapulse.api.entities.CustomerProfile;
import com.datapulse.api.entities.User;
import com.datapulse.api.repositories.CustomerProfileRepository;
import com.datapulse.api.repositories.UserRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class UserService {

    private final UserRepository userRepository;
    private final CustomerProfileRepository customerProfileRepository;

    @Transactional(readOnly = true)
    public UserProfileDto getUserProfile(String email) {
        User user = userRepository.findByEmail(email)
                .orElseThrow(() -> new RuntimeException("User not found"));

        Optional<CustomerProfile> customerProfileOpt = customerProfileRepository.findByUser(user);

        return UserProfileDto.builder()
                .id(user.getId())
                .fullName(user.getFullName())
                .email(user.getEmail())
                .gender(user.getGender())
                .roleType(user.getRoleType())
                .status(user.getStatus())
                .createdAt(user.getCreatedAt())
                .age(customerProfileOpt.map(CustomerProfile::getAge).orElse(null))
                .city(customerProfileOpt.map(CustomerProfile::getCity).orElse(null))
                .membershipType(customerProfileOpt.map(CustomerProfile::getMembershipType).orElse(null))
                .build();
    }

    @Transactional
    public UserProfileDto updateUserProfile(String email, UserProfileUpdateRequest request) {
        User user = userRepository.findByEmail(email)
                .orElseThrow(() -> new RuntimeException("User not found"));

        if (request.getFullName() != null) {
            user.setFullName(request.getFullName());
        }
        if (request.getGender() != null) {
            user.setGender(request.getGender());
        }
        user = userRepository.save(user);

        CustomerProfile profile = customerProfileRepository.findByUser(user)
                .orElse(CustomerProfile.builder().user(user).build());

        if (request.getAge() != null) {
            profile.setAge(request.getAge());
        }
        if (request.getCity() != null) {
            profile.setCity(request.getCity());
        }
        profile = customerProfileRepository.save(profile);

        return UserProfileDto.builder()
                .id(user.getId())
                .fullName(user.getFullName())
                .email(user.getEmail())
                .gender(user.getGender())
                .roleType(user.getRoleType())
                .status(user.getStatus())
                .createdAt(user.getCreatedAt())
                .age(profile.getAge())
                .city(profile.getCity())
                .membershipType(profile.getMembershipType())
                .build();
    }
}
