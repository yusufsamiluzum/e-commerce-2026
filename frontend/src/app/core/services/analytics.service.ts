import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

export interface SpendingAnalysisResponse {
  totalSpent: number;
  totalOrders: number;
  totalRefunded: number;
  averageOrderValue: number;
  monthlySpending: { [key: string]: number };
}

@Injectable({
  providedIn: 'root'
})
export class AnalyticsService {
  private http = inject(HttpClient);
  private apiUrl = 'http://localhost:8080/api/analytics';

  getSpendingAnalysis(): Observable<SpendingAnalysisResponse> {
    return this.http.get<SpendingAnalysisResponse>(`${this.apiUrl}/spending`);
  }
}
