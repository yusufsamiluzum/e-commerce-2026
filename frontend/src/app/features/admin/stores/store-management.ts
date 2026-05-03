import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { catchError, of, Subject, switchMap, startWith } from 'rxjs';
import { AdminService, AdminStore, PageResponse } from '../services/admin.service';

@Component({
  selector: 'app-store-management',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './store-management.html'
})
export class StoreManagement {
  private adminService = inject(AdminService);

  currentPage = signal(0);
  actionInProgress = signal<number | null>(null);
  detailStore = signal<AdminStore | null>(null);

  private refresh$ = new Subject<void>();

  storesPage = toSignal(
    this.refresh$.pipe(
      startWith(undefined),
      switchMap(() => this.adminService.getAllStores(this.currentPage(), 20).pipe(catchError(() => of(null))))
    ),
    { initialValue: null }
  );

  updateStoreStatus(store: AdminStore, newStatus: string) {
    this.actionInProgress.set(store.id);
    this.adminService.updateStoreStatus(store.id, newStatus).subscribe({
      next: () => {
        this.actionInProgress.set(null);
        this.refresh$.next();
      },
      error: () => this.actionInProgress.set(null)
    });
  }

  showDetail(store: AdminStore) {
    this.detailStore.set(store);
  }

  closeDetail() {
    this.detailStore.set(null);
  }

  goToPage(page: number) {
    this.currentPage.set(page);
    this.refresh$.next();
  }

  getStatusBadgeClass(status: string): string {
    switch (status) {
      case 'ACTIVE': return 'bg-lime-50 text-lime-700 border-lime-200';
      case 'PENDING_APPROVAL': return 'bg-amber-50 text-amber-700 border-amber-200';
      case 'SUSPENDED': return 'bg-orange-50 text-orange-600 border-orange-200';
      case 'CLOSED': return 'bg-red-50 text-red-600 border-red-200';
      default: return 'bg-stone-50 text-stone-500 border-stone-200';
    }
  }

  getStatusLabel(status: string): string {
    switch (status) {
      case 'ACTIVE': return 'Aktif';
      case 'PENDING_APPROVAL': return 'Onay Bekliyor';
      case 'SUSPENDED': return 'Askıda';
      case 'CLOSED': return 'Kapalı';
      default: return status;
    }
  }

  exportCsv() {
    this.adminService.exportCsv('stores');
  }
}
