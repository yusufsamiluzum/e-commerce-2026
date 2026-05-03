import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnalyticsService, SpendingAnalysisResponse } from '../../../../core/services/analytics.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { catchError, map } from 'rxjs/operators';
import { of } from 'rxjs';

export interface MappedSpendingAnalysis extends SpendingAnalysisResponse {
  monthlySpendingArray: { month: string, amount: number }[];
  maxMonthlyAmount: number;
}

@Component({
  selector: 'app-spending-analysis',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './spending-analysis.html'
})
export class SpendingAnalysis {
  private analyticsService = inject(AnalyticsService);

  analysis = toSignal(
    this.analyticsService.getSpendingAnalysis().pipe(
      map(res => {
        const monthlyArray = Object.entries(res.monthlySpending || {}).map(([month, amount]) => ({ month, amount }));
        const maxAmount = monthlyArray.length > 0 ? Math.max(...monthlyArray.map(m => m.amount)) : 0;
        return {
          ...res,
          monthlySpendingArray: monthlyArray,
          maxMonthlyAmount: maxAmount || 1
        } as MappedSpendingAnalysis;
      }),
      catchError(() => of(null))
    ),
    { initialValue: null }
  );
}
