import './polyfills.server.mjs';
import {
  authGuard,
  roleGuard
} from "./chunk-ZIJWLA7M.mjs";
import "./chunk-Q3VV5QH5.mjs";
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

// src/app/features/corporate/corporate-routing-module.ts
var routes = [
  // Mağaza kurulumu — store yok ise buraya yönlendirilir
  __spreadValues({
    path: "store-setup",
    loadComponent: () => import("./chunk-3GPTR7CG.mjs").then((m) => m.StoreSetup),
    canActivate: [authGuard, roleGuard],
    data: { roles: ["CORPORATE"] }
  }, true ? { \u0275entryName: "src/app/features/corporate/store-setup/store-setup.ts" } : {}),
  // Profil — sidebar layout ile tüm alt sayfalara erişim
  __spreadValues({
    path: "profile",
    loadComponent: () => import("./chunk-XM7DUOOY.mjs").then((m) => m.CorporateProfileLayout),
    canActivate: [authGuard, roleGuard],
    data: { roles: ["CORPORATE"], requireStore: true },
    children: [
      {
        path: "details",
        loadComponent: () => import("./chunk-7QMVQ23F.mjs").then((m) => m.CorporateProfileDetails)
      },
      {
        path: "",
        redirectTo: "details",
        pathMatch: "full"
      }
    ]
  }, true ? { \u0275entryName: "src/app/features/corporate/profile/corporate-profile-layout.ts" } : {}),
  // Dashboard — navbar + footer'dan erişim
  __spreadValues({
    path: "dashboard",
    loadComponent: () => import("./chunk-3SUNM3VL.mjs").then((m) => m.CorporateDashboard),
    canActivate: [authGuard, roleGuard],
    data: { roles: ["CORPORATE"], requireStore: true }
  }, true ? { \u0275entryName: "src/app/features/corporate/dashboard/dashboard.ts" } : {}),
  // Ürün Kataloğu — navbar "Products" + footer "Products"
  __spreadValues({
    path: "catalog",
    loadComponent: () => import("./chunk-ULWKKTNK.mjs").then((m) => m.CatalogList),
    canActivate: [authGuard, roleGuard],
    data: { roles: ["CORPORATE"], requireStore: true }
  }, true ? { \u0275entryName: "src/app/features/corporate/catalog/catalog-list/catalog-list.ts" } : {}),
  // Envanter — navbar "Inventory"
  __spreadValues({
    path: "inventory",
    loadComponent: () => import("./chunk-5F435KXB.mjs").then((m) => m.Inventory),
    canActivate: [authGuard, roleGuard],
    data: { roles: ["CORPORATE"], requireStore: true }
  }, true ? { \u0275entryName: "src/app/features/corporate/inventory/inventory.ts" } : {}),
  // Mağaza Siparişleri — navbar "Store Orders" + footer "Store Orders"
  __spreadValues({
    path: "orders",
    loadComponent: () => import("./chunk-FEBJZHTS.mjs").then((m) => m.StoreOrders),
    canActivate: [authGuard, roleGuard],
    data: { roles: ["CORPORATE"], requireStore: true }
  }, true ? { \u0275entryName: "src/app/features/corporate/orders/store-orders.ts" } : {}),
  // Satış Analitiği
  __spreadValues({
    path: "analytics",
    loadComponent: () => import("./chunk-XS4X4S6B.mjs").then((m) => m.SalesAnalytics),
    canActivate: [authGuard, roleGuard],
    data: { roles: ["CORPORATE"], requireStore: true }
  }, true ? { \u0275entryName: "src/app/features/corporate/analytics/sales-analytics.ts" } : {}),
  // Müşteri Segmentasyonu
  __spreadValues({
    path: "customers",
    loadComponent: () => import("./chunk-25IIYT53.mjs").then((m) => m.CustomerSegmentation),
    canActivate: [authGuard, roleGuard],
    data: { roles: ["CORPORATE"], requireStore: true }
  }, true ? { \u0275entryName: "src/app/features/corporate/customers/customer-segmentation.ts" } : {}),
  // Yorum Yönetimi
  __spreadValues({
    path: "reviews",
    loadComponent: () => import("./chunk-ZSVSNWDD.mjs").then((m) => m.StoreReviews),
    canActivate: [authGuard, roleGuard],
    data: { roles: ["CORPORATE"], requireStore: true }
  }, true ? { \u0275entryName: "src/app/features/corporate/reviews/store-reviews.ts" } : {}),
  // Varsayılan yönlendirme
  {
    path: "",
    redirectTo: "dashboard",
    pathMatch: "full"
  }
];
var CorporateRoutingModule = class _CorporateRoutingModule {
  static \u0275fac = function CorporateRoutingModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CorporateRoutingModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _CorporateRoutingModule });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [RouterModule.forChild(routes), RouterModule] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CorporateRoutingModule, [{
    type: NgModule,
    args: [{
      imports: [RouterModule.forChild(routes)],
      exports: [RouterModule]
    }]
  }], null, null);
})();

// src/app/features/corporate/corporate-module.ts
var CorporateModule = class _CorporateModule {
  static \u0275fac = function CorporateModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CorporateModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _CorporateModule });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [
    CommonModule,
    CorporateRoutingModule
  ] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CorporateModule, [{
    type: NgModule,
    args: [{
      declarations: [],
      imports: [
        CommonModule,
        CorporateRoutingModule
      ]
    }]
  }], null, null);
})();
export {
  CorporateModule
};
//# sourceMappingURL=chunk-E3ZNDAAD.mjs.map
