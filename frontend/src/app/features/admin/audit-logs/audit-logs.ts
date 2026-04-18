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
    if (action.startsWith('CREATE')) return 'text-green-400';
    if (action.startsWith('UPDATE')) return 'text-blue-400';
    if (action.startsWith('DELETE')) return 'text-red-400';
    if (action.startsWith('LOGIN')) return 'text-cyan-400';
    if (action.startsWith('CANCEL')) return 'text-orange-400';
    return 'text-gray-400';
  }

  getEntityBadgeClass(type: string): string {
    switch (type) {
      case 'USER': return 'bg-blue-500/10 text-blue-400';
      case 'STORE': return 'bg-emerald-500/10 text-emerald-400';
      case 'ORDER': return 'bg-violet-500/10 text-violet-400';
      case 'PRODUCT': return 'bg-amber-500/10 text-amber-400';
      case 'CATEGORY': return 'bg-pink-500/10 text-pink-400';
      case 'SYSTEM_CONFIG': return 'bg-cyan-500/10 text-cyan-400';
      default: return 'bg-gray-500/10 text-gray-400';
    }
  }
}
