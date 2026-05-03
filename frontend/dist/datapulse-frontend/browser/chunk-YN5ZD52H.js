import {
  CorporateService
} from "./chunk-XN2NLGPB.js";
import {
  AuthService
} from "./chunk-OLUDDFS4.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel,
  NgSelectOption,
  SelectControlValueAccessor,
  ɵNgSelectMultipleOption
} from "./chunk-MKAKFE2K.js";
import {
  CommonModule,
  Component,
  DatePipe,
  DecimalPipe,
  forkJoin,
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
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-OBD62CNA.js";
import "./chunk-H2SRQSE4.js";

// src/app/features/corporate/profile/corporate-profile-details.ts
var _c0 = () => [1, 2];
function CorporateProfileDetails_Conditional_0_For_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7);
    \u0275\u0275element(1, "div", 8);
    \u0275\u0275elementStart(2, "div", 9);
    \u0275\u0275element(3, "div", 10)(4, "div", 11);
    \u0275\u0275elementEnd()();
  }
}
function CorporateProfileDetails_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2);
    \u0275\u0275element(3, "div", 3);
    \u0275\u0275elementStart(4, "div", 4);
    \u0275\u0275element(5, "div", 5)(6, "div", 6);
    \u0275\u0275elementEnd()()();
    \u0275\u0275repeaterCreate(7, CorporateProfileDetails_Conditional_0_For_8_Template, 5, 0, "div", 7, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(7);
    \u0275\u0275repeater(\u0275\u0275pureFunction0(0, _c0));
  }
}
function CorporateProfileDetails_Conditional_1_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 39);
    \u0275\u0275listener("click", function CorporateProfileDetails_Conditional_1_Conditional_19_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.startEdit());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 40);
    \u0275\u0275element(2, "path", 41);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " D\xFCzenle ");
    \u0275\u0275elementEnd();
  }
}
function CorporateProfileDetails_Conditional_1_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 24)(1, "h2", 42);
    \u0275\u0275text(2, "Ma\u011Faza Bilgilerini D\xFCzenle");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 29)(4, "div")(5, "label", 43);
    \u0275\u0275text(6, "Ma\u011Faza Ad\u0131");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "input", 44);
    \u0275\u0275twoWayListener("ngModelChange", function CorporateProfileDetails_Conditional_1_Conditional_20_Template_input_ngModelChange_7_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.editName, $event) || (ctx_r1.editName = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div")(9, "label", 43);
    \u0275\u0275text(10, "A\xE7\u0131klama");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "textarea", 45);
    \u0275\u0275twoWayListener("ngModelChange", function CorporateProfileDetails_Conditional_1_Conditional_20_Template_textarea_ngModelChange_11_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.editDescription, $event) || (ctx_r1.editDescription = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div")(13, "label", 43);
    \u0275\u0275text(14, "Para Birimi");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "select", 46);
    \u0275\u0275twoWayListener("ngModelChange", function CorporateProfileDetails_Conditional_1_Conditional_20_Template_select_ngModelChange_15_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.editCurrency, $event) || (ctx_r1.editCurrency = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(16, "option", 47);
    \u0275\u0275text(17, "USD - US Dollar");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "option", 48);
    \u0275\u0275text(19, "EUR - Euro");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "option", 49);
    \u0275\u0275text(21, "TRY - T\xFCrk Liras\u0131");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "option", 50);
    \u0275\u0275text(23, "GBP - British Pound");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(24, "div", 51)(25, "button", 52);
    \u0275\u0275listener("click", function CorporateProfileDetails_Conditional_1_Conditional_20_Template_button_click_25_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.saveEdit());
    });
    \u0275\u0275text(26);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "button", 53);
    \u0275\u0275listener("click", function CorporateProfileDetails_Conditional_1_Conditional_20_Template_button_click_27_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.cancelEdit());
    });
    \u0275\u0275text(28, " \u0130ptal ");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(7);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.editName);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.editDescription);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.editCurrency);
    \u0275\u0275advance(10);
    \u0275\u0275property("disabled", ctx_r1.isSaving());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.isSaving() ? "Kaydediliyor..." : "Kaydet", " ");
  }
}
function CorporateProfileDetails_Conditional_1_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 25)(1, "div", 54)(2, "p", 55);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 56);
    \u0275\u0275text(5, "Aktif \xDCr\xFCnler");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 54)(7, "p", 55);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "p", 56);
    \u0275\u0275text(10, "Toplam Sipari\u015F");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 54)(12, "p", 57);
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "p", 56);
    \u0275\u0275text(16, "Toplam Gelir");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 54)(18, "p", 58);
    \u0275\u0275text(19);
    \u0275\u0275pipe(20, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "p", 56);
    \u0275\u0275text(22, "Ortalama Puan");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const dash_r4 = ctx;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(dash_r4.activeProducts);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(dash_r4.totalOrders);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("$", \u0275\u0275pipeBind2(14, 4, dash_r4.totalRevenue, "1.0-0"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(20, 7, dash_r4.averageRating, "1.1-1"));
  }
}
function CorporateProfileDetails_Conditional_1_Conditional_72_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 38)(1, "h3", 28);
    \u0275\u0275text(2, "Sipari\u015F Durumu \xD6zeti");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 59)(4, "div", 60)(5, "p", 61);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 62);
    \u0275\u0275text(8, "Bekleyen");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 63)(10, "p", 64);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "p", 62);
    \u0275\u0275text(13, "\u0130\u015Fleniyor");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 65)(15, "p", 66);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "p", 62);
    \u0275\u0275text(18, "Kargoda");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "div", 67)(20, "p", 68);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "p", 62);
    \u0275\u0275text(23, "Teslim Edildi");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "div", 69)(25, "p", 70);
    \u0275\u0275text(26);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "p", 62);
    \u0275\u0275text(28, "\u0130ptal");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const dash_r5 = ctx;
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(dash_r5.pendingOrders);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(dash_r5.processingOrders);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(dash_r5.shippedOrders);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(dash_r5.deliveredOrders);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(dash_r5.cancelledOrders);
  }
}
function CorporateProfileDetails_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12)(1, "div", 13)(2, "div", 14)(3, "div", 15);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(4, "svg", 16);
    \u0275\u0275element(5, "path", 17);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(6, "div")(7, "h1", 18);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "p", 19);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 20)(12, "span", 21);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "span", 22);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "span", 22);
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "date");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275conditionalCreate(19, CorporateProfileDetails_Conditional_1_Conditional_19_Template, 4, 0, "button", 23);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(20, CorporateProfileDetails_Conditional_1_Conditional_20_Template, 29, 5, "div", 24);
    \u0275\u0275conditionalCreate(21, CorporateProfileDetails_Conditional_1_Conditional_21_Template, 23, 10, "div", 25);
    \u0275\u0275elementStart(22, "div", 26)(23, "div", 27)(24, "h3", 28);
    \u0275\u0275text(25, "Sat\u0131c\u0131 Bilgileri");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "div", 29)(27, "div", 30)(28, "span", 31);
    \u0275\u0275text(29, "Ad Soyad");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "span", 32);
    \u0275\u0275text(31);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(32, "div", 30)(33, "span", 31);
    \u0275\u0275text(34, "E-posta");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "span", 32);
    \u0275\u0275text(36);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(37, "div", 30)(38, "span", 31);
    \u0275\u0275text(39, "Hesap Tipi");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "span", 33);
    \u0275\u0275text(41, "Kurumsal");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(42, "div", 34)(43, "span", 31);
    \u0275\u0275text(44, "Durum");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "span", 35);
    \u0275\u0275text(46, "Aktif");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(47, "div", 27)(48, "h3", 28);
    \u0275\u0275text(49, "Ma\u011Faza Detaylar\u0131");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(50, "div", 29)(51, "div", 30)(52, "span", 31);
    \u0275\u0275text(53, "Ma\u011Faza ID");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(54, "span", 36);
    \u0275\u0275text(55);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(56, "div", 30)(57, "span", 31);
    \u0275\u0275text(58, "Para Birimi");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(59, "span", 32);
    \u0275\u0275text(60);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(61, "div", 30)(62, "span", 31);
    \u0275\u0275text(63, "Durum");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(64, "span", 37);
    \u0275\u0275text(65);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(66, "div", 34)(67, "span", 31);
    \u0275\u0275text(68, "Kay\u0131t Tarihi");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(69, "span", 32);
    \u0275\u0275text(70);
    \u0275\u0275pipe(71, "date");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275conditionalCreate(72, CorporateProfileDetails_Conditional_1_Conditional_72_Template, 29, 5, "div", 38);
  }
  if (rf & 2) {
    let tmp_10_0;
    let tmp_18_0;
    const storeData_r6 = ctx;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(storeData_r6.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(storeData_r6.description || "Ma\u011Faza a\xE7\u0131klamas\u0131");
    \u0275\u0275advance(2);
    \u0275\u0275classMap(storeData_r6.status === "ACTIVE" ? "text-emerald-400 bg-emerald-500/10" : "text-yellow-400 bg-yellow-500/10");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", storeData_r6.status, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(storeData_r6.baseCurrency);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\u2022 Kay\u0131t: ", \u0275\u0275pipeBind2(18, 19, storeData_r6.createdAt, "mediumDate"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!ctx_r1.isEditing() ? 19 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.isEditing() ? 20 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional((tmp_10_0 = ctx_r1.dashboard()) ? 21 : -1, tmp_10_0);
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate(ctx_r1.auth.currentUserName());
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.auth.currentUserEmail());
    \u0275\u0275advance(19);
    \u0275\u0275textInterpolate1("#", storeData_r6.id);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(storeData_r6.baseCurrency);
    \u0275\u0275advance(4);
    \u0275\u0275classMap(storeData_r6.status === "ACTIVE" ? "text-emerald-400" : "text-yellow-400");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", storeData_r6.status, " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(71, 22, storeData_r6.createdAt, "dd MMM yyyy"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional((tmp_18_0 = ctx_r1.dashboard()) ? 72 : -1, tmp_18_0);
  }
}
var CorporateProfileDetails = class _CorporateProfileDetails {
  corporateService = inject(CorporateService);
  auth = inject(AuthService);
  store = signal(null, ...ngDevMode ? [{ debugName: "store" }] : (
    /* istanbul ignore next */
    []
  ));
  dashboard = signal(null, ...ngDevMode ? [{ debugName: "dashboard" }] : (
    /* istanbul ignore next */
    []
  ));
  isLoading = signal(true, ...ngDevMode ? [{ debugName: "isLoading" }] : (
    /* istanbul ignore next */
    []
  ));
  isEditing = signal(false, ...ngDevMode ? [{ debugName: "isEditing" }] : (
    /* istanbul ignore next */
    []
  ));
  // Edit form
  editName = "";
  editDescription = "";
  editCurrency = "";
  isSaving = signal(false, ...ngDevMode ? [{ debugName: "isSaving" }] : (
    /* istanbul ignore next */
    []
  ));
  constructor() {
    this.loadData();
  }
  loadData() {
    this.isLoading.set(true);
    forkJoin({
      store: this.corporateService.getMyStore(),
      dashboard: this.corporateService.getDashboard()
    }).subscribe({
      next: ({ store, dashboard }) => {
        this.store.set(store);
        this.dashboard.set(dashboard);
        this.isLoading.set(false);
      },
      error: () => this.isLoading.set(false)
    });
  }
  startEdit() {
    const s = this.store();
    if (s) {
      this.editName = s.name;
      this.editDescription = s.description || "";
      this.editCurrency = s.baseCurrency;
      this.isEditing.set(true);
    }
  }
  cancelEdit() {
    this.isEditing.set(false);
  }
  saveEdit() {
    this.isSaving.set(true);
    this.corporateService.updateStore({
      name: this.editName,
      description: this.editDescription,
      baseCurrency: this.editCurrency
    }).subscribe({
      next: (updated) => {
        this.store.set(updated);
        this.isEditing.set(false);
        this.isSaving.set(false);
      },
      error: () => this.isSaving.set(false)
    });
  }
  static \u0275fac = function CorporateProfileDetails_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CorporateProfileDetails)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CorporateProfileDetails, selectors: [["app-corporate-profile-details"]], decls: 2, vars: 1, consts: [[1, "space-y-6"], [1, "bg-gray-900/80", "border", "border-gray-800", "rounded-2xl", "p-8", "animate-pulse"], [1, "flex", "items-center", "gap-6"], [1, "h-20", "w-20", "bg-gray-700", "rounded-2xl"], [1, "flex-1"], [1, "h-6", "bg-gray-700", "rounded", "w-48", "mb-3"], [1, "h-4", "bg-gray-700", "rounded", "w-32"], [1, "bg-gray-900/80", "border", "border-gray-800", "rounded-2xl", "p-6", "animate-pulse"], [1, "h-5", "bg-gray-700", "rounded", "w-36", "mb-4"], [1, "space-y-3"], [1, "h-4", "bg-gray-700", "rounded", "w-full"], [1, "h-4", "bg-gray-700", "rounded", "w-3/4"], [1, "bg-gradient-to-r", "from-blue-900/40", "via-gray-900", "to-gray-900", "border", "border-gray-800", "rounded-2xl", "p-6", "sm:p-8", "mb-6"], [1, "flex", "flex-col", "sm:flex-row", "items-start", "sm:items-center", "justify-between", "gap-4"], [1, "flex", "items-center", "gap-5"], [1, "h-16", "w-16", "sm:h-20", "sm:w-20", "rounded-2xl", "bg-blue-600/20", "border", "border-blue-500/30", "flex", "items-center", "justify-center", "flex-shrink-0"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", "stroke-width", "1.5", 1, "h-8", "w-8", "sm:h-10", "sm:w-10", "text-blue-400"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"], [1, "text-2xl", "sm:text-3xl", "font-bold", "text-white"], [1, "text-sm", "text-gray-400", "mt-1"], [1, "flex", "items-center", "gap-3", "mt-2"], [1, "text-[10px]", "font-semibold", "uppercase", "tracking-wider", "px-2.5", "py-1", "rounded-lg"], [1, "text-xs", "text-gray-500"], [1, "bg-gray-800", "hover:bg-gray-700", "border", "border-gray-700", "text-white", "text-sm", "font-semibold", "px-5", "py-2.5", "rounded-xl", "transition-colors", "flex", "items-center", "gap-2"], [1, "bg-gray-900/80", "border", "border-blue-800/40", "rounded-2xl", "p-6", "mb-6"], [1, "grid", "grid-cols-2", "sm:grid-cols-4", "gap-3", "mb-6"], [1, "grid", "grid-cols-1", "md:grid-cols-2", "gap-6"], [1, "bg-gray-900/80", "border", "border-gray-800", "rounded-2xl", "p-6"], [1, "text-sm", "font-semibold", "text-gray-400", "uppercase", "tracking-wider", "mb-4"], [1, "space-y-4"], [1, "flex", "items-center", "justify-between", "py-2", "border-b", "border-gray-800/60"], [1, "text-sm", "text-gray-500"], [1, "text-sm", "font-semibold", "text-white"], [1, "text-sm", "font-semibold", "text-blue-400"], [1, "flex", "items-center", "justify-between", "py-2"], [1, "text-sm", "font-semibold", "text-emerald-400"], [1, "text-sm", "font-mono", "font-semibold", "text-white"], [1, "text-sm", "font-semibold"], [1, "bg-gray-900/80", "border", "border-gray-800", "rounded-2xl", "p-6", "mt-6"], [1, "bg-gray-800", "hover:bg-gray-700", "border", "border-gray-700", "text-white", "text-sm", "font-semibold", "px-5", "py-2.5", "rounded-xl", "transition-colors", "flex", "items-center", "gap-2", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", 1, "h-4", "w-4"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"], [1, "text-lg", "font-semibold", "text-white", "mb-4"], [1, "block", "text-xs", "font-medium", "text-gray-400", "mb-1.5"], ["type", "text", 1, "w-full", "bg-gray-800", "border", "border-gray-700", "rounded-xl", "py-2.5", "px-4", "text-white", "text-sm", "focus:border-blue-500", "focus:ring-2", "focus:ring-blue-500/20", "outline-none", "transition-all", 3, "ngModelChange", "ngModel"], ["rows", "3", 1, "w-full", "bg-gray-800", "border", "border-gray-700", "rounded-xl", "py-2.5", "px-4", "text-white", "text-sm", "focus:border-blue-500", "focus:ring-2", "focus:ring-blue-500/20", "outline-none", "transition-all", "resize-none", 3, "ngModelChange", "ngModel"], [1, "w-full", "bg-gray-800", "border", "border-gray-700", "rounded-xl", "py-2.5", "px-4", "text-white", "text-sm", "focus:border-blue-500", "outline-none", "transition-all", 3, "ngModelChange", "ngModel"], ["value", "USD"], ["value", "EUR"], ["value", "TRY"], ["value", "GBP"], [1, "flex", "items-center", "gap-3", "pt-2"], [1, "bg-blue-600", "hover:bg-blue-500", "disabled:bg-blue-800", "text-white", "text-sm", "font-semibold", "px-6", "py-2.5", "rounded-xl", "transition-colors", 3, "click", "disabled"], [1, "bg-gray-800", "hover:bg-gray-700", "text-gray-300", "text-sm", "font-medium", "px-5", "py-2.5", "rounded-xl", "transition-colors", 3, "click"], [1, "bg-gray-900/80", "border", "border-gray-800", "rounded-xl", "p-4", "text-center"], [1, "text-2xl", "font-bold", "text-white"], [1, "text-[11px]", "text-gray-500", "mt-0.5"], [1, "text-2xl", "font-bold", "text-emerald-400"], [1, "text-2xl", "font-bold", "text-yellow-400"], [1, "grid", "grid-cols-2", "sm:grid-cols-5", "gap-3"], [1, "bg-yellow-500/10", "border", "border-yellow-500/20", "rounded-xl", "p-3", "text-center"], [1, "text-lg", "font-bold", "text-yellow-400"], [1, "text-[10px]", "text-gray-500", "mt-0.5"], [1, "bg-blue-500/10", "border", "border-blue-500/20", "rounded-xl", "p-3", "text-center"], [1, "text-lg", "font-bold", "text-blue-400"], [1, "bg-indigo-500/10", "border", "border-indigo-500/20", "rounded-xl", "p-3", "text-center"], [1, "text-lg", "font-bold", "text-indigo-400"], [1, "bg-emerald-500/10", "border", "border-emerald-500/20", "rounded-xl", "p-3", "text-center"], [1, "text-lg", "font-bold", "text-emerald-400"], [1, "bg-red-500/10", "border", "border-red-500/20", "rounded-xl", "p-3", "text-center"], [1, "text-lg", "font-bold", "text-red-400"]], template: function CorporateProfileDetails_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275conditionalCreate(0, CorporateProfileDetails_Conditional_0_Template, 9, 1, "div", 0)(1, CorporateProfileDetails_Conditional_1_Template, 73, 25);
    }
    if (rf & 2) {
      let tmp_0_0;
      \u0275\u0275conditional(ctx.isLoading() ? 0 : (tmp_0_0 = ctx.store()) ? 1 : -1, tmp_0_0);
    }
  }, dependencies: [CommonModule, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel, DecimalPipe, DatePipe], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CorporateProfileDetails, [{
    type: Component,
    args: [{ selector: "app-corporate-profile-details", standalone: true, imports: [CommonModule, FormsModule], template: `<!-- Loading State -->
@if (isLoading()) {
  <div class="space-y-6">
    <div class="bg-gray-900/80 border border-gray-800 rounded-2xl p-8 animate-pulse">
      <div class="flex items-center gap-6">
        <div class="h-20 w-20 bg-gray-700 rounded-2xl"></div>
        <div class="flex-1">
          <div class="h-6 bg-gray-700 rounded w-48 mb-3"></div>
          <div class="h-4 bg-gray-700 rounded w-32"></div>
        </div>
      </div>
    </div>
    @for (i of [1,2]; track i) {
      <div class="bg-gray-900/80 border border-gray-800 rounded-2xl p-6 animate-pulse">
        <div class="h-5 bg-gray-700 rounded w-36 mb-4"></div>
        <div class="space-y-3">
          <div class="h-4 bg-gray-700 rounded w-full"></div>
          <div class="h-4 bg-gray-700 rounded w-3/4"></div>
        </div>
      </div>
    }
  </div>
} @else if (store(); as storeData) {

  <!-- Store Header Card -->
  <div class="bg-gradient-to-r from-blue-900/40 via-gray-900 to-gray-900 border border-gray-800 rounded-2xl p-6 sm:p-8 mb-6">
    <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
      <div class="flex items-center gap-5">
        <div class="h-16 w-16 sm:h-20 sm:w-20 rounded-2xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center flex-shrink-0">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 sm:h-10 sm:w-10 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
          </svg>
        </div>
        <div>
          <h1 class="text-2xl sm:text-3xl font-bold text-white">{{ storeData.name }}</h1>
          <p class="text-sm text-gray-400 mt-1">{{ storeData.description || 'Ma\u011Faza a\xE7\u0131klamas\u0131' }}</p>
          <div class="flex items-center gap-3 mt-2">
            <span class="text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-lg"
              [class]="storeData.status === 'ACTIVE' ? 'text-emerald-400 bg-emerald-500/10' : 'text-yellow-400 bg-yellow-500/10'">
              {{ storeData.status }}
            </span>
            <span class="text-xs text-gray-500">{{ storeData.baseCurrency }}</span>
            <span class="text-xs text-gray-500">\u2022 Kay\u0131t: {{ storeData.createdAt | date:'mediumDate' }}</span>
          </div>
        </div>
      </div>
      @if (!isEditing()) {
        <button (click)="startEdit()"
          class="bg-gray-800 hover:bg-gray-700 border border-gray-700 text-white text-sm font-semibold px-5 py-2.5 rounded-xl transition-colors flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
          </svg>
          D\xFCzenle
        </button>
      }
    </div>
  </div>

  <!-- Edit Form -->
  @if (isEditing()) {
    <div class="bg-gray-900/80 border border-blue-800/40 rounded-2xl p-6 mb-6">
      <h2 class="text-lg font-semibold text-white mb-4">Ma\u011Faza Bilgilerini D\xFCzenle</h2>
      <div class="space-y-4">
        <div>
          <label class="block text-xs font-medium text-gray-400 mb-1.5">Ma\u011Faza Ad\u0131</label>
          <input type="text" [(ngModel)]="editName"
            class="w-full bg-gray-800 border border-gray-700 rounded-xl py-2.5 px-4 text-white text-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all">
        </div>
        <div>
          <label class="block text-xs font-medium text-gray-400 mb-1.5">A\xE7\u0131klama</label>
          <textarea [(ngModel)]="editDescription" rows="3"
            class="w-full bg-gray-800 border border-gray-700 rounded-xl py-2.5 px-4 text-white text-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all resize-none"></textarea>
        </div>
        <div>
          <label class="block text-xs font-medium text-gray-400 mb-1.5">Para Birimi</label>
          <select [(ngModel)]="editCurrency"
            class="w-full bg-gray-800 border border-gray-700 rounded-xl py-2.5 px-4 text-white text-sm focus:border-blue-500 outline-none transition-all">
            <option value="USD">USD - US Dollar</option>
            <option value="EUR">EUR - Euro</option>
            <option value="TRY">TRY - T\xFCrk Liras\u0131</option>
            <option value="GBP">GBP - British Pound</option>
          </select>
        </div>
        <div class="flex items-center gap-3 pt-2">
          <button (click)="saveEdit()" [disabled]="isSaving()"
            class="bg-blue-600 hover:bg-blue-500 disabled:bg-blue-800 text-white text-sm font-semibold px-6 py-2.5 rounded-xl transition-colors">
            {{ isSaving() ? 'Kaydediliyor...' : 'Kaydet' }}
          </button>
          <button (click)="cancelEdit()"
            class="bg-gray-800 hover:bg-gray-700 text-gray-300 text-sm font-medium px-5 py-2.5 rounded-xl transition-colors">
            \u0130ptal
          </button>
        </div>
      </div>
    </div>
  }

  <!-- Quick Stats -->
  @if (dashboard(); as dash) {
    <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
      <div class="bg-gray-900/80 border border-gray-800 rounded-xl p-4 text-center">
        <p class="text-2xl font-bold text-white">{{ dash.activeProducts }}</p>
        <p class="text-[11px] text-gray-500 mt-0.5">Aktif \xDCr\xFCnler</p>
      </div>
      <div class="bg-gray-900/80 border border-gray-800 rounded-xl p-4 text-center">
        <p class="text-2xl font-bold text-white">{{ dash.totalOrders }}</p>
        <p class="text-[11px] text-gray-500 mt-0.5">Toplam Sipari\u015F</p>
      </div>
      <div class="bg-gray-900/80 border border-gray-800 rounded-xl p-4 text-center">
        <p class="text-2xl font-bold text-emerald-400">\${{ dash.totalRevenue | number:'1.0-0' }}</p>
        <p class="text-[11px] text-gray-500 mt-0.5">Toplam Gelir</p>
      </div>
      <div class="bg-gray-900/80 border border-gray-800 rounded-xl p-4 text-center">
        <p class="text-2xl font-bold text-yellow-400">{{ dash.averageRating | number:'1.1-1' }}</p>
        <p class="text-[11px] text-gray-500 mt-0.5">Ortalama Puan</p>
      </div>
    </div>
  }

  <!-- Owner Information -->
  <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
    <div class="bg-gray-900/80 border border-gray-800 rounded-2xl p-6">
      <h3 class="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">Sat\u0131c\u0131 Bilgileri</h3>
      <div class="space-y-4">
        <div class="flex items-center justify-between py-2 border-b border-gray-800/60">
          <span class="text-sm text-gray-500">Ad Soyad</span>
          <span class="text-sm font-semibold text-white">{{ auth.currentUserName() }}</span>
        </div>
        <div class="flex items-center justify-between py-2 border-b border-gray-800/60">
          <span class="text-sm text-gray-500">E-posta</span>
          <span class="text-sm font-semibold text-white">{{ auth.currentUserEmail() }}</span>
        </div>
        <div class="flex items-center justify-between py-2 border-b border-gray-800/60">
          <span class="text-sm text-gray-500">Hesap Tipi</span>
          <span class="text-sm font-semibold text-blue-400">Kurumsal</span>
        </div>
        <div class="flex items-center justify-between py-2">
          <span class="text-sm text-gray-500">Durum</span>
          <span class="text-sm font-semibold text-emerald-400">Aktif</span>
        </div>
      </div>
    </div>

    <div class="bg-gray-900/80 border border-gray-800 rounded-2xl p-6">
      <h3 class="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">Ma\u011Faza Detaylar\u0131</h3>
      <div class="space-y-4">
        <div class="flex items-center justify-between py-2 border-b border-gray-800/60">
          <span class="text-sm text-gray-500">Ma\u011Faza ID</span>
          <span class="text-sm font-mono font-semibold text-white">#{{ storeData.id }}</span>
        </div>
        <div class="flex items-center justify-between py-2 border-b border-gray-800/60">
          <span class="text-sm text-gray-500">Para Birimi</span>
          <span class="text-sm font-semibold text-white">{{ storeData.baseCurrency }}</span>
        </div>
        <div class="flex items-center justify-between py-2 border-b border-gray-800/60">
          <span class="text-sm text-gray-500">Durum</span>
          <span class="text-sm font-semibold"
            [class]="storeData.status === 'ACTIVE' ? 'text-emerald-400' : 'text-yellow-400'">
            {{ storeData.status }}
          </span>
        </div>
        <div class="flex items-center justify-between py-2">
          <span class="text-sm text-gray-500">Kay\u0131t Tarihi</span>
          <span class="text-sm font-semibold text-white">{{ storeData.createdAt | date:'dd MMM yyyy' }}</span>
        </div>
      </div>
    </div>
  </div>

  <!-- Order Status Overview -->
  @if (dashboard(); as dash) {
    <div class="bg-gray-900/80 border border-gray-800 rounded-2xl p-6 mt-6">
      <h3 class="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">Sipari\u015F Durumu \xD6zeti</h3>
      <div class="grid grid-cols-2 sm:grid-cols-5 gap-3">
        <div class="bg-yellow-500/10 border border-yellow-500/20 rounded-xl p-3 text-center">
          <p class="text-lg font-bold text-yellow-400">{{ dash.pendingOrders }}</p>
          <p class="text-[10px] text-gray-500 mt-0.5">Bekleyen</p>
        </div>
        <div class="bg-blue-500/10 border border-blue-500/20 rounded-xl p-3 text-center">
          <p class="text-lg font-bold text-blue-400">{{ dash.processingOrders }}</p>
          <p class="text-[10px] text-gray-500 mt-0.5">\u0130\u015Fleniyor</p>
        </div>
        <div class="bg-indigo-500/10 border border-indigo-500/20 rounded-xl p-3 text-center">
          <p class="text-lg font-bold text-indigo-400">{{ dash.shippedOrders }}</p>
          <p class="text-[10px] text-gray-500 mt-0.5">Kargoda</p>
        </div>
        <div class="bg-emerald-500/10 border border-emerald-500/20 rounded-xl p-3 text-center">
          <p class="text-lg font-bold text-emerald-400">{{ dash.deliveredOrders }}</p>
          <p class="text-[10px] text-gray-500 mt-0.5">Teslim Edildi</p>
        </div>
        <div class="bg-red-500/10 border border-red-500/20 rounded-xl p-3 text-center">
          <p class="text-lg font-bold text-red-400">{{ dash.cancelledOrders }}</p>
          <p class="text-[10px] text-gray-500 mt-0.5">\u0130ptal</p>
        </div>
      </div>
    </div>
  }
}
` }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CorporateProfileDetails, { className: "CorporateProfileDetails", filePath: "app/features/corporate/profile/corporate-profile-details.ts", lineNumber: 14 });
})();
export {
  CorporateProfileDetails
};
//# sourceMappingURL=chunk-YN5ZD52H.js.map
