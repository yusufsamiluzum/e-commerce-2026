import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RefundService, RefundDto } from '../../../../core/services/refund.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-user-refunds',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-refunds.html',
  styleUrl: './user-refunds.scss'
})
export class UserRefunds {
  private refundService = inject(RefundService);

  apiError = signal<string>('');

  refunds = toSignal(
    this.refundService.getMyRefunds().pipe(
      catchError(() => {
        this.apiError.set('İade talepleri yüklenirken bir hata oluştu. Lütfen sayfayı yenileyin.');
        return of([] as RefundDto[]);
      })
    ),
    { initialValue: null }
  );
}
