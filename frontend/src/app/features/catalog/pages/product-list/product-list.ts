import { Component, inject, OnInit, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../../../core/services/product';
import { ProductCardComponent } from '../../components/product-card/product-card';
import { Product } from '../../../../shared/models/product.model';
import { CategoryComponent } from '../../components/category/category';
import { FilterComponent, FilterOptions } from '../../components/filter/filter';

const SORT_LABELS: Record<string, string> = {
  newest: 'En Yeniler',
  price_asc: 'Fiyat: Artan',
  price_desc: 'Fiyat: Azalan',
  rating_desc: 'En Yüksek Puanlılar',
};

export interface FilterChip {
  label: string;
  clearFn: () => void;
}

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, FormsModule, ProductCardComponent, CategoryComponent, FilterComponent],
  templateUrl: './product-list.html',
  styleUrls: ['./product-list.scss'],
})
export class ProductListComponent implements OnInit {
  private productService = inject(ProductService);
  private route = inject(ActivatedRoute);

  heroSearch = '';
  categories$ = this.productService.getCategories();

  filtersSignal = signal({
    search: '',
    categoryId: null as number | null,
    minPrice: null as number | null,
    maxPrice: null as number | null,
    sort: '',
    minRating: null as number | null,
  });

  get filters() {
    return this.filtersSignal();
  }

  // Raw products from API (null = loading)
  private rawProducts = signal<Product[] | null>(null);

  // Client-side filtered by minRating
  products = computed<Product[] | null>(() => {
    const raw = this.rawProducts();
    if (raw === null) return null;
    const { minRating } = this.filtersSignal();
    if (minRating === null) return raw;
    return raw.filter(p => p.rating >= minRating);
  });

  productCount = computed(() => this.products()?.length ?? 0);

  activeChips = computed<FilterChip[]>(() => {
    const f = this.filtersSignal();
    const chips: FilterChip[] = [];

    if (f.search) {
      chips.push({
        label: `Arama: "${f.search}"`,
        clearFn: () => this.filtersSignal.update(s => ({ ...s, search: '' })),
      });
    }
    if (f.categoryId !== null) {
      chips.push({
        label: 'Kategori filtresi',
        clearFn: () => this.filtersSignal.update(s => ({ ...s, categoryId: null })),
      });
    }
    if (f.minPrice !== null || f.maxPrice !== null) {
      const min = f.minPrice !== null ? `$${f.minPrice}` : '0';
      const max = f.maxPrice !== null ? `$${f.maxPrice}` : '∞';
      chips.push({
        label: `Fiyat: ${min} – ${max}`,
        clearFn: () => this.filtersSignal.update(s => ({ ...s, minPrice: null, maxPrice: null })),
      });
    }
    if (f.minRating !== null) {
      chips.push({
        label: `${f.minRating}★ ve üzeri`,
        clearFn: () => this.filtersSignal.update(s => ({ ...s, minRating: null })),
      });
    }
    if (f.sort) {
      chips.push({
        label: SORT_LABELS[f.sort] ?? f.sort,
        clearFn: () => this.filtersSignal.update(s => ({ ...s, sort: '' })),
      });
    }
    return chips;
  });

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      const search = params['search'] || '';
      const categoryId = params['categoryId'] ? Number(params['categoryId']) : null;
      this.heroSearch = search;
      this.filtersSignal.update(s => ({ ...s, search, categoryId }));
      this.loadProducts();
    });
  }

  onHeroSearch(): void {
    this.filtersSignal.update(s => ({ ...s, search: this.heroSearch }));
    this.loadProducts();
  }

  loadProducts(): void {
    this.rawProducts.set(null);
    this.productService.getProducts(this.filtersSignal()).subscribe({
      next: list => this.rawProducts.set(list),
      error: () => this.rawProducts.set([]),
    });
  }

  onCategorySelect(categoryId: number | null): void {
    this.filtersSignal.update(s => ({ ...s, categoryId }));
    this.loadProducts();
  }

  onFiltersChange(filterOptions: FilterOptions): void {
    this.filtersSignal.update(s => ({
      ...s,
      search: filterOptions.search,
      minPrice: filterOptions.minPrice,
      maxPrice: filterOptions.maxPrice,
      sort: filterOptions.sort,
      minRating: filterOptions.minRating,
    }));
    this.loadProducts();
  }
}
