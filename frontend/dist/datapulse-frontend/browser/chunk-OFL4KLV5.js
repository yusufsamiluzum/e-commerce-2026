import {
  authGuard,
  roleGuard
} from "./chunk-H6XBDJ4F.js";
import "./chunk-LK4C7XHL.js";
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

// src/app/features/corporate/corporate-routing-module.ts
var routes = [
  // Mağaza kurulumu — store yok ise buraya yönlendirilir
  __spreadValues({
    path: "store-setup",
    loadComponent: () => import("./chunk-OX4WGV7Z.js").then((m) => m.StoreSetup),
    canActivate: [authGuard, roleGuard],
    data: { roles: ["CORPORATE"] }
  }, false ? { \u0275entryName: "src/app/features/corporate/store-setup/store-setup.ts" } : {}),
  // Profil — sidebar layout ile tüm alt sayfalara erişim
  __spreadValues({
    path: "profile",
    loadComponent: () => import("./chunk-W36TECEH.js").then((m) => m.CorporateProfileLayout),
    canActivate: [authGuard, roleGuard],
    data: { roles: ["CORPORATE"], requireStore: true },
    children: [
      {
        path: "details",
        loadComponent: () => import("./chunk-MEEO5ZVZ.js").then((m) => m.CorporateProfileDetails)
      },
      {
        path: "",
        redirectTo: "details",
        pathMatch: "full"
      }
    ]
  }, false ? { \u0275entryName: "src/app/features/corporate/profile/corporate-profile-layout.ts" } : {}),
  // Dashboard — navbar + footer'dan erişim
  __spreadValues({
    path: "dashboard",
    loadComponent: () => import("./chunk-7CIDS5QU.js").then((m) => m.CorporateDashboard),
    canActivate: [authGuard, roleGuard],
    data: { roles: ["CORPORATE"], requireStore: true }
  }, false ? { \u0275entryName: "src/app/features/corporate/dashboard/dashboard.ts" } : {}),
  // Ürün Kataloğu — navbar "Products" + footer "Products"
  __spreadValues({
    path: "catalog",
    loadComponent: () => import("./chunk-YHQS6HL3.js").then((m) => m.CatalogList),
    canActivate: [authGuard, roleGuard],
    data: { roles: ["CORPORATE"], requireStore: true }
  }, false ? { \u0275entryName: "src/app/features/corporate/catalog/catalog-list/catalog-list.ts" } : {}),
  // Envanter — navbar "Inventory"
  __spreadValues({
    path: "inventory",
    loadComponent: () => import("./chunk-7ZVZ4GMO.js").then((m) => m.Inventory),
    canActivate: [authGuard, roleGuard],
    data: { roles: ["CORPORATE"], requireStore: true }
  }, false ? { \u0275entryName: "src/app/features/corporate/inventory/inventory.ts" } : {}),
  // Mağaza Siparişleri — navbar "Store Orders" + footer "Store Orders"
  __spreadValues({
    path: "orders",
    loadComponent: () => import("./chunk-XZ3DJDL3.js").then((m) => m.StoreOrders),
    canActivate: [authGuard, roleGuard],
    data: { roles: ["CORPORATE"], requireStore: true }
  }, false ? { \u0275entryName: "src/app/features/corporate/orders/store-orders.ts" } : {}),
  // Satış Analitiği
  __spreadValues({
    path: "analytics",
    loadComponent: () => import("./chunk-IVKIGMR4.js").then((m) => m.SalesAnalytics),
    canActivate: [authGuard, roleGuard],
    data: { roles: ["CORPORATE"], requireStore: true }
  }, false ? { \u0275entryName: "src/app/features/corporate/analytics/sales-analytics.ts" } : {}),
  // Müşteri Segmentasyonu
  __spreadValues({
    path: "customers",
    loadComponent: () => import("./chunk-SIFPN2TC.js").then((m) => m.CustomerSegmentation),
    canActivate: [authGuard, roleGuard],
    data: { roles: ["CORPORATE"], requireStore: true }
  }, false ? { \u0275entryName: "src/app/features/corporate/customers/customer-segmentation.ts" } : {}),
  // Yorum Yönetimi
  __spreadValues({
    path: "reviews",
    loadComponent: () => import("./chunk-TXZXO6XT.js").then((m) => m.StoreReviews),
    canActivate: [authGuard, roleGuard],
    data: { roles: ["CORPORATE"], requireStore: true }
  }, false ? { \u0275entryName: "src/app/features/corporate/reviews/store-reviews.ts" } : {}),
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
//# sourceMappingURL=chunk-OFL4KLV5.js.map
