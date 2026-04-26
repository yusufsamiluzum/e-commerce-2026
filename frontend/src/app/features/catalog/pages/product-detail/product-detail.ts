import { Component, inject, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { switchMap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop';
import { ProductService } from '../../../../core/services/product';
import { CartService } from '../../../../core/services/cart.service';
import { Product, ProductImage } from '../../../../shared/models/product.model';
import { ProductReviewsComponent } from '../../components/product-reviews/product-reviews.component';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule, RouterModule, ProductReviewsComponent],
  templateUrl: './product-detail.html',
})
export class ProductDetailComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private productService = inject(ProductService);
  private cartService = inject(CartService);

  product = toSignal(
    this.route.paramMap.pipe(
      switchMap(params => {
        const id = Number(params.get('id'));
        return this.productService.getProductById(id).pipe(
          catchError(() => of(null))
        );
      })
    ),
    { initialValue: null }
  );

  // Galeride seçili görsel URL'si
  selectedImageUrl = signal<string | null>(null);

  quantity = signal<number>(1);

  ngOnInit(): void {}

  /** Galeriden bir thumbnail seçilince */
  selectImage(url: string): void {
    this.selectedImageUrl.set(url);
  }

  /** Ana görselin URL'si: seçili yoksa ürünün imageUrl'sini kullan */
  activeImageUrl(product: Product): string {
    return this.selectedImageUrl() ?? product.imageUrl ?? 'https://placehold.co/600x600?text=No+Image';
  }

  activeAltText(product: Product): string {
    const images = product.images ?? [];
    const selected = images.find(i => i.imageUrl === this.selectedImageUrl());
    return selected?.altText ?? product.name;
  }

  /** Thumbnail class — seçili mi değil mi */
  thumbClass(img: ProductImage): string {
    const isSelected = this.selectedImageUrl()
      ? this.selectedImageUrl() === img.imageUrl
      : img.isPrimary;
    return isSelected
      ? 'border-teal-500 opacity-100 scale-105'
      : 'border-transparent opacity-60 hover:opacity-90 hover:scale-102';
  }

  increaseQty(): void {
    this.quantity.set(this.quantity() + 1);
  }

  decreaseQty(): void {
    if (this.quantity() > 1) this.quantity.set(this.quantity() - 1);
  }

  addToCart(product: Product): void {
    this.cartService.addToCart(product, this.quantity());
  }
}
