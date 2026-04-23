package com.datapulse.api.config;

import java.math.BigDecimal;
import java.time.LocalDateTime;
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
import com.datapulse.api.entities.StoreStatus;
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
        SystemConfig sc4 = new SystemConfig(); sc4.setConfigKey("chatbot_llm_provider"); sc4.setConfigValue("openai");
        SystemConfig sc5 = new SystemConfig(); sc5.setConfigKey("chatbot_llm_model"); sc5.setConfigValue("gpt-4o-mini");
        systemConfigRepository.saveAll(Arrays.asList(sc1, sc2, sc3, sc4, sc5));

        // 2. Users — 3 seller + 10 customer + 1 admin
        String pass = passwordEncoder.encode("123Pa$$word!");
        User admin = new User(); admin.setFullName("Admin User"); admin.setEmail("admin@test.com"); admin.setPasswordHash(pass); admin.setRoleType(RoleType.ADMIN); admin.setStatus(UserStatus.ACTIVE);
        
        User seller1 = new User(); seller1.setFullName("Seller User 1"); seller1.setEmail("seller1@test.com"); seller1.setPasswordHash(pass); seller1.setRoleType(RoleType.CORPORATE); seller1.setStatus(UserStatus.ACTIVE);
        User seller2 = new User(); seller2.setFullName("Seller User 2"); seller2.setEmail("seller2@test.com"); seller2.setPasswordHash(pass); seller2.setRoleType(RoleType.CORPORATE); seller2.setStatus(UserStatus.ACTIVE);
        User seller3 = new User(); seller3.setFullName("Seller User 3"); seller3.setEmail("seller3@test.com"); seller3.setPasswordHash(pass); seller3.setRoleType(RoleType.CORPORATE); seller3.setStatus(UserStatus.ACTIVE);

        User cust1 = new User(); cust1.setFullName("Ahmet Yılmaz"); cust1.setEmail("customer1@test.com"); cust1.setPasswordHash(pass); cust1.setRoleType(RoleType.INDIVIDUAL); cust1.setStatus(UserStatus.ACTIVE);
        User cust2 = new User(); cust2.setFullName("Elif Demir"); cust2.setEmail("customer2@test.com"); cust2.setPasswordHash(pass); cust2.setRoleType(RoleType.INDIVIDUAL); cust2.setStatus(UserStatus.ACTIVE);
        User cust3 = new User(); cust3.setFullName("Mehmet Kaya"); cust3.setEmail("customer3@test.com"); cust3.setPasswordHash(pass); cust3.setRoleType(RoleType.INDIVIDUAL); cust3.setStatus(UserStatus.ACTIVE);
        User cust4 = new User(); cust4.setFullName("Zeynep Arslan"); cust4.setEmail("customer4@test.com"); cust4.setPasswordHash(pass); cust4.setRoleType(RoleType.INDIVIDUAL); cust4.setStatus(UserStatus.ACTIVE);
        User cust5 = new User(); cust5.setFullName("Ali Öztürk"); cust5.setEmail("customer5@test.com"); cust5.setPasswordHash(pass); cust5.setRoleType(RoleType.INDIVIDUAL); cust5.setStatus(UserStatus.ACTIVE);
        User cust6 = new User(); cust6.setFullName("Fatma Çelik"); cust6.setEmail("customer6@test.com"); cust6.setPasswordHash(pass); cust6.setRoleType(RoleType.INDIVIDUAL); cust6.setStatus(UserStatus.ACTIVE);
        User cust7 = new User(); cust7.setFullName("Emre Şahin"); cust7.setEmail("customer7@test.com"); cust7.setPasswordHash(pass); cust7.setRoleType(RoleType.INDIVIDUAL); cust7.setStatus(UserStatus.ACTIVE);
        User cust8 = new User(); cust8.setFullName("Ayşe Koç"); cust8.setEmail("customer8@test.com"); cust8.setPasswordHash(pass); cust8.setRoleType(RoleType.INDIVIDUAL); cust8.setStatus(UserStatus.ACTIVE);
        User cust9 = new User(); cust9.setFullName("Burak Yıldız"); cust9.setEmail("customer9@test.com"); cust9.setPasswordHash(pass); cust9.setRoleType(RoleType.INDIVIDUAL); cust9.setStatus(UserStatus.ACTIVE);
        User cust10 = new User(); cust10.setFullName("Selin Aydın"); cust10.setEmail("customer10@test.com"); cust10.setPasswordHash(pass); cust10.setRoleType(RoleType.INDIVIDUAL); cust10.setStatus(UserStatus.ACTIVE);

        userRepository.saveAll(Arrays.asList(admin, seller1, seller2, seller3,
                cust1, cust2, cust3, cust4, cust5, cust6, cust7, cust8, cust9, cust10));

        // 3. Categories
        Category catElec = new Category(); catElec.setName("Electronics");
        Category catCloth = new Category(); catCloth.setName("Clothing");
        Category catHome = new Category(); catHome.setName("Home & Garden");
        Category catSport = new Category(); catSport.setName("Sports & Outdoors");
        Category catBooks = new Category(); catBooks.setName("Books");
        categoryRepository.saveAll(Arrays.asList(catElec, catCloth, catHome, catSport, catBooks));

        // 4. Stores
        Store s1 = new Store(); s1.setName("Tech Haven"); s1.setDescription("Premium elektronik ürünlerin adresi"); s1.setOwner(seller1); s1.setStatus(StoreStatus.ACTIVE); s1.setBaseCurrency("USD");
        Store s2 = new Store(); s2.setName("Fashion Finds"); s2.setDescription("Trend moda markaları"); s2.setOwner(seller2); s2.setStatus(StoreStatus.ACTIVE); s2.setBaseCurrency("USD");
        Store s3 = new Store(); s3.setName("Cozy Home"); s3.setDescription("Eviniz için her şey"); s3.setOwner(seller3); s3.setStatus(StoreStatus.ACTIVE); s3.setBaseCurrency("USD");
        storeRepository.saveAll(Arrays.asList(s1, s2, s3));

        // 5. CorporateProfile
        CorporateProfile cp1 = new CorporateProfile(); cp1.setCompanyName("Tech Haven Corp"); cp1.setTaxId("12345"); cp1.setTaxOffice("İstanbul"); cp1.setUser(seller1);
        CorporateProfile cp2 = new CorporateProfile(); cp2.setCompanyName("Fashion Group LLC"); cp2.setTaxId("67890"); cp2.setTaxOffice("Ankara"); cp2.setUser(seller2);
        CorporateProfile cp3 = new CorporateProfile(); cp3.setCompanyName("Home & Garden Inc"); cp3.setTaxId("99999"); cp3.setTaxOffice("İzmir"); cp3.setUser(seller3);
        corporateProfileRepository.saveAll(Arrays.asList(cp1, cp2, cp3));

        // 6. CustomerProfile — çeşitli şehirler ve üyelik tipleri
        CustomerProfile cup1 = new CustomerProfile(); cup1.setAge(30); cup1.setCity("İstanbul"); cup1.setMembershipType("GOLD"); cup1.setUser(cust1);
        CustomerProfile cup2 = new CustomerProfile(); cup2.setAge(25); cup2.setCity("Ankara"); cup2.setMembershipType("SILVER"); cup2.setUser(cust2);
        CustomerProfile cup3 = new CustomerProfile(); cup3.setAge(40); cup3.setCity("İzmir"); cup3.setMembershipType("PLATINUM"); cup3.setUser(cust3);
        CustomerProfile cup4 = new CustomerProfile(); cup4.setAge(28); cup4.setCity("İstanbul"); cup4.setMembershipType("GOLD"); cup4.setUser(cust4);
        CustomerProfile cup5 = new CustomerProfile(); cup5.setAge(35); cup5.setCity("Bursa"); cup5.setMembershipType("SILVER"); cup5.setUser(cust5);
        CustomerProfile cup6 = new CustomerProfile(); cup6.setAge(22); cup6.setCity("Antalya"); cup6.setMembershipType("STANDARD"); cup6.setUser(cust6);
        CustomerProfile cup7 = new CustomerProfile(); cup7.setAge(33); cup7.setCity("İstanbul"); cup7.setMembershipType("GOLD"); cup7.setUser(cust7);
        CustomerProfile cup8 = new CustomerProfile(); cup8.setAge(45); cup8.setCity("Ankara"); cup8.setMembershipType("PLATINUM"); cup8.setUser(cust8);
        CustomerProfile cup9 = new CustomerProfile(); cup9.setAge(29); cup9.setCity("İzmir"); cup9.setMembershipType("SILVER"); cup9.setUser(cust9);
        CustomerProfile cup10 = new CustomerProfile(); cup10.setAge(31); cup10.setCity("Bursa"); cup10.setMembershipType("GOLD"); cup10.setUser(cust10);
        customerProfileRepository.saveAll(Arrays.asList(cup1, cup2, cup3, cup4, cup5, cup6, cup7, cup8, cup9, cup10));

        // 7. Products — seller1 (Tech Haven) → 8 ürün, seller2 → 2, seller3 → 2
        Product p1 = new Product(); p1.setSku("TH-LP01"); p1.setName("MacBook Pro 16"); p1.setDescription("Apple M3 Pro çip, 18GB RAM, 512GB SSD"); p1.setUnitPrice(new BigDecimal("2499.99")); p1.setOriginalPrice(new BigDecimal("2799.99")); p1.setStockQuantity(15); p1.setCategoryId(catElec.getId()); p1.setStore(s1); p1.setIsFeatured(true);
        Product p2 = new Product(); p2.setSku("TH-PH01"); p2.setName("iPhone 16 Pro Max"); p2.setDescription("256GB, Titanium, A18 Pro çip"); p2.setUnitPrice(new BigDecimal("1199.00")); p2.setOriginalPrice(new BigDecimal("1299.00")); p2.setStockQuantity(25); p2.setCategoryId(catElec.getId()); p2.setStore(s1); p2.setIsFeatured(true);
        Product p3 = new Product(); p3.setSku("TH-HP01"); p3.setName("Sony WH-1000XM5"); p3.setDescription("Kablosuz noise-cancelling kulaklık"); p3.setUnitPrice(new BigDecimal("349.99")); p3.setOriginalPrice(new BigDecimal("399.99")); p3.setStockQuantity(40); p3.setCategoryId(catElec.getId()); p3.setStore(s1); p3.setIsFeatured(false);
        Product p4 = new Product(); p4.setSku("TH-TB01"); p4.setName("iPad Air M2"); p4.setDescription("11 inç Liquid Retina, 128GB"); p4.setUnitPrice(new BigDecimal("599.00")); p4.setStockQuantity(8); p4.setCategoryId(catElec.getId()); p4.setStore(s1);
        Product p5 = new Product(); p5.setSku("TH-KB01"); p5.setName("Logitech MX Keys S"); p5.setDescription("Kablosuz mekanik klavye, backlit"); p5.setUnitPrice(new BigDecimal("109.99")); p5.setStockQuantity(60); p5.setCategoryId(catElec.getId()); p5.setStore(s1);
        Product p6 = new Product(); p6.setSku("TH-MS01"); p6.setName("Logitech MX Master 3S"); p6.setDescription("Ergonomik kablosuz fare"); p6.setUnitPrice(new BigDecimal("99.99")); p6.setStockQuantity(45); p6.setCategoryId(catElec.getId()); p6.setStore(s1);
        Product p7 = new Product(); p7.setSku("TH-MN01"); p7.setName("LG UltraWide 34WN80C"); p7.setDescription("34 inç kavisli monitör, USB-C"); p7.setUnitPrice(new BigDecimal("449.99")); p7.setOriginalPrice(new BigDecimal("549.99")); p7.setStockQuantity(3); p7.setCategoryId(catElec.getId()); p7.setStore(s1); p7.setIsFeatured(true);
        Product p8 = new Product(); p8.setSku("TH-CH01"); p8.setName("Anker PowerCore 26800"); p8.setDescription("26800mAh taşınabilir şarj cihazı"); p8.setUnitPrice(new BigDecimal("65.99")); p8.setStockQuantity(0); p8.setCategoryId(catElec.getId()); p8.setStore(s1); p8.setIsActive(false);

        Product p9 = new Product(); p9.setSku("FF-TS01"); p9.setName("Premium Pamuklu T-Shirt"); p9.setDescription("100% organik pamuk, Regular fit"); p9.setUnitPrice(new BigDecimal("29.99")); p9.setStockQuantity(120); p9.setCategoryId(catCloth.getId()); p9.setStore(s2); p9.setIsFeatured(true);
        Product p10 = new Product(); p10.setSku("FF-JN01"); p10.setName("Slim Fit Denim Jean"); p10.setDescription("Streç denim, koyu mavi"); p10.setUnitPrice(new BigDecimal("59.99")); p10.setOriginalPrice(new BigDecimal("79.99")); p10.setStockQuantity(75); p10.setCategoryId(catCloth.getId()); p10.setStore(s2);

        Product p11 = new Product(); p11.setSku("CH-SF01"); p11.setName("Modern L-Koltuk"); p11.setDescription("Gri kadife kumaş koltuk takımı"); p11.setUnitPrice(new BigDecimal("899.00")); p11.setOriginalPrice(new BigDecimal("1199.00")); p11.setStockQuantity(4); p11.setCategoryId(catHome.getId()); p11.setStore(s3); p11.setIsFeatured(true);
        Product p12 = new Product(); p12.setSku("CH-LM01"); p12.setName("Minimal Masa Lambası"); p12.setDescription("LED dokunmatik masa lambası"); p12.setUnitPrice(new BigDecimal("45.00")); p12.setStockQuantity(30); p12.setCategoryId(catHome.getId()); p12.setStore(s3);

        productRepository.saveAll(Arrays.asList(p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11, p12));

        // 8. PaymentMethod
        PaymentMethod pm1 = new PaymentMethod(); pm1.setName("Credit Card"); pm1.setProvider("Visa");
        PaymentMethod pm2 = new PaymentMethod(); pm2.setName("Credit Card"); pm2.setProvider("MasterCard");
        PaymentMethod pm3 = new PaymentMethod(); pm3.setName("PayPal"); pm3.setProvider("PayPal");
        paymentMethodRepository.saveAll(Arrays.asList(pm1, pm2, pm3));

        // 9. Orders — seller1 (Tech Haven) → 15 sipariş, çeşitli statüler
        LocalDateTime now = LocalDateTime.now();

        // DELIVERED siparişler (geçmiş tarihli)
        Order o1 = new Order(); o1.setTotalPrice(new BigDecimal("2499.99")); o1.setUser(cust1); o1.setStore(s1); o1.setPaymentMethodId(pm1.getId()); o1.setStatus(OrderStatus.DELIVERED); o1.setOrderDate(now.minusDays(22));
        Order o2 = new Order(); o2.setTotalPrice(new BigDecimal("1199.00")); o2.setUser(cust2); o2.setStore(s1); o2.setPaymentMethodId(pm2.getId()); o2.setStatus(OrderStatus.DELIVERED); o2.setOrderDate(now.minusDays(20));
        Order o3 = new Order(); o3.setTotalPrice(new BigDecimal("349.99")); o3.setUser(cust3); o3.setStore(s1); o3.setPaymentMethodId(pm1.getId()); o3.setStatus(OrderStatus.DELIVERED); o3.setOrderDate(now.minusDays(18));
        Order o4 = new Order(); o4.setTotalPrice(new BigDecimal("1799.98")); o4.setUser(cust1); o4.setStore(s1); o4.setPaymentMethodId(pm3.getId()); o4.setStatus(OrderStatus.DELIVERED); o4.setOrderDate(now.minusDays(15));
        Order o5 = new Order(); o5.setTotalPrice(new BigDecimal("599.00")); o5.setUser(cust4); o5.setStore(s1); o5.setPaymentMethodId(pm1.getId()); o5.setStatus(OrderStatus.DELIVERED); o5.setOrderDate(now.minusDays(12));

        // SHIPPED siparişler
        Order o6 = new Order(); o6.setTotalPrice(new BigDecimal("449.99")); o6.setUser(cust5); o6.setStore(s1); o6.setPaymentMethodId(pm2.getId()); o6.setStatus(OrderStatus.SHIPPED); o6.setOrderDate(now.minusDays(10));
        Order o7 = new Order(); o7.setTotalPrice(new BigDecimal("209.98")); o7.setUser(cust6); o7.setStore(s1); o7.setPaymentMethodId(pm1.getId()); o7.setStatus(OrderStatus.SHIPPED); o7.setOrderDate(now.minusDays(8));

        // PROCESSING siparişler
        Order o8 = new Order(); o8.setTotalPrice(new BigDecimal("1199.00")); o8.setUser(cust7); o8.setStore(s1); o8.setPaymentMethodId(pm3.getId()); o8.setStatus(OrderStatus.PROCESSING); o8.setOrderDate(now.minusDays(6));
        Order o9 = new Order(); o9.setTotalPrice(new BigDecimal("699.98")); o9.setUser(cust8); o9.setStore(s1); o9.setPaymentMethodId(pm1.getId()); o9.setStatus(OrderStatus.PROCESSING); o9.setOrderDate(now.minusDays(5));

        // PENDING siparişler
        Order o10 = new Order(); o10.setTotalPrice(new BigDecimal("2849.98")); o10.setUser(cust9); o10.setStore(s1); o10.setPaymentMethodId(pm2.getId()); o10.setStatus(OrderStatus.PENDING); o10.setOrderDate(now.minusDays(3));
        Order o11 = new Order(); o11.setTotalPrice(new BigDecimal("349.99")); o11.setUser(cust10); o11.setStore(s1); o11.setPaymentMethodId(pm1.getId()); o11.setStatus(OrderStatus.PENDING); o11.setOrderDate(now.minusDays(2));
        Order o12 = new Order(); o12.setTotalPrice(new BigDecimal("109.99")); o12.setUser(cust1); o12.setStore(s1); o12.setPaymentMethodId(pm3.getId()); o12.setStatus(OrderStatus.PENDING); o12.setOrderDate(now.minusDays(1));

        // CANCELLED siparişler
        Order o13 = new Order(); o13.setTotalPrice(new BigDecimal("1199.00")); o13.setUser(cust3); o13.setStore(s1); o13.setPaymentMethodId(pm1.getId()); o13.setStatus(OrderStatus.CANCELLED); o13.setOrderDate(now.minusDays(14));
        Order o14 = new Order(); o14.setTotalPrice(new BigDecimal("99.99")); o14.setUser(cust5); o14.setStore(s1); o14.setPaymentMethodId(pm2.getId()); o14.setStatus(OrderStatus.CANCELLED); o14.setOrderDate(now.minusDays(7));

        // Diğer mağazalar için siparişler
        Order o15 = new Order(); o15.setTotalPrice(new BigDecimal("29.99")); o15.setUser(cust1); o15.setStore(s2); o15.setPaymentMethodId(pm1.getId()); o15.setStatus(OrderStatus.DELIVERED); o15.setOrderDate(now.minusDays(16));
        Order o16 = new Order(); o16.setTotalPrice(new BigDecimal("59.99")); o16.setUser(cust2); o16.setStore(s2); o16.setPaymentMethodId(pm2.getId()); o16.setStatus(OrderStatus.PENDING); o16.setOrderDate(now.minusDays(4));
        Order o17 = new Order(); o17.setTotalPrice(new BigDecimal("899.00")); o17.setUser(cust3); o17.setStore(s3); o17.setPaymentMethodId(pm3.getId()); o17.setStatus(OrderStatus.SHIPPED); o17.setOrderDate(now.minusDays(9));
        Order o18 = new Order(); o18.setTotalPrice(new BigDecimal("45.00")); o18.setUser(cust4); o18.setStore(s3); o18.setPaymentMethodId(pm1.getId()); o18.setStatus(OrderStatus.DELIVERED); o18.setOrderDate(now.minusDays(19));

        orderRepository.saveAll(Arrays.asList(o1, o2, o3, o4, o5, o6, o7, o8, o9, o10, o11, o12, o13, o14, o15, o16, o17, o18));

        // 10. OrderItems — seller1 (Tech Haven) siparişleri
        OrderItem oi1 = new OrderItem(); oi1.setOrder(o1); oi1.setProduct(p1); oi1.setQuantity(1); oi1.setUnitPrice(new BigDecimal("2499.99")); oi1.setTotalPrice(new BigDecimal("2499.99"));
        OrderItem oi2 = new OrderItem(); oi2.setOrder(o2); oi2.setProduct(p2); oi2.setQuantity(1); oi2.setUnitPrice(new BigDecimal("1199.00")); oi2.setTotalPrice(new BigDecimal("1199.00"));
        OrderItem oi3 = new OrderItem(); oi3.setOrder(o3); oi3.setProduct(p3); oi3.setQuantity(1); oi3.setUnitPrice(new BigDecimal("349.99")); oi3.setTotalPrice(new BigDecimal("349.99"));
        OrderItem oi4a = new OrderItem(); oi4a.setOrder(o4); oi4a.setProduct(p2); oi4a.setQuantity(1); oi4a.setUnitPrice(new BigDecimal("1199.00")); oi4a.setTotalPrice(new BigDecimal("1199.00"));
        OrderItem oi4b = new OrderItem(); oi4b.setOrder(o4); oi4b.setProduct(p4); oi4b.setQuantity(1); oi4b.setUnitPrice(new BigDecimal("599.00")); oi4b.setTotalPrice(new BigDecimal("599.00"));
        OrderItem oi5 = new OrderItem(); oi5.setOrder(o5); oi5.setProduct(p4); oi5.setQuantity(1); oi5.setUnitPrice(new BigDecimal("599.00")); oi5.setTotalPrice(new BigDecimal("599.00"));
        OrderItem oi6 = new OrderItem(); oi6.setOrder(o6); oi6.setProduct(p7); oi6.setQuantity(1); oi6.setUnitPrice(new BigDecimal("449.99")); oi6.setTotalPrice(new BigDecimal("449.99"));
        OrderItem oi7a = new OrderItem(); oi7a.setOrder(o7); oi7a.setProduct(p5); oi7a.setQuantity(1); oi7a.setUnitPrice(new BigDecimal("109.99")); oi7a.setTotalPrice(new BigDecimal("109.99"));
        OrderItem oi7b = new OrderItem(); oi7b.setOrder(o7); oi7b.setProduct(p6); oi7b.setQuantity(1); oi7b.setUnitPrice(new BigDecimal("99.99")); oi7b.setTotalPrice(new BigDecimal("99.99"));
        OrderItem oi8 = new OrderItem(); oi8.setOrder(o8); oi8.setProduct(p2); oi8.setQuantity(1); oi8.setUnitPrice(new BigDecimal("1199.00")); oi8.setTotalPrice(new BigDecimal("1199.00"));
        OrderItem oi9a = new OrderItem(); oi9a.setOrder(o9); oi9a.setProduct(p3); oi9a.setQuantity(2); oi9a.setUnitPrice(new BigDecimal("349.99")); oi9a.setTotalPrice(new BigDecimal("699.98"));
        OrderItem oi10a = new OrderItem(); oi10a.setOrder(o10); oi10a.setProduct(p1); oi10a.setQuantity(1); oi10a.setUnitPrice(new BigDecimal("2499.99")); oi10a.setTotalPrice(new BigDecimal("2499.99"));
        OrderItem oi10b = new OrderItem(); oi10b.setOrder(o10); oi10b.setProduct(p3); oi10b.setQuantity(1); oi10b.setUnitPrice(new BigDecimal("349.99")); oi10b.setTotalPrice(new BigDecimal("349.99"));
        OrderItem oi11 = new OrderItem(); oi11.setOrder(o11); oi11.setProduct(p3); oi11.setQuantity(1); oi11.setUnitPrice(new BigDecimal("349.99")); oi11.setTotalPrice(new BigDecimal("349.99"));
        OrderItem oi12 = new OrderItem(); oi12.setOrder(o12); oi12.setProduct(p5); oi12.setQuantity(1); oi12.setUnitPrice(new BigDecimal("109.99")); oi12.setTotalPrice(new BigDecimal("109.99"));
        OrderItem oi13 = new OrderItem(); oi13.setOrder(o13); oi13.setProduct(p2); oi13.setQuantity(1); oi13.setUnitPrice(new BigDecimal("1199.00")); oi13.setTotalPrice(new BigDecimal("1199.00"));
        OrderItem oi14 = new OrderItem(); oi14.setOrder(o14); oi14.setProduct(p6); oi14.setQuantity(1); oi14.setUnitPrice(new BigDecimal("99.99")); oi14.setTotalPrice(new BigDecimal("99.99"));
        // Diğer mağazalar
        OrderItem oi15 = new OrderItem(); oi15.setOrder(o15); oi15.setProduct(p9); oi15.setQuantity(1); oi15.setUnitPrice(new BigDecimal("29.99")); oi15.setTotalPrice(new BigDecimal("29.99"));
        OrderItem oi16 = new OrderItem(); oi16.setOrder(o16); oi16.setProduct(p10); oi16.setQuantity(1); oi16.setUnitPrice(new BigDecimal("59.99")); oi16.setTotalPrice(new BigDecimal("59.99"));
        OrderItem oi17 = new OrderItem(); oi17.setOrder(o17); oi17.setProduct(p11); oi17.setQuantity(1); oi17.setUnitPrice(new BigDecimal("899.00")); oi17.setTotalPrice(new BigDecimal("899.00"));
        OrderItem oi18 = new OrderItem(); oi18.setOrder(o18); oi18.setProduct(p12); oi18.setQuantity(1); oi18.setUnitPrice(new BigDecimal("45.00")); oi18.setTotalPrice(new BigDecimal("45.00"));

        orderItemRepository.saveAll(Arrays.asList(oi1, oi2, oi3, oi4a, oi4b, oi5, oi6, oi7a, oi7b, oi8, oi9a, oi10a, oi10b, oi11, oi12, oi13, oi14, oi15, oi16, oi17, oi18));

        // 11. Shipments
        Shipment sh1 = new Shipment(); sh1.setOrder(o1); sh1.setCarrier("Yurtiçi Kargo"); sh1.setTrackingNumber("YK100001"); sh1.setStatus("DELIVERED");
        Shipment sh2 = new Shipment(); sh2.setOrder(o2); sh2.setCarrier("Aras Kargo"); sh2.setTrackingNumber("AK200002"); sh2.setStatus("DELIVERED");
        Shipment sh3 = new Shipment(); sh3.setOrder(o3); sh3.setCarrier("MNG Kargo"); sh3.setTrackingNumber("MNG300003"); sh3.setStatus("DELIVERED");
        Shipment sh4 = new Shipment(); sh4.setOrder(o6); sh4.setCarrier("Yurtiçi Kargo"); sh4.setTrackingNumber("YK400004"); sh4.setStatus("SHIPPED");
        Shipment sh5 = new Shipment(); sh5.setOrder(o7); sh5.setCarrier("PTT Kargo"); sh5.setTrackingNumber("PTT500005"); sh5.setStatus("SHIPPED");
        Shipment sh6 = new Shipment(); sh6.setOrder(o17); sh6.setCarrier("Sürat Kargo"); sh6.setTrackingNumber("SK600006"); sh6.setStatus("SHIPPED");
        shipmentRepository.saveAll(Arrays.asList(sh1, sh2, sh3, sh4, sh5, sh6));

        // 12. Reviews — seller1 ürünlerine çeşitli yorumlar (sentiment'lı)
        // MacBook Pro yorumları
        Review r1 = new Review(); r1.setStarRating(5); r1.setReviewText("Harika bir laptop! M3 Pro çip inanılmaz hızlı, batarya ömrü mükemmel. Kesinlikle tavsiye ederim."); r1.setSentiment("POSITIVE"); r1.setHelpfulVotes(12); r1.setTotalVotes(14); r1.setProduct(p1); r1.setUser(cust1);
        Review r2 = new Review(); r2.setStarRating(4); r2.setReviewText("Genel olarak çok memnunum. Biraz pahali ama kalitesi tartışılmaz. Ekran kalitesi olağanüstü."); r2.setSentiment("POSITIVE"); r2.setHelpfulVotes(8); r2.setTotalVotes(10); r2.setProduct(p1); r2.setUser(cust4);
        Review r3 = new Review(); r3.setStarRating(5); r3.setReviewText("Yazılım geliştirme için birebir. Sessiz çalışıyor, fanlar nadiren açılıyor."); r3.setSentiment("POSITIVE"); r3.setHelpfulVotes(15); r3.setTotalVotes(16); r3.setProduct(p1); r3.setUser(cust7);

        // iPhone yorumları
        Review r4 = new Review(); r4.setStarRating(5); r4.setReviewText("Kamera kalitesi muhteşem! Titanium tasarım çok premium hissettiriyor."); r4.setSentiment("POSITIVE"); r4.setHelpfulVotes(20); r4.setTotalVotes(22); r4.setProduct(p2); r4.setUser(cust2);
        Review r5 = new Review(); r5.setStarRating(3); r5.setReviewText("iPhone 15'ten çok farkı yok açıkçası. Fiyatına göre beklentilerimi karşılamadı."); r5.setSentiment("NEUTRAL"); r5.setHelpfulVotes(5); r5.setTotalVotes(12); r5.setProduct(p2); r5.setUser(cust5);
        Review r6 = new Review(); r6.setStarRating(4); r6.setReviewText("Batarya ömrü bir önceki modelden çok daha iyi. Hızlı şarj özelliği süper."); r6.setSentiment("POSITIVE"); r6.setHelpfulVotes(7); r6.setTotalVotes(9); r6.setProduct(p2); r6.setUser(cust8);

        // Sony kulaklık yorumları
        Review r7 = new Review(); r7.setStarRating(5); r7.setReviewText("Noise cancelling özelliği rakipsiz. Uçak yolculuklarında hayat kurtarıcı!"); r7.setSentiment("POSITIVE"); r7.setHelpfulVotes(25); r7.setTotalVotes(27); r7.setProduct(p3); r7.setUser(cust3);
        Review r8 = new Review(); r8.setStarRating(4); r8.setReviewText("Ses kalitesi mükemmel ama kulaklık biraz sıkıyor, uzun kullanımda rahatsız edebilir."); r8.setSentiment("POSITIVE"); r8.setHelpfulVotes(10); r8.setTotalVotes(13); r8.setProduct(p3); r8.setUser(cust6);
        Review r9 = new Review(); r9.setStarRating(2); r9.setReviewText("Beklediğim kadar iyi değildi, bir önceki model daha konforluydu. İade etmeyi düşünüyorum."); r9.setSentiment("NEGATIVE"); r9.setHelpfulVotes(3); r9.setTotalVotes(8); r9.setProduct(p3); r9.setUser(cust9);

        // iPad yorumları
        Review r10 = new Review(); r10.setStarRating(4); r10.setReviewText("Çizim ve not alma için harika bir tablet. Apple Pencil ile uyumu mükemmel."); r10.setSentiment("POSITIVE"); r10.setHelpfulVotes(6); r10.setTotalVotes(7); r10.setProduct(p4); r10.setUser(cust4);
        Review r11 = new Review(); r11.setStarRating(5); r11.setReviewText("Üniversite için aldım, ders notları ve PDF okuma için birebir."); r11.setSentiment("POSITIVE"); r11.setHelpfulVotes(11); r11.setTotalVotes(12); r11.setProduct(p4); r11.setUser(cust6);

        // Klavye ve fare yorumları
        Review r12 = new Review(); r12.setStarRating(5); r12.setReviewText("Tuş hissi muhteşem, 3 cihaz arasında kolayca geçiş yapabiliyorsunuz."); r12.setSentiment("POSITIVE"); r12.setHelpfulVotes(9); r12.setTotalVotes(10); r12.setProduct(p5); r12.setUser(cust7);
        Review r13 = new Review(); r13.setStarRating(4); r13.setReviewText("Ergonomik tasarım bileğimi rahatlatıyor. Bluetooth bağlantısı stabil."); r13.setSentiment("POSITIVE"); r13.setHelpfulVotes(4); r13.setTotalVotes(5); r13.setProduct(p6); r13.setUser(cust10);

        // Monitör yorumları
        Review r14 = new Review(); r14.setStarRating(3); r14.setReviewText("Renk kalitesi fena değil ama tepki süresi oyun için yetersiz."); r14.setSentiment("NEUTRAL"); r14.setHelpfulVotes(2); r14.setTotalVotes(6); r14.setProduct(p7); r14.setUser(cust5);
        Review r15 = new Review(); r15.setStarRating(1); r15.setReviewText("2 ay sonra arızalandı, servis süreci çok uzun sürdü. Hiç memnun kalmadım."); r15.setSentiment("NEGATIVE"); r15.setHelpfulVotes(18); r15.setTotalVotes(20); r15.setProduct(p7); r15.setUser(cust9);

        // Diğer mağazalar
        Review r16 = new Review(); r16.setStarRating(5); r16.setReviewText("Kumaş kalitesi süper, beden kalıbı tam oturuyor."); r16.setSentiment("POSITIVE"); r16.setHelpfulVotes(3); r16.setTotalVotes(4); r16.setProduct(p9); r16.setUser(cust1);
        Review r17 = new Review(); r17.setStarRating(4); r17.setReviewText("Koltuk çok konforlu, rengi fotoğraftaki gibi."); r17.setSentiment("POSITIVE"); r17.setHelpfulVotes(5); r17.setTotalVotes(6); r17.setProduct(p11); r17.setUser(cust3);

        // Bazı yorumlara mağaza sahibi yanıtları
        r1.setOwnerReply("Değerli yorumunuz için teşekkür ederiz! M3 Pro'nun performansından memnun kalmanız bizi çok mutlu etti. 🙏"); r1.setReplyDate(LocalDateTime.now().minusDays(2));
        r4.setOwnerReply("Harika bir geri bildirim! Titanium tasarımı gerçekten özel bir deneyim sunuyor. İyi günlerde kullanın! 📱"); r4.setReplyDate(LocalDateTime.now().minusDays(5));
        r9.setOwnerReply("Geri bildiriminiz için teşekkürler. Konfor sorunu hakkında üreticiyle iletişime geçtik. İade süreciniz için destek@techhaven.com adresinden bizimle iletişime geçebilirsiniz."); r9.setReplyDate(LocalDateTime.now().minusDays(1));
        r15.setOwnerReply("Yaşadığınız sorun için çok üzgünüz. Servis sürecini hızlandırmak için özel bir takip numarası oluşturduk. Lütfen destek hattımızı arayın."); r15.setReplyDate(LocalDateTime.now().minusDays(3));

        reviewRepository.saveAll(Arrays.asList(r1, r2, r3, r4, r5, r6, r7, r8, r9, r10, r11, r12, r13, r14, r15, r16, r17));

        // 13. Refund
        Refund ref1 = new Refund(); ref1.setRefundAmount(new BigDecimal("349.99")); ref1.setOrder(o3); ref1.setStatus("PROCESSED"); ref1.setReason("Ürün hasarlı geldi");
        Refund ref2 = new Refund(); ref2.setRefundAmount(new BigDecimal("99.99")); ref2.setOrder(o14); ref2.setStatus("PROCESSED"); ref2.setReason("Sipariş iptal edildi");
        Refund ref3 = new Refund(); ref3.setRefundAmount(new BigDecimal("1199.00")); ref3.setOrder(o13); ref3.setStatus("PENDING"); ref3.setReason("Yanlış ürün gönderildi");
        refundRepository.saveAll(Arrays.asList(ref1, ref2, ref3));

        // 14. AuditLog
        AuditLog al1 = new AuditLog(); al1.setActionPerformed("LOGIN"); al1.setUserId(admin.getId()); al1.setEntityType("USER"); al1.setEntityId(admin.getId());
        AuditLog al2 = new AuditLog(); al2.setActionPerformed("CREATE_ORDER"); al2.setUserId(cust1.getId()); al2.setEntityType("ORDER"); al2.setEntityId(o1.getId());
        AuditLog al3 = new AuditLog(); al3.setActionPerformed("UPDATE_PRODUCT"); al3.setUserId(seller1.getId()); al3.setEntityType("PRODUCT"); al3.setEntityId(p1.getId());
        AuditLog al4 = new AuditLog(); al4.setActionPerformed("CREATE_ORDER"); al4.setUserId(cust2.getId()); al4.setEntityType("ORDER"); al4.setEntityId(o2.getId());
        AuditLog al5 = new AuditLog(); al5.setActionPerformed("CANCEL_ORDER"); al5.setUserId(cust3.getId()); al5.setEntityType("ORDER"); al5.setEntityId(o13.getId());
        auditLogRepository.saveAll(Arrays.asList(al1, al2, al3, al4, al5));
        
        System.out.println("Database successfully seeded with rich test data!");
        System.out.println("  → 14 users (1 admin, 3 sellers, 10 customers)");
        System.out.println("  → 5 categories, 3 stores, 12 products");
        System.out.println("  → 18 orders, 21 order items, 6 shipments");
        System.out.println("  → 17 reviews, 3 refunds, 5 audit logs");
        System.out.println("  → seller1@test.com / 123Pa$$word! → Tech Haven (8 ürün, 14 sipariş)");
    }
}
