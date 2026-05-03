import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

export interface PaymentIntentResponse {
  clientSecret: string;
}

@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  private http = inject(HttpClient);
  // Optional Strategy interface string for expandability
  private backendUrl = `${environment.apiUrl}/api/payments`;

  createPaymentIntent(amount: number): Observable<PaymentIntentResponse> {
    return this.http.post<PaymentIntentResponse>(`${this.backendUrl}/create-intent`, { amount });
  }
}
