import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { ProductService } from '../../../../core/services/product';
import { CartService } from '../../../../core/services/cart.service';
import { Product } from '../../../../shared/models/product.model';
import { ProductReviewsComponent } from '../../components/product-reviews/product-reviews.component';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule, RouterModule, ProductReviewsComponent], // RouterModule allows us to use routerLink to go back
  templateUrl: './product-detail.html',
})
export class ProductDetailComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private productService = inject(ProductService);
  private cartService = inject(CartService);

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
    this.cartService.addToCart(product, 1);
    // Optional: show a quick success message
    alert(`Added ${product.name} to cart!`);
  }
}
