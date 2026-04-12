import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CartService } from '../../../../core/services/cart.service';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './cart.html'
})
export class CartComponent {
  cartService = inject(CartService);

  updateQuantity(productId: number, quantity: number, event: Event) {
    event.stopPropagation();
    this.cartService.updateQuantity(productId, quantity);
  }

  removeItem(productId: number, event: Event) {
    event.stopPropagation();
    this.cartService.removeFromCart(productId);
  }

  clearCart() {
    if (confirm('Are you sure you want to clear your cart?')) {
      this.cartService.clearCart();
    }
  }
}
