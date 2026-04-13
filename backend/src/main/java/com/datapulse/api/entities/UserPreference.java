package com.datapulse.api.entities;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "user_preferences")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class UserPreference {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @OneToOne
    @JoinColumn(name = "user_id", referencedColumnName = "id", nullable = false)
    private User user;

    @Column(nullable = false)
    @Builder.Default
    private boolean emailNotifications = true;

    @Column(nullable = false)
    @Builder.Default
    private boolean smsNotifications = false;

    @Column(nullable = false)
    @Builder.Default
    private String theme = "LIGHT"; // "LIGHT" or "DARK"

    @Column(nullable = false)
    @Builder.Default
    private String language = "TR"; // "TR" or "EN"
}
