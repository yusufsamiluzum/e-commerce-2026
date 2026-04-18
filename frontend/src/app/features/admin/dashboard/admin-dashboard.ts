import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { catchError, of } from 'rxjs';
import { AdminService, PlatformStats } from '../services/admin.service';

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './admin-dashboard.html'
})
export class AdminDashboard {
  private adminService = inject(AdminService);

  stats = toSignal(
    this.adminService.getDashboard().pipe(catchError(() => of(null))),
    { initialValue: null }
  );

  // Gelir trend verisi — son 30 gün
  trendData = signal<{ date: string; revenue: number; orderCount: number }[]>([]);
  maxRevenue = signal(0);

  constructor() {
    this.adminService.getRevenueTrend(30).subscribe({
      next: (data) => {
        // Backend [date, revenue, orderCount] array döner
        const mapped = data.map((item: any) => ({
          date: item[0],
          revenue: Number(item[1]),
          orderCount: Number(item[2])
        }));
        this.trendData.set(mapped);
        const max = Math.max(...mapped.map(d => d.revenue), 1);
        this.maxRevenue.set(max);
      }
    });
  }

  getBarHeight(revenue: number): number {
    return this.maxRevenue() > 0 ? (revenue / this.maxRevenue()) * 100 : 0;
  }

  formatDay(dateStr: string): string {
    const d = new Date(dateStr);
    return d.getDate() + '';
  }
}
