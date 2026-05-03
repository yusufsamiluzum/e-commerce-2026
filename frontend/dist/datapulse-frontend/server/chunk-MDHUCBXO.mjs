import './polyfills.server.mjs';
import {
  CommonModule,
  Component,
  DecimalPipe,
  HttpClient,
  Injectable,
  Input,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdomElement,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵdomProperty,
  ɵɵinject,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵsanitizeUrl,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-K2NYDLGG.mjs";

// src/app/shared/components/order-item/order-item.component.ts
var _c0 = ["*"];
function OrderItemComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElement(0, "img", 3);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275domProperty("src", ctx_r0.imageUrl, \u0275\u0275sanitizeUrl)("alt", ctx_r0.name);
  }
}
function OrderItemComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElement(0, "i", 4);
  }
}
var OrderItemComponent = class _OrderItemComponent {
  imageUrl;
  name;
  quantity;
  unitPrice;
  totalPrice;
  static \u0275fac = function OrderItemComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _OrderItemComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _OrderItemComponent, selectors: [["app-order-item"]], inputs: { imageUrl: "imageUrl", name: "name", quantity: "quantity", unitPrice: "unitPrice", totalPrice: "totalPrice" }, ngContentSelectors: _c0, decls: 23, vars: 11, consts: [[1, "rounded-2xl", "border", "border-slate-700/70", "bg-slate-900/40", "p-4", "md:p-5", "shadow-sm"], [1, "flex", "items-start", "gap-4"], [1, "w-20", "h-20", "rounded-xl", "bg-slate-950", "border", "border-slate-700/60", "flex-shrink-0", "overflow-hidden", "flex", "items-center", "justify-center"], [1, "w-full", "h-full", "object-cover", 3, "src", "alt"], [1, "fas", "fa-box", "text-gray-600", "text-xl"], [1, "flex-1", "min-w-0"], [1, "text-white", "text-base", "font-semibold", "leading-tight"], [1, "mt-3", "flex", "flex-wrap", "items-center", "gap-3", "text-sm"], [1, "inline-flex", "items-center", "rounded-md", "bg-slate-800", "border", "border-slate-700", "px-2.5", "py-1", "text-slate-300"], [1, "text-slate-500"], [1, "text-slate-300", "font-medium"], [1, "text-right", "flex", "flex-col", "items-end", "gap-2"], [1, "text-xs", "uppercase", "tracking-wide", "text-slate-400"], [1, "text-white", "font-extrabold", "text-lg", "leading-none"]], template: function OrderItemComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275projectionDef();
      \u0275\u0275domElementStart(0, "article", 0)(1, "div", 1)(2, "div", 2);
      \u0275\u0275conditionalCreate(3, OrderItemComponent_Conditional_3_Template, 1, 2, "img", 3)(4, OrderItemComponent_Conditional_4_Template, 1, 0, "i", 4);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(5, "div", 5)(6, "h4", 6);
      \u0275\u0275text(7);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(8, "div", 7)(9, "span", 8);
      \u0275\u0275text(10);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(11, "span", 9);
      \u0275\u0275text(12, "Birim:");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(13, "span", 10);
      \u0275\u0275text(14);
      \u0275\u0275pipe(15, "number");
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(16, "div", 11)(17, "p", 12);
      \u0275\u0275text(18, "Toplam");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(19, "span", 13);
      \u0275\u0275text(20);
      \u0275\u0275pipe(21, "number");
      \u0275\u0275domElementEnd();
      \u0275\u0275projection(22);
      \u0275\u0275domElementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275conditional(ctx.imageUrl ? 3 : 4);
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(ctx.name || "\xDCr\xFCn");
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", ctx.quantity, " Adet ");
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1("$", \u0275\u0275pipeBind2(15, 5, ctx.unitPrice, "1.2-2"));
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate1("$", \u0275\u0275pipeBind2(21, 8, ctx.totalPrice, "1.2-2"));
    }
  }, dependencies: [CommonModule, DecimalPipe], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OrderItemComponent, [{
    type: Component,
    args: [{
      selector: "app-order-item",
      standalone: true,
      imports: [CommonModule],
      template: `
    <article class="rounded-2xl border border-slate-700/70 bg-slate-900/40 p-4 md:p-5 shadow-sm">
      <div class="flex items-start gap-4">
        <div class="w-20 h-20 rounded-xl bg-slate-950 border border-slate-700/60 flex-shrink-0 overflow-hidden flex items-center justify-center">
        @if (imageUrl) {
          <img [src]="imageUrl" [alt]="name" class="w-full h-full object-cover">
        } @else {
          <i class="fas fa-box text-gray-600 text-xl"></i>
        }
        </div>

        <div class="flex-1 min-w-0">
          <h4 class="text-white text-base font-semibold leading-tight">{{ name || '\xDCr\xFCn' }}</h4>
          <div class="mt-3 flex flex-wrap items-center gap-3 text-sm">
            <span class="inline-flex items-center rounded-md bg-slate-800 border border-slate-700 px-2.5 py-1 text-slate-300">
              {{ quantity }} Adet
            </span>
            <span class="text-slate-500">Birim:</span>
            <span class="text-slate-300 font-medium">\${{ unitPrice | number:'1.2-2' }}</span>
          </div>
        </div>

        <div class="text-right flex flex-col items-end gap-2">
          <p class="text-xs uppercase tracking-wide text-slate-400">Toplam</p>
          <span class="text-white font-extrabold text-lg leading-none">\${{ totalPrice | number:'1.2-2' }}</span>
          <ng-content></ng-content>
        </div>
      </div>
    </article>
  `
    }]
  }], null, { imageUrl: [{
    type: Input
  }], name: [{
    type: Input
  }], quantity: [{
    type: Input
  }], unitPrice: [{
    type: Input
  }], totalPrice: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(OrderItemComponent, { className: "OrderItemComponent", filePath: "app/shared/components/order-item/order-item.component.ts", lineNumber: 39 });
})();

// src/app/core/services/order.service.ts
var OrderService = class _OrderService {
  http;
  apiUrl = "http://localhost:8080/api/orders";
  constructor(http) {
    this.http = http;
  }
  getUserOrders() {
    return this.http.get(this.apiUrl);
  }
  getOrderDetails(orderId) {
    return this.http.get(`${this.apiUrl}/${orderId}`);
  }
  cancelOrder(orderId) {
    return this.http.patch(`${this.apiUrl}/${orderId}/cancel`, {});
  }
  static \u0275fac = function OrderService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _OrderService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _OrderService, factory: _OrderService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OrderService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: HttpClient }], null);
})();

export {
  OrderItemComponent,
  OrderService
};
//# sourceMappingURL=chunk-MDHUCBXO.mjs.map
