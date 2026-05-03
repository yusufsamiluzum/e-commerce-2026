import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { toSignal } from '@angular/core/rxjs-interop';
import { catchError, of, Subject, switchMap, startWith } from 'rxjs';
import { AdminService, AuditLogItem, PageResponse } from '../services/admin.service';

@Component({
  selector: 'app-audit-logs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './audit-logs.html'
})
export class AuditLogs {
  private adminService = inject(AdminService);

  currentPage = signal(0);
  entityTypeFilter = signal('');

  private refresh$ = new Subject<void>();

  logsPage = toSignal(
    this.refresh$.pipe(
      startWith(undefined),
      switchMap(() => this.adminService.getAuditLogs(
        this.currentPage(), 25, this.entityTypeFilter() || undefined
      ).pipe(catchError(() => of(null))))
    ),
    { initialValue: null }
  );

  onEntityTypeFilter(type: string) {
    this.entityTypeFilter.set(type);
    this.currentPage.set(0);
    this.refresh$.next();
  }

  goToPage(page: number) {
    this.currentPage.set(page);
    this.refresh$.next();
  }

  getActionColor(action: string): string {
    if (action.startsWith('CREATE')) return 'text-lime-600';
    if (action.startsWith('UPDATE')) return 'text-orange-600';
    if (action.startsWith('DELETE')) return 'text-red-500';
    if (action.startsWith('LOGIN')) return 'text-stone-900';
    if (action.startsWith('CANCEL')) return 'text-amber-600';
    return 'text-stone-500';
  }

  getEntityBadgeClass(type: string): string {
    switch (type) {
      case 'USER': return 'bg-orange-50 text-orange-600';
      case 'STORE': return 'bg-lime-50 text-lime-700';
      case 'ORDER': return 'bg-violet-50 text-violet-600';
      case 'PRODUCT': return 'bg-amber-50 text-amber-700';
      case 'CATEGORY': return 'bg-red-50 text-red-600';
      case 'SYSTEM_CONFIG': return 'bg-stone-100 text-stone-600';
      default: return 'bg-stone-50 text-stone-400';
    }
  }
}
