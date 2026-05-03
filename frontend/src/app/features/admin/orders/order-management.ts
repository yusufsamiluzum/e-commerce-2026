import { Component, inject, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AdminService, AdminOrder, PageResponse } from '../services/admin.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { Subject, switchMap, startWith } from 'rxjs';

@Component({
  selector: 'app-order-management',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './order-management.html'
})
export class OrderManagement {
  private adminService = inject(AdminService);

  currentPage = signal(0);
  statusFilter = signal<string>('');
  searchTerm = signal('');
  isUpdating = signal<number | null>(null);

  // Reload trigger
  private reload$ = new Subject<void>();

  orders = signal<AdminOrder[]>([]);
  totalElements = signal(0);
  totalPages = signal(0);
  isLoading = signal(true);

  statusOptions = ['', 'PENDING', 'CONFIRMED', 'SHIPPED', 'DELIVERED', 'CANCELLED'];

  statusLabels: Record<string, string> = {
    '': 'Tümü',
    'PENDING': 'Beklemede',
    'CONFIRMED': 'Onaylandı',
    'SHIPPED': 'Kargoda',
    'DELIVERED': 'Teslim Edildi',
    'CANCELLED': 'İptal'
  };

  statusColors: Record<string, string> = {
    'PENDING': 'bg-amber-50 text-amber-700',
    'CONFIRMED': 'bg-orange-50 text-orange-600',
    'SHIPPED': 'bg-violet-50 text-violet-600',
    'DELIVERED': 'bg-lime-50 text-lime-700',
    'CANCELLED': 'bg-red-50 text-red-600'
  };

  shipmentColors: Record<string, string> = {
    'PREPARING': 'text-amber-600',
    'IN_TRANSIT': 'text-orange-600',
    'DELIVERED': 'text-lime-600',
    'RETURNED': 'text-red-500'
  };

  filteredOrders = computed(() => {
    const term = this.searchTerm().toLowerCase();
    if (!term) return this.orders();
    return this.orders().filter(o =>
      o.userName.toLowerCase().includes(term) ||
      o.storeName.toLowerCase().includes(term) ||
      o.userEmail.toLowerCase().includes(term) ||
      ('#' + o.id).includes(term)
    );
  });

  constructor() {
    this.loadOrders();
  }

  loadOrders() {
    this.isLoading.set(true);
    const status = this.statusFilter() || undefined;
    this.adminService.getAllOrders(this.currentPage(), 20, status).subscribe({
      next: (res) => {
        this.orders.set(res.content);
        this.totalElements.set(res.totalElements);
        this.totalPages.set(res.totalPages);
        this.isLoading.set(false);
      },
      error: () => this.isLoading.set(false)
    });
  }

  onStatusFilterChange(status: string) {
    this.statusFilter.set(status);
    this.currentPage.set(0);
    this.loadOrders();
  }

  goToPage(page: number) {
    this.currentPage.set(page);
    this.loadOrders();
  }

  /**
   * Admin müdahalesi — sipariş durumunu değiştir.
   * Bu, normal akışa müdahale niteliğindedir ve audit log'a kaydedilir.
   */
  changeOrderStatus(orderId: number, newStatus: string) {
    this.isUpdating.set(orderId);
    this.adminService.updateOrderStatus(orderId, newStatus).subscribe({
      next: (updated) => {
        this.orders.update(list =>
          list.map(o => o.id === orderId ? updated : o)
        );
        this.isUpdating.set(null);
      },
      error: () => this.isUpdating.set(null)
    });
  }

  getAvailableTransitions(currentStatus: string): string[] {
    // Admin her duruma geçiş yapabilir (dispute resolution)
    return this.statusOptions.filter(s => s !== '' && s !== currentStatus);
  }

  exportCsv() {
    this.adminService.exportCsv('orders');
  }
}
