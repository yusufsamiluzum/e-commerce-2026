package com.datapulse.api.services;

import com.datapulse.api.services.payment.PaymentStrategy;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;

@Service
public class PaymentService {

    private final PaymentStrategy paymentStrategy;

    // By default Spring injects the single PaymentStrategy component (StripePaymentStrategy). 
    // You can use @Qualifier for scaling up.
    @Autowired
    public PaymentService(PaymentStrategy paymentStrategy) {
        this.paymentStrategy = paymentStrategy;
    }

    public String createIntent(BigDecimal sum) throws Exception {
        return paymentStrategy.createPaymentIntent(sum, "usd");
    }
}
