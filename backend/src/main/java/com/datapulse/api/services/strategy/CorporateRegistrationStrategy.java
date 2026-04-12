package com.datapulse.api.services.strategy;

import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.datapulse.api.dto.RegisterCorporateRequest;
import com.datapulse.api.entities.CorporateProfile;
import com.datapulse.api.entities.RoleType;
import com.datapulse.api.entities.User;
import com.datapulse.api.entities.UserStatus;
import com.datapulse.api.repositories.CorporateProfileRepository;
import com.datapulse.api.repositories.UserRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class CorporateRegistrationStrategy implements RegistrationStrategy<RegisterCorporateRequest> {

    private final UserRepository userRepository;
    private final CorporateProfileRepository profileRepository;
    private final PasswordEncoder passwordEncoder;

    @Override
    @Transactional
    public void register(RegisterCorporateRequest request) {
        if (userRepository.findByEmail(request.getEmail()).isPresent()) {
            throw new RuntimeException("Email already exists");
        }

        User user = User.builder()
                .fullName(request.getRepresentativeName())
                .email(request.getEmail())
                .passwordHash(passwordEncoder.encode(request.getPassword()))
                .roleType(RoleType.CORPORATE)
                .status(UserStatus.ACTIVE)
                .build();
        userRepository.save(user);

        CorporateProfile profile = CorporateProfile.builder()
                .user(user)
                .companyName(request.getCompanyName())
                .taxId(request.getTaxId())
                .taxOffice(request.getTaxOffice())
                .build();
        profileRepository.save(profile);
    }

    @Override
    public boolean supports(RoleType roleType) {
        return RoleType.CORPORATE.equals(roleType);
    }
}
