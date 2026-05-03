import './polyfills.server.mjs';
import {
  OrderItemComponent,
  OrderService
} from "./chunk-MDHUCBXO.mjs";
import {
  RouterLink,
  RouterModule
} from "./chunk-6SS2UPAN.mjs";
import "./chunk-P2EBPDNO.mjs";
import {
  toSignal
} from "./chunk-MX5BFGVJ.mjs";
import {
  BehaviorSubject,
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
  switchMap,
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
  ɵɵinterpolate1,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-K2NYDLGG.mjs";
import "./chunk-T2KOBY73.mjs";

// src/app/features/individual/profile/user-orders/user-orders.ts
var _c0 = () => [1, 2, 3];
var _c1 = () => [1, 2, 3, 4];
var _c2 = () => [];
var _forTrack0 = ($index, $item) => $item.id;
function UserOrders_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275element(1, "i", 8);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.apiError() || ctx_r0.cancelError(), " ");
  }
}
function UserOrders_Conditional_7_For_2_For_8_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 22);
  }
}
function UserOrders_Conditional_7_For_2_For_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 21);
    \u0275\u0275conditionalCreate(1, UserOrders_Conditional_7_For_2_For_8_Conditional_1_Template, 1, 0, "div", 22);
  }
  if (rf & 2) {
    const s_r2 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275conditional(s_r2 < 4 ? 1 : -1);
  }
}
function UserOrders_Conditional_7_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9)(1, "div", 10)(2, "div", 11);
    \u0275\u0275element(3, "div", 12)(4, "div", 13);
    \u0275\u0275elementEnd();
    \u0275\u0275element(5, "div", 14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 15);
    \u0275\u0275repeaterCreate(7, UserOrders_Conditional_7_For_2_For_8_Template, 2, 1, null, null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 16);
    \u0275\u0275element(10, "div", 17);
    \u0275\u0275elementStart(11, "div", 18);
    \u0275\u0275element(12, "div", 19)(13, "div", 20);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(7);
    \u0275\u0275repeater(\u0275\u0275pureFunction0(0, _c1));
  }
}
function UserOrders_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275repeaterCreate(1, UserOrders_Conditional_7_For_2_Template, 14, 1, "div", 9, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275repeater(\u0275\u0275pureFunction0(0, _c0));
  }
}
function UserOrders_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "div", 23);
    \u0275\u0275element(2, "i", 24);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h3", 25);
    \u0275\u0275text(4, "Aktif Sipari\u015F Bulunamad\u0131");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 26);
    \u0275\u0275text(6, ' Teslim edilen sipari\u015Fleriniz "Sat\u0131n Al\u0131m Ge\xE7mi\u015Fi" b\xF6l\xFCm\xFCnde g\xF6r\xFCn\xFCr. ');
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 27);
    \u0275\u0275element(8, "i", 28);
    \u0275\u0275text(9, " Al\u0131\u015Fveri\u015Fe Ba\u015Fla ");
    \u0275\u0275elementEnd()();
  }
}
function UserOrders_Conditional_9_For_2_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 29)(1, "div", 49)(2, "div", 50)(3, "span", 51);
    \u0275\u0275element(4, "i", 52);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div")(6, "p", 53);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p", 54);
    \u0275\u0275text(9, "Bu i\u015Flem geri al\u0131namaz.");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "div", 55)(11, "button", 56);
    \u0275\u0275listener("click", function UserOrders_Conditional_9_For_2_Conditional_0_Template_button_click_11_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.dismissCancel());
    });
    \u0275\u0275text(12, " Vazge\xE7 ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "button", 57);
    \u0275\u0275listener("click", function UserOrders_Conditional_9_For_2_Conditional_0_Template_button_click_13_listener() {
      \u0275\u0275restoreView(_r3);
      const order_r4 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.confirmCancel(order_r4.id));
    });
    \u0275\u0275element(14, "i", 58);
    \u0275\u0275text(15, "Evet, \u0130ptal Et ");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const order_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" #", order_r4.id.toString().padStart(6, "0"), " sipari\u015Fini iptal etmek istiyor musunuz? ");
  }
}
function UserOrders_Conditional_9_For_2_Case_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 31);
  }
}
function UserOrders_Conditional_9_For_2_Case_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 32);
  }
}
function UserOrders_Conditional_9_For_2_Case_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 33);
  }
}
function UserOrders_Conditional_9_For_2_Case_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 34);
  }
}
function UserOrders_Conditional_9_For_2_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 37);
    \u0275\u0275element(1, "i", 59);
    \u0275\u0275elementStart(2, "span", 60);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "date");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const order_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(4, 1, order_r4.orderDate, "dd MMM yyyy"));
  }
}
function UserOrders_Conditional_9_For_2_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 37);
    \u0275\u0275element(1, "i", 61);
    \u0275\u0275elementStart(2, "span", 62);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const order_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(order_r4.storeName);
  }
}
function UserOrders_Conditional_9_For_2_Conditional_23_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 63);
    \u0275\u0275element(1, "i", 65);
    \u0275\u0275text(2, " \u0130ptal ediliyor... ");
    \u0275\u0275elementEnd();
  }
}
function UserOrders_Conditional_9_For_2_Conditional_23_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 66);
    \u0275\u0275listener("click", function UserOrders_Conditional_9_For_2_Conditional_23_Conditional_1_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const order_r4 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.askCancel(order_r4.id));
    });
    \u0275\u0275element(1, "i", 67);
    \u0275\u0275text(2, " \u0130ptal Et ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275property("disabled", ctx_r0.confirmCancelId() !== null);
  }
}
function UserOrders_Conditional_9_For_2_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, UserOrders_Conditional_9_For_2_Conditional_23_Conditional_0_Template, 3, 0, "button", 63)(1, UserOrders_Conditional_9_For_2_Conditional_23_Conditional_1_Template, 3, 1, "button", 64);
  }
  if (rf & 2) {
    const order_r4 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275conditional(ctx_r0.cancellingId() === order_r4.id ? 0 : 1);
  }
}
function UserOrders_Conditional_9_For_2_Conditional_24_For_3_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 74);
  }
  if (rf & 2) {
    const $index_r6 = \u0275\u0275nextContext().$index;
    const order_r4 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275classMap(ctx_r0.getConnectorClass($index_r6, order_r4.status));
  }
}
function UserOrders_Conditional_9_For_2_Conditional_24_For_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 68)(1, "div", 70)(2, "div", 71);
    \u0275\u0275element(3, "i");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 72);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(6, UserOrders_Conditional_9_For_2_Conditional_24_For_3_Conditional_6_Template, 1, 2, "div", 73);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const step_r7 = ctx.$implicit;
    const $index_r6 = ctx.$index;
    const order_r4 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("flex-1", $index_r6 < ctx_r0.progressSteps.length - 1);
    \u0275\u0275advance(2);
    \u0275\u0275classMap(ctx_r0.getStepClass($index_r6, order_r4.status));
    \u0275\u0275advance();
    \u0275\u0275classMap(\u0275\u0275interpolate1("fas ", step_r7.icon));
    \u0275\u0275advance();
    \u0275\u0275classMap($index_r6 < ctx_r0.getProgressStep(order_r4.status) ? "text-blue-400" : "text-gray-600");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", step_r7.label, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional($index_r6 < ctx_r0.progressSteps.length - 1 ? 6 : -1);
  }
}
function UserOrders_Conditional_9_For_2_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 45)(1, "div", 68);
    \u0275\u0275repeaterCreate(2, UserOrders_Conditional_9_For_2_Conditional_24_For_3_Template, 7, 11, "div", 69, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r0.progressSteps);
  }
}
function UserOrders_Conditional_9_For_2_For_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 47);
    \u0275\u0275element(1, "app-order-item", 75);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r8 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("imageUrl", item_r8.productImageUrl)("name", item_r8.productName)("quantity", item_r8.quantity)("unitPrice", item_r8.unitPrice)("totalPrice", item_r8.totalPrice);
  }
}
function UserOrders_Conditional_9_For_2_ForEmpty_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 48);
    \u0275\u0275text(1, "\xDCr\xFCn detaylar\u0131 y\xFCkleniyor...");
    \u0275\u0275elementEnd();
  }
}
function UserOrders_Conditional_9_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, UserOrders_Conditional_9_For_2_Conditional_0_Template, 16, 1, "div", 29);
    \u0275\u0275elementStart(1, "div", 30);
    \u0275\u0275conditionalCreate(2, UserOrders_Conditional_9_For_2_Case_2_Template, 1, 0, "div", 31)(3, UserOrders_Conditional_9_For_2_Case_3_Template, 1, 0, "div", 32)(4, UserOrders_Conditional_9_For_2_Case_4_Template, 1, 0, "div", 33)(5, UserOrders_Conditional_9_For_2_Case_5_Template, 1, 0, "div", 34);
    \u0275\u0275elementStart(6, "div", 35)(7, "div", 36)(8, "div", 37);
    \u0275\u0275element(9, "i", 38);
    \u0275\u0275elementStart(10, "span", 39);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(12, UserOrders_Conditional_9_For_2_Conditional_12_Template, 5, 4, "div", 37);
    \u0275\u0275conditionalCreate(13, UserOrders_Conditional_9_For_2_Conditional_13_Template, 4, 1, "div", 37);
    \u0275\u0275elementStart(14, "div", 37);
    \u0275\u0275element(15, "i", 40);
    \u0275\u0275elementStart(16, "span", 41);
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "number");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(19, "div", 42)(20, "span", 43);
    \u0275\u0275element(21, "span", 44);
    \u0275\u0275text(22);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(23, UserOrders_Conditional_9_For_2_Conditional_23_Template, 2, 1);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(24, UserOrders_Conditional_9_For_2_Conditional_24_Template, 4, 0, "div", 45);
    \u0275\u0275elementStart(25, "div", 46);
    \u0275\u0275repeaterCreate(26, UserOrders_Conditional_9_For_2_For_27_Template, 2, 5, "div", 47, _forTrack0, false, UserOrders_Conditional_9_For_2_ForEmpty_28_Template, 2, 0, "div", 48);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_13_0;
    const order_r4 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275conditional(ctx_r0.confirmCancelId() === order_r4.id ? 0 : -1);
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r0.confirmCancelId() === order_r4.id ? "border-orange-500/20 opacity-60 translate-y-0" : order_r4.status === "CANCELLED" ? "border-red-500/10" : "border-white/5 hover:border-white/10 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-black/20");
    \u0275\u0275advance();
    \u0275\u0275conditional((tmp_13_0 = order_r4.status) === "PENDING" ? 2 : tmp_13_0 === "PROCESSING" ? 3 : tmp_13_0 === "SHIPPED" ? 4 : tmp_13_0 === "CANCELLED" ? 5 : -1);
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate1("#", order_r4.id.toString().padStart(6, "0"));
    \u0275\u0275advance();
    \u0275\u0275conditional(order_r4.orderDate ? 12 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(order_r4.storeName ? 13 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("$", \u0275\u0275pipeBind2(18, 16, order_r4.totalPrice, "1.2-2"));
    \u0275\u0275advance(3);
    \u0275\u0275classMap(ctx_r0.getStatusColor(order_r4.status));
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r0.getStatusDotColor(order_r4.status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.getStatusText(order_r4.status), " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(order_r4.status === "PENDING" ? 23 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(order_r4.status !== "CANCELLED" ? 24 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(order_r4.items || \u0275\u0275pureFunction0(19, _c2));
  }
}
function UserOrders_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7);
    \u0275\u0275repeaterCreate(1, UserOrders_Conditional_9_For_2_Template, 29, 20, null, null, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r0.orders());
  }
}
var UserOrders = class _UserOrders {
  orderService = inject(OrderService);
  // Sipariş listesini yenilemek için
  refresh$ = new BehaviorSubject(void 0);
  apiError = signal("", ...ngDevMode ? [{ debugName: "apiError" }] : (
    /* istanbul ignore next */
    []
  ));
  cancellingId = signal(null, ...ngDevMode ? [{ debugName: "cancellingId" }] : (
    /* istanbul ignore next */
    []
  ));
  // Hangi sipariş iptal ediliyor
  confirmCancelId = signal(null, ...ngDevMode ? [{ debugName: "confirmCancelId" }] : (
    /* istanbul ignore next */
    []
  ));
  // Onay bekleniyor
  cancelError = signal("", ...ngDevMode ? [{ debugName: "cancelError" }] : (
    /* istanbul ignore next */
    []
  ));
  cancelledIds = signal(/* @__PURE__ */ new Set(), ...ngDevMode ? [{ debugName: "cancelledIds" }] : (
    /* istanbul ignore next */
    []
  ));
  // Anında UI güncellemesi
  progressSteps = [
    { label: "Al\u0131nd\u0131", icon: "fa-check" },
    { label: "Haz\u0131rlan\u0131yor", icon: "fa-box" },
    { label: "Kargoda", icon: "fa-truck" },
    { label: "Teslim", icon: "fa-home" }
  ];
  orders = toSignal(this.refresh$.pipe(switchMap(() => this.orderService.getUserOrders().pipe(map((orders) => orders.filter((o) => o.status !== "DELIVERED").sort((a, b) => new Date(b.orderDate).getTime() - new Date(a.orderDate).getTime())), shareReplay(1), catchError(() => {
    this.apiError.set("Sipari\u015Fler y\xFCklenirken bir hata olu\u015Ftu.");
    return of([]);
  })))), { initialValue: null });
  /** İptal onay diyaloğunu aç */
  askCancel(orderId) {
    this.confirmCancelId.set(orderId);
    this.cancelError.set("");
  }
  /** İptal iptal et */
  dismissCancel() {
    this.confirmCancelId.set(null);
  }
  /** Siparişi iptal et */
  confirmCancel(orderId) {
    this.cancellingId.set(orderId);
    this.confirmCancelId.set(null);
    this.orderService.cancelOrder(orderId).subscribe({
      next: () => {
        this.cancellingId.set(null);
        this.refresh$.next();
      },
      error: (err) => {
        this.cancellingId.set(null);
        const msg = err?.error?.error || "Sipari\u015F iptal edilirken bir hata olu\u015Ftu.";
        this.cancelError.set(msg);
        setTimeout(() => this.cancelError.set(""), 5e3);
      }
    });
  }
  getStatusColor(status) {
    switch (status) {
      case "DELIVERED":
        return "bg-emerald-500/10 text-emerald-400 border-emerald-500/30";
      case "SHIPPED":
        return "bg-blue-500/10 text-blue-400 border-blue-500/30";
      case "PROCESSING":
        return "bg-indigo-500/10 text-indigo-400 border-indigo-500/30";
      case "PENDING":
        return "bg-orange-500/10 text-orange-400 border-orange-500/30";
      case "CANCELLED":
        return "bg-red-500/10 text-red-400 border-red-500/30";
      default:
        return "bg-gray-500/10 text-gray-400 border-gray-500/30";
    }
  }
  getStatusText(status) {
    switch (status) {
      case "DELIVERED":
        return "Teslim Edildi";
      case "SHIPPED":
        return "Kargoya Verildi";
      case "PROCESSING":
        return "Haz\u0131rlan\u0131yor";
      case "PENDING":
        return "Onay Bekliyor";
      case "CANCELLED":
        return "\u0130ptal Edildi";
      default:
        return status;
    }
  }
  getStatusDotColor(status) {
    switch (status) {
      case "DELIVERED":
        return "bg-emerald-400";
      case "SHIPPED":
        return "bg-blue-400";
      case "PROCESSING":
        return "bg-indigo-400";
      case "PENDING":
        return "bg-orange-400 animate-pulse";
      case "CANCELLED":
        return "bg-red-400";
      default:
        return "bg-gray-400";
    }
  }
  getProgressStep(status) {
    switch (status) {
      case "PENDING":
        return 1;
      case "PROCESSING":
        return 2;
      case "SHIPPED":
        return 3;
      case "DELIVERED":
        return 4;
      default:
        return 0;
    }
  }
  getStepClass(stepIndex, status) {
    const current = this.getProgressStep(status);
    if (stepIndex < current)
      return "bg-blue-600 border-blue-500 text-white";
    if (stepIndex === current - 1)
      return "bg-blue-600 border-blue-400 text-white shadow-lg shadow-blue-900/40";
    return "border-gray-700 text-gray-600";
  }
  getConnectorClass(stepIndex, status) {
    return stepIndex < this.getProgressStep(status) - 1 ? "bg-blue-600" : "bg-gray-800";
  }
  static \u0275fac = function UserOrders_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _UserOrders)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _UserOrders, selectors: [["app-user-orders"]], decls: 10, vars: 2, consts: [[1, "p-6", "md:p-8", "space-y-6"], [1, "pb-5", "border-b", "border-white/5"], [1, "text-2xl", "font-black", "text-white", "tracking-tight"], [1, "text-gray-500", "text-sm", "mt-1"], [1, "flex", "items-center", "gap-3", "px-4", "py-3.5", "rounded-xl", "border", "border-red-500/30", "text-red-400", "text-sm", "font-medium", "animate-fadeIn", 2, "background", "rgba(239,68,68,0.08)"], [1, "space-y-4"], [1, "flex", "flex-col", "items-center", "justify-center", "py-20", "text-center", "rounded-2xl", "border", "border-white/5", 2, "background", "rgba(255,255,255,0.01)"], [1, "space-y-5"], [1, "fas", "fa-exclamation-circle", "flex-shrink-0"], [1, "rounded-2xl", "border", "border-white/5", "overflow-hidden", "animate-pulse", 2, "background", "rgba(255,255,255,0.02)"], [1, "flex", "justify-between", "px-5", "py-4", "border-b", "border-white/5"], [1, "flex", "gap-5"], [1, "h-4", "bg-gray-800", "rounded-lg", "w-20"], [1, "h-4", "bg-gray-800", "rounded-lg", "w-32"], [1, "h-7", "bg-gray-700", "rounded-lg", "w-28"], [1, "px-5", "py-4", "border-b", "border-white/5", "flex", "items-center", "gap-2"], [1, "p-5", "flex", "items-center", "gap-4"], [1, "w-16", "h-16", "bg-gray-800", "rounded-xl", "flex-shrink-0"], [1, "flex-1", "space-y-2"], [1, "h-4", "bg-gray-700", "rounded-lg", "w-3/4"], [1, "h-3", "bg-gray-800", "rounded-lg", "w-1/4"], [1, "w-7", "h-7", "bg-gray-800", "rounded-full", "flex-shrink-0"], [1, "flex-1", "h-0.5", "bg-gray-800", "rounded"], [1, "w-20", "h-20", "rounded-2xl", "flex", "items-center", "justify-center", "mb-5", "shadow-lg", 2, "background", "linear-gradient(135deg, rgba(59,130,246,0.15), rgba(99,102,241,0.15))"], [1, "fas", "fa-box-open", "text-3xl", "text-blue-400"], [1, "text-xl", "font-black", "text-white", "mb-2"], [1, "text-gray-500", "max-w-sm", "text-sm", "leading-relaxed"], ["routerLink", "/katalog", 1, "mt-6", "inline-flex", "items-center", "gap-2", "px-6", "py-2.5", "rounded-xl", "text-sm", "font-bold", "text-white", "transition-all", "duration-200", "hover:shadow-lg", "hover:scale-105", "active:scale-95", 2, "background", "linear-gradient(135deg, #3b82f6, #6366f1)"], [1, "fas", "fa-shopping-bag"], [1, "rounded-2xl", "border", "border-orange-500/30", "overflow-hidden", 2, "background", "rgba(249,115,22,0.06)"], [1, "relative", "rounded-2xl", "border", "overflow-hidden", "transition-all", "duration-300", "group", 2, "background", "rgba(255,255,255,0.02)"], [1, "absolute", "top-0", "left-0", "w-full", "h-0.5", "opacity-60", 2, "background", "linear-gradient(90deg, #f97316, #fb923c)"], [1, "absolute", "top-0", "left-0", "w-full", "h-0.5", "opacity-60", 2, "background", "linear-gradient(90deg, #6366f1, #818cf8)"], [1, "absolute", "top-0", "left-0", "w-full", "h-0.5", "opacity-60", 2, "background", "linear-gradient(90deg, #3b82f6, #60a5fa)"], [1, "absolute", "top-0", "left-0", "w-full", "h-0.5", "opacity-40", 2, "background", "linear-gradient(90deg, #ef4444, #f87171)"], [1, "flex", "flex-wrap", "items-center", "justify-between", "gap-3", "px-5", "py-4", "border-b", "border-white/5", 2, "background", "rgba(255,255,255,0.02)"], [1, "flex", "flex-wrap", "items-center", "gap-x-5", "gap-y-2"], [1, "flex", "items-center", "gap-2"], [1, "fas", "fa-hashtag", "text-gray-600", "text-xs"], [1, "font-black", "text-white", "text-sm"], [1, "fas", "fa-tag", "text-gray-600", "text-xs"], [1, "text-white", "font-black", "text-sm"], [1, "flex", "items-center", "gap-2", "flex-shrink-0"], [1, "inline-flex", "items-center", "gap-2", "px-3", "py-1.5", "rounded-lg", "text-[11px]", "font-bold", "border"], [1, "w-1.5", "h-1.5", "rounded-full", "flex-shrink-0"], [1, "px-6", "pt-5", "pb-4", "border-b", "border-white/5"], [1, "divide-y", "divide-white/5"], [1, "px-5", "py-2"], [1, "px-5", "py-4", "text-xs", "text-gray-600", "italic"], [1, "p-5", "flex", "flex-col", "sm:flex-row", "items-start", "sm:items-center", "justify-between", "gap-4"], [1, "flex", "items-center", "gap-3"], [1, "w-10", "h-10", "rounded-xl", "flex", "items-center", "justify-center", "flex-shrink-0", 2, "background", "rgba(249,115,22,0.15)"], [1, "fas", "fa-ban", "text-orange-400"], [1, "text-sm", "font-bold", "text-white"], [1, "text-xs", "text-gray-500", "mt-0.5"], [1, "flex", "gap-2", "flex-shrink-0"], [1, "px-4", "py-2", "rounded-lg", "text-xs", "font-bold", "text-gray-300", "border", "border-gray-600", "hover:border-gray-500", "hover:text-white", "transition-all", "duration-200", "active:scale-95", 2, "background", "rgba(255,255,255,0.03)", 3, "click"], [1, "px-4", "py-2", "rounded-lg", "text-xs", "font-bold", "text-white", "transition-all", "duration-200", "hover:shadow-lg", "active:scale-95", 2, "background", "linear-gradient(135deg, #f97316, #ea580c)", 3, "click"], [1, "fas", "fa-ban", "mr-1.5"], [1, "fas", "fa-calendar-alt", "text-gray-600", "text-xs"], [1, "text-gray-400", "text-xs"], [1, "fas", "fa-store", "text-gray-600", "text-xs"], [1, "text-blue-400", "text-xs", "font-semibold"], ["disabled", "", 1, "inline-flex", "items-center", "gap-1.5", "px-3", "py-1.5", "rounded-lg", "text-[11px]", "font-bold", "border", "border-red-500/20", "text-red-400", "opacity-60", "cursor-not-allowed", 2, "background", "rgba(239,68,68,0.05)"], [1, "inline-flex", "items-center", "gap-1.5", "px-3", "py-1.5", "rounded-lg", "text-[11px]", "font-bold", "border", "border-red-500/30", "text-red-400", "transition-all", "duration-200", "hover:bg-red-500/10", "hover:border-red-500/50", "active:scale-95", "disabled:opacity-40", "disabled:cursor-not-allowed", 2, "background", "rgba(239,68,68,0.04)", 3, "disabled"], [1, "fas", "fa-circle-notch", "fa-spin", "text-[10px]"], [1, "inline-flex", "items-center", "gap-1.5", "px-3", "py-1.5", "rounded-lg", "text-[11px]", "font-bold", "border", "border-red-500/30", "text-red-400", "transition-all", "duration-200", "hover:bg-red-500/10", "hover:border-red-500/50", "active:scale-95", "disabled:opacity-40", "disabled:cursor-not-allowed", 2, "background", "rgba(239,68,68,0.04)", 3, "click", "disabled"], [1, "fas", "fa-ban", "text-[10px]"], [1, "flex", "items-center"], [1, "flex", "items-center", 3, "flex-1"], [1, "flex", "flex-col", "items-center", "gap-1.5", "flex-shrink-0"], [1, "w-8", "h-8", "rounded-full", "flex", "items-center", "justify-center", "text-[11px]", "border", "transition-all", "duration-300"], [1, "text-[9px]", "font-bold", "whitespace-nowrap", "hidden", "sm:block", "transition-colors"], [1, "flex-1", "h-0.5", "mx-2", "rounded", "transition-all", "duration-500", "mb-4", 3, "class"], [1, "flex-1", "h-0.5", "mx-2", "rounded", "transition-all", "duration-500", "mb-4"], [3, "imageUrl", "name", "quantity", "unitPrice", "totalPrice"]], template: function UserOrders_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h2", 2);
      \u0275\u0275text(3, "Sipari\u015Flerim");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "p", 3);
      \u0275\u0275text(5, "Aktif sipari\u015Flerinizin g\xFCncel durumu");
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(6, UserOrders_Conditional_6_Template, 3, 1, "div", 4);
      \u0275\u0275conditionalCreate(7, UserOrders_Conditional_7_Template, 3, 1, "div", 5)(8, UserOrders_Conditional_8_Template, 10, 0, "div", 6)(9, UserOrders_Conditional_9_Template, 3, 0, "div", 7);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(6);
      \u0275\u0275conditional(ctx.apiError() || ctx.cancelError() ? 6 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.orders() === null ? 7 : ctx.orders().length === 0 ? 8 : 9);
    }
  }, dependencies: [CommonModule, RouterModule, RouterLink, OrderItemComponent, DecimalPipe, DatePipe], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UserOrders, [{
    type: Component,
    args: [{ selector: "app-user-orders", standalone: true, imports: [CommonModule, RouterModule, OrderItemComponent], template: `<div class="p-6 md:p-8 space-y-6">

  <!-- Page Header -->
  <div class="pb-5 border-b border-white/5">
    <h2 class="text-2xl font-black text-white tracking-tight">Sipari\u015Flerim</h2>
    <p class="text-gray-500 text-sm mt-1">Aktif sipari\u015Flerinizin g\xFCncel durumu</p>
  </div>

  <!-- API / \u0130ptal Hatas\u0131 -->
  @if (apiError() || cancelError()) {
    <div class="flex items-center gap-3 px-4 py-3.5 rounded-xl border border-red-500/30 text-red-400 text-sm font-medium animate-fadeIn"
         style="background: rgba(239,68,68,0.08);">
      <i class="fas fa-exclamation-circle flex-shrink-0"></i>
      {{ apiError() || cancelError() }}
    </div>
  }

  @if (orders() === null) {
    <!-- Skeleton -->
    <div class="space-y-4">
      @for (i of [1, 2, 3]; track i) {
        <div class="rounded-2xl border border-white/5 overflow-hidden animate-pulse"
             style="background: rgba(255,255,255,0.02);">
          <div class="flex justify-between px-5 py-4 border-b border-white/5">
            <div class="flex gap-5">
              <div class="h-4 bg-gray-800 rounded-lg w-20"></div>
              <div class="h-4 bg-gray-800 rounded-lg w-32"></div>
            </div>
            <div class="h-7 bg-gray-700 rounded-lg w-28"></div>
          </div>
          <div class="px-5 py-4 border-b border-white/5 flex items-center gap-2">
            @for (s of [1,2,3,4]; track s) {
              <div class="w-7 h-7 bg-gray-800 rounded-full flex-shrink-0"></div>
              @if (s < 4) { <div class="flex-1 h-0.5 bg-gray-800 rounded"></div> }
            }
          </div>
          <div class="p-5 flex items-center gap-4">
            <div class="w-16 h-16 bg-gray-800 rounded-xl flex-shrink-0"></div>
            <div class="flex-1 space-y-2">
              <div class="h-4 bg-gray-700 rounded-lg w-3/4"></div>
              <div class="h-3 bg-gray-800 rounded-lg w-1/4"></div>
            </div>
          </div>
        </div>
      }
    </div>

  } @else if (orders()!.length === 0) {
    <!-- Bo\u015F durum -->
    <div class="flex flex-col items-center justify-center py-20 text-center rounded-2xl border border-white/5"
         style="background: rgba(255,255,255,0.01);">
      <div class="w-20 h-20 rounded-2xl flex items-center justify-center mb-5 shadow-lg"
           style="background: linear-gradient(135deg, rgba(59,130,246,0.15), rgba(99,102,241,0.15));">
        <i class="fas fa-box-open text-3xl text-blue-400"></i>
      </div>
      <h3 class="text-xl font-black text-white mb-2">Aktif Sipari\u015F Bulunamad\u0131</h3>
      <p class="text-gray-500 max-w-sm text-sm leading-relaxed">
        Teslim edilen sipari\u015Fleriniz "Sat\u0131n Al\u0131m Ge\xE7mi\u015Fi" b\xF6l\xFCm\xFCnde g\xF6r\xFCn\xFCr.
      </p>
      <button routerLink="/katalog"
        class="mt-6 inline-flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-bold text-white
               transition-all duration-200 hover:shadow-lg hover:scale-105 active:scale-95"
        style="background: linear-gradient(135deg, #3b82f6, #6366f1);">
        <i class="fas fa-shopping-bag"></i> Al\u0131\u015Fveri\u015Fe Ba\u015Fla
      </button>
    </div>

  } @else {
    <div class="space-y-5">
      @for (order of orders()!; track order.id) {

        <!-- \u0130ptal Onay Kart\u0131 -->
        @if (confirmCancelId() === order.id) {
          <div class="rounded-2xl border border-orange-500/30 overflow-hidden"
               style="background: rgba(249,115,22,0.06);">
            <div class="p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div class="flex items-center gap-3">
                <span class="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                      style="background: rgba(249,115,22,0.15);">
                  <i class="fas fa-ban text-orange-400"></i>
                </span>
                <div>
                  <p class="text-sm font-bold text-white">
                    #{{ order.id.toString().padStart(6,'0') }} sipari\u015Fini iptal etmek istiyor musunuz?
                  </p>
                  <p class="text-xs text-gray-500 mt-0.5">Bu i\u015Flem geri al\u0131namaz.</p>
                </div>
              </div>
              <div class="flex gap-2 flex-shrink-0">
                <button (click)="dismissCancel()"
                  class="px-4 py-2 rounded-lg text-xs font-bold text-gray-300 border border-gray-600
                         hover:border-gray-500 hover:text-white transition-all duration-200 active:scale-95"
                  style="background: rgba(255,255,255,0.03);">
                  Vazge\xE7
                </button>
                <button (click)="confirmCancel(order.id)"
                  class="px-4 py-2 rounded-lg text-xs font-bold text-white transition-all duration-200
                         hover:shadow-lg active:scale-95"
                  style="background: linear-gradient(135deg, #f97316, #ea580c);">
                  <i class="fas fa-ban mr-1.5"></i>Evet, \u0130ptal Et
                </button>
              </div>
            </div>
          </div>
        }

        <!-- Sipari\u015F Kart\u0131 -->
        <div class="relative rounded-2xl border overflow-hidden transition-all duration-300 group"
             [class]="confirmCancelId() === order.id
               ? 'border-orange-500/20 opacity-60 translate-y-0'
               : order.status === 'CANCELLED'
               ? 'border-red-500/10'
               : 'border-white/5 hover:border-white/10 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-black/20'"
             style="background: rgba(255,255,255,0.02);">

          <!-- Renkli \xFCst \xE7izgi (duruma g\xF6re) -->
          @switch (order.status) {
            @case ('PENDING') {
              <div class="absolute top-0 left-0 w-full h-0.5 opacity-60"
                   style="background: linear-gradient(90deg, #f97316, #fb923c);"></div>
            }
            @case ('PROCESSING') {
              <div class="absolute top-0 left-0 w-full h-0.5 opacity-60"
                   style="background: linear-gradient(90deg, #6366f1, #818cf8);"></div>
            }
            @case ('SHIPPED') {
              <div class="absolute top-0 left-0 w-full h-0.5 opacity-60"
                   style="background: linear-gradient(90deg, #3b82f6, #60a5fa);"></div>
            }
            @case ('CANCELLED') {
              <div class="absolute top-0 left-0 w-full h-0.5 opacity-40"
                   style="background: linear-gradient(90deg, #ef4444, #f87171);"></div>
            }
          }

          <!-- Header -->
          <div class="flex flex-wrap items-center justify-between gap-3 px-5 py-4 border-b border-white/5"
               style="background: rgba(255,255,255,0.02);">
            <div class="flex flex-wrap items-center gap-x-5 gap-y-2">
              <div class="flex items-center gap-2">
                <i class="fas fa-hashtag text-gray-600 text-xs"></i>
                <span class="font-black text-white text-sm">#{{ order.id.toString().padStart(6, '0') }}</span>
              </div>
              @if (order.orderDate) {
                <div class="flex items-center gap-2">
                  <i class="fas fa-calendar-alt text-gray-600 text-xs"></i>
                  <span class="text-gray-400 text-xs">{{ order.orderDate | date:'dd MMM yyyy' }}</span>
                </div>
              }
              @if (order.storeName) {
                <div class="flex items-center gap-2">
                  <i class="fas fa-store text-gray-600 text-xs"></i>
                  <span class="text-blue-400 text-xs font-semibold">{{ order.storeName }}</span>
                </div>
              }
              <div class="flex items-center gap-2">
                <i class="fas fa-tag text-gray-600 text-xs"></i>
                <span class="text-white font-black text-sm">\${{ order.totalPrice | number:'1.2-2' }}</span>
              </div>
            </div>

            <div class="flex items-center gap-2 flex-shrink-0">
              <!-- Durum Badge -->
              <span class="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-[11px] font-bold border"
                    [class]="getStatusColor(order.status)">
                <span class="w-1.5 h-1.5 rounded-full flex-shrink-0" [class]="getStatusDotColor(order.status)"></span>
                {{ getStatusText(order.status) }}
              </span>

              <!-- \u0130ptal butonu \u2014 sadece PENDING -->
              @if (order.status === 'PENDING') {
                @if (cancellingId() === order.id) {
                  <button disabled
                    class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[11px] font-bold
                           border border-red-500/20 text-red-400 opacity-60 cursor-not-allowed"
                    style="background: rgba(239,68,68,0.05);">
                    <i class="fas fa-circle-notch fa-spin text-[10px]"></i> \u0130ptal ediliyor...
                  </button>
                } @else {
                  <button (click)="askCancel(order.id)"
                    [disabled]="confirmCancelId() !== null"
                    class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[11px] font-bold border
                           border-red-500/30 text-red-400 transition-all duration-200
                           hover:bg-red-500/10 hover:border-red-500/50
                           active:scale-95 disabled:opacity-40 disabled:cursor-not-allowed"
                    style="background: rgba(239,68,68,0.04);">
                    <i class="fas fa-ban text-[10px]"></i> \u0130ptal Et
                  </button>
                }
              }
            </div>
          </div>

          <!-- \u0130lerleme Tracker (iptal de\u011Filse) -->
          @if (order.status !== 'CANCELLED') {
            <div class="px-6 pt-5 pb-4 border-b border-white/5">
              <div class="flex items-center">
                @for (step of progressSteps; track $index) {
                  <div class="flex items-center" [class.flex-1]="$index < progressSteps.length - 1">
                    <div class="flex flex-col items-center gap-1.5 flex-shrink-0">
                      <div class="w-8 h-8 rounded-full flex items-center justify-center text-[11px] border transition-all duration-300"
                           [class]="getStepClass($index, order.status)">
                        <i class="fas {{ step.icon }}"></i>
                      </div>
                      <span class="text-[9px] font-bold whitespace-nowrap hidden sm:block transition-colors"
                            [class]="$index < getProgressStep(order.status) ? 'text-blue-400' : 'text-gray-600'">
                        {{ step.label }}
                      </span>
                    </div>
                    @if ($index < progressSteps.length - 1) {
                      <div class="flex-1 h-0.5 mx-2 rounded transition-all duration-500 mb-4"
                           [class]="getConnectorClass($index, order.status)"></div>
                    }
                  </div>
                }
              </div>
            </div>
          }

          <!-- \xDCr\xFCnler -->
          <div class="divide-y divide-white/5">
            @for (item of (order.items || []); track item.id) {
              <div class="px-5 py-2">
                <app-order-item
                  [imageUrl]="item.productImageUrl"
                  [name]="item.productName"
                  [quantity]="item.quantity"
                  [unitPrice]="item.unitPrice"
                  [totalPrice]="item.totalPrice">
                </app-order-item>
              </div>
            } @empty {
              <div class="px-5 py-4 text-xs text-gray-600 italic">\xDCr\xFCn detaylar\u0131 y\xFCkleniyor...</div>
            }
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(UserOrders, { className: "UserOrders", filePath: "app/features/individual/profile/user-orders/user-orders.ts", lineNumber: 22 });
})();
export {
  UserOrders
};
//# sourceMappingURL=chunk-5TJVSJO7.mjs.map
