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
  DatePipe,
  DecimalPipe,
  Subject,
  catchError,
  inject,
  of,
  setClassMetadata,
  signal,
  startWith,
  switchMap,
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
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-K2NYDLGG.mjs";
import "./chunk-T2KOBY73.mjs";

// src/app/features/admin/stores/store-management.ts
var _c0 = () => [1, 2, 3, 4];
var _c1 = () => [];
var _forTrack0 = ($index, $item) => $item.id;
function StoreManagement_Conditional_17_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13)(1, "div", 14);
    \u0275\u0275element(2, "div", 15)(3, "div", 16);
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "div", 17);
    \u0275\u0275elementStart(5, "div", 18);
    \u0275\u0275element(6, "div", 19)(7, "div", 19)(8, "div", 19);
    \u0275\u0275elementEnd()();
  }
}
function StoreManagement_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11);
    \u0275\u0275repeaterCreate(1, StoreManagement_Conditional_17_For_2_Template, 9, 0, "div", 13, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275repeater(\u0275\u0275pureFunction0(0, _c0));
  }
}
function StoreManagement_Conditional_18_For_2_Conditional_35_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 37);
    \u0275\u0275listener("click", function StoreManagement_Conditional_18_For_2_Conditional_35_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r2);
      const store_r3 = \u0275\u0275nextContext().$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.updateStoreStatus(store_r3, "ACTIVE"));
    });
    \u0275\u0275text(1, " \u2713 Onayla ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "button", 38);
    \u0275\u0275listener("click", function StoreManagement_Conditional_18_For_2_Conditional_35_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r2);
      const store_r3 = \u0275\u0275nextContext().$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.updateStoreStatus(store_r3, "CLOSED"));
    });
    \u0275\u0275text(3, " \u2715 Reddet ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const store_r3 = \u0275\u0275nextContext().$implicit;
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275property("disabled", ctx_r3.actionInProgress() === store_r3.id);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r3.actionInProgress() === store_r3.id);
  }
}
function StoreManagement_Conditional_18_For_2_Conditional_36_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 39);
    \u0275\u0275listener("click", function StoreManagement_Conditional_18_For_2_Conditional_36_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const store_r3 = \u0275\u0275nextContext().$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.updateStoreStatus(store_r3, "SUSPENDED"));
    });
    \u0275\u0275text(1, " Ask\u0131ya Al ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const store_r3 = \u0275\u0275nextContext().$implicit;
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275property("disabled", ctx_r3.actionInProgress() === store_r3.id);
  }
}
function StoreManagement_Conditional_18_For_2_Conditional_37_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 37);
    \u0275\u0275listener("click", function StoreManagement_Conditional_18_For_2_Conditional_37_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const store_r3 = \u0275\u0275nextContext().$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.updateStoreStatus(store_r3, "ACTIVE"));
    });
    \u0275\u0275text(1, " Yeniden Aktif Et ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "button", 38);
    \u0275\u0275listener("click", function StoreManagement_Conditional_18_For_2_Conditional_37_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r6);
      const store_r3 = \u0275\u0275nextContext().$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.updateStoreStatus(store_r3, "CLOSED"));
    });
    \u0275\u0275text(3, " Kapat ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const store_r3 = \u0275\u0275nextContext().$implicit;
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275property("disabled", ctx_r3.actionInProgress() === store_r3.id);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r3.actionInProgress() === store_r3.id);
  }
}
function StoreManagement_Conditional_18_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 20)(1, "div", 23)(2, "div")(3, "h3", 24);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 25);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "span", 26);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "p", 27);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 28)(12, "div", 29)(13, "p", 30);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "p", 31);
    \u0275\u0275text(16, "\xDCr\xFCn");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 29)(18, "p", 30);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "p", 31);
    \u0275\u0275text(21, "Sipari\u015F");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "div", 29)(23, "p", 32);
    \u0275\u0275text(24);
    \u0275\u0275pipe(25, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "p", 31);
    \u0275\u0275text(27, "Gelir");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "div", 29)(29, "p", 33);
    \u0275\u0275text(30);
    \u0275\u0275pipe(31, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "p", 31);
    \u0275\u0275text(33, "Puan");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(34, "div", 34);
    \u0275\u0275conditionalCreate(35, StoreManagement_Conditional_18_For_2_Conditional_35_Template, 4, 2);
    \u0275\u0275conditionalCreate(36, StoreManagement_Conditional_18_For_2_Conditional_36_Template, 2, 1, "button", 35);
    \u0275\u0275conditionalCreate(37, StoreManagement_Conditional_18_For_2_Conditional_37_Template, 4, 2);
    \u0275\u0275elementStart(38, "button", 36);
    \u0275\u0275listener("click", function StoreManagement_Conditional_18_For_2_Template_button_click_38_listener() {
      const store_r3 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.showDetail(store_r3));
    });
    \u0275\u0275text(39, " Detay ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const store_r3 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(store_r3.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", store_r3.ownerName, " \xB7 ", store_r3.ownerEmail);
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r3.getStatusBadgeClass(store_r3.status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r3.getStatusLabel(store_r3.status), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(store_r3.description);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(store_r3.totalProducts);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(store_r3.totalOrders);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("$", \u0275\u0275pipeBind2(25, 14, store_r3.totalRevenue, "1.0-0"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(31, 17, store_r3.averageRating, "1.1-1"));
    \u0275\u0275advance(5);
    \u0275\u0275conditional(store_r3.status === "PENDING_APPROVAL" ? 35 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(store_r3.status === "ACTIVE" ? 36 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(store_r3.status === "SUSPENDED" ? 37 : -1);
  }
}
function StoreManagement_Conditional_18_ForEmpty_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21);
    \u0275\u0275text(1, " Ma\u011Faza bulunamad\u0131. ");
    \u0275\u0275elementEnd();
  }
}
function StoreManagement_Conditional_18_Conditional_4_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 41);
    \u0275\u0275listener("click", function StoreManagement_Conditional_18_Conditional_4_For_2_Template_button_click_0_listener() {
      const $index_r8 = \u0275\u0275restoreView(_r7).$index;
      const ctx_r3 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r3.goToPage($index_r8));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const $index_r8 = ctx.$index;
    const ctx_r3 = \u0275\u0275nextContext(3);
    \u0275\u0275classMap(ctx_r3.currentPage() === $index_r8 ? "h-8 w-8 rounded-md bg-blue-600 text-white text-xs font-medium" : "h-8 w-8 rounded-md bg-gray-800 text-gray-400 text-xs font-medium hover:bg-gray-700 transition-colors");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", $index_r8 + 1, " ");
  }
}
function StoreManagement_Conditional_18_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22);
    \u0275\u0275repeaterCreate(1, StoreManagement_Conditional_18_Conditional_4_For_2_Template, 2, 3, "button", 40, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275repeater(\u0275\u0275pureFunction0(0, _c1).constructor(ctx_r3.storesPage().totalPages));
  }
}
function StoreManagement_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11);
    \u0275\u0275repeaterCreate(1, StoreManagement_Conditional_18_For_2_Template, 40, 20, "div", 20, _forTrack0, false, StoreManagement_Conditional_18_ForEmpty_3_Template, 2, 0, "div", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(4, StoreManagement_Conditional_18_Conditional_4_Template, 3, 1, "div", 22);
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r3.storesPage().content);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r3.storesPage().totalPages > 1 ? 4 : -1);
  }
}
function StoreManagement_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 42);
    \u0275\u0275listener("click", function StoreManagement_Conditional_19_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.closeDetail());
    });
    \u0275\u0275elementStart(1, "div", 43);
    \u0275\u0275listener("click", function StoreManagement_Conditional_19_Template_div_click_1_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275elementStart(2, "div", 44)(3, "div")(4, "h2", 45);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 46);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "button", 47);
    \u0275\u0275listener("click", function StoreManagement_Conditional_19_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.closeDetail());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(9, "svg", 48);
    \u0275\u0275element(10, "path", 49);
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(11, "p", 50);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 51)(14, "div", 52)(15, "p", 53);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "p", 54);
    \u0275\u0275text(18, "Toplam \xDCr\xFCn");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "div", 52)(20, "p", 53);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "p", 54);
    \u0275\u0275text(23, "Aktif \xDCr\xFCn");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "div", 52)(25, "p", 55);
    \u0275\u0275text(26);
    \u0275\u0275pipe(27, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "p", 54);
    \u0275\u0275text(29, "Toplam Gelir");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(30, "div", 52)(31, "p", 56);
    \u0275\u0275text(32);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "p", 54);
    \u0275\u0275text(34, "Toplam Sipari\u015F");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(35, "div", 57)(36, "span");
    \u0275\u0275text(37, "Para Birimi: ");
    \u0275\u0275elementStart(38, "strong", 58);
    \u0275\u0275text(39);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(40, "span");
    \u0275\u0275text(41);
    \u0275\u0275pipe(42, "date");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r3.detailStore().name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", ctx_r3.detailStore().ownerName, " \xB7 ", ctx_r3.detailStore().ownerEmail);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r3.detailStore().description);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r3.detailStore().totalProducts);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r3.detailStore().activeProducts);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("$", \u0275\u0275pipeBind2(27, 10, ctx_r3.detailStore().totalRevenue, "1.2-2"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r3.detailStore().totalOrders);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r3.detailStore().baseCurrency);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Kay\u0131t: ", \u0275\u0275pipeBind2(42, 13, ctx_r3.detailStore().createdAt, "dd MMM yyyy"));
  }
}
var StoreManagement = class _StoreManagement {
  adminService = inject(AdminService);
  currentPage = signal(0, ...ngDevMode ? [{ debugName: "currentPage" }] : (
    /* istanbul ignore next */
    []
  ));
  actionInProgress = signal(null, ...ngDevMode ? [{ debugName: "actionInProgress" }] : (
    /* istanbul ignore next */
    []
  ));
  detailStore = signal(null, ...ngDevMode ? [{ debugName: "detailStore" }] : (
    /* istanbul ignore next */
    []
  ));
  refresh$ = new Subject();
  storesPage = toSignal(this.refresh$.pipe(startWith(void 0), switchMap(() => this.adminService.getAllStores(this.currentPage(), 20).pipe(catchError(() => of(null))))), { initialValue: null });
  updateStoreStatus(store, newStatus) {
    this.actionInProgress.set(store.id);
    this.adminService.updateStoreStatus(store.id, newStatus).subscribe({
      next: () => {
        this.actionInProgress.set(null);
        this.refresh$.next();
      },
      error: () => this.actionInProgress.set(null)
    });
  }
  showDetail(store) {
    this.detailStore.set(store);
  }
  closeDetail() {
    this.detailStore.set(null);
  }
  goToPage(page) {
    this.currentPage.set(page);
    this.refresh$.next();
  }
  getStatusBadgeClass(status) {
    switch (status) {
      case "ACTIVE":
        return "bg-green-500/10 text-green-400 border-green-500/20";
      case "PENDING_APPROVAL":
        return "bg-yellow-500/10 text-yellow-400 border-yellow-500/20";
      case "SUSPENDED":
        return "bg-orange-500/10 text-orange-400 border-orange-500/20";
      case "CLOSED":
        return "bg-red-500/10 text-red-400 border-red-500/20";
      default:
        return "bg-gray-500/10 text-gray-400 border-gray-500/20";
    }
  }
  getStatusLabel(status) {
    switch (status) {
      case "ACTIVE":
        return "Aktif";
      case "PENDING_APPROVAL":
        return "Onay Bekliyor";
      case "SUSPENDED":
        return "Ask\u0131da";
      case "CLOSED":
        return "Kapal\u0131";
      default:
        return status;
    }
  }
  exportCsv() {
    this.adminService.exportCsv("stores");
  }
  static \u0275fac = function StoreManagement_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _StoreManagement)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _StoreManagement, selectors: [["app-store-management"]], decls: 20, vars: 3, consts: [[1, "min-h-screen", "bg-gray-950", "text-white"], [1, "container", "mx-auto", "px-4", "py-8"], [1, "flex", "items-center", "justify-between", "mb-8"], [1, "text-3xl", "font-bold", "tracking-tight"], [1, "text-gray-400", "mt-1"], [1, "flex", "items-center", "gap-3"], [1, "flex", "items-center", "gap-2", "bg-emerald-600", "hover:bg-emerald-700", "text-white", "px-4", "py-2", "rounded-lg", "text-sm", "font-medium", "transition-colors", "shadow-lg", "shadow-emerald-500/20", 3, "click"], ["fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", 1, "h-4", "w-4"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"], ["routerLink", "/admin/analytics", 1, "text-sm", "font-medium", "text-blue-400", "hover:text-blue-300", "transition-colors", "flex", "items-center", "gap-1.5"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"], [1, "grid", "grid-cols-1", "lg:grid-cols-2", "gap-5"], [1, "fixed", "inset-0", "bg-black/60", "backdrop-blur-sm", "z-50", "flex", "items-center", "justify-center", "p-4"], [1, "bg-gray-900", "border", "border-gray-800", "rounded-xl", "p-6", "animate-pulse"], [1, "flex", "justify-between", "mb-4"], [1, "h-5", "bg-gray-800", "rounded", "w-32"], [1, "h-5", "bg-gray-800", "rounded-full", "w-20"], [1, "h-3", "bg-gray-800", "rounded", "w-48", "mb-3"], [1, "grid", "grid-cols-3", "gap-4"], [1, "h-12", "bg-gray-800", "rounded"], [1, "bg-gray-900", "border", "border-gray-800", "rounded-xl", "p-6", "hover:border-gray-700", "transition-colors"], [1, "col-span-2", "py-16", "text-center", "text-gray-500"], [1, "mt-6", "flex", "justify-center", "gap-1"], [1, "flex", "items-start", "justify-between", "mb-3"], [1, "font-semibold", "text-white", "text-lg"], [1, "text-xs", "text-gray-500", "mt-0.5"], [1, "inline-flex", "items-center", "gap-1.5", "px-2.5", "py-1", "rounded-full", "text-xs", "font-medium", "border"], [1, "text-sm", "text-gray-400", "mb-4", "line-clamp-2"], [1, "grid", "grid-cols-4", "gap-3", "mb-4"], [1, "text-center"], [1, "text-lg", "font-bold", "text-white"], [1, "text-[10px]", "text-gray-500", "uppercase"], [1, "text-lg", "font-bold", "text-emerald-400"], [1, "text-lg", "font-bold", "text-amber-400"], [1, "flex", "items-center", "gap-2", "pt-3", "border-t", "border-gray-800"], [1, "flex-1", "text-xs", "py-2", "rounded-lg", "font-medium", "bg-orange-500/10", "text-orange-400", "border", "border-orange-500/20", "hover:bg-orange-500/20", "transition-all", "disabled:opacity-50", 3, "disabled"], [1, "text-xs", "py-2", "px-3", "rounded-lg", "font-medium", "bg-gray-800", "text-gray-300", "hover:bg-gray-700", "transition-all", 3, "click"], [1, "flex-1", "text-xs", "py-2", "rounded-lg", "font-medium", "bg-green-500/10", "text-green-400", "border", "border-green-500/20", "hover:bg-green-500/20", "transition-all", "disabled:opacity-50", 3, "click", "disabled"], [1, "flex-1", "text-xs", "py-2", "rounded-lg", "font-medium", "bg-red-500/10", "text-red-400", "border", "border-red-500/20", "hover:bg-red-500/20", "transition-all", "disabled:opacity-50", 3, "click", "disabled"], [1, "flex-1", "text-xs", "py-2", "rounded-lg", "font-medium", "bg-orange-500/10", "text-orange-400", "border", "border-orange-500/20", "hover:bg-orange-500/20", "transition-all", "disabled:opacity-50", 3, "click", "disabled"], [3, "class"], [3, "click"], [1, "fixed", "inset-0", "bg-black/60", "backdrop-blur-sm", "z-50", "flex", "items-center", "justify-center", "p-4", 3, "click"], [1, "bg-gray-900", "border", "border-gray-700", "rounded-2xl", "max-w-lg", "w-full", "p-6", "shadow-2xl", 3, "click"], [1, "flex", "items-start", "justify-between", "mb-5"], [1, "text-xl", "font-bold", "text-white"], [1, "text-sm", "text-gray-400"], [1, "text-gray-500", "hover:text-white", "transition-colors", 3, "click"], ["fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", 1, "h-5", "w-5"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M6 18L18 6M6 6l12 12"], [1, "text-sm", "text-gray-400", "mb-5"], [1, "grid", "grid-cols-2", "gap-4", "mb-5"], [1, "bg-gray-800/50", "rounded-lg", "p-3", "text-center"], [1, "text-2xl", "font-bold", "text-white"], [1, "text-xs", "text-gray-500"], [1, "text-2xl", "font-bold", "text-emerald-400"], [1, "text-2xl", "font-bold", "text-blue-400"], [1, "flex", "items-center", "justify-between", "text-sm", "text-gray-400", "pt-4", "border-t", "border-gray-800"], [1, "text-white"]], template: function StoreManagement_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div")(4, "h1", 3);
      \u0275\u0275text(5, "Ma\u011Faza Y\xF6netimi");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "p", 4);
      \u0275\u0275text(7, "Platformdaki ma\u011Fazalar\u0131 onayla, ask\u0131ya al veya kapat");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(8, "div", 5)(9, "button", 6);
      \u0275\u0275listener("click", function StoreManagement_Template_button_click_9_listener() {
        return ctx.exportCsv();
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(10, "svg", 7);
      \u0275\u0275element(11, "path", 8);
      \u0275\u0275elementEnd();
      \u0275\u0275text(12, " CSV ");
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(13, "a", 9);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(14, "svg", 7);
      \u0275\u0275element(15, "path", 10);
      \u0275\u0275elementEnd();
      \u0275\u0275text(16, " Kar\u015F\u0131la\u015Ft\u0131rma \u2192 ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275conditionalCreate(17, StoreManagement_Conditional_17_Template, 3, 1, "div", 11);
      \u0275\u0275conditionalCreate(18, StoreManagement_Conditional_18_Template, 5, 2);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(19, StoreManagement_Conditional_19_Template, 43, 16, "div", 12);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(17);
      \u0275\u0275conditional(ctx.storesPage() === null ? 17 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.storesPage() !== null ? 18 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.detailStore() !== null ? 19 : -1);
    }
  }, dependencies: [CommonModule, RouterModule, RouterLink, DecimalPipe, DatePipe], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StoreManagement, [{
    type: Component,
    args: [{ selector: "app-store-management", standalone: true, imports: [CommonModule, RouterModule], template: `<div class="min-h-screen bg-gray-950 text-white">
  <div class="container mx-auto px-4 py-8">

    <div class="flex items-center justify-between mb-8">
      <div>
        <h1 class="text-3xl font-bold tracking-tight">Ma\u011Faza Y\xF6netimi</h1>
        <p class="text-gray-400 mt-1">Platformdaki ma\u011Fazalar\u0131 onayla, ask\u0131ya al veya kapat</p>
      </div>
      <div class="flex items-center gap-3">
        <button (click)="exportCsv()" class="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors shadow-lg shadow-emerald-500/20">
          <svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>
          CSV
        </button>
        <a routerLink="/admin/analytics" class="text-sm font-medium text-blue-400 hover:text-blue-300 transition-colors flex items-center gap-1.5">
          <svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/></svg>
          Kar\u015F\u0131la\u015Ft\u0131rma \u2192
        </a>
      </div>
    </div>

    <!-- Skeleton -->
    @if (storesPage() === null) {
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-5">
        @for (i of [1,2,3,4]; track i) {
          <div class="bg-gray-900 border border-gray-800 rounded-xl p-6 animate-pulse">
            <div class="flex justify-between mb-4">
              <div class="h-5 bg-gray-800 rounded w-32"></div>
              <div class="h-5 bg-gray-800 rounded-full w-20"></div>
            </div>
            <div class="h-3 bg-gray-800 rounded w-48 mb-3"></div>
            <div class="grid grid-cols-3 gap-4">
              <div class="h-12 bg-gray-800 rounded"></div>
              <div class="h-12 bg-gray-800 rounded"></div>
              <div class="h-12 bg-gray-800 rounded"></div>
            </div>
          </div>
        }
      </div>
    }

    <!-- Ma\u011Faza Kartlar\u0131 -->
    @if (storesPage() !== null) {
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-5">
        @for (store of storesPage()!.content; track store.id) {
          <div class="bg-gray-900 border border-gray-800 rounded-xl p-6 hover:border-gray-700 transition-colors">
            <!-- \xDCst: \u0130sim + Durum -->
            <div class="flex items-start justify-between mb-3">
              <div>
                <h3 class="font-semibold text-white text-lg">{{ store.name }}</h3>
                <p class="text-xs text-gray-500 mt-0.5">{{ store.ownerName }} \xB7 {{ store.ownerEmail }}</p>
              </div>
              <span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium border"
                    [class]="getStatusBadgeClass(store.status)">
                {{ getStatusLabel(store.status) }}
              </span>
            </div>

            <p class="text-sm text-gray-400 mb-4 line-clamp-2">{{ store.description }}</p>

            <!-- Metrikler -->
            <div class="grid grid-cols-4 gap-3 mb-4">
              <div class="text-center">
                <p class="text-lg font-bold text-white">{{ store.totalProducts }}</p>
                <p class="text-[10px] text-gray-500 uppercase">\xDCr\xFCn</p>
              </div>
              <div class="text-center">
                <p class="text-lg font-bold text-white">{{ store.totalOrders }}</p>
                <p class="text-[10px] text-gray-500 uppercase">Sipari\u015F</p>
              </div>
              <div class="text-center">
                <p class="text-lg font-bold text-emerald-400">\${{ store.totalRevenue | number:'1.0-0' }}</p>
                <p class="text-[10px] text-gray-500 uppercase">Gelir</p>
              </div>
              <div class="text-center">
                <p class="text-lg font-bold text-amber-400">{{ store.averageRating | number:'1.1-1' }}</p>
                <p class="text-[10px] text-gray-500 uppercase">Puan</p>
              </div>
            </div>

            <!-- Aksiyonlar -->
            <div class="flex items-center gap-2 pt-3 border-t border-gray-800">
              @if (store.status === 'PENDING_APPROVAL') {
                <button (click)="updateStoreStatus(store, 'ACTIVE')"
                        [disabled]="actionInProgress() === store.id"
                        class="flex-1 text-xs py-2 rounded-lg font-medium bg-green-500/10 text-green-400 border border-green-500/20 hover:bg-green-500/20 transition-all disabled:opacity-50">
                  \u2713 Onayla
                </button>
                <button (click)="updateStoreStatus(store, 'CLOSED')"
                        [disabled]="actionInProgress() === store.id"
                        class="flex-1 text-xs py-2 rounded-lg font-medium bg-red-500/10 text-red-400 border border-red-500/20 hover:bg-red-500/20 transition-all disabled:opacity-50">
                  \u2715 Reddet
                </button>
              }
              @if (store.status === 'ACTIVE') {
                <button (click)="updateStoreStatus(store, 'SUSPENDED')"
                        [disabled]="actionInProgress() === store.id"
                        class="flex-1 text-xs py-2 rounded-lg font-medium bg-orange-500/10 text-orange-400 border border-orange-500/20 hover:bg-orange-500/20 transition-all disabled:opacity-50">
                  Ask\u0131ya Al
                </button>
              }
              @if (store.status === 'SUSPENDED') {
                <button (click)="updateStoreStatus(store, 'ACTIVE')"
                        [disabled]="actionInProgress() === store.id"
                        class="flex-1 text-xs py-2 rounded-lg font-medium bg-green-500/10 text-green-400 border border-green-500/20 hover:bg-green-500/20 transition-all disabled:opacity-50">
                  Yeniden Aktif Et
                </button>
                <button (click)="updateStoreStatus(store, 'CLOSED')"
                        [disabled]="actionInProgress() === store.id"
                        class="flex-1 text-xs py-2 rounded-lg font-medium bg-red-500/10 text-red-400 border border-red-500/20 hover:bg-red-500/20 transition-all disabled:opacity-50">
                  Kapat
                </button>
              }
              <button (click)="showDetail(store)"
                      class="text-xs py-2 px-3 rounded-lg font-medium bg-gray-800 text-gray-300 hover:bg-gray-700 transition-all">
                Detay
              </button>
            </div>
          </div>
        } @empty {
          <div class="col-span-2 py-16 text-center text-gray-500">
            Ma\u011Faza bulunamad\u0131.
          </div>
        }
      </div>

      <!-- Sayfalama -->
      @if (storesPage()!.totalPages > 1) {
        <div class="mt-6 flex justify-center gap-1">
          @for (p of [].constructor(storesPage()!.totalPages); track $index) {
            <button (click)="goToPage($index)"
                    [class]="currentPage() === $index
                      ? 'h-8 w-8 rounded-md bg-blue-600 text-white text-xs font-medium'
                      : 'h-8 w-8 rounded-md bg-gray-800 text-gray-400 text-xs font-medium hover:bg-gray-700 transition-colors'">
              {{ $index + 1 }}
            </button>
          }
        </div>
      }
    }
  </div>

  <!-- Detay Modal -->
  @if (detailStore() !== null) {
    <div class="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4" (click)="closeDetail()">
      <div class="bg-gray-900 border border-gray-700 rounded-2xl max-w-lg w-full p-6 shadow-2xl" (click)="$event.stopPropagation()">
        <div class="flex items-start justify-between mb-5">
          <div>
            <h2 class="text-xl font-bold text-white">{{ detailStore()!.name }}</h2>
            <p class="text-sm text-gray-400">{{ detailStore()!.ownerName }} \xB7 {{ detailStore()!.ownerEmail }}</p>
          </div>
          <button (click)="closeDetail()" class="text-gray-500 hover:text-white transition-colors">
            <svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
          </button>
        </div>

        <p class="text-sm text-gray-400 mb-5">{{ detailStore()!.description }}</p>

        <div class="grid grid-cols-2 gap-4 mb-5">
          <div class="bg-gray-800/50 rounded-lg p-3 text-center">
            <p class="text-2xl font-bold text-white">{{ detailStore()!.totalProducts }}</p>
            <p class="text-xs text-gray-500">Toplam \xDCr\xFCn</p>
          </div>
          <div class="bg-gray-800/50 rounded-lg p-3 text-center">
            <p class="text-2xl font-bold text-white">{{ detailStore()!.activeProducts }}</p>
            <p class="text-xs text-gray-500">Aktif \xDCr\xFCn</p>
          </div>
          <div class="bg-gray-800/50 rounded-lg p-3 text-center">
            <p class="text-2xl font-bold text-emerald-400">\${{ detailStore()!.totalRevenue | number:'1.2-2' }}</p>
            <p class="text-xs text-gray-500">Toplam Gelir</p>
          </div>
          <div class="bg-gray-800/50 rounded-lg p-3 text-center">
            <p class="text-2xl font-bold text-blue-400">{{ detailStore()!.totalOrders }}</p>
            <p class="text-xs text-gray-500">Toplam Sipari\u015F</p>
          </div>
        </div>

        <div class="flex items-center justify-between text-sm text-gray-400 pt-4 border-t border-gray-800">
          <span>Para Birimi: <strong class="text-white">{{ detailStore()!.baseCurrency }}</strong></span>
          <span>Kay\u0131t: {{ detailStore()!.createdAt | date:'dd MMM yyyy' }}</span>
        </div>
      </div>
    </div>
  }
</div>
` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(StoreManagement, { className: "StoreManagement", filePath: "app/features/admin/stores/store-management.ts", lineNumber: 14 });
})();
export {
  StoreManagement
};
//# sourceMappingURL=chunk-24BYYVOP.mjs.map
