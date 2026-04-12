package com.datapulse.api.config;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.List;

import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import com.datapulse.api.entities.Category;
import com.datapulse.api.entities.Product;
import com.datapulse.api.entities.RoleType;
import com.datapulse.api.entities.Store;
import com.datapulse.api.entities.User;
import com.datapulse.api.entities.UserStatus;
import com.datapulse.api.repositories.CategoryRepository;
import com.datapulse.api.repositories.ProductRepository;
import com.datapulse.api.repositories.StoreRepository;
import com.datapulse.api.repositories.UserRepository;

import lombok.RequiredArgsConstructor;

@Configuration
@RequiredArgsConstructor
public class DatabaseSeeder {

    @Bean
    CommandLineRunner initDatabase(
            UserRepository userRepo,
            StoreRepository storeRepo,
            ProductRepository productRepo,
            CategoryRepository categoryRepo
            /* Şimdilik devre dışı:
            , OrderRepository orderRepo,
            OrderItemRepository orderItemRepo,
            PaymentMethodRepository paymentRepo,
            ReviewRepository reviewRepo,
            CustomerProfileRepository profileRepo,
            ShipmentRepository shipmentRepo,
            RefundRepository refundRepo,
            SystemConfigRepository configRepo,
            AuditLogRepository auditRepo */
            ) {

        return args -> {
            System.out.println("--- Seeder: Temizlik Başladı ---");

            // 0. TEMİZLİK (Sıralama FK kısıtlamaları için önemli)
            productRepo.deleteAll();    // Önce ürünler (Store ve Category'e bağlı)
            categoryRepo.deleteAll();   // Sonra kategoriler
            storeRepo.deleteAll();      // Sonra mağazalar (User'a bağlı)
            userRepo.deleteAll();       // En son kullanıcılar

            /* Diğerleri henüz yok:
            auditRepo.deleteAll();
            refundRepo.deleteAll();
            ... */

            System.out.println("--- Seeder: Veriler Ekleniyor ---");

            // 1. Kategoriler
            Category electronics = categoryRepo.save(Category.builder().name("Electronics").build());
            Category home = categoryRepo.save(Category.builder().name("Home & Living").build());
            
            // Alt kategori örneği (Category.java'daki parent ilişkisi için)
            Category accessories = categoryRepo.save(Category.builder()
                    .name("Accessories")
                    .parent(electronics)
                    .build());

            // 2. Kullanıcı (Corporate Owner)
            User corporateUser = userRepo.save(User.builder()
                    .fullName("John Doe")
                    .email("john.corporate@datapulse.com")
                    .passwordHash("hashed_password") 
                    .roleType(RoleType.CORPORATE) 
                    .status(UserStatus.ACTIVE)
                    .gender("Male")
                    .build());

            // 3. Mağaza (Store)
            Store mainStore = storeRepo.save(Store.builder()
                    .owner(corporateUser)
                    .name("DataPulse Flagship Store")
                    .description("Premium electronics and accessories.")
                    .status("OPEN")
                    .baseCurrency("USD")
                    .build());

            // 4. Ürünler (Products)
            productRepo.saveAll(List.of(
                Product.builder()
                    .store(mainStore)
                    .categoryId(electronics.getId())
                    .sku("ELEC-WH-01")
                    .name("Premium Wireless Headphones")
                    .description("High-fidelity audio with active noise cancellation.")
                    .unitPrice(new BigDecimal("199.99"))
                    .stockQuantity(45)
                    .averageRating(4.8)
                    .isFeatured(true)
                    .build(),

                Product.builder()
                    .store(mainStore)
                    .categoryId(accessories.getId())
                    .sku("ACC-MO-03")
                    .name("Ultra-Slim Wireless Mouse")
                    .description("Ergonomic multi-device support.")
                    .unitPrice(new BigDecimal("49.99"))
                    .stockQuantity(120)
                    .build()
            ));

            System.out.println("✅ Veritabanı (User, Store, Category, Product) başarıyla güncellendi: " + LocalDateTime.now());
        };
    }
}