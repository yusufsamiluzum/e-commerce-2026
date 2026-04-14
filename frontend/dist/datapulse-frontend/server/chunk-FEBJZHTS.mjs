import './polyfills.server.mjs';
import {
  CorporateService
} from "./chunk-7HNC55RD.mjs";
import {
  FormsModule
} from "./chunk-CKOBKXXM.mjs";
import {
  CommonModule,
  Component,
  DatePipe,
  DecimalPipe,
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdomElement,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵdomListener,
  ɵɵdomProperty,
  ɵɵgetCurrentView,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵpureFunction0,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-JETRRDQP.mjs";
import "./chunk-T2KOBY73.mjs";

// src/app/features/corporate/orders/store-orders.ts
var _c0 = () => [1, 2, 3];
var _forTrack0 = ($index, $item) => $item.id;
function StoreOrders_For_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "button", 6);
    \u0275\u0275domListener("click", function StoreOrders_For_12_Template_button_click_0_listener() {
      const s_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      ctx_r2.filterStatus.set(s_r2);
      return \u0275\u0275resetView(ctx_r2.onFilterChange());
    });
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const s_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classMap(ctx_r2.filterStatus() === s_r2 ? "bg-blue-600 text-white" : "bg-gray-800 text-gray-400 hover:text-white");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.statusLabels[s_r2], " ");
  }
}
function StoreOrders_Conditional_13_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 10)(1, "div", 11);
    \u0275\u0275domElement(2, "div", 12)(3, "div", 13)(4, "div", 14)(5, "div", 15)(6, "div", 16);
    \u0275\u0275domElementEnd()();
  }
}
function StoreOrders_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 8);
    \u0275\u0275repeaterCreate(1, StoreOrders_Conditional_13_For_2_Template, 7, 0, "div", 10, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275repeater(\u0275\u0275pureFunction0(0, _c0));
  }
}
function StoreOrders_Conditional_14_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275textInterpolate1(' "', ctx_r2.statusLabels[ctx_r2.filterStatus()], '" stat\xFCs\xFCnde sipari\u015F yok. ');
  }
}
function StoreOrders_Conditional_14_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Hen\xFCz ma\u011Fazan\u0131za gelen sipari\u015F bulunmuyor. ");
  }
}
function StoreOrders_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 9);
    \u0275\u0275namespaceSVG();
    \u0275\u0275domElementStart(1, "svg", 17);
    \u0275\u0275domElement(2, "path", 18);
    \u0275\u0275domElementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275domElementStart(3, "h3", 19);
    \u0275\u0275text(4, "Sipari\u015F Bulunamad\u0131");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(5, "p", 20);
    \u0275\u0275conditionalCreate(6, StoreOrders_Conditional_14_Conditional_6_Template, 1, 1)(7, StoreOrders_Conditional_14_Conditional_7_Template, 1, 0);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275conditional(ctx_r2.filterStatus() ? 6 : 7);
  }
}
function StoreOrders_Conditional_15_For_2_Conditional_20_Conditional_1_For_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "tr", 48)(1, "td", 49);
    \u0275\u0275text(2);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "td", 50);
    \u0275\u0275text(4);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(5, "td", 51);
    \u0275\u0275text(6);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(7, "td", 51);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "number");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(10, "td", 52);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "number");
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const item_r6 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r6.productName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r6.productSku);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r6.quantity);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("$", \u0275\u0275pipeBind2(9, 5, item_r6.unitPrice, "1.2-2"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("$", \u0275\u0275pipeBind2(12, 8, item_r6.totalPrice, "1.2-2"));
  }
}
function StoreOrders_Conditional_15_For_2_Conditional_20_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "h4", 41);
    \u0275\u0275text(1, "Sipari\u015F Kalemleri");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(2, "div", 42)(3, "table", 43)(4, "thead")(5, "tr", 44)(6, "th", 45);
    \u0275\u0275text(7, "\xDCr\xFCn");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(8, "th", 45);
    \u0275\u0275text(9, "SKU");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(10, "th", 46);
    \u0275\u0275text(11, "Adet");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(12, "th", 46);
    \u0275\u0275text(13, "Birim Fiyat");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(14, "th", 47);
    \u0275\u0275text(15, "Toplam");
    \u0275\u0275domElementEnd()()();
    \u0275\u0275domElementStart(16, "tbody");
    \u0275\u0275repeaterCreate(17, StoreOrders_Conditional_15_For_2_Conditional_20_Conditional_1_For_18_Template, 13, 11, "tr", 48, _forTrack0);
    \u0275\u0275domElementEnd()()();
  }
  if (rf & 2) {
    const order_r5 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance(17);
    \u0275\u0275repeater(order_r5.items);
  }
}
function StoreOrders_Conditional_15_For_2_Conditional_20_Conditional_7_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275domElementStart(0, "svg", 54);
    \u0275\u0275domElement(1, "circle", 55)(2, "path", 56);
    \u0275\u0275domElementEnd();
  }
}
function StoreOrders_Conditional_15_For_2_Conditional_20_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "button", 53);
    \u0275\u0275domListener("click", function StoreOrders_Conditional_15_For_2_Conditional_20_Conditional_7_Template_button_click_0_listener($event) {
      const nextStatus_r8 = \u0275\u0275restoreView(_r7);
      const order_r5 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      ctx_r2.updateStatus(order_r5.id, nextStatus_r8);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275conditionalCreate(1, StoreOrders_Conditional_15_For_2_Conditional_20_Conditional_7_Conditional_1_Template, 3, 0, ":svg:svg", 54);
    \u0275\u0275text(2);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const order_r5 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275domProperty("disabled", ctx_r2.updatingId() === order_r5.id);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.updatingId() === order_r5.id ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.statusLabels[ctx], " Olarak G\xFCncelle ");
  }
}
function StoreOrders_Conditional_15_For_2_Conditional_20_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "button", 57);
    \u0275\u0275domListener("click", function StoreOrders_Conditional_15_For_2_Conditional_20_Conditional_8_Template_button_click_0_listener($event) {
      \u0275\u0275restoreView(_r9);
      const order_r5 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      ctx_r2.updateStatus(order_r5.id, "CANCELLED");
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275text(1, " \u0130ptal Et ");
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const order_r5 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275domProperty("disabled", ctx_r2.updatingId() === order_r5.id);
  }
}
function StoreOrders_Conditional_15_For_2_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 35);
    \u0275\u0275conditionalCreate(1, StoreOrders_Conditional_15_For_2_Conditional_20_Conditional_1_Template, 19, 0);
    \u0275\u0275domElementStart(2, "div", 36)(3, "span", 37);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "date");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(6, "div", 38);
    \u0275\u0275conditionalCreate(7, StoreOrders_Conditional_15_For_2_Conditional_20_Conditional_7_Template, 3, 3, "button", 39);
    \u0275\u0275conditionalCreate(8, StoreOrders_Conditional_15_For_2_Conditional_20_Conditional_8_Template, 2, 1, "button", 40);
    \u0275\u0275domElementEnd()()();
  }
  if (rf & 2) {
    let tmp_14_0;
    const order_r5 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275conditional(order_r5.items && order_r5.items.length > 0 ? 1 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" Sipari\u015F Tarihi: ", \u0275\u0275pipeBind2(5, 4, order_r5.orderDate, "dd MMMM yyyy, HH:mm"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275conditional((tmp_14_0 = ctx_r2.getNextStatus(order_r5.status)) ? 7 : -1, tmp_14_0);
    \u0275\u0275advance();
    \u0275\u0275conditional(order_r5.status === "PENDING" ? 8 : -1);
  }
}
function StoreOrders_Conditional_15_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "div", 22)(1, "div", 24);
    \u0275\u0275domListener("click", function StoreOrders_Conditional_15_For_2_Template_div_click_1_listener() {
      const order_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.toggleExpand(order_r5.id));
    });
    \u0275\u0275domElementStart(2, "span", 25);
    \u0275\u0275text(3);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(4, "div", 26)(5, "p", 27);
    \u0275\u0275text(6);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(7, "p", 28);
    \u0275\u0275text(8);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(9, "span", 29);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "date");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(12, "span", 30);
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "number");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(15, "span", 31);
    \u0275\u0275domElement(16, "span", 32);
    \u0275\u0275text(17);
    \u0275\u0275domElementEnd();
    \u0275\u0275namespaceSVG();
    \u0275\u0275domElementStart(18, "svg", 33);
    \u0275\u0275domElement(19, "path", 34);
    \u0275\u0275domElementEnd()();
    \u0275\u0275conditionalCreate(20, StoreOrders_Conditional_15_For_2_Conditional_20_Template, 9, 7, "div", 35);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const order_r5 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("#", order_r5.id);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(order_r5.customerName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(order_r5.customerEmail);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(11, 13, order_r5.orderDate, "dd MMM yyyy, HH:mm"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("$", \u0275\u0275pipeBind2(14, 16, order_r5.totalPrice, "1.2-2"));
    \u0275\u0275advance(2);
    \u0275\u0275classMap(ctx_r2.statusColors[order_r5.status]);
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r2.statusDots[order_r5.status]);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.statusLabels[order_r5.status], " ");
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r2.expandedOrderId() === order_r5.id ? "rotate-180" : "");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r2.expandedOrderId() === order_r5.id ? 20 : -1);
  }
}
function StoreOrders_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 21);
    \u0275\u0275repeaterCreate(1, StoreOrders_Conditional_15_For_2_Template, 21, 19, "div", 22, _forTrack0);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "div", 23);
    \u0275\u0275text(4);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.orders());
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" Toplam ", ctx_r2.orders().length, " sipari\u015F g\xF6steriliyor ");
  }
}
var StoreOrders = class _StoreOrders {
  corporateService = inject(CorporateService);
  orders = signal([], ...ngDevMode ? [{ debugName: "orders" }] : (
    /* istanbul ignore next */
    []
  ));
  isLoading = signal(true, ...ngDevMode ? [{ debugName: "isLoading" }] : (
    /* istanbul ignore next */
    []
  ));
  filterStatus = signal("", ...ngDevMode ? [{ debugName: "filterStatus" }] : (
    /* istanbul ignore next */
    []
  ));
  expandedOrderId = signal(null, ...ngDevMode ? [{ debugName: "expandedOrderId" }] : (
    /* istanbul ignore next */
    []
  ));
  updatingId = signal(null, ...ngDevMode ? [{ debugName: "updatingId" }] : (
    /* istanbul ignore next */
    []
  ));
  statuses = ["PENDING", "PROCESSING", "SHIPPED", "DELIVERED", "CANCELLED"];
  statusLabels = {
    "PENDING": "Bekleyen",
    "PROCESSING": "\u0130\u015Fleniyor",
    "SHIPPED": "Kargoda",
    "DELIVERED": "Teslim Edildi",
    "CANCELLED": "\u0130ptal"
  };
  statusColors = {
    "PENDING": "text-yellow-400 bg-yellow-500/10",
    "PROCESSING": "text-blue-400 bg-blue-500/10",
    "SHIPPED": "text-indigo-400 bg-indigo-500/10",
    "DELIVERED": "text-emerald-400 bg-emerald-500/10",
    "CANCELLED": "text-red-400 bg-red-500/10"
  };
  statusDots = {
    "PENDING": "bg-yellow-400",
    "PROCESSING": "bg-blue-400",
    "SHIPPED": "bg-indigo-400",
    "DELIVERED": "bg-emerald-400",
    "CANCELLED": "bg-red-400"
  };
  constructor() {
    this.loadOrders();
  }
  loadOrders() {
    this.isLoading.set(true);
    const status = this.filterStatus() || void 0;
    this.corporateService.getStoreOrders(status).subscribe({
      next: (orders) => {
        this.orders.set(orders);
        this.isLoading.set(false);
      },
      error: () => this.isLoading.set(false)
    });
  }
  onFilterChange() {
    this.loadOrders();
  }
  toggleExpand(orderId) {
    if (this.expandedOrderId() === orderId) {
      this.expandedOrderId.set(null);
    } else {
      this.expandedOrderId.set(orderId);
    }
  }
  updateStatus(orderId, newStatus) {
    this.updatingId.set(orderId);
    this.corporateService.updateOrderStatus(orderId, newStatus).subscribe({
      next: () => {
        this.updatingId.set(null);
        this.loadOrders();
      },
      error: () => this.updatingId.set(null)
    });
  }
  getNextStatus(currentStatus) {
    const flow = {
      "PENDING": "PROCESSING",
      "PROCESSING": "SHIPPED",
      "SHIPPED": "DELIVERED"
    };
    return flow[currentStatus] || null;
  }
  static \u0275fac = function StoreOrders_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _StoreOrders)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _StoreOrders, selectors: [["app-store-orders"]], decls: 16, vars: 3, consts: [[1, "min-h-screen", "bg-gray-950"], [1, "max-w-7xl", "mx-auto", "px-4", "sm:px-6", "lg:px-8", "py-8"], [1, "flex", "flex-col", "sm:flex-row", "sm:items-center", "justify-between", "gap-4", "mb-8"], [1, "text-3xl", "font-bold", "text-white"], [1, "text-gray-400", "text-sm", "mt-1"], [1, "flex", "flex-wrap", "gap-2", "mb-6"], [1, "px-4", "py-2", "rounded-xl", "text-sm", "font-medium", "transition-colors", 3, "click"], [1, "px-4", "py-2", "rounded-xl", "text-sm", "font-medium", "transition-colors", 3, "class"], [1, "space-y-4"], [1, "bg-gray-900/80", "border", "border-gray-800", "rounded-2xl", "p-12", "text-center"], [1, "bg-gray-900/80", "border", "border-gray-800", "rounded-2xl", "p-5", "animate-pulse"], [1, "flex", "items-center", "gap-4"], [1, "h-5", "bg-gray-700", "rounded", "w-16"], [1, "h-5", "bg-gray-700", "rounded", "w-40"], [1, "flex-1"], [1, "h-5", "bg-gray-700", "rounded", "w-20"], [1, "h-5", "bg-gray-700", "rounded", "w-24"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", 1, "h-16", "w-16", "text-gray-600", "mx-auto", "mb-4"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "1.5", "d", "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"], [1, "text-xl", "font-semibold", "text-white", "mb-2"], [1, "text-gray-400", "text-sm"], [1, "space-y-3"], [1, "bg-gray-900/80", "border", "border-gray-800", "rounded-2xl", "overflow-hidden", "transition-all", "hover:border-gray-700"], [1, "mt-4", "text-xs", "text-gray-500", "text-center"], [1, "flex", "items-center", "gap-4", "px-5", "py-4", "cursor-pointer", 3, "click"], [1, "text-sm", "font-mono", "text-gray-500", "w-20", "flex-shrink-0"], [1, "flex-1", "min-w-0"], [1, "text-sm", "font-semibold", "text-white", "truncate"], [1, "text-xs", "text-gray-500", "truncate"], [1, "text-xs", "text-gray-500", "hidden", "sm:inline"], [1, "text-sm", "font-semibold", "text-white", "w-24", "text-right"], [1, "inline-flex", "items-center", "gap-1.5", "text-xs", "font-medium", "px-3", "py-1.5", "rounded-lg", "w-28", "justify-center", "flex-shrink-0"], [1, "w-1.5", "h-1.5", "rounded-full"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", 1, "h-4", "w-4", "text-gray-500", "transition-transform", "flex-shrink-0"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M19 9l-7 7-7-7"], [1, "border-t", "border-gray-800", "px-5", "py-4", "bg-gray-800/20"], [1, "flex", "items-center", "justify-between"], [1, "text-xs", "text-gray-500"], [1, "flex", "gap-2"], [1, "px-4", "py-2", "bg-blue-600", "hover:bg-blue-700", "text-white", "text-sm", "rounded-lg", "transition-colors", "disabled:opacity-50", "flex", "items-center", "gap-2", 3, "disabled"], [1, "px-4", "py-2", "bg-red-600/20", "hover:bg-red-600/30", "text-red-400", "text-sm", "rounded-lg", "transition-colors", "border", "border-red-600/30", "disabled:opacity-50", 3, "disabled"], [1, "text-xs", "font-semibold", "text-gray-400", "uppercase", "tracking-wider", "mb-3"], [1, "overflow-x-auto", "mb-4"], [1, "w-full", "text-sm"], [1, "text-xs", "text-gray-500", "border-b", "border-gray-700"], [1, "text-left", "py-2", "pr-4"], [1, "text-right", "py-2", "pr-4"], [1, "text-right", "py-2"], [1, "border-b", "border-gray-800/50"], [1, "py-2", "pr-4", "text-white"], [1, "py-2", "pr-4", "text-gray-400", "font-mono", "text-xs"], [1, "py-2", "pr-4", "text-right", "text-gray-300"], [1, "py-2", "text-right", "text-white", "font-semibold"], [1, "px-4", "py-2", "bg-blue-600", "hover:bg-blue-700", "text-white", "text-sm", "rounded-lg", "transition-colors", "disabled:opacity-50", "flex", "items-center", "gap-2", 3, "click", "disabled"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", 1, "animate-spin", "h-3.5", "w-3.5"], ["cx", "12", "cy", "12", "r", "10", "stroke", "currentColor", "stroke-width", "4", 1, "opacity-25"], ["fill", "currentColor", "d", "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z", 1, "opacity-75"], [1, "px-4", "py-2", "bg-red-600/20", "hover:bg-red-600/30", "text-red-400", "text-sm", "rounded-lg", "transition-colors", "border", "border-red-600/30", "disabled:opacity-50", 3, "click", "disabled"]], template: function StoreOrders_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div")(4, "h1", 3);
      \u0275\u0275text(5, "Ma\u011Faza Sipari\u015Fleri");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(6, "p", 4);
      \u0275\u0275text(7, "Gelen sipari\u015Fleri y\xF6netin ve stat\xFClerini g\xFCncelleyin");
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(8, "div", 5)(9, "button", 6);
      \u0275\u0275domListener("click", function StoreOrders_Template_button_click_9_listener() {
        ctx.filterStatus.set("");
        return ctx.onFilterChange();
      });
      \u0275\u0275text(10, "T\xFCm\xFC");
      \u0275\u0275domElementEnd();
      \u0275\u0275repeaterCreate(11, StoreOrders_For_12_Template, 2, 3, "button", 7, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275domElementEnd();
      \u0275\u0275conditionalCreate(13, StoreOrders_Conditional_13_Template, 3, 1, "div", 8)(14, StoreOrders_Conditional_14_Template, 8, 1, "div", 9)(15, StoreOrders_Conditional_15_Template, 5, 1);
      \u0275\u0275domElementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(9);
      \u0275\u0275classMap(!ctx.filterStatus() ? "bg-blue-600 text-white" : "bg-gray-800 text-gray-400 hover:text-white");
      \u0275\u0275advance(2);
      \u0275\u0275repeater(ctx.statuses);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.isLoading() ? 13 : ctx.orders().length === 0 ? 14 : 15);
    }
  }, dependencies: [CommonModule, FormsModule, DecimalPipe, DatePipe], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StoreOrders, [{
    type: Component,
    args: [{ selector: "app-store-orders", standalone: true, imports: [CommonModule, FormsModule], template: `<div class="min-h-screen bg-gray-950">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

    <!-- Header -->
    <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
      <div>
        <h1 class="text-3xl font-bold text-white">Ma\u011Faza Sipari\u015Fleri</h1>
        <p class="text-gray-400 text-sm mt-1">Gelen sipari\u015Fleri y\xF6netin ve stat\xFClerini g\xFCncelleyin</p>
      </div>
    </div>

    <!-- Status Filter Tabs -->
    <div class="flex flex-wrap gap-2 mb-6">
      <button (click)="filterStatus.set(''); onFilterChange()"
        [class]="!filterStatus() ? 'bg-blue-600 text-white' : 'bg-gray-800 text-gray-400 hover:text-white'"
        class="px-4 py-2 rounded-xl text-sm font-medium transition-colors">T\xFCm\xFC</button>
      @for (s of statuses; track s) {
        <button (click)="filterStatus.set(s); onFilterChange()"
          [class]="filterStatus() === s ? 'bg-blue-600 text-white' : 'bg-gray-800 text-gray-400 hover:text-white'"
          class="px-4 py-2 rounded-xl text-sm font-medium transition-colors">
          {{ statusLabels[s] }}
        </button>
      }
    </div>

    <!-- Loading -->
    @if (isLoading()) {
      <div class="space-y-4">
        @for (i of [1,2,3]; track i) {
          <div class="bg-gray-900/80 border border-gray-800 rounded-2xl p-5 animate-pulse">
            <div class="flex items-center gap-4">
              <div class="h-5 bg-gray-700 rounded w-16"></div>
              <div class="h-5 bg-gray-700 rounded w-40"></div>
              <div class="flex-1"></div>
              <div class="h-5 bg-gray-700 rounded w-20"></div>
              <div class="h-5 bg-gray-700 rounded w-24"></div>
            </div>
          </div>
        }
      </div>
    } @else if (orders().length === 0) {
      <div class="bg-gray-900/80 border border-gray-800 rounded-2xl p-12 text-center">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-16 w-16 text-gray-600 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
        </svg>
        <h3 class="text-xl font-semibold text-white mb-2">Sipari\u015F Bulunamad\u0131</h3>
        <p class="text-gray-400 text-sm">
          @if (filterStatus()) {
            "{{ statusLabels[filterStatus()] }}" stat\xFCs\xFCnde sipari\u015F yok.
          } @else {
            Hen\xFCz ma\u011Fazan\u0131za gelen sipari\u015F bulunmuyor.
          }
        </p>
      </div>
    } @else {
      <!-- Orders List -->
      <div class="space-y-3">
        @for (order of orders(); track order.id) {
          <div class="bg-gray-900/80 border border-gray-800 rounded-2xl overflow-hidden transition-all hover:border-gray-700">
            
            <!-- Order Row -->
            <div class="flex items-center gap-4 px-5 py-4 cursor-pointer" (click)="toggleExpand(order.id)">
              <!-- Order ID -->
              <span class="text-sm font-mono text-gray-500 w-20 flex-shrink-0">#{{ order.id }}</span>
              
              <!-- Customer -->
              <div class="flex-1 min-w-0">
                <p class="text-sm font-semibold text-white truncate">{{ order.customerName }}</p>
                <p class="text-xs text-gray-500 truncate">{{ order.customerEmail }}</p>
              </div>
              
              <!-- Date -->
              <span class="text-xs text-gray-500 hidden sm:inline">{{ order.orderDate | date:'dd MMM yyyy, HH:mm' }}</span>
              
              <!-- Total -->
              <span class="text-sm font-semibold text-white w-24 text-right">\${{ order.totalPrice | number:'1.2-2' }}</span>
              
              <!-- Status -->
              <span [class]="statusColors[order.status]" class="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-lg w-28 justify-center flex-shrink-0">
                <span class="w-1.5 h-1.5 rounded-full" [class]="statusDots[order.status]"></span>
                {{ statusLabels[order.status] }}
              </span>
              
              <!-- Expand Icon -->
              <svg xmlns="http://www.w3.org/2000/svg" 
                [class]="expandedOrderId() === order.id ? 'rotate-180' : ''" 
                class="h-4 w-4 text-gray-500 transition-transform flex-shrink-0" 
                fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
              </svg>
            </div>

            <!-- Expanded Details -->
            @if (expandedOrderId() === order.id) {
              <div class="border-t border-gray-800 px-5 py-4 bg-gray-800/20">
                
                <!-- Items Table -->
                @if (order.items && order.items.length > 0) {
                  <h4 class="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">Sipari\u015F Kalemleri</h4>
                  <div class="overflow-x-auto mb-4">
                    <table class="w-full text-sm">
                      <thead>
                        <tr class="text-xs text-gray-500 border-b border-gray-700">
                          <th class="text-left py-2 pr-4">\xDCr\xFCn</th>
                          <th class="text-left py-2 pr-4">SKU</th>
                          <th class="text-right py-2 pr-4">Adet</th>
                          <th class="text-right py-2 pr-4">Birim Fiyat</th>
                          <th class="text-right py-2">Toplam</th>
                        </tr>
                      </thead>
                      <tbody>
                        @for (item of order.items; track item.id) {
                          <tr class="border-b border-gray-800/50">
                            <td class="py-2 pr-4 text-white">{{ item.productName }}</td>
                            <td class="py-2 pr-4 text-gray-400 font-mono text-xs">{{ item.productSku }}</td>
                            <td class="py-2 pr-4 text-right text-gray-300">{{ item.quantity }}</td>
                            <td class="py-2 pr-4 text-right text-gray-300">\${{ item.unitPrice | number:'1.2-2' }}</td>
                            <td class="py-2 text-right text-white font-semibold">\${{ item.totalPrice | number:'1.2-2' }}</td>
                          </tr>
                        }
                      </tbody>
                    </table>
                  </div>
                }

                <!-- Action Buttons -->
                <div class="flex items-center justify-between">
                  <span class="text-xs text-gray-500">
                    Sipari\u015F Tarihi: {{ order.orderDate | date:'dd MMMM yyyy, HH:mm' }}
                  </span>
                  
                  <div class="flex gap-2">
                    @if (getNextStatus(order.status); as nextStatus) {
                      <button (click)="updateStatus(order.id, nextStatus); $event.stopPropagation()"
                        [disabled]="updatingId() === order.id"
                        class="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm rounded-lg transition-colors disabled:opacity-50 flex items-center gap-2">
                        @if (updatingId() === order.id) {
                          <svg class="animate-spin h-3.5 w-3.5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path></svg>
                        }
                        {{ statusLabels[nextStatus] }} Olarak G\xFCncelle
                      </button>
                    }
                    @if (order.status === 'PENDING') {
                      <button (click)="updateStatus(order.id, 'CANCELLED'); $event.stopPropagation()"
                        [disabled]="updatingId() === order.id"
                        class="px-4 py-2 bg-red-600/20 hover:bg-red-600/30 text-red-400 text-sm rounded-lg transition-colors border border-red-600/30 disabled:opacity-50">
                        \u0130ptal Et
                      </button>
                    }
                  </div>
                </div>
              </div>
            }
          </div>
        }
      </div>

      <!-- Count Footer -->
      <div class="mt-4 text-xs text-gray-500 text-center">
        Toplam {{ orders().length }} sipari\u015F g\xF6steriliyor
      </div>
    }
  </div>
</div>
` }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(StoreOrders, { className: "StoreOrders", filePath: "app/features/corporate/orders/store-orders.ts", lineNumber: 12 });
})();
export {
  StoreOrders
};
//# sourceMappingURL=chunk-FEBJZHTS.mjs.map
