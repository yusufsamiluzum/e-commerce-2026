package com.datapulse.api.controllers;

import com.datapulse.api.services.PaymentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.math.BigDecimal;
import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api/payments")
@CrossOrigin(origins = "*") // Update for prod to your frontend URI
public class PaymentController {

    private final PaymentService paymentService;

    @Autowired
    public PaymentController(PaymentService paymentService) {
        this.paymentService = paymentService;
    }

    @PostMapping("/create-intent")
    public ResponseEntity<?> createPaymentIntent(@RequestBody Map<String, Object> data) {
        try {
            // Note: In a real system, you'd calculate the sum securely based on actual cart items from DB, not from frontend input which can be tampered.
            Number amountVal = (Number) data.get("amount");
            if(amountVal == null || amountVal.doubleValue() <= 0) {
                 return ResponseEntity.badRequest().body("Invalid limit");
            }
            
            BigDecimal amount = BigDecimal.valueOf(amountVal.doubleValue());
            String clientSecret = paymentService.createIntent(amount);
            
            Map<String, String> responseData = new HashMap<>();
            responseData.put("clientSecret", clientSecret);
            return ResponseEntity.ok(responseData);
            
        } catch (Exception e) {
            return ResponseEntity.internalServerError().body("Error: " + e.getMessage());
        }
    }
}
