import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CorporateService, CorporateProduct } from '../../services/corporate.service';

@Component({
  selector: 'app-catalog-list',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './catalog-list.html'
})
export class CatalogList {
  private corporateService = inject(CorporateService);

  products = signal<CorporateProduct[]>([]);
  isLoading = signal(true);
  searchTerm = signal('');
  filterStatus = signal<'all' | 'active' | 'inactive'>('all');
  showAddForm = signal(false);

  // Add form
  newProduct = {
    sku: '',
    name: '',
    description: '',
    unitPrice: 0,
    originalPrice: 0,
    stockQuantity: 0,
    categoryId: undefined as number | undefined,
    isFeatured: false
  };
  categories = signal<{ id: number; name: string }[]>([]);
  isSaving = signal(false);
  formError = signal<string | null>(null);

  // Edit
  editingId = signal<number | null>(null);
  editProduct = {
    sku: '',
    name: '',
    description: '',
    unitPrice: 0,
    originalPrice: 0,
    stockQuantity: 0,
    categoryId: undefined as number | undefined,
    isFeatured: false
  };

  constructor() {
    this.loadProducts();
    this.loadCategories();
  }

  loadProducts() {
    this.isLoading.set(true);
    this.corporateService.getMyProducts().subscribe({
      next: (products) => {
        this.products.set(products);
        this.isLoading.set(false);
      },
      error: () => this.isLoading.set(false)
    });
  }

  loadCategories() {
    this.corporateService.getCategories().subscribe({
      next: (cats) => this.categories.set(cats.map(c => ({ id: c.id, name: c.name })))
    });
  }

  get filteredProducts(): CorporateProduct[] {
    let list = this.products();
    const term = this.searchTerm().toLowerCase();
    if (term) {
      list = list.filter(p =>
        p.name.toLowerCase().includes(term) ||
        p.sku.toLowerCase().includes(term)
      );
    }
    const status = this.filterStatus();
    if (status === 'active') list = list.filter(p => p.isActive);
    if (status === 'inactive') list = list.filter(p => !p.isActive);
    return list;
  }

  toggleAddForm() {
    this.showAddForm.update(v => !v);
    this.formError.set(null);
    if (!this.showAddForm()) {
      this.resetNewProduct();
    }
  }

  resetNewProduct() {
    this.newProduct = {
      sku: '', name: '', description: '', unitPrice: 0,
      originalPrice: 0, stockQuantity: 0, categoryId: undefined, isFeatured: false
    };
  }

  submitNewProduct() {
    if (!this.newProduct.name || !this.newProduct.sku) {
      this.formError.set('SKU ve ürün adı zorunludur.');
      return;
    }
    this.isSaving.set(true);
    this.formError.set(null);

    this.corporateService.createProduct(this.newProduct as any).subscribe({
      next: () => {
        this.isSaving.set(false);
        this.showAddForm.set(false);
        this.resetNewProduct();
        this.loadProducts();
      },
      error: (err) => {
        this.isSaving.set(false);
        this.formError.set(err.error?.message || 'Ürün oluşturulurken bir hata oluştu.');
      }
    });
  }

  startEdit(product: CorporateProduct) {
    this.editingId.set(product.id);
    this.editProduct = {
      sku: product.sku,
      name: product.name,
      description: product.description || '',
      unitPrice: product.unitPrice,
      originalPrice: product.originalPrice || 0,
      stockQuantity: product.stockQuantity,
      categoryId: product.categoryId || undefined,
      isFeatured: product.isFeatured
    };
  }

  cancelEdit() {
    this.editingId.set(null);
  }

  submitEdit(productId: number) {
    this.isSaving.set(true);
    this.corporateService.updateProduct(productId, this.editProduct as any).subscribe({
      next: () => {
        this.isSaving.set(false);
        this.editingId.set(null);
        this.loadProducts();
      },
      error: () => this.isSaving.set(false)
    });
  }

  toggleActive(product: CorporateProduct) {
    if (product.isActive) {
      this.corporateService.deactivateProduct(product.id).subscribe({
        next: () => this.loadProducts()
      });
    } else {
      this.corporateService.reactivateProduct(product.id).subscribe({
        next: () => this.loadProducts()
      });
    }
  }
}
