package com.datapulse.api.config;

import java.math.BigDecimal;

import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;     // Adjust import based on your package

import com.datapulse.api.entities.Product;   // Adjust import based on your package
import com.datapulse.api.entities.RoleType;
import com.datapulse.api.entities.Store;
import com.datapulse.api.entities.User;
import com.datapulse.api.entities.UserStatus;
import com.datapulse.api.repositories.ProductRepository;
import com.datapulse.api.repositories.StoreRepository;
import com.datapulse.api.repositories.UserRepository;

@Configuration
public class DatabaseSeeder {

    @Bean
    CommandLineRunner initDatabase(UserRepository userRepo, StoreRepository storeRepo, ProductRepository productRepo) {
        return args -> {
            
            // Only seed if the database is empty to prevent duplicates on restart
            if (userRepo.count() == 0) {
                
                // 1. Create the User (Corporate Owner)
                User corporateUser = User.builder()
                        .fullName("John Doe")
                        .email("john.corporate@datapulse.com")
                        .passwordHash("hashed_password_here") // Will be replaced by bcrypt later
                        .roleType(RoleType.CORPORATE) 
                        .status(UserStatus.ACTIVE)
                        .gender("Male")
                        .build();
                userRepo.save(corporateUser);

                // 2. Create the Store and assign the User
                Store mainStore = Store.builder()
                        .owner(corporateUser)
                        .name("DataPulse Flagship Store")
                        .description("Premium electronics and accessories.")
                        .status("OPEN")
                        .baseCurrency("USD")
                        .build();
                storeRepo.save(mainStore);

                // 3. Create the Products and assign the Store
                Product headphones = Product.builder()
                        .store(mainStore)
                        .categoryId(1L)
                        .sku("AUDIO-WH-01")
                        .name("Premium Wireless Headphones")
                        .description("High-fidelity audio with active noise cancellation.")
                        .unitPrice(new BigDecimal("199.99"))
                        .originalPrice(new BigDecimal("299.99"))
                        .stockQuantity(45)
                        .imageUrl("https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=500&q=80")
                        .averageRating(4.8)
                        .reviewCount(328)
                        .isFeatured(true)
                        .build();

                Product smartwatch = Product.builder()
                        .store(mainStore)
                        .categoryId(2L)
                        .sku("WEAR-SW-X")
                        .name("Luxury Chronograph Watch")
                        .description("Elegant design meets smart functionality.")
                        .unitPrice(new BigDecimal("549.99"))
                        .stockQuantity(12)
                        .imageUrl("https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&q=80")
                        .averageRating(4.9)
                        .reviewCount(156)
                        .isFeatured(true)
                        .build();

                productRepo.save(headphones);
                productRepo.save(smartwatch);
                
                System.out.println("✅ Database seeded successfully: User -> Store -> Products!");
            }
        };
    }
}