package com.datapulse.api.services.payment;

import java.math.BigDecimal;

public interface PaymentStrategy {
    /**
     * Creates a payment intent with the provider.
     * @param amount The expected double-precision sum (e.g., 50.50).
     * @param currency The currency (e.g., "USD").
     * @return A token or Client Secret recognizable by the frontend script.
     */
    String createPaymentIntent(BigDecimal amount, String currency) throws Exception;

    /**
     * Verify if the payment was successful on the provider's side.
     * @param providerToken A verification string or identifier
     * @return boolean true if valid and paid
     */
    boolean verifyPayment(String providerToken);
}
