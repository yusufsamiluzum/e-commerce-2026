import {
  Injectable,
  PLATFORM_ID,
  computed,
  inject,
  isPlatformBrowser,
  setClassMetadata,
  signal,
  ɵɵdefineInjectable
} from "./chunk-OBD62CNA.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-H2SRQSE4.js";

// src/app/core/services/cart.service.ts
var CartService = class _CartService {
  platformId = inject(PLATFORM_ID);
  storageKey = "datapulse_cart";
  // Main state
  cartItems = signal(this.loadFromStorage(), ...ngDevMode ? [{ debugName: "cartItems" }] : (
    /* istanbul ignore next */
    []
  ));
  // Computed signals
  totalItems = computed(() => this.cartItems().reduce((sum, item) => sum + item.quantity, 0), ...ngDevMode ? [{ debugName: "totalItems" }] : (
    /* istanbul ignore next */
    []
  ));
  totalPrice = computed(() => this.cartItems().reduce((sum, item) => sum + item.product.price * item.quantity, 0), ...ngDevMode ? [{ debugName: "totalPrice" }] : (
    /* istanbul ignore next */
    []
  ));
  constructor() {
  }
  loadFromStorage() {
    if (isPlatformBrowser(this.platformId)) {
      const stored = localStorage.getItem(this.storageKey);
      if (stored) {
        try {
          return JSON.parse(stored);
        } catch (e) {
          console.error("Error parsing cart from storage", e);
        }
      }
    }
    return [];
  }
  saveToStorage(items) {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem(this.storageKey, JSON.stringify(items));
    }
  }
  addToCart(product, quantity = 1) {
    this.cartItems.update((items) => {
      const existingItem = items.find((item) => item.product.id === product.id);
      let updatedItems;
      if (existingItem) {
        updatedItems = items.map((item) => item.product.id === product.id ? __spreadProps(__spreadValues({}, item), { quantity: item.quantity + quantity }) : item);
      } else {
        updatedItems = [...items, { product, quantity }];
      }
      this.saveToStorage(updatedItems);
      return updatedItems;
    });
  }
  removeFromCart(productId) {
    this.cartItems.update((items) => {
      const updatedItems = items.filter((item) => item.product.id !== productId);
      this.saveToStorage(updatedItems);
      return updatedItems;
    });
  }
  updateQuantity(productId, quantity) {
    if (quantity <= 0) {
      this.removeFromCart(productId);
      return;
    }
    this.cartItems.update((items) => {
      const updatedItems = items.map((item) => item.product.id === productId ? __spreadProps(__spreadValues({}, item), { quantity }) : item);
      this.saveToStorage(updatedItems);
      return updatedItems;
    });
  }
  clearCart() {
    this.cartItems.set([]);
    this.saveToStorage([]);
  }
  static \u0275fac = function CartService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CartService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _CartService, factory: _CartService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CartService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();

export {
  CartService
};
//# sourceMappingURL=chunk-BONAVTPV.js.map
