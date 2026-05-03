import {
  AdminService
} from "./chunk-ZMDBUR24.js";
import {
  FormsModule
} from "./chunk-MKAKFE2K.js";
import {
  CommonModule,
  Component,
  DatePipe,
  DecimalPipe,
  NgClass,
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
} from "./chunk-OBD62CNA.js";
import "./chunk-H2SRQSE4.js";

// src/app/features/admin/refunds/refund-management.ts
var _c0 = () => [1, 2, 3];
var _forTrack0 = ($index, $item) => $item.id;
function RefundManagement_For_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 13);
    \u0275\u0275listener("click", function RefundManagement_For_14_Template_button_click_0_listener() {
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
function RefundManagement_Conditional_20_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 14);
  }
}
function RefundManagement_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12);
    \u0275\u0275repeaterCreate(1, RefundManagement_Conditional_20_For_2_Template, 1, 0, "div", 14, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275repeater(\u0275\u0275pureFunction0(0, _c0));
  }
}
function RefundManagement_Conditional_21_For_2_Conditional_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 33)(1, "div", 37);
    \u0275\u0275text(2, "\u0130ade Sebebi");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 38);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const refund_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(refund_r4.reason);
  }
}
function RefundManagement_Conditional_21_For_2_Conditional_43_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 39);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 40);
    \u0275\u0275element(2, "circle", 41)(3, "path", 42);
    \u0275\u0275elementEnd()();
  }
}
function RefundManagement_Conditional_21_For_2_Conditional_43_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 43);
    \u0275\u0275listener("click", function RefundManagement_Conditional_21_For_2_Conditional_43_Conditional_1_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const refund_r4 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.approveRefund(refund_r4.id));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 44);
    \u0275\u0275element(2, "path", 45);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Onayla ");
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(4, "button", 46);
    \u0275\u0275listener("click", function RefundManagement_Conditional_21_For_2_Conditional_43_Conditional_1_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r5);
      const refund_r4 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.rejectRefund(refund_r4.id));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(5, "svg", 44);
    \u0275\u0275element(6, "path", 47);
    \u0275\u0275elementEnd();
    \u0275\u0275text(7, " Reddet ");
    \u0275\u0275elementEnd();
  }
}
function RefundManagement_Conditional_21_For_2_Conditional_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, RefundManagement_Conditional_21_For_2_Conditional_43_Conditional_0_Template, 4, 0, "div", 39)(1, RefundManagement_Conditional_21_For_2_Conditional_43_Conditional_1_Template, 8, 0);
  }
  if (rf & 2) {
    const refund_r4 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275conditional(ctx_r2.isUpdating() === refund_r4.id ? 0 : 1);
  }
}
function RefundManagement_Conditional_21_For_2_Conditional_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 36);
    \u0275\u0275text(1, " \u2713 Karar verildi ");
    \u0275\u0275elementEnd();
  }
}
function RefundManagement_Conditional_21_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15)(1, "div", 18)(2, "div", 19)(3, "div", 20)(4, "span", 21);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 22);
    \u0275\u0275text(7, "\u2192");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span", 23);
    \u0275\u0275text(9, "Sipari\u015F ");
    \u0275\u0275elementStart(10, "span", 24);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "span", 25);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 26)(15, "div", 27)(16, "div", 28);
    \u0275\u0275text(17, "M\xFC\u015Fteri");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div", 29);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div", 30);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "div", 27)(23, "div", 28);
    \u0275\u0275text(24, "Ma\u011Faza");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "div", 31);
    \u0275\u0275text(26);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "div", 27)(28, "div", 28);
    \u0275\u0275text(29, "\xDCr\xFCn");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "div", 31);
    \u0275\u0275text(31);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(32, "div", 27)(33, "div", 28);
    \u0275\u0275text(34, "\u0130ade Tutar\u0131");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "div", 32);
    \u0275\u0275text(36);
    \u0275\u0275pipe(37, "number");
    \u0275\u0275elementEnd()()();
    \u0275\u0275conditionalCreate(38, RefundManagement_Conditional_21_For_2_Conditional_38_Template, 5, 1, "div", 33);
    \u0275\u0275elementStart(39, "div", 34);
    \u0275\u0275text(40);
    \u0275\u0275pipe(41, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(42, "div", 35);
    \u0275\u0275conditionalCreate(43, RefundManagement_Conditional_21_For_2_Conditional_43_Template, 2, 1)(44, RefundManagement_Conditional_21_For_2_Conditional_44_Template, 2, 0, "div", 36);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const refund_r4 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("\u0130ade #", refund_r4.id);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("#", refund_r4.orderId);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ctx_r2.statusColors[refund_r4.status] || "bg-gray-600 text-gray-200");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.statusLabels[refund_r4.status] || refund_r4.status, " ");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(refund_r4.userName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(refund_r4.userEmail);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(refund_r4.storeName);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(refund_r4.productName);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("$", \u0275\u0275pipeBind2(37, 12, refund_r4.refundAmount, "1.2-2"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(refund_r4.reason ? 38 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" \u{1F4C5} ", \u0275\u0275pipeBind2(41, 15, refund_r4.processedAt, "dd MMM yyyy, HH:mm"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275conditional(refund_r4.status === "PENDING" ? 43 : 44);
  }
}
function RefundManagement_Conditional_21_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 48);
    \u0275\u0275element(2, "path", 49);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(3, "p", 50);
    \u0275\u0275text(4, "\u0130ade talebi bulunamad\u0131");
    \u0275\u0275elementEnd()();
  }
}
function RefundManagement_Conditional_21_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 17)(1, "button", 51);
    \u0275\u0275listener("click", function RefundManagement_Conditional_21_Conditional_4_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.goToPage(ctx_r2.currentPage() - 1));
    });
    \u0275\u0275text(2, " \u2190 \xD6nceki ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 10);
    \u0275\u0275text(4, " Sayfa ");
    \u0275\u0275elementStart(5, "span", 11);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "button", 51);
    \u0275\u0275listener("click", function RefundManagement_Conditional_21_Conditional_4_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r6);
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
function RefundManagement_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12);
    \u0275\u0275repeaterCreate(1, RefundManagement_Conditional_21_For_2_Template, 45, 18, "div", 15, _forTrack0);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(3, RefundManagement_Conditional_21_Conditional_3_Template, 5, 0, "div", 16);
    \u0275\u0275conditionalCreate(4, RefundManagement_Conditional_21_Conditional_4_Template, 10, 4, "div", 17);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.refunds());
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r2.refunds().length === 0 ? 3 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.totalPages() > 1 ? 4 : -1);
  }
}
var RefundManagement = class _RefundManagement {
  adminService = inject(AdminService);
  currentPage = signal(0, ...ngDevMode ? [{ debugName: "currentPage" }] : (
    /* istanbul ignore next */
    []
  ));
  statusFilter = signal("", ...ngDevMode ? [{ debugName: "statusFilter" }] : (
    /* istanbul ignore next */
    []
  ));
  isUpdating = signal(null, ...ngDevMode ? [{ debugName: "isUpdating" }] : (
    /* istanbul ignore next */
    []
  ));
  refunds = signal([], ...ngDevMode ? [{ debugName: "refunds" }] : (
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
  statusOptions = ["", "PENDING", "APPROVED", "REJECTED", "PROCESSED"];
  statusLabels = {
    "": "T\xFCm\xFC",
    "PENDING": "Beklemede",
    "APPROVED": "Onayland\u0131",
    "REJECTED": "Reddedildi",
    "PROCESSED": "\u0130\u015Flendi"
  };
  statusColors = {
    "PENDING": "bg-yellow-500/20 text-yellow-300 border-yellow-500/30",
    "APPROVED": "bg-green-500/20 text-green-300 border-green-500/30",
    "REJECTED": "bg-red-500/20 text-red-300 border-red-500/30",
    "PROCESSED": "bg-blue-500/20 text-blue-300 border-blue-500/30"
  };
  constructor() {
    this.loadRefunds();
  }
  loadRefunds() {
    this.isLoading.set(true);
    const status = this.statusFilter() || void 0;
    this.adminService.getAllRefunds(this.currentPage(), 20, status).subscribe({
      next: (res) => {
        this.refunds.set(res.content);
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
    this.loadRefunds();
  }
  goToPage(page) {
    this.currentPage.set(page);
    this.loadRefunds();
  }
  /**
   * Admin kararı — iade talebini onayla veya reddet.
   * Anlaşmazlık durumunda admin son karar mercidir.
   */
  approveRefund(refundId) {
    this.isUpdating.set(refundId);
    this.adminService.updateRefundStatus(refundId, "APPROVED").subscribe({
      next: (updated) => {
        this.refunds.update((list) => list.map((r) => r.id === refundId ? updated : r));
        this.isUpdating.set(null);
      },
      error: () => this.isUpdating.set(null)
    });
  }
  rejectRefund(refundId) {
    this.isUpdating.set(refundId);
    this.adminService.updateRefundStatus(refundId, "REJECTED").subscribe({
      next: (updated) => {
        this.refunds.update((list) => list.map((r) => r.id === refundId ? updated : r));
        this.isUpdating.set(null);
      },
      error: () => this.isUpdating.set(null)
    });
  }
  static \u0275fac = function RefundManagement_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RefundManagement)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RefundManagement, selectors: [["app-refund-management"]], decls: 22, vars: 2, consts: [[1, "p-6", "space-y-6"], [1, "flex", "flex-col", "md:flex-row", "md:items-center", "md:justify-between", "gap-4"], [1, "text-2xl", "font-bold", "text-white"], [1, "text-gray-400", "text-sm", "mt-1"], [1, "flex", "items-center", "gap-2", "px-3", "py-1.5", "bg-yellow-500/10", "border", "border-yellow-500/20", "rounded-lg"], ["fill", "currentColor", "viewBox", "0 0 20 20", 1, "w-4", "h-4", "text-yellow-500"], ["fill-rule", "evenodd", "d", "M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z", "clip-rule", "evenodd"], [1, "text-xs", "text-yellow-400", "font-medium"], [1, "flex", "gap-2"], [1, "px-4", "py-2", "text-sm", "font-medium", "rounded-lg", "border", "transition-all", 3, "class"], [1, "text-sm", "text-gray-400"], [1, "text-white", "font-medium"], [1, "space-y-4"], [1, "px-4", "py-2", "text-sm", "font-medium", "rounded-lg", "border", "transition-all", 3, "click"], [1, "h-32", "bg-gray-800", "rounded-xl", "animate-pulse"], [1, "bg-gray-900", "border", "border-gray-700/60", "rounded-xl", "p-5", "hover:border-gray-600", "transition-all"], [1, "text-center", "py-12"], [1, "flex", "items-center", "justify-between", "pt-4", "border-t", "border-gray-800"], [1, "flex", "flex-col", "lg:flex-row", "lg:items-start", "lg:justify-between", "gap-4"], [1, "flex-1", "space-y-4"], [1, "flex", "items-center", "gap-3", "flex-wrap"], [1, "text-white", "font-mono", "font-semibold", "text-sm", "bg-blue-500/15", "px-2.5", "py-1", "rounded-md"], [1, "text-gray-500"], [1, "text-white", "text-sm"], [1, "text-blue-400", "font-mono", "font-semibold"], [1, "px-2.5", "py-1", "rounded-full", "text-xs", "font-semibold", 3, "ngClass"], [1, "grid", "grid-cols-1", "sm:grid-cols-2", "lg:grid-cols-4", "gap-4"], [1, "bg-gray-800/60", "rounded-lg", "p-3"], [1, "text-xs", "text-gray-400", "mb-1", "font-medium", "uppercase", "tracking-wide"], [1, "text-sm", "text-white", "font-semibold"], [1, "text-xs", "text-gray-400", "mt-0.5"], [1, "text-sm", "text-white", "font-medium"], [1, "text-lg", "text-orange-400", "font-bold"], [1, "bg-gray-800", "rounded-lg", "p-3.5", "border", "border-gray-700/50"], [1, "text-xs", "text-gray-400"], [1, "flex", "flex-row", "lg:flex-col", "gap-2", "shrink-0"], [1, "px-4", "py-2", "text-xs", "text-gray-400", "bg-gray-800", "rounded-lg", "text-center", "font-medium", "border", "border-gray-700/50"], [1, "text-xs", "text-gray-400", "mb-1.5", "font-medium", "uppercase", "tracking-wide"], [1, "text-sm", "text-gray-200", "leading-relaxed"], [1, "flex", "items-center", "justify-center", "px-4", "py-2"], ["fill", "none", "viewBox", "0 0 24 24", 1, "animate-spin", "w-5", "h-5", "text-gray-400"], ["cx", "12", "cy", "12", "r", "10", "stroke", "currentColor", "stroke-width", "4", 1, "opacity-25"], ["fill", "currentColor", "d", "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z", 1, "opacity-75"], [1, "flex", "items-center", "gap-1.5", "px-4", "py-2.5", "bg-green-600/20", "text-green-400", "border", "border-green-500/30", "rounded-lg", "text-sm", "font-semibold", "hover:bg-green-600/30", "transition-all", 3, "click"], ["fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", 1, "w-4", "h-4"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M5 13l4 4L19 7"], [1, "flex", "items-center", "gap-1.5", "px-4", "py-2.5", "bg-red-600/20", "text-red-400", "border", "border-red-500/30", "rounded-lg", "text-sm", "font-semibold", "hover:bg-red-600/30", "transition-all", 3, "click"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M6 18L18 6M6 6l12 12"], ["fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", 1, "mx-auto", "h-12", "w-12", "text-gray-600"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "1.5", "d", "M9 14l6-6m-5.5.5h.01m4.99 5h.01M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16l3.5-2 3.5 2 3.5-2 3.5 2z"], [1, "mt-3", "text-gray-400"], [1, "px-4", "py-2", "text-sm", "bg-gray-800", "text-gray-300", "rounded-lg", "border", "border-gray-700", "hover:bg-gray-700", "disabled:opacity-40", "disabled:cursor-not-allowed", "transition-all", 3, "click", "disabled"]], template: function RefundManagement_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h1", 2);
      \u0275\u0275text(4, "\u0130ade Y\xF6netimi");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "p", 3);
      \u0275\u0275text(6, "Anla\u015Fmazl\u0131k durumunda admin son karar mercidir");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "div", 4);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(8, "svg", 5);
      \u0275\u0275element(9, "path", 6);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(10, "span", 7);
      \u0275\u0275text(11, "Kararlar audit log'a kaydedilir");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(12, "div", 8);
      \u0275\u0275repeaterCreate(13, RefundManagement_For_14_Template, 2, 3, "button", 9, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "div", 10);
      \u0275\u0275text(16, " Toplam ");
      \u0275\u0275elementStart(17, "span", 11);
      \u0275\u0275text(18);
      \u0275\u0275elementEnd();
      \u0275\u0275text(19, " iade talebi ");
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(20, RefundManagement_Conditional_20_Template, 3, 1, "div", 12)(21, RefundManagement_Conditional_21_Template, 5, 2);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(13);
      \u0275\u0275repeater(ctx.statusOptions);
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(ctx.totalElements());
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.isLoading() ? 20 : 21);
    }
  }, dependencies: [CommonModule, NgClass, FormsModule, DecimalPipe, DatePipe], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RefundManagement, [{
    type: Component,
    args: [{ selector: "app-refund-management", standalone: true, imports: [CommonModule, FormsModule], template: `<div class="p-6 space-y-6">
  <!-- Header -->
  <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
    <div>
      <h1 class="text-2xl font-bold text-white">\u0130ade Y\xF6netimi</h1>
      <p class="text-gray-400 text-sm mt-1">Anla\u015Fmazl\u0131k durumunda admin son karar mercidir</p>
    </div>
    <div class="flex items-center gap-2 px-3 py-1.5 bg-yellow-500/10 border border-yellow-500/20 rounded-lg">
      <svg class="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clip-rule="evenodd"/></svg>
      <span class="text-xs text-yellow-400 font-medium">Kararlar audit log'a kaydedilir</span>
    </div>
  </div>

  <!-- Status Filter -->
  <div class="flex gap-2">
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

  <!-- Total Count -->
  <div class="text-sm text-gray-400">
    Toplam <span class="text-white font-medium">{{ totalElements() }}</span> iade talebi
  </div>

  <!-- Loading -->
  @if (isLoading()) {
    <div class="space-y-4">
      @for (i of [1,2,3]; track i) {
        <div class="h-32 bg-gray-800 rounded-xl animate-pulse"></div>
      }
    </div>
  } @else {
    <!-- Refund Cards -->
    <div class="space-y-4">
      @for (refund of refunds(); track refund.id) {
        <div class="bg-gray-900 border border-gray-700/60 rounded-xl p-5 hover:border-gray-600 transition-all">
          <div class="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
            <!-- Left: Info -->
            <div class="flex-1 space-y-4">
              <!-- Header Row -->
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
                <!-- M\xFC\u015Fteri -->
                <div class="bg-gray-800/60 rounded-lg p-3">
                  <div class="text-xs text-gray-400 mb-1 font-medium uppercase tracking-wide">M\xFC\u015Fteri</div>
                  <div class="text-sm text-white font-semibold">{{ refund.userName }}</div>
                  <div class="text-xs text-gray-400 mt-0.5">{{ refund.userEmail }}</div>
                </div>
                <!-- Ma\u011Faza -->
                <div class="bg-gray-800/60 rounded-lg p-3">
                  <div class="text-xs text-gray-400 mb-1 font-medium uppercase tracking-wide">Ma\u011Faza</div>
                  <div class="text-sm text-white font-medium">{{ refund.storeName }}</div>
                </div>
                <!-- \xDCr\xFCn -->
                <div class="bg-gray-800/60 rounded-lg p-3">
                  <div class="text-xs text-gray-400 mb-1 font-medium uppercase tracking-wide">\xDCr\xFCn</div>
                  <div class="text-sm text-white font-medium">{{ refund.productName }}</div>
                </div>
                <!-- Tutar -->
                <div class="bg-gray-800/60 rounded-lg p-3">
                  <div class="text-xs text-gray-400 mb-1 font-medium uppercase tracking-wide">\u0130ade Tutar\u0131</div>
                  <div class="text-lg text-orange-400 font-bold">\${{ refund.refundAmount | number:'1.2-2' }}</div>
                </div>
              </div>

              <!-- Sebep -->
              @if (refund.reason) {
                <div class="bg-gray-800 rounded-lg p-3.5 border border-gray-700/50">
                  <div class="text-xs text-gray-400 mb-1.5 font-medium uppercase tracking-wide">\u0130ade Sebebi</div>
                  <p class="text-sm text-gray-200 leading-relaxed">{{ refund.reason }}</p>
                </div>
              }

              <!-- Tarih -->
              <div class="text-xs text-gray-400">
                \u{1F4C5} {{ refund.processedAt | date:'dd MMM yyyy, HH:mm' }}
              </div>
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

    <!-- Empty State -->
    @if (refunds().length === 0) {
      <div class="text-center py-12">
        <svg class="mx-auto h-12 w-12 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 14l6-6m-5.5.5h.01m4.99 5h.01M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16l3.5-2 3.5 2 3.5-2 3.5 2z"/>
        </svg>
        <p class="mt-3 text-gray-400">\u0130ade talebi bulunamad\u0131</p>
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RefundManagement, { className: "RefundManagement", filePath: "app/features/admin/refunds/refund-management.ts", lineNumber: 12 });
})();
export {
  RefundManagement
};
//# sourceMappingURL=chunk-JLZCGV6J.js.map
