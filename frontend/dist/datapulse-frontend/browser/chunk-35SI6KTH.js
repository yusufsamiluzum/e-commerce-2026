import {
  toSignal
} from "./chunk-XHSYZCYO.js";
import {
  CommonModule,
  Component,
  HttpClient,
  Injectable,
  catchError,
  inject,
  map,
  of,
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
  ɵɵnextContext,
  ɵɵpureFunction0,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵstyleProp,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-OBD62CNA.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-H2SRQSE4.js";

// src/app/core/services/analytics.service.ts
var AnalyticsService = class _AnalyticsService {
  http = inject(HttpClient);
  apiUrl = "http://localhost:8080/api/analytics";
  getSpendingAnalysis() {
    return this.http.get(`${this.apiUrl}/spending`);
  }
  static \u0275fac = function AnalyticsService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AnalyticsService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AnalyticsService, factory: _AnalyticsService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AnalyticsService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// src/app/features/individual/profile/spending-analysis/spending-analysis.ts
var _c0 = () => [1, 2, 3, 4];
var _c1 = () => [1, 2, 3, 4, 5];
var _forTrack0 = ($index, $item) => $item.month;
function SpendingAnalysis_Conditional_10_Conditional_53_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 40)(1, "div", 41)(2, "span", 42);
    \u0275\u0275text(3);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(4, "span", 43);
    \u0275\u0275text(5);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(6, "div", 44);
    \u0275\u0275domElement(7, "div", 45);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const monthly_r1 = ctx.$implicit;
    const analysis_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(monthly_r1.month);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("$", monthly_r1.amount.toFixed(2));
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("width", monthly_r1.amount / analysis_r2.maxMonthlyAmount * 100, "%");
  }
}
function SpendingAnalysis_Conditional_10_Conditional_53_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 38);
    \u0275\u0275repeaterCreate(1, SpendingAnalysis_Conditional_10_Conditional_53_For_2_Template, 8, 4, "div", 40, _forTrack0);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const analysis_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(analysis_r2.monthlySpendingArray);
  }
}
function SpendingAnalysis_Conditional_10_Conditional_54_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 39)(1, "div", 46);
    \u0275\u0275domElement(2, "i", 47);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "p", 48);
    \u0275\u0275text(4, "Hen\xFCz bir harcama verisi bulunmuyor.");
    \u0275\u0275domElementEnd()();
  }
}
function SpendingAnalysis_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 6)(1, "div", 7);
    \u0275\u0275domElement(2, "div", 8);
    \u0275\u0275domElementStart(3, "div", 9)(4, "p", 10);
    \u0275\u0275text(5, "Toplam Harcama");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(6, "span", 11);
    \u0275\u0275domElement(7, "i", 12);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(8, "p", 13);
    \u0275\u0275text(9);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(10, "span", 14);
    \u0275\u0275text(11, "Net harcanan miktar");
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(12, "div", 15);
    \u0275\u0275domElement(13, "div", 16);
    \u0275\u0275domElementStart(14, "div", 9)(15, "p", 10);
    \u0275\u0275text(16, "Sipari\u015F Say\u0131s\u0131");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(17, "span", 17);
    \u0275\u0275domElement(18, "i", 18);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(19, "p", 13);
    \u0275\u0275text(20);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(21, "span", 19);
    \u0275\u0275text(22, "Sipari\u015F edilen paketler");
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(23, "div", 20);
    \u0275\u0275domElement(24, "div", 21);
    \u0275\u0275domElementStart(25, "div", 9)(26, "p", 10);
    \u0275\u0275text(27, "\u0130ade Tutar\u0131");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(28, "span", 22);
    \u0275\u0275domElement(29, "i", 23);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(30, "p", 24);
    \u0275\u0275text(31);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(32, "span", 25);
    \u0275\u0275text(33, "Geri al\u0131nan mebla\u011F");
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(34, "div", 26);
    \u0275\u0275domElement(35, "div", 27);
    \u0275\u0275domElementStart(36, "div", 9)(37, "p", 10);
    \u0275\u0275text(38, "Ortalama Sipari\u015F");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(39, "span", 28);
    \u0275\u0275domElement(40, "i", 29);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(41, "p", 13);
    \u0275\u0275text(42);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(43, "span", 30);
    \u0275\u0275text(44, "Sipari\u015F ba\u015F\u0131na tutar");
    \u0275\u0275domElementEnd()()();
    \u0275\u0275domElementStart(45, "div", 31);
    \u0275\u0275domElement(46, "div", 32);
    \u0275\u0275domElementStart(47, "div", 33)(48, "div", 34)(49, "span", 35);
    \u0275\u0275domElement(50, "i", 36);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(51, "h3", 37);
    \u0275\u0275text(52, "Ayl\u0131k Harcama Da\u011F\u0131l\u0131m\u0131");
    \u0275\u0275domElementEnd()();
    \u0275\u0275conditionalCreate(53, SpendingAnalysis_Conditional_10_Conditional_53_Template, 3, 0, "div", 38)(54, SpendingAnalysis_Conditional_10_Conditional_54_Template, 5, 0, "div", 39);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const analysis_r2 = ctx;
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate1("$", analysis_r2.totalSpent.toFixed(2));
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate(analysis_r2.totalOrders);
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate1("$", analysis_r2.totalRefunded.toFixed(2));
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate1("$", analysis_r2.averageOrderValue.toFixed(2));
    \u0275\u0275advance(11);
    \u0275\u0275conditional(analysis_r2.monthlySpendingArray.length > 0 ? 53 : 54);
  }
}
function SpendingAnalysis_Conditional_11_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 49)(1, "div", 54);
    \u0275\u0275domElement(2, "div", 55)(3, "div", 56);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElement(4, "div", 57)(5, "div", 58);
    \u0275\u0275domElementEnd();
  }
}
function SpendingAnalysis_Conditional_11_For_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div")(1, "div", 59);
    \u0275\u0275domElement(2, "div", 60)(3, "div", 61);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElement(4, "div", 62);
    \u0275\u0275domElementEnd();
  }
}
function SpendingAnalysis_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 6);
    \u0275\u0275repeaterCreate(1, SpendingAnalysis_Conditional_11_For_2_Template, 6, 0, "div", 49, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "div", 50)(4, "div", 51);
    \u0275\u0275domElement(5, "div", 52)(6, "div", 53);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(7, "div", 38);
    \u0275\u0275repeaterCreate(8, SpendingAnalysis_Conditional_11_For_9_Template, 5, 0, "div", null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275repeater(\u0275\u0275pureFunction0(0, _c0));
    \u0275\u0275advance(7);
    \u0275\u0275repeater(\u0275\u0275pureFunction0(1, _c1));
  }
}
var SpendingAnalysis = class _SpendingAnalysis {
  analyticsService = inject(AnalyticsService);
  analysis = toSignal(this.analyticsService.getSpendingAnalysis().pipe(map((res) => {
    const monthlyArray = Object.entries(res.monthlySpending || {}).map(([month, amount]) => ({ month, amount }));
    const maxAmount = monthlyArray.length > 0 ? Math.max(...monthlyArray.map((m) => m.amount)) : 0;
    return __spreadProps(__spreadValues({}, res), {
      monthlySpendingArray: monthlyArray,
      maxMonthlyAmount: maxAmount || 1
    });
  }), catchError(() => of(null))), { initialValue: null });
  static \u0275fac = function SpendingAnalysis_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SpendingAnalysis)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SpendingAnalysis, selectors: [["app-spending-analysis"]], decls: 12, vars: 1, consts: [[1, "p-6", "md:p-8", "space-y-8"], [1, "flex", "flex-col", "sm:flex-row", "sm:items-center", "justify-between", "pb-5", "border-b", "border-white/5", "gap-4"], [1, "text-2xl", "font-black", "text-white", "tracking-tight"], [1, "text-gray-500", "text-sm", "mt-1"], [1, "inline-flex", "items-center", "gap-2", "px-4", "py-2.5", "rounded-xl", "text-sm", "font-semibold", "text-gray-300", "border", "border-gray-700/60", "hover:text-white", "hover:border-gray-600", "transition-all", "duration-200", "flex-shrink-0", 2, "background", "rgba(255,255,255,0.03)"], [1, "fas", "fa-file-pdf", "text-red-400"], [1, "grid", "grid-cols-1", "sm:grid-cols-2", "lg:grid-cols-4", "gap-4"], [1, "relative", "rounded-2xl", "border", "border-white/5", "p-5", "overflow-hidden", "group", "hover:border-blue-500/20", "transition-colors", "duration-300", 2, "background", "rgba(255,255,255,0.02)"], [1, "absolute", "top-0", "left-0", "w-full", "h-0.5", 2, "background", "linear-gradient(90deg, #3b82f6, #6366f1)"], [1, "flex", "items-start", "justify-between", "mb-4"], [1, "text-xs", "font-bold", "text-gray-500", "uppercase", "tracking-wider"], [1, "w-9", "h-9", "rounded-xl", "flex", "items-center", "justify-center", "flex-shrink-0", 2, "background", "rgba(59,130,246,0.15)"], [1, "fas", "fa-wallet", "text-blue-400", "text-sm"], [1, "text-3xl", "font-black", "text-white", "mb-3"], [1, "inline-flex", "items-center", "text-xs", "font-semibold", "text-blue-400", "px-2", "py-1", "rounded-lg", 2, "background", "rgba(59,130,246,0.1)"], [1, "relative", "rounded-2xl", "border", "border-white/5", "p-5", "overflow-hidden", "group", "hover:border-indigo-500/20", "transition-colors", "duration-300", 2, "background", "rgba(255,255,255,0.02)"], [1, "absolute", "top-0", "left-0", "w-full", "h-0.5", 2, "background", "linear-gradient(90deg, #6366f1, #8b5cf6)"], [1, "w-9", "h-9", "rounded-xl", "flex", "items-center", "justify-center", "flex-shrink-0", 2, "background", "rgba(99,102,241,0.15)"], [1, "fas", "fa-box-open", "text-indigo-400", "text-sm"], [1, "inline-flex", "items-center", "text-xs", "font-semibold", "text-indigo-400", "px-2", "py-1", "rounded-lg", 2, "background", "rgba(99,102,241,0.1)"], [1, "relative", "rounded-2xl", "border", "border-white/5", "p-5", "overflow-hidden", "group", "hover:border-orange-500/20", "transition-colors", "duration-300", 2, "background", "rgba(255,255,255,0.02)"], [1, "absolute", "top-0", "left-0", "w-full", "h-0.5", 2, "background", "linear-gradient(90deg, #f97316, #ea580c)"], [1, "w-9", "h-9", "rounded-xl", "flex", "items-center", "justify-center", "flex-shrink-0", 2, "background", "rgba(249,115,22,0.15)"], [1, "fas", "fa-undo", "text-orange-400", "text-sm"], [1, "text-3xl", "font-black", "text-orange-400", "mb-3"], [1, "inline-flex", "items-center", "text-xs", "font-semibold", "text-orange-400", "px-2", "py-1", "rounded-lg", 2, "background", "rgba(249,115,22,0.1)"], [1, "relative", "rounded-2xl", "border", "border-white/5", "p-5", "overflow-hidden", "group", "hover:border-emerald-500/20", "transition-colors", "duration-300", 2, "background", "rgba(255,255,255,0.02)"], [1, "absolute", "top-0", "left-0", "w-full", "h-0.5", 2, "background", "linear-gradient(90deg, #10b981, #059669)"], [1, "w-9", "h-9", "rounded-xl", "flex", "items-center", "justify-center", "flex-shrink-0", 2, "background", "rgba(16,185,129,0.15)"], [1, "fas", "fa-chart-line", "text-emerald-400", "text-sm"], [1, "inline-flex", "items-center", "text-xs", "font-semibold", "text-emerald-400", "px-2", "py-1", "rounded-lg", 2, "background", "rgba(16,185,129,0.1)"], [1, "relative", "rounded-2xl", "border", "border-white/5", "overflow-hidden", 2, "background", "rgba(255,255,255,0.02)"], [1, "absolute", "top-0", "left-0", "w-full", "h-0.5", 2, "background", "linear-gradient(90deg, #3b82f6, #6366f1, #8b5cf6)"], [1, "p-6", "md:p-8"], [1, "flex", "items-center", "gap-3", "mb-6"], [1, "w-8", "h-8", "rounded-lg", "flex", "items-center", "justify-center", "flex-shrink-0", 2, "background", "rgba(59,130,246,0.15)"], [1, "fas", "fa-chart-bar", "text-blue-400", "text-sm"], [1, "text-base", "font-bold", "text-white"], [1, "space-y-5"], [1, "flex", "flex-col", "items-center", "justify-center", "py-12", "text-center"], [1, "group"], [1, "flex", "justify-between", "items-baseline", "mb-2"], [1, "text-xs", "font-bold", "text-gray-400", "uppercase", "tracking-wider"], [1, "text-sm", "font-black", "text-white"], [1, "w-full", "rounded-full", "h-2.5", "border", "border-white/5", "overflow-hidden", 2, "background", "rgba(255,255,255,0.04)"], [1, "h-full", "rounded-full", "transition-all", "duration-1000", "ease-out", 2, "background", "linear-gradient(90deg, #3b82f6, #6366f1)"], [1, "w-16", "h-16", "rounded-2xl", "flex", "items-center", "justify-center", "mb-4", 2, "background", "rgba(255,255,255,0.03)"], [1, "fas", "fa-chart-bar", "text-3xl", "text-gray-700"], [1, "text-gray-500", "text-sm"], [1, "rounded-2xl", "border", "border-white/5", "p-5", "animate-pulse", 2, "background", "rgba(255,255,255,0.02)"], [1, "rounded-2xl", "border", "border-white/5", "p-6", "md:p-8", "animate-pulse", 2, "background", "rgba(255,255,255,0.02)"], [1, "flex", "items-center", "gap-3", "mb-7"], [1, "w-8", "h-8", "bg-gray-800", "rounded-lg"], [1, "h-5", "bg-gray-700", "rounded-lg", "w-1/3"], [1, "flex", "justify-between", "items-start", "mb-4"], [1, "h-3", "bg-gray-800", "rounded", "w-1/2"], [1, "w-9", "h-9", "bg-gray-800", "rounded-xl"], [1, "h-8", "bg-gray-700", "rounded-xl", "w-2/3", "mb-4"], [1, "h-6", "bg-gray-800", "rounded-lg", "w-1/2"], [1, "flex", "justify-between", "mb-2"], [1, "h-3", "bg-gray-800", "rounded", "w-14"], [1, "h-3", "bg-gray-700", "rounded", "w-20"], [1, "w-full", "h-2.5", "bg-gray-800", "rounded-full"]], template: function SpendingAnalysis_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h2", 2);
      \u0275\u0275text(4, "Harcama Analizim");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(5, "p", 3);
      \u0275\u0275text(6, "Son 1 y\u0131la ait hesap hareketleri ve istatistikler");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(7, "button", 4);
      \u0275\u0275domElement(8, "i", 5);
      \u0275\u0275text(9, " Ekstre \u0130ndir ");
      \u0275\u0275domElementEnd()();
      \u0275\u0275conditionalCreate(10, SpendingAnalysis_Conditional_10_Template, 55, 5)(11, SpendingAnalysis_Conditional_11_Template, 10, 2);
      \u0275\u0275domElementEnd();
    }
    if (rf & 2) {
      let tmp_0_0;
      \u0275\u0275advance(10);
      \u0275\u0275conditional((tmp_0_0 = ctx.analysis()) ? 10 : 11, tmp_0_0);
    }
  }, dependencies: [CommonModule], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SpendingAnalysis, [{
    type: Component,
    args: [{ selector: "app-spending-analysis", standalone: true, imports: [CommonModule], template: '<div class="p-6 md:p-8 space-y-8">\n\n  <!-- Page Header -->\n  <div class="flex flex-col sm:flex-row sm:items-center justify-between pb-5 border-b border-white/5 gap-4">\n    <div>\n      <h2 class="text-2xl font-black text-white tracking-tight">Harcama Analizim</h2>\n      <p class="text-gray-500 text-sm mt-1">Son 1 y\u0131la ait hesap hareketleri ve istatistikler</p>\n    </div>\n    <button class="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold text-gray-300 border border-gray-700/60 hover:text-white hover:border-gray-600 transition-all duration-200 flex-shrink-0"\n            style="background: rgba(255,255,255,0.03);">\n      <i class="fas fa-file-pdf text-red-400"></i> Ekstre \u0130ndir\n    </button>\n  </div>\n\n  @if (analysis(); as analysis) {\n\n    <!-- \u0130statistik Kartlar\u0131 -->\n    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">\n\n      <!-- Toplam Harcama -->\n      <div class="relative rounded-2xl border border-white/5 p-5 overflow-hidden group hover:border-blue-500/20 transition-colors duration-300"\n           style="background: rgba(255,255,255,0.02);">\n        <div class="absolute top-0 left-0 w-full h-0.5" style="background: linear-gradient(90deg, #3b82f6, #6366f1);"></div>\n        <div class="flex items-start justify-between mb-4">\n          <p class="text-xs font-bold text-gray-500 uppercase tracking-wider">Toplam Harcama</p>\n          <span class="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"\n                style="background: rgba(59,130,246,0.15);">\n            <i class="fas fa-wallet text-blue-400 text-sm"></i>\n          </span>\n        </div>\n        <p class="text-3xl font-black text-white mb-3">${{ analysis.totalSpent.toFixed(2) }}</p>\n        <span class="inline-flex items-center text-xs font-semibold text-blue-400 px-2 py-1 rounded-lg"\n              style="background: rgba(59,130,246,0.1);">Net harcanan miktar</span>\n      </div>\n\n      <!-- Sipari\u015F Say\u0131s\u0131 -->\n      <div class="relative rounded-2xl border border-white/5 p-5 overflow-hidden group hover:border-indigo-500/20 transition-colors duration-300"\n           style="background: rgba(255,255,255,0.02);">\n        <div class="absolute top-0 left-0 w-full h-0.5" style="background: linear-gradient(90deg, #6366f1, #8b5cf6);"></div>\n        <div class="flex items-start justify-between mb-4">\n          <p class="text-xs font-bold text-gray-500 uppercase tracking-wider">Sipari\u015F Say\u0131s\u0131</p>\n          <span class="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"\n                style="background: rgba(99,102,241,0.15);">\n            <i class="fas fa-box-open text-indigo-400 text-sm"></i>\n          </span>\n        </div>\n        <p class="text-3xl font-black text-white mb-3">{{ analysis.totalOrders }}</p>\n        <span class="inline-flex items-center text-xs font-semibold text-indigo-400 px-2 py-1 rounded-lg"\n              style="background: rgba(99,102,241,0.1);">Sipari\u015F edilen paketler</span>\n      </div>\n\n      <!-- \u0130ade Tutar\u0131 -->\n      <div class="relative rounded-2xl border border-white/5 p-5 overflow-hidden group hover:border-orange-500/20 transition-colors duration-300"\n           style="background: rgba(255,255,255,0.02);">\n        <div class="absolute top-0 left-0 w-full h-0.5" style="background: linear-gradient(90deg, #f97316, #ea580c);"></div>\n        <div class="flex items-start justify-between mb-4">\n          <p class="text-xs font-bold text-gray-500 uppercase tracking-wider">\u0130ade Tutar\u0131</p>\n          <span class="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"\n                style="background: rgba(249,115,22,0.15);">\n            <i class="fas fa-undo text-orange-400 text-sm"></i>\n          </span>\n        </div>\n        <p class="text-3xl font-black text-orange-400 mb-3">${{ analysis.totalRefunded.toFixed(2) }}</p>\n        <span class="inline-flex items-center text-xs font-semibold text-orange-400 px-2 py-1 rounded-lg"\n              style="background: rgba(249,115,22,0.1);">Geri al\u0131nan mebla\u011F</span>\n      </div>\n\n      <!-- Ortalama Sipari\u015F -->\n      <div class="relative rounded-2xl border border-white/5 p-5 overflow-hidden group hover:border-emerald-500/20 transition-colors duration-300"\n           style="background: rgba(255,255,255,0.02);">\n        <div class="absolute top-0 left-0 w-full h-0.5" style="background: linear-gradient(90deg, #10b981, #059669);"></div>\n        <div class="flex items-start justify-between mb-4">\n          <p class="text-xs font-bold text-gray-500 uppercase tracking-wider">Ortalama Sipari\u015F</p>\n          <span class="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"\n                style="background: rgba(16,185,129,0.15);">\n            <i class="fas fa-chart-line text-emerald-400 text-sm"></i>\n          </span>\n        </div>\n        <p class="text-3xl font-black text-white mb-3">${{ analysis.averageOrderValue.toFixed(2) }}</p>\n        <span class="inline-flex items-center text-xs font-semibold text-emerald-400 px-2 py-1 rounded-lg"\n              style="background: rgba(16,185,129,0.1);">Sipari\u015F ba\u015F\u0131na tutar</span>\n      </div>\n\n    </div>\n\n    <!-- Ayl\u0131k Da\u011F\u0131l\u0131m Bar Chart -->\n    <div class="relative rounded-2xl border border-white/5 overflow-hidden"\n         style="background: rgba(255,255,255,0.02);">\n      <div class="absolute top-0 left-0 w-full h-0.5"\n           style="background: linear-gradient(90deg, #3b82f6, #6366f1, #8b5cf6);"></div>\n\n      <div class="p-6 md:p-8">\n        <div class="flex items-center gap-3 mb-6">\n          <span class="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"\n                style="background: rgba(59,130,246,0.15);">\n            <i class="fas fa-chart-bar text-blue-400 text-sm"></i>\n          </span>\n          <h3 class="text-base font-bold text-white">Ayl\u0131k Harcama Da\u011F\u0131l\u0131m\u0131</h3>\n        </div>\n\n        @if (analysis.monthlySpendingArray.length > 0) {\n          <div class="space-y-5">\n            @for (monthly of analysis.monthlySpendingArray; track monthly.month) {\n              <div class="group">\n                <div class="flex justify-between items-baseline mb-2">\n                  <span class="text-xs font-bold text-gray-400 uppercase tracking-wider">{{ monthly.month }}</span>\n                  <span class="text-sm font-black text-white">${{ monthly.amount.toFixed(2) }}</span>\n                </div>\n                <div class="w-full rounded-full h-2.5 border border-white/5 overflow-hidden"\n                     style="background: rgba(255,255,255,0.04);">\n                  <div class="h-full rounded-full transition-all duration-1000 ease-out"\n                       style="background: linear-gradient(90deg, #3b82f6, #6366f1);"\n                       [style.width.%]="(monthly.amount / analysis.maxMonthlyAmount) * 100">\n                  </div>\n                </div>\n              </div>\n            }\n          </div>\n        } @else {\n          <div class="flex flex-col items-center justify-center py-12 text-center">\n            <div class="w-16 h-16 rounded-2xl flex items-center justify-center mb-4"\n                 style="background: rgba(255,255,255,0.03);">\n              <i class="fas fa-chart-bar text-3xl text-gray-700"></i>\n            </div>\n            <p class="text-gray-500 text-sm">Hen\xFCz bir harcama verisi bulunmuyor.</p>\n          </div>\n        }\n      </div>\n    </div>\n\n  } @else {\n    <!-- Skeleton Loader -->\n    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">\n      @for (i of [1, 2, 3, 4]; track i) {\n        <div class="rounded-2xl border border-white/5 p-5 animate-pulse" style="background: rgba(255,255,255,0.02);">\n          <div class="flex justify-between items-start mb-4">\n            <div class="h-3 bg-gray-800 rounded w-1/2"></div>\n            <div class="w-9 h-9 bg-gray-800 rounded-xl"></div>\n          </div>\n          <div class="h-8 bg-gray-700 rounded-xl w-2/3 mb-4"></div>\n          <div class="h-6 bg-gray-800 rounded-lg w-1/2"></div>\n        </div>\n      }\n    </div>\n\n    <div class="rounded-2xl border border-white/5 p-6 md:p-8 animate-pulse" style="background: rgba(255,255,255,0.02);">\n      <div class="flex items-center gap-3 mb-7">\n        <div class="w-8 h-8 bg-gray-800 rounded-lg"></div>\n        <div class="h-5 bg-gray-700 rounded-lg w-1/3"></div>\n      </div>\n      <div class="space-y-5">\n        @for (s of [1, 2, 3, 4, 5]; track s) {\n          <div>\n            <div class="flex justify-between mb-2">\n              <div class="h-3 bg-gray-800 rounded w-14"></div>\n              <div class="h-3 bg-gray-700 rounded w-20"></div>\n            </div>\n            <div class="w-full h-2.5 bg-gray-800 rounded-full"></div>\n          </div>\n        }\n      </div>\n    </div>\n  }\n\n</div>\n' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SpendingAnalysis, { className: "SpendingAnalysis", filePath: "app/features/individual/profile/spending-analysis/spending-analysis.ts", lineNumber: 20 });
})();
export {
  SpendingAnalysis
};
//# sourceMappingURL=chunk-35SI6KTH.js.map
