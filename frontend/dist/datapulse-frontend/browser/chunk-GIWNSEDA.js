import {
  RouterModule
} from "./chunk-N6CICK2R.js";
import "./chunk-27YRKIWA.js";
import {
  CommonModule,
  NgModule,
  setClassMetadata,
  ɵɵdefineInjector,
  ɵɵdefineNgModule
} from "./chunk-OBD62CNA.js";
import {
  __spreadValues
} from "./chunk-H2SRQSE4.js";

// src/app/features/individual/individual-routing-module.ts
var routes = [
  __spreadValues({
    path: "profile",
    loadComponent: () => import("./chunk-V4QW3Y3Q.js").then((m) => m.ProfileLayout),
    children: [
      { path: "", redirectTo: "details", pathMatch: "full" },
      { path: "details", loadComponent: () => import("./chunk-ILAGBJU3.js").then((m) => m.UserProfile) },
      { path: "orders", loadComponent: () => import("./chunk-HSO3QQ2M.js").then((m) => m.UserOrders) },
      { path: "refunds", loadComponent: () => import("./chunk-DL77ZCEI.js").then((m) => m.UserRefunds) },
      { path: "history", loadComponent: () => import("./chunk-KQ2Z6W3M.js").then((m) => m.PurchaseHistory) },
      { path: "reviews", loadComponent: () => import("./chunk-PB2OHNKS.js").then((m) => m.MyReviews) },
      { path: "spending", loadComponent: () => import("./chunk-35SI6KTH.js").then((m) => m.SpendingAnalysis) },
      { path: "management", loadComponent: () => import("./chunk-7F532F3B.js").then((m) => m.ProfileManagement) },
      { path: "preferences", loadComponent: () => import("./chunk-33UMZC5X.js").then((m) => m.MyPreferences) }
    ]
  }, false ? { \u0275entryName: "src/app/features/individual/profile/profile-layout/profile-layout.ts" } : {})
];
var IndividualRoutingModule = class _IndividualRoutingModule {
  static \u0275fac = function IndividualRoutingModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _IndividualRoutingModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _IndividualRoutingModule });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [RouterModule.forChild(routes), RouterModule] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IndividualRoutingModule, [{
    type: NgModule,
    args: [{
      imports: [RouterModule.forChild(routes)],
      exports: [RouterModule]
    }]
  }], null, null);
})();

// src/app/features/individual/individual-module.ts
var IndividualModule = class _IndividualModule {
  static \u0275fac = function IndividualModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _IndividualModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _IndividualModule });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [
    CommonModule,
    IndividualRoutingModule
  ] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IndividualModule, [{
    type: NgModule,
    args: [{
      declarations: [],
      imports: [
        CommonModule,
        IndividualRoutingModule
      ]
    }]
  }], null, null);
})();
export {
  IndividualModule
};
//# sourceMappingURL=chunk-GIWNSEDA.js.map
