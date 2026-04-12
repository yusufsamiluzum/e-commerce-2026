package com.datapulse.api.config;

import java.math.BigDecimal;
import java.util.Arrays;

import org.springframework.boot.CommandLineRunner;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

import com.datapulse.api.entities.AuditLog;
import com.datapulse.api.entities.Category;
import com.datapulse.api.entities.CorporateProfile;
import com.datapulse.api.entities.CustomerProfile;
import com.datapulse.api.entities.Order;
import com.datapulse.api.entities.OrderItem;
import com.datapulse.api.entities.OrderStatus;
import com.datapulse.api.entities.PaymentMethod;
import com.datapulse.api.entities.Product;
import com.datapulse.api.entities.Refund;
import com.datapulse.api.entities.Review;
import com.datapulse.api.entities.RoleType;
import com.datapulse.api.entities.Shipment;
import com.datapulse.api.entities.Store;
import com.datapulse.api.entities.SystemConfig;
import com.datapulse.api.entities.User;
import com.datapulse.api.entities.UserStatus;
import com.datapulse.api.repositories.AuditLogRepository;
import com.datapulse.api.repositories.CategoryRepository;
import com.datapulse.api.repositories.CorporateProfileRepository;
import com.datapulse.api.repositories.CustomerProfileRepository;
import com.datapulse.api.repositories.OrderItemRepository;
import com.datapulse.api.repositories.OrderRepository;
import com.datapulse.api.repositories.PaymentMethodRepository;
import com.datapulse.api.repositories.ProductRepository;
import com.datapulse.api.repositories.RefundRepository;
import com.datapulse.api.repositories.ReviewRepository;
import com.datapulse.api.repositories.ShipmentRepository;
import com.datapulse.api.repositories.StoreRepository;
import com.datapulse.api.repositories.SystemConfigRepository;
import com.datapulse.api.repositories.UserRepository;

@Component
public class DatabaseSeeder implements CommandLineRunner {

    private final UserRepository userRepository;
    private final CategoryRepository categoryRepository;
    private final StoreRepository storeRepository;
    private final ProductRepository productRepository;
    private final CorporateProfileRepository corporateProfileRepository;
    private final CustomerProfileRepository customerProfileRepository;
    private final OrderRepository orderRepository;
    private final OrderItemRepository orderItemRepository;
    private final PaymentMethodRepository paymentMethodRepository;
    private final RefundRepository refundRepository;
    private final ReviewRepository reviewRepository;
    private final ShipmentRepository shipmentRepository;
    private final SystemConfigRepository systemConfigRepository;
    private final AuditLogRepository auditLogRepository;
    private final PasswordEncoder passwordEncoder;

    public DatabaseSeeder(
            UserRepository userRepository,
            CategoryRepository categoryRepository,
            StoreRepository storeRepository,
            ProductRepository productRepository,
            CorporateProfileRepository corporateProfileRepository,
            CustomerProfileRepository customerProfileRepository,
            OrderRepository orderRepository,
            OrderItemRepository orderItemRepository,
            PaymentMethodRepository paymentMethodRepository,
            RefundRepository refundRepository,
            ReviewRepository reviewRepository,
            ShipmentRepository shipmentRepository,
            SystemConfigRepository systemConfigRepository,
            AuditLogRepository auditLogRepository,
            PasswordEncoder passwordEncoder) {
        this.userRepository = userRepository;
        this.categoryRepository = categoryRepository;
        this.storeRepository = storeRepository;
        this.productRepository = productRepository;
        this.corporateProfileRepository = corporateProfileRepository;
        this.customerProfileRepository = customerProfileRepository;
        this.orderRepository = orderRepository;
        this.orderItemRepository = orderItemRepository;
        this.paymentMethodRepository = paymentMethodRepository;
        this.refundRepository = refundRepository;
        this.reviewRepository = reviewRepository;
        this.shipmentRepository = shipmentRepository;
        this.systemConfigRepository = systemConfigRepository;
        this.auditLogRepository = auditLogRepository;
        this.passwordEncoder = passwordEncoder;
    }

