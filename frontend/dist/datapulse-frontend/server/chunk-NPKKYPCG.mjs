import './polyfills.server.mjs';
import {
  AdminService
} from "./chunk-2MVXU3MM.mjs";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel,
  NgSelectOption,
  ɵNgSelectMultipleOption
} from "./chunk-ZZHQPMHV.mjs";
import {
  CommonModule,
  Component,
  DatePipe,
  DecimalPipe,
  NgClass,
  Subject,
  computed,
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-K2NYDLGG.mjs";
import "./chunk-T2KOBY73.mjs";

// src/app/features/admin/orders/order-management.ts
var _c0 = () => [1, 2, 3, 4, 5];
var _forTrack0 = ($index, $item) => $item.id;
function OrderManagement_For_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 21);
    \u0275\u0275listener("click", function OrderManagement_For_23_Template_button_click_0_listener() {
      const status_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onStatusFilterChange(status_r2));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const status_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classMap(ctx_r2.statusFilter() === status_r2 ? "bg-blue-600 text-white border-blue-500" : "bg-gray-800 text-gray-400 border-gray-700 hover:border-gray-600");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.statusLabels[status_r2], " ");
  }
}
function OrderManagement_Conditional_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " \xB7 ");
    \u0275\u0275elementStart(1, "span", 22);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " sonu\xE7 ");
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.filteredOrders().length);
  }
}
function OrderManagement_Conditional_30_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 23);
  }
}
function OrderManagement_Conditional_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20);
    \u0275\u0275repeaterCreate(1, OrderManagement_Conditional_30_For_2_Template, 1, 0, "div", 23, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275repeater(\u0275\u0275pureFunction0(0, _c0));
  }
}
function OrderManagement_Conditional_31_For_24_Conditional_24_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 44);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const order_r4 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(order_r4.trackingNumber);
  }
}
function OrderManagement_Conditional_31_For_24_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 43);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(2, OrderManagement_Conditional_31_For_24_Conditional_24_Conditional_2_Template, 2, 1, "div", 44);
  }
  if (rf & 2) {
    const order_r4 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngClass", ctx_r2.shipmentColors[order_r4.shipmentStatus] || "text-gray-400");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", order_r4.shipmentStatus, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(order_r4.trackingNumber ? 2 : -1);
  }
}
function OrderManagement_Conditional_31_For_24_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 40);
    \u0275\u0275text(1, "\u2014");
    \u0275\u0275elementEnd();
  }
}
function OrderManagement_Conditional_31_For_24_Conditional_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 41);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 45);
    \u0275\u0275element(2, "circle", 46)(3, "path", 47);
    \u0275\u0275elementEnd()();
  }
}
function OrderManagement_Conditional_31_For_24_Conditional_28_For_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 50);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const s_r6 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275property("value", s_r6);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\u2192 ", ctx_r2.statusLabels[s_r6]);
  }
}
function OrderManagement_Conditional_31_For_24_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "select", 48);
    \u0275\u0275listener("change", function OrderManagement_Conditional_31_For_24_Conditional_28_Template_select_change_0_listener($event) {
      \u0275\u0275restoreView(_r5);
      const order_r4 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      ctx_r2.changeOrderStatus(order_r4.id, $event.target.value);
      return \u0275\u0275resetView($event.target.value = "");
    });
    \u0275\u0275elementStart(1, "option", 49);
    \u0275\u0275text(2, "Durum De\u011Fi\u015Ftir");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(3, OrderManagement_Conditional_31_For_24_Conditional_28_For_4_Template, 2, 2, "option", 50, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const order_r4 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r2.getAvailableTransitions(order_r4.status));
  }
}
function OrderManagement_Conditional_31_For_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 30)(1, "td", 27)(2, "span", 33);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "td", 27)(5, "div", 19);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 34);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "td", 35);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td", 27)(12, "span", 36);
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "td", 37);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "td", 38);
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "td", 27)(21, "span", 39);
    \u0275\u0275text(22);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "td", 27);
    \u0275\u0275conditionalCreate(24, OrderManagement_Conditional_31_For_24_Conditional_24_Template, 3, 3)(25, OrderManagement_Conditional_31_For_24_Conditional_25_Template, 2, 0, "span", 40);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "td", 28);
    \u0275\u0275conditionalCreate(27, OrderManagement_Conditional_31_For_24_Conditional_27_Template, 4, 0, "div", 41)(28, OrderManagement_Conditional_31_For_24_Conditional_28_Template, 5, 0, "select", 42);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const order_r4 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("#", order_r4.id);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(order_r4.userName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(order_r4.userEmail);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(order_r4.storeName);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("$", \u0275\u0275pipeBind2(14, 11, order_r4.totalPrice, "1.2-2"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", order_r4.itemCount, " \xFCr\xFCn");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(19, 14, order_r4.orderDate, "dd MMM yyyy, HH:mm"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngClass", ctx_r2.statusColors[order_r4.status]);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.statusLabels[order_r4.status], " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(order_r4.shipmentStatus ? 24 : 25);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r2.isUpdating() === order_r4.id ? 27 : 28);
  }
}
function OrderManagement_Conditional_31_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 31);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 51);
    \u0275\u0275element(2, "path", 52);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(3, "p", 53);
    \u0275\u0275text(4, "Sipari\u015F bulunamad\u0131");
    \u0275\u0275elementEnd()();
  }
}
function OrderManagement_Conditional_31_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 32)(1, "button", 54);
    \u0275\u0275listener("click", function OrderManagement_Conditional_31_Conditional_26_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.goToPage(ctx_r2.currentPage() - 1));
    });
    \u0275\u0275text(2, " \u2190 \xD6nceki ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 55);
    \u0275\u0275text(4, " Sayfa ");
    \u0275\u0275elementStart(5, "span", 19);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "button", 54);
    \u0275\u0275listener("click", function OrderManagement_Conditional_31_Conditional_26_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.goToPage(ctx_r2.currentPage() + 1));
    });
    \u0275\u0275text(9, " Sonraki \u2192 ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r2.currentPage() === 0);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r2.currentPage() + 1);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" / ", ctx_r2.totalPages(), " ");
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r2.currentPage() >= ctx_r2.totalPages() - 1);
  }
}
function OrderManagement_Conditional_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 24)(1, "table", 25)(2, "thead", 26)(3, "tr")(4, "th", 27);
    \u0275\u0275text(5, "Sipari\u015F #");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th", 27);
    \u0275\u0275text(7, "M\xFC\u015Fteri");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th", 27);
    \u0275\u0275text(9, "Ma\u011Faza");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th", 27);
    \u0275\u0275text(11, "Tutar");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th", 27);
    \u0275\u0275text(13, "\xDCr\xFCn");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th", 27);
    \u0275\u0275text(15, "Tarih");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "th", 27);
    \u0275\u0275text(17, "Durum");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "th", 27);
    \u0275\u0275text(19, "Kargo");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "th", 28);
    \u0275\u0275text(21, "M\xFCdahale");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(22, "tbody", 29);
    \u0275\u0275repeaterCreate(23, OrderManagement_Conditional_31_For_24_Template, 29, 17, "tr", 30, _forTrack0);
    \u0275\u0275elementEnd()()();
    \u0275\u0275conditionalCreate(25, OrderManagement_Conditional_31_Conditional_25_Template, 5, 0, "div", 31);
    \u0275\u0275conditionalCreate(26, OrderManagement_Conditional_31_Conditional_26_Template, 10, 4, "div", 32);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(23);
    \u0275\u0275repeater(ctx_r2.filteredOrders());
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r2.filteredOrders().length === 0 ? 25 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.totalPages() > 1 ? 26 : -1);
  }
}
var OrderManagement = class _OrderManagement {
  adminService = inject(AdminService);
  currentPage = signal(0, ...ngDevMode ? [{ debugName: "currentPage" }] : (
    /* istanbul ignore next */
    []
  ));
  statusFilter = signal("", ...ngDevMode ? [{ debugName: "statusFilter" }] : (
    /* istanbul ignore next */
    []
  ));
  searchTerm = signal("", ...ngDevMode ? [{ debugName: "searchTerm" }] : (
    /* istanbul ignore next */
    []
  ));
  isUpdating = signal(null, ...ngDevMode ? [{ debugName: "isUpdating" }] : (
    /* istanbul ignore next */
    []
  ));
  // Reload trigger
  reload$ = new Subject();
  orders = signal([], ...ngDevMode ? [{ debugName: "orders" }] : (
    /* istanbul ignore next */
    []
  ));
  totalElements = signal(0, ...ngDevMode ? [{ debugName: "totalElements" }] : (
    /* istanbul ignore next */
    []
  ));
  totalPages = signal(0, ...ngDevMode ? [{ debugName: "totalPages" }] : (
    /* istanbul ignore next */
    []
  ));
  isLoading = signal(true, ...ngDevMode ? [{ debugName: "isLoading" }] : (
    /* istanbul ignore next */
    []
  ));
  statusOptions = ["", "PENDING", "CONFIRMED", "SHIPPED", "DELIVERED", "CANCELLED"];
  statusLabels = {
    "": "T\xFCm\xFC",
    "PENDING": "Beklemede",
    "CONFIRMED": "Onayland\u0131",
    "SHIPPED": "Kargoda",
    "DELIVERED": "Teslim Edildi",
    "CANCELLED": "\u0130ptal"
  };
  statusColors = {
    "PENDING": "bg-yellow-500/20 text-yellow-400",
    "CONFIRMED": "bg-blue-500/20 text-blue-400",
    "SHIPPED": "bg-purple-500/20 text-purple-400",
    "DELIVERED": "bg-green-500/20 text-green-400",
    "CANCELLED": "bg-red-500/20 text-red-400"
  };
  shipmentColors = {
    "PREPARING": "text-yellow-400",
    "IN_TRANSIT": "text-blue-400",
    "DELIVERED": "text-green-400",
    "RETURNED": "text-red-400"
  };
  filteredOrders = computed(() => {
    const term = this.searchTerm().toLowerCase();
    if (!term)
      return this.orders();
    return this.orders().filter((o) => o.userName.toLowerCase().includes(term) || o.storeName.toLowerCase().includes(term) || o.userEmail.toLowerCase().includes(term) || ("#" + o.id).includes(term));
  }, ...ngDevMode ? [{ debugName: "filteredOrders" }] : (
    /* istanbul ignore next */
    []
  ));
  constructor() {
    this.loadOrders();
  }
  loadOrders() {
    this.isLoading.set(true);
    const status = this.statusFilter() || void 0;
    this.adminService.getAllOrders(this.currentPage(), 20, status).subscribe({
      next: (res) => {
        this.orders.set(res.content);
        this.totalElements.set(res.totalElements);
        this.totalPages.set(res.totalPages);
        this.isLoading.set(false);
      },
      error: () => this.isLoading.set(false)
    });
  }
  onStatusFilterChange(status) {
    this.statusFilter.set(status);
    this.currentPage.set(0);
    this.loadOrders();
  }
  goToPage(page) {
    this.currentPage.set(page);
    this.loadOrders();
  }
  /**
   * Admin müdahalesi — sipariş durumunu değiştir.
   * Bu, normal akışa müdahale niteliğindedir ve audit log'a kaydedilir.
   */
  changeOrderStatus(orderId, newStatus) {
    this.isUpdating.set(orderId);
    this.adminService.updateOrderStatus(orderId, newStatus).subscribe({
      next: (updated) => {
        this.orders.update((list) => list.map((o) => o.id === orderId ? updated : o));
        this.isUpdating.set(null);
      },
      error: () => this.isUpdating.set(null)
    });
  }
  getAvailableTransitions(currentStatus) {
    return this.statusOptions.filter((s) => s !== "" && s !== currentStatus);
  }
  exportCsv() {
    this.adminService.exportCsv("orders");
  }
  static \u0275fac = function OrderManagement_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _OrderManagement)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _OrderManagement, selectors: [["app-order-management"]], decls: 32, vars: 4, consts: [[1, "p-6", "space-y-6"], [1, "flex", "flex-col", "md:flex-row", "md:items-center", "md:justify-between", "gap-4"], [1, "text-2xl", "font-bold", "text-white"], [1, "text-gray-400", "text-sm", "mt-1"], [1, "flex", "items-center", "gap-3"], [1, "flex", "items-center", "gap-2", "bg-emerald-600", "hover:bg-emerald-700", "text-white", "px-4", "py-2", "rounded-lg", "text-sm", "font-medium", "transition-colors", "shadow-lg", "shadow-emerald-500/20", 3, "click"], ["fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", 1, "h-4", "w-4"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"], [1, "flex", "items-center", "gap-2", "text-sm", "text-gray-400"], ["fill", "currentColor", "viewBox", "0 0 20 20", 1, "w-4", "h-4", "text-yellow-500"], ["fill-rule", "evenodd", "d", "M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z", "clip-rule", "evenodd"], [1, "flex", "flex-col", "sm:flex-row", "gap-3"], [1, "relative", "flex-1"], ["fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", 1, "absolute", "left-3", "top-1/2", "-translate-y-1/2", "w-4", "h-4", "text-gray-500"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"], ["type", "text", "placeholder", "Kullan\u0131c\u0131, ma\u011Faza veya sipari\u015F # ara...", 1, "w-full", "pl-10", "pr-4", "py-2.5", "bg-gray-800", "border", "border-gray-700", "rounded-lg", "text-white", "text-sm", "placeholder-gray-500", "focus:outline-none", "focus:ring-2", "focus:ring-blue-500", "focus:border-transparent", 3, "ngModelChange", "ngModel"], [1, "flex", "gap-1", "flex-wrap"], [1, "px-3", "py-2", "text-xs", "font-medium", "rounded-lg", "border", "transition-all", 3, "class"], [1, "text-sm", "text-gray-500"], [1, "text-white", "font-medium"], [1, "space-y-3"], [1, "px-3", "py-2", "text-xs", "font-medium", "rounded-lg", "border", "transition-all", 3, "click"], [1, "text-blue-400"], [1, "h-16", "bg-gray-800", "rounded-lg", "animate-pulse"], [1, "overflow-x-auto"], [1, "w-full", "text-sm", "text-left"], [1, "text-xs", "text-gray-400", "uppercase", "bg-gray-800/50", "border-b", "border-gray-800"], [1, "px-4", "py-3"], [1, "px-4", "py-3", "text-right"], [1, "divide-y", "divide-gray-800"], [1, "hover:bg-gray-800/50", "transition-colors"], [1, "text-center", "py-12"], [1, "flex", "items-center", "justify-between", "pt-4", "border-t", "border-gray-800"], [1, "text-blue-400", "font-mono", "font-medium"], [1, "text-gray-500", "text-xs"], [1, "px-4", "py-3", "text-gray-300"], [1, "text-green-400", "font-semibold"], [1, "px-4", "py-3", "text-gray-400"], [1, "px-4", "py-3", "text-gray-400", "text-xs"], [1, "px-2", "py-1", "rounded-full", "text-xs", "font-medium", 3, "ngClass"], [1, "text-gray-600", "text-xs"], [1, "inline-flex", "items-center", "text-gray-400"], [1, "bg-gray-800", "border", "border-gray-700", "text-gray-300", "text-xs", "rounded-lg", "px-2", "py-1.5", "focus:ring-blue-500", "focus:border-blue-500", "cursor-pointer"], [1, "text-xs", 3, "ngClass"], [1, "text-gray-600", "text-xs", "font-mono"], ["fill", "none", "viewBox", "0 0 24 24", 1, "animate-spin", "w-4", "h-4", "mr-1"], ["cx", "12", "cy", "12", "r", "10", "stroke", "currentColor", "stroke-width", "4", 1, "opacity-25"], ["fill", "currentColor", "d", "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z", 1, "opacity-75"], [1, "bg-gray-800", "border", "border-gray-700", "text-gray-300", "text-xs", "rounded-lg", "px-2", "py-1.5", "focus:ring-blue-500", "focus:border-blue-500", "cursor-pointer", 3, "change"], ["value", "", "disabled", "", "selected", ""], [3, "value"], ["fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", 1, "mx-auto", "h-12", "w-12", "text-gray-600"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "1.5", "d", "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"], [1, "mt-3", "text-gray-400"], [1, "px-4", "py-2", "text-sm", "bg-gray-800", "text-gray-300", "rounded-lg", "border", "border-gray-700", "hover:bg-gray-700", "disabled:opacity-40", "disabled:cursor-not-allowed", "transition-all", 3, "click", "disabled"], [1, "text-sm", "text-gray-400"]], template: function OrderManagement_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h1", 2);
      \u0275\u0275text(4, "Sipari\u015F Y\xF6netimi");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "p", 3);
      \u0275\u0275text(6, "Platform genelindeki t\xFCm sipari\u015Fleri izleyin ve gerekti\u011Finde m\xFCdahale edin");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "div", 4)(8, "button", 5);
      \u0275\u0275listener("click", function OrderManagement_Template_button_click_8_listener() {
        return ctx.exportCsv();
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(9, "svg", 6);
      \u0275\u0275element(10, "path", 7);
      \u0275\u0275elementEnd();
      \u0275\u0275text(11, " CSV ");
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(12, "div", 8);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(13, "svg", 9);
      \u0275\u0275element(14, "path", 10);
      \u0275\u0275elementEnd();
      \u0275\u0275text(15, " Audit log ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(16, "div", 11)(17, "div", 12);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(18, "svg", 13);
      \u0275\u0275element(19, "path", 14);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(20, "input", 15);
      \u0275\u0275listener("ngModelChange", function OrderManagement_Template_input_ngModelChange_20_listener($event) {
        return ctx.searchTerm.set($event);
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(21, "div", 16);
      \u0275\u0275repeaterCreate(22, OrderManagement_For_23_Template, 2, 3, "button", 17, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(24, "div", 18);
      \u0275\u0275text(25, " Toplam ");
      \u0275\u0275elementStart(26, "span", 19);
      \u0275\u0275text(27);
      \u0275\u0275elementEnd();
      \u0275\u0275text(28, " sipari\u015F ");
      \u0275\u0275conditionalCreate(29, OrderManagement_Conditional_29_Template, 4, 1);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(30, OrderManagement_Conditional_30_Template, 3, 1, "div", 20)(31, OrderManagement_Conditional_31_Template, 27, 2);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(20);
      \u0275\u0275property("ngModel", ctx.searchTerm());
      \u0275\u0275advance(2);
      \u0275\u0275repeater(ctx.statusOptions);
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(ctx.totalElements());
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.searchTerm() ? 29 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.isLoading() ? 30 : 31);
    }
  }, dependencies: [CommonModule, NgClass, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NgControlStatus, NgModel, DecimalPipe, DatePipe], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OrderManagement, [{
    type: Component,
    args: [{ selector: "app-order-management", standalone: true, imports: [CommonModule, FormsModule], template: `<div class="p-6 space-y-6">
  <!-- Header -->
  <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
    <div>
      <h1 class="text-2xl font-bold text-white">Sipari\u015F Y\xF6netimi</h1>
      <p class="text-gray-400 text-sm mt-1">Platform genelindeki t\xFCm sipari\u015Fleri izleyin ve gerekti\u011Finde m\xFCdahale edin</p>
    </div>
    <div class="flex items-center gap-3">
      <button (click)="exportCsv()" class="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors shadow-lg shadow-emerald-500/20">
        <svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>
        CSV
      </button>
      <div class="flex items-center gap-2 text-sm text-gray-400">
        <svg class="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd"/></svg>
        Audit log
      </div>
    </div>
  </div>

  <!-- Filters Bar -->
  <div class="flex flex-col sm:flex-row gap-3">
    <!-- Search -->
    <div class="relative flex-1">
      <svg class="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
      </svg>
      <input type="text" [ngModel]="searchTerm()" (ngModelChange)="searchTerm.set($event)"
             placeholder="Kullan\u0131c\u0131, ma\u011Faza veya sipari\u015F # ara..."
             class="w-full pl-10 pr-4 py-2.5 bg-gray-800 border border-gray-700 rounded-lg text-white text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
    </div>

    <!-- Status Filter -->
    <div class="flex gap-1 flex-wrap">
      @for (status of statusOptions; track status) {
        <button (click)="onStatusFilterChange(status)"
                [class]="statusFilter() === status
                  ? 'bg-blue-600 text-white border-blue-500'
                  : 'bg-gray-800 text-gray-400 border-gray-700 hover:border-gray-600'"
                class="px-3 py-2 text-xs font-medium rounded-lg border transition-all">
          {{ statusLabels[status] }}
        </button>
      }
    </div>
  </div>

  <!-- Total Count -->
  <div class="text-sm text-gray-500">
    Toplam <span class="text-white font-medium">{{ totalElements() }}</span> sipari\u015F
    @if (searchTerm()) {
      \xB7 <span class="text-blue-400">{{ filteredOrders().length }}</span> sonu\xE7
    }
  </div>

  <!-- Loading -->
  @if (isLoading()) {
    <div class="space-y-3">
      @for (i of [1,2,3,4,5]; track i) {
        <div class="h-16 bg-gray-800 rounded-lg animate-pulse"></div>
      }
    </div>
  } @else {
    <!-- Orders Table -->
    <div class="overflow-x-auto">
      <table class="w-full text-sm text-left">
        <thead class="text-xs text-gray-400 uppercase bg-gray-800/50 border-b border-gray-800">
          <tr>
            <th class="px-4 py-3">Sipari\u015F #</th>
            <th class="px-4 py-3">M\xFC\u015Fteri</th>
            <th class="px-4 py-3">Ma\u011Faza</th>
            <th class="px-4 py-3">Tutar</th>
            <th class="px-4 py-3">\xDCr\xFCn</th>
            <th class="px-4 py-3">Tarih</th>
            <th class="px-4 py-3">Durum</th>
            <th class="px-4 py-3">Kargo</th>
            <th class="px-4 py-3 text-right">M\xFCdahale</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-gray-800">
          @for (order of filteredOrders(); track order.id) {
            <tr class="hover:bg-gray-800/50 transition-colors">
              <!-- Sipari\u015F # -->
              <td class="px-4 py-3">
                <span class="text-blue-400 font-mono font-medium">#{{ order.id }}</span>
              </td>
              <!-- M\xFC\u015Fteri -->
              <td class="px-4 py-3">
                <div class="text-white font-medium">{{ order.userName }}</div>
                <div class="text-gray-500 text-xs">{{ order.userEmail }}</div>
              </td>
              <!-- Ma\u011Faza -->
              <td class="px-4 py-3 text-gray-300">{{ order.storeName }}</td>
              <!-- Tutar -->
              <td class="px-4 py-3">
                <span class="text-green-400 font-semibold">\${{ order.totalPrice | number:'1.2-2' }}</span>
              </td>
              <!-- \xDCr\xFCn Say\u0131s\u0131 -->
              <td class="px-4 py-3 text-gray-400">{{ order.itemCount }} \xFCr\xFCn</td>
              <!-- Tarih -->
              <td class="px-4 py-3 text-gray-400 text-xs">
                {{ order.orderDate | date:'dd MMM yyyy, HH:mm' }}
              </td>
              <!-- Durum Badge -->
              <td class="px-4 py-3">
                <span class="px-2 py-1 rounded-full text-xs font-medium" [ngClass]="statusColors[order.status]">
                  {{ statusLabels[order.status] }}
                </span>
              </td>
              <!-- Kargo -->
              <td class="px-4 py-3">
                @if (order.shipmentStatus) {
                  <div class="text-xs" [ngClass]="shipmentColors[order.shipmentStatus] || 'text-gray-400'">
                    {{ order.shipmentStatus }}
                  </div>
                  @if (order.trackingNumber) {
                    <div class="text-gray-600 text-xs font-mono">{{ order.trackingNumber }}</div>
                  }
                } @else {
                  <span class="text-gray-600 text-xs">\u2014</span>
                }
              </td>
              <!-- Admin M\xFCdahale -->
              <td class="px-4 py-3 text-right">
                @if (isUpdating() === order.id) {
                  <div class="inline-flex items-center text-gray-400">
                    <svg class="animate-spin w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24">
                      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                  </div>
                } @else {
                  <select (change)="changeOrderStatus(order.id, $any($event.target).value); $any($event.target).value = ''"
                          class="bg-gray-800 border border-gray-700 text-gray-300 text-xs rounded-lg px-2 py-1.5 focus:ring-blue-500 focus:border-blue-500 cursor-pointer">
                    <option value="" disabled selected>Durum De\u011Fi\u015Ftir</option>
                    @for (s of getAvailableTransitions(order.status); track s) {
                      <option [value]="s">\u2192 {{ statusLabels[s] }}</option>
                    }
                  </select>
                }
              </td>
            </tr>
          }
        </tbody>
      </table>
    </div>

    <!-- Empty State -->
    @if (filteredOrders().length === 0) {
      <div class="text-center py-12">
        <svg class="mx-auto h-12 w-12 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"/>
        </svg>
        <p class="mt-3 text-gray-400">Sipari\u015F bulunamad\u0131</p>
      </div>
    }

    <!-- Pagination -->
    @if (totalPages() > 1) {
      <div class="flex items-center justify-between pt-4 border-t border-gray-800">
        <button (click)="goToPage(currentPage() - 1)" [disabled]="currentPage() === 0"
                class="px-4 py-2 text-sm bg-gray-800 text-gray-300 rounded-lg border border-gray-700 hover:bg-gray-700 disabled:opacity-40 disabled:cursor-not-allowed transition-all">
          \u2190 \xD6nceki
        </button>
        <span class="text-sm text-gray-400">
          Sayfa <span class="text-white font-medium">{{ currentPage() + 1 }}</span> / {{ totalPages() }}
        </span>
        <button (click)="goToPage(currentPage() + 1)" [disabled]="currentPage() >= totalPages() - 1"
                class="px-4 py-2 text-sm bg-gray-800 text-gray-300 rounded-lg border border-gray-700 hover:bg-gray-700 disabled:opacity-40 disabled:cursor-not-allowed transition-all">
          Sonraki \u2192
        </button>
      </div>
    }
  }
</div>
` }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(OrderManagement, { className: "OrderManagement", filePath: "app/features/admin/orders/order-management.ts", lineNumber: 14 });
})();
export {
  OrderManagement
};
//# sourceMappingURL=chunk-NPKKYPCG.mjs.map
