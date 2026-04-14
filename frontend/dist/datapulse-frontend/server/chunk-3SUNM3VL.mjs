import './polyfills.server.mjs';
import {
  CorporateService
} from "./chunk-7HNC55RD.mjs";
import {
  RouterLink,
  RouterModule
} from "./chunk-JORFZ7VT.mjs";
import {
  toSignal
} from "./chunk-7N4RX44S.mjs";
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
} from "./chunk-JETRRDQP.mjs";
import "./chunk-T2KOBY73.mjs";

// src/app/features/corporate/dashboard/dashboard.ts
var _c0 = () => [1, 2, 3, 4, 5, 6, 7, 8];
function CorporateDashboard_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2);
    \u0275\u0275element(1, "div", 5)(2, "div", 6);
    \u0275\u0275elementEnd();
  }
}
function CorporateDashboard_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3)(1, "h1", 7);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 8);
    \u0275\u0275text(4, "Ma\u011Faza kontrol panelinize ho\u015F geldiniz. T\xFCm metrikler tek bak\u0131\u015Fta.");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.store().name);
  }
}
function CorporateDashboard_Conditional_4_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275element(1, "div", 10)(2, "div", 11)(3, "div", 12);
    \u0275\u0275elementEnd();
  }
}
function CorporateDashboard_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275repeaterCreate(1, CorporateDashboard_Conditional_4_For_2_Template, 4, 0, "div", 9, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275repeater(\u0275\u0275pureFunction0(0, _c0));
  }
}
function CorporateDashboard_Conditional_5_Conditional_55_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 40);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.dashboard().lowStockProducts);
  }
}
function CorporateDashboard_Conditional_5_Conditional_56_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.dashboard().lowStockProducts, " ");
  }
}
function CorporateDashboard_Conditional_5_Conditional_67_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 46);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.dashboard().pendingOrders);
  }
}
function CorporateDashboard_Conditional_5_Conditional_68_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.dashboard().pendingOrders, " ");
  }
}
function CorporateDashboard_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4)(1, "div", 13)(2, "div", 14)(3, "span", 15);
    \u0275\u0275text(4, "Toplam Gelir");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 16);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(6, "svg", 17);
    \u0275\u0275element(7, "path", 18);
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(8, "p", 7);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "p", 19);
    \u0275\u0275text(12, "T\xFCm zamanlar");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 20)(14, "div", 14)(15, "span", 21);
    \u0275\u0275text(16, "Toplam Sipari\u015F");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "div", 22);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(18, "svg", 23);
    \u0275\u0275element(19, "path", 24);
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(20, "p", 7);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "p", 19);
    \u0275\u0275text(23, "T\xFCm zamanlar");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "div", 25)(25, "div", 14)(26, "span", 26);
    \u0275\u0275text(27, "Ort. Sipari\u015F De\u011Feri");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "div", 27);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(29, "svg", 28);
    \u0275\u0275element(30, "path", 29);
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(31, "p", 7);
    \u0275\u0275text(32);
    \u0275\u0275pipe(33, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "p", 19);
    \u0275\u0275text(35, "Ortalama");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(36, "div", 30)(37, "div", 14)(38, "span", 31);
    \u0275\u0275text(39, "Aktif \xDCr\xFCnler");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "div", 32);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(41, "svg", 33);
    \u0275\u0275element(42, "path", 34);
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(43, "p", 7);
    \u0275\u0275text(44);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "p", 19);
    \u0275\u0275text(46, "Katalogda");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(47, "div", 35)(48, "div", 14)(49, "span", 36);
    \u0275\u0275text(50, "D\xFC\u015F\xFCk Stok");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(51, "div", 37);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(52, "svg", 38);
    \u0275\u0275element(53, "path", 39);
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(54, "p", 7);
    \u0275\u0275conditionalCreate(55, CorporateDashboard_Conditional_5_Conditional_55_Template, 2, 1, "span", 40)(56, CorporateDashboard_Conditional_5_Conditional_56_Template, 1, 1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(57, "p", 19);
    \u0275\u0275text(58, "Stok < 10 adet");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(59, "div", 41)(60, "div", 14)(61, "span", 42);
    \u0275\u0275text(62, "Bekleyen Sipari\u015Fler");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(63, "div", 43);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(64, "svg", 44);
    \u0275\u0275element(65, "path", 45);
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(66, "p", 7);
    \u0275\u0275conditionalCreate(67, CorporateDashboard_Conditional_5_Conditional_67_Template, 2, 1, "span", 46)(68, CorporateDashboard_Conditional_5_Conditional_68_Template, 1, 1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(69, "p", 19);
    \u0275\u0275text(70, "\u0130\u015Flem bekliyor");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(71, "div", 47)(72, "div", 14)(73, "span", 48);
    \u0275\u0275text(74, "Ort. Puan");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(75, "div", 49);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(76, "svg", 50);
    \u0275\u0275element(77, "path", 51);
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(78, "p", 7);
    \u0275\u0275text(79);
    \u0275\u0275pipe(80, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(81, "p", 19);
    \u0275\u0275text(82);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(83, "div", 52)(84, "div", 14)(85, "span", 53);
    \u0275\u0275text(86, "Toplam Yorum");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(87, "div", 54);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(88, "svg", 55);
    \u0275\u0275element(89, "path", 56);
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(90, "p", 7);
    \u0275\u0275text(91);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(92, "p", 19);
    \u0275\u0275text(93, "M\xFC\u015Fteri yorumu");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(94, "div", 57)(95, "h2", 58);
    \u0275\u0275text(96, "Sipari\u015F Durumu Da\u011F\u0131l\u0131m\u0131");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(97, "div", 59)(98, "div", 60);
    \u0275\u0275element(99, "div", 61);
    \u0275\u0275elementStart(100, "p", 62);
    \u0275\u0275text(101);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(102, "p", 63);
    \u0275\u0275text(103, "Bekleyen");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(104, "div", 60);
    \u0275\u0275element(105, "div", 64);
    \u0275\u0275elementStart(106, "p", 62);
    \u0275\u0275text(107);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(108, "p", 63);
    \u0275\u0275text(109, "\u0130\u015Fleniyor");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(110, "div", 60);
    \u0275\u0275element(111, "div", 65);
    \u0275\u0275elementStart(112, "p", 62);
    \u0275\u0275text(113);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(114, "p", 63);
    \u0275\u0275text(115, "Kargoda");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(116, "div", 60);
    \u0275\u0275element(117, "div", 66);
    \u0275\u0275elementStart(118, "p", 62);
    \u0275\u0275text(119);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(120, "p", 63);
    \u0275\u0275text(121, "Teslim Edildi");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(122, "div", 60);
    \u0275\u0275element(123, "div", 67);
    \u0275\u0275elementStart(124, "p", 62);
    \u0275\u0275text(125);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(126, "p", 63);
    \u0275\u0275text(127, "\u0130ptal");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(128, "div", 68)(129, "h2", 58);
    \u0275\u0275text(130, "H\u0131zl\u0131 Eri\u015Fim");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(131, "div", 69)(132, "a", 70)(133, "div", 71);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(134, "svg", 72);
    \u0275\u0275element(135, "path", 34);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(136, "div")(137, "p", 73);
    \u0275\u0275text(138, "\xDCr\xFCn Y\xF6netimi");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(139, "p", 19);
    \u0275\u0275text(140, "\xDCr\xFCnleri ekle, d\xFCzenle, sil");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(141, "a", 74)(142, "div", 75);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(143, "svg", 76);
    \u0275\u0275element(144, "path", 77);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(145, "div")(146, "p", 78);
    \u0275\u0275text(147, "Sipari\u015F Y\xF6netimi");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(148, "p", 19);
    \u0275\u0275text(149, "Sipari\u015Fleri takip et, g\xFCncelle");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(150, "a", 79)(151, "div", 80);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(152, "svg", 81);
    \u0275\u0275element(153, "path", 82);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(154, "div")(155, "p", 83);
    \u0275\u0275text(156, "Envanter");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(157, "p", 19);
    \u0275\u0275text(158, "Stok seviyelerini y\xF6net");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(159, "a", 84)(160, "div", 85);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(161, "svg", 86);
    \u0275\u0275element(162, "path", 87);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(163, "div")(164, "p", 88);
    \u0275\u0275text(165, "Analytics");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(166, "p", 19);
    \u0275\u0275text(167, "Sat\u0131\u015F ve gelir raporlar\u0131");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate1("$", \u0275\u0275pipeBind2(10, 14, ctx_r0.dashboard().totalRevenue, "1.2-2"));
    \u0275\u0275advance(12);
    \u0275\u0275textInterpolate(ctx_r0.dashboard().totalOrders);
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate1("$", \u0275\u0275pipeBind2(33, 17, ctx_r0.dashboard().averageOrderValue, "1.2-2"));
    \u0275\u0275advance(12);
    \u0275\u0275textInterpolate(ctx_r0.dashboard().activeProducts);
    \u0275\u0275advance(11);
    \u0275\u0275conditional(ctx_r0.dashboard().lowStockProducts > 0 ? 55 : 56);
    \u0275\u0275advance(12);
    \u0275\u0275conditional(ctx_r0.dashboard().pendingOrders > 0 ? 67 : 68);
    \u0275\u0275advance(12);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(80, 20, ctx_r0.dashboard().averageRating, "1.1-1"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", ctx_r0.dashboard().totalReviews, " yorum");
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(ctx_r0.dashboard().totalReviews);
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate(ctx_r0.dashboard().pendingOrders);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r0.dashboard().processingOrders);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r0.dashboard().shippedOrders);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r0.dashboard().deliveredOrders);
    \u0275\u0275advance(6);
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
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CorporateDashboard, selectors: [["app-corporate-dashboard"]], decls: 6, vars: 2, consts: [[1, "min-h-screen", "bg-gray-950"], [1, "max-w-7xl", "mx-auto", "px-4", "sm:px-6", "lg:px-8", "py-8"], [1, "animate-pulse", "mb-8"], [1, "mb-8"], [1, "grid", "grid-cols-1", "sm:grid-cols-2", "lg:grid-cols-4", "gap-5", "mb-8"], [1, "h-8", "bg-gray-800", "rounded", "w-64", "mb-2"], [1, "h-4", "bg-gray-800", "rounded", "w-96"], [1, "text-3xl", "font-bold", "text-white", "mb-1"], [1, "text-gray-400", "text-sm"], [1, "bg-gray-900/80", "border", "border-gray-800", "rounded-2xl", "p-6", "animate-pulse"], [1, "h-4", "bg-gray-700", "rounded", "w-24", "mb-4"], [1, "h-8", "bg-gray-700", "rounded", "w-20", "mb-2"], [1, "h-3", "bg-gray-800", "rounded", "w-28"], [1, "bg-gradient-to-br", "from-blue-900/40", "to-gray-900/80", "border", "border-blue-800/30", "rounded-2xl", "p-6", "hover:border-blue-600/50", "transition-all", "group"], [1, "flex", "items-center", "justify-between", "mb-3"], [1, "text-xs", "font-semibold", "uppercase", "tracking-wider", "text-blue-400"], [1, "h-10", "w-10", "bg-blue-600/20", "rounded-xl", "flex", "items-center", "justify-center", "group-hover:bg-blue-600/30", "transition-colors"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", 1, "h-5", "w-5", "text-blue-400"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"], [1, "text-xs", "text-gray-500"], [1, "bg-gradient-to-br", "from-indigo-900/40", "to-gray-900/80", "border", "border-indigo-800/30", "rounded-2xl", "p-6", "hover:border-indigo-600/50", "transition-all", "group"], [1, "text-xs", "font-semibold", "uppercase", "tracking-wider", "text-indigo-400"], [1, "h-10", "w-10", "bg-indigo-600/20", "rounded-xl", "flex", "items-center", "justify-center", "group-hover:bg-indigo-600/30", "transition-colors"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", 1, "h-5", "w-5", "text-indigo-400"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"], [1, "bg-gradient-to-br", "from-violet-900/40", "to-gray-900/80", "border", "border-violet-800/30", "rounded-2xl", "p-6", "hover:border-violet-600/50", "transition-all", "group"], [1, "text-xs", "font-semibold", "uppercase", "tracking-wider", "text-violet-400"], [1, "h-10", "w-10", "bg-violet-600/20", "rounded-xl", "flex", "items-center", "justify-center", "group-hover:bg-violet-600/30", "transition-colors"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", 1, "h-5", "w-5", "text-violet-400"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"], [1, "bg-gradient-to-br", "from-emerald-900/40", "to-gray-900/80", "border", "border-emerald-800/30", "rounded-2xl", "p-6", "hover:border-emerald-600/50", "transition-all", "group"], [1, "text-xs", "font-semibold", "uppercase", "tracking-wider", "text-emerald-400"], [1, "h-10", "w-10", "bg-emerald-600/20", "rounded-xl", "flex", "items-center", "justify-center", "group-hover:bg-emerald-600/30", "transition-colors"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", 1, "h-5", "w-5", "text-emerald-400"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"], [1, "bg-gradient-to-br", "from-amber-900/40", "to-gray-900/80", "border", "border-amber-800/30", "rounded-2xl", "p-6", "hover:border-amber-600/50", "transition-all", "group"], [1, "text-xs", "font-semibold", "uppercase", "tracking-wider", "text-amber-400"], [1, "h-10", "w-10", "bg-amber-600/20", "rounded-xl", "flex", "items-center", "justify-center", "group-hover:bg-amber-600/30", "transition-colors"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", 1, "h-5", "w-5", "text-amber-400"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z"], [1, "text-amber-400"], [1, "bg-gradient-to-br", "from-orange-900/40", "to-gray-900/80", "border", "border-orange-800/30", "rounded-2xl", "p-6", "hover:border-orange-600/50", "transition-all", "group"], [1, "text-xs", "font-semibold", "uppercase", "tracking-wider", "text-orange-400"], [1, "h-10", "w-10", "bg-orange-600/20", "rounded-xl", "flex", "items-center", "justify-center", "group-hover:bg-orange-600/30", "transition-colors"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", 1, "h-5", "w-5", "text-orange-400"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"], [1, "text-orange-400"], [1, "bg-gradient-to-br", "from-yellow-900/40", "to-gray-900/80", "border", "border-yellow-800/30", "rounded-2xl", "p-6", "hover:border-yellow-600/50", "transition-all", "group"], [1, "text-xs", "font-semibold", "uppercase", "tracking-wider", "text-yellow-400"], [1, "h-10", "w-10", "bg-yellow-600/20", "rounded-xl", "flex", "items-center", "justify-center", "group-hover:bg-yellow-600/30", "transition-colors"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "currentColor", "viewBox", "0 0 24 24", 1, "h-5", "w-5", "text-yellow-400"], ["d", "M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"], [1, "bg-gradient-to-br", "from-cyan-900/40", "to-gray-900/80", "border", "border-cyan-800/30", "rounded-2xl", "p-6", "hover:border-cyan-600/50", "transition-all", "group"], [1, "text-xs", "font-semibold", "uppercase", "tracking-wider", "text-cyan-400"], [1, "h-10", "w-10", "bg-cyan-600/20", "rounded-xl", "flex", "items-center", "justify-center", "group-hover:bg-cyan-600/30", "transition-colors"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", 1, "h-5", "w-5", "text-cyan-400"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"], [1, "bg-gray-900/80", "border", "border-gray-800", "rounded-2xl", "p-6", "mb-8"], [1, "text-lg", "font-semibold", "text-white", "mb-5"], [1, "grid", "grid-cols-2", "sm:grid-cols-3", "lg:grid-cols-5", "gap-4"], [1, "bg-gray-800/50", "rounded-xl", "p-4", "text-center", "border", "border-gray-700/50"], [1, "inline-flex", "items-center", "justify-center", "w-3", "h-3", "rounded-full", "bg-yellow-500", "mb-2"], [1, "text-2xl", "font-bold", "text-white"], [1, "text-xs", "text-gray-400", "mt-1"], [1, "inline-flex", "items-center", "justify-center", "w-3", "h-3", "rounded-full", "bg-blue-500", "mb-2"], [1, "inline-flex", "items-center", "justify-center", "w-3", "h-3", "rounded-full", "bg-indigo-500", "mb-2"], [1, "inline-flex", "items-center", "justify-center", "w-3", "h-3", "rounded-full", "bg-emerald-500", "mb-2"], [1, "inline-flex", "items-center", "justify-center", "w-3", "h-3", "rounded-full", "bg-red-500", "mb-2"], [1, "bg-gray-900/80", "border", "border-gray-800", "rounded-2xl", "p-6"], [1, "grid", "grid-cols-1", "sm:grid-cols-2", "lg:grid-cols-4", "gap-4"], ["routerLink", "/corporate/catalog", 1, "flex", "items-center", "gap-4", "p-4", "bg-gray-800/50", "rounded-xl", "border", "border-gray-700/50", "hover:border-blue-600/50", "hover:bg-gray-800", "transition-all", "group"], [1, "h-12", "w-12", "bg-blue-600/20", "rounded-xl", "flex", "items-center", "justify-center", "group-hover:bg-blue-600/30", "transition-colors", "flex-shrink-0"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", 1, "h-6", "w-6", "text-blue-400"], [1, "text-sm", "font-semibold", "text-white", "group-hover:text-blue-400", "transition-colors"], ["routerLink", "/corporate/orders", 1, "flex", "items-center", "gap-4", "p-4", "bg-gray-800/50", "rounded-xl", "border", "border-gray-700/50", "hover:border-indigo-600/50", "hover:bg-gray-800", "transition-all", "group"], [1, "h-12", "w-12", "bg-indigo-600/20", "rounded-xl", "flex", "items-center", "justify-center", "group-hover:bg-indigo-600/30", "transition-colors", "flex-shrink-0"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", 1, "h-6", "w-6", "text-indigo-400"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"], [1, "text-sm", "font-semibold", "text-white", "group-hover:text-indigo-400", "transition-colors"], ["routerLink", "/corporate/inventory", 1, "flex", "items-center", "gap-4", "p-4", "bg-gray-800/50", "rounded-xl", "border", "border-gray-700/50", "hover:border-emerald-600/50", "hover:bg-gray-800", "transition-all", "group"], [1, "h-12", "w-12", "bg-emerald-600/20", "rounded-xl", "flex", "items-center", "justify-center", "group-hover:bg-emerald-600/30", "transition-colors", "flex-shrink-0"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", 1, "h-6", "w-6", "text-emerald-400"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4"], [1, "text-sm", "font-semibold", "text-white", "group-hover:text-emerald-400", "transition-colors"], ["routerLink", "/corporate/analytics", 1, "flex", "items-center", "gap-4", "p-4", "bg-gray-800/50", "rounded-xl", "border", "border-gray-700/50", "hover:border-violet-600/50", "hover:bg-gray-800", "transition-all", "group"], [1, "h-12", "w-12", "bg-violet-600/20", "rounded-xl", "flex", "items-center", "justify-center", "group-hover:bg-violet-600/30", "transition-colors", "flex-shrink-0"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", 1, "h-6", "w-6", "text-violet-400"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"], [1, "text-sm", "font-semibold", "text-white", "group-hover:text-violet-400", "transition-colors"]], template: function CorporateDashboard_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
      \u0275\u0275conditionalCreate(2, CorporateDashboard_Conditional_2_Template, 3, 0, "div", 2)(3, CorporateDashboard_Conditional_3_Template, 5, 1, "div", 3);
      \u0275\u0275conditionalCreate(4, CorporateDashboard_Conditional_4_Template, 3, 1, "div", 4)(5, CorporateDashboard_Conditional_5_Template, 168, 23);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.store() === null ? 2 : 3);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.dashboard() === null ? 4 : 5);
    }
  }, dependencies: [CommonModule, RouterModule, RouterLink, DecimalPipe], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CorporateDashboard, [{
    type: Component,
    args: [{ selector: "app-corporate-dashboard", standalone: true, imports: [CommonModule, RouterModule], template: `<div class="min-h-screen bg-gray-950">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

    <!-- Header -->
    @if (store() === null) {
      <div class="animate-pulse mb-8">
        <div class="h-8 bg-gray-800 rounded w-64 mb-2"></div>
        <div class="h-4 bg-gray-800 rounded w-96"></div>
      </div>
    } @else {
      <div class="mb-8">
        <h1 class="text-3xl font-bold text-white mb-1">{{ store()!.name }}</h1>
        <p class="text-gray-400 text-sm">Ma\u011Faza kontrol panelinize ho\u015F geldiniz. T\xFCm metrikler tek bak\u0131\u015Fta.</p>
      </div>
    }

    <!-- KPI Grid -->
    @if (dashboard() === null) {
      <!-- Skeleton Loader -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
        @for (i of [1,2,3,4,5,6,7,8]; track i) {
          <div class="bg-gray-900/80 border border-gray-800 rounded-2xl p-6 animate-pulse">
            <div class="h-4 bg-gray-700 rounded w-24 mb-4"></div>
            <div class="h-8 bg-gray-700 rounded w-20 mb-2"></div>
            <div class="h-3 bg-gray-800 rounded w-28"></div>
          </div>
        }
      </div>
    } @else {
      <!-- Actual KPI Cards -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">

        <!-- Total Revenue -->
        <div class="bg-gradient-to-br from-blue-900/40 to-gray-900/80 border border-blue-800/30 rounded-2xl p-6 hover:border-blue-600/50 transition-all group">
          <div class="flex items-center justify-between mb-3">
            <span class="text-xs font-semibold uppercase tracking-wider text-blue-400">Toplam Gelir</span>
            <div class="h-10 w-10 bg-blue-600/20 rounded-xl flex items-center justify-center group-hover:bg-blue-600/30 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
          </div>
          <p class="text-3xl font-bold text-white mb-1">\${{ dashboard()!.totalRevenue | number:'1.2-2' }}</p>
          <p class="text-xs text-gray-500">T\xFCm zamanlar</p>
        </div>

        <!-- Total Orders -->
        <div class="bg-gradient-to-br from-indigo-900/40 to-gray-900/80 border border-indigo-800/30 rounded-2xl p-6 hover:border-indigo-600/50 transition-all group">
          <div class="flex items-center justify-between mb-3">
            <span class="text-xs font-semibold uppercase tracking-wider text-indigo-400">Toplam Sipari\u015F</span>
            <div class="h-10 w-10 bg-indigo-600/20 rounded-xl flex items-center justify-center group-hover:bg-indigo-600/30 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
            </div>
          </div>
          <p class="text-3xl font-bold text-white mb-1">{{ dashboard()!.totalOrders }}</p>
          <p class="text-xs text-gray-500">T\xFCm zamanlar</p>
        </div>

        <!-- Average Order Value -->
        <div class="bg-gradient-to-br from-violet-900/40 to-gray-900/80 border border-violet-800/30 rounded-2xl p-6 hover:border-violet-600/50 transition-all group">
          <div class="flex items-center justify-between mb-3">
            <span class="text-xs font-semibold uppercase tracking-wider text-violet-400">Ort. Sipari\u015F De\u011Feri</span>
            <div class="h-10 w-10 bg-violet-600/20 rounded-xl flex items-center justify-center group-hover:bg-violet-600/30 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
            </div>
          </div>
          <p class="text-3xl font-bold text-white mb-1">\${{ dashboard()!.averageOrderValue | number:'1.2-2' }}</p>
          <p class="text-xs text-gray-500">Ortalama</p>
        </div>

        <!-- Active Products -->
        <div class="bg-gradient-to-br from-emerald-900/40 to-gray-900/80 border border-emerald-800/30 rounded-2xl p-6 hover:border-emerald-600/50 transition-all group">
          <div class="flex items-center justify-between mb-3">
            <span class="text-xs font-semibold uppercase tracking-wider text-emerald-400">Aktif \xDCr\xFCnler</span>
            <div class="h-10 w-10 bg-emerald-600/20 rounded-xl flex items-center justify-center group-hover:bg-emerald-600/30 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
              </svg>
            </div>
          </div>
          <p class="text-3xl font-bold text-white mb-1">{{ dashboard()!.activeProducts }}</p>
          <p class="text-xs text-gray-500">Katalogda</p>
        </div>

        <!-- Low Stock -->
        <div class="bg-gradient-to-br from-amber-900/40 to-gray-900/80 border border-amber-800/30 rounded-2xl p-6 hover:border-amber-600/50 transition-all group">
          <div class="flex items-center justify-between mb-3">
            <span class="text-xs font-semibold uppercase tracking-wider text-amber-400">D\xFC\u015F\xFCk Stok</span>
            <div class="h-10 w-10 bg-amber-600/20 rounded-xl flex items-center justify-center group-hover:bg-amber-600/30 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
              </svg>
            </div>
          </div>
          <p class="text-3xl font-bold text-white mb-1">
            @if (dashboard()!.lowStockProducts > 0) {
              <span class="text-amber-400">{{ dashboard()!.lowStockProducts }}</span>
            } @else {
              {{ dashboard()!.lowStockProducts }}
            }
          </p>
          <p class="text-xs text-gray-500">Stok &lt; 10 adet</p>
        </div>

        <!-- Pending Orders -->
        <div class="bg-gradient-to-br from-orange-900/40 to-gray-900/80 border border-orange-800/30 rounded-2xl p-6 hover:border-orange-600/50 transition-all group">
          <div class="flex items-center justify-between mb-3">
            <span class="text-xs font-semibold uppercase tracking-wider text-orange-400">Bekleyen Sipari\u015Fler</span>
            <div class="h-10 w-10 bg-orange-600/20 rounded-xl flex items-center justify-center group-hover:bg-orange-600/30 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
          </div>
          <p class="text-3xl font-bold text-white mb-1">
            @if (dashboard()!.pendingOrders > 0) {
              <span class="text-orange-400">{{ dashboard()!.pendingOrders }}</span>
            } @else {
              {{ dashboard()!.pendingOrders }}
            }
          </p>
          <p class="text-xs text-gray-500">\u0130\u015Flem bekliyor</p>
        </div>

        <!-- Average Rating -->
        <div class="bg-gradient-to-br from-yellow-900/40 to-gray-900/80 border border-yellow-800/30 rounded-2xl p-6 hover:border-yellow-600/50 transition-all group">
          <div class="flex items-center justify-between mb-3">
            <span class="text-xs font-semibold uppercase tracking-wider text-yellow-400">Ort. Puan</span>
            <div class="h-10 w-10 bg-yellow-600/20 rounded-xl flex items-center justify-center group-hover:bg-yellow-600/30 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
            </div>
          </div>
          <p class="text-3xl font-bold text-white mb-1">{{ dashboard()!.averageRating | number:'1.1-1' }}</p>
          <p class="text-xs text-gray-500">{{ dashboard()!.totalReviews }} yorum</p>
        </div>

        <!-- Total Reviews -->
        <div class="bg-gradient-to-br from-cyan-900/40 to-gray-900/80 border border-cyan-800/30 rounded-2xl p-6 hover:border-cyan-600/50 transition-all group">
          <div class="flex items-center justify-between mb-3">
            <span class="text-xs font-semibold uppercase tracking-wider text-cyan-400">Toplam Yorum</span>
            <div class="h-10 w-10 bg-cyan-600/20 rounded-xl flex items-center justify-center group-hover:bg-cyan-600/30 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </div>
          </div>
          <p class="text-3xl font-bold text-white mb-1">{{ dashboard()!.totalReviews }}</p>
          <p class="text-xs text-gray-500">M\xFC\u015Fteri yorumu</p>
        </div>

      </div>

      <!-- Order Status Breakdown -->
      <div class="bg-gray-900/80 border border-gray-800 rounded-2xl p-6 mb-8">
        <h2 class="text-lg font-semibold text-white mb-5">Sipari\u015F Durumu Da\u011F\u0131l\u0131m\u0131</h2>
        <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          
          <div class="bg-gray-800/50 rounded-xl p-4 text-center border border-gray-700/50">
            <div class="inline-flex items-center justify-center w-3 h-3 rounded-full bg-yellow-500 mb-2"></div>
            <p class="text-2xl font-bold text-white">{{ dashboard()!.pendingOrders }}</p>
            <p class="text-xs text-gray-400 mt-1">Bekleyen</p>
          </div>

          <div class="bg-gray-800/50 rounded-xl p-4 text-center border border-gray-700/50">
            <div class="inline-flex items-center justify-center w-3 h-3 rounded-full bg-blue-500 mb-2"></div>
            <p class="text-2xl font-bold text-white">{{ dashboard()!.processingOrders }}</p>
            <p class="text-xs text-gray-400 mt-1">\u0130\u015Fleniyor</p>
          </div>

          <div class="bg-gray-800/50 rounded-xl p-4 text-center border border-gray-700/50">
            <div class="inline-flex items-center justify-center w-3 h-3 rounded-full bg-indigo-500 mb-2"></div>
            <p class="text-2xl font-bold text-white">{{ dashboard()!.shippedOrders }}</p>
            <p class="text-xs text-gray-400 mt-1">Kargoda</p>
          </div>

          <div class="bg-gray-800/50 rounded-xl p-4 text-center border border-gray-700/50">
            <div class="inline-flex items-center justify-center w-3 h-3 rounded-full bg-emerald-500 mb-2"></div>
            <p class="text-2xl font-bold text-white">{{ dashboard()!.deliveredOrders }}</p>
            <p class="text-xs text-gray-400 mt-1">Teslim Edildi</p>
          </div>

          <div class="bg-gray-800/50 rounded-xl p-4 text-center border border-gray-700/50">
            <div class="inline-flex items-center justify-center w-3 h-3 rounded-full bg-red-500 mb-2"></div>
            <p class="text-2xl font-bold text-white">{{ dashboard()!.cancelledOrders }}</p>
            <p class="text-xs text-gray-400 mt-1">\u0130ptal</p>
          </div>

        </div>
      </div>

      <!-- Quick Actions -->
      <div class="bg-gray-900/80 border border-gray-800 rounded-2xl p-6">
        <h2 class="text-lg font-semibold text-white mb-5">H\u0131zl\u0131 Eri\u015Fim</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          
          <a routerLink="/corporate/catalog" class="flex items-center gap-4 p-4 bg-gray-800/50 rounded-xl border border-gray-700/50 hover:border-blue-600/50 hover:bg-gray-800 transition-all group">
            <div class="h-12 w-12 bg-blue-600/20 rounded-xl flex items-center justify-center group-hover:bg-blue-600/30 transition-colors flex-shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
              </svg>
            </div>
            <div>
              <p class="text-sm font-semibold text-white group-hover:text-blue-400 transition-colors">\xDCr\xFCn Y\xF6netimi</p>
              <p class="text-xs text-gray-500">\xDCr\xFCnleri ekle, d\xFCzenle, sil</p>
            </div>
          </a>

          <a routerLink="/corporate/orders" class="flex items-center gap-4 p-4 bg-gray-800/50 rounded-xl border border-gray-700/50 hover:border-indigo-600/50 hover:bg-gray-800 transition-all group">
            <div class="h-12 w-12 bg-indigo-600/20 rounded-xl flex items-center justify-center group-hover:bg-indigo-600/30 transition-colors flex-shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
            </div>
            <div>
              <p class="text-sm font-semibold text-white group-hover:text-indigo-400 transition-colors">Sipari\u015F Y\xF6netimi</p>
              <p class="text-xs text-gray-500">Sipari\u015Fleri takip et, g\xFCncelle</p>
            </div>
          </a>

          <a routerLink="/corporate/inventory" class="flex items-center gap-4 p-4 bg-gray-800/50 rounded-xl border border-gray-700/50 hover:border-emerald-600/50 hover:bg-gray-800 transition-all group">
            <div class="h-12 w-12 bg-emerald-600/20 rounded-xl flex items-center justify-center group-hover:bg-emerald-600/30 transition-colors flex-shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
              </svg>
            </div>
            <div>
              <p class="text-sm font-semibold text-white group-hover:text-emerald-400 transition-colors">Envanter</p>
              <p class="text-xs text-gray-500">Stok seviyelerini y\xF6net</p>
            </div>
          </a>

          <a routerLink="/corporate/analytics" class="flex items-center gap-4 p-4 bg-gray-800/50 rounded-xl border border-gray-700/50 hover:border-violet-600/50 hover:bg-gray-800 transition-all group">
            <div class="h-12 w-12 bg-violet-600/20 rounded-xl flex items-center justify-center group-hover:bg-violet-600/30 transition-colors flex-shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <div>
              <p class="text-sm font-semibold text-white group-hover:text-violet-400 transition-colors">Analytics</p>
              <p class="text-xs text-gray-500">Sat\u0131\u015F ve gelir raporlar\u0131</p>
            </div>
          </a>

        </div>
      </div>
    }

  </div>
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
//# sourceMappingURL=chunk-3SUNM3VL.mjs.map
