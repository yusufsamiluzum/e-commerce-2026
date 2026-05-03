import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-MKAKFE2K.js";
import {
  OrderItemComponent,
  OrderService
} from "./chunk-NCBF4RK3.js";
import {
  RouterLink,
  RouterModule
} from "./chunk-N6CICK2R.js";
import "./chunk-27YRKIWA.js";
import {
  RefundService
} from "./chunk-VHVBE7NA.js";
import {
  toSignal
} from "./chunk-XHSYZCYO.js";
import {
  CommonModule,
  Component,
  DatePipe,
  DecimalPipe,
  catchError,
  inject,
  map,
  of,
  setClassMetadata,
  shareReplay,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
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
import {
  __spreadProps,
  __spreadValues
} from "./chunk-H2SRQSE4.js";

// src/app/features/individual/profile/purchase-history/purchase-history.ts
var _c0 = () => [1, 2, 3];
var _c1 = () => [];
var _forTrack0 = ($index, $item) => $item.id;
function PurchaseHistory_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 12);
    \u0275\u0275listener("click", function PurchaseHistory_Conditional_11_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onSearch(""));
    });
    \u0275\u0275element(1, "i", 13);
    \u0275\u0275elementEnd();
  }
}
function PurchaseHistory_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275element(1, "i", 14);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.apiError(), " ");
  }
}
function PurchaseHistory_Conditional_13_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15)(1, "div", 16)(2, "div", 17);
    \u0275\u0275element(3, "div", 18)(4, "div", 19);
    \u0275\u0275elementEnd();
    \u0275\u0275element(5, "div", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 21);
    \u0275\u0275element(7, "div", 22);
    \u0275\u0275elementStart(8, "div", 23);
    \u0275\u0275element(9, "div", 24)(10, "div", 25);
    \u0275\u0275elementEnd()()();
  }
}
function PurchaseHistory_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275repeaterCreate(1, PurchaseHistory_Conditional_13_For_2_Template, 11, 0, "div", 15, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275repeater(\u0275\u0275pureFunction0(0, _c0));
  }
}
function PurchaseHistory_Conditional_14_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275element(0, "i", 26);
    \u0275\u0275elementStart(1, "h3", 27);
    \u0275\u0275text(2, "Sonu\xE7 Bulunamad\u0131");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 28);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 29);
    \u0275\u0275listener("click", function PurchaseHistory_Conditional_14_Conditional_1_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onSearch(""));
    });
    \u0275\u0275element(6, "i", 30);
    \u0275\u0275text(7, " Aramay\u0131 Temizle ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1('"', ctx_r1.searchQuery(), '" ile e\u015Fle\u015Fen sipari\u015F yok.');
  }
}
function PurchaseHistory_Conditional_14_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 31);
    \u0275\u0275element(1, "i", 32);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "h3", 33);
    \u0275\u0275text(3, "Ge\xE7mi\u015F Bulunamad\u0131");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 34);
    \u0275\u0275text(5, "Hen\xFCz tamamlanm\u0131\u015F bir sipari\u015Finiz bulunmamaktad\u0131r.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 35);
    \u0275\u0275element(7, "i", 36);
    \u0275\u0275text(8, " \xDCr\xFCnlere G\xF6z At ");
    \u0275\u0275elementEnd();
  }
}
function PurchaseHistory_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11);
    \u0275\u0275conditionalCreate(1, PurchaseHistory_Conditional_14_Conditional_1_Template, 8, 1)(2, PurchaseHistory_Conditional_14_Conditional_2_Template, 9, 0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.searchQuery() ? 1 : 2);
  }
}
function PurchaseHistory_Conditional_15_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 37);
    \u0275\u0275element(1, "i", 40);
    \u0275\u0275text(2);
    \u0275\u0275elementStart(3, "span", 41);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275text(5, " sonu\xE7 ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(' "', ctx_r1.searchQuery(), '" i\xE7in ');
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.filteredHistory().length);
  }
}
function PurchaseHistory_Conditional_15_For_3_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "p", 44);
    \u0275\u0275text(2, "Tarih");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 53);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "date");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const order_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(5, 1, order_r4.orderDate, "dd MMM yyyy"));
  }
}
function PurchaseHistory_Conditional_15_For_3_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "p", 44);
    \u0275\u0275text(2, "Ma\u011Faza");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 54);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const order_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(order_r4.storeName);
  }
}
function PurchaseHistory_Conditional_15_For_3_For_18_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 59);
    \u0275\u0275element(1, "i", 52);
    \u0275\u0275text(2, " Talep Edildi ");
    \u0275\u0275elementEnd();
  }
}
function PurchaseHistory_Conditional_15_For_3_For_18_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 63);
    \u0275\u0275listener("click", function PurchaseHistory_Conditional_15_For_3_For_18_Conditional_6_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.closeRefundForm());
    });
    \u0275\u0275element(1, "i", 64);
    \u0275\u0275text(2, " Kapat ");
    \u0275\u0275elementEnd();
  }
}
function PurchaseHistory_Conditional_15_For_3_For_18_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 65);
    \u0275\u0275listener("click", function PurchaseHistory_Conditional_15_For_3_For_18_Conditional_7_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const item_r7 = \u0275\u0275nextContext().$implicit;
      const order_r4 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openRefundForm(order_r4.id, item_r7.id));
    });
    \u0275\u0275element(1, "i", 66);
    \u0275\u0275text(2, " \u0130ade \u0130ste ");
    \u0275\u0275elementEnd();
  }
}
function PurchaseHistory_Conditional_15_For_3_For_18_Conditional_8_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 67)(1, "div", 69);
    \u0275\u0275element(2, "i", 70);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 71);
    \u0275\u0275text(4, "\u0130ade talebiniz al\u0131nd\u0131!");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 72);
    \u0275\u0275text(6, "En k\u0131sa s\xFCrede incelenecektir.");
    \u0275\u0275elementEnd()();
  }
}
function PurchaseHistory_Conditional_15_For_3_For_18_Conditional_8_Conditional_2_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 81);
    \u0275\u0275element(1, "i", 85);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_24_0;
    const ctx_r1 = \u0275\u0275nextContext(6);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", (tmp_24_0 = ctx_r1.activeRefundForm()) == null ? null : tmp_24_0.error, " ");
  }
}
function PurchaseHistory_Conditional_15_For_3_For_18_Conditional_8_Conditional_2_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 86);
    \u0275\u0275text(1, " G\xF6nderiliyor... ");
  }
}
function PurchaseHistory_Conditional_15_For_3_For_18_Conditional_8_Conditional_2_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 87);
    \u0275\u0275text(1, " Talebi G\xF6nder ");
  }
}
function PurchaseHistory_Conditional_15_For_3_For_18_Conditional_8_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 68)(1, "div", 73);
    \u0275\u0275element(2, "i", 74);
    \u0275\u0275elementStart(3, "p", 75);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "p", 76);
    \u0275\u0275text(6, " \u0130ade tutar\u0131: ");
    \u0275\u0275elementStart(7, "span", 77);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275text(10, " otomatik hesaplanacakt\u0131r. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div")(12, "label", 78);
    \u0275\u0275text(13, " \u0130ade Sebebi ");
    \u0275\u0275elementStart(14, "span", 79);
    \u0275\u0275text(15, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "textarea", 80);
    \u0275\u0275listener("ngModelChange", function PurchaseHistory_Conditional_15_For_3_For_18_Conditional_8_Conditional_2_Template_textarea_ngModelChange_16_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r1.updateReason($event));
    });
    \u0275\u0275text(17, "                          ");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(18, PurchaseHistory_Conditional_15_For_3_For_18_Conditional_8_Conditional_2_Conditional_18_Template, 3, 1, "p", 81);
    \u0275\u0275elementStart(19, "div", 82)(20, "button", 83);
    \u0275\u0275listener("click", function PurchaseHistory_Conditional_15_For_3_For_18_Conditional_8_Conditional_2_Template_button_click_20_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r1.closeRefundForm());
    });
    \u0275\u0275text(21, " \u0130ptal ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "button", 84);
    \u0275\u0275listener("click", function PurchaseHistory_Conditional_15_For_3_For_18_Conditional_8_Conditional_2_Template_button_click_22_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r1.submitRefund());
    });
    \u0275\u0275conditionalCreate(23, PurchaseHistory_Conditional_15_For_3_For_18_Conditional_8_Conditional_2_Conditional_23_Template, 2, 0)(24, PurchaseHistory_Conditional_15_For_3_For_18_Conditional_8_Conditional_2_Conditional_24_Template, 2, 0);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_25_0;
    let tmp_26_0;
    let tmp_27_0;
    let tmp_28_0;
    let tmp_29_0;
    const item_r7 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("\u0130ade Talebi \u2014 ", item_r7.productName);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("$", \u0275\u0275pipeBind2(9, 7, item_r7.totalPrice, "1.2-2"));
    \u0275\u0275advance(8);
    \u0275\u0275property("ngModel", (tmp_25_0 = ctx_r1.activeRefundForm()) == null ? null : tmp_25_0.reason);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(((tmp_26_0 = ctx_r1.activeRefundForm()) == null ? null : tmp_26_0.error) ? 18 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", (tmp_27_0 = ctx_r1.activeRefundForm()) == null ? null : tmp_27_0.submitting);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", !((tmp_28_0 = ctx_r1.activeRefundForm()) == null ? null : tmp_28_0.reason == null ? null : tmp_28_0.reason.trim()) || ((tmp_28_0 = ctx_r1.activeRefundForm()) == null ? null : tmp_28_0.submitting));
    \u0275\u0275advance();
    \u0275\u0275conditional(((tmp_29_0 = ctx_r1.activeRefundForm()) == null ? null : tmp_29_0.submitting) ? 23 : 24);
  }
}
function PurchaseHistory_Conditional_15_For_3_For_18_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 62);
    \u0275\u0275conditionalCreate(1, PurchaseHistory_Conditional_15_For_3_For_18_Conditional_8_Conditional_1_Template, 7, 0, "div", 67)(2, PurchaseHistory_Conditional_15_For_3_For_18_Conditional_8_Conditional_2_Template, 25, 10, "div", 68);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_22_0;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275conditional(((tmp_22_0 = ctx_r1.activeRefundForm()) == null ? null : tmp_22_0.success) ? 1 : 2);
  }
}
function PurchaseHistory_Conditional_15_For_3_For_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "div", 55)(2, "div", 56);
    \u0275\u0275element(3, "app-order-item", 57);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 58);
    \u0275\u0275conditionalCreate(5, PurchaseHistory_Conditional_15_For_3_For_18_Conditional_5_Template, 3, 0, "span", 59)(6, PurchaseHistory_Conditional_15_For_3_For_18_Conditional_6_Template, 3, 0, "button", 60)(7, PurchaseHistory_Conditional_15_For_3_For_18_Conditional_7_Template, 3, 0, "button", 61);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(8, PurchaseHistory_Conditional_15_For_3_For_18_Conditional_8_Template, 3, 1, "div", 62);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r7 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275property("imageUrl", item_r7.productImageUrl)("name", item_r7.productName)("quantity", item_r7.quantity)("unitPrice", item_r7.unitPrice)("totalPrice", item_r7.totalPrice);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.isRefunded(item_r7.id) ? 5 : ctx_r1.isRefundFormOpen(item_r7.id) ? 6 : 7);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r1.isRefundFormOpen(item_r7.id) ? 8 : -1);
  }
}
function PurchaseHistory_Conditional_15_For_3_ForEmpty_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 48);
    \u0275\u0275text(1, "\xDCr\xFCn detaylar\u0131 y\xFCkleniyor...");
    \u0275\u0275elementEnd();
  }
}
function PurchaseHistory_Conditional_15_For_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 39);
    \u0275\u0275element(1, "div", 42);
    \u0275\u0275elementStart(2, "div", 43)(3, "div")(4, "p", 44);
    \u0275\u0275text(5, "Sipari\u015F No");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 45);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(8, PurchaseHistory_Conditional_15_For_3_Conditional_8_Template, 6, 4, "div");
    \u0275\u0275elementStart(9, "div")(10, "p", 44);
    \u0275\u0275text(11, "Toplam");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "p", 46);
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(15, PurchaseHistory_Conditional_15_For_3_Conditional_15_Template, 5, 1, "div");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 47);
    \u0275\u0275repeaterCreate(17, PurchaseHistory_Conditional_15_For_3_For_18_Template, 9, 7, "div", null, _forTrack0, false, PurchaseHistory_Conditional_15_For_3_ForEmpty_19_Template, 2, 0, "div", 48);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div", 49)(21, "span", 50);
    \u0275\u0275text(22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "span", 51);
    \u0275\u0275element(24, "i", 52);
    \u0275\u0275text(25, " Teslim Edildi ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const order_r4 = ctx.$implicit;
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1("#", order_r4.id.toString().padStart(6, "0"));
    \u0275\u0275advance();
    \u0275\u0275conditional(order_r4.orderDate ? 8 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("$", \u0275\u0275pipeBind2(14, 6, order_r4.totalPrice, "1.2-2"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(order_r4.storeName ? 15 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(order_r4.items || \u0275\u0275pureFunction0(9, _c1));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", (order_r4.items || \u0275\u0275pureFunction0(10, _c1)).length, " \xFCr\xFCn");
  }
}
function PurchaseHistory_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, PurchaseHistory_Conditional_15_Conditional_0_Template, 6, 2, "div", 37);
    \u0275\u0275elementStart(1, "div", 38);
    \u0275\u0275repeaterCreate(2, PurchaseHistory_Conditional_15_For_3_Template, 26, 11, "div", 39, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275conditional(ctx_r1.searchQuery() ? 0 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.filteredHistory());
  }
}
var PurchaseHistory = class _PurchaseHistory {
  orderService = inject(OrderService);
  refundService = inject(RefundService);
  searchQuery = signal("", ...ngDevMode ? [{ debugName: "searchQuery" }] : (
    /* istanbul ignore next */
    []
  ));
  apiError = signal("", ...ngDevMode ? [{ debugName: "apiError" }] : (
    /* istanbul ignore next */
    []
  ));
  // null → yükleniyor | [] → boş | [...] → dolu
  allHistory = toSignal(this.orderService.getUserOrders().pipe(map((orders) => orders.filter((o) => o.status === "DELIVERED").sort((a, b) => new Date(b.orderDate).getTime() - new Date(a.orderDate).getTime())), shareReplay(1), catchError(() => {
    this.apiError.set("Sat\u0131n al\u0131m ge\xE7mi\u015Fi y\xFCklenirken bir hata olu\u015Ftu.");
    return of([]);
  })), { initialValue: null });
  // Açık olan iade formu (her an tek bir form açık olabilir)
  activeRefundForm = signal(null, ...ngDevMode ? [{ debugName: "activeRefundForm" }] : (
    /* istanbul ignore next */
    []
  ));
  // Daha önce iade talep edilen item id'leri (başarıdan sonra eklenir)
  refundedItemIds = signal(/* @__PURE__ */ new Set(), ...ngDevMode ? [{ debugName: "refundedItemIds" }] : (
    /* istanbul ignore next */
    []
  ));
  filteredHistory() {
    const all = this.allHistory();
    if (all === null)
      return null;
    const q = this.searchQuery().trim().toLowerCase();
    if (!q)
      return all;
    return all.filter((o) => o.id.toString().padStart(6, "0").includes(q) || (o.storeName?.toLowerCase().includes(q) ?? false) || (o.items?.some((item) => item.productName.toLowerCase().includes(q)) ?? false));
  }
  onSearch(query) {
    this.searchQuery.set(query);
  }
  /** İade formu aç */
  openRefundForm(orderId, orderItemId) {
    this.activeRefundForm.set({
      orderId,
      orderItemId,
      reason: "",
      submitting: false,
      success: false,
      error: ""
    });
  }
  /** İade formu kapat */
  closeRefundForm() {
    this.activeRefundForm.set(null);
  }
  /** Sebep güncelle */
  updateReason(reason) {
    const form = this.activeRefundForm();
    if (form)
      this.activeRefundForm.set(__spreadProps(__spreadValues({}, form), { reason }));
  }
  /** İade talebini gönder */
  submitRefund() {
    const form = this.activeRefundForm();
    if (!form || !form.reason.trim())
      return;
    this.activeRefundForm.set(__spreadProps(__spreadValues({}, form), { submitting: true, error: "" }));
    this.refundService.createRefund({
      orderId: form.orderId,
      orderItemId: form.orderItemId,
      reason: form.reason.trim()
    }).subscribe({
      next: () => {
        this.activeRefundForm.set(__spreadProps(__spreadValues({}, form), { submitting: false, success: true }));
        const ids = new Set(this.refundedItemIds());
        ids.add(form.orderItemId);
        this.refundedItemIds.set(ids);
        setTimeout(() => this.closeRefundForm(), 2e3);
      },
      error: (err) => {
        const msg = err?.error?.error || "\u0130ade talebi olu\u015Fturulurken bir hata olu\u015Ftu.";
        this.activeRefundForm.set(__spreadProps(__spreadValues({}, form), { submitting: false, error: msg }));
      }
    });
  }
  isRefunded(itemId) {
    return this.refundedItemIds().has(itemId);
  }
  isRefundFormOpen(itemId) {
    return this.activeRefundForm()?.orderItemId === itemId;
  }
  static \u0275fac = function PurchaseHistory_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PurchaseHistory)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PurchaseHistory, selectors: [["app-purchase-history"]], decls: 16, vars: 4, consts: [[1, "p-6", "md:p-8", "space-y-6"], [1, "flex", "flex-col", "sm:flex-row", "sm:items-center", "justify-between", "pb-5", "border-b", "border-white/5", "gap-4"], [1, "text-2xl", "font-black", "text-white", "tracking-tight"], [1, "text-gray-500", "text-sm", "mt-1"], [1, "flex", "gap-2", "flex-shrink-0"], [1, "relative"], [1, "fas", "fa-search", "absolute", "left-3.5", "top-1/2", "-translate-y-1/2", "text-gray-600", "text-sm", "pointer-events-none"], ["type", "text", "placeholder", "Sipari\u015F no, \xFCr\xFCn, ma\u011Faza...", 1, "bg-gray-900/60", "border", "border-gray-700/60", "text-white", "text-sm", "rounded-xl", "pl-10", "pr-4", "py-2.5", "w-52", "focus:outline-none", "focus:ring-2", "focus:ring-blue-500/40", "focus:border-blue-500/60", "transition-all", "duration-200", "placeholder-gray-600", 3, "ngModelChange", "ngModel"], [1, "w-10", "h-10", "flex", "items-center", "justify-center", "rounded-xl", "border", "border-red-500/30", "text-red-400", "hover:bg-red-500/10", "transition-all", "duration-200", "active:scale-95", "flex-shrink-0"], [1, "flex", "items-center", "gap-3", "px-4", "py-3.5", "rounded-xl", "border", "border-red-500/30", "text-red-400", "text-sm", "font-medium", 2, "background", "rgba(239,68,68,0.08)"], [1, "space-y-5"], [1, "flex", "flex-col", "items-center", "justify-center", "py-20", "text-center", "rounded-2xl", "border", "border-white/5", 2, "background", "rgba(255,255,255,0.01)"], [1, "w-10", "h-10", "flex", "items-center", "justify-center", "rounded-xl", "border", "border-red-500/30", "text-red-400", "hover:bg-red-500/10", "transition-all", "duration-200", "active:scale-95", "flex-shrink-0", 3, "click"], [1, "fas", "fa-times", "text-sm"], [1, "fas", "fa-exclamation-circle"], [1, "rounded-2xl", "border", "border-white/5", "overflow-hidden", "animate-pulse", 2, "background", "rgba(255,255,255,0.02)"], [1, "flex", "justify-between", "px-5", "py-4", "border-b", "border-white/5"], [1, "flex", "gap-6"], [1, "h-4", "bg-gray-800", "rounded-lg", "w-20"], [1, "h-4", "bg-gray-800", "rounded-lg", "w-24"], [1, "h-7", "bg-gray-700", "rounded-lg", "w-28"], [1, "p-5", "flex", "items-center", "gap-4"], [1, "w-14", "h-14", "bg-gray-800", "rounded-xl", "flex-shrink-0"], [1, "flex-1", "space-y-2"], [1, "h-4", "bg-gray-700", "rounded-lg", "w-2/3"], [1, "h-3", "bg-gray-800", "rounded-lg", "w-1/4"], [1, "fas", "fa-search", "text-3xl", "text-gray-700", "mb-4"], [1, "text-lg", "font-black", "text-white", "mb-2"], [1, "text-gray-500", "text-sm"], [1, "mt-4", "inline-flex", "items-center", "gap-2", "px-5", "py-2", "rounded-xl", "text-sm", "font-semibold", "text-gray-300", "border", "border-gray-600", "hover:text-white", "transition-all", "active:scale-95", 2, "background", "rgba(255,255,255,0.03)", 3, "click"], [1, "fas", "fa-times"], [1, "w-20", "h-20", "rounded-2xl", "flex", "items-center", "justify-center", "mb-5", "shadow-lg", 2, "background", "linear-gradient(135deg, rgba(16,185,129,0.15), rgba(5,150,105,0.1))"], [1, "fas", "fa-receipt", "text-3xl", "text-emerald-400"], [1, "text-xl", "font-black", "text-white", "mb-2"], [1, "text-gray-500", "max-w-sm", "text-sm"], ["routerLink", "/katalog", 1, "mt-6", "inline-flex", "items-center", "gap-2", "px-6", "py-2.5", "rounded-xl", "text-sm", "font-bold", "text-white", "transition-all", "duration-200", "hover:shadow-lg", "hover:scale-105", "active:scale-95", 2, "background", "linear-gradient(135deg, #10b981, #059669)"], [1, "fas", "fa-shopping-bag"], [1, "text-xs", "text-gray-500", "flex", "items-center", "gap-2"], [1, "space-y-6"], [1, "relative", "rounded-2xl", "border", "border-white/5", "overflow-hidden", "group", "transition-all", "duration-300", "hover:border-emerald-500/15", "hover:-translate-y-0.5", "hover:shadow-xl", "hover:shadow-black/20", 2, "background", "rgba(255,255,255,0.02)"], [1, "fas", "fa-filter", "text-gray-700"], [1, "text-white", "font-bold"], [1, "absolute", "top-0", "left-0", "w-full", "h-0.5", "opacity-0", "group-hover:opacity-100", "transition-opacity", "duration-300", 2, "background", "linear-gradient(90deg, #10b981, #059669)"], [1, "grid", "grid-cols-2", "sm:grid-cols-4", "gap-4", "px-5", "md:px-6", "py-4", "border-b", "border-white/5", 2, "background", "rgba(255,255,255,0.02)"], [1, "text-[10px]", "text-gray-600", "uppercase", "tracking-widest", "font-bold", "mb-1"], [1, "text-sm", "font-black", "text-white"], [1, "text-sm", "font-black", "text-emerald-400"], [1, "divide-y", "divide-white/5"], [1, "px-5", "py-4", "text-xs", "text-gray-600", "italic"], [1, "flex", "items-center", "justify-between", "px-5", "md:px-6", "py-3", "border-t", "border-white/5", 2, "background", "rgba(255,255,255,0.01)"], [1, "text-xs", "text-gray-600"], [1, "inline-flex", "items-center", "gap-2", "px-3", "py-1", "rounded-lg", "text-[11px]", "font-bold", "border", "border-emerald-500/30", "text-emerald-400", 2, "background", "rgba(16,185,129,0.07)"], [1, "fas", "fa-check-circle", "text-[10px]"], [1, "text-sm", "font-semibold", "text-gray-200"], [1, "text-sm", "font-semibold", "text-blue-400"], [1, "px-5", "md:px-6", "py-3", "flex", "items-center", "gap-4", "group/item"], [1, "flex-1", "min-w-0"], [3, "imageUrl", "name", "quantity", "unitPrice", "totalPrice"], [1, "flex-shrink-0", "pl-3"], [1, "inline-flex", "items-center", "gap-1.5", "px-3", "py-1.5", "rounded-lg", "text-[11px]", "font-bold", "border", "border-emerald-500/30", "text-emerald-400", 2, "background", "rgba(16,185,129,0.08)"], [1, "inline-flex", "items-center", "gap-1.5", "px-3", "py-1.5", "rounded-lg", "text-[11px]", "font-bold", "border", "border-gray-600", "text-gray-400", "hover:text-white", "hover:border-gray-500", "transition-all", "duration-200", "active:scale-95", 2, "background", "rgba(255,255,255,0.03)"], [1, "inline-flex", "items-center", "gap-1.5", "px-3", "py-1.5", "rounded-lg", "text-[11px]", "font-bold", "border", "border-violet-500/30", "text-violet-400", "hover:bg-violet-500/10", "hover:border-violet-500/50", "transition-all", "duration-200", "active:scale-95", 2, "background", "rgba(139,92,246,0.05)"], [1, "mx-5", "md:mx-6", "mb-4", "rounded-xl", "border", "border-violet-500/20", "overflow-hidden", 2, "background", "rgba(139,92,246,0.04)"], [1, "inline-flex", "items-center", "gap-1.5", "px-3", "py-1.5", "rounded-lg", "text-[11px]", "font-bold", "border", "border-gray-600", "text-gray-400", "hover:text-white", "hover:border-gray-500", "transition-all", "duration-200", "active:scale-95", 2, "background", "rgba(255,255,255,0.03)", 3, "click"], [1, "fas", "fa-chevron-up", "text-[10px]"], [1, "inline-flex", "items-center", "gap-1.5", "px-3", "py-1.5", "rounded-lg", "text-[11px]", "font-bold", "border", "border-violet-500/30", "text-violet-400", "hover:bg-violet-500/10", "hover:border-violet-500/50", "transition-all", "duration-200", "active:scale-95", 2, "background", "rgba(139,92,246,0.05)", 3, "click"], [1, "fas", "fa-undo-alt", "text-[10px]"], [1, "flex", "flex-col", "items-center", "justify-center", "py-8", "gap-3"], [1, "p-4", "space-y-3"], [1, "w-12", "h-12", "rounded-full", "flex", "items-center", "justify-center", 2, "background", "rgba(16,185,129,0.15)"], [1, "fas", "fa-check-circle", "text-xl", "text-emerald-400"], [1, "text-emerald-400", "font-bold", "text-sm"], [1, "text-gray-500", "text-xs"], [1, "flex", "items-center", "gap-2", "mb-1"], [1, "fas", "fa-undo-alt", "text-violet-400", "text-xs"], [1, "text-sm", "font-bold", "text-white"], [1, "text-[11px]", "text-gray-500"], [1, "text-emerald-400", "font-bold"], [1, "block", "text-xs", "font-bold", "text-gray-400", "uppercase", "tracking-wider", "mb-2"], [1, "text-red-400"], ["rows", "3", "placeholder", "\xDCr\xFCnle ilgili ya\u015Fad\u0131\u011F\u0131n\u0131z sorunu k\u0131saca a\xE7\u0131klay\u0131n...", 1, "w-full", "bg-gray-900/60", "border", "border-gray-700/60", "text-white", "text-sm", "rounded-xl", "px-4", "py-3", "focus:outline-none", "focus:ring-2", "focus:ring-violet-500/40", "focus:border-violet-500/60", "transition-all", "duration-200", "placeholder-gray-600", "resize-none", 3, "ngModelChange", "ngModel"], [1, "text-red-400", "text-xs", "flex", "items-center", "gap-1.5"], [1, "flex", "gap-2", "justify-end", "pt-1"], [1, "px-4", "py-2", "rounded-xl", "text-xs", "font-bold", "text-gray-300", "border", "border-gray-600", "hover:border-gray-500", "hover:text-white", "transition-all", "duration-200", "disabled:opacity-40", "active:scale-95", 2, "background", "rgba(255,255,255,0.03)", 3, "click", "disabled"], [1, "inline-flex", "items-center", "gap-2", "px-5", "py-2", "rounded-xl", "text-xs", "font-bold", "text-white", "transition-all", "duration-200", "hover:shadow-lg", "disabled:opacity-40", "disabled:cursor-not-allowed", "active:scale-95", 2, "background", "linear-gradient(135deg, #8b5cf6, #7c3aed)", 3, "click", "disabled"], [1, "fas", "fa-exclamation-triangle"], [1, "fas", "fa-circle-notch", "fa-spin"], [1, "fas", "fa-paper-plane"]], template: function PurchaseHistory_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h2", 2);
      \u0275\u0275text(4, "Sat\u0131n Al\u0131m Ge\xE7mi\u015Fi");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "p", 3);
      \u0275\u0275text(6, "Teslim al\u0131nan t\xFCm sipari\u015Fleriniz");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "div", 4)(8, "div", 5);
      \u0275\u0275element(9, "i", 6);
      \u0275\u0275elementStart(10, "input", 7);
      \u0275\u0275listener("ngModelChange", function PurchaseHistory_Template_input_ngModelChange_10_listener($event) {
        return ctx.onSearch($event);
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(11, PurchaseHistory_Conditional_11_Template, 2, 0, "button", 8);
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(12, PurchaseHistory_Conditional_12_Template, 3, 1, "div", 9);
      \u0275\u0275conditionalCreate(13, PurchaseHistory_Conditional_13_Template, 3, 1, "div", 10)(14, PurchaseHistory_Conditional_14_Template, 3, 1, "div", 11)(15, PurchaseHistory_Conditional_15_Template, 4, 1);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(10);
      \u0275\u0275property("ngModel", ctx.searchQuery());
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.searchQuery() ? 11 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.apiError() ? 12 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.filteredHistory() === null ? 13 : ctx.filteredHistory().length === 0 ? 14 : 15);
    }
  }, dependencies: [CommonModule, RouterModule, RouterLink, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, OrderItemComponent, DecimalPipe, DatePipe], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PurchaseHistory, [{
    type: Component,
    args: [{ selector: "app-purchase-history", standalone: true, imports: [CommonModule, RouterModule, FormsModule, OrderItemComponent], template: `<div class="p-6 md:p-8 space-y-6">

  <!-- Page Header + Arama -->
  <div class="flex flex-col sm:flex-row sm:items-center justify-between pb-5 border-b border-white/5 gap-4">
    <div>
      <h2 class="text-2xl font-black text-white tracking-tight">Sat\u0131n Al\u0131m Ge\xE7mi\u015Fi</h2>
      <p class="text-gray-500 text-sm mt-1">Teslim al\u0131nan t\xFCm sipari\u015Fleriniz</p>
    </div>
    <div class="flex gap-2 flex-shrink-0">
      <div class="relative">
        <i class="fas fa-search absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-600 text-sm pointer-events-none"></i>
        <input type="text" placeholder="Sipari\u015F no, \xFCr\xFCn, ma\u011Faza..."
          [ngModel]="searchQuery()"
          (ngModelChange)="onSearch($event)"
          class="bg-gray-900/60 border border-gray-700/60 text-white text-sm rounded-xl pl-10 pr-4 py-2.5 w-52
                 focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-blue-500/60
                 transition-all duration-200 placeholder-gray-600">
      </div>
      @if (searchQuery()) {
        <button (click)="onSearch('')"
          class="w-10 h-10 flex items-center justify-center rounded-xl border border-red-500/30 text-red-400
                 hover:bg-red-500/10 transition-all duration-200 active:scale-95 flex-shrink-0">
          <i class="fas fa-times text-sm"></i>
        </button>
      }
    </div>
  </div>

  <!-- API Hata -->
  @if (apiError()) {
    <div class="flex items-center gap-3 px-4 py-3.5 rounded-xl border border-red-500/30 text-red-400 text-sm font-medium"
         style="background: rgba(239,68,68,0.08);">
      <i class="fas fa-exclamation-circle"></i> {{ apiError() }}
    </div>
  }

  @if (filteredHistory() === null) {
    <!-- Skeleton -->
    <div class="space-y-5">
      @for (i of [1, 2, 3]; track i) {
        <div class="rounded-2xl border border-white/5 overflow-hidden animate-pulse"
             style="background: rgba(255,255,255,0.02);">
          <div class="flex justify-between px-5 py-4 border-b border-white/5">
            <div class="flex gap-6">
              <div class="h-4 bg-gray-800 rounded-lg w-20"></div>
              <div class="h-4 bg-gray-800 rounded-lg w-24"></div>
            </div>
            <div class="h-7 bg-gray-700 rounded-lg w-28"></div>
          </div>
          <div class="p-5 flex items-center gap-4">
            <div class="w-14 h-14 bg-gray-800 rounded-xl flex-shrink-0"></div>
            <div class="flex-1 space-y-2">
              <div class="h-4 bg-gray-700 rounded-lg w-2/3"></div>
              <div class="h-3 bg-gray-800 rounded-lg w-1/4"></div>
            </div>
          </div>
        </div>
      }
    </div>

  } @else if (filteredHistory()!.length === 0) {
    <!-- Bo\u015F Durum -->
    <div class="flex flex-col items-center justify-center py-20 text-center rounded-2xl border border-white/5"
         style="background: rgba(255,255,255,0.01);">
      @if (searchQuery()) {
        <i class="fas fa-search text-3xl text-gray-700 mb-4"></i>
        <h3 class="text-lg font-black text-white mb-2">Sonu\xE7 Bulunamad\u0131</h3>
        <p class="text-gray-500 text-sm">"{{ searchQuery() }}" ile e\u015Fle\u015Fen sipari\u015F yok.</p>
        <button (click)="onSearch('')"
          class="mt-4 inline-flex items-center gap-2 px-5 py-2 rounded-xl text-sm font-semibold text-gray-300
                 border border-gray-600 hover:text-white transition-all active:scale-95"
          style="background: rgba(255,255,255,0.03);">
          <i class="fas fa-times"></i> Aramay\u0131 Temizle
        </button>
      } @else {
        <div class="w-20 h-20 rounded-2xl flex items-center justify-center mb-5 shadow-lg"
             style="background: linear-gradient(135deg, rgba(16,185,129,0.15), rgba(5,150,105,0.1));">
          <i class="fas fa-receipt text-3xl text-emerald-400"></i>
        </div>
        <h3 class="text-xl font-black text-white mb-2">Ge\xE7mi\u015F Bulunamad\u0131</h3>
        <p class="text-gray-500 max-w-sm text-sm">Hen\xFCz tamamlanm\u0131\u015F bir sipari\u015Finiz bulunmamaktad\u0131r.</p>
        <button routerLink="/katalog"
          class="mt-6 inline-flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-bold text-white
                 transition-all duration-200 hover:shadow-lg hover:scale-105 active:scale-95"
          style="background: linear-gradient(135deg, #10b981, #059669);">
          <i class="fas fa-shopping-bag"></i> \xDCr\xFCnlere G\xF6z At
        </button>
      }
    </div>

  } @else {
    <!-- Arama \xF6zeti -->
    @if (searchQuery()) {
      <div class="text-xs text-gray-500 flex items-center gap-2">
        <i class="fas fa-filter text-gray-700"></i>
        "{{ searchQuery() }}" i\xE7in
        <span class="text-white font-bold">{{ filteredHistory()!.length }}</span> sonu\xE7
      </div>
    }

    <div class="space-y-6">
      @for (order of filteredHistory()!; track order.id) {

        <div class="relative rounded-2xl border border-white/5 overflow-hidden group
                    transition-all duration-300 hover:border-emerald-500/15 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-black/20"
             style="background: rgba(255,255,255,0.02);">
          <!-- Ye\u015Fil \xFCst \xE7izgi hover -->
          <div class="absolute top-0 left-0 w-full h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
               style="background: linear-gradient(90deg, #10b981, #059669);"></div>

          <!-- Sipari\u015F Header -->
          <div class="grid grid-cols-2 sm:grid-cols-4 gap-4 px-5 md:px-6 py-4 border-b border-white/5"
               style="background: rgba(255,255,255,0.02);">
            <div>
              <p class="text-[10px] text-gray-600 uppercase tracking-widest font-bold mb-1">Sipari\u015F No</p>
              <p class="text-sm font-black text-white">#{{ order.id.toString().padStart(6, '0') }}</p>
            </div>
            @if (order.orderDate) {
              <div>
                <p class="text-[10px] text-gray-600 uppercase tracking-widest font-bold mb-1">Tarih</p>
                <p class="text-sm font-semibold text-gray-200">{{ order.orderDate | date:'dd MMM yyyy' }}</p>
              </div>
            }
            <div>
              <p class="text-[10px] text-gray-600 uppercase tracking-widest font-bold mb-1">Toplam</p>
              <p class="text-sm font-black text-emerald-400">\${{ order.totalPrice | number:'1.2-2' }}</p>
            </div>
            @if (order.storeName) {
              <div>
                <p class="text-[10px] text-gray-600 uppercase tracking-widest font-bold mb-1">Ma\u011Faza</p>
                <p class="text-sm font-semibold text-blue-400">{{ order.storeName }}</p>
              </div>
            }
          </div>

          <!-- \xDCr\xFCnler (her biri i\xE7in iade butonu) -->
          <div class="divide-y divide-white/5">
            @for (item of (order.items || []); track item.id) {
              <div>
                <!-- \xDCr\xFCn Sat\u0131r\u0131 -->
                <div class="px-5 md:px-6 py-3 flex items-center gap-4 group/item">
                  <div class="flex-1 min-w-0">
                    <app-order-item
                      [imageUrl]="item.productImageUrl"
                      [name]="item.productName"
                      [quantity]="item.quantity"
                      [unitPrice]="item.unitPrice"
                      [totalPrice]="item.totalPrice">
                    </app-order-item>
                  </div>

                  <!-- \u0130ade Butonu -->
                  <div class="flex-shrink-0 pl-3">
                    @if (isRefunded(item.id)) {
                      <!-- Ba\u015Far\u0131yla talep edildi -->
                      <span class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[11px] font-bold
                                   border border-emerald-500/30 text-emerald-400"
                            style="background: rgba(16,185,129,0.08);">
                        <i class="fas fa-check-circle text-[10px]"></i> Talep Edildi
                      </span>
                    } @else if (isRefundFormOpen(item.id)) {
                      <!-- Form a\xE7\u0131k \u2014 kapat butonu -->
                      <button (click)="closeRefundForm()"
                        class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[11px] font-bold border
                               border-gray-600 text-gray-400 hover:text-white hover:border-gray-500
                               transition-all duration-200 active:scale-95"
                        style="background: rgba(255,255,255,0.03);">
                        <i class="fas fa-chevron-up text-[10px]"></i> Kapat
                      </button>
                    } @else {
                      <!-- \u0130ade \u0130ste butonu -->
                      <button (click)="openRefundForm(order.id, item.id)"
                        class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[11px] font-bold border
                               border-violet-500/30 text-violet-400 hover:bg-violet-500/10 hover:border-violet-500/50
                               transition-all duration-200 active:scale-95"
                        style="background: rgba(139,92,246,0.05);">
                        <i class="fas fa-undo-alt text-[10px]"></i> \u0130ade \u0130ste
                      </button>
                    }
                  </div>
                </div>

                <!-- \u0130ade Formu \u2014 Slide Down -->
                @if (isRefundFormOpen(item.id)) {
                  <div class="mx-5 md:mx-6 mb-4 rounded-xl border border-violet-500/20 overflow-hidden"
                       style="background: rgba(139,92,246,0.04);">

                    @if (activeRefundForm()?.success) {
                      <!-- Ba\u015Far\u0131 mesaj\u0131 -->
                      <div class="flex flex-col items-center justify-center py-8 gap-3">
                        <div class="w-12 h-12 rounded-full flex items-center justify-center"
                             style="background: rgba(16,185,129,0.15);">
                          <i class="fas fa-check-circle text-xl text-emerald-400"></i>
                        </div>
                        <p class="text-emerald-400 font-bold text-sm">\u0130ade talebiniz al\u0131nd\u0131!</p>
                        <p class="text-gray-500 text-xs">En k\u0131sa s\xFCrede incelenecektir.</p>
                      </div>
                    } @else {
                      <!-- Form i\xE7eri\u011Fi -->
                      <div class="p-4 space-y-3">
                        <div class="flex items-center gap-2 mb-1">
                          <i class="fas fa-undo-alt text-violet-400 text-xs"></i>
                          <p class="text-sm font-bold text-white">\u0130ade Talebi \u2014 {{ item.productName }}</p>
                        </div>
                        <p class="text-[11px] text-gray-500">
                          \u0130ade tutar\u0131: <span class="text-emerald-400 font-bold">\${{ item.totalPrice | number:'1.2-2' }}</span>
                          otomatik hesaplanacakt\u0131r.
                        </p>

                        <!-- Sebep textarea -->
                        <div>
                          <label class="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">
                            \u0130ade Sebebi <span class="text-red-400">*</span>
                          </label>
                          <textarea rows="3"
                            placeholder="\xDCr\xFCnle ilgili ya\u015Fad\u0131\u011F\u0131n\u0131z sorunu k\u0131saca a\xE7\u0131klay\u0131n..."
                            [ngModel]="activeRefundForm()?.reason"
                            (ngModelChange)="updateReason($event)"
                            class="w-full bg-gray-900/60 border border-gray-700/60 text-white text-sm rounded-xl px-4 py-3
                                   focus:outline-none focus:ring-2 focus:ring-violet-500/40 focus:border-violet-500/60
                                   transition-all duration-200 placeholder-gray-600 resize-none">
                          </textarea>
                        </div>

                        <!-- Hata -->
                        @if (activeRefundForm()?.error) {
                          <p class="text-red-400 text-xs flex items-center gap-1.5">
                            <i class="fas fa-exclamation-triangle"></i> {{ activeRefundForm()?.error }}
                          </p>
                        }

                        <!-- Butonlar -->
                        <div class="flex gap-2 justify-end pt-1">
                          <button (click)="closeRefundForm()"
                            [disabled]="activeRefundForm()?.submitting"
                            class="px-4 py-2 rounded-xl text-xs font-bold text-gray-300 border border-gray-600
                                   hover:border-gray-500 hover:text-white transition-all duration-200
                                   disabled:opacity-40 active:scale-95"
                            style="background: rgba(255,255,255,0.03);">
                            \u0130ptal
                          </button>
                          <button (click)="submitRefund()"
                            [disabled]="!activeRefundForm()?.reason?.trim() || activeRefundForm()?.submitting"
                            class="inline-flex items-center gap-2 px-5 py-2 rounded-xl text-xs font-bold text-white
                                   transition-all duration-200 hover:shadow-lg
                                   disabled:opacity-40 disabled:cursor-not-allowed active:scale-95"
                            style="background: linear-gradient(135deg, #8b5cf6, #7c3aed);">
                            @if (activeRefundForm()?.submitting) {
                              <i class="fas fa-circle-notch fa-spin"></i> G\xF6nderiliyor...
                            } @else {
                              <i class="fas fa-paper-plane"></i> Talebi G\xF6nder
                            }
                          </button>
                        </div>
                      </div>
                    }

                  </div>
                }

              </div>
            } @empty {
              <div class="px-5 py-4 text-xs text-gray-600 italic">\xDCr\xFCn detaylar\u0131 y\xFCkleniyor...</div>
            }
          </div>

          <!-- Alt footer: Teslim badgei -->
          <div class="flex items-center justify-between px-5 md:px-6 py-3 border-t border-white/5"
               style="background: rgba(255,255,255,0.01);">
            <span class="text-xs text-gray-600">{{ (order.items || []).length }} \xFCr\xFCn</span>
            <span class="inline-flex items-center gap-2 px-3 py-1 rounded-lg text-[11px] font-bold border border-emerald-500/30 text-emerald-400"
                  style="background: rgba(16,185,129,0.07);">
              <i class="fas fa-check-circle text-[10px]"></i> Teslim Edildi
            </span>
          </div>

        </div>
      }
    </div>
  }

</div>
` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PurchaseHistory, { className: "PurchaseHistory", filePath: "app/features/individual/profile/purchase-history/purchase-history.ts", lineNumber: 27 });
})();
export {
  PurchaseHistory
};
//# sourceMappingURL=chunk-KQ2Z6W3M.js.map
