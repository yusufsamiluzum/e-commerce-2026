import { Injectable, computed, signal, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Product } from '../../shared/models/product.model';

@Injectable({ providedIn: 'root' })
export class WishlistService {
  private platformId = inject(PLATFORM_ID);
  private storageKey = 'nexora_wishlist';

  items = signal<Product[]>(this.loadFromStorage());
  count = computed(() => this.items().length);

  toggle(product: Product): void {
    const current = this.items();
    const updated = current.some(p => p.id === product.id)
      ? current.filter(p => p.id !== product.id)
      : [...current, product];
    this.items.set(updated);
    this.saveToStorage(updated);
  }

  isInWishlist(productId: number): boolean {
    return this.items().some(p => p.id === productId);
  }

  private loadFromStorage(): Product[] {
    if (!isPlatformBrowser(this.platformId)) return [];
    try {
      return JSON.parse(localStorage.getItem(this.storageKey) || '[]');
    } catch {
      return [];
    }
  }

  private saveToStorage(items: Product[]): void {
    if (!isPlatformBrowser(this.platformId)) return;
    localStorage.setItem(this.storageKey, JSON.stringify(items));
  }
}
