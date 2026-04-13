import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { OrderItemComponent } from '../../../../shared/components/order-item/order-item.component';
import { OrderService, Order } from '../../../../core/services/order.service';
import { RefundService } from '../../../../core/services/refund.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { map, catchError, shareReplay } from 'rxjs/operators';
import { of } from 'rxjs';

interface RefundFormState {
  orderId: number;
  orderItemId: number;
  reason: string;
  submitting: boolean;
  success: boolean;
  error: string;
}

@Component({
  selector: 'app-purchase-history',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule, OrderItemComponent],
  templateUrl: './purchase-history.html'
})
export class PurchaseHistory {
  private orderService = inject(OrderService);
  private refundService = inject(RefundService);

  searchQuery = signal<string>('');
  apiError    = signal<string>('');

  // null → yükleniyor | [] → boş | [...] → dolu
  allHistory = toSignal(
    this.orderService.getUserOrders().pipe(
      map(orders =>
        orders
          .filter(o => o.status === 'DELIVERED')
          .sort((a, b) => new Date(b.orderDate).getTime() - new Date(a.orderDate).getTime())
      ),
      shareReplay(1),
      catchError(() => {
        this.apiError.set('Satın alım geçmişi yüklenirken bir hata oluştu.');
        return of([] as Order[]);
      })
    ),
    { initialValue: null }
  );

  // Açık olan iade formu (her an tek bir form açık olabilir)
  activeRefundForm = signal<RefundFormState | null>(null);

  // Daha önce iade talep edilen item id'leri (başarıdan sonra eklenir)
  refundedItemIds = signal<Set<number>>(new Set());

  filteredHistory(): Order[] | null {
    const all = this.allHistory();
    if (all === null) return null;
    const q = this.searchQuery().trim().toLowerCase();
    if (!q) return all;
    return all.filter(o =>
      o.id.toString().padStart(6, '0').includes(q) ||
      (o.storeName?.toLowerCase().includes(q) ?? false) ||
      (o.items?.some(item => item.productName.toLowerCase().includes(q)) ?? false)
    );
  }

  onSearch(query: string): void {
    this.searchQuery.set(query);
  }

  /** İade formu aç */
  openRefundForm(orderId: number, orderItemId: number): void {
    this.activeRefundForm.set({
      orderId,
      orderItemId,
      reason: '',
      submitting: false,
      success: false,
      error: ''
    });
  }

  /** İade formu kapat */
  closeRefundForm(): void {
    this.activeRefundForm.set(null);
  }

  /** Sebep güncelle */
  updateReason(reason: string): void {
    const form = this.activeRefundForm();
    if (form) this.activeRefundForm.set({ ...form, reason });
  }

  /** İade talebini gönder */
  submitRefund(): void {
    const form = this.activeRefundForm();
    if (!form || !form.reason.trim()) return;

    this.activeRefundForm.set({ ...form, submitting: true, error: '' });

    this.refundService.createRefund({
      orderId: form.orderId,
      orderItemId: form.orderItemId,
      reason: form.reason.trim()
    }).subscribe({
      next: () => {
        // Başarı — form'u başarı state'ine al, sonra kapat
        this.activeRefundForm.set({ ...form, submitting: false, success: true });
        // Bu item'ı refunded olarak işaretle
        const ids = new Set(this.refundedItemIds());
        ids.add(form.orderItemId);
        this.refundedItemIds.set(ids);
        // 2 saniye sonra formu kapat
        setTimeout(() => this.closeRefundForm(), 2000);
      },
      error: (err) => {
        const msg = err?.error?.error || 'İade talebi oluşturulurken bir hata oluştu.';
        this.activeRefundForm.set({ ...form, submitting: false, error: msg });
      }
    });
  }

  isRefunded(itemId: number): boolean {
    return this.refundedItemIds().has(itemId);
  }

  isRefundFormOpen(itemId: number): boolean {
    return this.activeRefundForm()?.orderItemId === itemId;
  }
}
