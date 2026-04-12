package com.datapulse.api.services;

import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.stereotype.Service;

import com.datapulse.api.dto.AuthRequest;
import com.datapulse.api.dto.AuthResponse;
import com.datapulse.api.dto.RegisterAdminRequest;
import com.datapulse.api.dto.RegisterCorporateRequest;
import com.datapulse.api.dto.RegisterIndividualRequest;
import com.datapulse.api.entities.RoleType;
import com.datapulse.api.entities.User;
import com.datapulse.api.repositories.StoreRepository;
import com.datapulse.api.repositories.UserRepository;
import com.datapulse.api.security.JwtService;
import com.datapulse.api.services.strategy.AdminRegistrationStrategy;
import com.datapulse.api.services.strategy.CorporateRegistrationStrategy;
import com.datapulse.api.services.strategy.IndividualRegistrationStrategy;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class AuthService {
    private final UserRepository repository;
    private final JwtService jwtService;
    private final AuthenticationManager authenticationManager;
    private final StoreRepository storeRepository;
    
    private final IndividualRegistrationStrategy individualRegistrationStrategy;
    private final CorporateRegistrationStrategy corporateRegistrationStrategy;
    private final AdminRegistrationStrategy adminRegistrationStrategy;

    public void registerIndividual(RegisterIndividualRequest request) {
        individualRegistrationStrategy.register(request);
    }

    public void registerCorporate(RegisterCorporateRequest request) {
        corporateRegistrationStrategy.register(request);
    }

    public void registerAdmin(RegisterAdminRequest request) {
        adminRegistrationStrategy.register(request);
    }

    public AuthResponse loginIndividual(AuthRequest request) {
        User user = authenticateAndGetUser(request);
        if (!RoleType.INDIVIDUAL.equals(user.getRoleType())) {
            throw new RuntimeException("Invalid role for this login endpoint");
        }
        return buildAuthResponse(user);
    }

    public AuthResponse loginCorporate(AuthRequest request) {
        User user = authenticateAndGetUser(request);
        if (!RoleType.CORPORATE.equals(user.getRoleType())) {
            throw new RuntimeException("Invalid role for this login endpoint");
        }
        
        AuthResponse response = buildAuthResponse(user);
        boolean hasStore = !storeRepository.findByOwner(user).isEmpty();
        response.setHasStore(hasStore);
        return response;
    }

    public AuthResponse loginAdmin(AuthRequest request) {
        User user = authenticateAndGetUser(request);
        if (!RoleType.ADMIN.equals(user.getRoleType())) {
            throw new RuntimeException("Invalid role for this login endpoint");
        }
        return buildAuthResponse(user);
    }

    private User authenticateAndGetUser(AuthRequest request) {
        authenticationManager.authenticate(
            new UsernamePasswordAuthenticationToken(
                request.getEmail(),
                request.getPassword()
            )
        );
        return repository.findByEmail(request.getEmail())
            .orElseThrow(() -> new RuntimeException("User not found"));
    }

    private AuthResponse buildAuthResponse(User user) {
        var jwtToken = jwtService.generateToken(user);
        return AuthResponse.builder()
            .token(jwtToken)
            .role(user.getRoleType())
            .build();
    }
}
