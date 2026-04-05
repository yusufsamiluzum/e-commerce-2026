import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { ProductService } from '../../../../core/services/product';
import { Product } from '../../../../shared/models/product.model';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule, RouterModule], // RouterModule allows us to use routerLink to go back
  templateUrl: './product-detail.html',
})
export class ProductDetailComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private productService = inject(ProductService);

  product$!: Observable<Product>;

  ngOnInit(): void {
    // Listen to changes in the URL parameters and fetch the corresponding product
    this.product$ = this.route.paramMap.pipe(
      switchMap((params) => {
        const id = Number(params.get('id'));
        return this.productService.getProductById(id);
      }),
    );
  }

  addToCart(product: Product) {
    // Placeholder for the shopping cart management requirement
    console.log(`Added ${product.name} to cart!`);
  }
}
