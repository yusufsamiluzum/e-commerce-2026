import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { catchError, of } from 'rxjs';
import { CorporateService, StoreDashboardResponse } from '../services/corporate.service';

@Component({
  selector: 'app-corporate-dashboard',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './dashboard.html'
})
export class CorporateDashboard {
  private corporateService = inject(CorporateService);

  dashboard = toSignal(
    this.corporateService.getDashboard().pipe(catchError(() => of(null))),
    { initialValue: null }
  );

  store = toSignal(
    this.corporateService.getMyStore().pipe(catchError(() => of(null))),
    { initialValue: null }
  );
}
