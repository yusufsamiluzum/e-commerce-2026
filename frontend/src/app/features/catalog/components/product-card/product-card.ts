import { Component, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Product } from '../../../../shared/models/product.model';
import { CartService } from '../../../../core/services/cart.service';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './product-card.html',
})
export class ProductCardComponent {
  @Input({ required: true }) product!: Product;
  private cartService = inject(CartService);
  readonly stars = [1, 2, 3, 4, 5];
  readonly fallbackImage =
    'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"><rect width="200" height="200" fill="%23f3f4f6"/><path d="M70 130l25-30 20 24 15-18 30 36H50z" fill="%23d1d5db"/><circle cx="135" cy="75" r="12" fill="%23d1d5db"/></svg>';

  addToCart(event: MouseEvent): void {
    event.stopPropagation();
    this.cartService.addToCart(this.product, 1);
  }

  onImageError(event: Event): void {
    const img = event.target as HTMLImageElement;
    if (img.src !== this.fallbackImage) img.src = this.fallbackImage;
  }
}
