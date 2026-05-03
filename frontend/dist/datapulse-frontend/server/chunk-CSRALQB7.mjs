import './polyfills.server.mjs';
import {
  CorporateService
} from "./chunk-DZWYPOOC.mjs";
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

// src/app/features/corporate/refunds/store-refunds.ts
var _c0 = () => [1, 2, 3];
var _forTrack0 = ($index, $item) => $item.id;
function StoreRefunds_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5)(1, "span", 10);
    \u0275\u0275element(2, "span", 11)(3, "span", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 13);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", ctx_r0.pendingCount(), " bekleyen talep");
  }
}
function StoreRefunds_For_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 14);
    \u0275\u0275listener("click", function StoreRefunds_For_11_Template_button_click_0_listener() {
      const status_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onStatusFilterChange(status_r3));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const status_r3 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classMap(ctx_r0.statusFilter() === status_r3 ? "bg-blue-600 text-white border-blue-500" : "bg-gray-800 text-gray-400 border-gray-700 hover:border-gray-600");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.statusLabels[status_r3], " ");
  }
}
function StoreRefunds_Conditional_12_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 15);
  }
}
function StoreRefunds_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8);
    \u0275\u0275repeaterCreate(1, StoreRefunds_Conditional_12_For_2_Template, 1, 0, "div", 15, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275repeater(\u0275\u0275pureFunction0(0, _c0));
  }
}
function StoreRefunds_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9)(1, "div", 16);
    \u0275\u0275text(2, "\u{1F4E6}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 17);
    \u0275\u0275text(4, "\u0130ade talebi bulunamad\u0131");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 18);
    \u0275\u0275text(6, "Ma\u011Fazan\u0131za hen\xFCz iade talebi gelmemi\u015F");
    \u0275\u0275elementEnd()();
  }
}
function StoreRefunds_Conditional_14_For_2_Conditional_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 36)(1, "div", 39);
    \u0275\u0275text(2, "\u0130ade Sebebi");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 40);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const refund_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(refund_r4.reason);
  }
}
function StoreRefunds_Conditional_14_For_2_Conditional_44_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 41);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 42);
    \u0275\u0275element(2, "circle", 43)(3, "path", 44);
    \u0275\u0275elementEnd()();
  }
}
function StoreRefunds_Conditional_14_For_2_Conditional_44_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 45);
    \u0275\u0275listener("click", function StoreRefunds_Conditional_14_For_2_Conditional_44_Conditional_1_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const refund_r4 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.approveRefund(refund_r4.id));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 46);
    \u0275\u0275element(2, "path", 47);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Onayla ");
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(4, "button", 48);
    \u0275\u0275listener("click", function StoreRefunds_Conditional_14_For_2_Conditional_44_Conditional_1_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r5);
      const refund_r4 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.rejectRefund(refund_r4.id));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(5, "svg", 46);
    \u0275\u0275element(6, "path", 49);
    \u0275\u0275elementEnd();
    \u0275\u0275text(7, " Reddet ");
    \u0275\u0275elementEnd();
  }
}
function StoreRefunds_Conditional_14_For_2_Conditional_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, StoreRefunds_Conditional_14_For_2_Conditional_44_Conditional_0_Template, 4, 0, "div", 41)(1, StoreRefunds_Conditional_14_For_2_Conditional_44_Conditional_1_Template, 8, 0);
  }
  if (rf & 2) {
    const refund_r4 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275conditional(ctx_r0.isUpdating() === refund_r4.id ? 0 : 1);
  }
}
function StoreRefunds_Conditional_14_For_2_Conditional_45_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 38);
    \u0275\u0275text(1, " \u2713 Karar verildi ");
    \u0275\u0275elementEnd();
  }
}
function StoreRefunds_Conditional_14_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19)(1, "div", 20)(2, "div", 21)(3, "div", 22)(4, "span", 23);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 24);
    \u0275\u0275text(7, "\u2192");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span", 25);
    \u0275\u0275text(9, "Sipari\u015F ");
    \u0275\u0275elementStart(10, "span", 26);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "span", 27);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 28)(15, "div", 29)(16, "div", 30);
    \u0275\u0275text(17, "M\xFC\u015Fteri");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div", 31);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div", 32);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "div", 29)(23, "div", 30);
    \u0275\u0275text(24, "\xDCr\xFCn");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "div", 33);
    \u0275\u0275text(26);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "div", 29)(28, "div", 30);
    \u0275\u0275text(29, "\u0130ade Tutar\u0131");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "div", 34);
    \u0275\u0275text(31);
    \u0275\u0275pipe(32, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(33, "div", 29)(34, "div", 30);
    \u0275\u0275text(35, "Tarih");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "div", 35);
    \u0275\u0275text(37);
    \u0275\u0275pipe(38, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "div", 32);
    \u0275\u0275text(40);
    \u0275\u0275pipe(41, "date");
    \u0275\u0275elementEnd()()();
    \u0275\u0275conditionalCreate(42, StoreRefunds_Conditional_14_For_2_Conditional_42_Template, 5, 1, "div", 36);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "div", 37);
    \u0275\u0275conditionalCreate(44, StoreRefunds_Conditional_14_For_2_Conditional_44_Template, 2, 1)(45, StoreRefunds_Conditional_14_For_2_Conditional_45_Template, 2, 0, "div", 38);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const refund_r4 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("\u0130ade #", refund_r4.id);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("#", refund_r4.orderId);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ctx_r0.statusColors[refund_r4.status] || "bg-gray-600 text-gray-200");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.statusLabels[refund_r4.status] || refund_r4.status, " ");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(refund_r4.customerName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(refund_r4.customerEmail);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(refund_r4.productName);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("$", \u0275\u0275pipeBind2(32, 12, refund_r4.refundAmount, "1.2-2"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(38, 15, refund_r4.processedAt, "dd MMM yyyy"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(41, 18, refund_r4.processedAt, "HH:mm"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(refund_r4.reason ? 42 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(refund_r4.status === "PENDING" ? 44 : 45);
  }
}
function StoreRefunds_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8);
    \u0275\u0275repeaterCreate(1, StoreRefunds_Conditional_14_For_2_Template, 46, 21, "div", 19, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r0.refunds());
  }
}
var StoreRefunds = class _StoreRefunds {
  corporateService = inject(CorporateService);
  statusFilter = signal("", ...ngDevMode ? [{ debugName: "statusFilter" }] : (
    /* istanbul ignore next */
    []
  ));
  isUpdating = signal(null, ...ngDevMode ? [{ debugName: "isUpdating" }] : (
    /* istanbul ignore next */
    []
  ));
  refresh$ = new Subject();
  refunds = signal([], ...ngDevMode ? [{ debugName: "refunds" }] : (
    /* istanbul ignore next */
    []
  ));
  isLoading = signal(true, ...ngDevMode ? [{ debugName: "isLoading" }] : (
    /* istanbul ignore next */
    []
  ));
  statusOptions = ["", "PENDING", "APPROVED", "REJECTED", "PROCESSED"];
  statusLabels = {
    "": "T\xFCm\xFC",
    "PENDING": "Beklemede",
    "APPROVED": "Onayland\u0131",
    "REJECTED": "Reddedildi",
    "PROCESSED": "\u0130\u015Flendi"
  };
  statusColors = {
    "PENDING": "bg-yellow-500/20 text-yellow-300",
    "APPROVED": "bg-green-500/20 text-green-300",
    "REJECTED": "bg-red-500/20 text-red-300",
    "PROCESSED": "bg-blue-500/20 text-blue-300"
  };
  constructor() {
    this.loadRefunds();
  }
  loadRefunds() {
    this.isLoading.set(true);
    const status = this.statusFilter() || void 0;
    this.corporateService.getStoreRefunds(status).subscribe({
      next: (res) => {
        this.refunds.set(res);
        this.isLoading.set(false);
      },
      error: () => this.isLoading.set(false)
    });
  }
  pendingCount = computed(() => this.refunds().filter((r) => r.status === "PENDING").length, ...ngDevMode ? [{ debugName: "pendingCount" }] : (
    /* istanbul ignore next */
    []
  ));
  onStatusFilterChange(status) {
    this.statusFilter.set(status);
    this.loadRefunds();
  }
  approveRefund(refundId) {
    this.isUpdating.set(refundId);
    this.corporateService.respondToRefund(refundId, "APPROVED").subscribe({
      next: (updated) => {
        this.refunds.update((list) => list.map((r) => r.id === refundId ? updated : r));
        this.isUpdating.set(null);
      },
      error: () => this.isUpdating.set(null)
    });
  }
  rejectRefund(refundId) {
    this.isUpdating.set(refundId);
    this.corporateService.respondToRefund(refundId, "REJECTED").subscribe({
      next: (updated) => {
        this.refunds.update((list) => list.map((r) => r.id === refundId ? updated : r));
        this.isUpdating.set(null);
      },
      error: () => this.isUpdating.set(null)
    });
  }
  static \u0275fac = function StoreRefunds_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _StoreRefunds)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _StoreRefunds, selectors: [["app-store-refunds"]], decls: 15, vars: 2, consts: [[1, "min-h-screen", "bg-gray-950", "text-white"], [1, "container", "mx-auto", "px-4", "py-8"], [1, "flex", "items-center", "justify-between", "mb-8"], [1, "text-3xl", "font-bold", "tracking-tight"], [1, "text-gray-400", "mt-1"], [1, "flex", "items-center", "gap-2", "px-4", "py-2", "bg-yellow-500/10", "border", "border-yellow-500/20", "rounded-lg"], [1, "flex", "gap-2", "mb-6", "flex-wrap"], [1, "px-4", "py-2", "text-sm", "font-medium", "rounded-lg", "border", "transition-all", 3, "class"], [1, "space-y-4"], [1, "text-center", "py-16"], [1, "relative", "flex", "h-2.5", "w-2.5"], [1, "animate-ping", "absolute", "inline-flex", "h-full", "w-full", "rounded-full", "bg-yellow-400", "opacity-75"], [1, "relative", "inline-flex", "rounded-full", "h-2.5", "w-2.5", "bg-yellow-500"], [1, "text-sm", "text-yellow-400", "font-medium"], [1, "px-4", "py-2", "text-sm", "font-medium", "rounded-lg", "border", "transition-all", 3, "click"], [1, "h-36", "bg-gray-800", "rounded-xl", "animate-pulse"], [1, "text-5xl", "mb-4"], [1, "text-gray-400", "text-lg", "font-medium"], [1, "text-gray-500", "text-sm", "mt-1"], [1, "bg-gray-900", "border", "border-gray-700/60", "rounded-xl", "p-5", "hover:border-gray-600", "transition-all"], [1, "flex", "flex-col", "lg:flex-row", "lg:items-start", "lg:justify-between", "gap-4"], [1, "flex-1", "space-y-4"], [1, "flex", "items-center", "gap-3", "flex-wrap"], [1, "text-white", "font-mono", "font-semibold", "text-sm", "bg-blue-500/15", "px-2.5", "py-1", "rounded-md"], [1, "text-gray-500"], [1, "text-white", "text-sm"], [1, "text-blue-400", "font-mono", "font-semibold"], [1, "px-2.5", "py-1", "rounded-full", "text-xs", "font-semibold", 3, "ngClass"], [1, "grid", "grid-cols-1", "sm:grid-cols-2", "lg:grid-cols-4", "gap-4"], [1, "bg-gray-800/60", "rounded-lg", "p-3"], [1, "text-xs", "text-gray-400", "mb-1", "font-medium", "uppercase", "tracking-wide"], [1, "text-sm", "text-white", "font-semibold"], [1, "text-xs", "text-gray-400", "mt-0.5"], [1, "text-sm", "text-white", "font-medium"], [1, "text-lg", "text-orange-400", "font-bold"], [1, "text-sm", "text-white"], [1, "bg-gray-800", "rounded-lg", "p-3.5", "border", "border-gray-700/50"], [1, "flex", "flex-row", "lg:flex-col", "gap-2", "shrink-0"], [1, "px-4", "py-2", "text-xs", "text-gray-400", "bg-gray-800", "rounded-lg", "text-center", "font-medium", "border", "border-gray-700/50"], [1, "text-xs", "text-gray-400", "mb-1.5", "font-medium", "uppercase", "tracking-wide"], [1, "text-sm", "text-gray-200", "leading-relaxed"], [1, "flex", "items-center", "justify-center", "px-4", "py-2"], ["fill", "none", "viewBox", "0 0 24 24", 1, "animate-spin", "w-5", "h-5", "text-gray-400"], ["cx", "12", "cy", "12", "r", "10", "stroke", "currentColor", "stroke-width", "4", 1, "opacity-25"], ["fill", "currentColor", "d", "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z", 1, "opacity-75"], [1, "flex", "items-center", "gap-1.5", "px-4", "py-2.5", "bg-green-600/20", "text-green-400", "border", "border-green-500/30", "rounded-lg", "text-sm", "font-semibold", "hover:bg-green-600/30", "transition-all", 3, "click"], ["fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", 1, "w-4", "h-4"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M5 13l4 4L19 7"], [1, "flex", "items-center", "gap-1.5", "px-4", "py-2.5", "bg-red-600/20", "text-red-400", "border", "border-red-500/30", "rounded-lg", "text-sm", "font-semibold", "hover:bg-red-600/30", "transition-all", 3, "click"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M6 18L18 6M6 6l12 12"]], template: function StoreRefunds_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div")(4, "h1", 3);
      \u0275\u0275text(5, "\u0130ade Talepleri");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "p", 4);
      \u0275\u0275text(7, "Ma\u011Fazan\u0131za gelen iade taleplerini y\xF6netin");
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(8, StoreRefunds_Conditional_8_Template, 6, 1, "div", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "div", 6);
      \u0275\u0275repeaterCreate(10, StoreRefunds_For_11_Template, 2, 3, "button", 7, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(12, StoreRefunds_Conditional_12_Template, 3, 1, "div", 8)(13, StoreRefunds_Conditional_13_Template, 7, 0, "div", 9)(14, StoreRefunds_Conditional_14_Template, 3, 0, "div", 8);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(8);
      \u0275\u0275conditional(ctx.pendingCount() > 0 ? 8 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275repeater(ctx.statusOptions);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.isLoading() ? 12 : ctx.refunds().length === 0 ? 13 : 14);
    }
  }, dependencies: [CommonModule, NgClass, DecimalPipe, DatePipe], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StoreRefunds, [{
    type: Component,
    args: [{ selector: "app-store-refunds", standalone: true, imports: [CommonModule], template: `<div class="min-h-screen bg-gray-950 text-white">
  <div class="container mx-auto px-4 py-8">

    <!-- Header -->
    <div class="flex items-center justify-between mb-8">
      <div>
        <h1 class="text-3xl font-bold tracking-tight">\u0130ade Talepleri</h1>
        <p class="text-gray-400 mt-1">Ma\u011Fazan\u0131za gelen iade taleplerini y\xF6netin</p>
      </div>
      @if (pendingCount() > 0) {
        <div class="flex items-center gap-2 px-4 py-2 bg-yellow-500/10 border border-yellow-500/20 rounded-lg">
          <span class="relative flex h-2.5 w-2.5">
            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
            <span class="relative inline-flex rounded-full h-2.5 w-2.5 bg-yellow-500"></span>
          </span>
          <span class="text-sm text-yellow-400 font-medium">{{ pendingCount() }} bekleyen talep</span>
        </div>
      }
    </div>

    <!-- Status Filter -->
    <div class="flex gap-2 mb-6 flex-wrap">
      @for (status of statusOptions; track status) {
        <button (click)="onStatusFilterChange(status)"
                [class]="statusFilter() === status
                  ? 'bg-blue-600 text-white border-blue-500'
                  : 'bg-gray-800 text-gray-400 border-gray-700 hover:border-gray-600'"
                class="px-4 py-2 text-sm font-medium rounded-lg border transition-all">
          {{ statusLabels[status] }}
        </button>
      }
    </div>

    <!-- Loading -->
    @if (isLoading()) {
      <div class="space-y-4">
        @for (i of [1,2,3]; track i) {
          <div class="h-36 bg-gray-800 rounded-xl animate-pulse"></div>
        }
      </div>
    } @else if (refunds().length === 0) {
      <div class="text-center py-16">
        <div class="text-5xl mb-4">\u{1F4E6}</div>
        <p class="text-gray-400 text-lg font-medium">\u0130ade talebi bulunamad\u0131</p>
        <p class="text-gray-500 text-sm mt-1">Ma\u011Fazan\u0131za hen\xFCz iade talebi gelmemi\u015F</p>
      </div>
    } @else {
      <!-- Refund Cards -->
      <div class="space-y-4">
        @for (refund of refunds(); track refund.id) {
          <div class="bg-gray-900 border border-gray-700/60 rounded-xl p-5 hover:border-gray-600 transition-all">
            <div class="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
              <!-- Left: Info -->
              <div class="flex-1 space-y-4">
                <!-- Header -->
                <div class="flex items-center gap-3 flex-wrap">
                  <span class="text-white font-mono font-semibold text-sm bg-blue-500/15 px-2.5 py-1 rounded-md">\u0130ade #{{ refund.id }}</span>
                  <span class="text-gray-500">\u2192</span>
                  <span class="text-white text-sm">Sipari\u015F <span class="text-blue-400 font-mono font-semibold">#{{ refund.orderId }}</span></span>
                  <span class="px-2.5 py-1 rounded-full text-xs font-semibold"
                        [ngClass]="statusColors[refund.status] || 'bg-gray-600 text-gray-200'">
                    {{ statusLabels[refund.status] || refund.status }}
                  </span>
                </div>

                <!-- Detail Grid -->
                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div class="bg-gray-800/60 rounded-lg p-3">
                    <div class="text-xs text-gray-400 mb-1 font-medium uppercase tracking-wide">M\xFC\u015Fteri</div>
                    <div class="text-sm text-white font-semibold">{{ refund.customerName }}</div>
                    <div class="text-xs text-gray-400 mt-0.5">{{ refund.customerEmail }}</div>
                  </div>
                  <div class="bg-gray-800/60 rounded-lg p-3">
                    <div class="text-xs text-gray-400 mb-1 font-medium uppercase tracking-wide">\xDCr\xFCn</div>
                    <div class="text-sm text-white font-medium">{{ refund.productName }}</div>
                  </div>
                  <div class="bg-gray-800/60 rounded-lg p-3">
                    <div class="text-xs text-gray-400 mb-1 font-medium uppercase tracking-wide">\u0130ade Tutar\u0131</div>
                    <div class="text-lg text-orange-400 font-bold">\${{ refund.refundAmount | number:'1.2-2' }}</div>
                  </div>
                  <div class="bg-gray-800/60 rounded-lg p-3">
                    <div class="text-xs text-gray-400 mb-1 font-medium uppercase tracking-wide">Tarih</div>
                    <div class="text-sm text-white">{{ refund.processedAt | date:'dd MMM yyyy' }}</div>
                    <div class="text-xs text-gray-400 mt-0.5">{{ refund.processedAt | date:'HH:mm' }}</div>
                  </div>
                </div>

                <!-- Reason -->
                @if (refund.reason) {
                  <div class="bg-gray-800 rounded-lg p-3.5 border border-gray-700/50">
                    <div class="text-xs text-gray-400 mb-1.5 font-medium uppercase tracking-wide">\u0130ade Sebebi</div>
                    <p class="text-sm text-gray-200 leading-relaxed">{{ refund.reason }}</p>
                  </div>
                }
              </div>

              <!-- Right: Actions -->
              <div class="flex flex-row lg:flex-col gap-2 shrink-0">
                @if (refund.status === 'PENDING') {
                  @if (isUpdating() === refund.id) {
                    <div class="flex items-center justify-center px-4 py-2">
                      <svg class="animate-spin w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24">
                        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                    </div>
                  } @else {
                    <button (click)="approveRefund(refund.id)"
                            class="flex items-center gap-1.5 px-4 py-2.5 bg-green-600/20 text-green-400 border border-green-500/30 rounded-lg text-sm font-semibold hover:bg-green-600/30 transition-all">
                      <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
                      Onayla
                    </button>
                    <button (click)="rejectRefund(refund.id)"
                            class="flex items-center gap-1.5 px-4 py-2.5 bg-red-600/20 text-red-400 border border-red-500/30 rounded-lg text-sm font-semibold hover:bg-red-600/30 transition-all">
                      <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
                      Reddet
                    </button>
                  }
                } @else {
                  <div class="px-4 py-2 text-xs text-gray-400 bg-gray-800 rounded-lg text-center font-medium border border-gray-700/50">
                    \u2713 Karar verildi
                  </div>
                }
              </div>
            </div>
          </div>
        }
      </div>
    }
  </div>
</div>
` }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(StoreRefunds, { className: "StoreRefunds", filePath: "app/features/corporate/refunds/store-refunds.ts", lineNumber: 13 });
})();
export {
  StoreRefunds
};
//# sourceMappingURL=chunk-CSRALQB7.mjs.map
