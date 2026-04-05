import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { ProductService } from '../../../../core/services/product';
import { ProductCardComponent } from '../../components/product-card/product-card';
import { Product } from '../../../../shared/models/product.model';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductCardComponent], // Import the card component here
  templateUrl: './product-list.html',
})
export class ProductListComponent implements OnInit {
  private productService = inject(ProductService);

  // We use an Observable so the async pipe can automatically manage subscriptions
  products$!: Observable<Product[]>;

  ngOnInit(): void {
    // Connects to your Spring Boot backend endpoint
    this.products$ = this.productService.getProducts();
  }
}
