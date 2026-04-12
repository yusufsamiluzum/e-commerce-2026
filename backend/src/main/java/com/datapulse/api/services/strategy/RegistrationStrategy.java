package com.datapulse.api.services.strategy;

import com.datapulse.api.entities.RoleType;

public interface RegistrationStrategy<T> {
    void register(T request);
    boolean supports(RoleType roleType);
}
