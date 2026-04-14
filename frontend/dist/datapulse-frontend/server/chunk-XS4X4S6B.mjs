import './polyfills.server.mjs';
import {
  CorporateService
} from "./chunk-7HNC55RD.mjs";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-CKOBKXXM.mjs";
import {
  CommonModule,
  Component,
  DecimalPipe,
  ViewChild,
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction5,
  ɵɵqueryRefresh,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵviewQuery
} from "./chunk-JETRRDQP.mjs";
import "./chunk-T2KOBY73.mjs";

// src/app/features/corporate/analytics/sales-analytics.ts
var _c0 = ["revenueChart"];
var _c1 = () => ({ key: "all", label: "T\xFCm\xFC" });
var _c2 = () => ({ key: "7d", label: "7 G\xFCn" });
var _c3 = () => ({ key: "30d", label: "30 G\xFCn" });
var _c4 = () => ({ key: "90d", label: "90 G\xFCn" });
var _c5 = () => ({ key: "year", label: "Bu Y\u0131l" });
var _c6 = (a0, a1, a2, a3, a4) => [a0, a1, a2, a3, a4];
var _c7 = () => [1, 2, 3];
var _forTrack0 = ($index, $item) => $item.key;
var _forTrack1 = ($index, $item) => $item.status;
var _forTrack2 = ($index, $item) => $item.id;
var _forTrack3 = ($index, $item) => $item.sku;
function SalesAnalytics_For_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 17);
    \u0275\u0275listener("click", function SalesAnalytics_For_12_Template_button_click_0_listener() {
      const p_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.setPreset(p_r2.key));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classMap(ctx_r2.activePreset() === p_r2.key ? "bg-blue-600 text-white border-blue-500" : "bg-gray-800 text-gray-400 border-gray-700 hover:text-white hover:border-gray-600");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", p_r2.label, " ");
  }
}
function SalesAnalytics_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 18);
    \u0275\u0275listener("click", function SalesAnalytics_Conditional_23_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.clearFilter());
    });
    \u0275\u0275text(1, " \u2715 Temizle ");
    \u0275\u0275elementEnd();
  }
}
function SalesAnalytics_Conditional_24_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20);
    \u0275\u0275element(1, "div", 24)(2, "div", 25);
    \u0275\u0275elementEnd();
  }
}
function SalesAnalytics_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19);
    \u0275\u0275repeaterCreate(1, SalesAnalytics_Conditional_24_For_2_Template, 3, 0, "div", 20, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 21);
    \u0275\u0275element(4, "div", 22)(5, "div", 23);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275repeater(\u0275\u0275pureFunction0(0, _c7));
  }
}
function SalesAnalytics_Conditional_25_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 55);
    \u0275\u0275listener("click", function SalesAnalytics_Conditional_25_Conditional_28_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.closeDrillDown());
    });
    \u0275\u0275text(1, " \u2715 Detay\u0131 kapat ");
    \u0275\u0275elementEnd();
  }
}
function SalesAnalytics_Conditional_25_Conditional_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 56)(1, "p", 57);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 58)(4, "span", 39);
    \u0275\u0275text(5, "Gelir");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 59);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 60)(10, "span", 39);
    \u0275\u0275text(11, "Sipari\u015F");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "span", 54);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "p", 61);
    \u0275\u0275text(15, "T\u0131kla \u2192 detay g\xF6r");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const hp_r7 = ctx;
    \u0275\u0275styleProp("left", hp_r7.x < 200 ? hp_r7.x + 15 : hp_r7.x - 175, "px")("top", hp_r7.y - 80 < 0 ? hp_r7.y + 15 : hp_r7.y - 80, "px");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(hp_r7.data.date);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("$", \u0275\u0275pipeBind2(8, 7, hp_r7.data.revenue, "1.2-2"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(hp_r7.data.orderCount);
  }
}
function SalesAnalytics_Conditional_25_Conditional_35_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 69);
    \u0275\u0275element(1, "div", 71);
    \u0275\u0275elementStart(2, "span", 72);
    \u0275\u0275text(3, "Sipari\u015Fler y\xFCkleniyor...");
    \u0275\u0275elementEnd()();
  }
}
function SalesAnalytics_Conditional_25_Conditional_35_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 70)(1, "p", 73);
    \u0275\u0275text(2, "Bu tarihte sipari\u015F bulunamad\u0131.");
    \u0275\u0275elementEnd()();
  }
}
function SalesAnalytics_Conditional_25_Conditional_35_Conditional_16_For_33_For_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 92);
    \u0275\u0275text(1);
    \u0275\u0275elementStart(2, "span", 94);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r9 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", item_r9.productName, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\xD7 ", item_r9.quantity);
  }
}
function SalesAnalytics_Conditional_25_Conditional_35_Conditional_16_For_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 85)(1, "td", 86)(2, "span", 87);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "td", 86)(5, "p", 88);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 89);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "td", 86)(10, "span", 90);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "td", 86)(13, "div", 91);
    \u0275\u0275repeaterCreate(14, SalesAnalytics_Conditional_25_Conditional_35_Conditional_16_For_33_For_15_Template, 4, 2, "p", 92, _forTrack2);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "td", 93)(17, "span", 52);
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "number");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const order_r10 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("#", order_r10.id);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(order_r10.customerName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(order_r10.customerEmail);
    \u0275\u0275advance(2);
    \u0275\u0275classMap(ctx_r2.statusTextColors[order_r10.status] + " " + (ctx_r2.statusColors[order_r10.status] ? ctx_r2.statusColors[order_r10.status].replace("bg-", "bg-") + "/15" : ""));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.statusLabels[order_r10.status] || order_r10.status, " ");
    \u0275\u0275advance(3);
    \u0275\u0275repeater(order_r10.items);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("$", \u0275\u0275pipeBind2(19, 7, order_r10.totalPrice, "1.2-2"));
  }
}
function SalesAnalytics_Conditional_25_Conditional_35_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 74)(1, "div", 75)(2, "p", 76);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 77);
    \u0275\u0275text(5, "Sipari\u015F");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 75)(7, "p", 78);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "p", 77);
    \u0275\u0275text(11, "Gelir");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 75)(13, "p", 79);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "p", 77);
    \u0275\u0275text(16, "\xDCr\xFCn Adedi");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(17, "div", 80)(18, "table", 81)(19, "thead")(20, "tr", 82)(21, "th", 83);
    \u0275\u0275text(22, "Sipari\u015F #");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "th", 83);
    \u0275\u0275text(24, "M\xFC\u015Fteri");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "th", 83);
    \u0275\u0275text(26, "Durum");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "th", 83);
    \u0275\u0275text(28, "\xDCr\xFCnler");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "th", 84);
    \u0275\u0275text(30, "Tutar");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(31, "tbody");
    \u0275\u0275repeaterCreate(32, SalesAnalytics_Conditional_25_Conditional_35_Conditional_16_For_33_Template, 20, 10, "tr", 85, _forTrack2);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.drillDownOrders().length);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("$", \u0275\u0275pipeBind2(9, 3, ctx_r2.getDayRevenue(), "1.2-2"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r2.getDayItemCount());
    \u0275\u0275advance(18);
    \u0275\u0275repeater(ctx_r2.drillDownOrders());
  }
}
function SalesAnalytics_Conditional_25_Conditional_35_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 43)(1, "div", 35)(2, "div", 37)(3, "div", 62);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(4, "svg", 63);
    \u0275\u0275element(5, "path", 64);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(6, "div")(7, "h3", 65);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "p", 39);
    \u0275\u0275text(10, "Bu g\xFCne ait sipari\u015F detaylar\u0131");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(11, "button", 66);
    \u0275\u0275listener("click", function SalesAnalytics_Conditional_25_Conditional_35_Template_button_click_11_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.closeDrillDown());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(12, "svg", 67);
    \u0275\u0275element(13, "path", 68);
    \u0275\u0275elementEnd()()();
    \u0275\u0275conditionalCreate(14, SalesAnalytics_Conditional_25_Conditional_35_Conditional_14_Template, 4, 0, "div", 69)(15, SalesAnalytics_Conditional_25_Conditional_35_Conditional_15_Template, 3, 0, "div", 70)(16, SalesAnalytics_Conditional_25_Conditional_35_Conditional_16_Template, 34, 6);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate1("Detay \u2014 ", ctx_r2.selectedDate());
    \u0275\u0275advance(6);
    \u0275\u0275conditional(ctx_r2.isDrillLoading() ? 14 : ctx_r2.drillDownOrders().length === 0 ? 15 : 16);
  }
}
function SalesAnalytics_Conditional_25_Conditional_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 47);
    \u0275\u0275text(1, "Hen\xFCz sat\u0131\u015F verisi yok.");
    \u0275\u0275elementEnd();
  }
}
function SalesAnalytics_Conditional_25_Conditional_41_For_2_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 108);
    \u0275\u0275listener("click", function SalesAnalytics_Conditional_25_Conditional_41_For_2_Conditional_21_Template_div_click_0_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275elementStart(1, "div", 109)(2, "div", 110)(3, "p", 52);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 77);
    \u0275\u0275text(6, "Toplam Adet");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 110)(8, "p", 59);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "p", 77);
    \u0275\u0275text(12, "Toplam Gelir");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 110)(14, "p", 54);
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "p", 77);
    \u0275\u0275text(18, "Birim Fiyat");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(19, "div", 111);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(20, "svg", 112);
    \u0275\u0275element(21, "path", 113);
    \u0275\u0275elementEnd();
    \u0275\u0275text(22);
    \u0275\u0275pipe(23, "number");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const product_r12 = \u0275\u0275nextContext().$implicit;
    const data_r13 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(product_r12.totalQuantitySold);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("$", \u0275\u0275pipeBind2(10, 5, product_r12.totalRevenue, "1.2-2"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("$", \u0275\u0275pipeBind2(16, 8, product_r12.totalRevenue / product_r12.totalQuantitySold, "1.2-2"));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate2(" Toplam gelirin %", \u0275\u0275pipeBind2(23, 11, product_r12.totalRevenue / data_r13.totalRevenue * 100, "1.0-0"), "'", product_r12.totalRevenue / data_r13.totalRevenue * 100 > 50 ? "i" : "\u0131", " bu \xFCr\xFCne ait ");
  }
}
function SalesAnalytics_Conditional_25_Conditional_41_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 96);
    \u0275\u0275listener("click", function SalesAnalytics_Conditional_25_Conditional_41_For_2_Template_div_click_0_listener() {
      const product_r12 = \u0275\u0275restoreView(_r11).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.toggleProductDrill(product_r12.sku));
    });
    \u0275\u0275elementStart(1, "div", 97)(2, "div", 37)(3, "span", 98);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div")(6, "p", 99);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p", 100);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "div", 101)(11, "div")(12, "p", 102);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "p", 89);
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(17, "svg", 103);
    \u0275\u0275element(18, "path", 104);
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(19, "div", 105);
    \u0275\u0275element(20, "div", 106);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(21, SalesAnalytics_Conditional_25_Conditional_41_For_2_Conditional_21_Template, 24, 14, "div", 107);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const product_r12 = ctx.$implicit;
    const \u0275$index_291_r14 = ctx.$index;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275$index_291_r14 + 1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(product_r12.productName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(product_r12.sku);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", product_r12.totalQuantitySold, " adet");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("$", \u0275\u0275pipeBind2(16, 12, product_r12.totalRevenue, "1.2-2"));
    \u0275\u0275advance(2);
    \u0275\u0275classProp("rotate-180", ctx_r2.selectedProduct() === product_r12.sku);
    \u0275\u0275advance(3);
    \u0275\u0275classMap(\u0275$index_291_r14 === 0 ? "bg-blue-500" : \u0275$index_291_r14 === 1 ? "bg-blue-400" : "bg-blue-300/60");
    \u0275\u0275styleProp("width", product_r12.totalQuantitySold / ctx_r2.getMaxQuantity() * 100, "%");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.selectedProduct() === product_r12.sku ? 21 : -1);
  }
}
function SalesAnalytics_Conditional_25_Conditional_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 48);
    \u0275\u0275repeaterCreate(1, SalesAnalytics_Conditional_25_Conditional_41_For_2_Template, 22, 15, "div", 95, _forTrack3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const data_r13 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(data_r13.topProducts);
  }
}
function SalesAnalytics_Conditional_25_For_47_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "div", 97)(2, "span", 114);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 102);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 115);
    \u0275\u0275element(7, "div", 106);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r15 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.statusLabels[item_r15.status]);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r15.count);
    \u0275\u0275advance(2);
    \u0275\u0275classMap(ctx_r2.statusColors[item_r15.status]);
    \u0275\u0275styleProp("width", item_r15.count / ctx_r2.getTotalStatusCount() * 100, "%");
  }
}
function SalesAnalytics_Conditional_25_For_59_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const s_r16 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275textInterpolate1(" ", s_r16.count, " ");
  }
}
function SalesAnalytics_Conditional_25_For_59_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, SalesAnalytics_Conditional_25_For_59_Conditional_0_Template, 1, 1);
  }
  if (rf & 2) {
    const s_r16 = ctx.$implicit;
    \u0275\u0275conditional(s_r16.status === "DELIVERED" ? 0 : -1);
  }
}
function SalesAnalytics_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 26)(1, "div", 27)(2, "p", 28);
    \u0275\u0275text(3, "Toplam Gelir");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 4);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 29);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 30)(10, "p", 31);
    \u0275\u0275text(11, "Toplam Sipari\u015Fler");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "p", 4);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "p", 29);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 32)(17, "p", 33);
    \u0275\u0275text(18, "Sat\u0131lan \xDCr\xFCn Adedi");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "p", 4);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "p", 29);
    \u0275\u0275text(22, "Toplam sat\u0131lan adet");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(23, "div", 34)(24, "div", 35)(25, "h2", 36);
    \u0275\u0275text(26, "Gelir Grafi\u011Fi");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "div", 37);
    \u0275\u0275conditionalCreate(28, SalesAnalytics_Conditional_25_Conditional_28_Template, 2, 0, "button", 38);
    \u0275\u0275elementStart(29, "span", 39);
    \u0275\u0275text(30);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(31, "div", 40)(32, "canvas", 41, 0);
    \u0275\u0275listener("mousemove", function SalesAnalytics_Conditional_25_Template_canvas_mousemove_32_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onChartMouseMove($event));
    })("click", function SalesAnalytics_Conditional_25_Template_canvas_click_32_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onChartClick($event));
    })("mouseleave", function SalesAnalytics_Conditional_25_Template_canvas_mouseleave_32_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onChartLeave());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(34, SalesAnalytics_Conditional_25_Conditional_34_Template, 16, 10, "div", 42);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(35, SalesAnalytics_Conditional_25_Conditional_35_Template, 17, 2, "div", 43);
    \u0275\u0275elementStart(36, "div", 44)(37, "div", 45)(38, "h2", 46);
    \u0275\u0275text(39, "En \xC7ok Satan \xDCr\xFCnler");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(40, SalesAnalytics_Conditional_25_Conditional_40_Template, 2, 0, "p", 47)(41, SalesAnalytics_Conditional_25_Conditional_41_Template, 3, 0, "div", 48);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "div", 45)(43, "h2", 46);
    \u0275\u0275text(44, "Sipari\u015F Durumu Da\u011F\u0131l\u0131m\u0131");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "div", 49);
    \u0275\u0275repeaterCreate(46, SalesAnalytics_Conditional_25_For_47_Template, 8, 6, "div", null, _forTrack1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "div", 50)(49, "div", 51)(50, "span", 39);
    \u0275\u0275text(51, "Toplam Sipari\u015F");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(52, "span", 52);
    \u0275\u0275text(53);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(54, "div", 53)(55, "span", 39);
    \u0275\u0275text(56, "Tamamlanan (Delivered)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(57, "span", 54);
    \u0275\u0275repeaterCreate(58, SalesAnalytics_Conditional_25_For_59_Template, 1, 1, null, null, _forTrack1);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    let tmp_10_0;
    const data_r13 = ctx;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("$", \u0275\u0275pipeBind2(6, 11, data_r13.totalRevenue, "1.2-2"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.activePreset() === "all" ? "T\xFCm zamanlar" : "Se\xE7ili d\xF6nem");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(data_r13.totalOrders);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.activePreset() === "all" ? "T\xFCm zamanlar" : "Se\xE7ili d\xF6nem");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(data_r13.totalProductsSold);
    \u0275\u0275advance(8);
    \u0275\u0275conditional(ctx_r2.selectedDate() ? 28 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", data_r13.dailyRevenue.length, " g\xFCn");
    \u0275\u0275advance(4);
    \u0275\u0275conditional((tmp_10_0 = ctx_r2.hoveredPoint()) ? 34 : -1, tmp_10_0);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.selectedDate() ? 35 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275conditional(data_r13.topProducts.length === 0 ? 40 : 41);
    \u0275\u0275advance(6);
    \u0275\u0275repeater(data_r13.statusDistribution);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r2.getTotalStatusCount());
    \u0275\u0275advance(5);
    \u0275\u0275repeater(data_r13.statusDistribution);
  }
}
var SalesAnalytics = class _SalesAnalytics {
  canvasRef;
  corporateService = inject(CorporateService);
  analytics = signal(null, ...ngDevMode ? [{ debugName: "analytics" }] : (
    /* istanbul ignore next */
    []
  ));
  isLoading = signal(true, ...ngDevMode ? [{ debugName: "isLoading" }] : (
    /* istanbul ignore next */
    []
  ));
  // Tarih filtresi
  startDate = signal("", ...ngDevMode ? [{ debugName: "startDate" }] : (
    /* istanbul ignore next */
    []
  ));
  endDate = signal("", ...ngDevMode ? [{ debugName: "endDate" }] : (
    /* istanbul ignore next */
    []
  ));
  activePreset = signal("all", ...ngDevMode ? [{ debugName: "activePreset" }] : (
    /* istanbul ignore next */
    []
  ));
  // Drill-down
  selectedDate = signal(null, ...ngDevMode ? [{ debugName: "selectedDate" }] : (
    /* istanbul ignore next */
    []
  ));
  drillDownOrders = signal([], ...ngDevMode ? [{ debugName: "drillDownOrders" }] : (
    /* istanbul ignore next */
    []
  ));
  isDrillLoading = signal(false, ...ngDevMode ? [{ debugName: "isDrillLoading" }] : (
    /* istanbul ignore next */
    []
  ));
  hoveredPoint = signal(null, ...ngDevMode ? [{ debugName: "hoveredPoint" }] : (
    /* istanbul ignore next */
    []
  ));
  // Ürün drill-down
  selectedProduct = signal(null, ...ngDevMode ? [{ debugName: "selectedProduct" }] : (
    /* istanbul ignore next */
    []
  ));
  barRects = [];
  chartPadding = { top: 20, right: 20, bottom: 55, left: 70 };
  statusLabels = {
    "PENDING": "Bekleyen",
    "PROCESSING": "\u0130\u015Fleniyor",
    "SHIPPED": "Kargoda",
    "DELIVERED": "Teslim Edildi",
    "CANCELLED": "\u0130ptal"
  };
  statusColors = {
    "PENDING": "bg-yellow-500",
    "PROCESSING": "bg-blue-500",
    "SHIPPED": "bg-indigo-500",
    "DELIVERED": "bg-emerald-500",
    "CANCELLED": "bg-red-500"
  };
  statusTextColors = {
    "PENDING": "text-yellow-400",
    "PROCESSING": "text-blue-400",
    "SHIPPED": "text-indigo-400",
    "DELIVERED": "text-emerald-400",
    "CANCELLED": "text-red-400"
  };
  constructor() {
    this.loadAnalytics();
  }
  ngAfterViewInit() {
  }
  loadAnalytics() {
    this.isLoading.set(true);
    this.selectedDate.set(null);
    this.drillDownOrders.set([]);
    const start = this.startDate();
    const end = this.endDate();
    this.corporateService.getSalesAnalytics(start || void 0, end || void 0).subscribe({
      next: (data) => {
        this.analytics.set(data);
        this.isLoading.set(false);
        setTimeout(() => this.drawChart(data.dailyRevenue), 50);
      },
      error: () => this.isLoading.set(false)
    });
  }
  applyDateFilter() {
    if (this.startDate() && this.endDate()) {
      this.activePreset.set("custom");
      this.loadAnalytics();
    }
  }
  clearFilter() {
    this.startDate.set("");
    this.endDate.set("");
    this.activePreset.set("all");
    this.loadAnalytics();
  }
  setPreset(preset) {
    const today = /* @__PURE__ */ new Date();
    let start = /* @__PURE__ */ new Date();
    switch (preset) {
      case "7d":
        start.setDate(today.getDate() - 7);
        break;
      case "30d":
        start.setDate(today.getDate() - 30);
        break;
      case "90d":
        start.setDate(today.getDate() - 90);
        break;
      case "year":
        start = new Date(today.getFullYear(), 0, 1);
        break;
      case "all":
        this.clearFilter();
        return;
    }
    this.startDate.set(this.formatDate(start));
    this.endDate.set(this.formatDate(today));
    this.activePreset.set(preset);
    this.loadAnalytics();
  }
  formatDate(d) {
    return d.toISOString().split("T")[0];
  }
  getMaxQuantity() {
    const data = this.analytics();
    if (!data || !data.topProducts.length)
      return 1;
    return Math.max(...data.topProducts.map((p) => p.totalQuantitySold));
  }
  getTotalStatusCount() {
    const data = this.analytics();
    if (!data)
      return 1;
    return data.statusDistribution.reduce((sum, s) => sum + s.count, 0) || 1;
  }
  // ─── Chart Mouse Events ────────────────────────────────
  onChartMouseMove(event) {
    if (!this.barRects.length)
      return;
    const canvas = this.canvasRef.nativeElement;
    const rect = canvas.getBoundingClientRect();
    const mx = event.clientX - rect.left;
    const my = event.clientY - rect.top;
    let hovered = null;
    for (const bar of this.barRects) {
      if (mx >= bar.x && mx <= bar.x + bar.w && my >= bar.y && my <= bar.y + bar.h) {
        hovered = bar;
        break;
      }
    }
    if (hovered) {
      this.hoveredPoint.set({
        x: hovered.x + hovered.w / 2,
        y: hovered.y,
        data: hovered.data
      });
      canvas.style.cursor = "pointer";
    } else {
      this.hoveredPoint.set(null);
      canvas.style.cursor = "default";
    }
  }
  onChartClick(event) {
    if (!this.barRects.length)
      return;
    const canvas = this.canvasRef.nativeElement;
    const rect = canvas.getBoundingClientRect();
    const mx = event.clientX - rect.left;
    const my = event.clientY - rect.top;
    for (const bar of this.barRects) {
      if (mx >= bar.x && mx <= bar.x + bar.w && my >= bar.y && my <= bar.y + bar.h) {
        this.drillIntoDate(bar.data.date);
        return;
      }
    }
  }
  onChartLeave() {
    this.hoveredPoint.set(null);
  }
  drillIntoDate(date) {
    if (this.selectedDate() === date) {
      this.selectedDate.set(null);
      this.drillDownOrders.set([]);
      const data2 = this.analytics();
      if (data2)
        setTimeout(() => this.drawChart(data2.dailyRevenue), 50);
      return;
    }
    this.selectedDate.set(date);
    this.isDrillLoading.set(true);
    const data = this.analytics();
    if (data)
      setTimeout(() => this.drawChart(data.dailyRevenue), 50);
    this.corporateService.getStoreOrdersByDate(date).subscribe({
      next: (orders) => {
        this.drillDownOrders.set(orders);
        this.isDrillLoading.set(false);
      },
      error: () => this.isDrillLoading.set(false)
    });
  }
  closeDrillDown() {
    this.selectedDate.set(null);
    this.drillDownOrders.set([]);
    const data = this.analytics();
    if (data)
      setTimeout(() => this.drawChart(data.dailyRevenue), 50);
  }
  toggleProductDrill(sku) {
    this.selectedProduct.set(this.selectedProduct() === sku ? null : sku);
  }
  getProductOrders(sku) {
    return this.drillDownOrders().filter((o) => o.items.some((item) => item.productSku === sku));
  }
  getDayRevenue() {
    return this.drillDownOrders().reduce((sum, o) => sum + o.totalPrice, 0);
  }
  getDayItemCount() {
    return this.drillDownOrders().reduce((sum, o) => sum + o.items.reduce((s, item) => s + item.quantity, 0), 0);
  }
  // LocalDateTime format: ISO string "2026-04-15T10:30:00" veya array [2026, 4, 15, 10, 30]
  extractDateString(dateVal) {
    if (!dateVal)
      return "";
    if (typeof dateVal === "string") {
      return dateVal.substring(0, 10);
    }
    if (Array.isArray(dateVal) && dateVal.length >= 3) {
      const y = dateVal[0];
      const m = String(dateVal[1]).padStart(2, "0");
      const d = String(dateVal[2]).padStart(2, "0");
      return `${y}-${m}-${d}`;
    }
    return "";
  }
  // ─── Bar Chart Drawing ─────────────────────────────────
  drawChart(dailyData) {
    if (!this.canvasRef)
      return;
    const canvas = this.canvasRef.nativeElement;
    const ctx = canvas.getContext("2d");
    if (!ctx)
      return;
    this.barRects = [];
    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    ctx.scale(dpr, dpr);
    const W = rect.width;
    const H = rect.height;
    ctx.clearRect(0, 0, W, H);
    if (!dailyData || dailyData.length === 0) {
      ctx.fillStyle = "#6b7280";
      ctx.font = "14px Inter, sans-serif";
      ctx.textAlign = "center";
      ctx.fillText("Bu tarih aral\u0131\u011F\u0131nda veri bulunamad\u0131", W / 2, H / 2);
      return;
    }
    const pad = this.chartPadding;
    const chartW = W - pad.left - pad.right;
    const chartH = H - pad.top - pad.bottom;
    const revenues = dailyData.map((d) => d.revenue);
    const maxRevenue = Math.max(...revenues, 1) * 1.1;
    ctx.strokeStyle = "#1f2937";
    ctx.lineWidth = 1;
    const gridLines = 5;
    for (let i = 0; i <= gridLines; i++) {
      const y = pad.top + chartH / gridLines * i;
      ctx.beginPath();
      ctx.moveTo(pad.left, y);
      ctx.lineTo(W - pad.right, y);
      ctx.stroke();
      const val = maxRevenue - maxRevenue / gridLines * i;
      ctx.fillStyle = "#6b7280";
      ctx.font = "11px Inter, sans-serif";
      ctx.textAlign = "right";
      ctx.fillText("$" + val.toFixed(0), pad.left - 10, y + 4);
    }
    const barCount = dailyData.length;
    const gap = Math.max(2, Math.min(8, chartW / barCount * 0.2));
    const barW = (chartW - gap * (barCount + 1)) / barCount;
    const selectedDate = this.selectedDate();
    dailyData.forEach((d, i) => {
      const x = pad.left + gap + i * (barW + gap);
      const barH = d.revenue / maxRevenue * chartH;
      const y = pad.top + chartH - barH;
      const isSelected = selectedDate === d.date;
      const grad = ctx.createLinearGradient(x, y, x, y + barH);
      if (isSelected) {
        grad.addColorStop(0, "#f59e0b");
        grad.addColorStop(1, "#d97706");
      } else {
        grad.addColorStop(0, "#3b82f6");
        grad.addColorStop(1, "#1d4ed8");
      }
      if (barH > 0) {
        ctx.fillStyle = "rgba(0,0,0,0.3)";
        ctx.beginPath();
        ctx.roundRect(x + 2, y + 2, barW, barH, [4, 4, 0, 0]);
        ctx.fill();
      }
      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.roundRect(x, y, barW, barH, [4, 4, 0, 0]);
      ctx.fill();
      if (isSelected) {
        ctx.strokeStyle = "#fbbf24";
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.roundRect(x - 2, y - 2, barW + 4, barH + 4, [6, 6, 0, 0]);
        ctx.stroke();
      }
      this.barRects.push({ x, y, w: barW, h: barH, data: d });
      if (barH > 25 && barW > 20) {
        ctx.fillStyle = "rgba(255,255,255,0.9)";
        ctx.font = `bold ${Math.min(11, barW * 0.35)}px Inter, sans-serif`;
        ctx.textAlign = "center";
        ctx.fillText("$" + d.revenue.toFixed(0), x + barW / 2, y + 15);
      }
    });
    if (barCount > 0) {
      ctx.fillStyle = "#9ca3af";
      ctx.font = "12px Inter, sans-serif";
      ctx.textBaseline = "top";
      const firstDateStr = dailyData[0].date;
      const lastDateStr = dailyData[barCount - 1].date;
      const formatLabel = (dateStr) => {
        try {
          const date = new Date(dateStr);
          return date.toLocaleDateString("tr-TR", { day: "numeric", month: "short" });
        } catch {
          return dateStr.substring(5);
        }
      };
      const startLabel = formatLabel(firstDateStr);
      const endLabel = formatLabel(lastDateStr);
      const y = pad.top + chartH + 15;
      ctx.textAlign = "left";
      ctx.fillText(startLabel, pad.left, y);
      ctx.textAlign = "right";
      ctx.fillText(endLabel, W - pad.right, y);
    }
  }
  static \u0275fac = function SalesAnalytics_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SalesAnalytics)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SalesAnalytics, selectors: [["app-sales-analytics"]], viewQuery: function SalesAnalytics_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c0, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.canvasRef = _t.first);
    }
  }, decls: 26, vars: 16, consts: [["revenueChart", ""], [1, "min-h-screen", "bg-gray-950"], [1, "max-w-7xl", "mx-auto", "px-4", "sm:px-6", "lg:px-8", "py-8"], [1, "flex", "flex-col", "sm:flex-row", "sm:items-center", "sm:justify-between", "gap-4", "mb-8"], [1, "text-3xl", "font-bold", "text-white"], [1, "text-gray-400", "text-sm", "mt-1"], [1, "bg-gray-900/80", "border", "border-gray-800", "rounded-2xl", "p-4", "mb-6"], [1, "flex", "flex-col", "lg:flex-row", "items-start", "lg:items-center", "gap-4"], [1, "flex", "gap-2", "flex-wrap"], [1, "px-4", "py-2", "rounded-xl", "text-xs", "font-semibold", "border", "transition-all", 3, "class"], [1, "hidden", "lg:block", "w-px", "h-8", "bg-gray-700"], [1, "flex", "items-center", "gap-2", "flex-wrap"], [1, "text-xs", "text-gray-500", "font-medium"], ["type", "date", 1, "bg-gray-800", "border", "border-gray-700", "rounded-lg", "py-1.5", "px-3", "text-sm", "text-white", "focus:border-blue-500", "outline-none", 3, "ngModelChange", "ngModel"], [1, "text-gray-600"], [1, "bg-blue-600", "hover:bg-blue-500", "disabled:bg-gray-700", "disabled:text-gray-500", "text-white", "text-xs", "font-semibold", "px-4", "py-2", "rounded-xl", "transition-colors", 3, "click", "disabled"], [1, "text-gray-400", "hover:text-white", "text-xs", "px-2", "py-2", "transition-colors"], [1, "px-4", "py-2", "rounded-xl", "text-xs", "font-semibold", "border", "transition-all", 3, "click"], [1, "text-gray-400", "hover:text-white", "text-xs", "px-2", "py-2", "transition-colors", 3, "click"], [1, "grid", "grid-cols-1", "md:grid-cols-3", "gap-4", "mb-8"], [1, "bg-gray-900/80", "border", "border-gray-800", "rounded-2xl", "p-6", "animate-pulse"], [1, "bg-gray-900/80", "border", "border-gray-800", "rounded-2xl", "p-6", "h-80", "animate-pulse"], [1, "h-5", "bg-gray-700", "rounded", "w-40", "mb-4"], [1, "h-full", "bg-gray-800", "rounded-xl"], [1, "h-4", "bg-gray-700", "rounded", "w-24", "mb-3"], [1, "h-8", "bg-gray-700", "rounded", "w-32"], [1, "grid", "grid-cols-1", "md:grid-cols-3", "gap-4", "mb-6"], [1, "bg-gradient-to-br", "from-blue-900/40", "to-blue-800/20", "border", "border-blue-800/30", "rounded-2xl", "p-6"], [1, "text-xs", "font-semibold", "text-blue-400", "uppercase", "tracking-wider", "mb-2"], [1, "text-xs", "text-gray-500", "mt-1"], [1, "bg-gradient-to-br", "from-emerald-900/40", "to-emerald-800/20", "border", "border-emerald-800/30", "rounded-2xl", "p-6"], [1, "text-xs", "font-semibold", "text-emerald-400", "uppercase", "tracking-wider", "mb-2"], [1, "bg-gradient-to-br", "from-purple-900/40", "to-purple-800/20", "border", "border-purple-800/30", "rounded-2xl", "p-6"], [1, "text-xs", "font-semibold", "text-purple-400", "uppercase", "tracking-wider", "mb-2"], [1, "bg-gray-900/80", "border", "border-gray-800", "rounded-2xl", "p-6", "mb-6"], [1, "flex", "items-center", "justify-between", "mb-4"], [1, "text-lg", "font-semibold", "text-white"], [1, "flex", "items-center", "gap-3"], [1, "text-xs", "text-gray-400", "hover:text-white", "bg-gray-800", "px-3", "py-1", "rounded-lg", "transition-colors", "flex", "items-center", "gap-1"], [1, "text-xs", "text-gray-500"], [1, "relative", 2, "height", "300px"], [2, "width", "100%", "height", "100%", 3, "mousemove", "click", "mouseleave"], [1, "absolute", "pointer-events-none", "bg-gray-800", "border", "border-gray-600", "rounded-xl", "px-4", "py-3", "shadow-2xl", "z-10", "min-w-[160px]", 3, "left", "top"], [1, "bg-gray-900/80", "border-2", "border-amber-800/40", "rounded-2xl", "p-6", "mb-6", "animate-fadeIn"], [1, "grid", "grid-cols-1", "lg:grid-cols-2", "gap-6"], [1, "bg-gray-900/80", "border", "border-gray-800", "rounded-2xl", "p-6"], [1, "text-lg", "font-semibold", "text-white", "mb-5"], [1, "text-gray-500", "text-sm", "text-center", "py-8"], [1, "space-y-4"], [1, "space-y-4", "mb-6"], [1, "border-t", "border-gray-800", "pt-4"], [1, "flex", "items-center", "justify-between"], [1, "text-sm", "font-bold", "text-white"], [1, "flex", "items-center", "justify-between", "mt-1"], [1, "text-sm", "font-bold", "text-emerald-400"], [1, "text-xs", "text-gray-400", "hover:text-white", "bg-gray-800", "px-3", "py-1", "rounded-lg", "transition-colors", "flex", "items-center", "gap-1", 3, "click"], [1, "absolute", "pointer-events-none", "bg-gray-800", "border", "border-gray-600", "rounded-xl", "px-4", "py-3", "shadow-2xl", "z-10", "min-w-[160px]"], [1, "text-[10px]", "text-gray-400", "font-medium", "mb-1.5"], [1, "flex", "items-center", "justify-between", "gap-4", "mb-1"], [1, "text-sm", "font-bold", "text-blue-400"], [1, "flex", "items-center", "justify-between", "gap-4"], [1, "text-[9px]", "text-gray-500", "mt-2", "text-center", "border-t", "border-gray-700", "pt-1.5"], [1, "h-8", "w-8", "rounded-lg", "bg-amber-500/15", "flex", "items-center", "justify-center"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", "stroke-width", "2", 1, "h-4", "w-4", "text-amber-400"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"], [1, "text-base", "font-semibold", "text-white"], [1, "text-gray-400", "hover:text-white", "p-1.5", "hover:bg-gray-800", "rounded-lg", "transition-colors", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", "stroke-width", "2", 1, "h-5", "w-5"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M6 18L18 6M6 6l12 12"], [1, "flex", "items-center", "justify-center", "py-8"], [1, "text-center", "py-8"], [1, "h-6", "w-6", "border-2", "border-amber-500", "border-t-transparent", "rounded-full", "animate-spin"], [1, "text-sm", "text-gray-400", "ml-3"], [1, "text-sm", "text-gray-500"], [1, "grid", "grid-cols-3", "gap-3", "mb-4"], [1, "bg-gray-800/60", "rounded-xl", "p-3", "text-center"], [1, "text-lg", "font-bold", "text-white"], [1, "text-[10px]", "text-gray-500"], [1, "text-lg", "font-bold", "text-blue-400"], [1, "text-lg", "font-bold", "text-emerald-400"], [1, "overflow-x-auto"], [1, "w-full", "text-sm"], [1, "border-b", "border-gray-800"], [1, "text-left", "text-xs", "font-semibold", "text-gray-400", "uppercase", "py-2", "px-3"], [1, "text-right", "text-xs", "font-semibold", "text-gray-400", "uppercase", "py-2", "px-3"], [1, "border-b", "border-gray-800/50", "hover:bg-gray-800/30", "transition-colors"], [1, "py-3", "px-3"], [1, "text-sm", "font-mono", "font-semibold", "text-white"], [1, "text-sm", "text-white"], [1, "text-[11px]", "text-gray-500"], [1, "text-[10px]", "font-semibold", "uppercase", "px-2", "py-0.5", "rounded-lg"], [1, "space-y-0.5"], [1, "text-xs", "text-gray-300"], [1, "py-3", "px-3", "text-right"], [1, "text-gray-500"], [1, "cursor-pointer", "group"], [1, "cursor-pointer", "group", 3, "click"], [1, "flex", "items-center", "justify-between", "mb-1.5"], [1, "text-xs", "font-bold", "text-gray-500", "w-5"], [1, "text-sm", "font-semibold", "text-white", "group-hover:text-blue-400", "transition-colors"], [1, "text-[11px]", "text-gray-500", "font-mono"], [1, "text-right", "flex", "items-center", "gap-3"], [1, "text-sm", "font-semibold", "text-white"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", "stroke-width", "2", 1, "h-4", "w-4", "text-gray-600", "group-hover:text-blue-400", "transition-all"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M19 9l-7 7-7-7"], [1, "h-2", "bg-gray-800", "rounded-full", "overflow-hidden"], [1, "h-full", "rounded-full", "transition-all", "duration-500"], [1, "mt-3", "bg-gray-800/40", "border", "border-gray-700/50", "rounded-xl", "p-4"], [1, "mt-3", "bg-gray-800/40", "border", "border-gray-700/50", "rounded-xl", "p-4", 3, "click"], [1, "grid", "grid-cols-3", "gap-3", "mb-3"], [1, "text-center"], [1, "flex", "items-center", "gap-1.5", "text-[11px]", "text-gray-500"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", "stroke-width", "2", 1, "h-3.5", "w-3.5"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"], [1, "text-sm", "text-gray-300"], [1, "h-2.5", "bg-gray-800", "rounded-full", "overflow-hidden"]], template: function SalesAnalytics_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "div", 3)(3, "div")(4, "h1", 4);
      \u0275\u0275text(5, "Sat\u0131\u015F Analiti\u011Fi");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "p", 5);
      \u0275\u0275text(7, "Ma\u011Fazan\u0131z\u0131n sat\u0131\u015F performans\u0131n\u0131 detayl\u0131 inceleyin");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(8, "div", 6)(9, "div", 7)(10, "div", 8);
      \u0275\u0275repeaterCreate(11, SalesAnalytics_For_12_Template, 2, 3, "button", 9, _forTrack0);
      \u0275\u0275elementEnd();
      \u0275\u0275element(13, "div", 10);
      \u0275\u0275elementStart(14, "div", 11)(15, "label", 12);
      \u0275\u0275text(16, "\xD6zel Aral\u0131k:");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "input", 13);
      \u0275\u0275listener("ngModelChange", function SalesAnalytics_Template_input_ngModelChange_17_listener($event) {
        return ctx.startDate.set($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "span", 14);
      \u0275\u0275text(19, "\u2014");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(20, "input", 13);
      \u0275\u0275listener("ngModelChange", function SalesAnalytics_Template_input_ngModelChange_20_listener($event) {
        return ctx.endDate.set($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(21, "button", 15);
      \u0275\u0275listener("click", function SalesAnalytics_Template_button_click_21_listener() {
        return ctx.applyDateFilter();
      });
      \u0275\u0275text(22, " Uygula ");
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(23, SalesAnalytics_Conditional_23_Template, 2, 0, "button", 16);
      \u0275\u0275elementEnd()()();
      \u0275\u0275conditionalCreate(24, SalesAnalytics_Conditional_24_Template, 6, 1)(25, SalesAnalytics_Conditional_25_Template, 60, 14);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      let tmp_5_0;
      \u0275\u0275advance(11);
      \u0275\u0275repeater(\u0275\u0275pureFunction5(10, _c6, \u0275\u0275pureFunction0(5, _c1), \u0275\u0275pureFunction0(6, _c2), \u0275\u0275pureFunction0(7, _c3), \u0275\u0275pureFunction0(8, _c4), \u0275\u0275pureFunction0(9, _c5)));
      \u0275\u0275advance(6);
      \u0275\u0275property("ngModel", ctx.startDate());
      \u0275\u0275advance(3);
      \u0275\u0275property("ngModel", ctx.endDate());
      \u0275\u0275advance();
      \u0275\u0275property("disabled", !ctx.startDate() || !ctx.endDate());
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.startDate() || ctx.endDate() ? 23 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.isLoading() ? 24 : (tmp_5_0 = ctx.analytics()) ? 25 : -1, tmp_5_0);
    }
  }, dependencies: [CommonModule, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, DecimalPipe], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SalesAnalytics, [{
    type: Component,
    args: [{ selector: "app-sales-analytics", standalone: true, imports: [CommonModule, FormsModule], template: `<div class="min-h-screen bg-gray-950">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

    <!-- Header -->
    <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
      <div>
        <h1 class="text-3xl font-bold text-white">Sat\u0131\u015F Analiti\u011Fi</h1>
        <p class="text-gray-400 text-sm mt-1">Ma\u011Fazan\u0131z\u0131n sat\u0131\u015F performans\u0131n\u0131 detayl\u0131 inceleyin</p>
      </div>
    </div>

    <!-- Date Filter Bar -->
    <div class="bg-gray-900/80 border border-gray-800 rounded-2xl p-4 mb-6">
      <div class="flex flex-col lg:flex-row items-start lg:items-center gap-4">
        <!-- Preset Buttons -->
        <div class="flex gap-2 flex-wrap">
          @for (p of [
            {key: 'all', label: 'T\xFCm\xFC'},
            {key: '7d', label: '7 G\xFCn'},
            {key: '30d', label: '30 G\xFCn'},
            {key: '90d', label: '90 G\xFCn'},
            {key: 'year', label: 'Bu Y\u0131l'}
          ]; track p.key) {
            <button (click)="setPreset(p.key)"
              [class]="activePreset() === p.key
                ? 'bg-blue-600 text-white border-blue-500'
                : 'bg-gray-800 text-gray-400 border-gray-700 hover:text-white hover:border-gray-600'"
              class="px-4 py-2 rounded-xl text-xs font-semibold border transition-all">
              {{ p.label }}
            </button>
          }
        </div>

        <div class="hidden lg:block w-px h-8 bg-gray-700"></div>

        <!-- Custom Date Range -->
        <div class="flex items-center gap-2 flex-wrap">
          <label class="text-xs text-gray-500 font-medium">\xD6zel Aral\u0131k:</label>
          <input type="date" [ngModel]="startDate()" (ngModelChange)="startDate.set($event)"
            class="bg-gray-800 border border-gray-700 rounded-lg py-1.5 px-3 text-sm text-white focus:border-blue-500 outline-none">
          <span class="text-gray-600">\u2014</span>
          <input type="date" [ngModel]="endDate()" (ngModelChange)="endDate.set($event)"
            class="bg-gray-800 border border-gray-700 rounded-lg py-1.5 px-3 text-sm text-white focus:border-blue-500 outline-none">
          <button (click)="applyDateFilter()"
            [disabled]="!startDate() || !endDate()"
            class="bg-blue-600 hover:bg-blue-500 disabled:bg-gray-700 disabled:text-gray-500 text-white text-xs font-semibold px-4 py-2 rounded-xl transition-colors">
            Uygula
          </button>
          @if (startDate() || endDate()) {
            <button (click)="clearFilter()"
              class="text-gray-400 hover:text-white text-xs px-2 py-2 transition-colors">
              \u2715 Temizle
            </button>
          }
        </div>
      </div>
    </div>

    <!-- Loading -->
    @if (isLoading()) {
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        @for (i of [1,2,3]; track i) {
          <div class="bg-gray-900/80 border border-gray-800 rounded-2xl p-6 animate-pulse">
            <div class="h-4 bg-gray-700 rounded w-24 mb-3"></div>
            <div class="h-8 bg-gray-700 rounded w-32"></div>
          </div>
        }
      </div>
      <div class="bg-gray-900/80 border border-gray-800 rounded-2xl p-6 h-80 animate-pulse">
        <div class="h-5 bg-gray-700 rounded w-40 mb-4"></div>
        <div class="h-full bg-gray-800 rounded-xl"></div>
      </div>
    } @else if (analytics(); as data) {

      <!-- KPI Cards -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div class="bg-gradient-to-br from-blue-900/40 to-blue-800/20 border border-blue-800/30 rounded-2xl p-6">
          <p class="text-xs font-semibold text-blue-400 uppercase tracking-wider mb-2">Toplam Gelir</p>
          <p class="text-3xl font-bold text-white">\${{ data.totalRevenue | number:'1.2-2' }}</p>
          <p class="text-xs text-gray-500 mt-1">{{ activePreset() === 'all' ? 'T\xFCm zamanlar' : 'Se\xE7ili d\xF6nem' }}</p>
        </div>
        <div class="bg-gradient-to-br from-emerald-900/40 to-emerald-800/20 border border-emerald-800/30 rounded-2xl p-6">
          <p class="text-xs font-semibold text-emerald-400 uppercase tracking-wider mb-2">Toplam Sipari\u015Fler</p>
          <p class="text-3xl font-bold text-white">{{ data.totalOrders }}</p>
          <p class="text-xs text-gray-500 mt-1">{{ activePreset() === 'all' ? 'T\xFCm zamanlar' : 'Se\xE7ili d\xF6nem' }}</p>
        </div>
        <div class="bg-gradient-to-br from-purple-900/40 to-purple-800/20 border border-purple-800/30 rounded-2xl p-6">
          <p class="text-xs font-semibold text-purple-400 uppercase tracking-wider mb-2">Sat\u0131lan \xDCr\xFCn Adedi</p>
          <p class="text-3xl font-bold text-white">{{ data.totalProductsSold }}</p>
          <p class="text-xs text-gray-500 mt-1">Toplam sat\u0131lan adet</p>
        </div>
      </div>

      <!-- Revenue Chart with Drill-Down -->
      <div class="bg-gray-900/80 border border-gray-800 rounded-2xl p-6 mb-6">
        <div class="flex items-center justify-between mb-4">
          <h2 class="text-lg font-semibold text-white">Gelir Grafi\u011Fi</h2>
          <div class="flex items-center gap-3">
            @if (selectedDate()) {
              <button (click)="closeDrillDown()"
                class="text-xs text-gray-400 hover:text-white bg-gray-800 px-3 py-1 rounded-lg transition-colors flex items-center gap-1">
                \u2715 Detay\u0131 kapat
              </button>
            }
            <span class="text-xs text-gray-500">{{ data.dailyRevenue.length }} g\xFCn</span>
          </div>
        </div>
        <!-- Chart Container -->
        <div class="relative" style="height: 300px;">
          <canvas #revenueChart style="width: 100%; height: 100%;"
            (mousemove)="onChartMouseMove($event)"
            (click)="onChartClick($event)"
            (mouseleave)="onChartLeave()">
          </canvas>

          <!-- Hover Tooltip -->
          @if (hoveredPoint(); as hp) {
            <div class="absolute pointer-events-none bg-gray-800 border border-gray-600 rounded-xl px-4 py-3 shadow-2xl z-10 min-w-[160px]"
              [style.left.px]="hp.x < 200 ? hp.x + 15 : hp.x - 175"
              [style.top.px]="hp.y - 80 < 0 ? hp.y + 15 : hp.y - 80">
              <p class="text-[10px] text-gray-400 font-medium mb-1.5">{{ hp.data.date }}</p>
              <div class="flex items-center justify-between gap-4 mb-1">
                <span class="text-xs text-gray-500">Gelir</span>
                <span class="text-sm font-bold text-blue-400">\${{ hp.data.revenue | number:'1.2-2' }}</span>
              </div>
              <div class="flex items-center justify-between gap-4">
                <span class="text-xs text-gray-500">Sipari\u015F</span>
                <span class="text-sm font-bold text-emerald-400">{{ hp.data.orderCount }}</span>
              </div>
              <p class="text-[9px] text-gray-500 mt-2 text-center border-t border-gray-700 pt-1.5">T\u0131kla \u2192 detay g\xF6r</p>
            </div>
          }
        </div>
      </div>

      <!-- \u2550\u2550\u2550 DRILL-DOWN PANEL \u2550\u2550\u2550 -->
      @if (selectedDate()) {
        <div class="bg-gray-900/80 border-2 border-amber-800/40 rounded-2xl p-6 mb-6 animate-fadeIn">
          <div class="flex items-center justify-between mb-4">
            <div class="flex items-center gap-3">
              <div class="h-8 w-8 rounded-lg bg-amber-500/15 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <div>
                <h3 class="text-base font-semibold text-white">Detay \u2014 {{ selectedDate() }}</h3>
                <p class="text-xs text-gray-500">Bu g\xFCne ait sipari\u015F detaylar\u0131</p>
              </div>
            </div>
            <button (click)="closeDrillDown()"
              class="text-gray-400 hover:text-white p-1.5 hover:bg-gray-800 rounded-lg transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          @if (isDrillLoading()) {
            <div class="flex items-center justify-center py-8">
              <div class="h-6 w-6 border-2 border-amber-500 border-t-transparent rounded-full animate-spin"></div>
              <span class="text-sm text-gray-400 ml-3">Sipari\u015Fler y\xFCkleniyor...</span>
            </div>
          } @else if (drillDownOrders().length === 0) {
            <div class="text-center py-8">
              <p class="text-sm text-gray-500">Bu tarihte sipari\u015F bulunamad\u0131.</p>
            </div>
          } @else {
            <!-- Mini KPI for selected day -->
            <div class="grid grid-cols-3 gap-3 mb-4">
              <div class="bg-gray-800/60 rounded-xl p-3 text-center">
                <p class="text-lg font-bold text-white">{{ drillDownOrders().length }}</p>
                <p class="text-[10px] text-gray-500">Sipari\u015F</p>
              </div>
              <div class="bg-gray-800/60 rounded-xl p-3 text-center">
                <p class="text-lg font-bold text-blue-400">\${{ getDayRevenue() | number:'1.2-2' }}</p>
                <p class="text-[10px] text-gray-500">Gelir</p>
              </div>
              <div class="bg-gray-800/60 rounded-xl p-3 text-center">
                <p class="text-lg font-bold text-emerald-400">{{ getDayItemCount() }}</p>
                <p class="text-[10px] text-gray-500">\xDCr\xFCn Adedi</p>
              </div>
            </div>

            <!-- Orders Table -->
            <div class="overflow-x-auto">
              <table class="w-full text-sm">
                <thead>
                  <tr class="border-b border-gray-800">
                    <th class="text-left text-xs font-semibold text-gray-400 uppercase py-2 px-3">Sipari\u015F #</th>
                    <th class="text-left text-xs font-semibold text-gray-400 uppercase py-2 px-3">M\xFC\u015Fteri</th>
                    <th class="text-left text-xs font-semibold text-gray-400 uppercase py-2 px-3">Durum</th>
                    <th class="text-left text-xs font-semibold text-gray-400 uppercase py-2 px-3">\xDCr\xFCnler</th>
                    <th class="text-right text-xs font-semibold text-gray-400 uppercase py-2 px-3">Tutar</th>
                  </tr>
                </thead>
                <tbody>
                  @for (order of drillDownOrders(); track order.id) {
                    <tr class="border-b border-gray-800/50 hover:bg-gray-800/30 transition-colors">
                      <td class="py-3 px-3">
                        <span class="text-sm font-mono font-semibold text-white">#{{ order.id }}</span>
                      </td>
                      <td class="py-3 px-3">
                        <p class="text-sm text-white">{{ order.customerName }}</p>
                        <p class="text-[11px] text-gray-500">{{ order.customerEmail }}</p>
                      </td>
                      <td class="py-3 px-3">
                        <span class="text-[10px] font-semibold uppercase px-2 py-0.5 rounded-lg"
                          [class]="statusTextColors[order.status] + ' ' + (statusColors[order.status] ? statusColors[order.status].replace('bg-', 'bg-') + '/15' : '')">
                          {{ statusLabels[order.status] || order.status }}
                        </span>
                      </td>
                      <td class="py-3 px-3">
                        <div class="space-y-0.5">
                          @for (item of order.items; track item.id) {
                            <p class="text-xs text-gray-300">{{ item.productName }} <span class="text-gray-500">\xD7 {{ item.quantity }}</span></p>
                          }
                        </div>
                      </td>
                      <td class="py-3 px-3 text-right">
                        <span class="text-sm font-bold text-white">\${{ order.totalPrice | number:'1.2-2' }}</span>
                      </td>
                    </tr>
                  }
                </tbody>
              </table>
            </div>
          }
        </div>
      }

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">

        <!-- Top Selling Products with Drill-Down -->
        <div class="bg-gray-900/80 border border-gray-800 rounded-2xl p-6">
          <h2 class="text-lg font-semibold text-white mb-5">En \xC7ok Satan \xDCr\xFCnler</h2>
          @if (data.topProducts.length === 0) {
            <p class="text-gray-500 text-sm text-center py-8">Hen\xFCz sat\u0131\u015F verisi yok.</p>
          } @else {
            <div class="space-y-4">
              @for (product of data.topProducts; track product.sku; let i = $index) {
                <div class="cursor-pointer group" (click)="toggleProductDrill(product.sku)">
                  <div class="flex items-center justify-between mb-1.5">
                    <div class="flex items-center gap-3">
                      <span class="text-xs font-bold text-gray-500 w-5">{{ i + 1 }}</span>
                      <div>
                        <p class="text-sm font-semibold text-white group-hover:text-blue-400 transition-colors">{{ product.productName }}</p>
                        <p class="text-[11px] text-gray-500 font-mono">{{ product.sku }}</p>
                      </div>
                    </div>
                    <div class="text-right flex items-center gap-3">
                      <div>
                        <p class="text-sm font-semibold text-white">{{ product.totalQuantitySold }} adet</p>
                        <p class="text-[11px] text-gray-500">\${{ product.totalRevenue | number:'1.2-2' }}</p>
                      </div>
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-gray-600 group-hover:text-blue-400 transition-all"
                        [class.rotate-180]="selectedProduct() === product.sku"
                        fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                  <!-- Bar -->
                  <div class="h-2 bg-gray-800 rounded-full overflow-hidden">
                    <div class="h-full rounded-full transition-all duration-500"
                      [style.width.%]="(product.totalQuantitySold / getMaxQuantity()) * 100"
                      [class]="i === 0 ? 'bg-blue-500' : i === 1 ? 'bg-blue-400' : 'bg-blue-300/60'">
                    </div>
                  </div>

                  <!-- Product Drill-Down Detail -->
                  @if (selectedProduct() === product.sku) {
                    <div class="mt-3 bg-gray-800/40 border border-gray-700/50 rounded-xl p-4" (click)="$event.stopPropagation()">
                      <div class="grid grid-cols-3 gap-3 mb-3">
                        <div class="text-center">
                          <p class="text-sm font-bold text-white">{{ product.totalQuantitySold }}</p>
                          <p class="text-[10px] text-gray-500">Toplam Adet</p>
                        </div>
                        <div class="text-center">
                          <p class="text-sm font-bold text-blue-400">\${{ product.totalRevenue | number:'1.2-2' }}</p>
                          <p class="text-[10px] text-gray-500">Toplam Gelir</p>
                        </div>
                        <div class="text-center">
                          <p class="text-sm font-bold text-emerald-400">\${{ (product.totalRevenue / product.totalQuantitySold) | number:'1.2-2' }}</p>
                          <p class="text-[10px] text-gray-500">Birim Fiyat</p>
                        </div>
                      </div>
                      <div class="flex items-center gap-1.5 text-[11px] text-gray-500">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                        </svg>
                        Toplam gelirin %{{ ((product.totalRevenue / data.totalRevenue) * 100) | number:'1.0-0' }}'{{ (product.totalRevenue / data.totalRevenue) * 100 > 50 ? 'i' : '\u0131' }} bu \xFCr\xFCne ait
                      </div>
                    </div>
                  }
                </div>
              }
            </div>
          }
        </div>

        <!-- Order Status Distribution -->
        <div class="bg-gray-900/80 border border-gray-800 rounded-2xl p-6">
          <h2 class="text-lg font-semibold text-white mb-5">Sipari\u015F Durumu Da\u011F\u0131l\u0131m\u0131</h2>
          
          <div class="space-y-4 mb-6">
            @for (item of data.statusDistribution; track item.status) {
              <div>
                <div class="flex items-center justify-between mb-1.5">
                  <span class="text-sm text-gray-300">{{ statusLabels[item.status] }}</span>
                  <span class="text-sm font-semibold text-white">{{ item.count }}</span>
                </div>
                <div class="h-2.5 bg-gray-800 rounded-full overflow-hidden">
                  <div class="h-full rounded-full transition-all duration-500"
                    [style.width.%]="(item.count / getTotalStatusCount()) * 100"
                    [class]="statusColors[item.status]">
                  </div>
                </div>
              </div>
            }
          </div>

          <div class="border-t border-gray-800 pt-4">
            <div class="flex items-center justify-between">
              <span class="text-xs text-gray-500">Toplam Sipari\u015F</span>
              <span class="text-sm font-bold text-white">{{ getTotalStatusCount() }}</span>
            </div>
            <div class="flex items-center justify-between mt-1">
              <span class="text-xs text-gray-500">Tamamlanan (Delivered)</span>
              <span class="text-sm font-bold text-emerald-400">
                @for (s of data.statusDistribution; track s.status) {
                  @if (s.status === 'DELIVERED') {
                    {{ s.count }}
                  }
                }
              </span>
            </div>
          </div>
        </div>
      </div>
    }
  </div>
</div>
` }]
  }], () => [], { canvasRef: [{
    type: ViewChild,
    args: ["revenueChart"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SalesAnalytics, { className: "SalesAnalytics", filePath: "app/features/corporate/analytics/sales-analytics.ts", lineNumber: 20 });
})();
export {
  SalesAnalytics
};
//# sourceMappingURL=chunk-XS4X4S6B.mjs.map
