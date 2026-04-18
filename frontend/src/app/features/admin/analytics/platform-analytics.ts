import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { toSignal } from '@angular/core/rxjs-interop';
import { catchError, of } from 'rxjs';
import { AdminService, AdminStore } from '../services/admin.service';

@Component({
  selector: 'app-platform-analytics',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './platform-analytics.html'
})
export class PlatformAnalytics {
  private adminService = inject(AdminService);

  stores = toSignal(
    this.adminService.getStoreComparison().pipe(catchError(() => of(null))),
    { initialValue: null }
  );

  dashboard = toSignal(
    this.adminService.getDashboard().pipe(catchError(() => of(null))),
    { initialValue: null }
  );

  getRevenueBarWidth(store: AdminStore): number {
    const storesData = this.stores();
    if (!storesData || storesData.length === 0) return 0;
    const maxRevenue = Math.max(...storesData.map(s => s.totalRevenue));
    return maxRevenue > 0 ? (store.totalRevenue / maxRevenue) * 100 : 0;
  }

  getOrdersBarWidth(store: AdminStore): number {
    const storesData = this.stores();
    if (!storesData || storesData.length === 0) return 0;
    const maxOrders = Math.max(...storesData.map(s => s.totalOrders));
    return maxOrders > 0 ? (store.totalOrders / maxOrders) * 100 : 0;
  }

  getRatingColor(rating: number): string {
    if (rating >= 4) return 'text-green-400';
    if (rating >= 3) return 'text-yellow-400';
    return 'text-red-400';
  }
}
