import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

export interface RefundDto {
  id: number;
  orderId: number;
  orderItemId: number;
  refundAmount: number;
  reason: string;
  status: string;
  processedAt: string;
}

export interface RefundRequest {
  orderId: number;
  orderItemId: number | null;
  reason: string;
}

@Injectable({
  providedIn: 'root'
})
export class RefundService {
  private http = inject(HttpClient);
  private apiUrl = `${environment.apiUrl}/api/refunds`;

  getMyRefunds(): Observable<RefundDto[]> {
    return this.http.get<RefundDto[]>(this.apiUrl);
  }

  createRefund(request: RefundRequest): Observable<RefundDto> {
    return this.http.post<RefundDto>(this.apiUrl, request);
  }
}
