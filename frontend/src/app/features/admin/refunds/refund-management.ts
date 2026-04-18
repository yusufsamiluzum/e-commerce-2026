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
    'PENDING': 'bg-yellow-500/20 text-yellow-300 border-yellow-500/30',
    'APPROVED': 'bg-green-500/20 text-green-300 border-green-500/30',
    'REJECTED': 'bg-red-500/20 text-red-300 border-red-500/30',
    'PROCESSED': 'bg-blue-500/20 text-blue-300 border-blue-500/30'
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
