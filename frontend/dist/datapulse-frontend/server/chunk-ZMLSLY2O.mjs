import './polyfills.server.mjs';
import {
  AdminService
} from "./chunk-2MVXU3MM.mjs";
import {
  RouterLink,
  RouterModule
} from "./chunk-6SS2UPAN.mjs";
import "./chunk-P2EBPDNO.mjs";
import {
  toSignal
} from "./chunk-MX5BFGVJ.mjs";
import {
  CommonModule,
  Component,
  DecimalPipe,
  catchError,
  inject,
  of,
  setClassMetadata,
  signal,
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
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵpureFunction0,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵstyleProp,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-K2NYDLGG.mjs";
import "./chunk-T2KOBY73.mjs";

// src/app/features/admin/dashboard/admin-dashboard.ts
var _c0 = () => [1, 2, 3, 4, 5, 6, 7, 8];
var _forTrack0 = ($index, $item) => $item.date;
function AdminDashboard_Conditional_7_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6);
    \u0275\u0275element(1, "div", 7)(2, "div", 8)(3, "div", 9);
    \u0275\u0275elementEnd();
  }
}
function AdminDashboard_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275repeaterCreate(1, AdminDashboard_Conditional_7_For_2_Template, 4, 0, "div", 6, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275repeater(\u0275\u0275pureFunction0(0, _c0));
  }
}
function AdminDashboard_Conditional_8_Conditional_82_For_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 84)(1, "div", 87)(2, "div", 88)(3, "div", 89);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 90);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 91);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()()();
    \u0275\u0275element(10, "div", 92);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(item_r1.date);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("$", \u0275\u0275pipeBind2(7, 5, item_r1.revenue, "1.0-0"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", item_r1.orderCount, " sipari\u015F");
    \u0275\u0275advance();
    \u0275\u0275styleProp("height", ctx_r1.getBarHeight(item_r1.revenue), "%");
  }
}
function AdminDashboard_Conditional_8_Conditional_82_For_17_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 93);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r3 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.formatDay(item_r3.date));
  }
}
function AdminDashboard_Conditional_8_Conditional_82_For_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 86);
    \u0275\u0275conditionalCreate(1, AdminDashboard_Conditional_8_Conditional_82_For_17_Conditional_1_Template, 2, 1, "span", 93);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const \u0275$index_209_r4 = ctx.$index;
    \u0275\u0275advance();
    \u0275\u0275conditional(\u0275$index_209_r4 % 5 === 0 ? 1 : -1);
  }
}
function AdminDashboard_Conditional_8_Conditional_82_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 42)(1, "div", 78)(2, "div")(3, "h3", 79);
    \u0275\u0275text(4, "Gelir Trendi");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 51);
    \u0275\u0275text(6, "Son 30 g\xFCn \xB7 Platform geneli");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 80)(8, "div", 81);
    \u0275\u0275element(9, "div", 82);
    \u0275\u0275elementStart(10, "span");
    \u0275\u0275text(11, "Gelir");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(12, "div", 83);
    \u0275\u0275repeaterCreate(13, AdminDashboard_Conditional_8_Conditional_82_For_14_Template, 11, 8, "div", 84, _forTrack0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div", 85);
    \u0275\u0275repeaterCreate(16, AdminDashboard_Conditional_8_Conditional_82_For_17_Template, 2, 1, "div", 86, _forTrack0);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(13);
    \u0275\u0275repeater(ctx_r1.trendData());
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r1.trendData());
  }
}
function AdminDashboard_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10)(1, "div", 11)(2, "div", 12)(3, "span", 13);
    \u0275\u0275text(4, "Toplam Gelir");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 14);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(6, "svg", 15);
    \u0275\u0275element(7, "path", 16);
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(8, "p", 17);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "p", 18);
    \u0275\u0275text(12, "\u0130ptal edilenler hari\xE7");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 19)(14, "div", 12)(15, "span", 20);
    \u0275\u0275text(16, "Toplam Sipari\u015F");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "div", 21);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(18, "svg", 22);
    \u0275\u0275element(19, "path", 23);
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(20, "p", 17);
    \u0275\u0275text(21);
    \u0275\u0275pipe(22, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "p", 18);
    \u0275\u0275text(24, "T\xFCm ma\u011Fazalar");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "div", 24)(26, "div", 12)(27, "span", 25);
    \u0275\u0275text(28, "Toplam Kullan\u0131c\u0131");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "div", 26);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(30, "svg", 27);
    \u0275\u0275element(31, "path", 28);
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(32, "p", 17);
    \u0275\u0275text(33);
    \u0275\u0275pipe(34, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "p", 18);
    \u0275\u0275text(36);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(37, "div", 29)(38, "div", 12)(39, "span", 30);
    \u0275\u0275text(40, "Toplam \xDCr\xFCn");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "div", 31);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(42, "svg", 32);
    \u0275\u0275element(43, "path", 33);
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(44, "p", 17);
    \u0275\u0275text(45);
    \u0275\u0275pipe(46, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(47, "p", 18);
    \u0275\u0275text(48);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(49, "div", 10)(50, "div", 34)(51, "div", 35);
    \u0275\u0275element(52, "div", 36);
    \u0275\u0275elementStart(53, "span", 37);
    \u0275\u0275text(54, "Aktif Ma\u011Fazalar");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(55, "p", 38);
    \u0275\u0275text(56);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(57, "p", 18);
    \u0275\u0275text(58);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(59, "div", 34)(60, "div", 35);
    \u0275\u0275element(61, "div", 39);
    \u0275\u0275elementStart(62, "span", 37);
    \u0275\u0275text(63, "Onay Bekleyen");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(64, "p", 38);
    \u0275\u0275text(65);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(66, "p", 18);
    \u0275\u0275text(67, "\u0130\u015Flem gerekiyor");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(68, "div", 34)(69, "div", 35);
    \u0275\u0275element(70, "div", 40);
    \u0275\u0275elementStart(71, "span", 37);
    \u0275\u0275text(72, "Ask\u0131ya Al\u0131nan Ma\u011Fazalar");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(73, "p", 38);
    \u0275\u0275text(74);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(75, "div", 34)(76, "div", 35);
    \u0275\u0275element(77, "div", 41);
    \u0275\u0275elementStart(78, "span", 37);
    \u0275\u0275text(79, "Ask\u0131ya Al\u0131nan Kullan\u0131c\u0131lar");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(80, "p", 38);
    \u0275\u0275text(81);
    \u0275\u0275elementEnd()()();
    \u0275\u0275conditionalCreate(82, AdminDashboard_Conditional_8_Conditional_82_Template, 18, 0, "div", 42);
    \u0275\u0275elementStart(83, "h2", 43);
    \u0275\u0275text(84, "H\u0131zl\u0131 Y\xF6netim");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(85, "div", 44)(86, "a", 45)(87, "div", 46)(88, "div", 47);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(89, "svg", 48);
    \u0275\u0275element(90, "path", 49);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(91, "div")(92, "p", 50);
    \u0275\u0275text(93, "Kullan\u0131c\u0131 Y\xF6netimi");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(94, "p", 51);
    \u0275\u0275text(95, "Hesaplar\u0131 y\xF6net, ask\u0131ya al, sil");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(96, "a", 52)(97, "div", 46)(98, "div", 53);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(99, "svg", 54);
    \u0275\u0275element(100, "path", 55);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(101, "div")(102, "p", 56);
    \u0275\u0275text(103, "Ma\u011Faza Y\xF6netimi");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(104, "p", 51);
    \u0275\u0275text(105, "Onayla, ask\u0131ya al, kapat");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(106, "a", 57)(107, "div", 46)(108, "div", 58);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(109, "svg", 59);
    \u0275\u0275element(110, "path", 60);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(111, "div")(112, "p", 61);
    \u0275\u0275text(113, "Kategori Y\xF6netimi");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(114, "p", 51);
    \u0275\u0275text(115, "Taksonomi d\xFCzeni");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(116, "a", 62)(117, "div", 46)(118, "div", 63);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(119, "svg", 64);
    \u0275\u0275element(120, "path", 65);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(121, "div")(122, "p", 66);
    \u0275\u0275text(123, "Platform Analiti\u011Fi");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(124, "p", 51);
    \u0275\u0275text(125, "Cross-store kar\u015F\u0131la\u015Ft\u0131rma");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(126, "a", 67)(127, "div", 46)(128, "div", 68);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(129, "svg", 69);
    \u0275\u0275element(130, "path", 70);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(131, "div")(132, "p", 71);
    \u0275\u0275text(133, "Audit Logs");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(134, "p", 51);
    \u0275\u0275text(135, "Aktivite izleme");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(136, "a", 72)(137, "div", 46)(138, "div", 73);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(139, "svg", 74);
    \u0275\u0275element(140, "path", 75)(141, "path", 76);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(142, "div")(143, "p", 77);
    \u0275\u0275text(144, "Sistem Ayarlar\u0131");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(145, "p", 51);
    \u0275\u0275text(146, "Global konfig\xFCrasyon");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate1("$", \u0275\u0275pipeBind2(10, 13, ctx_r1.stats().totalRevenue, "1.2-2"));
    \u0275\u0275advance(12);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(22, 16, ctx_r1.stats().totalOrders));
    \u0275\u0275advance(12);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(34, 18, ctx_r1.stats().totalUsers));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", ctx_r1.stats().totalIndividualUsers, " bireysel \xB7 ", ctx_r1.stats().totalCorporateUsers, " kurumsal");
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(46, 20, ctx_r1.stats().totalProducts));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", ctx_r1.stats().totalCategories, " kategori");
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r1.stats().activeStores);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("/ ", ctx_r1.stats().totalStores, " toplam");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r1.stats().pendingStores);
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(ctx_r1.stats().suspendedStores);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r1.stats().suspendedUsers);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.trendData().length > 0 ? 82 : -1);
  }
}
var AdminDashboard = class _AdminDashboard {
  adminService = inject(AdminService);
  stats = toSignal(this.adminService.getDashboard().pipe(catchError(() => of(null))), { initialValue: null });
  // Gelir trend verisi — son 30 gün
  trendData = signal([], ...ngDevMode ? [{ debugName: "trendData" }] : (
    /* istanbul ignore next */
    []
  ));
  maxRevenue = signal(0, ...ngDevMode ? [{ debugName: "maxRevenue" }] : (
    /* istanbul ignore next */
    []
  ));
  constructor() {
    this.adminService.getRevenueTrend(30).subscribe({
      next: (data) => {
        const mapped = data.map((item) => ({
          date: item[0],
          revenue: Number(item[1]),
          orderCount: Number(item[2])
        }));
        this.trendData.set(mapped);
        const max = Math.max(...mapped.map((d) => d.revenue), 1);
        this.maxRevenue.set(max);
      }
    });
  }
  getBarHeight(revenue) {
    return this.maxRevenue() > 0 ? revenue / this.maxRevenue() * 100 : 0;
  }
  formatDay(dateStr) {
    const d = new Date(dateStr);
    return d.getDate() + "";
  }
  static \u0275fac = function AdminDashboard_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AdminDashboard)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdminDashboard, selectors: [["app-admin-dashboard"]], decls: 9, vars: 2, consts: [[1, "min-h-screen", "bg-gray-950", "text-white"], [1, "container", "mx-auto", "px-4", "py-8"], [1, "mb-8"], [1, "text-3xl", "font-bold", "tracking-tight"], [1, "text-gray-400", "mt-1"], [1, "grid", "grid-cols-1", "sm:grid-cols-2", "lg:grid-cols-4", "gap-5"], [1, "bg-gray-900", "border", "border-gray-800", "rounded-xl", "p-5", "animate-pulse"], [1, "h-3", "bg-gray-800", "rounded", "w-24", "mb-3"], [1, "h-8", "bg-gray-800", "rounded", "w-16", "mb-2"], [1, "h-2", "bg-gray-800", "rounded", "w-20"], [1, "grid", "grid-cols-1", "sm:grid-cols-2", "lg:grid-cols-4", "gap-5", "mb-8"], [1, "bg-gradient-to-br", "from-emerald-950/50", "to-gray-900", "border", "border-emerald-800/30", "rounded-xl", "p-5", "hover:border-emerald-600/50", "transition-colors"], [1, "flex", "items-center", "justify-between", "mb-3"], [1, "text-xs", "font-semibold", "text-emerald-400", "uppercase", "tracking-wider"], [1, "h-8", "w-8", "rounded-lg", "bg-emerald-500/10", "flex", "items-center", "justify-center"], ["fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", 1, "h-4", "w-4", "text-emerald-400"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"], [1, "text-2xl", "font-bold", "text-white"], [1, "text-xs", "text-gray-500", "mt-1"], [1, "bg-gradient-to-br", "from-blue-950/50", "to-gray-900", "border", "border-blue-800/30", "rounded-xl", "p-5", "hover:border-blue-600/50", "transition-colors"], [1, "text-xs", "font-semibold", "text-blue-400", "uppercase", "tracking-wider"], [1, "h-8", "w-8", "rounded-lg", "bg-blue-500/10", "flex", "items-center", "justify-center"], ["fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", 1, "h-4", "w-4", "text-blue-400"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"], [1, "bg-gradient-to-br", "from-violet-950/50", "to-gray-900", "border", "border-violet-800/30", "rounded-xl", "p-5", "hover:border-violet-600/50", "transition-colors"], [1, "text-xs", "font-semibold", "text-violet-400", "uppercase", "tracking-wider"], [1, "h-8", "w-8", "rounded-lg", "bg-violet-500/10", "flex", "items-center", "justify-center"], ["fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", 1, "h-4", "w-4", "text-violet-400"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"], [1, "bg-gradient-to-br", "from-amber-950/50", "to-gray-900", "border", "border-amber-800/30", "rounded-xl", "p-5", "hover:border-amber-600/50", "transition-colors"], [1, "text-xs", "font-semibold", "text-amber-400", "uppercase", "tracking-wider"], [1, "h-8", "w-8", "rounded-lg", "bg-amber-500/10", "flex", "items-center", "justify-center"], ["fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", 1, "h-4", "w-4", "text-amber-400"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"], [1, "bg-gray-900", "border", "border-gray-800", "rounded-xl", "p-5", "hover:border-gray-700", "transition-colors"], [1, "flex", "items-center", "gap-3", "mb-2"], [1, "h-2.5", "w-2.5", "rounded-full", "bg-green-500"], [1, "text-sm", "font-medium", "text-gray-300"], [1, "text-xl", "font-bold", "text-white"], [1, "h-2.5", "w-2.5", "rounded-full", "bg-yellow-500", "animate-pulse"], [1, "h-2.5", "w-2.5", "rounded-full", "bg-red-500"], [1, "h-2.5", "w-2.5", "rounded-full", "bg-orange-500"], [1, "bg-gray-900", "border", "border-gray-800", "rounded-xl", "p-6", "mb-8"], [1, "text-lg", "font-semibold", "text-gray-200", "mb-4"], [1, "grid", "grid-cols-1", "sm:grid-cols-2", "lg:grid-cols-3", "gap-5"], ["routerLink", "/admin/users", 1, "group", "bg-gray-900", "border", "border-gray-800", "rounded-xl", "p-6", "hover:border-blue-600/50", "hover:bg-gray-900/80", "transition-all"], [1, "flex", "items-center", "gap-4"], [1, "h-12", "w-12", "rounded-xl", "bg-blue-500/10", "flex", "items-center", "justify-center", "group-hover:bg-blue-500/20", "transition-colors"], ["fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", 1, "h-6", "w-6", "text-blue-400"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "1.5", "d", "M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"], [1, "font-semibold", "text-white", "group-hover:text-blue-400", "transition-colors"], [1, "text-xs", "text-gray-500"], ["routerLink", "/admin/stores", 1, "group", "bg-gray-900", "border", "border-gray-800", "rounded-xl", "p-6", "hover:border-emerald-600/50", "hover:bg-gray-900/80", "transition-all"], [1, "h-12", "w-12", "rounded-xl", "bg-emerald-500/10", "flex", "items-center", "justify-center", "group-hover:bg-emerald-500/20", "transition-colors"], ["fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", 1, "h-6", "w-6", "text-emerald-400"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "1.5", "d", "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"], [1, "font-semibold", "text-white", "group-hover:text-emerald-400", "transition-colors"], ["routerLink", "/admin/categories", 1, "group", "bg-gray-900", "border", "border-gray-800", "rounded-xl", "p-6", "hover:border-violet-600/50", "hover:bg-gray-900/80", "transition-all"], [1, "h-12", "w-12", "rounded-xl", "bg-violet-500/10", "flex", "items-center", "justify-center", "group-hover:bg-violet-500/20", "transition-colors"], ["fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", 1, "h-6", "w-6", "text-violet-400"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "1.5", "d", "M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"], [1, "font-semibold", "text-white", "group-hover:text-violet-400", "transition-colors"], ["routerLink", "/admin/analytics", 1, "group", "bg-gray-900", "border", "border-gray-800", "rounded-xl", "p-6", "hover:border-amber-600/50", "hover:bg-gray-900/80", "transition-all"], [1, "h-12", "w-12", "rounded-xl", "bg-amber-500/10", "flex", "items-center", "justify-center", "group-hover:bg-amber-500/20", "transition-colors"], ["fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", 1, "h-6", "w-6", "text-amber-400"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "1.5", "d", "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"], [1, "font-semibold", "text-white", "group-hover:text-amber-400", "transition-colors"], ["routerLink", "/admin/audit-logs", 1, "group", "bg-gray-900", "border", "border-gray-800", "rounded-xl", "p-6", "hover:border-cyan-600/50", "hover:bg-gray-900/80", "transition-all"], [1, "h-12", "w-12", "rounded-xl", "bg-cyan-500/10", "flex", "items-center", "justify-center", "group-hover:bg-cyan-500/20", "transition-colors"], ["fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", 1, "h-6", "w-6", "text-cyan-400"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "1.5", "d", "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"], [1, "font-semibold", "text-white", "group-hover:text-cyan-400", "transition-colors"], ["routerLink", "/admin/config", 1, "group", "bg-gray-900", "border", "border-gray-800", "rounded-xl", "p-6", "hover:border-pink-600/50", "hover:bg-gray-900/80", "transition-all"], [1, "h-12", "w-12", "rounded-xl", "bg-pink-500/10", "flex", "items-center", "justify-center", "group-hover:bg-pink-500/20", "transition-colors"], ["fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", 1, "h-6", "w-6", "text-pink-400"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "1.5", "d", "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "1.5", "d", "M15 12a3 3 0 11-6 0 3 3 0 016 0z"], [1, "font-semibold", "text-white", "group-hover:text-pink-400", "transition-colors"], [1, "flex", "items-center", "justify-between", "mb-5"], [1, "text-lg", "font-semibold", "text-white"], [1, "flex", "items-center", "gap-4", "text-xs", "text-gray-500"], [1, "flex", "items-center", "gap-1.5"], [1, "w-3", "h-3", "rounded-sm", "bg-emerald-500"], [1, "flex", "items-end", "gap-[3px]", "h-40"], [1, "group", "relative", "flex-1", "flex", "flex-col", "items-center", "justify-end", "h-full"], [1, "flex", "gap-[3px]", "mt-2"], [1, "flex-1", "text-center"], [1, "absolute", "bottom-full", "mb-2", "hidden", "group-hover:block", "z-10"], [1, "bg-gray-800", "border", "border-gray-700", "rounded-lg", "px-3", "py-2", "text-xs", "shadow-xl", "whitespace-nowrap"], [1, "text-gray-400"], [1, "text-emerald-400", "font-bold"], [1, "text-gray-500"], [1, "w-full", "rounded-t-sm", "bg-emerald-500/80", "hover:bg-emerald-400", "transition-all", "duration-200", "cursor-pointer", "min-h-[2px]"], [1, "text-[10px]", "text-gray-600"]], template: function AdminDashboard_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h1", 3);
      \u0275\u0275text(4, "Platform Overview");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "p", 4);
      \u0275\u0275text(6, "Sistem genelindeki istatistikler ve KPI'lar");
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(7, AdminDashboard_Conditional_7_Template, 3, 1, "div", 5);
      \u0275\u0275conditionalCreate(8, AdminDashboard_Conditional_8_Template, 147, 22);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(7);
      \u0275\u0275conditional(ctx.stats() === null ? 7 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.stats() !== null ? 8 : -1);
    }
  }, dependencies: [CommonModule, RouterModule, RouterLink, DecimalPipe], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AdminDashboard, [{
    type: Component,
    args: [{ selector: "app-admin-dashboard", standalone: true, imports: [CommonModule, RouterModule], template: `<div class="min-h-screen bg-gray-950 text-white">
  <div class="container mx-auto px-4 py-8">

    <!-- Ba\u015Fl\u0131k -->
    <div class="mb-8">
      <h1 class="text-3xl font-bold tracking-tight">Platform Overview</h1>
      <p class="text-gray-400 mt-1">Sistem genelindeki istatistikler ve KPI'lar</p>
    </div>

    <!-- Skeleton Loader -->
    @if (stats() === null) {
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        @for (i of [1,2,3,4,5,6,7,8]; track i) {
          <div class="bg-gray-900 border border-gray-800 rounded-xl p-5 animate-pulse">
            <div class="h-3 bg-gray-800 rounded w-24 mb-3"></div>
            <div class="h-8 bg-gray-800 rounded w-16 mb-2"></div>
            <div class="h-2 bg-gray-800 rounded w-20"></div>
          </div>
        }
      </div>
    }

    <!-- Veriler -->
    @if (stats() !== null) {
      <!-- Ana KPI'lar -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">

        <!-- Toplam Gelir -->
        <div class="bg-gradient-to-br from-emerald-950/50 to-gray-900 border border-emerald-800/30 rounded-xl p-5 hover:border-emerald-600/50 transition-colors">
          <div class="flex items-center justify-between mb-3">
            <span class="text-xs font-semibold text-emerald-400 uppercase tracking-wider">Toplam Gelir</span>
            <div class="h-8 w-8 rounded-lg bg-emerald-500/10 flex items-center justify-center">
              <svg class="h-4 w-4 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
            </div>
          </div>
          <p class="text-2xl font-bold text-white">\${{ stats()!.totalRevenue | number:'1.2-2' }}</p>
          <p class="text-xs text-gray-500 mt-1">\u0130ptal edilenler hari\xE7</p>
        </div>

        <!-- Toplam Sipari\u015F -->
        <div class="bg-gradient-to-br from-blue-950/50 to-gray-900 border border-blue-800/30 rounded-xl p-5 hover:border-blue-600/50 transition-colors">
          <div class="flex items-center justify-between mb-3">
            <span class="text-xs font-semibold text-blue-400 uppercase tracking-wider">Toplam Sipari\u015F</span>
            <div class="h-8 w-8 rounded-lg bg-blue-500/10 flex items-center justify-center">
              <svg class="h-4 w-4 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/>
              </svg>
            </div>
          </div>
          <p class="text-2xl font-bold text-white">{{ stats()!.totalOrders | number }}</p>
          <p class="text-xs text-gray-500 mt-1">T\xFCm ma\u011Fazalar</p>
        </div>

        <!-- Toplam Kullan\u0131c\u0131 -->
        <div class="bg-gradient-to-br from-violet-950/50 to-gray-900 border border-violet-800/30 rounded-xl p-5 hover:border-violet-600/50 transition-colors">
          <div class="flex items-center justify-between mb-3">
            <span class="text-xs font-semibold text-violet-400 uppercase tracking-wider">Toplam Kullan\u0131c\u0131</span>
            <div class="h-8 w-8 rounded-lg bg-violet-500/10 flex items-center justify-center">
              <svg class="h-4 w-4 text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"/>
              </svg>
            </div>
          </div>
          <p class="text-2xl font-bold text-white">{{ stats()!.totalUsers | number }}</p>
          <p class="text-xs text-gray-500 mt-1">{{ stats()!.totalIndividualUsers }} bireysel \xB7 {{ stats()!.totalCorporateUsers }} kurumsal</p>
        </div>

        <!-- Toplam \xDCr\xFCn -->
        <div class="bg-gradient-to-br from-amber-950/50 to-gray-900 border border-amber-800/30 rounded-xl p-5 hover:border-amber-600/50 transition-colors">
          <div class="flex items-center justify-between mb-3">
            <span class="text-xs font-semibold text-amber-400 uppercase tracking-wider">Toplam \xDCr\xFCn</span>
            <div class="h-8 w-8 rounded-lg bg-amber-500/10 flex items-center justify-center">
              <svg class="h-4 w-4 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"/>
              </svg>
            </div>
          </div>
          <p class="text-2xl font-bold text-white">{{ stats()!.totalProducts | number }}</p>
          <p class="text-xs text-gray-500 mt-1">{{ stats()!.totalCategories }} kategori</p>
        </div>
      </div>

      <!-- \u0130kincil KPI'lar -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">

        <!-- Aktif Ma\u011Fazalar -->
        <div class="bg-gray-900 border border-gray-800 rounded-xl p-5 hover:border-gray-700 transition-colors">
          <div class="flex items-center gap-3 mb-2">
            <div class="h-2.5 w-2.5 rounded-full bg-green-500"></div>
            <span class="text-sm font-medium text-gray-300">Aktif Ma\u011Fazalar</span>
          </div>
          <p class="text-xl font-bold text-white">{{ stats()!.activeStores }}</p>
          <p class="text-xs text-gray-500 mt-1">/ {{ stats()!.totalStores }} toplam</p>
        </div>

        <!-- Onay Bekleyen Ma\u011Fazalar -->
        <div class="bg-gray-900 border border-gray-800 rounded-xl p-5 hover:border-gray-700 transition-colors">
          <div class="flex items-center gap-3 mb-2">
            <div class="h-2.5 w-2.5 rounded-full bg-yellow-500 animate-pulse"></div>
            <span class="text-sm font-medium text-gray-300">Onay Bekleyen</span>
          </div>
          <p class="text-xl font-bold text-white">{{ stats()!.pendingStores }}</p>
          <p class="text-xs text-gray-500 mt-1">\u0130\u015Flem gerekiyor</p>
        </div>

        <!-- Ask\u0131ya Al\u0131nan Ma\u011Fazalar -->
        <div class="bg-gray-900 border border-gray-800 rounded-xl p-5 hover:border-gray-700 transition-colors">
          <div class="flex items-center gap-3 mb-2">
            <div class="h-2.5 w-2.5 rounded-full bg-red-500"></div>
            <span class="text-sm font-medium text-gray-300">Ask\u0131ya Al\u0131nan Ma\u011Fazalar</span>
          </div>
          <p class="text-xl font-bold text-white">{{ stats()!.suspendedStores }}</p>
        </div>

        <!-- Ask\u0131ya Al\u0131nan Kullan\u0131c\u0131lar -->
        <div class="bg-gray-900 border border-gray-800 rounded-xl p-5 hover:border-gray-700 transition-colors">
          <div class="flex items-center gap-3 mb-2">
            <div class="h-2.5 w-2.5 rounded-full bg-orange-500"></div>
            <span class="text-sm font-medium text-gray-300">Ask\u0131ya Al\u0131nan Kullan\u0131c\u0131lar</span>
          </div>
          <p class="text-xl font-bold text-white">{{ stats()!.suspendedUsers }}</p>
        </div>
      </div>

      <!-- Gelir Trend Grafi\u011Fi \u2014 Son 30 G\xFCn -->
      @if (trendData().length > 0) {
        <div class="bg-gray-900 border border-gray-800 rounded-xl p-6 mb-8">
          <div class="flex items-center justify-between mb-5">
            <div>
              <h3 class="text-lg font-semibold text-white">Gelir Trendi</h3>
              <p class="text-xs text-gray-500">Son 30 g\xFCn \xB7 Platform geneli</p>
            </div>
            <div class="flex items-center gap-4 text-xs text-gray-500">
              <div class="flex items-center gap-1.5">
                <div class="w-3 h-3 rounded-sm bg-emerald-500"></div>
                <span>Gelir</span>
              </div>
            </div>
          </div>

          <!-- Bar Chart -->
          <div class="flex items-end gap-[3px] h-40">
            @for (item of trendData(); track item.date) {
              <div class="group relative flex-1 flex flex-col items-center justify-end h-full">
                <!-- Tooltip -->
                <div class="absolute bottom-full mb-2 hidden group-hover:block z-10">
                  <div class="bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-xs shadow-xl whitespace-nowrap">
                    <div class="text-gray-400">{{ item.date }}</div>
                    <div class="text-emerald-400 font-bold">\${{ item.revenue | number:'1.0-0' }}</div>
                    <div class="text-gray-500">{{ item.orderCount }} sipari\u015F</div>
                  </div>
                </div>
                <!-- Bar -->
                <div class="w-full rounded-t-sm bg-emerald-500/80 hover:bg-emerald-400 transition-all duration-200 cursor-pointer min-h-[2px]"
                     [style.height.%]="getBarHeight(item.revenue)">
                </div>
              </div>
            }
          </div>

          <!-- X Axis Labels (her 5. g\xFCn) -->
          <div class="flex gap-[3px] mt-2">
            @for (item of trendData(); track item.date; let i = $index) {
              <div class="flex-1 text-center">
                @if (i % 5 === 0) {
                  <span class="text-[10px] text-gray-600">{{ formatDay(item.date) }}</span>
                }
              </div>
            }
          </div>
        </div>
      }

      <!-- H\u0131zl\u0131 Eri\u015Fim Kartlar\u0131 -->
      <h2 class="text-lg font-semibold text-gray-200 mb-4">H\u0131zl\u0131 Y\xF6netim</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">

        <a routerLink="/admin/users" class="group bg-gray-900 border border-gray-800 rounded-xl p-6 hover:border-blue-600/50 hover:bg-gray-900/80 transition-all">
          <div class="flex items-center gap-4">
            <div class="h-12 w-12 rounded-xl bg-blue-500/10 flex items-center justify-center group-hover:bg-blue-500/20 transition-colors">
              <svg class="h-6 w-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"/>
              </svg>
            </div>
            <div>
              <p class="font-semibold text-white group-hover:text-blue-400 transition-colors">Kullan\u0131c\u0131 Y\xF6netimi</p>
              <p class="text-xs text-gray-500">Hesaplar\u0131 y\xF6net, ask\u0131ya al, sil</p>
            </div>
          </div>
        </a>

        <a routerLink="/admin/stores" class="group bg-gray-900 border border-gray-800 rounded-xl p-6 hover:border-emerald-600/50 hover:bg-gray-900/80 transition-all">
          <div class="flex items-center gap-4">
            <div class="h-12 w-12 rounded-xl bg-emerald-500/10 flex items-center justify-center group-hover:bg-emerald-500/20 transition-colors">
              <svg class="h-6 w-6 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
              </svg>
            </div>
            <div>
              <p class="font-semibold text-white group-hover:text-emerald-400 transition-colors">Ma\u011Faza Y\xF6netimi</p>
              <p class="text-xs text-gray-500">Onayla, ask\u0131ya al, kapat</p>
            </div>
          </div>
        </a>

        <a routerLink="/admin/categories" class="group bg-gray-900 border border-gray-800 rounded-xl p-6 hover:border-violet-600/50 hover:bg-gray-900/80 transition-all">
          <div class="flex items-center gap-4">
            <div class="h-12 w-12 rounded-xl bg-violet-500/10 flex items-center justify-center group-hover:bg-violet-500/20 transition-colors">
              <svg class="h-6 w-6 text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"/>
              </svg>
            </div>
            <div>
              <p class="font-semibold text-white group-hover:text-violet-400 transition-colors">Kategori Y\xF6netimi</p>
              <p class="text-xs text-gray-500">Taksonomi d\xFCzeni</p>
            </div>
          </div>
        </a>

        <a routerLink="/admin/analytics" class="group bg-gray-900 border border-gray-800 rounded-xl p-6 hover:border-amber-600/50 hover:bg-gray-900/80 transition-all">
          <div class="flex items-center gap-4">
            <div class="h-12 w-12 rounded-xl bg-amber-500/10 flex items-center justify-center group-hover:bg-amber-500/20 transition-colors">
              <svg class="h-6 w-6 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
              </svg>
            </div>
            <div>
              <p class="font-semibold text-white group-hover:text-amber-400 transition-colors">Platform Analiti\u011Fi</p>
              <p class="text-xs text-gray-500">Cross-store kar\u015F\u0131la\u015Ft\u0131rma</p>
            </div>
          </div>
        </a>

        <a routerLink="/admin/audit-logs" class="group bg-gray-900 border border-gray-800 rounded-xl p-6 hover:border-cyan-600/50 hover:bg-gray-900/80 transition-all">
          <div class="flex items-center gap-4">
            <div class="h-12 w-12 rounded-xl bg-cyan-500/10 flex items-center justify-center group-hover:bg-cyan-500/20 transition-colors">
              <svg class="h-6 w-6 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"/>
              </svg>
            </div>
            <div>
              <p class="font-semibold text-white group-hover:text-cyan-400 transition-colors">Audit Logs</p>
              <p class="text-xs text-gray-500">Aktivite izleme</p>
            </div>
          </div>
        </a>

        <a routerLink="/admin/config" class="group bg-gray-900 border border-gray-800 rounded-xl p-6 hover:border-pink-600/50 hover:bg-gray-900/80 transition-all">
          <div class="flex items-center gap-4">
            <div class="h-12 w-12 rounded-xl bg-pink-500/10 flex items-center justify-center group-hover:bg-pink-500/20 transition-colors">
              <svg class="h-6 w-6 text-pink-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
              </svg>
            </div>
            <div>
              <p class="font-semibold text-white group-hover:text-pink-400 transition-colors">Sistem Ayarlar\u0131</p>
              <p class="text-xs text-gray-500">Global konfig\xFCrasyon</p>
            </div>
          </div>
        </a>
      </div>
    }
  </div>
</div>
` }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdminDashboard, { className: "AdminDashboard", filePath: "app/features/admin/dashboard/admin-dashboard.ts", lineNumber: 14 });
})();
export {
  AdminDashboard
};
//# sourceMappingURL=chunk-ZMLSLY2O.mjs.map
