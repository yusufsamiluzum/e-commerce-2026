import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CorporateService, InventoryItem } from '../services/corporate.service';

@Component({
  selector: 'app-inventory',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './inventory.html'
})
export class Inventory {
  private corporateService = inject(CorporateService);

  items = signal<InventoryItem[]>([]);
  isLoading = signal(true);
  searchTerm = signal('');
  filterStock = signal<'all' | 'OK' | 'LOW' | 'OUT_OF_STOCK'>('all');
  editingId = signal<number | null>(null);
  editQuantity = signal(0);
  isSaving = signal(false);

  stockLabels: Record<string, string> = {
    'OK': 'Yeterli',
    'LOW': 'Düşük Stok',
    'OUT_OF_STOCK': 'Tükendi'
  };

  stockColors: Record<string, string> = {
    'OK': 'text-emerald-400 bg-emerald-500/10',
    'LOW': 'text-amber-400 bg-amber-500/10',
    'OUT_OF_STOCK': 'text-red-400 bg-red-500/10'
  };

  stockDots: Record<string, string> = {
    'OK': 'bg-emerald-400',
    'LOW': 'bg-amber-400',
    'OUT_OF_STOCK': 'bg-red-400'
  };

  constructor() {
    this.loadInventory();
  }

  loadInventory() {
    this.isLoading.set(true);
    this.corporateService.getInventory().subscribe({
      next: (items) => {
        this.items.set(items);
        this.isLoading.set(false);
      },
      error: () => this.isLoading.set(false)
    });
  }

  get filteredItems(): InventoryItem[] {
    let list = this.items();
    const term = this.searchTerm().toLowerCase();
    if (term) {
      list = list.filter(i => i.productName.toLowerCase().includes(term) || i.sku.toLowerCase().includes(term));
    }
    const filter = this.filterStock();
    if (filter !== 'all') {
      list = list.filter(i => i.stockStatus === filter);
    }
    return list;
  }

  get summaryStats() {
    const all = this.items();
    return {
      total: all.length,
      ok: all.filter(i => i.stockStatus === 'OK').length,
      low: all.filter(i => i.stockStatus === 'LOW').length,
      outOfStock: all.filter(i => i.stockStatus === 'OUT_OF_STOCK').length,
      totalValue: all.reduce((sum, i) => sum + (i.stockQuantity * i.unitPrice), 0)
    };
  }

  startEdit(item: InventoryItem) {
    this.editingId.set(item.productId);
    this.editQuantity.set(item.stockQuantity);
  }

  cancelEdit() {
    this.editingId.set(null);
  }

  saveStock(productId: number) {
    this.isSaving.set(true);
    this.corporateService.updateStock(productId, this.editQuantity()).subscribe({
      next: () => {
        this.isSaving.set(false);
        this.editingId.set(null);
        this.loadInventory();
      },
      error: () => this.isSaving.set(false)
    });
  }
}
