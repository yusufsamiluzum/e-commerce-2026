import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CorporateService, StoreDto, StoreDashboardResponse } from '../services/corporate.service';
import { AuthService } from '../../../core/services/auth.service';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-corporate-profile-details',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './corporate-profile-details.html'
})
export class CorporateProfileDetails {
  private corporateService = inject(CorporateService);
  auth = inject(AuthService);

  store = signal<StoreDto | null>(null);
  dashboard = signal<StoreDashboardResponse | null>(null);
  isLoading = signal(true);
  isEditing = signal(false);

  // Edit form
  editName = '';
  editDescription = '';
  editCurrency = '';
  isSaving = signal(false);

  constructor() {
    this.loadData();
  }

  loadData() {
    this.isLoading.set(true);
    forkJoin({
      store: this.corporateService.getMyStore(),
      dashboard: this.corporateService.getDashboard()
    }).subscribe({
      next: ({ store, dashboard }) => {
        this.store.set(store);
        this.dashboard.set(dashboard);
        this.isLoading.set(false);
      },
      error: () => this.isLoading.set(false)
    });
  }

  startEdit() {
    const s = this.store();
    if (s) {
      this.editName = s.name;
      this.editDescription = s.description || '';
      this.editCurrency = s.baseCurrency;
      this.isEditing.set(true);
    }
  }

  cancelEdit() {
    this.isEditing.set(false);
  }

  saveEdit() {
    this.isSaving.set(true);
    this.corporateService.updateStore({
      name: this.editName,
      description: this.editDescription,
      baseCurrency: this.editCurrency
    }).subscribe({
      next: (updated) => {
        this.store.set(updated);
        this.isEditing.set(false);
        this.isSaving.set(false);
      },
      error: () => this.isSaving.set(false)
    });
  }
}
