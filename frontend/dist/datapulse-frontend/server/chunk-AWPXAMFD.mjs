import './polyfills.server.mjs';
import {
  authGuard,
  roleGuard
} from "./chunk-OA3MIU4Y.mjs";
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
  ɵɵpureFunction1,
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

// src/app/features/corporate/corporate-layout.ts
var _c0 = (a0) => ({ exact: a0 });
var _forTrack0 = ($index, $item) => $item.path;
function CorporateLayout_For_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 11);
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(1, "svg", 24);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    \u0275\u0275property("routerLink", item_r1.path)("routerLinkActiveOptions", \u0275\u0275pureFunction1(4, _c0, item_r1.path.includes("details")));
    \u0275\u0275advance();
    \u0275\u0275property("innerHTML", item_r1.icon, \u0275\u0275sanitizeHtml);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", item_r1.label, " ");
  }
}
var CorporateLayout = class _CorporateLayout {
  auth = inject(AuthService);
  router = inject(Router);
  navItems = [
    {
      path: "/corporate/dashboard",
      label: "Dashboard",
      icon: `<path stroke-linecap="round" stroke-linejoin="round" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"/>`
    },
    {
      path: "/corporate/catalog",
      label: "\xDCr\xFCn Katalo\u011Fu",
      icon: `<path stroke-linecap="round" stroke-linejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"/>`
    },
    {
      path: "/corporate/inventory",
      label: "Envanter",
      icon: `<path stroke-linecap="round" stroke-linejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"/>`
    },
    {
      path: "/corporate/orders",
      label: "Sipari\u015Fler",
      icon: `<path stroke-linecap="round" stroke-linejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"/>`
    },
    {
      path: "/corporate/refunds",
      label: "\u0130adeler",
      icon: `<path stroke-linecap="round" stroke-linejoin="round" d="M16 15v-1a4 4 0 00-4-4H8m0 0l3 3m-3-3l3-3m9 14V5a2 2 0 00-2-2H6a2 2 0 00-2 2v16l4-2 4 2 4-2 4 2z"/>`
    },
    {
      path: "/corporate/analytics",
      label: "Analitik",
      icon: `<path stroke-linecap="round" stroke-linejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>`
    },
    {
      path: "/corporate/customers",
      label: "M\xFC\u015Fteriler",
      icon: `<path stroke-linecap="round" stroke-linejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"/>`
    },
    {
      path: "/corporate/reviews",
      label: "Yorumlar",
      icon: `<path stroke-linecap="round" stroke-linejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"/>`
    },
    {
      path: "/corporate/profile/details",
      label: "Profil Ayarlar\u0131",
      icon: `<path stroke-linecap="round" stroke-linejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/><path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>`
    }
  ];
  logout() {
    this.auth.logout();
    this.router.navigate(["/"]);
  }
  static \u0275fac = function CorporateLayout_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CorporateLayout)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CorporateLayout, selectors: [["app-corporate-layout"]], decls: 31, vars: 3, consts: [[1, "flex", "min-h-[calc(100vh-var(--navbar-h,112px))]"], [1, "w-60", "flex-shrink-0", "bg-white", "border-r", "border-stone-200", "flex", "flex-col", "sticky", "top-[112px]", "h-[calc(100vh-112px)]", "overflow-y-auto"], [1, "px-4", "py-5", "border-b", "border-stone-100"], [1, "flex", "items-center", "gap-2.5"], [1, "w-8", "h-8", "rounded-lg", "bg-gradient-to-br", "from-orange-500", "to-red-600", "flex", "items-center", "justify-center", "flex-shrink-0"], ["viewBox", "0 0 24 24", "fill", "currentColor", 1, "w-4", "h-4", "text-white"], ["d", "M12.017 2C12.017 2 6 8 6 13.5a6.017 6.017 0 0 0 12 0C18 8 12.017 2 12.017 2zm-.017 15a2 2 0 0 1-2-2c0-1.5 1-3 2-4 1 1 2 2.5 2 4a2 2 0 0 1-2 2z"], [1, "min-w-0"], [1, "text-sm", "font-semibold", "text-stone-900", "truncate"], [1, "text-xs", "text-stone-400", "truncate"], [1, "flex-1", "p-3", "space-y-0.5"], ["routerLinkActive", "bg-ember-50 text-ember-500 font-semibold", 1, "flex", "items-center", "gap-3", "px-3", "py-2.5", "rounded-lg", "text-sm", "text-stone-600", "hover:bg-stone-50", "hover:text-stone-900", "transition-colors", "group", 3, "routerLink", "routerLinkActiveOptions"], [1, "p-3", "border-t", "border-stone-100"], [1, "flex", "items-center", "gap-2.5", "px-3", "py-2", "mb-1"], [1, "w-7", "h-7", "rounded-full", "bg-ember-50", "border", "border-stone-200", "flex", "items-center", "justify-center", "flex-shrink-0"], ["fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", "stroke-width", "2", 1, "w-3.5", "h-3.5", "text-ember-500"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"], [1, "min-w-0", "flex-1"], [1, "text-xs", "font-medium", "text-stone-700", "truncate"], [1, "text-[11px]", "text-stone-400", "truncate"], [1, "w-full", "flex", "items-center", "gap-2.5", "px-3", "py-2.5", "rounded-lg", "text-sm", "text-stone-500", "hover:bg-red-50", "hover:text-red-600", "transition-colors", 3, "click"], ["fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", "stroke-width", "2", 1, "w-4", "h-4", "flex-shrink-0"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"], [1, "flex-1", "min-w-0", "bg-ember-50"], ["fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", "stroke-width", "1.75", 1, "w-[18px]", "h-[18px]", "flex-shrink-0", "group-[.bg-ember-50]:text-ember-500", 3, "innerHTML"]], template: function CorporateLayout_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "aside", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(5, "svg", 5);
      \u0275\u0275element(6, "path", 6);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(7, "div", 7)(8, "p", 8);
      \u0275\u0275text(9);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "p", 9);
      \u0275\u0275text(11, "Ma\u011Faza Paneli");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(12, "nav", 10);
      \u0275\u0275repeaterCreate(13, CorporateLayout_For_14_Template, 3, 6, "a", 11, _forTrack0);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "div", 12)(16, "div", 13)(17, "div", 14);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(18, "svg", 15);
      \u0275\u0275element(19, "path", 16);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(20, "div", 17)(21, "p", 18);
      \u0275\u0275text(22);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(23, "p", 19);
      \u0275\u0275text(24);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(25, "button", 20);
      \u0275\u0275listener("click", function CorporateLayout_Template_button_click_25_listener() {
        return ctx.logout();
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(26, "svg", 21);
      \u0275\u0275element(27, "path", 22);
      \u0275\u0275elementEnd();
      \u0275\u0275text(28, " \xC7\u0131k\u0131\u015F Yap ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(29, "main", 23);
      \u0275\u0275element(30, "router-outlet");
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(9);
      \u0275\u0275textInterpolate(ctx.auth.currentUserName() || "Ma\u011Fazam");
      \u0275\u0275advance(4);
      \u0275\u0275repeater(ctx.navItems);
      \u0275\u0275advance(9);
      \u0275\u0275textInterpolate(ctx.auth.currentUserName());
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.auth.currentUserEmail());
    }
  }, dependencies: [CommonModule, RouterModule, RouterOutlet, RouterLink, RouterLinkActive], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CorporateLayout, [{
    type: Component,
    args: [{ selector: "app-corporate-layout", standalone: true, imports: [CommonModule, RouterModule], template: `<div class="flex min-h-[calc(100vh-var(--navbar-h,112px))]">

  <!-- \u2500\u2500 Sol Sidebar \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
  <aside class="w-60 flex-shrink-0 bg-white border-r border-stone-200 flex flex-col sticky top-[112px] h-[calc(100vh-112px)] overflow-y-auto">

    <!-- Ma\u011Faza ba\u015Fl\u0131\u011F\u0131 -->
    <div class="px-4 py-5 border-b border-stone-100">
      <div class="flex items-center gap-2.5">
        <div class="w-8 h-8 rounded-lg bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center flex-shrink-0">
          <svg class="w-4 h-4 text-white" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12.017 2C12.017 2 6 8 6 13.5a6.017 6.017 0 0 0 12 0C18 8 12.017 2 12.017 2zm-.017 15a2 2 0 0 1-2-2c0-1.5 1-3 2-4 1 1 2 2.5 2 4a2 2 0 0 1-2 2z"/>
          </svg>
        </div>
        <div class="min-w-0">
          <p class="text-sm font-semibold text-stone-900 truncate">{{ auth.currentUserName() || 'Ma\u011Fazam' }}</p>
          <p class="text-xs text-stone-400 truncate">Ma\u011Faza Paneli</p>
        </div>
      </div>
    </div>

    <!-- Navigasyon -->
    <nav class="flex-1 p-3 space-y-0.5">
      @for (item of navItems; track item.path) {
        <a
          [routerLink]="item.path"
          routerLinkActive="bg-ember-50 text-ember-500 font-semibold"
          [routerLinkActiveOptions]="{ exact: item.path.includes('details') }"
          class="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-stone-600 hover:bg-stone-50 hover:text-stone-900 transition-colors group"
        >
          <svg
            class="w-[18px] h-[18px] flex-shrink-0 group-[.bg-ember-50]:text-ember-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="1.75"
            [innerHTML]="item.icon"
          ></svg>
          {{ item.label }}
        </a>
      }
    </nav>

    <!-- Alt: kullan\u0131c\u0131 + \xE7\u0131k\u0131\u015F -->
    <div class="p-3 border-t border-stone-100">
      <div class="flex items-center gap-2.5 px-3 py-2 mb-1">
        <div class="w-7 h-7 rounded-full bg-ember-50 border border-stone-200 flex items-center justify-center flex-shrink-0">
          <svg class="w-3.5 h-3.5 text-ember-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
          </svg>
        </div>
        <div class="min-w-0 flex-1">
          <p class="text-xs font-medium text-stone-700 truncate">{{ auth.currentUserName() }}</p>
          <p class="text-[11px] text-stone-400 truncate">{{ auth.currentUserEmail() }}</p>
        </div>
      </div>
      <button
        (click)="logout()"
        class="w-full flex items-center gap-2.5 px-3 py-2.5 rounded-lg text-sm text-stone-500 hover:bg-red-50 hover:text-red-600 transition-colors"
      >
        <svg class="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"/>
        </svg>
        \xC7\u0131k\u0131\u015F Yap
      </button>
    </div>
  </aside>

  <!-- \u2500\u2500 \u0130\xE7erik Alan\u0131 \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
  <main class="flex-1 min-w-0 bg-ember-50">
    <router-outlet></router-outlet>
  </main>

</div>
` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CorporateLayout, { className: "CorporateLayout", filePath: "app/features/corporate/corporate-layout.ts", lineNumber: 12 });
})();

// src/app/features/corporate/corporate-routing-module.ts
var routes = [
  // Mağaza kurulumu — sidebar olmadan
  __spreadValues({
    path: "store-setup",
    loadComponent: () => import("./chunk-RMRNRKNU.mjs").then((m) => m.StoreSetup),
    canActivate: [authGuard, roleGuard],
    data: { roles: ["CORPORATE"] }
  }, true ? { \u0275entryName: "src/app/features/corporate/store-setup/store-setup.ts" } : {}),
  // Profil — kendi layout'u var
  __spreadValues({
    path: "profile",
    loadComponent: () => import("./chunk-YOCSZFDS.mjs").then((m) => m.CorporateProfileLayout),
    canActivate: [authGuard, roleGuard],
    data: { roles: ["CORPORATE"], requireStore: true },
    children: [
      {
        path: "details",
        loadComponent: () => import("./chunk-ZMVNM5Z4.mjs").then((m) => m.CorporateProfileDetails)
      },
      { path: "", redirectTo: "details", pathMatch: "full" }
    ]
  }, true ? { \u0275entryName: "src/app/features/corporate/profile/corporate-profile-layout.ts" } : {}),
  // Ana panel — Ember sidebar layout
  {
    path: "",
    component: CorporateLayout,
    canActivate: [authGuard, roleGuard],
    data: { roles: ["CORPORATE"] },
    children: [
      __spreadValues({
        path: "dashboard",
        loadComponent: () => import("./chunk-QXO6XSWV.mjs").then((m) => m.CorporateDashboard),
        data: { requireStore: true }
      }, true ? { \u0275entryName: "src/app/features/corporate/dashboard/dashboard.ts" } : {}),
      __spreadValues({
        path: "catalog",
        loadComponent: () => import("./chunk-B6FHNQOQ.mjs").then((m) => m.CatalogList),
        data: { requireStore: true }
      }, true ? { \u0275entryName: "src/app/features/corporate/catalog/catalog-list/catalog-list.ts" } : {}),
      __spreadValues({
        path: "inventory",
        loadComponent: () => import("./chunk-HQDGSWWD.mjs").then((m) => m.Inventory),
        data: { requireStore: true }
      }, true ? { \u0275entryName: "src/app/features/corporate/inventory/inventory.ts" } : {}),
      __spreadValues({
        path: "orders",
        loadComponent: () => import("./chunk-SO6TMCT6.mjs").then((m) => m.StoreOrders),
        data: { requireStore: true }
      }, true ? { \u0275entryName: "src/app/features/corporate/orders/store-orders.ts" } : {}),
      __spreadValues({
        path: "refunds",
        loadComponent: () => import("./chunk-CSRALQB7.mjs").then((m) => m.StoreRefunds),
        data: { requireStore: true }
      }, true ? { \u0275entryName: "src/app/features/corporate/refunds/store-refunds.ts" } : {}),
      __spreadValues({
        path: "analytics",
        loadComponent: () => import("./chunk-ME4TMDRI.mjs").then((m) => m.SalesAnalytics),
        data: { requireStore: true }
      }, true ? { \u0275entryName: "src/app/features/corporate/analytics/sales-analytics.ts" } : {}),
      __spreadValues({
        path: "customers",
        loadComponent: () => import("./chunk-WCKL7D74.mjs").then((m) => m.CustomerSegmentation),
        data: { requireStore: true }
      }, true ? { \u0275entryName: "src/app/features/corporate/customers/customer-segmentation.ts" } : {}),
      __spreadValues({
        path: "reviews",
        loadComponent: () => import("./chunk-OXDQDKXN.mjs").then((m) => m.StoreReviews),
        data: { requireStore: true }
      }, true ? { \u0275entryName: "src/app/features/corporate/reviews/store-reviews.ts" } : {}),
      { path: "", redirectTo: "dashboard", pathMatch: "full" }
    ]
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
//# sourceMappingURL=chunk-AWPXAMFD.mjs.map
