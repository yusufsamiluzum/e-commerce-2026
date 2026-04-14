import {
  RouterModule
} from "./chunk-XXXBABRB.js";
import {
  CommonModule,
  NgModule,
  __spreadValues,
  setClassMetadata,
  ɵɵdefineInjector,
  ɵɵdefineNgModule
} from "./chunk-7LZR64HY.js";

// src/app/features/individual/individual-routing-module.ts
var routes = [
  __spreadValues({
    path: "profile",
    loadComponent: () => import("./chunk-HPMULM74.js").then((m) => m.ProfileLayout),
    children: [
      { path: "", redirectTo: "details", pathMatch: "full" },
      { path: "details", loadComponent: () => import("./chunk-OBINRYOU.js").then((m) => m.UserProfile) },
      { path: "orders", loadComponent: () => import("./chunk-FDYO6RY6.js").then((m) => m.UserOrders) },
      { path: "refunds", loadComponent: () => import("./chunk-SC4Y3JDM.js").then((m) => m.UserRefunds) },
      { path: "history", loadComponent: () => import("./chunk-J7U6IYCQ.js").then((m) => m.PurchaseHistory) },
      { path: "reviews", loadComponent: () => import("./chunk-2KBAI6AQ.js").then((m) => m.MyReviews) },
      { path: "spending", loadComponent: () => import("./chunk-OOXHNCGO.js").then((m) => m.SpendingAnalysis) },
      { path: "management", loadComponent: () => import("./chunk-ASTAG4J4.js").then((m) => m.ProfileManagement) },
      { path: "preferences", loadComponent: () => import("./chunk-K7TKGUN5.js").then((m) => m.MyPreferences) }
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
//# sourceMappingURL=chunk-S4IDDNOO.js.map
