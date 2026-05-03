import {
  CartService
} from "./chunk-BONAVTPV.js";
import {
  RouterLink,
  RouterModule
} from "./chunk-N6CICK2R.js";
import "./chunk-27YRKIWA.js";
import {
  CommonModule,
  Component,
  NgModule,
  inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-OBD62CNA.js";
import "./chunk-H2SRQSE4.js";

// src/app/features/cart/pages/cart/cart.ts
var _c0 = (a0) => ["/catalog", a0];
var _forTrack0 = ($index, $item) => $item.product.id;
function CartComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2)(1, "div", 4);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 5);
    \u0275\u0275element(3, "path", 6);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(4, "h2", 7);
    \u0275\u0275text(5, "Your cart is empty");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 8);
    \u0275\u0275text(7, "Looks like you haven't added anything to your cart yet. Browse our catalog to find something you'll love.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "a", 9);
    \u0275\u0275text(9, " Start Shopping ");
    \u0275\u0275elementEnd()();
  }
}
function CartComponent_Conditional_4_For_8_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 42);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("$", item_r4.product.originalPrice);
  }
}
function CartComponent_Conditional_4_For_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 14)(1, "button", 32);
    \u0275\u0275listener("click", function CartComponent_Conditional_4_For_8_Template_button_click_1_listener($event) {
      const item_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.removeItem(item_r4.product.id, $event));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 33);
    \u0275\u0275element(3, "path", 34);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(4, "a", 35);
    \u0275\u0275element(5, "img", 36);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 37)(7, "div", 38)(8, "span", 39);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "a", 40);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 41);
    \u0275\u0275text(13);
    \u0275\u0275conditionalCreate(14, CartComponent_Conditional_4_For_8_Conditional_14_Template, 2, 1, "span", 42);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div", 43)(16, "div", 44)(17, "button", 45);
    \u0275\u0275listener("click", function CartComponent_Conditional_4_For_8_Template_button_click_17_listener($event) {
      const item_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.updateQuantity(item_r4.product.id, item_r4.quantity - 1, $event));
    });
    \u0275\u0275text(18, "-");
    \u0275\u0275elementEnd();
    \u0275\u0275element(19, "input", 46);
    \u0275\u0275elementStart(20, "button", 45);
    \u0275\u0275listener("click", function CartComponent_Conditional_4_For_8_Template_button_click_20_listener($event) {
      const item_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.updateQuantity(item_r4.product.id, item_r4.quantity + 1, $event));
    });
    \u0275\u0275text(21, "+");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "div", 47)(23, "span", 48);
    \u0275\u0275text(24, "Subtotal:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "span", 49);
    \u0275\u0275text(26);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const item_r4 = ctx.$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(10, _c0, item_r4.product.id));
    \u0275\u0275advance();
    \u0275\u0275property("src", item_r4.product.imageUrl, \u0275\u0275sanitizeUrl)("alt", item_r4.product.name);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(item_r4.product.category);
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(12, _c0, item_r4.product.id));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", item_r4.product.name, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" $", item_r4.product.price, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(item_r4.product.originalPrice ? 14 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275property("value", item_r4.quantity);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1("$", (item_r4.product.price * item_r4.quantity).toFixed(2));
  }
}
function CartComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 3)(1, "div", 10)(2, "div", 11)(3, "span", 12);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 13);
    \u0275\u0275listener("click", function CartComponent_Conditional_4_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.clearCart());
    });
    \u0275\u0275text(6, "Clear Cart");
    \u0275\u0275elementEnd()();
    \u0275\u0275repeaterCreate(7, CartComponent_Conditional_4_For_8_Template, 27, 14, "div", 14, _forTrack0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 15)(10, "div", 16)(11, "h2", 17);
    \u0275\u0275text(12, "Order Summary");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 18)(14, "div", 19)(15, "span");
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "span", 20);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "div", 21)(20, "span");
    \u0275\u0275text(21, "Shipping");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "span", 22);
    \u0275\u0275text(23, "Free");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "div", 23)(25, "span", 24);
    \u0275\u0275text(26, "Total");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "span", 25);
    \u0275\u0275text(28);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(29, "button", 26);
    \u0275\u0275text(30, " Proceed to Checkout ");
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(31, "svg", 27);
    \u0275\u0275element(32, "path", 28);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(33, "p", 29);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(34, "svg", 30);
    \u0275\u0275element(35, "path", 31);
    \u0275\u0275elementEnd();
    \u0275\u0275text(36, " Secure Checkout ");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", ctx_r1.cartService.totalItems(), " Item(s)");
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r1.cartService.cartItems());
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate1("Subtotal (", ctx_r1.cartService.totalItems(), " items)");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("$", ctx_r1.cartService.totalPrice().toFixed(2));
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate1("$", ctx_r1.cartService.totalPrice().toFixed(2));
  }
}
var CartComponent = class _CartComponent {
  cartService = inject(CartService);
  updateQuantity(productId, quantity, event) {
    event.stopPropagation();
    this.cartService.updateQuantity(productId, quantity);
  }
  removeItem(productId, event) {
    event.stopPropagation();
    this.cartService.removeFromCart(productId);
  }
  clearCart() {
    if (confirm("Are you sure you want to clear your cart?")) {
      this.cartService.clearCart();
    }
  }
  static \u0275fac = function CartComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CartComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CartComponent, selectors: [["app-cart"]], decls: 5, vars: 1, consts: [[1, "container", "mx-auto", "px-4", "py-8", "max-w-6xl", "min-h-[60vh]"], [1, "text-3xl", "font-bold", "text-gray-900", "mb-8"], [1, "bg-white", "rounded-2xl", "shadow-sm", "border", "border-gray-100", "p-12", "text-center", "flex", "flex-col", "items-center"], [1, "grid", "grid-cols-1", "lg:grid-cols-3", "gap-8"], [1, "w-24", "h-24", "bg-gray-50", "rounded-full", "flex", "items-center", "justify-center", "mb-6", "text-gray-400"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", 1, "h-12", "w-12"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "1.5", "d", "M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"], [1, "text-2xl", "font-bold", "text-gray-900", "mb-2"], [1, "text-gray-500", "mb-8", "max-w-md", "mx-auto"], ["routerLink", "/catalog", 1, "bg-blue-600", "hover:bg-blue-700", "text-white", "font-semibold", "py-3", "px-8", "rounded-lg", "transition-colors", "inline-block"], [1, "lg:col-span-2", "space-y-4"], [1, "flex", "justify-between", "items-center", "bg-white", "p-4", "rounded-xl", "border", "border-gray-100", "shadow-sm"], [1, "font-medium", "text-gray-700"], [1, "text-sm", "text-red-500", "hover:text-red-700", "font-medium", "transition-colors", 3, "click"], [1, "bg-white", "rounded-xl", "shadow-sm", "border", "border-gray-100", "p-4", "sm:p-6", "flex", "flex-col", "sm:flex-row", "gap-6", "relative", "group"], [1, "lg:col-span-1"], [1, "bg-white", "rounded-xl", "shadow-sm", "border", "border-gray-100", "p-6", "sticky", "top-24"], [1, "text-lg", "font-bold", "text-gray-900", "mb-6"], [1, "space-y-4", "mb-6"], [1, "flex", "justify-between", "text-gray-600"], [1, "font-medium", "text-gray-900"], [1, "flex", "justify-between", "text-gray-600", "border-b", "border-gray-100", "pb-4"], [1, "font-medium", "text-green-600"], [1, "flex", "justify-between", "items-center", "py-2"], [1, "text-lg", "font-bold", "text-gray-900"], [1, "text-2xl", "font-black", "text-blue-600"], ["routerLink", "/checkout", 1, "w-full", "bg-blue-600", "hover:bg-blue-700", "text-white", "font-bold", "py-3.5", "px-4", "rounded-lg", "transition-colors", "shadow-md", "flex", "justify-center", "items-center", "gap-2", "mb-4"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 20 20", "fill", "currentColor", 1, "h-5", "w-5"], ["fill-rule", "evenodd", "d", "M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z", "clip-rule", "evenodd"], [1, "text-xs", "text-center", "text-gray-500", "mt-4", "flex", "items-center", "justify-center", "gap-1"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", 1, "h-4", "w-4"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"], ["title", "Remove", 1, "absolute", "top-4", "right-4", "text-gray-400", "hover:text-red-500", "transition-colors", "p-1", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", 1, "h-5", "w-5"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"], [1, "w-full", "sm:w-32", "h-32", "bg-gray-50", "flex-shrink-0", "rounded-lg", "flex", "items-center", "justify-center", "border", "border-gray-100", "p-2", "block", "cursor-pointer", "hover:border-blue-200", "transition-colors", 3, "routerLink"], [1, "max-w-full", "max-h-full", "object-contain", "mix-blend-multiply", 3, "src", "alt"], [1, "flex-1", "flex", "flex-col"], [1, "mb-1"], [1, "text-xs", "text-gray-500", "font-medium", "uppercase", "tracking-wider"], [1, "font-bold", "text-lg", "text-gray-900", "hover:text-blue-600", "mb-2", "truncate", "max-w-[90%]", "transition-colors", 3, "routerLink"], [1, "text-lg", "font-extrabold", "text-blue-600", "mb-auto"], [1, "text-sm", "text-gray-400", "line-through", "ml-2", "font-normal"], [1, "flex", "items-center", "justify-between", "mt-4"], [1, "flex", "items-center", "border", "border-gray-300", "rounded-lg", "overflow-hidden", "bg-white", "shadow-sm"], [1, "px-3", "py-1.5", "text-gray-600", "hover:bg-gray-100", "transition-colors", 3, "click"], ["type", "number", "readonly", "", 1, "w-10", "text-center", "text-sm", "font-semibold", "border-x", "border-gray-300", "py-1.5", "focus:outline-none", 3, "value"], [1, "text-right"], [1, "text-xs", "text-gray-500"], [1, "text-base", "font-bold", "text-gray-900", "ml-2"]], template: function CartComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "h1", 1);
      \u0275\u0275text(2, "Shopping Cart");
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(3, CartComponent_Conditional_3_Template, 10, 0, "div", 2)(4, CartComponent_Conditional_4_Template, 37, 4, "div", 3);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275conditional(ctx.cartService.cartItems().length === 0 ? 3 : 4);
    }
  }, dependencies: [CommonModule, RouterModule, RouterLink], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CartComponent, [{
    type: Component,
    args: [{ selector: "app-cart", standalone: true, imports: [CommonModule, RouterModule], template: `<div class="container mx-auto px-4 py-8 max-w-6xl min-h-[60vh]">
  <h1 class="text-3xl font-bold text-gray-900 mb-8">Shopping Cart</h1>

  @if (cartService.cartItems().length === 0) {
    <div class="bg-white rounded-2xl shadow-sm border border-gray-100 p-12 text-center flex flex-col items-center">
      <div class="w-24 h-24 bg-gray-50 rounded-full flex items-center justify-center mb-6 text-gray-400">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
        </svg>
      </div>
      <h2 class="text-2xl font-bold text-gray-900 mb-2">Your cart is empty</h2>
      <p class="text-gray-500 mb-8 max-w-md mx-auto">Looks like you haven't added anything to your cart yet. Browse our catalog to find something you'll love.</p>
      <a routerLink="/catalog" class="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors inline-block">
        Start Shopping
      </a>
    </div>
  } @else {
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
      
      <!-- Cart Items List -->
      <div class="lg:col-span-2 space-y-4">
        <div class="flex justify-between items-center bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
          <span class="font-medium text-gray-700">{{ cartService.totalItems() }} Item(s)</span>
          <button (click)="clearCart()" class="text-sm text-red-500 hover:text-red-700 font-medium transition-colors">Clear Cart</button>
        </div>

        @for (item of cartService.cartItems(); track item.product.id) {
          <div class="bg-white rounded-xl shadow-sm border border-gray-100 p-4 sm:p-6 flex flex-col sm:flex-row gap-6 relative group">
            
            <!-- Remove Button (Top Right) -->
            <button (click)="removeItem(item.product.id, $event)" class="absolute top-4 right-4 text-gray-400 hover:text-red-500 transition-colors p-1" title="Remove">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
              </svg>
            </button>

            <!-- Product Image -->
            <a [routerLink]="['/catalog', item.product.id]" class="w-full sm:w-32 h-32 bg-gray-50 flex-shrink-0 rounded-lg flex items-center justify-center border border-gray-100 p-2 block cursor-pointer hover:border-blue-200 transition-colors">
              <img [src]="item.product.imageUrl" [alt]="item.product.name" class="max-w-full max-h-full object-contain mix-blend-multiply">
            </a>

            <!-- Product Details -->
            <div class="flex-1 flex flex-col">
              <div class="mb-1">
                <span class="text-xs text-gray-500 font-medium uppercase tracking-wider">{{ item.product.category }}</span>
              </div>
              <a [routerLink]="['/catalog', item.product.id]" class="font-bold text-lg text-gray-900 hover:text-blue-600 mb-2 truncate max-w-[90%] transition-colors">
                {{ item.product.name }}
              </a>
              
              <div class="text-lg font-extrabold text-blue-600 mb-auto">
                \${{ item.product.price }}
                @if (item.product.originalPrice) {
                  <span class="text-sm text-gray-400 line-through ml-2 font-normal">\${{ item.product.originalPrice }}</span>
                }
              </div>

              <!-- Quantity Controls & Subtotal -->
              <div class="flex items-center justify-between mt-4">
                <div class="flex items-center border border-gray-300 rounded-lg overflow-hidden bg-white shadow-sm">
                  <button 
                    (click)="updateQuantity(item.product.id, item.quantity - 1, $event)" 
                    class="px-3 py-1.5 text-gray-600 hover:bg-gray-100 transition-colors"
                  >-</button>
                  <input type="number" readonly [value]="item.quantity" class="w-10 text-center text-sm font-semibold border-x border-gray-300 py-1.5 focus:outline-none">
                  <button 
                    (click)="updateQuantity(item.product.id, item.quantity + 1, $event)"
                    class="px-3 py-1.5 text-gray-600 hover:bg-gray-100 transition-colors"
                  >+</button>
                </div>
                
                <div class="text-right">
                  <span class="text-xs text-gray-500">Subtotal:</span>
                  <span class="text-base font-bold text-gray-900 ml-2">\${{ (item.product.price * item.quantity).toFixed(2) }}</span>
                </div>
              </div>
            </div>
          </div>
        }
      </div>

      <!-- Order Summary -->
      <div class="lg:col-span-1">
        <div class="bg-white rounded-xl shadow-sm border border-gray-100 p-6 sticky top-24">
          <h2 class="text-lg font-bold text-gray-900 mb-6">Order Summary</h2>
          
          <div class="space-y-4 mb-6">
            <div class="flex justify-between text-gray-600">
              <span>Subtotal ({{ cartService.totalItems() }} items)</span>
              <span class="font-medium text-gray-900">\${{ cartService.totalPrice().toFixed(2) }}</span>
            </div>
            <div class="flex justify-between text-gray-600 border-b border-gray-100 pb-4">
              <span>Shipping</span>
              <span class="font-medium text-green-600">Free</span>
            </div>
            
            <div class="flex justify-between items-center py-2">
              <span class="text-lg font-bold text-gray-900">Total</span>
              <span class="text-2xl font-black text-blue-600">\${{ cartService.totalPrice().toFixed(2) }}</span>
            </div>
          </div>

          <button routerLink="/checkout" class="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3.5 px-4 rounded-lg transition-colors shadow-md flex justify-center items-center gap-2 mb-4">
            Proceed to Checkout
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
            </svg>
          </button>
          
          <p class="text-xs text-center text-gray-500 mt-4 flex items-center justify-center gap-1">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
            Secure Checkout
          </p>
        </div>
      </div>
      
    </div>
  }
</div>
` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CartComponent, { className: "CartComponent", filePath: "app/features/cart/pages/cart/cart.ts", lineNumber: 12 });
})();

// src/app/features/cart/cart-routing-module.ts
var routes = [
  { path: "", component: CartComponent }
];
var CartRoutingModule = class _CartRoutingModule {
  static \u0275fac = function CartRoutingModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CartRoutingModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _CartRoutingModule });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [RouterModule.forChild(routes), RouterModule] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CartRoutingModule, [{
    type: NgModule,
    args: [{
      imports: [RouterModule.forChild(routes)],
      exports: [RouterModule]
    }]
  }], null, null);
})();

// src/app/features/cart/cart-module.ts
var CartModule = class _CartModule {
  static \u0275fac = function CartModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CartModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _CartModule });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [
    CommonModule,
    CartRoutingModule
  ] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CartModule, [{
    type: NgModule,
    args: [{
      declarations: [],
      imports: [
        CommonModule,
        CartRoutingModule
      ]
    }]
  }], null, null);
})();
export {
  CartModule
};
//# sourceMappingURL=chunk-XXXNW55M.js.map
