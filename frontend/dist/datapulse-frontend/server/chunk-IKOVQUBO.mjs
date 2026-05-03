import './polyfills.server.mjs';
import {
  AuthService
} from "./chunk-3Y3G2XM7.mjs";
import {
  Router,
  RouterLink,
  RouterLinkActive,
  RouterModule,
  RouterOutlet
} from "./chunk-6SS2UPAN.mjs";
import "./chunk-P2EBPDNO.mjs";
import {
  CommonModule,
  Component,
  NgModule,
  inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵsanitizeHtml,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-K2NYDLGG.mjs";
import {
  __spreadValues
} from "./chunk-T2KOBY73.mjs";

// src/app/features/admin/admin-layout.ts
var _forTrack0 = ($index, $item) => $item.path;
function AdminLayout_For_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 10);
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(1, "svg", 23);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    \u0275\u0275property("routerLink", item_r1.path);
    \u0275\u0275advance();
    \u0275\u0275property("innerHTML", item_r1.icon, \u0275\u0275sanitizeHtml);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", item_r1.label, " ");
  }
}
var AdminLayout = class _AdminLayout {
  auth = inject(AuthService);
  router = inject(Router);
  navItems = [
    {
      path: "/admin/dashboard",
      label: "Genel Bak\u0131\u015F",
      icon: `<path stroke-linecap="round" stroke-linejoin="round" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"/>`
    },
    {
      path: "/admin/users",
      label: "Kullan\u0131c\u0131lar",
      icon: `<path stroke-linecap="round" stroke-linejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"/>`
    },
    {
      path: "/admin/stores",
      label: "Ma\u011Fazalar",
      icon: `<path stroke-linecap="round" stroke-linejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>`
    },
    {
      path: "/admin/orders",
      label: "Sipari\u015Fler",
      icon: `<path stroke-linecap="round" stroke-linejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"/>`
    },
    {
      path: "/admin/refunds",
      label: "\u0130adeler",
      icon: `<path stroke-linecap="round" stroke-linejoin="round" d="M16 15v-1a4 4 0 00-4-4H8m0 0l3 3m-3-3l3-3m9 14V5a2 2 0 00-2-2H6a2 2 0 00-2 2v16l4-2 4 2 4-2 4 2z"/>`
    },
    {
      path: "/admin/analytics",
      label: "Analitik",
      icon: `<path stroke-linecap="round" stroke-linejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>`
    },
    {
      path: "/admin/reviews",
      label: "Yorumlar",
      icon: `<path stroke-linecap="round" stroke-linejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"/>`
    },
    {
      path: "/admin/categories",
      label: "Kategoriler",
      icon: `<path stroke-linecap="round" stroke-linejoin="round" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"/>`
    },
    {
      path: "/admin/audit-logs",
      label: "Denetim Loglar\u0131",
      icon: `<path stroke-linecap="round" stroke-linejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>`
    },
    {
      path: "/admin/config",
      label: "Sistem Ayarlar\u0131",
      icon: `<path stroke-linecap="round" stroke-linejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/><path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>`
    }
  ];
  logout() {
    this.auth.logout();
    this.router.navigate(["/"]);
  }
  static \u0275fac = function AdminLayout_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AdminLayout)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdminLayout, selectors: [["app-admin-layout"]], decls: 31, vars: 2, consts: [[1, "flex", "min-h-[calc(100vh-var(--navbar-h,64px))]"], [1, "w-60", "flex-shrink-0", "bg-stone-900", "flex", "flex-col", "sticky", "top-16", "h-[calc(100vh-64px)]", "overflow-y-auto"], [1, "px-4", "py-5", "border-b", "border-stone-800"], [1, "flex", "items-center", "gap-2.5"], [1, "w-8", "h-8", "rounded-lg", "bg-gradient-to-br", "from-orange-500", "to-red-600", "flex", "items-center", "justify-center", "flex-shrink-0", "shadow-lg", "shadow-orange-900/40"], ["viewBox", "0 0 24 24", "fill", "currentColor", 1, "w-4", "h-4", "text-white"], ["d", "M12.017 2C12.017 2 6 8 6 13.5a6.017 6.017 0 0 0 12 0C18 8 12.017 2 12.017 2zm-.017 15a2 2 0 0 1-2-2c0-1.5 1-3 2-4 1 1 2 2.5 2 4a2 2 0 0 1-2 2z"], [1, "text-sm", "font-semibold", "text-white"], [1, "text-xs", "text-stone-400"], [1, "flex-1", "p-3", "space-y-0.5"], ["routerLinkActive", "bg-stone-800 text-white", 1, "flex", "items-center", "gap-3", "px-3", "py-2.5", "rounded-lg", "text-sm", "text-stone-400", "hover:bg-stone-800", "hover:text-white", "transition-colors", "group", 3, "routerLink"], [1, "p-3", "border-t", "border-stone-800"], [1, "flex", "items-center", "gap-2.5", "px-3", "py-2", "mb-1"], [1, "w-7", "h-7", "rounded-full", "bg-red-600", "flex", "items-center", "justify-center", "flex-shrink-0"], ["fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", "stroke-width", "2", 1, "w-3.5", "h-3.5", "text-white"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"], [1, "min-w-0", "flex-1"], [1, "text-xs", "font-medium", "text-stone-200", "truncate"], [1, "text-[11px]", "text-stone-500", "truncate"], [1, "w-full", "flex", "items-center", "gap-2.5", "px-3", "py-2.5", "rounded-lg", "text-sm", "text-stone-400", "hover:bg-red-900/30", "hover:text-red-400", "transition-colors", 3, "click"], ["fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", "stroke-width", "2", 1, "w-4", "h-4", "flex-shrink-0"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"], [1, "flex-1", "min-w-0", "bg-stone-100"], ["fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", "stroke-width", "1.75", 1, "w-[18px]", "h-[18px]", "flex-shrink-0", "group-[.bg-stone-800]:text-ember-500", 3, "innerHTML"]], template: function AdminLayout_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "aside", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(5, "svg", 5);
      \u0275\u0275element(6, "path", 6);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(7, "div")(8, "p", 7);
      \u0275\u0275text(9, "ember");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "p", 8);
      \u0275\u0275text(11, "Admin Paneli");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(12, "nav", 9);
      \u0275\u0275repeaterCreate(13, AdminLayout_For_14_Template, 3, 3, "a", 10, _forTrack0);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "div", 11)(16, "div", 12)(17, "div", 13);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(18, "svg", 14);
      \u0275\u0275element(19, "path", 15);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(20, "div", 16)(21, "p", 17);
      \u0275\u0275text(22);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(23, "p", 18);
      \u0275\u0275text(24);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(25, "button", 19);
      \u0275\u0275listener("click", function AdminLayout_Template_button_click_25_listener() {
        return ctx.logout();
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(26, "svg", 20);
      \u0275\u0275element(27, "path", 21);
      \u0275\u0275elementEnd();
      \u0275\u0275text(28, " \xC7\u0131k\u0131\u015F Yap ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(29, "main", 22);
      \u0275\u0275element(30, "router-outlet");
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(13);
      \u0275\u0275repeater(ctx.navItems);
      \u0275\u0275advance(9);
      \u0275\u0275textInterpolate(ctx.auth.currentUserName());
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.auth.currentUserEmail());
    }
  }, dependencies: [CommonModule, RouterModule, RouterOutlet, RouterLink, RouterLinkActive], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AdminLayout, [{
    type: Component,
    args: [{ selector: "app-admin-layout", standalone: true, imports: [CommonModule, RouterModule], template: '<div class="flex min-h-[calc(100vh-var(--navbar-h,64px))]">\n\n  <!-- \u2500\u2500 Sol Koyu Sidebar \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->\n  <aside class="w-60 flex-shrink-0 bg-stone-900 flex flex-col sticky top-16 h-[calc(100vh-64px)] overflow-y-auto">\n\n    <!-- Platform ba\u015Fl\u0131\u011F\u0131 -->\n    <div class="px-4 py-5 border-b border-stone-800">\n      <div class="flex items-center gap-2.5">\n        <div class="w-8 h-8 rounded-lg bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center flex-shrink-0 shadow-lg shadow-orange-900/40">\n          <svg class="w-4 h-4 text-white" viewBox="0 0 24 24" fill="currentColor">\n            <path d="M12.017 2C12.017 2 6 8 6 13.5a6.017 6.017 0 0 0 12 0C18 8 12.017 2 12.017 2zm-.017 15a2 2 0 0 1-2-2c0-1.5 1-3 2-4 1 1 2 2.5 2 4a2 2 0 0 1-2 2z"/>\n          </svg>\n        </div>\n        <div>\n          <p class="text-sm font-semibold text-white">ember</p>\n          <p class="text-xs text-stone-400">Admin Paneli</p>\n        </div>\n      </div>\n    </div>\n\n    <!-- Navigasyon -->\n    <nav class="flex-1 p-3 space-y-0.5">\n      @for (item of navItems; track item.path) {\n        <a\n          [routerLink]="item.path"\n          routerLinkActive="bg-stone-800 text-white"\n          class="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-stone-400 hover:bg-stone-800 hover:text-white transition-colors group"\n        >\n          <svg\n            class="w-[18px] h-[18px] flex-shrink-0 group-[.bg-stone-800]:text-ember-500"\n            fill="none"\n            viewBox="0 0 24 24"\n            stroke="currentColor"\n            stroke-width="1.75"\n            [innerHTML]="item.icon"\n          ></svg>\n          {{ item.label }}\n        </a>\n      }\n    </nav>\n\n    <!-- Alt: admin kimli\u011Fi + \xE7\u0131k\u0131\u015F -->\n    <div class="p-3 border-t border-stone-800">\n      <div class="flex items-center gap-2.5 px-3 py-2 mb-1">\n        <div class="w-7 h-7 rounded-full bg-red-600 flex items-center justify-center flex-shrink-0">\n          <svg class="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">\n            <path stroke-linecap="round" stroke-linejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>\n          </svg>\n        </div>\n        <div class="min-w-0 flex-1">\n          <p class="text-xs font-medium text-stone-200 truncate">{{ auth.currentUserName() }}</p>\n          <p class="text-[11px] text-stone-500 truncate">{{ auth.currentUserEmail() }}</p>\n        </div>\n      </div>\n      <button\n        (click)="logout()"\n        class="w-full flex items-center gap-2.5 px-3 py-2.5 rounded-lg text-sm text-stone-400 hover:bg-red-900/30 hover:text-red-400 transition-colors"\n      >\n        <svg class="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">\n          <path stroke-linecap="round" stroke-linejoin="round" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"/>\n        </svg>\n        \xC7\u0131k\u0131\u015F Yap\n      </button>\n    </div>\n  </aside>\n\n  <!-- \u2500\u2500 \u0130\xE7erik Alan\u0131 \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->\n  <main class="flex-1 min-w-0 bg-stone-100">\n    <router-outlet></router-outlet>\n  </main>\n\n</div>\n' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdminLayout, { className: "AdminLayout", filePath: "app/features/admin/admin-layout.ts", lineNumber: 12 });
})();

// src/app/features/admin/admin-routing-module.ts
var routes = [
  {
    path: "",
    component: AdminLayout,
    children: [
      { path: "", redirectTo: "dashboard", pathMatch: "full" },
      __spreadValues({
        path: "dashboard",
        loadComponent: () => import("./chunk-ZMLSLY2O.mjs").then((m) => m.AdminDashboard)
      }, true ? { \u0275entryName: "src/app/features/admin/dashboard/admin-dashboard.ts" } : {}),
      __spreadValues({
        path: "users",
        loadComponent: () => import("./chunk-S6NIOBZB.mjs").then((m) => m.UserManagement)
      }, true ? { \u0275entryName: "src/app/features/admin/users/user-management.ts" } : {}),
      __spreadValues({
        path: "stores",
        loadComponent: () => import("./chunk-24BYYVOP.mjs").then((m) => m.StoreManagement)
      }, true ? { \u0275entryName: "src/app/features/admin/stores/store-management.ts" } : {}),
      __spreadValues({
        path: "orders",
        loadComponent: () => import("./chunk-NPKKYPCG.mjs").then((m) => m.OrderManagement)
      }, true ? { \u0275entryName: "src/app/features/admin/orders/order-management.ts" } : {}),
      __spreadValues({
        path: "refunds",
        loadComponent: () => import("./chunk-RYWM6OTH.mjs").then((m) => m.RefundManagement)
      }, true ? { \u0275entryName: "src/app/features/admin/refunds/refund-management.ts" } : {}),
      __spreadValues({
        path: "analytics",
        loadComponent: () => import("./chunk-HNIYQRWO.mjs").then((m) => m.PlatformAnalytics)
      }, true ? { \u0275entryName: "src/app/features/admin/analytics/platform-analytics.ts" } : {}),
      __spreadValues({
        path: "reviews",
        loadComponent: () => import("./chunk-TNLLC7V2.mjs").then((m) => m.ReviewModeration)
      }, true ? { \u0275entryName: "src/app/features/admin/reviews/review-moderation.ts" } : {}),
      __spreadValues({
        path: "categories",
        loadComponent: () => import("./chunk-6YD2PZFL.mjs").then((m) => m.CategoryManagement)
      }, true ? { \u0275entryName: "src/app/features/admin/categories/category-management.ts" } : {}),
      __spreadValues({
        path: "audit-logs",
        loadComponent: () => import("./chunk-MP35YROI.mjs").then((m) => m.AuditLogs)
      }, true ? { \u0275entryName: "src/app/features/admin/audit-logs/audit-logs.ts" } : {}),
      __spreadValues({
        path: "config",
        loadComponent: () => import("./chunk-4CGBE34B.mjs").then((m) => m.SystemConfig)
      }, true ? { \u0275entryName: "src/app/features/admin/config/system-config.ts" } : {})
    ]
  }
];
var AdminRoutingModule = class _AdminRoutingModule {
  static \u0275fac = function AdminRoutingModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AdminRoutingModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _AdminRoutingModule });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [RouterModule.forChild(routes), RouterModule] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AdminRoutingModule, [{
    type: NgModule,
    args: [{
      imports: [RouterModule.forChild(routes)],
      exports: [RouterModule]
    }]
  }], null, null);
})();

// src/app/features/admin/admin-module.ts
var AdminModule = class _AdminModule {
  static \u0275fac = function AdminModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AdminModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _AdminModule });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [
    CommonModule,
    AdminRoutingModule
  ] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AdminModule, [{
    type: NgModule,
    args: [{
      declarations: [],
      imports: [
        CommonModule,
        AdminRoutingModule
      ]
    }]
  }], null, null);
})();
export {
  AdminModule
};
//# sourceMappingURL=chunk-IKOVQUBO.mjs.map
