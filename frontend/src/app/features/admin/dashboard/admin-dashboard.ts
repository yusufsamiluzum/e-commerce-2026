import { Component, inject } from '@angular/core';
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
}
