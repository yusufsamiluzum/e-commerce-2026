import {
  AdminService
} from "./chunk-ZMDBUR24.js";
import {
  toSignal
} from "./chunk-XHSYZCYO.js";
import {
  CommonModule,
  Component,
  DecimalPipe,
  catchError,
  inject,
  of,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdomElement,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵpureFunction0,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵstyleProp,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-OBD62CNA.js";
import "./chunk-H2SRQSE4.js";

// src/app/features/admin/analytics/platform-analytics.ts
var _c0 = () => [1, 2, 3];
var _forTrack0 = ($index, $item) => $item.id;
function PlatformAnalytics_Conditional_7_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 6);
    \u0275\u0275domElement(1, "div", 7)(2, "div", 8);
    \u0275\u0275domElementEnd();
  }
}
function PlatformAnalytics_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 5);
    \u0275\u0275repeaterCreate(1, PlatformAnalytics_Conditional_7_For_2_Template, 3, 0, "div", 6, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275repeater(\u0275\u0275pureFunction0(0, _c0));
  }
}
function PlatformAnalytics_Conditional_8_For_23_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "span", 37);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "number");
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const store_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("$", \u0275\u0275pipeBind2(2, 1, store_r1.totalRevenue, "1.0-0"));
  }
}
function PlatformAnalytics_Conditional_8_For_23_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "span", 38);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "number");
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const store_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("$", \u0275\u0275pipeBind2(2, 1, store_r1.totalRevenue, "1.0-0"));
  }
}
function PlatformAnalytics_Conditional_8_For_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 20)(1, "div", 31)(2, "p", 32);
    \u0275\u0275text(3);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(4, "p", 33);
    \u0275\u0275text(5);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(6, "div", 34)(7, "div", 35)(8, "div", 36);
    \u0275\u0275conditionalCreate(9, PlatformAnalytics_Conditional_8_For_23_Conditional_9_Template, 3, 4, "span", 37);
    \u0275\u0275domElementEnd()();
    \u0275\u0275conditionalCreate(10, PlatformAnalytics_Conditional_8_For_23_Conditional_10_Template, 3, 4, "span", 38);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const store_r1 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(store_r1.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(store_r1.ownerName);
    \u0275\u0275advance(3);
    \u0275\u0275styleProp("width", ctx_r1.getRevenueBarWidth(store_r1), "%");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.getRevenueBarWidth(store_r1) > 20 ? 9 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.getRevenueBarWidth(store_r1) <= 20 ? 10 : -1);
  }
}
function PlatformAnalytics_Conditional_8_For_29_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "span", 37);
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const store_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(store_r3.totalOrders);
  }
}
function PlatformAnalytics_Conditional_8_For_29_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "span", 38);
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const store_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(store_r3.totalOrders);
  }
}
function PlatformAnalytics_Conditional_8_For_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 20)(1, "div", 31)(2, "p", 32);
    \u0275\u0275text(3);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(4, "div", 34)(5, "div", 35)(6, "div", 39);
    \u0275\u0275conditionalCreate(7, PlatformAnalytics_Conditional_8_For_29_Conditional_7_Template, 2, 1, "span", 37);
    \u0275\u0275domElementEnd()();
    \u0275\u0275conditionalCreate(8, PlatformAnalytics_Conditional_8_For_29_Conditional_8_Template, 2, 1, "span", 38);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const store_r3 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(store_r3.name);
    \u0275\u0275advance(3);
    \u0275\u0275styleProp("width", ctx_r1.getOrdersBarWidth(store_r3), "%");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.getOrdersBarWidth(store_r3) > 20 ? 7 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.getOrdersBarWidth(store_r3) <= 20 ? 8 : -1);
  }
}
function PlatformAnalytics_Conditional_8_For_52_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "tr", 30)(1, "td", 40)(2, "p", 41);
    \u0275\u0275text(3);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(4, "p", 42);
    \u0275\u0275text(5);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(6, "td", 43);
    \u0275\u0275text(7);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(8, "td", 43);
    \u0275\u0275text(9);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(10, "td", 44);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "number");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(13, "td", 45)(14, "span", 46);
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "number");
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(17, "td", 47)(18, "span", 48);
    \u0275\u0275domElement(19, "span", 49);
    \u0275\u0275text(20);
    \u0275\u0275domElementEnd()()();
  }
  if (rf & 2) {
    const store_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(store_r4.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(store_r4.ownerName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(store_r4.totalProducts);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(store_r4.totalOrders);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("$", \u0275\u0275pipeBind2(12, 13, store_r4.totalRevenue, "1.2-2"));
    \u0275\u0275advance(3);
    \u0275\u0275classMap(ctx_r1.getRatingColor(store_r4.averageRating));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(16, 16, store_r4.averageRating, "1.1-1"), " \u2605 ");
    \u0275\u0275advance(3);
    \u0275\u0275classMap(store_r4.status === "ACTIVE" ? "bg-green-500/10 text-green-400" : "bg-orange-500/10 text-orange-400");
    \u0275\u0275advance();
    \u0275\u0275classMap(store_r4.status === "ACTIVE" ? "bg-green-400" : "bg-orange-400");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", store_r4.status, " ");
  }
}
function PlatformAnalytics_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 9)(1, "div", 10)(2, "p", 11);
    \u0275\u0275text(3, "Platform Toplam Gelir");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(4, "p", 12);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "number");
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(7, "div", 13)(8, "p", 14);
    \u0275\u0275text(9, "Platform Toplam Sipari\u015F");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(10, "p", 12);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "number");
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(13, "div", 15)(14, "p", 16);
    \u0275\u0275text(15, "Aktif Ma\u011Faza Say\u0131s\u0131");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(16, "p", 12);
    \u0275\u0275text(17);
    \u0275\u0275domElementEnd()()();
    \u0275\u0275domElementStart(18, "div", 17)(19, "h2", 18);
    \u0275\u0275text(20, "Gelir Kar\u015F\u0131la\u015Ft\u0131rmas\u0131");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(21, "div", 19);
    \u0275\u0275repeaterCreate(22, PlatformAnalytics_Conditional_8_For_23_Template, 11, 6, "div", 20, _forTrack0);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(24, "div", 17)(25, "h2", 18);
    \u0275\u0275text(26, "Sipari\u015F Kar\u015F\u0131la\u015Ft\u0131rmas\u0131");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(27, "div", 19);
    \u0275\u0275repeaterCreate(28, PlatformAnalytics_Conditional_8_For_29_Template, 9, 5, "div", 20, _forTrack0);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(30, "div", 21)(31, "div", 22)(32, "h2", 23);
    \u0275\u0275text(33, "Ma\u011Faza Performans Tablosu");
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(34, "div", 24)(35, "table", 25)(36, "thead")(37, "tr", 26)(38, "th", 27);
    \u0275\u0275text(39, "Ma\u011Faza");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(40, "th", 28);
    \u0275\u0275text(41, "\xDCr\xFCn");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(42, "th", 28);
    \u0275\u0275text(43, "Sipari\u015F");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(44, "th", 28);
    \u0275\u0275text(45, "Gelir");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(46, "th", 28);
    \u0275\u0275text(47, "Ort. Puan");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(48, "th", 29);
    \u0275\u0275text(49, "Durum");
    \u0275\u0275domElementEnd()()();
    \u0275\u0275domElementStart(50, "tbody");
    \u0275\u0275repeaterCreate(51, PlatformAnalytics_Conditional_8_For_52_Template, 21, 19, "tr", 30, _forTrack0);
    \u0275\u0275domElementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("$", \u0275\u0275pipeBind2(6, 3, ctx_r1.dashboard().totalRevenue, "1.2-2"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(12, 6, ctx_r1.dashboard().totalOrders));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r1.dashboard().activeStores);
    \u0275\u0275advance(5);
    \u0275\u0275repeater(ctx_r1.stores());
    \u0275\u0275advance(6);
    \u0275\u0275repeater(ctx_r1.stores());
    \u0275\u0275advance(23);
    \u0275\u0275repeater(ctx_r1.stores());
  }
}
var PlatformAnalytics = class _PlatformAnalytics {
  adminService = inject(AdminService);
  stores = toSignal(this.adminService.getStoreComparison().pipe(catchError(() => of(null))), { initialValue: null });
  dashboard = toSignal(this.adminService.getDashboard().pipe(catchError(() => of(null))), { initialValue: null });
  getRevenueBarWidth(store) {
    const storesData = this.stores();
    if (!storesData || storesData.length === 0)
      return 0;
    const maxRevenue = Math.max(...storesData.map((s) => s.totalRevenue));
    return maxRevenue > 0 ? store.totalRevenue / maxRevenue * 100 : 0;
  }
  getOrdersBarWidth(store) {
    const storesData = this.stores();
    if (!storesData || storesData.length === 0)
      return 0;
    const maxOrders = Math.max(...storesData.map((s) => s.totalOrders));
    return maxOrders > 0 ? store.totalOrders / maxOrders * 100 : 0;
  }
  getRatingColor(rating) {
    if (rating >= 4)
      return "text-green-400";
    if (rating >= 3)
      return "text-yellow-400";
    return "text-red-400";
  }
  static \u0275fac = function PlatformAnalytics_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PlatformAnalytics)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PlatformAnalytics, selectors: [["app-platform-analytics"]], decls: 9, vars: 2, consts: [[1, "min-h-screen", "bg-gray-950", "text-white"], [1, "container", "mx-auto", "px-4", "py-8"], [1, "mb-8"], [1, "text-3xl", "font-bold", "tracking-tight"], [1, "text-gray-400", "mt-1"], [1, "space-y-5"], [1, "bg-gray-900", "border", "border-gray-800", "rounded-xl", "p-6", "animate-pulse"], [1, "h-5", "bg-gray-800", "rounded", "w-40", "mb-4"], [1, "h-32", "bg-gray-800", "rounded"], [1, "grid", "grid-cols-1", "sm:grid-cols-3", "gap-5", "mb-8"], [1, "bg-gradient-to-br", "from-emerald-950/50", "to-gray-900", "border", "border-emerald-800/30", "rounded-xl", "p-5"], [1, "text-xs", "font-semibold", "text-emerald-400", "uppercase", "tracking-wider", "mb-1"], [1, "text-3xl", "font-bold", "text-white"], [1, "bg-gradient-to-br", "from-blue-950/50", "to-gray-900", "border", "border-blue-800/30", "rounded-xl", "p-5"], [1, "text-xs", "font-semibold", "text-blue-400", "uppercase", "tracking-wider", "mb-1"], [1, "bg-gradient-to-br", "from-violet-950/50", "to-gray-900", "border", "border-violet-800/30", "rounded-xl", "p-5"], [1, "text-xs", "font-semibold", "text-violet-400", "uppercase", "tracking-wider", "mb-1"], [1, "bg-gray-900", "border", "border-gray-800", "rounded-xl", "p-6", "mb-6"], [1, "text-lg", "font-semibold", "text-gray-200", "mb-5"], [1, "space-y-4"], [1, "flex", "items-center", "gap-4"], [1, "bg-gray-900", "border", "border-gray-800", "rounded-xl", "overflow-hidden"], [1, "px-6", "py-4", "border-b", "border-gray-800"], [1, "text-lg", "font-semibold", "text-gray-200"], [1, "overflow-x-auto"], [1, "w-full", "text-sm"], [1, "border-b", "border-gray-800", "text-xs", "text-gray-500", "uppercase", "tracking-wider"], [1, "text-left", "px-6", "py-3", "font-medium"], [1, "text-right", "px-6", "py-3", "font-medium"], [1, "text-center", "px-6", "py-3", "font-medium"], [1, "border-b", "border-gray-800/50", "hover:bg-gray-800/30", "transition-colors"], [1, "w-36", "flex-shrink-0"], [1, "text-sm", "font-medium", "text-white", "truncate"], [1, "text-[10px]", "text-gray-500"], [1, "flex-1", "relative"], [1, "h-8", "bg-gray-800", "rounded-lg", "overflow-hidden"], [1, "h-full", "bg-gradient-to-r", "from-emerald-600", "to-emerald-500", "rounded-lg", "transition-all", "duration-700", "ease-out", "flex", "items-center", "justify-end", "pr-3"], [1, "text-xs", "font-bold", "text-white"], [1, "absolute", "right-0", "top-1/2", "-translate-y-1/2", "text-xs", "text-gray-400", "pl-2"], [1, "h-full", "bg-gradient-to-r", "from-blue-600", "to-blue-500", "rounded-lg", "transition-all", "duration-700", "ease-out", "flex", "items-center", "justify-end", "pr-3"], [1, "px-6", "py-4"], [1, "font-medium", "text-white"], [1, "text-xs", "text-gray-500"], [1, "px-6", "py-4", "text-right", "text-gray-300"], [1, "px-6", "py-4", "text-right", "font-medium", "text-emerald-400"], [1, "px-6", "py-4", "text-right"], [1, "font-medium"], [1, "px-6", "py-4", "text-center"], [1, "inline-flex", "items-center", "gap-1", "px-2", "py-0.5", "rounded-full", "text-xs", "font-medium"], [1, "h-1.5", "w-1.5", "rounded-full"]], template: function PlatformAnalytics_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h1", 3);
      \u0275\u0275text(4, "Platform Analiti\u011Fi");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(5, "p", 4);
      \u0275\u0275text(6, "Cross-Store kar\u015F\u0131la\u015Ft\u0131rma raporlar\u0131 ve b\xFCy\xFCme metrikleri");
      \u0275\u0275domElementEnd()();
      \u0275\u0275conditionalCreate(7, PlatformAnalytics_Conditional_7_Template, 3, 1, "div", 5);
      \u0275\u0275conditionalCreate(8, PlatformAnalytics_Conditional_8_Template, 53, 8);
      \u0275\u0275domElementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(7);
      \u0275\u0275conditional(ctx.stores() === null || ctx.dashboard() === null ? 7 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.stores() !== null && ctx.dashboard() !== null ? 8 : -1);
    }
  }, dependencies: [CommonModule, DecimalPipe], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PlatformAnalytics, [{
    type: Component,
    args: [{ selector: "app-platform-analytics", standalone: true, imports: [CommonModule], template: `<div class="min-h-screen bg-gray-950 text-white">
  <div class="container mx-auto px-4 py-8">

    <div class="mb-8">
      <h1 class="text-3xl font-bold tracking-tight">Platform Analiti\u011Fi</h1>
      <p class="text-gray-400 mt-1">Cross-Store kar\u015F\u0131la\u015Ft\u0131rma raporlar\u0131 ve b\xFCy\xFCme metrikleri</p>
    </div>

    <!-- Skeleton -->
    @if (stores() === null || dashboard() === null) {
      <div class="space-y-5">
        @for (i of [1,2,3]; track i) {
          <div class="bg-gray-900 border border-gray-800 rounded-xl p-6 animate-pulse">
            <div class="h-5 bg-gray-800 rounded w-40 mb-4"></div>
            <div class="h-32 bg-gray-800 rounded"></div>
          </div>
        }
      </div>
    }

    @if (stores() !== null && dashboard() !== null) {
      <!-- Platform \xD6zeti -->
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-8">
        <div class="bg-gradient-to-br from-emerald-950/50 to-gray-900 border border-emerald-800/30 rounded-xl p-5">
          <p class="text-xs font-semibold text-emerald-400 uppercase tracking-wider mb-1">Platform Toplam Gelir</p>
          <p class="text-3xl font-bold text-white">\${{ dashboard()!.totalRevenue | number:'1.2-2' }}</p>
        </div>
        <div class="bg-gradient-to-br from-blue-950/50 to-gray-900 border border-blue-800/30 rounded-xl p-5">
          <p class="text-xs font-semibold text-blue-400 uppercase tracking-wider mb-1">Platform Toplam Sipari\u015F</p>
          <p class="text-3xl font-bold text-white">{{ dashboard()!.totalOrders | number }}</p>
        </div>
        <div class="bg-gradient-to-br from-violet-950/50 to-gray-900 border border-violet-800/30 rounded-xl p-5">
          <p class="text-xs font-semibold text-violet-400 uppercase tracking-wider mb-1">Aktif Ma\u011Faza Say\u0131s\u0131</p>
          <p class="text-3xl font-bold text-white">{{ dashboard()!.activeStores }}</p>
        </div>
      </div>

      <!-- Cross-Store Gelir Kar\u015F\u0131la\u015Ft\u0131rmas\u0131 -->
      <div class="bg-gray-900 border border-gray-800 rounded-xl p-6 mb-6">
        <h2 class="text-lg font-semibold text-gray-200 mb-5">Gelir Kar\u015F\u0131la\u015Ft\u0131rmas\u0131</h2>
        <div class="space-y-4">
          @for (store of stores(); track store.id) {
            <div class="flex items-center gap-4">
              <div class="w-36 flex-shrink-0">
                <p class="text-sm font-medium text-white truncate">{{ store.name }}</p>
                <p class="text-[10px] text-gray-500">{{ store.ownerName }}</p>
              </div>
              <div class="flex-1 relative">
                <div class="h-8 bg-gray-800 rounded-lg overflow-hidden">
                  <div class="h-full bg-gradient-to-r from-emerald-600 to-emerald-500 rounded-lg transition-all duration-700 ease-out flex items-center justify-end pr-3"
                       [style.width.%]="getRevenueBarWidth(store)">
                    @if (getRevenueBarWidth(store) > 20) {
                      <span class="text-xs font-bold text-white">\${{ store.totalRevenue | number:'1.0-0' }}</span>
                    }
                  </div>
                </div>
                @if (getRevenueBarWidth(store) <= 20) {
                  <span class="absolute right-0 top-1/2 -translate-y-1/2 text-xs text-gray-400 pl-2">\${{ store.totalRevenue | number:'1.0-0' }}</span>
                }
              </div>
            </div>
          }
        </div>
      </div>

      <!-- Cross-Store Sipari\u015F Kar\u015F\u0131la\u015Ft\u0131rmas\u0131 -->
      <div class="bg-gray-900 border border-gray-800 rounded-xl p-6 mb-6">
        <h2 class="text-lg font-semibold text-gray-200 mb-5">Sipari\u015F Kar\u015F\u0131la\u015Ft\u0131rmas\u0131</h2>
        <div class="space-y-4">
          @for (store of stores(); track store.id) {
            <div class="flex items-center gap-4">
              <div class="w-36 flex-shrink-0">
                <p class="text-sm font-medium text-white truncate">{{ store.name }}</p>
              </div>
              <div class="flex-1 relative">
                <div class="h-8 bg-gray-800 rounded-lg overflow-hidden">
                  <div class="h-full bg-gradient-to-r from-blue-600 to-blue-500 rounded-lg transition-all duration-700 ease-out flex items-center justify-end pr-3"
                       [style.width.%]="getOrdersBarWidth(store)">
                    @if (getOrdersBarWidth(store) > 20) {
                      <span class="text-xs font-bold text-white">{{ store.totalOrders }}</span>
                    }
                  </div>
                </div>
                @if (getOrdersBarWidth(store) <= 20) {
                  <span class="absolute right-0 top-1/2 -translate-y-1/2 text-xs text-gray-400 pl-2">{{ store.totalOrders }}</span>
                }
              </div>
            </div>
          }
        </div>
      </div>

      <!-- Detayl\u0131 Tablo -->
      <div class="bg-gray-900 border border-gray-800 rounded-xl overflow-hidden">
        <div class="px-6 py-4 border-b border-gray-800">
          <h2 class="text-lg font-semibold text-gray-200">Ma\u011Faza Performans Tablosu</h2>
        </div>
        <div class="overflow-x-auto">
          <table class="w-full text-sm">
            <thead>
              <tr class="border-b border-gray-800 text-xs text-gray-500 uppercase tracking-wider">
                <th class="text-left px-6 py-3 font-medium">Ma\u011Faza</th>
                <th class="text-right px-6 py-3 font-medium">\xDCr\xFCn</th>
                <th class="text-right px-6 py-3 font-medium">Sipari\u015F</th>
                <th class="text-right px-6 py-3 font-medium">Gelir</th>
                <th class="text-right px-6 py-3 font-medium">Ort. Puan</th>
                <th class="text-center px-6 py-3 font-medium">Durum</th>
              </tr>
            </thead>
            <tbody>
              @for (store of stores(); track store.id) {
                <tr class="border-b border-gray-800/50 hover:bg-gray-800/30 transition-colors">
                  <td class="px-6 py-4">
                    <p class="font-medium text-white">{{ store.name }}</p>
                    <p class="text-xs text-gray-500">{{ store.ownerName }}</p>
                  </td>
                  <td class="px-6 py-4 text-right text-gray-300">{{ store.totalProducts }}</td>
                  <td class="px-6 py-4 text-right text-gray-300">{{ store.totalOrders }}</td>
                  <td class="px-6 py-4 text-right font-medium text-emerald-400">\${{ store.totalRevenue | number:'1.2-2' }}</td>
                  <td class="px-6 py-4 text-right">
                    <span [class]="getRatingColor(store.averageRating)" class="font-medium">
                      {{ store.averageRating | number:'1.1-1' }} \u2605
                    </span>
                  </td>
                  <td class="px-6 py-4 text-center">
                    <span class="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium"
                          [class]="store.status === 'ACTIVE' ? 'bg-green-500/10 text-green-400' : 'bg-orange-500/10 text-orange-400'">
                      <span class="h-1.5 w-1.5 rounded-full" [class]="store.status === 'ACTIVE' ? 'bg-green-400' : 'bg-orange-400'"></span>
                      {{ store.status }}
                    </span>
                  </td>
                </tr>
              }
            </tbody>
          </table>
        </div>
      </div>
    }
  </div>
</div>
` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PlatformAnalytics, { className: "PlatformAnalytics", filePath: "app/features/admin/analytics/platform-analytics.ts", lineNumber: 13 });
})();
export {
  PlatformAnalytics
};
//# sourceMappingURL=chunk-4JILLPP6.js.map
