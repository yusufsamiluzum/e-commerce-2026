import { Component, inject, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AdminService, AdminRefund } from '../services/admin.service';

@Component({
  selector: 'app-refund-management',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './refund-management.html'
})
export class RefundManagement {
  private adminService = inject(AdminService);

  currentPage = signal(0);
  statusFilter = signal<string>('');
  isUpdating = signal<number | null>(null);

  refunds = signal<AdminRefund[]>([]);
  totalElements = signal(0);
  totalPages = signal(0);
  isLoading = signal(true);

  statusOptions = ['', 'PENDING', 'APPROVED', 'REJECTED', 'PROCESSED'];

  statusLabels: Record<string, string> = {
    '': 'Tümü',
    'PENDING': 'Beklemede',
    'APPROVED': 'Onaylandı',
    'REJECTED': 'Reddedildi',
    'PROCESSED': 'İşlendi'
  };

  statusColors: Record<string, string> = {
    'PENDING': 'bg-amber-50 text-amber-700 border-amber-200',
    'APPROVED': 'bg-lime-50 text-lime-700 border-lime-200',
    'REJECTED': 'bg-red-50 text-red-600 border-red-200',
    'PROCESSED': 'bg-orange-50 text-orange-600 border-orange-200'
  };

  constructor() {
    this.loadRefunds();
  }

  loadRefunds() {
    this.isLoading.set(true);
    const status = this.statusFilter() || undefined;
    this.adminService.getAllRefunds(this.currentPage(), 20, status).subscribe({
      next: (res) => {
        this.refunds.set(res.content);
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
    this.loadRefunds();
  }

  goToPage(page: number) {
    this.currentPage.set(page);
    this.loadRefunds();
  }

  /**
   * Admin kararı — iade talebini onayla veya reddet.
   * Anlaşmazlık durumunda admin son karar mercidir.
   */
  approveRefund(refundId: number) {
    this.isUpdating.set(refundId);
    this.adminService.updateRefundStatus(refundId, 'APPROVED').subscribe({
      next: (updated) => {
        this.refunds.update(list => list.map(r => r.id === refundId ? updated : r));
        this.isUpdating.set(null);
      },
      error: () => this.isUpdating.set(null)
    });
  }

  rejectRefund(refundId: number) {
    this.isUpdating.set(refundId);
    this.adminService.updateRefundStatus(refundId, 'REJECTED').subscribe({
      next: (updated) => {
        this.refunds.update(list => list.map(r => r.id === refundId ? updated : r));
        this.isUpdating.set(null);
      },
      error: () => this.isUpdating.set(null)
    });
  }
}
