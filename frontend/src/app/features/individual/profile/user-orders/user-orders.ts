import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { OrderItemComponent } from '../../../../shared/components/order-item/order-item.component';
import { OrderService, Order } from '../../../../core/services/order.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { map, catchError, shareReplay } from 'rxjs/operators';
import { BehaviorSubject, of, switchMap } from 'rxjs';

export interface OrderStep {
  label: string;
  icon: string;
}

@Component({
  selector: 'app-user-orders',
  standalone: true,
  imports: [CommonModule, RouterModule, OrderItemComponent],
  templateUrl: './user-orders.html',
  styleUrl: './user-orders.scss'
})
export class UserOrders {
  private orderService = inject(OrderService);

  // Sipariş listesini yenilemek için
  private refresh$ = new BehaviorSubject<void>(undefined);

  apiError   = signal<string>('');
  cancellingId = signal<number | null>(null);   // Hangi sipariş iptal ediliyor
  confirmCancelId = signal<number | null>(null); // Onay bekleniyor
  cancelError  = signal<string>('');
  cancelledIds = signal<Set<number>>(new Set()); // Anında UI güncellemesi

  readonly progressSteps: OrderStep[] = [
    { label: 'Alındı',      icon: 'fa-check'  },
    { label: 'Hazırlanıyor',icon: 'fa-box'    },
    { label: 'Kargoda',     icon: 'fa-truck'  },
    { label: 'Teslim',      icon: 'fa-home'   }
  ];

  orders = toSignal(
    this.refresh$.pipe(
      switchMap(() =>
        this.orderService.getUserOrders().pipe(
          map(orders =>
            orders
              .filter(o => o.status !== 'DELIVERED')
              .sort((a, b) => new Date(b.orderDate).getTime() - new Date(a.orderDate).getTime())
          ),
          shareReplay(1),
          catchError(() => {
            this.apiError.set('Siparişler yüklenirken bir hata oluştu.');
            return of([] as Order[]);
          })
        )
      )
    ),
    { initialValue: null }
  );

  /** İptal onay diyaloğunu aç */
  askCancel(orderId: number): void {
    this.confirmCancelId.set(orderId);
    this.cancelError.set('');
  }

  /** İptal iptal et */
  dismissCancel(): void {
    this.confirmCancelId.set(null);
  }

  /** Siparişi iptal et */
  confirmCancel(orderId: number): void {
    this.cancellingId.set(orderId);
    this.confirmCancelId.set(null);

    this.orderService.cancelOrder(orderId).subscribe({
      next: () => {
        this.cancellingId.set(null);
        // Anında listeyi yenile
        this.refresh$.next();
      },
      error: (err) => {
        this.cancellingId.set(null);
        const msg = err?.error?.error || 'Sipariş iptal edilirken bir hata oluştu.';
        this.cancelError.set(msg);
        setTimeout(() => this.cancelError.set(''), 5000);
      }
    });
  }

  getStatusColor(status: string): string {
    switch (status) {
      case 'DELIVERED':   return 'bg-lime-50 text-lime-700 border-lime-200';
      case 'SHIPPED':     return 'bg-blue-50 text-blue-700 border-blue-200';
      case 'PROCESSING':  return 'bg-amber-50 text-amber-700 border-amber-200';
      case 'PENDING':     return 'bg-orange-50 text-orange-600 border-orange-200';
      case 'CANCELLED':   return 'bg-red-50 text-red-600 border-red-200';
      default:            return 'bg-stone-50 text-stone-500 border-stone-200';
    }
  }

  getStatusText(status: string): string {
    switch (status) {
      case 'DELIVERED':   return 'Teslim Edildi';
      case 'SHIPPED':     return 'Kargoya Verildi';
      case 'PROCESSING':  return 'Hazırlanıyor';
      case 'PENDING':     return 'Onay Bekliyor';
      case 'CANCELLED':   return 'İptal Edildi';
      default:            return status;
    }
  }

  getStatusDotColor(status: string): string {
    switch (status) {
      case 'DELIVERED':   return 'bg-lime-500';
      case 'SHIPPED':     return 'bg-blue-500';
      case 'PROCESSING':  return 'bg-amber-500';
      case 'PENDING':     return 'bg-orange-500 animate-pulse';
      case 'CANCELLED':   return 'bg-red-500';
      default:            return 'bg-stone-400';
    }
  }

  getProgressStep(status: string): number {
    switch (status) {
      case 'PENDING':     return 1;
      case 'PROCESSING':  return 2;
      case 'SHIPPED':     return 3;
      case 'DELIVERED':   return 4;
      default:            return 0;
    }
  }

  getStepClass(stepIndex: number, status: string): string {
    const current = this.getProgressStep(status);
    if (stepIndex < current) return 'bg-orange-500 border-orange-400 text-white';
    if (stepIndex === current - 1) return 'bg-orange-500 border-orange-400 text-white shadow-sm';
    return 'border-stone-200 text-stone-400 bg-white';
  }

  getConnectorClass(stepIndex: number, status: string): string {
    return stepIndex < this.getProgressStep(status) - 1 ? 'bg-orange-400' : 'bg-stone-100';
  }
}
