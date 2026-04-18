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
      case 'ACTIVE': return 'bg-green-500/10 text-green-400 border-green-500/20';
      case 'PENDING_APPROVAL': return 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20';
      case 'SUSPENDED': return 'bg-orange-500/10 text-orange-400 border-orange-500/20';
      case 'CLOSED': return 'bg-red-500/10 text-red-400 border-red-500/20';
      default: return 'bg-gray-500/10 text-gray-400 border-gray-500/20';
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
}
