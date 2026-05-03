import {
  CorporateService
} from "./chunk-XN2NLGPB.js";
import {
  RouterLink,
  RouterModule
} from "./chunk-N6CICK2R.js";
import "./chunk-27YRKIWA.js";
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
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵpureFunction0,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-OBD62CNA.js";
import "./chunk-H2SRQSE4.js";

// src/app/features/corporate/dashboard/dashboard.ts
var _c0 = () => [1, 2, 3, 4, 5, 6, 7, 8];
function CorporateDashboard_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1);
    \u0275\u0275element(1, "div", 4)(2, "div", 5);
    \u0275\u0275elementEnd();
  }
}
function CorporateDashboard_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2)(1, "h1", 6);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 7);
    \u0275\u0275text(4, "Ma\u011Faza kontrol panelinize ho\u015F geldiniz. T\xFCm metrikler tek bak\u0131\u015Fta.");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.store().name);
  }
}
function CorporateDashboard_Conditional_3_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8);
    \u0275\u0275element(1, "div", 9)(2, "div", 10)(3, "div", 11);
    \u0275\u0275elementEnd();
  }
}
function CorporateDashboard_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3);
    \u0275\u0275repeaterCreate(1, CorporateDashboard_Conditional_3_For_2_Template, 4, 0, "div", 8, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275repeater(\u0275\u0275pureFunction0(0, _c0));
  }
}
function CorporateDashboard_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3)(1, "div", 12)(2, "div", 13)(3, "p", 14);
    \u0275\u0275text(4, "Toplam Gelir");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 15);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(6, "svg", 16);
    \u0275\u0275element(7, "path", 17);
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(8, "p", 18);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "p", 19);
    \u0275\u0275text(12, "T\xFCm zamanlar");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 12)(14, "div", 13)(15, "p", 14);
    \u0275\u0275text(16, "Toplam Sipari\u015F");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "div", 20);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(18, "svg", 21);
    \u0275\u0275element(19, "path", 22);
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(20, "p", 18);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "p", 19);
    \u0275\u0275text(23, "T\xFCm zamanlar");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "div", 12)(25, "div", 13)(26, "p", 14);
    \u0275\u0275text(27, "Ort. Sipari\u015F De\u011Feri");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "div", 23);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(29, "svg", 24);
    \u0275\u0275element(30, "path", 25);
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(31, "p", 18);
    \u0275\u0275text(32);
    \u0275\u0275pipe(33, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "p", 19);
    \u0275\u0275text(35, "Ortalama");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(36, "div", 12)(37, "div", 13)(38, "p", 14);
    \u0275\u0275text(39, "Aktif \xDCr\xFCnler");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "div", 26);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(41, "svg", 27);
    \u0275\u0275element(42, "path", 28);
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(43, "p", 18);
    \u0275\u0275text(44);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "p", 19);
    \u0275\u0275text(46, "Katalogda");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(47, "div", 12)(48, "div", 13)(49, "p", 14);
    \u0275\u0275text(50, "D\xFC\u015F\xFCk Stok");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(51, "div", 29);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(52, "svg", 30);
    \u0275\u0275element(53, "path", 31);
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(54, "p", 32);
    \u0275\u0275text(55);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(56, "p", 19);
    \u0275\u0275text(57, "Stok < 10 adet");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(58, "div", 12)(59, "div", 13)(60, "p", 14);
    \u0275\u0275text(61, "Bekleyen");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(62, "div", 15);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(63, "svg", 16);
    \u0275\u0275element(64, "path", 33);
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(65, "p", 32);
    \u0275\u0275text(66);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(67, "p", 19);
    \u0275\u0275text(68, "\u0130\u015Flem bekliyor");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(69, "div", 12)(70, "div", 13)(71, "p", 14);
    \u0275\u0275text(72, "Ort. Puan");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(73, "div", 29);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(74, "svg", 34);
    \u0275\u0275element(75, "path", 35);
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(76, "p", 18);
    \u0275\u0275text(77);
    \u0275\u0275pipe(78, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(79, "p", 19);
    \u0275\u0275text(80);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(81, "div", 12)(82, "div", 13)(83, "p", 14);
    \u0275\u0275text(84, "Toplam Yorum");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(85, "div", 36);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(86, "svg", 37);
    \u0275\u0275element(87, "path", 38);
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(88, "p", 18);
    \u0275\u0275text(89);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(90, "p", 19);
    \u0275\u0275text(91, "M\xFC\u015Fteri yorumu");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(92, "div", 39)(93, "h2", 40);
    \u0275\u0275text(94, "Sipari\u015F Durumu");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(95, "div", 41)(96, "div", 42)(97, "p", 43);
    \u0275\u0275text(98);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(99, "div", 44);
    \u0275\u0275element(100, "span", 45);
    \u0275\u0275elementStart(101, "p", 46);
    \u0275\u0275text(102, "Bekleyen");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(103, "div", 47)(104, "p", 48);
    \u0275\u0275text(105);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(106, "div", 44);
    \u0275\u0275element(107, "span", 49);
    \u0275\u0275elementStart(108, "p", 50);
    \u0275\u0275text(109, "\u0130\u015Fleniyor");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(110, "div", 51)(111, "p", 52);
    \u0275\u0275text(112);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(113, "div", 44);
    \u0275\u0275element(114, "span", 53);
    \u0275\u0275elementStart(115, "p", 54);
    \u0275\u0275text(116, "Kargoda");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(117, "div", 55)(118, "p", 56);
    \u0275\u0275text(119);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(120, "div", 44);
    \u0275\u0275element(121, "span", 57);
    \u0275\u0275elementStart(122, "p", 58);
    \u0275\u0275text(123, "Teslim Edildi");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(124, "div", 59)(125, "p", 60);
    \u0275\u0275text(126);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(127, "div", 44);
    \u0275\u0275element(128, "span", 61);
    \u0275\u0275elementStart(129, "p", 62);
    \u0275\u0275text(130, "\u0130ptal");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(131, "div", 12)(132, "h2", 40);
    \u0275\u0275text(133, "H\u0131zl\u0131 Eri\u015Fim");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(134, "div", 63)(135, "a", 64)(136, "div", 65);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(137, "svg", 66);
    \u0275\u0275element(138, "path", 28);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(139, "div", 67)(140, "p", 68);
    \u0275\u0275text(141, "\xDCr\xFCn Y\xF6netimi");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(142, "p", 69);
    \u0275\u0275text(143, "Ekle, d\xFCzenle, sil");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(144, "a", 70)(145, "div", 71);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(146, "svg", 72);
    \u0275\u0275element(147, "path", 73);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(148, "div", 67)(149, "p", 74);
    \u0275\u0275text(150, "Sipari\u015Fler");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(151, "p", 69);
    \u0275\u0275text(152, "Takip et, g\xFCncelle");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(153, "a", 75)(154, "div", 76);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(155, "svg", 77);
    \u0275\u0275element(156, "path", 78);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(157, "div", 67)(158, "p", 79);
    \u0275\u0275text(159, "Envanter");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(160, "p", 69);
    \u0275\u0275text(161, "Stok seviyelerini y\xF6net");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(162, "a", 80)(163, "div", 81);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(164, "svg", 82);
    \u0275\u0275element(165, "path", 83);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(166, "div", 67)(167, "p", 84);
    \u0275\u0275text(168, "Analitik");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(169, "p", 69);
    \u0275\u0275text(170, "Sat\u0131\u015F ve gelir raporlar\u0131");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate1("$", \u0275\u0275pipeBind2(10, 22, ctx_r0.dashboard().totalRevenue, "1.2-2"));
    \u0275\u0275advance(12);
    \u0275\u0275textInterpolate(ctx_r0.dashboard().totalOrders);
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate1("$", \u0275\u0275pipeBind2(33, 25, ctx_r0.dashboard().averageOrderValue, "1.2-2"));
    \u0275\u0275advance(12);
    \u0275\u0275textInterpolate(ctx_r0.dashboard().activeProducts);
    \u0275\u0275advance(10);
    \u0275\u0275classProp("text-amber-500", ctx_r0.dashboard().lowStockProducts > 0)("text-stone-900", ctx_r0.dashboard().lowStockProducts === 0);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.dashboard().lowStockProducts, " ");
    \u0275\u0275advance(10);
    \u0275\u0275classProp("text-ember-500", ctx_r0.dashboard().pendingOrders > 0)("text-stone-900", ctx_r0.dashboard().pendingOrders === 0);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.dashboard().pendingOrders, " ");
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(78, 28, ctx_r0.dashboard().averageRating, "1.1-1"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", ctx_r0.dashboard().totalReviews, " yorum");
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(ctx_r0.dashboard().totalReviews);
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(ctx_r0.dashboard().pendingOrders);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r0.dashboard().processingOrders);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r0.dashboard().shippedOrders);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r0.dashboard().deliveredOrders);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r0.dashboard().cancelledOrders);
  }
}
var CorporateDashboard = class _CorporateDashboard {
  corporateService = inject(CorporateService);
  dashboard = toSignal(this.corporateService.getDashboard().pipe(catchError(() => of(null))), { initialValue: null });
  store = toSignal(this.corporateService.getMyStore().pipe(catchError(() => of(null))), { initialValue: null });
  static \u0275fac = function CorporateDashboard_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CorporateDashboard)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CorporateDashboard, selectors: [["app-corporate-dashboard"]], decls: 5, vars: 2, consts: [[1, "p-6", "max-w-7xl", "mx-auto"], [1, "animate-pulse", "mb-8"], [1, "mb-8"], [1, "grid", "grid-cols-1", "sm:grid-cols-2", "lg:grid-cols-4", "gap-4", "mb-6"], [1, "h-7", "bg-stone-200", "rounded", "w-56", "mb-2"], [1, "h-4", "bg-stone-100", "rounded", "w-80"], [1, "text-2xl", "font-medium", "text-stone-900", "mb-1"], [1, "text-sm", "text-stone-500"], [1, "bg-white", "rounded-xl", "border", "border-stone-200", "p-5", "animate-pulse"], [1, "h-3", "bg-stone-100", "rounded", "w-24", "mb-4"], [1, "h-7", "bg-stone-100", "rounded", "w-20", "mb-2"], [1, "h-3", "bg-stone-100", "rounded", "w-28"], [1, "bg-white", "rounded-xl", "border", "border-stone-200", "p-5"], [1, "flex", "items-center", "justify-between", "mb-3"], [1, "text-xs", "font-medium", "text-stone-500", "uppercase", "tracking-wider"], [1, "w-8", "h-8", "rounded-lg", "bg-ember-50", "flex", "items-center", "justify-center", "flex-shrink-0"], ["fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", "stroke-width", "1.75", 1, "w-4", "h-4", "text-ember-500"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"], [1, "text-2xl", "font-semibold", "text-stone-900"], [1, "text-xs", "text-stone-400", "mt-1"], [1, "w-8", "h-8", "rounded-lg", "bg-blue-50", "flex", "items-center", "justify-center", "flex-shrink-0"], ["fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", "stroke-width", "1.75", 1, "w-4", "h-4", "text-blue-500"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"], [1, "w-8", "h-8", "rounded-lg", "bg-purple-50", "flex", "items-center", "justify-center", "flex-shrink-0"], ["fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", "stroke-width", "1.75", 1, "w-4", "h-4", "text-purple-500"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"], [1, "w-8", "h-8", "rounded-lg", "bg-lime-50", "flex", "items-center", "justify-center", "flex-shrink-0"], ["fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", "stroke-width", "1.75", 1, "w-4", "h-4", "text-lime-600"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"], [1, "w-8", "h-8", "rounded-lg", "bg-amber-50", "flex", "items-center", "justify-center", "flex-shrink-0"], ["fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", "stroke-width", "1.75", 1, "w-4", "h-4", "text-amber-500"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z"], [1, "text-2xl", "font-semibold"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"], ["fill", "currentColor", "viewBox", "0 0 24 24", 1, "w-4", "h-4", "text-amber-400"], ["d", "M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"], [1, "w-8", "h-8", "rounded-lg", "bg-stone-100", "flex", "items-center", "justify-center", "flex-shrink-0"], ["fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", "stroke-width", "1.75", 1, "w-4", "h-4", "text-stone-500"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"], [1, "bg-white", "rounded-xl", "border", "border-stone-200", "p-5", "mb-6"], [1, "text-base", "font-medium", "text-stone-900", "mb-4"], [1, "grid", "grid-cols-2", "sm:grid-cols-3", "lg:grid-cols-5", "gap-3"], [1, "rounded-lg", "border", "border-stone-100", "bg-amber-50", "p-4", "text-center"], [1, "text-xl", "font-semibold", "text-amber-700"], [1, "flex", "items-center", "justify-center", "gap-1.5", "mt-1"], [1, "w-2", "h-2", "rounded-full", "bg-amber-400", "flex-shrink-0"], [1, "text-xs", "text-amber-600", "font-medium"], [1, "rounded-lg", "border", "border-stone-100", "bg-blue-50", "p-4", "text-center"], [1, "text-xl", "font-semibold", "text-blue-700"], [1, "w-2", "h-2", "rounded-full", "bg-blue-400", "flex-shrink-0"], [1, "text-xs", "text-blue-600", "font-medium"], [1, "rounded-lg", "border", "border-stone-100", "bg-purple-50", "p-4", "text-center"], [1, "text-xl", "font-semibold", "text-purple-700"], [1, "w-2", "h-2", "rounded-full", "bg-purple-400", "flex-shrink-0"], [1, "text-xs", "text-purple-600", "font-medium"], [1, "rounded-lg", "border", "border-stone-100", "bg-lime-50", "p-4", "text-center"], [1, "text-xl", "font-semibold", "text-lime-700"], [1, "w-2", "h-2", "rounded-full", "bg-lime-500", "flex-shrink-0"], [1, "text-xs", "text-lime-600", "font-medium"], [1, "rounded-lg", "border", "border-stone-100", "bg-red-50", "p-4", "text-center"], [1, "text-xl", "font-semibold", "text-red-700"], [1, "w-2", "h-2", "rounded-full", "bg-red-400", "flex-shrink-0"], [1, "text-xs", "text-red-600", "font-medium"], [1, "grid", "grid-cols-1", "sm:grid-cols-2", "lg:grid-cols-4", "gap-3"], ["routerLink", "/corporate/catalog", 1, "flex", "items-center", "gap-3", "p-4", "rounded-lg", "border", "border-stone-200", "hover:border-ember-200", "hover:bg-ember-50", "transition-all", "group"], [1, "w-10", "h-10", "rounded-lg", "bg-ember-50", "group-hover:bg-ember-100", "flex", "items-center", "justify-center", "flex-shrink-0", "transition-colors"], ["fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", "stroke-width", "1.75", 1, "w-5", "h-5", "text-ember-500"], [1, "min-w-0"], [1, "text-sm", "font-medium", "text-stone-800", "group-hover:text-ember-600", "transition-colors"], [1, "text-xs", "text-stone-400", "truncate"], ["routerLink", "/corporate/orders", 1, "flex", "items-center", "gap-3", "p-4", "rounded-lg", "border", "border-stone-200", "hover:border-blue-200", "hover:bg-blue-50", "transition-all", "group"], [1, "w-10", "h-10", "rounded-lg", "bg-blue-50", "group-hover:bg-blue-100", "flex", "items-center", "justify-center", "flex-shrink-0", "transition-colors"], ["fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", "stroke-width", "1.75", 1, "w-5", "h-5", "text-blue-500"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"], [1, "text-sm", "font-medium", "text-stone-800", "group-hover:text-blue-600", "transition-colors"], ["routerLink", "/corporate/inventory", 1, "flex", "items-center", "gap-3", "p-4", "rounded-lg", "border", "border-stone-200", "hover:border-lime-200", "hover:bg-lime-50", "transition-all", "group"], [1, "w-10", "h-10", "rounded-lg", "bg-lime-50", "group-hover:bg-lime-100", "flex", "items-center", "justify-center", "flex-shrink-0", "transition-colors"], ["fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", "stroke-width", "1.75", 1, "w-5", "h-5", "text-lime-600"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4"], [1, "text-sm", "font-medium", "text-stone-800", "group-hover:text-lime-700", "transition-colors"], ["routerLink", "/corporate/analytics", 1, "flex", "items-center", "gap-3", "p-4", "rounded-lg", "border", "border-stone-200", "hover:border-purple-200", "hover:bg-purple-50", "transition-all", "group"], [1, "w-10", "h-10", "rounded-lg", "bg-purple-50", "group-hover:bg-purple-100", "flex", "items-center", "justify-center", "flex-shrink-0", "transition-colors"], ["fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", "stroke-width", "1.75", 1, "w-5", "h-5", "text-purple-500"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"], [1, "text-sm", "font-medium", "text-stone-800", "group-hover:text-purple-600", "transition-colors"]], template: function CorporateDashboard_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275conditionalCreate(1, CorporateDashboard_Conditional_1_Template, 3, 0, "div", 1)(2, CorporateDashboard_Conditional_2_Template, 5, 1, "div", 2);
      \u0275\u0275conditionalCreate(3, CorporateDashboard_Conditional_3_Template, 3, 1, "div", 3)(4, CorporateDashboard_Conditional_4_Template, 171, 31);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.store() === null ? 1 : 2);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.dashboard() === null ? 3 : 4);
    }
  }, dependencies: [CommonModule, RouterModule, RouterLink, DecimalPipe], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CorporateDashboard, [{
    type: Component,
    args: [{ selector: "app-corporate-dashboard", standalone: true, imports: [CommonModule, RouterModule], template: `<div class="p-6 max-w-7xl mx-auto">

  <!-- \u2500\u2500 Sayfa Ba\u015Fl\u0131\u011F\u0131 \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
  @if (store() === null) {
    <div class="animate-pulse mb-8">
      <div class="h-7 bg-stone-200 rounded w-56 mb-2"></div>
      <div class="h-4 bg-stone-100 rounded w-80"></div>
    </div>
  } @else {
    <div class="mb-8">
      <h1 class="text-2xl font-medium text-stone-900 mb-1">{{ store()!.name }}</h1>
      <p class="text-sm text-stone-500">Ma\u011Faza kontrol panelinize ho\u015F geldiniz. T\xFCm metrikler tek bak\u0131\u015Fta.</p>
    </div>
  }

  <!-- \u2500\u2500 KPI Kartlar\u0131 \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
  @if (dashboard() === null) {
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
      @for (i of [1,2,3,4,5,6,7,8]; track i) {
        <div class="bg-white rounded-xl border border-stone-200 p-5 animate-pulse">
          <div class="h-3 bg-stone-100 rounded w-24 mb-4"></div>
          <div class="h-7 bg-stone-100 rounded w-20 mb-2"></div>
          <div class="h-3 bg-stone-100 rounded w-28"></div>
        </div>
      }
    </div>
  } @else {
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">

      <!-- Toplam Gelir -->
      <div class="bg-white rounded-xl border border-stone-200 p-5">
        <div class="flex items-center justify-between mb-3">
          <p class="text-xs font-medium text-stone-500 uppercase tracking-wider">Toplam Gelir</p>
          <div class="w-8 h-8 rounded-lg bg-ember-50 flex items-center justify-center flex-shrink-0">
            <svg class="w-4 h-4 text-ember-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.75">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
          </div>
        </div>
        <p class="text-2xl font-semibold text-stone-900">\${{ dashboard()!.totalRevenue | number:'1.2-2' }}</p>
        <p class="text-xs text-stone-400 mt-1">T\xFCm zamanlar</p>
      </div>

      <!-- Toplam Sipari\u015F -->
      <div class="bg-white rounded-xl border border-stone-200 p-5">
        <div class="flex items-center justify-between mb-3">
          <p class="text-xs font-medium text-stone-500 uppercase tracking-wider">Toplam Sipari\u015F</p>
          <div class="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center flex-shrink-0">
            <svg class="w-4 h-4 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.75">
              <path stroke-linecap="round" stroke-linejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/>
            </svg>
          </div>
        </div>
        <p class="text-2xl font-semibold text-stone-900">{{ dashboard()!.totalOrders }}</p>
        <p class="text-xs text-stone-400 mt-1">T\xFCm zamanlar</p>
      </div>

      <!-- Ort. Sipari\u015F De\u011Feri -->
      <div class="bg-white rounded-xl border border-stone-200 p-5">
        <div class="flex items-center justify-between mb-3">
          <p class="text-xs font-medium text-stone-500 uppercase tracking-wider">Ort. Sipari\u015F De\u011Feri</p>
          <div class="w-8 h-8 rounded-lg bg-purple-50 flex items-center justify-center flex-shrink-0">
            <svg class="w-4 h-4 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.75">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"/>
            </svg>
          </div>
        </div>
        <p class="text-2xl font-semibold text-stone-900">\${{ dashboard()!.averageOrderValue | number:'1.2-2' }}</p>
        <p class="text-xs text-stone-400 mt-1">Ortalama</p>
      </div>

      <!-- Aktif \xDCr\xFCnler -->
      <div class="bg-white rounded-xl border border-stone-200 p-5">
        <div class="flex items-center justify-between mb-3">
          <p class="text-xs font-medium text-stone-500 uppercase tracking-wider">Aktif \xDCr\xFCnler</p>
          <div class="w-8 h-8 rounded-lg bg-lime-50 flex items-center justify-center flex-shrink-0">
            <svg class="w-4 h-4 text-lime-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.75">
              <path stroke-linecap="round" stroke-linejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"/>
            </svg>
          </div>
        </div>
        <p class="text-2xl font-semibold text-stone-900">{{ dashboard()!.activeProducts }}</p>
        <p class="text-xs text-stone-400 mt-1">Katalogda</p>
      </div>

      <!-- D\xFC\u015F\xFCk Stok -->
      <div class="bg-white rounded-xl border border-stone-200 p-5">
        <div class="flex items-center justify-between mb-3">
          <p class="text-xs font-medium text-stone-500 uppercase tracking-wider">D\xFC\u015F\xFCk Stok</p>
          <div class="w-8 h-8 rounded-lg bg-amber-50 flex items-center justify-center flex-shrink-0">
            <svg class="w-4 h-4 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.75">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z"/>
            </svg>
          </div>
        </div>
        <p class="text-2xl font-semibold" [class.text-amber-500]="dashboard()!.lowStockProducts > 0" [class.text-stone-900]="dashboard()!.lowStockProducts === 0">
          {{ dashboard()!.lowStockProducts }}
        </p>
        <p class="text-xs text-stone-400 mt-1">Stok &lt; 10 adet</p>
      </div>

      <!-- Bekleyen Sipari\u015Fler -->
      <div class="bg-white rounded-xl border border-stone-200 p-5">
        <div class="flex items-center justify-between mb-3">
          <p class="text-xs font-medium text-stone-500 uppercase tracking-wider">Bekleyen</p>
          <div class="w-8 h-8 rounded-lg bg-ember-50 flex items-center justify-center flex-shrink-0">
            <svg class="w-4 h-4 text-ember-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.75">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
          </div>
        </div>
        <p class="text-2xl font-semibold" [class.text-ember-500]="dashboard()!.pendingOrders > 0" [class.text-stone-900]="dashboard()!.pendingOrders === 0">
          {{ dashboard()!.pendingOrders }}
        </p>
        <p class="text-xs text-stone-400 mt-1">\u0130\u015Flem bekliyor</p>
      </div>

      <!-- Ort. Puan -->
      <div class="bg-white rounded-xl border border-stone-200 p-5">
        <div class="flex items-center justify-between mb-3">
          <p class="text-xs font-medium text-stone-500 uppercase tracking-wider">Ort. Puan</p>
          <div class="w-8 h-8 rounded-lg bg-amber-50 flex items-center justify-center flex-shrink-0">
            <svg class="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </svg>
          </div>
        </div>
        <p class="text-2xl font-semibold text-stone-900">{{ dashboard()!.averageRating | number:'1.1-1' }}</p>
        <p class="text-xs text-stone-400 mt-1">{{ dashboard()!.totalReviews }} yorum</p>
      </div>

      <!-- Toplam Yorum -->
      <div class="bg-white rounded-xl border border-stone-200 p-5">
        <div class="flex items-center justify-between mb-3">
          <p class="text-xs font-medium text-stone-500 uppercase tracking-wider">Toplam Yorum</p>
          <div class="w-8 h-8 rounded-lg bg-stone-100 flex items-center justify-center flex-shrink-0">
            <svg class="w-4 h-4 text-stone-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.75">
              <path stroke-linecap="round" stroke-linejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
            </svg>
          </div>
        </div>
        <p class="text-2xl font-semibold text-stone-900">{{ dashboard()!.totalReviews }}</p>
        <p class="text-xs text-stone-400 mt-1">M\xFC\u015Fteri yorumu</p>
      </div>

    </div>

    <!-- \u2500\u2500 Sipari\u015F Durumu Da\u011F\u0131l\u0131m\u0131 \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
    <div class="bg-white rounded-xl border border-stone-200 p-5 mb-6">
      <h2 class="text-base font-medium text-stone-900 mb-4">Sipari\u015F Durumu</h2>
      <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">

        <div class="rounded-lg border border-stone-100 bg-amber-50 p-4 text-center">
          <p class="text-xl font-semibold text-amber-700">{{ dashboard()!.pendingOrders }}</p>
          <div class="flex items-center justify-center gap-1.5 mt-1">
            <span class="w-2 h-2 rounded-full bg-amber-400 flex-shrink-0"></span>
            <p class="text-xs text-amber-600 font-medium">Bekleyen</p>
          </div>
        </div>

        <div class="rounded-lg border border-stone-100 bg-blue-50 p-4 text-center">
          <p class="text-xl font-semibold text-blue-700">{{ dashboard()!.processingOrders }}</p>
          <div class="flex items-center justify-center gap-1.5 mt-1">
            <span class="w-2 h-2 rounded-full bg-blue-400 flex-shrink-0"></span>
            <p class="text-xs text-blue-600 font-medium">\u0130\u015Fleniyor</p>
          </div>
        </div>

        <div class="rounded-lg border border-stone-100 bg-purple-50 p-4 text-center">
          <p class="text-xl font-semibold text-purple-700">{{ dashboard()!.shippedOrders }}</p>
          <div class="flex items-center justify-center gap-1.5 mt-1">
            <span class="w-2 h-2 rounded-full bg-purple-400 flex-shrink-0"></span>
            <p class="text-xs text-purple-600 font-medium">Kargoda</p>
          </div>
        </div>

        <div class="rounded-lg border border-stone-100 bg-lime-50 p-4 text-center">
          <p class="text-xl font-semibold text-lime-700">{{ dashboard()!.deliveredOrders }}</p>
          <div class="flex items-center justify-center gap-1.5 mt-1">
            <span class="w-2 h-2 rounded-full bg-lime-500 flex-shrink-0"></span>
            <p class="text-xs text-lime-600 font-medium">Teslim Edildi</p>
          </div>
        </div>

        <div class="rounded-lg border border-stone-100 bg-red-50 p-4 text-center">
          <p class="text-xl font-semibold text-red-700">{{ dashboard()!.cancelledOrders }}</p>
          <div class="flex items-center justify-center gap-1.5 mt-1">
            <span class="w-2 h-2 rounded-full bg-red-400 flex-shrink-0"></span>
            <p class="text-xs text-red-600 font-medium">\u0130ptal</p>
          </div>
        </div>

      </div>
    </div>

    <!-- \u2500\u2500 H\u0131zl\u0131 Eri\u015Fim \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
    <div class="bg-white rounded-xl border border-stone-200 p-5">
      <h2 class="text-base font-medium text-stone-900 mb-4">H\u0131zl\u0131 Eri\u015Fim</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">

        <a routerLink="/corporate/catalog"
          class="flex items-center gap-3 p-4 rounded-lg border border-stone-200 hover:border-ember-200 hover:bg-ember-50 transition-all group">
          <div class="w-10 h-10 rounded-lg bg-ember-50 group-hover:bg-ember-100 flex items-center justify-center flex-shrink-0 transition-colors">
            <svg class="w-5 h-5 text-ember-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.75">
              <path stroke-linecap="round" stroke-linejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"/>
            </svg>
          </div>
          <div class="min-w-0">
            <p class="text-sm font-medium text-stone-800 group-hover:text-ember-600 transition-colors">\xDCr\xFCn Y\xF6netimi</p>
            <p class="text-xs text-stone-400 truncate">Ekle, d\xFCzenle, sil</p>
          </div>
        </a>

        <a routerLink="/corporate/orders"
          class="flex items-center gap-3 p-4 rounded-lg border border-stone-200 hover:border-blue-200 hover:bg-blue-50 transition-all group">
          <div class="w-10 h-10 rounded-lg bg-blue-50 group-hover:bg-blue-100 flex items-center justify-center flex-shrink-0 transition-colors">
            <svg class="w-5 h-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.75">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"/>
            </svg>
          </div>
          <div class="min-w-0">
            <p class="text-sm font-medium text-stone-800 group-hover:text-blue-600 transition-colors">Sipari\u015Fler</p>
            <p class="text-xs text-stone-400 truncate">Takip et, g\xFCncelle</p>
          </div>
        </a>

        <a routerLink="/corporate/inventory"
          class="flex items-center gap-3 p-4 rounded-lg border border-stone-200 hover:border-lime-200 hover:bg-lime-50 transition-all group">
          <div class="w-10 h-10 rounded-lg bg-lime-50 group-hover:bg-lime-100 flex items-center justify-center flex-shrink-0 transition-colors">
            <svg class="w-5 h-5 text-lime-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.75">
              <path stroke-linecap="round" stroke-linejoin="round" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4"/>
            </svg>
          </div>
          <div class="min-w-0">
            <p class="text-sm font-medium text-stone-800 group-hover:text-lime-700 transition-colors">Envanter</p>
            <p class="text-xs text-stone-400 truncate">Stok seviyelerini y\xF6net</p>
          </div>
        </a>

        <a routerLink="/corporate/analytics"
          class="flex items-center gap-3 p-4 rounded-lg border border-stone-200 hover:border-purple-200 hover:bg-purple-50 transition-all group">
          <div class="w-10 h-10 rounded-lg bg-purple-50 group-hover:bg-purple-100 flex items-center justify-center flex-shrink-0 transition-colors">
            <svg class="w-5 h-5 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.75">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
            </svg>
          </div>
          <div class="min-w-0">
            <p class="text-sm font-medium text-stone-800 group-hover:text-purple-600 transition-colors">Analitik</p>
            <p class="text-xs text-stone-400 truncate">Sat\u0131\u015F ve gelir raporlar\u0131</p>
          </div>
        </a>

      </div>
    </div>
  }

</div>
` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CorporateDashboard, { className: "CorporateDashboard", filePath: "app/features/corporate/dashboard/dashboard.ts", lineNumber: 14 });
})();
export {
  CorporateDashboard
};
//# sourceMappingURL=chunk-LHCEFYZC.js.map
