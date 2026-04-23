import { Component, inject, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CorporateService, StoreRefund } from '../services/corporate.service';
import { Subject, switchMap, startWith, catchError, of } from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-store-refunds',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './store-refunds.html'
})
export class StoreRefunds {
  private corporateService = inject(CorporateService);

  statusFilter = signal<string>('');
  isUpdating = signal<number | null>(null);

  private refresh$ = new Subject<void>();

  refunds = signal<StoreRefund[]>([]);
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
    'PENDING': 'bg-yellow-500/20 text-yellow-300',
    'APPROVED': 'bg-green-500/20 text-green-300',
    'REJECTED': 'bg-red-500/20 text-red-300',
    'PROCESSED': 'bg-blue-500/20 text-blue-300'
  };

  constructor() {
    this.loadRefunds();
  }

  loadRefunds() {
    this.isLoading.set(true);
    const status = this.statusFilter() || undefined;
    this.corporateService.getStoreRefunds(status).subscribe({
      next: (res) => {
        this.refunds.set(res);
        this.isLoading.set(false);
      },
      error: () => this.isLoading.set(false)
    });
  }

  pendingCount = computed(() => this.refunds().filter(r => r.status === 'PENDING').length);

  onStatusFilterChange(status: string) {
    this.statusFilter.set(status);
    this.loadRefunds();
  }

  approveRefund(refundId: number) {
    this.isUpdating.set(refundId);
    this.corporateService.respondToRefund(refundId, 'APPROVED').subscribe({
      next: (updated) => {
        this.refunds.update(list => list.map(r => r.id === refundId ? updated : r));
        this.isUpdating.set(null);
      },
      error: () => this.isUpdating.set(null)
    });
  }

  rejectRefund(refundId: number) {
    this.isUpdating.set(refundId);
    this.corporateService.respondToRefund(refundId, 'REJECTED').subscribe({
      next: (updated) => {
        this.refunds.update(list => list.map(r => r.id === refundId ? updated : r));
        this.isUpdating.set(null);
      },
      error: () => this.isUpdating.set(null)
    });
  }
}
