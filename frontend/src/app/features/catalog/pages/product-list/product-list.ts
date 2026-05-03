import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { ProductService } from '../../../../core/services/product';
import { ProductCardComponent } from '../../components/product-card/product-card';
import { Product } from '../../../../shared/models/product.model';
import { CategoryComponent } from '../../components/category/category';
import { FilterComponent, FilterOptions } from '../../components/filter/filter';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductCardComponent, CategoryComponent, FilterComponent],
  templateUrl: './product-list.html'
})
export class ProductListComponent implements OnInit {
  private productService = inject(ProductService);

  products$!: Observable<Product[]>;
  categories$!: Observable<any[]>;

  filters = {
    search: '',
    categoryId: null as number | null,
    minPrice: null as number | null,
    maxPrice: null as number | null,
    sort: ''
  };

  ngOnInit(): void {
    this.categories$ = this.productService.getCategories();
    this.loadProducts();
  }

  loadProducts(): void {
    this.products$ = this.productService.getProducts(this.filters);
  }

  onCategorySelect(categoryId: number | null): void {
    this.filters.categoryId = categoryId;
    this.loadProducts();
  }

  onFiltersChange(filterOptions: FilterOptions): void {
    this.filters.search = filterOptions.search;
    this.filters.minPrice = filterOptions.minPrice;
    this.filters.maxPrice = filterOptions.maxPrice;
    this.filters.sort = filterOptions.sort;
    this.loadProducts();
  }
}
