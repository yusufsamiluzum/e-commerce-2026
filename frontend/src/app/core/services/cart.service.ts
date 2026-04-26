import { Injectable, computed, signal, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { CartItem } from '../../shared/models/cart.model';
import { Product } from '../../shared/models/product.model';
import { ToastService } from './toast.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private platformId = inject(PLATFORM_ID);
  private toast = inject(ToastService);
  private storageKey = 'datapulse_cart';

  // Main state
  cartItems = signal<CartItem[]>(this.loadFromStorage());

  // Computed signals
  totalItems = computed(() => this.cartItems().reduce((sum, item) => sum + item.quantity, 0));
  totalPrice = computed(() => this.cartItems().reduce((sum, item) => sum + (item.product.price * item.quantity), 0));

  constructor() {}

  private loadFromStorage(): CartItem[] {
    if (isPlatformBrowser(this.platformId)) {
      const stored = localStorage.getItem(this.storageKey);
      if (stored) {
        try {
          return JSON.parse(stored);
        } catch (e) {
          console.error('Error parsing cart from storage', e);
        }
      }
    }
    return [];
  }

  private saveToStorage(items: CartItem[]): void {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem(this.storageKey, JSON.stringify(items));
    }
  }

  addToCart(product: Product, quantity: number = 1): void {
    this.cartItems.update(items => {
      const existingItem = items.find(item => item.product.id === product.id);
      let updatedItems;
      
      if (existingItem) {
        updatedItems = items.map(item => 
          item.product.id === product.id 
            ? { ...item, quantity: item.quantity + quantity } 
            : item
        );
      } else {
        updatedItems = [...items, { product, quantity }];
      }
      
      this.saveToStorage(updatedItems);
      return updatedItems;
    });

    this.toast.success(`${product.name} sepete eklendi`, {
      imageUrl: product.imageUrl,
      actionLabel: 'Sepete Git',
      actionRoute: '/cart',
    });
  }

  removeFromCart(productId: number): void {
    this.cartItems.update(items => {
      const updatedItems = items.filter(item => item.product.id !== productId);
      this.saveToStorage(updatedItems);
      return updatedItems;
    });
  }

  updateQuantity(productId: number, quantity: number): void {
    if (quantity <= 0) {
      this.removeFromCart(productId);
      return;
    }
    
    this.cartItems.update(items => {
      const updatedItems = items.map(item => 
        item.product.id === productId 
          ? { ...item, quantity } 
          : item
      );
      this.saveToStorage(updatedItems);
      return updatedItems;
    });
  }

  clearCart(): void {
    this.cartItems.set([]);
    this.saveToStorage([]);
  }
}
