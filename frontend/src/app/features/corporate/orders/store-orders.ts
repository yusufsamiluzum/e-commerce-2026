import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CorporateService, CorporateOrder } from '../services/corporate.service';

@Component({
  selector: 'app-store-orders',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './store-orders.html'
})
export class StoreOrders {
  private corporateService = inject(CorporateService);

  orders = signal<CorporateOrder[]>([]);
  isLoading = signal(true);
  filterStatus = signal<string>('');
  expandedOrderId = signal<number | null>(null);
  updatingId = signal<number | null>(null);

  statuses = ['PENDING', 'PROCESSING', 'SHIPPED', 'DELIVERED', 'CANCELLED'];

  statusLabels: Record<string, string> = {
    'PENDING': 'Bekleyen',
    'PROCESSING': 'İşleniyor',
    'SHIPPED': 'Kargoda',
    'DELIVERED': 'Teslim Edildi',
    'CANCELLED': 'İptal'
  };

  statusColors: Record<string, string> = {
    'PENDING': 'text-yellow-400 bg-yellow-500/10',
    'PROCESSING': 'text-blue-400 bg-blue-500/10',
    'SHIPPED': 'text-indigo-400 bg-indigo-500/10',
    'DELIVERED': 'text-emerald-400 bg-emerald-500/10',
    'CANCELLED': 'text-red-400 bg-red-500/10'
  };

  statusDots: Record<string, string> = {
    'PENDING': 'bg-yellow-400',
    'PROCESSING': 'bg-blue-400',
    'SHIPPED': 'bg-indigo-400',
    'DELIVERED': 'bg-emerald-400',
    'CANCELLED': 'bg-red-400'
  };

  constructor() {
    this.loadOrders();
  }

  loadOrders() {
    this.isLoading.set(true);
    const status = this.filterStatus() || undefined;
    this.corporateService.getStoreOrders(status).subscribe({
      next: (orders) => {
        this.orders.set(orders);
        this.isLoading.set(false);
      },
      error: () => this.isLoading.set(false)
    });
  }

  onFilterChange() {
    this.loadOrders();
  }

  toggleExpand(orderId: number) {
    if (this.expandedOrderId() === orderId) {
      this.expandedOrderId.set(null);
    } else {
      this.expandedOrderId.set(orderId);
    }
  }

  updateStatus(orderId: number, newStatus: string) {
    this.updatingId.set(orderId);
    this.corporateService.updateOrderStatus(orderId, newStatus).subscribe({
      next: () => {
        this.updatingId.set(null);
        this.loadOrders();
      },
      error: () => this.updatingId.set(null)
    });
  }

  getNextStatus(currentStatus: string): string | null {
    const flow: Record<string, string> = {
      'PENDING': 'PROCESSING',
      'PROCESSING': 'SHIPPED',
      'SHIPPED': 'DELIVERED'
    };
    return flow[currentStatus] || null;
  }
}
