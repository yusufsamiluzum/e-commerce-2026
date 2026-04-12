import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface PaymentIntentResponse {
  clientSecret: string;
}

@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  private http = inject(HttpClient);
  // Optional Strategy interface string for expandability
  private backendUrl = 'http://localhost:8080/api/payments';

  createPaymentIntent(amount: number): Observable<PaymentIntentResponse> {
    return this.http.post<PaymentIntentResponse>(`${this.backendUrl}/create-intent`, { amount });
  }
}
