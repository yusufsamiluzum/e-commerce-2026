import './polyfills.server.mjs';
import {
  RouterModule
} from "./chunk-6SS2UPAN.mjs";
import "./chunk-P2EBPDNO.mjs";
import {
  CommonModule,
  NgModule,
  setClassMetadata,
  ɵɵdefineInjector,
  ɵɵdefineNgModule
} from "./chunk-K2NYDLGG.mjs";
import {
  __spreadValues
} from "./chunk-T2KOBY73.mjs";

// src/app/features/individual/individual-routing-module.ts
var routes = [
  __spreadValues({
    path: "profile",
    loadComponent: () => import("./chunk-JU6D63PB.mjs").then((m) => m.ProfileLayout),
    children: [
      { path: "", redirectTo: "details", pathMatch: "full" },
      { path: "details", loadComponent: () => import("./chunk-UGQQNOG5.mjs").then((m) => m.UserProfile) },
      { path: "orders", loadComponent: () => import("./chunk-5TJVSJO7.mjs").then((m) => m.UserOrders) },
      { path: "refunds", loadComponent: () => import("./chunk-IDQ2RFWM.mjs").then((m) => m.UserRefunds) },
      { path: "history", loadComponent: () => import("./chunk-U64Q2YCD.mjs").then((m) => m.PurchaseHistory) },
      { path: "reviews", loadComponent: () => import("./chunk-OW4GBWIF.mjs").then((m) => m.MyReviews) },
      { path: "spending", loadComponent: () => import("./chunk-TWBZKLST.mjs").then((m) => m.SpendingAnalysis) },
      { path: "management", loadComponent: () => import("./chunk-JBAX5JGM.mjs").then((m) => m.ProfileManagement) },
      { path: "preferences", loadComponent: () => import("./chunk-6DLC7INZ.mjs").then((m) => m.MyPreferences) }
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
//# sourceMappingURL=chunk-6VNYZ4SN.mjs.map
