package com.datapulse.api.services.strategy;

import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.datapulse.api.dto.RegisterAdminRequest;
import com.datapulse.api.entities.RoleType;
import com.datapulse.api.entities.User;
import com.datapulse.api.entities.UserStatus;
import com.datapulse.api.repositories.UserRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class AdminRegistrationStrategy implements RegistrationStrategy<RegisterAdminRequest> {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    @Override
    @Transactional
    public void register(RegisterAdminRequest request) {
        if (userRepository.findByEmail(request.getEmail()).isPresent()) {
            throw new RuntimeException("Email already exists");
        }

        User user = User.builder()
                .fullName(request.getFullName())
                .email(request.getEmail())
                .passwordHash(passwordEncoder.encode(request.getPassword()))
                .roleType(RoleType.ADMIN)
                .status(UserStatus.ACTIVE)
                .build();
        userRepository.save(user);
    }

    @Override
    public boolean supports(RoleType roleType) {
        return RoleType.ADMIN.equals(roleType);
    }
}
