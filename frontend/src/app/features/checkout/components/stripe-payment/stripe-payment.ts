import { Component, ElementRef, ViewChild, AfterViewInit, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { loadStripe, Stripe, StripeElements, StripeCardElement } from '@stripe/stripe-js';
import { environment } from '../../../../../environments/environment';

@Component({
  selector: 'app-stripe-payment',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './stripe-payment.html'
})
export class StripePaymentComponent implements AfterViewInit {
  @ViewChild('cardElement') cardElementRef!: ElementRef;
  @Output() cardError = new EventEmitter<string | null>();
  @Output() cardReady = new EventEmitter<StripeCardElement>();

  private stripePromise = loadStripe('pk_test_51TLNMOLsZ27UXGYbbBFI9uTvdsC6SdmwReuqGAPhH6FHqyI3NFbrCV38IiViZ9hr81WcVR3sknyVdVCeWOV5gMME00Fdta8LHT'); // Will inject real key later
  public stripe!: Stripe | null;
  private elements!: StripeElements;
  public card!: StripeCardElement;
  errorMessage: string | null = null;
  isProd = environment.production;

  async ngAfterViewInit() {
    this.stripe = await this.stripePromise;
    if (this.stripe) {
      this.elements = this.stripe.elements();
      this.card = this.elements.create('card', {
        style: {
          base: {
            iconColor: '#3b82f6',
            color: '#1f2937',
            fontWeight: '500',
            fontFamily: 'Roboto, Open Sans, Segoe UI, sans-serif',
            fontSize: '16px',
            fontSmoothing: 'antialiased',
            '::placeholder': { color: '#9ca3af' }
          },
          invalid: { iconColor: '#ef4444', color: '#ef4444' }
        }
      });
      this.card.mount(this.cardElementRef.nativeElement);
      
      this.card.on('change', (event: any) => {
        this.errorMessage = event.error ? event.error.message : null;
        this.cardError.emit(this.errorMessage);
      });

      this.cardReady.emit(this.card);
    }
  }

  async confirmPayment(clientSecret: string, billingDetails: any): Promise<any> {
    if(!this.stripe || !this.card) return { error: { message: "Stripe not initialized" } };
    return this.stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: this.card,
        billing_details: billingDetails
      }
    });
  }
}
