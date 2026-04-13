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
      case 'DELIVERED':   return 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30';
      case 'SHIPPED':     return 'bg-blue-500/10 text-blue-400 border-blue-500/30';
      case 'PROCESSING':  return 'bg-indigo-500/10 text-indigo-400 border-indigo-500/30';
      case 'PENDING':     return 'bg-orange-500/10 text-orange-400 border-orange-500/30';
      case 'CANCELLED':   return 'bg-red-500/10 text-red-400 border-red-500/30';
      default:            return 'bg-gray-500/10 text-gray-400 border-gray-500/30';
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
      case 'DELIVERED':   return 'bg-emerald-400';
      case 'SHIPPED':     return 'bg-blue-400';
      case 'PROCESSING':  return 'bg-indigo-400';
      case 'PENDING':     return 'bg-orange-400 animate-pulse';
      case 'CANCELLED':   return 'bg-red-400';
      default:            return 'bg-gray-400';
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
    if (stepIndex < current) return 'bg-blue-600 border-blue-500 text-white';
    if (stepIndex === current - 1) return 'bg-blue-600 border-blue-400 text-white shadow-lg shadow-blue-900/40';
    return 'border-gray-700 text-gray-600';
  }

  getConnectorClass(stepIndex: number, status: string): string {
    return stepIndex < this.getProgressStep(status) - 1 ? 'bg-blue-600' : 'bg-gray-800';
  }
}
