import { Component, inject, OnInit, ViewChild, NgZone } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { StripePaymentComponent } from '../../components/stripe-payment/stripe-payment';
import { PaypalPaymentComponent } from '../../components/paypal-payment/paypal-payment';
import { CartService } from '../../../../core/services/cart.service';
import { PaymentService, PaymentIntentResponse } from '../../../../core/services/payment.service';
import { environment } from '../../../../../environments/environment';
import { DemoFillComponent, DemoAccount } from '../../../../shared/components/demo-fill/demo-fill.component';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, StripePaymentComponent, PaypalPaymentComponent, DemoFillComponent],
  templateUrl: './checkout.html'
})
export class CheckoutComponent implements OnInit {
  @ViewChild(StripePaymentComponent) stripePaymentComp!: StripePaymentComponent;

  cartService = inject(CartService);
  paymentService = inject(PaymentService);
  private fb = inject(FormBuilder);
  private router = inject(Router);
  private http = inject(HttpClient);
  private ngZone = inject(NgZone);

  checkoutForm!: FormGroup;
  isProcessing = false;
  paymentError: string | null = null;
  selectedPaymentMethod = 'stripe';

  checkoutDemoAccounts: DemoAccount[] = [
    { label: 'Örnek Adres', values: { fullName: 'Ahmet Yılmaz', address: 'Atatürk Cad. No:1 Daire:5', city: 'İstanbul', zipCode: '34000' } },
  ];

  ngOnInit() {
    this.checkoutForm = this.fb.group({
      fullName: ['', Validators.required],
      address: ['', Validators.required],
      city: ['', Validators.required],
      zipCode: ['', [Validators.required, Validators.pattern('[0-9]+')]]
    });
  }

  changePaymentMethod(method: string) {
    this.selectedPaymentMethod = method;
    this.paymentError = null;
  }

  onCardError(error: string | null) {
    this.paymentError = error;
  }

  async onSubmit() {
    if (this.checkoutForm.invalid) {
      this.checkoutForm.markAllAsTouched();
      return;
    }
    
    this.isProcessing = true;
    this.paymentError = null;

    try {
      if (this.selectedPaymentMethod === 'stripe') {
        const amount = this.cartService.totalPrice();
        this.paymentService.createPaymentIntent(amount).subscribe({
          next: async (res) => {
            const formData = this.checkoutForm.value;
            const confirmResult = await this.stripePaymentComp.confirmPayment(res.clientSecret, {
              name: formData.fullName,
              address: { city: formData.city, postal_code: formData.zipCode, line1: formData.address }
            });

            this.ngZone.run(() => {
              if (confirmResult.error) {
                this.paymentError = confirmResult.error.message;
                this.isProcessing = false;
              } else {
                this.saveOrderAndComplete('stripe');
              }
            });
          },
          error: (err) => {
            this.paymentError = "Failed to contact Payment Server. Check Backend.";
            this.isProcessing = false;
          }
        });
      } else {
         // Mock strategies (PayPal, etc.) skip the Stripe flow
         setTimeout(() => {
           this.saveOrderAndComplete(this.selectedPaymentMethod);
         }, 1500);
      }
    } catch(err: any) {
      this.paymentError = err.message;
      this.isProcessing = false;
    }
  }

  private saveOrderAndComplete(method: string) {
    const orderPayload = {
      paymentMethod: method,
      items: this.cartService.cartItems().map(ci => ({ productId: ci.product.id, quantity: ci.quantity })),
      address: {
        fullName: this.checkoutForm.value.fullName,
        line1: this.checkoutForm.value.address,
        city: this.checkoutForm.value.city,
        zipCode: this.checkoutForm.value.zipCode
      }
    };

    this.http.post(`${environment.apiUrl}/api/orders`, orderPayload).subscribe({
      next: (res) => {
        this.isProcessing = false;
        this.cartService.clearCart();
        this.router.navigate(['/checkout/success']);
      },
      error: (err) => {
        this.paymentError = "Order saved failed: " + err.message;
        this.isProcessing = false;
      }
    });
  }
}
