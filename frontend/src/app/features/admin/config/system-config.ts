import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { toSignal } from '@angular/core/rxjs-interop';
import { catchError, of, Subject, switchMap, startWith } from 'rxjs';
import { AdminService, SystemConfigItem } from '../services/admin.service';

@Component({
  selector: 'app-system-config',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './system-config.html'
})
export class SystemConfig {
  private adminService = inject(AdminService);

  editingId = signal<number | null>(null);
  editingValue = signal('');
  actionInProgress = signal(false);

  private refresh$ = new Subject<void>();

  configs = toSignal(
    this.refresh$.pipe(
      startWith(undefined),
      switchMap(() => this.adminService.getAllConfigs().pipe(catchError(() => of(null))))
    ),
    { initialValue: null }
  );

  startEdit(config: SystemConfigItem) {
    this.editingId.set(config.id);
    this.editingValue.set(config.configValue);
  }

  saveEdit(configId: number) {
    const value = this.editingValue().trim();
    if (!value) return;
    this.actionInProgress.set(true);
    this.adminService.updateConfig(configId, value).subscribe({
      next: () => {
        this.editingId.set(null);
        this.actionInProgress.set(false);
        this.refresh$.next();
      },
      error: () => this.actionInProgress.set(false)
    });
  }

  cancelEdit() {
    this.editingId.set(null);
  }

  getKeyIcon(key: string): string {
    switch (key) {
      case 'site_name': return '🏷️';
      case 'currency': return '💱';
      case 'tax_rate': return '📊';
      default: return '⚙️';
    }
  }
}
