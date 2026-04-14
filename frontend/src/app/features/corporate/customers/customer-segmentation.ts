import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CorporateService, CustomerSegmentationResponse } from '../services/corporate.service';

@Component({
  selector: 'app-customer-segmentation',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './customer-segmentation.html'
})
export class CustomerSegmentation {
  private corporateService = inject(CorporateService);

  data = signal<CustomerSegmentationResponse | null>(null);
  isLoading = signal(true);

  constructor() {
    this.loadData();
  }

  loadData() {
    this.isLoading.set(true);
    this.corporateService.getCustomerSegmentation().subscribe({
      next: (res) => {
        this.data.set(res);
        this.isLoading.set(false);
      },
      error: () => this.isLoading.set(false)
    });
  }

  getMaxCityCount(): number {
    const d = this.data();
    if (!d || !d.byCity.length) return 1;
    return Math.max(...d.byCity.map(c => c.count));
  }

  getMaxMembershipCount(): number {
    const d = this.data();
    if (!d || !d.byMembership.length) return 1;
    return Math.max(...d.byMembership.map(m => m.count));
  }
}
