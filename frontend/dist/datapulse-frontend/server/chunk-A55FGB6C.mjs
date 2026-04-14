import './polyfills.server.mjs';
import {
  RouterModule
} from "./chunk-JORFZ7VT.mjs";
import {
  CommonModule,
  NgModule,
  setClassMetadata,
  ɵɵdefineInjector,
  ɵɵdefineNgModule
} from "./chunk-JETRRDQP.mjs";
import {
  __spreadValues
} from "./chunk-T2KOBY73.mjs";

// src/app/features/individual/individual-routing-module.ts
var routes = [
  __spreadValues({
    path: "profile",
    loadComponent: () => import("./chunk-QWY22IRM.mjs").then((m) => m.ProfileLayout),
    children: [
      { path: "", redirectTo: "details", pathMatch: "full" },
      { path: "details", loadComponent: () => import("./chunk-AROHLYQV.mjs").then((m) => m.UserProfile) },
      { path: "orders", loadComponent: () => import("./chunk-ISBRXSSS.mjs").then((m) => m.UserOrders) },
      { path: "refunds", loadComponent: () => import("./chunk-Y344UYZ4.mjs").then((m) => m.UserRefunds) },
      { path: "history", loadComponent: () => import("./chunk-PWNLDRMR.mjs").then((m) => m.PurchaseHistory) },
      { path: "reviews", loadComponent: () => import("./chunk-AGB4XZMY.mjs").then((m) => m.MyReviews) },
      { path: "spending", loadComponent: () => import("./chunk-T7TIHYCR.mjs").then((m) => m.SpendingAnalysis) },
      { path: "management", loadComponent: () => import("./chunk-WQGTS4VO.mjs").then((m) => m.ProfileManagement) },
      { path: "preferences", loadComponent: () => import("./chunk-IF46QG4R.mjs").then((m) => m.MyPreferences) }
    ]
  }, true ? { \u0275entryName: "src/app/features/individual/profile/profile-layout/profile-layout.ts" } : {})
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
//# sourceMappingURL=chunk-A55FGB6C.mjs.map