    @Override
    public void run(String... args) throws Exception {
        // Clear old data in order to respect FK constraints
        auditLogRepository.deleteAll();
        refundRepository.deleteAll();
        reviewRepository.deleteAll();
        shipmentRepository.deleteAll();
        orderItemRepository.deleteAll();
        paymentMethodRepository.deleteAll();
        orderRepository.deleteAll();
        productRepository.deleteAll();
        corporateProfileRepository.deleteAll();
        customerProfileRepository.deleteAll();
        storeRepository.deleteAll();
        categoryRepository.deleteAll();
        userRepository.deleteAll();
        systemConfigRepository.deleteAll();

        // 1. SystemConfig
        SystemConfig sc1 = new SystemConfig(); sc1.setConfigKey("site_name"); sc1.setConfigValue("DataPulse E-Com");
        SystemConfig sc2 = new SystemConfig(); sc2.setConfigKey("currency"); sc2.setConfigValue("USD");
        SystemConfig sc3 = new SystemConfig(); sc3.setConfigKey("tax_rate"); sc3.setConfigValue("0.08");
        systemConfigRepository.saveAll(Arrays.asList(sc1, sc2, sc3));

        // 2. Users (3 users + more to prevent unique constraint violations)
        String pass = passwordEncoder.encode("123Pa$$word!");
        User u1 = new User(); u1.setFullName("Admin User"); u1.setEmail("admin@test.com"); u1.setPasswordHash(pass); u1.setRoleType(RoleType.ADMIN); u1.setStatus(UserStatus.ACTIVE);
        User u2 = new User(); u2.setFullName("Seller User 1"); u2.setEmail("seller1@test.com"); u2.setPasswordHash(pass); u2.setRoleType(RoleType.CORPORATE); u2.setStatus(UserStatus.ACTIVE);
        User u2_2 = new User(); u2_2.setFullName("Seller User 2"); u2_2.setEmail("seller2@test.com"); u2_2.setPasswordHash(pass); u2_2.setRoleType(RoleType.CORPORATE); u2_2.setStatus(UserStatus.ACTIVE);
        User u2_3 = new User(); u2_3.setFullName("Seller User 3"); u2_3.setEmail("seller3@test.com"); u2_3.setPasswordHash(pass); u2_3.setRoleType(RoleType.CORPORATE); u2_3.setStatus(UserStatus.ACTIVE);
        User u3 = new User(); u3.setFullName("Customer User 1"); u3.setEmail("customer1@test.com"); u3.setPasswordHash(pass); u3.setRoleType(RoleType.INDIVIDUAL); u3.setStatus(UserStatus.ACTIVE);
        User u3_2 = new User(); u3_2.setFullName("Customer User 2"); u3_2.setEmail("customer2@test.com"); u3_2.setPasswordHash(pass); u3_2.setRoleType(RoleType.INDIVIDUAL); u3_2.setStatus(UserStatus.ACTIVE);
        User u3_3 = new User(); u3_3.setFullName("Customer User 3"); u3_3.setEmail("customer3@test.com"); u3_3.setPasswordHash(pass); u3_3.setRoleType(RoleType.INDIVIDUAL); u3_3.setStatus(UserStatus.ACTIVE);
        userRepository.saveAll(Arrays.asList(u1, u2, u2_2, u2_3, u3, u3_2, u3_3));

        // 3. Category
        Category c1 = new Category(); c1.setName("Electronics");
        Category c2 = new Category(); c2.setName("Clothing");
        Category c3 = new Category(); c3.setName("Home & Garden");
        categoryRepository.saveAll(Arrays.asList(c1, c2, c3));

        // 4. Store
        Store s1 = new Store(); s1.setName("Tech Haven"); s1.setOwner(u2); s1.setStatus("ACTIVE"); s1.setBaseCurrency("USD");
        Store s2 = new Store(); s2.setName("Fashion Finds"); s2.setOwner(u2_2); s2.setStatus("ACTIVE"); s2.setBaseCurrency("USD");
        Store s3 = new Store(); s3.setName("Cozy Home"); s3.setOwner(u2_3); s3.setStatus("ACTIVE"); s3.setBaseCurrency("USD");
        storeRepository.saveAll(Arrays.asList(s1, s2, s3));

        // 5. CorporateProfile
        CorporateProfile cp1 = new CorporateProfile(); cp1.setCompanyName("Tech Haven Corp"); cp1.setTaxId("12345"); cp1.setTaxOffice("NY"); cp1.setUser(u2);
        CorporateProfile cp2 = new CorporateProfile(); cp2.setCompanyName("Fashion Group LLC"); cp2.setTaxId("67890"); cp2.setTaxOffice("LA"); cp2.setUser(u2_2);
        CorporateProfile cp3 = new CorporateProfile(); cp3.setCompanyName("Home & Garden Inc"); cp3.setTaxId("99999"); cp3.setTaxOffice("Chicago"); cp3.setUser(u2_3);
        corporateProfileRepository.saveAll(Arrays.asList(cp1, cp2, cp3));

        // 6. CustomerProfile
        CustomerProfile cup1 = new CustomerProfile(); cup1.setAge(30); cup1.setCity("New York"); cup1.setMembershipType("GOLD"); cup1.setUser(u3);
        CustomerProfile cup2 = new CustomerProfile(); cup2.setAge(25); cup2.setCity("Los Angeles"); cup2.setMembershipType("SILVER"); cup2.setUser(u3_2);
        CustomerProfile cup3 = new CustomerProfile(); cup3.setAge(40); cup3.setCity("Chicago"); cup3.setMembershipType("PLATINUM"); cup3.setUser(u3_3);
        customerProfileRepository.saveAll(Arrays.asList(cup1, cup2, cup3));

        // 7. Product
        Product p1 = new Product(); p1.setSku("SKU123"); p1.setName("Laptop"); p1.setUnitPrice(new BigDecimal("999.99")); p1.setStockQuantity(10); p1.setCategoryId(c1.getId()); p1.setStore(s1);
        Product p2 = new Product(); p2.setSku("SKU456"); p2.setName("T-Shirt"); p2.setUnitPrice(new BigDecimal("19.99")); p2.setStockQuantity(50); p2.setCategoryId(c2.getId()); p2.setStore(s2);
        Product p3 = new Product(); p3.setSku("SKU789"); p3.setName("Sofa"); p3.setUnitPrice(new BigDecimal("499.00")); p3.setStockQuantity(5); p3.setCategoryId(c3.getId()); p3.setStore(s3);
        productRepository.saveAll(Arrays.asList(p1, p2, p3));

        // 8. PaymentMethod
        PaymentMethod pm1 = new PaymentMethod(); pm1.setName("Credit Card"); pm1.setProvider("Visa");
        PaymentMethod pm2 = new PaymentMethod(); pm2.setName("Credit Card"); pm2.setProvider("MasterCard");
        PaymentMethod pm3 = new PaymentMethod(); pm3.setName("Paypal"); pm3.setProvider("PayPal");
        paymentMethodRepository.saveAll(Arrays.asList(pm1, pm2, pm3));

        // 9. Order
        Order o1 = new Order(); o1.setTotalPrice(new BigDecimal("999.99")); o1.setUser(u3); o1.setStore(s1); o1.setPaymentMethodId(pm1.getId()); o1.setStatus(OrderStatus.DELIVERED);
        Order o2 = new Order(); o2.setTotalPrice(new BigDecimal("19.99")); o2.setUser(u3); o2.setStore(s2); o2.setPaymentMethodId(pm2.getId()); o2.setStatus(OrderStatus.PENDING);
        Order o3 = new Order(); o3.setTotalPrice(new BigDecimal("499.00")); o3.setUser(u2); o3.setStore(s3); o3.setPaymentMethodId(pm3.getId()); o3.setStatus(OrderStatus.SHIPPED);
        orderRepository.saveAll(Arrays.asList(o1, o2, o3));

        // 10. OrderItem
        OrderItem oi1 = new OrderItem(); oi1.setOrder(o1); oi1.setProduct(p1); oi1.setQuantity(1); oi1.setUnitPrice(new BigDecimal("999.99")); oi1.setTotalPrice(new BigDecimal("999.99"));
        OrderItem oi2 = new OrderItem(); oi2.setOrder(o2); oi2.setProduct(p2); oi2.setQuantity(1); oi2.setUnitPrice(new BigDecimal("19.99")); oi2.setTotalPrice(new BigDecimal("19.99"));
        OrderItem oi3 = new OrderItem(); oi3.setOrder(o3); oi3.setProduct(p3); oi3.setQuantity(1); oi3.setUnitPrice(new BigDecimal("499.00")); oi3.setTotalPrice(new BigDecimal("499.00"));
        orderItemRepository.saveAll(Arrays.asList(oi1, oi2, oi3));

        // 11. Shipment
        Shipment sh1 = new Shipment(); sh1.setOrder(o1); sh1.setCarrier("FedEx"); sh1.setTrackingNumber("TRK123"); sh1.setStatus("SHIPPED");
        Shipment sh2 = new Shipment(); sh2.setOrder(o2); sh2.setCarrier("UPS"); sh2.setTrackingNumber("TRK456"); sh2.setStatus("PENDING");
        Shipment sh3 = new Shipment(); sh3.setOrder(o3); sh3.setCarrier("USPS"); sh3.setTrackingNumber("TRK789"); sh3.setStatus("DELIVERED");
        shipmentRepository.saveAll(Arrays.asList(sh1, sh2, sh3));

        // 12. Review
        Review r1 = new Review(); r1.setStarRating(5); r1.setReviewText("Great!"); r1.setProduct(p1); r1.setUser(u3);
        Review r2 = new Review(); r2.setStarRating(4); r2.setReviewText("Good."); r2.setProduct(p2); r2.setUser(u3);
        Review r3 = new Review(); r3.setStarRating(3); r3.setReviewText("Okay."); r3.setProduct(p3); r3.setUser(u2);
        reviewRepository.saveAll(Arrays.asList(r1, r2, r3));

        // 13. Refund
        Refund ref1 = new Refund(); ref1.setRefundAmount(new BigDecimal("10.00")); ref1.setOrder(o1); ref1.setStatus("PROCESSED");
        Refund ref2 = new Refund(); ref2.setRefundAmount(new BigDecimal("5.00")); ref2.setOrder(o2); ref2.setStatus("PENDING");
        Refund ref3 = new Refund(); ref3.setRefundAmount(new BigDecimal("15.00")); ref3.setOrder(o3); ref3.setStatus("REJECTED");
        refundRepository.saveAll(Arrays.asList(ref1, ref2, ref3));

        // 14. AuditLog
        AuditLog al1 = new AuditLog(); al1.setActionPerformed("LOGIN"); al1.setUserId(u1.getId()); al1.setEntityType("USER"); al1.setEntityId(u1.getId());
        AuditLog al2 = new AuditLog(); al2.setActionPerformed("CREATE_ORDER"); al2.setUserId(u3.getId()); al2.setEntityType("ORDER"); al2.setEntityId(o1.getId());
        AuditLog al3 = new AuditLog(); al3.setActionPerformed("UPDATE_PRODUCT"); al3.setUserId(u2.getId()); al3.setEntityType("PRODUCT"); al3.setEntityId(p1.getId());
        auditLogRepository.saveAll(Arrays.asList(al1, al2, al3));
        
        System.out.println("Database successfully seeded with 14 entities and mock data!");
    }
}
