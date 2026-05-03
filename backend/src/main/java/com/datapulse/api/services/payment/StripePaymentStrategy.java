package com.datapulse.api.services.payment;

import com.datapulse.api.repositories.SystemConfigRepository;
import com.stripe.model.PaymentIntent;
import com.stripe.net.RequestOptions;
import com.stripe.param.PaymentIntentCreateParams;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;

@Service
@RequiredArgsConstructor
@Slf4j
public class StripePaymentStrategy implements PaymentStrategy {

    private final SystemConfigRepository systemConfigRepository;

    @Value("${stripe.api.key:sk_test_placeholder}")
    private String stripeApiKeyFallback;

    private String resolveApiKey() {
        return systemConfigRepository.findByConfigKey("stripe_api_key")
                .map(c -> c.getConfigValue())
                .filter(v -> v != null && !v.isBlank())
                .orElse(stripeApiKeyFallback);
    }

    @Override
    public String createPaymentIntent(BigDecimal amount, String currency) throws Exception {
        RequestOptions options = RequestOptions.builder().setApiKey(resolveApiKey()).build();
        long amountInCents = amount.multiply(new BigDecimal(100)).longValue();

        PaymentIntentCreateParams params = PaymentIntentCreateParams.builder()
                .setAmount(amountInCents)
                .setCurrency(currency)
                .build();

        PaymentIntent intent = PaymentIntent.create(params, options);
        return intent.getClientSecret();
    }

    @Override
    public boolean verifyPayment(String paymentIntentId) {
        try {
            RequestOptions options = RequestOptions.builder().setApiKey(resolveApiKey()).build();
            PaymentIntent intent = PaymentIntent.retrieve(paymentIntentId, options);
            return "succeeded".equals(intent.getStatus());
        } catch (Exception e) {
            log.error("Stripe ödeme doğrulama hatası: {}", e.getMessage());
            return false;
        }
    }
}
