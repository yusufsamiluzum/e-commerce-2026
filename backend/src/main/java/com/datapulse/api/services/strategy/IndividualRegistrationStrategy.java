package com.datapulse.api.services.strategy;

import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.datapulse.api.dto.RegisterIndividualRequest;
import com.datapulse.api.entities.CustomerProfile;
import com.datapulse.api.entities.RoleType;
import com.datapulse.api.entities.User;
import com.datapulse.api.entities.UserStatus;
import com.datapulse.api.repositories.CustomerProfileRepository;
import com.datapulse.api.repositories.UserRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class IndividualRegistrationStrategy implements RegistrationStrategy<RegisterIndividualRequest> {

    private final UserRepository userRepository;
    private final CustomerProfileRepository profileRepository;
    private final PasswordEncoder passwordEncoder;

    @Override
    @Transactional
    public void register(RegisterIndividualRequest request) {
        if (userRepository.findByEmail(request.getEmail()).isPresent()) {
            throw new RuntimeException("Email already exists");
        }

        User user = User.builder()
                .fullName(request.getFullName())
                .email(request.getEmail())
                .passwordHash(passwordEncoder.encode(request.getPassword()))
                .roleType(RoleType.INDIVIDUAL)
                .gender(request.getGender())
                .status(UserStatus.ACTIVE)
                .build();
        userRepository.save(user);

        CustomerProfile profile = CustomerProfile.builder()
                .user(user)
                .age(request.getAge())
                .city(request.getCity())
                .membershipType("STANDARD") // Varsayilan bir tip atandi
                .build();
        profileRepository.save(profile);
    }

    @Override
    public boolean supports(RoleType roleType) {
        return RoleType.INDIVIDUAL.equals(roleType);
    }
}
