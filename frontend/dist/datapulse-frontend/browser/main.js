import {
  authGuard,
  notCorporateGuard,
  roleGuard
} from "./chunk-BRARNRY3.js";
import {
  AuthService
} from "./chunk-OLUDDFS4.js";
import {
  CartService
} from "./chunk-BONAVTPV.js";
import {
  NavigationEnd,
  Router,
  RouterLink,
  RouterLinkActive,
  RouterModule,
  RouterOutlet,
  provideRouter,
  withInMemoryScrolling,
  withViewTransitions
} from "./chunk-N6CICK2R.js";
import {
  bootstrapApplication,
  provideClientHydration,
  withEventReplay
} from "./chunk-27YRKIWA.js";
import {
  CommonModule,
  Component,
  Injectable,
  NgClass,
  catchError,
  filter,
  inject,
  provideBrowserGlobalErrorListeners,
  provideHttpClient,
  setClassMetadata,
  signal,
  throwError,
  withFetch,
  withInterceptors,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdomElement,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵdomListener,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeHtml,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-OBD62CNA.js";
import {
  __spreadValues
} from "./chunk-H2SRQSE4.js";

// src/app/app.routes.ts
var routes = [
  { path: "", redirectTo: "/catalog", pathMatch: "full" },
  __spreadValues({ path: "catalog", loadChildren: () => import("./chunk-P4XHYZGF.js").then((m) => m.CatalogModule), canActivate: [notCorporateGuard] }, false ? { \u0275entryName: "src/app/features/catalog/catalog-module.ts" } : {}),
  __spreadValues({ path: "cart", loadChildren: () => import("./chunk-XXXNW55M.js").then((m) => m.CartModule), canActivate: [notCorporateGuard] }, false ? { \u0275entryName: "src/app/features/cart/cart-module.ts" } : {}),
  __spreadValues({ path: "checkout", loadChildren: () => import("./chunk-HRUVWGTD.js").then((m) => m.CheckoutModule), canActivate: [notCorporateGuard] }, false ? { \u0275entryName: "src/app/features/checkout/checkout-module.ts" } : {}),
  __spreadValues({ path: "individual", loadChildren: () => import("./chunk-GIWNSEDA.js").then((m) => m.IndividualModule), canActivate: [notCorporateGuard] }, false ? { \u0275entryName: "src/app/features/individual/individual-module.ts" } : {}),
  __spreadValues({ path: "auth", loadChildren: () => import("./chunk-JIDHORXJ.js").then((m) => m.AuthModule) }, false ? { \u0275entryName: "src/app/features/auth/auth-module.ts" } : {}),
  __spreadValues({ path: "admin", loadChildren: () => import("./chunk-BVWG3RJA.js").then((m) => m.AdminModule), canActivate: [authGuard, roleGuard], data: { roles: ["ADMIN"] } }, false ? { \u0275entryName: "src/app/features/admin/admin-module.ts" } : {}),
  __spreadValues({ path: "corporate", loadChildren: () => import("./chunk-GUSVX3PE.js").then((m) => m.CorporateModule) }, false ? { \u0275entryName: "src/app/features/corporate/corporate-module.ts" } : {}),
  __spreadValues({ path: "ai-assistant", loadComponent: () => import("./chunk-CGOBYXIU.js").then((m) => m.ChatbotPage), canActivate: [authGuard] }, false ? { \u0275entryName: "src/app/features/ai-assistant/chatbot-page.ts" } : {}),
  { path: "**", redirectTo: "/catalog" }
];

// src/app/core/interceptors/error-interceptor.ts
var errorInterceptor = (req, next) => {
  return next(req).pipe(catchError((error) => {
    let errorMsg = "";
    if (typeof ErrorEvent !== "undefined" && error.error instanceof ErrorEvent) {
      errorMsg = `[Client Error] ${error.error.message}`;
    } else {
      errorMsg = `[Backend Error] Status: ${error.status}, URL: ${error.url}, Message: ${error.error?.message || error.message}`;
    }
    console.error(errorMsg);
    return throwError(() => new Error(errorMsg));
  }));
};

// src/app/core/interceptors/auth.interceptor.ts
var authInterceptor = (req, next) => {
  req = req.clone({
    withCredentials: true
  });
  return next(req);
};

// src/app/app.config.ts
var appConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(
      routes,
      withInMemoryScrolling({ scrollPositionRestoration: "top" }),
      // Native browser View Transitions API — tüm route geçişleri smooth
      withViewTransitions()
    ),
    // Angular 17+ HTTP Transfer Cache varsayılan olarak aktif
    provideClientHydration(withEventReplay()),
    provideHttpClient(withFetch(), withInterceptors([errorInterceptor, authInterceptor]))
  ]
};

// src/app/core/layout/navbar/navbar.ts
var _c0 = () => ({ exact: true });
function Navbar_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 11);
    \u0275\u0275text(1, " Kategoriler ");
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 12);
    \u0275\u0275element(3, "path", 13);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(4, "div", 14)(5, "div", 15);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(6, "svg", 16);
    \u0275\u0275element(7, "path", 17);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275element(8, "input", 18);
    \u0275\u0275elementEnd();
  }
}
function Navbar_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 5);
  }
}
function Navbar_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 5);
  }
}
function Navbar_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 19);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 20);
    \u0275\u0275element(2, "path", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " AI ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classMap(ctx_r0.isAdmin() ? "hidden sm:flex items-center gap-1.5 text-sm font-medium text-stone-300 hover:text-white px-3 py-2 rounded-lg hover:bg-stone-800 transition-colors" : "hidden sm:flex items-center gap-1.5 text-sm font-medium text-stone-600 hover:text-ember-500 px-3 py-2 rounded-lg hover:bg-stone-50 transition-colors");
  }
}
function Navbar_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 22);
    \u0275\u0275text(1, " Giri\u015F Yap ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "a", 23);
    \u0275\u0275text(3, " Kay\u0131t Ol ");
    \u0275\u0275elementEnd();
  }
}
function Navbar_Conditional_14_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 25);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 30);
    \u0275\u0275element(2, "path", 31);
    \u0275\u0275elementEnd()();
  }
}
function Navbar_Conditional_14_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 26);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 32);
    \u0275\u0275element(2, "path", 31);
    \u0275\u0275elementEnd()();
  }
}
function Navbar_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 24);
    \u0275\u0275conditionalCreate(1, Navbar_Conditional_14_Conditional_1_Template, 3, 0, "div", 25)(2, Navbar_Conditional_14_Conditional_2_Template, 3, 0, "div", 26);
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "button", 27);
    \u0275\u0275listener("click", function Navbar_Conditional_14_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.logout());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(6, "svg", 28);
    \u0275\u0275element(7, "path", 29);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classMap(ctx_r0.isAdmin() ? "flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-stone-800 transition-colors group" : "flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-stone-50 transition-colors group");
    \u0275\u0275property("routerLink", ctx_r0.getProfileLink());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.isAdmin() ? 1 : 2);
    \u0275\u0275advance(2);
    \u0275\u0275classMap(ctx_r0.isAdmin() ? "hidden lg:block text-sm font-medium text-stone-300 group-hover:text-white" : "hidden lg:block text-sm font-medium text-stone-700 group-hover:text-ember-500");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.auth.currentUserName() || "Hesab\u0131m", " ");
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r0.isAdmin() ? "p-2 text-stone-400 hover:text-red-400 hover:bg-stone-800 rounded-lg transition-colors" : "p-2 text-stone-400 hover:text-red-500 hover:bg-stone-50 rounded-lg transition-colors");
  }
}
function Navbar_Conditional_15_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 35);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.cartService.totalItems(), " ");
  }
}
function Navbar_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 8);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 28);
    \u0275\u0275element(2, "path", 33);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(3, "span", 34);
    \u0275\u0275text(4, "Sepet");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(5, Navbar_Conditional_15_Conditional_5_Template, 2, 1, "span", 35);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275conditional(ctx_r0.cartService.totalItems() > 0 ? 5 : -1);
  }
}
function Navbar_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9)(1, "div", 36)(2, "div", 15);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(3, "svg", 16);
    \u0275\u0275element(4, "path", 17);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275element(5, "input", 37);
    \u0275\u0275elementEnd()();
  }
}
function Navbar_Conditional_17_Conditional_3_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 43);
    \u0275\u0275text(1, " Sipari\u015Flerim ");
    \u0275\u0275elementEnd();
  }
}
function Navbar_Conditional_17_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 41);
    \u0275\u0275text(1, " Ana Sayfa ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "a", 42);
    \u0275\u0275text(3, " T\xFCm \xDCr\xFCnler ");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(4, Navbar_Conditional_17_Conditional_3_Conditional_4_Template, 2, 0, "a", 43);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("routerLinkActiveOptions", \u0275\u0275pureFunction0(2, _c0));
    \u0275\u0275advance(4);
    \u0275\u0275conditional(ctx_r0.auth.currentUserRole() === "INDIVIDUAL" ? 4 : -1);
  }
}
function Navbar_Conditional_17_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 44);
    \u0275\u0275text(1, " Dashboard ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "a", 45);
    \u0275\u0275text(3, " \xDCr\xFCnler ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "a", 46);
    \u0275\u0275text(5, " Stok ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "a", 47);
    \u0275\u0275text(7, " Sipari\u015Fler ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "a", 48);
    \u0275\u0275text(9, " \u0130adeler ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "a", 49);
    \u0275\u0275text(11, " Analitik ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "a", 50);
    \u0275\u0275text(13, " Yorumlar ");
    \u0275\u0275elementEnd();
  }
}
function Navbar_Conditional_17_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 51);
    \u0275\u0275text(1, " Genel Bak\u0131\u015F ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "a", 52);
    \u0275\u0275text(3, " Kullan\u0131c\u0131lar ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "a", 53);
    \u0275\u0275text(5, " Ma\u011Fazalar ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "a", 54);
    \u0275\u0275text(7, " Sipari\u015Fler ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "a", 55);
    \u0275\u0275text(9, " \u0130adeler ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "a", 56);
    \u0275\u0275text(11, " Analitik ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "a", 57);
    \u0275\u0275text(13, " Yorumlar ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "a", 58);
    \u0275\u0275text(15, " Kategoriler ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "a", 59);
    \u0275\u0275text(17, " Denetim ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "a", 60);
    \u0275\u0275text(19, " Ayarlar ");
    \u0275\u0275elementEnd();
  }
}
function Navbar_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 38)(1, "div", 39)(2, "nav", 40);
    \u0275\u0275conditionalCreate(3, Navbar_Conditional_17_Conditional_3_Template, 5, 3);
    \u0275\u0275conditionalCreate(4, Navbar_Conditional_17_Conditional_4_Template, 14, 0);
    \u0275\u0275conditionalCreate(5, Navbar_Conditional_17_Conditional_5_Template, 20, 0);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classMap(ctx_r0.isAdmin() ? "border-stone-800" : "border-stone-100");
    \u0275\u0275advance(3);
    \u0275\u0275conditional(!ctx_r0.isCorporate() && !ctx_r0.isAdmin() ? 3 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.isCorporate() ? 4 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.isAdmin() ? 5 : -1);
  }
}
var Navbar = class _Navbar {
  auth = inject(AuthService);
  // Inject the signal state
  cartService = inject(CartService);
  // Inject the cart service
  router = inject(Router);
  getProfileLink() {
    const role = this.auth.currentUserRole();
    if (role === "ADMIN")
      return "/admin/dashboard";
    if (role === "CORPORATE")
      return "/corporate/profile/details";
    return "/individual/profile/details";
  }
  getHomeLink() {
    const role = this.auth.currentUserRole();
    if (role === "CORPORATE")
      return "/corporate/dashboard";
    if (role === "ADMIN")
      return "/admin/dashboard";
    return "/";
  }
  isCorporate() {
    return this.auth.currentUserRole() === "CORPORATE";
  }
  isAdmin() {
    return this.auth.currentUserRole() === "ADMIN";
  }
  logout() {
    this.auth.logout();
    this.router.navigate(["/"]);
  }
  static \u0275fac = function Navbar_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Navbar)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Navbar, selectors: [["app-navbar"]], decls: 18, vars: 14, consts: [[1, "container", "mx-auto", "px-4", "h-16", "flex", "items-center", "gap-3"], [1, "flex", "items-center", "gap-2", "flex-shrink-0", "mr-2", 3, "routerLink"], [1, "w-8", "h-8", "rounded-lg", "bg-gradient-to-br", "from-orange-500", "to-red-600", "flex", "items-center", "justify-center", "flex-shrink-0"], ["viewBox", "0 0 24 24", "fill", "currentColor", 1, "w-4", "h-4", "text-white"], ["d", "M12.017 2C12.017 2 6 8 6 13.5a6.017 6.017 0 0 0 12 0C18 8 12.017 2 12.017 2zm-.017 15a2 2 0 0 1-2-2c0-1.5 1-3 2-4 1 1 2 2.5 2 4a2 2 0 0 1-2 2z"], [1, "flex-1"], [1, "flex", "items-center", "gap-1", "ml-auto", "flex-shrink-0"], ["routerLink", "/ai-assistant", 3, "class"], ["routerLink", "/cart", 1, "relative", "flex", "items-center", "gap-2", "bg-ember-500", "hover:bg-ember-600", "text-white", "text-sm", "font-medium", "px-3", "py-2", "rounded-lg", "transition-colors", "ml-1"], [1, "flex", "md:hidden", "px-4", "pb-3"], [1, "border-t", "hidden", "md:block", 3, "class"], ["routerLink", "/catalog", 1, "hidden", "md:flex", "items-center", "gap-1.5", "text-sm", "font-medium", "text-stone-600", "hover:text-ember-500", "transition-colors", "flex-shrink-0", "border", "border-stone-200", "rounded-lg", "px-3", "py-2"], ["fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", "stroke-width", "2.5", 1, "w-3.5", "h-3.5", "opacity-60"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M19 9l-7 7-7-7"], [1, "hidden", "md:flex", "flex-1", "relative"], [1, "absolute", "inset-y-0", "left-0", "pl-3", "flex", "items-center", "pointer-events-none"], ["fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", "stroke-width", "2", 1, "w-4", "h-4", "text-stone-400"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"], ["type", "text", "placeholder", "\xDCr\xFCn, kategori ara...", 1, "w-full", "bg-stone-50", "border", "border-stone-200", "rounded-lg", "py-2", "pl-9", "pr-4", "text-sm", "text-stone-800", "placeholder-stone-400", "focus:outline-none", "focus:ring-2", "focus:ring-ember-500/20", "focus:border-ember-500", "transition-all"], ["routerLink", "/ai-assistant"], ["fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", "stroke-width", "1.75", 1, "w-4", "h-4"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z"], ["routerLink", "/auth/login", 1, "hidden", "sm:inline-flex", "text-sm", "font-medium", "text-stone-600", "hover:text-ember-500", "px-3", "py-2", "rounded-lg", "transition-colors"], ["routerLink", "/auth/register", 1, "hidden", "sm:inline-flex", "text-sm", "font-medium", "bg-ember-500", "hover:bg-ember-600", "text-white", "px-4", "py-2", "rounded-lg", "transition-colors"], [3, "routerLink"], [1, "w-7", "h-7", "rounded-full", "bg-red-600", "flex", "items-center", "justify-center", "flex-shrink-0"], [1, "w-7", "h-7", "rounded-full", "bg-ember-50", "border", "border-stone-200", "flex", "items-center", "justify-center", "flex-shrink-0"], ["title", "\xC7\u0131k\u0131\u015F Yap", 3, "click"], ["fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", "stroke-width", "2", 1, "w-4", "h-4"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"], ["fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", "stroke-width", "2", 1, "w-3.5", "h-3.5", "text-white"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"], ["fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", "stroke-width", "2", 1, "w-3.5", "h-3.5", "text-ember-500"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"], [1, "hidden", "sm:inline"], [1, "bg-white", "text-ember-500", "text-xs", "font-bold", "rounded-full", "h-4", "w-4", "flex", "items-center", "justify-center", "leading-none"], [1, "relative", "w-full"], ["type", "text", "placeholder", "\xDCr\xFCn ara...", 1, "w-full", "bg-stone-50", "border", "border-stone-200", "rounded-lg", "py-2", "pl-9", "pr-4", "text-sm", "text-stone-800", "placeholder-stone-400", "focus:outline-none", "focus:ring-2", "focus:ring-ember-500/20", "focus:border-ember-500", "transition-all"], [1, "border-t", "hidden", "md:block"], [1, "container", "mx-auto", "px-4"], [1, "flex", "items-center", "gap-1", "h-11", "text-sm"], ["routerLink", "/", "routerLinkActive", "text-ember-500 border-b-2 border-ember-500", 1, "px-3", "h-full", "flex", "items-center", "border-b-2", "border-transparent", "text-stone-600", "hover:text-ember-500", "font-medium", "transition-colors", 3, "routerLinkActiveOptions"], ["routerLink", "/catalog", "routerLinkActive", "text-ember-500 border-b-2 border-ember-500", 1, "px-3", "h-full", "flex", "items-center", "border-b-2", "border-transparent", "text-stone-600", "hover:text-ember-500", "font-medium", "transition-colors"], ["routerLink", "/individual/profile/orders", "routerLinkActive", "text-ember-500 border-b-2 border-ember-500", 1, "px-3", "h-full", "flex", "items-center", "border-b-2", "border-transparent", "text-stone-600", "hover:text-ember-500", "font-medium", "transition-colors"], ["routerLink", "/corporate/dashboard", "routerLinkActive", "text-ember-500 border-b-2 border-ember-500", 1, "px-3", "h-full", "flex", "items-center", "border-b-2", "border-transparent", "text-stone-600", "hover:text-ember-500", "font-medium", "transition-colors"], ["routerLink", "/corporate/catalog", "routerLinkActive", "text-ember-500 border-b-2 border-ember-500", 1, "px-3", "h-full", "flex", "items-center", "border-b-2", "border-transparent", "text-stone-600", "hover:text-ember-500", "font-medium", "transition-colors"], ["routerLink", "/corporate/inventory", "routerLinkActive", "text-ember-500 border-b-2 border-ember-500", 1, "px-3", "h-full", "flex", "items-center", "border-b-2", "border-transparent", "text-stone-600", "hover:text-ember-500", "font-medium", "transition-colors"], ["routerLink", "/corporate/orders", "routerLinkActive", "text-ember-500 border-b-2 border-ember-500", 1, "px-3", "h-full", "flex", "items-center", "border-b-2", "border-transparent", "text-stone-600", "hover:text-ember-500", "font-medium", "transition-colors"], ["routerLink", "/corporate/refunds", "routerLinkActive", "text-ember-500 border-b-2 border-ember-500", 1, "px-3", "h-full", "flex", "items-center", "border-b-2", "border-transparent", "text-stone-600", "hover:text-ember-500", "font-medium", "transition-colors"], ["routerLink", "/corporate/analytics", "routerLinkActive", "text-ember-500 border-b-2 border-ember-500", 1, "px-3", "h-full", "flex", "items-center", "border-b-2", "border-transparent", "text-stone-600", "hover:text-ember-500", "font-medium", "transition-colors"], ["routerLink", "/corporate/reviews", "routerLinkActive", "text-ember-500 border-b-2 border-ember-500", 1, "px-3", "h-full", "flex", "items-center", "border-b-2", "border-transparent", "text-stone-600", "hover:text-ember-500", "font-medium", "transition-colors"], ["routerLink", "/admin/dashboard", "routerLinkActive", "!text-white !border-ember-500", 1, "px-3", "h-full", "flex", "items-center", "border-b-2", "border-transparent", "text-stone-400", "hover:text-white", "font-medium", "transition-colors"], ["routerLink", "/admin/users", "routerLinkActive", "!text-white !border-ember-500", 1, "px-3", "h-full", "flex", "items-center", "border-b-2", "border-transparent", "text-stone-400", "hover:text-white", "font-medium", "transition-colors"], ["routerLink", "/admin/stores", "routerLinkActive", "!text-white !border-ember-500", 1, "px-3", "h-full", "flex", "items-center", "border-b-2", "border-transparent", "text-stone-400", "hover:text-white", "font-medium", "transition-colors"], ["routerLink", "/admin/orders", "routerLinkActive", "!text-white !border-ember-500", 1, "px-3", "h-full", "flex", "items-center", "border-b-2", "border-transparent", "text-stone-400", "hover:text-white", "font-medium", "transition-colors"], ["routerLink", "/admin/refunds", "routerLinkActive", "!text-white !border-ember-500", 1, "px-3", "h-full", "flex", "items-center", "border-b-2", "border-transparent", "text-stone-400", "hover:text-white", "font-medium", "transition-colors"], ["routerLink", "/admin/analytics", "routerLinkActive", "!text-white !border-ember-500", 1, "px-3", "h-full", "flex", "items-center", "border-b-2", "border-transparent", "text-stone-400", "hover:text-white", "font-medium", "transition-colors"], ["routerLink", "/admin/reviews", "routerLinkActive", "!text-white !border-ember-500", 1, "px-3", "h-full", "flex", "items-center", "border-b-2", "border-transparent", "text-stone-400", "hover:text-white", "font-medium", "transition-colors"], ["routerLink", "/admin/categories", "routerLinkActive", "!text-white !border-ember-500", 1, "px-3", "h-full", "flex", "items-center", "border-b-2", "border-transparent", "text-stone-400", "hover:text-white", "font-medium", "transition-colors"], ["routerLink", "/admin/audit-logs", "routerLinkActive", "!text-white !border-ember-500", 1, "px-3", "h-full", "flex", "items-center", "border-b-2", "border-transparent", "text-stone-400", "hover:text-white", "font-medium", "transition-colors"], ["routerLink", "/admin/config", "routerLinkActive", "!text-white !border-ember-500", 1, "px-3", "h-full", "flex", "items-center", "border-b-2", "border-transparent", "text-stone-400", "hover:text-white", "font-medium", "transition-colors"]], template: function Navbar_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "header")(1, "div", 0)(2, "a", 1)(3, "div", 2);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(4, "svg", 3);
      \u0275\u0275element(5, "path", 4);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(6, "span");
      \u0275\u0275text(7, "ember");
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(8, Navbar_Conditional_8_Template, 9, 0);
      \u0275\u0275conditionalCreate(9, Navbar_Conditional_9_Template, 1, 0, "div", 5);
      \u0275\u0275conditionalCreate(10, Navbar_Conditional_10_Template, 1, 0, "div", 5);
      \u0275\u0275elementStart(11, "div", 6);
      \u0275\u0275conditionalCreate(12, Navbar_Conditional_12_Template, 4, 2, "a", 7);
      \u0275\u0275conditionalCreate(13, Navbar_Conditional_13_Template, 4, 0);
      \u0275\u0275conditionalCreate(14, Navbar_Conditional_14_Template, 8, 9);
      \u0275\u0275conditionalCreate(15, Navbar_Conditional_15_Template, 6, 1, "a", 8);
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(16, Navbar_Conditional_16_Template, 6, 0, "div", 9);
      \u0275\u0275conditionalCreate(17, Navbar_Conditional_17_Template, 6, 5, "div", 10);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275classMap(ctx.isAdmin() ? "bg-stone-900 sticky top-0 z-50 border-b border-stone-800" : "bg-white sticky top-0 z-50 border-b border-stone-200");
      \u0275\u0275advance(2);
      \u0275\u0275property("routerLink", ctx.getHomeLink());
      \u0275\u0275advance(4);
      \u0275\u0275classMap(ctx.isAdmin() ? "text-lg font-semibold text-white tracking-tight" : "text-lg font-semibold text-stone-900 tracking-tight");
      \u0275\u0275advance(2);
      \u0275\u0275conditional(!ctx.isCorporate() && !ctx.isAdmin() ? 8 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.isCorporate() ? 9 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.isAdmin() ? 10 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.auth.currentUserRole() !== "GUEST" ? 12 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.auth.currentUserRole() === "GUEST" ? 13 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.auth.currentUserRole() !== "GUEST" ? 14 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.auth.currentUserRole() === "INDIVIDUAL" || ctx.auth.currentUserRole() === "GUEST" ? 15 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(!ctx.isCorporate() && !ctx.isAdmin() ? 16 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(!ctx.isCorporate() && !ctx.isAdmin() ? 17 : -1);
    }
  }, dependencies: [CommonModule, RouterModule, RouterLink, RouterLinkActive], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Navbar, [{
    type: Component,
    args: [{ selector: "app-navbar", standalone: true, imports: [CommonModule, RouterModule], template: `<header [class]="isAdmin() ? 'bg-stone-900 sticky top-0 z-50 border-b border-stone-800' : 'bg-white sticky top-0 z-50 border-b border-stone-200'">

  <!-- \u2500\u2500 Ana Sat\u0131r \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
  <div class="container mx-auto px-4 h-16 flex items-center gap-3">

    <!-- Logo -->
    <a [routerLink]="getHomeLink()" class="flex items-center gap-2 flex-shrink-0 mr-2">
      <div class="w-8 h-8 rounded-lg bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center flex-shrink-0">
        <svg class="w-4 h-4 text-white" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12.017 2C12.017 2 6 8 6 13.5a6.017 6.017 0 0 0 12 0C18 8 12.017 2 12.017 2zm-.017 15a2 2 0 0 1-2-2c0-1.5 1-3 2-4 1 1 2 2.5 2 4a2 2 0 0 1-2 2z"/>
        </svg>
      </div>
      <span [class]="isAdmin() ? 'text-lg font-semibold text-white tracking-tight' : 'text-lg font-semibold text-stone-900 tracking-tight'">ember</span>
    </a>

    <!-- Arama + Kategoriler \u2014 sadece INDIVIDUAL ve GUEST i\xE7in -->
    @if (!isCorporate() && !isAdmin()) {
      <a routerLink="/catalog"
        class="hidden md:flex items-center gap-1.5 text-sm font-medium text-stone-600 hover:text-ember-500 transition-colors flex-shrink-0 border border-stone-200 rounded-lg px-3 py-2">
        Kategoriler
        <svg class="w-3.5 h-3.5 opacity-60" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
          <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7"/>
        </svg>
      </a>

      <div class="hidden md:flex flex-1 relative">
        <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <svg class="w-4 h-4 text-stone-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
          </svg>
        </div>
        <input type="text" placeholder="\xDCr\xFCn, kategori ara..."
          class="w-full bg-stone-50 border border-stone-200 rounded-lg py-2 pl-9 pr-4 text-sm text-stone-800 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-ember-500/20 focus:border-ember-500 transition-all" />
      </div>
    }

    <!-- CORPORATE orta alan \u2014 bo\u015F spacer -->
    @if (isCorporate()) {
      <div class="flex-1"></div>
    }

    <!-- ADMIN orta alan \u2014 bo\u015F spacer -->
    @if (isAdmin()) {
      <div class="flex-1"></div>
    }

    <!-- \u2500\u2500 Sa\u011F Aksiyonlar \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
    <div class="flex items-center gap-1 ml-auto flex-shrink-0">

      <!-- AI Asistan \u2014 giri\u015F yapm\u0131\u015F t\xFCm roller -->
      @if (auth.currentUserRole() !== 'GUEST') {
        <a routerLink="/ai-assistant"
          [class]="isAdmin()
            ? 'hidden sm:flex items-center gap-1.5 text-sm font-medium text-stone-300 hover:text-white px-3 py-2 rounded-lg hover:bg-stone-800 transition-colors'
            : 'hidden sm:flex items-center gap-1.5 text-sm font-medium text-stone-600 hover:text-ember-500 px-3 py-2 rounded-lg hover:bg-stone-50 transition-colors'">
          <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.75">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z"/>
          </svg>
          AI
        </a>
      }

      <!-- GUEST: Giri\u015F + Kay\u0131t -->
      @if (auth.currentUserRole() === 'GUEST') {
        <a routerLink="/auth/login"
          class="hidden sm:inline-flex text-sm font-medium text-stone-600 hover:text-ember-500 px-3 py-2 rounded-lg transition-colors">
          Giri\u015F Yap
        </a>
        <a routerLink="/auth/register"
          class="hidden sm:inline-flex text-sm font-medium bg-ember-500 hover:bg-ember-600 text-white px-4 py-2 rounded-lg transition-colors">
          Kay\u0131t Ol
        </a>
      }

      <!-- Giri\u015F yapm\u0131\u015F: Hesap -->
      @if (auth.currentUserRole() !== 'GUEST') {
        <a [routerLink]="getProfileLink()"
          [class]="isAdmin()
            ? 'flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-stone-800 transition-colors group'
            : 'flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-stone-50 transition-colors group'">
          <!-- Avatar -->
          @if (isAdmin()) {
            <div class="w-7 h-7 rounded-full bg-red-600 flex items-center justify-center flex-shrink-0">
              <svg class="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
              </svg>
            </div>
          } @else {
            <div class="w-7 h-7 rounded-full bg-ember-50 border border-stone-200 flex items-center justify-center flex-shrink-0">
              <svg class="w-3.5 h-3.5 text-ember-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
              </svg>
            </div>
          }
          <span [class]="isAdmin()
            ? 'hidden lg:block text-sm font-medium text-stone-300 group-hover:text-white'
            : 'hidden lg:block text-sm font-medium text-stone-700 group-hover:text-ember-500'">
            {{ auth.currentUserName() || 'Hesab\u0131m' }}
          </span>
        </a>

        <button (click)="logout()" title="\xC7\u0131k\u0131\u015F Yap"
          [class]="isAdmin()
            ? 'p-2 text-stone-400 hover:text-red-400 hover:bg-stone-800 rounded-lg transition-colors'
            : 'p-2 text-stone-400 hover:text-red-500 hover:bg-stone-50 rounded-lg transition-colors'">
          <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"/>
          </svg>
        </button>
      }

      <!-- Sepet \u2014 INDIVIDUAL ve GUEST -->
      @if (auth.currentUserRole() === 'INDIVIDUAL' || auth.currentUserRole() === 'GUEST') {
        <a routerLink="/cart"
          class="relative flex items-center gap-2 bg-ember-500 hover:bg-ember-600 text-white text-sm font-medium px-3 py-2 rounded-lg transition-colors ml-1">
          <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/>
          </svg>
          <span class="hidden sm:inline">Sepet</span>
          @if (cartService.totalItems() > 0) {
            <span class="bg-white text-ember-500 text-xs font-bold rounded-full h-4 w-4 flex items-center justify-center leading-none">
              {{ cartService.totalItems() }}
            </span>
          }
        </a>
      }

    </div>
  </div>

  <!-- \u2500\u2500 Mobil Arama \u2014 INDIVIDUAL / GUEST \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
  @if (!isCorporate() && !isAdmin()) {
    <div class="flex md:hidden px-4 pb-3">
      <div class="relative w-full">
        <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <svg class="w-4 h-4 text-stone-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
          </svg>
        </div>
        <input type="text" placeholder="\xDCr\xFCn ara..."
          class="w-full bg-stone-50 border border-stone-200 rounded-lg py-2 pl-9 pr-4 text-sm text-stone-800 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-ember-500/20 focus:border-ember-500 transition-all" />
      </div>
    </div>
  }

  <!-- \u2500\u2500 Alt Navigasyon \xC7ubu\u011Fu \u2014 sadece INDIVIDUAL / GUEST \u2500\u2500\u2500\u2500 -->
  @if (!isCorporate() && !isAdmin()) {
  <div class="border-t hidden md:block"
    [class]="isAdmin() ? 'border-stone-800' : 'border-stone-100'">
    <div class="container mx-auto px-4">
      <nav class="flex items-center gap-1 h-11 text-sm">

        <!-- INDIVIDUAL / GUEST -->
        @if (!isCorporate() && !isAdmin()) {
          <a routerLink="/" routerLinkActive="text-ember-500 border-b-2 border-ember-500"
            [routerLinkActiveOptions]="{ exact: true }"
            class="px-3 h-full flex items-center border-b-2 border-transparent text-stone-600 hover:text-ember-500 font-medium transition-colors">
            Ana Sayfa
          </a>
          <a routerLink="/catalog" routerLinkActive="text-ember-500 border-b-2 border-ember-500"
            class="px-3 h-full flex items-center border-b-2 border-transparent text-stone-600 hover:text-ember-500 font-medium transition-colors">
            T\xFCm \xDCr\xFCnler
          </a>
          @if (auth.currentUserRole() === 'INDIVIDUAL') {
            <a routerLink="/individual/profile/orders" routerLinkActive="text-ember-500 border-b-2 border-ember-500"
              class="px-3 h-full flex items-center border-b-2 border-transparent text-stone-600 hover:text-ember-500 font-medium transition-colors">
              Sipari\u015Flerim
            </a>
          }
        }

        <!-- CORPORATE -->
        @if (isCorporate()) {
          <a routerLink="/corporate/dashboard" routerLinkActive="text-ember-500 border-b-2 border-ember-500"
            class="px-3 h-full flex items-center border-b-2 border-transparent text-stone-600 hover:text-ember-500 font-medium transition-colors">
            Dashboard
          </a>
          <a routerLink="/corporate/catalog" routerLinkActive="text-ember-500 border-b-2 border-ember-500"
            class="px-3 h-full flex items-center border-b-2 border-transparent text-stone-600 hover:text-ember-500 font-medium transition-colors">
            \xDCr\xFCnler
          </a>
          <a routerLink="/corporate/inventory" routerLinkActive="text-ember-500 border-b-2 border-ember-500"
            class="px-3 h-full flex items-center border-b-2 border-transparent text-stone-600 hover:text-ember-500 font-medium transition-colors">
            Stok
          </a>
          <a routerLink="/corporate/orders" routerLinkActive="text-ember-500 border-b-2 border-ember-500"
            class="px-3 h-full flex items-center border-b-2 border-transparent text-stone-600 hover:text-ember-500 font-medium transition-colors">
            Sipari\u015Fler
          </a>
          <a routerLink="/corporate/refunds" routerLinkActive="text-ember-500 border-b-2 border-ember-500"
            class="px-3 h-full flex items-center border-b-2 border-transparent text-stone-600 hover:text-ember-500 font-medium transition-colors">
            \u0130adeler
          </a>
          <a routerLink="/corporate/analytics" routerLinkActive="text-ember-500 border-b-2 border-ember-500"
            class="px-3 h-full flex items-center border-b-2 border-transparent text-stone-600 hover:text-ember-500 font-medium transition-colors">
            Analitik
          </a>
          <a routerLink="/corporate/reviews" routerLinkActive="text-ember-500 border-b-2 border-ember-500"
            class="px-3 h-full flex items-center border-b-2 border-transparent text-stone-600 hover:text-ember-500 font-medium transition-colors">
            Yorumlar
          </a>
        }

        <!-- ADMIN -->
        @if (isAdmin()) {
          <a routerLink="/admin/dashboard" routerLinkActive="!text-white !border-ember-500"
            class="px-3 h-full flex items-center border-b-2 border-transparent text-stone-400 hover:text-white font-medium transition-colors">
            Genel Bak\u0131\u015F
          </a>
          <a routerLink="/admin/users" routerLinkActive="!text-white !border-ember-500"
            class="px-3 h-full flex items-center border-b-2 border-transparent text-stone-400 hover:text-white font-medium transition-colors">
            Kullan\u0131c\u0131lar
          </a>
          <a routerLink="/admin/stores" routerLinkActive="!text-white !border-ember-500"
            class="px-3 h-full flex items-center border-b-2 border-transparent text-stone-400 hover:text-white font-medium transition-colors">
            Ma\u011Fazalar
          </a>
          <a routerLink="/admin/orders" routerLinkActive="!text-white !border-ember-500"
            class="px-3 h-full flex items-center border-b-2 border-transparent text-stone-400 hover:text-white font-medium transition-colors">
            Sipari\u015Fler
          </a>
          <a routerLink="/admin/refunds" routerLinkActive="!text-white !border-ember-500"
            class="px-3 h-full flex items-center border-b-2 border-transparent text-stone-400 hover:text-white font-medium transition-colors">
            \u0130adeler
          </a>
          <a routerLink="/admin/analytics" routerLinkActive="!text-white !border-ember-500"
            class="px-3 h-full flex items-center border-b-2 border-transparent text-stone-400 hover:text-white font-medium transition-colors">
            Analitik
          </a>
          <a routerLink="/admin/reviews" routerLinkActive="!text-white !border-ember-500"
            class="px-3 h-full flex items-center border-b-2 border-transparent text-stone-400 hover:text-white font-medium transition-colors">
            Yorumlar
          </a>
          <a routerLink="/admin/categories" routerLinkActive="!text-white !border-ember-500"
            class="px-3 h-full flex items-center border-b-2 border-transparent text-stone-400 hover:text-white font-medium transition-colors">
            Kategoriler
          </a>
          <a routerLink="/admin/audit-logs" routerLinkActive="!text-white !border-ember-500"
            class="px-3 h-full flex items-center border-b-2 border-transparent text-stone-400 hover:text-white font-medium transition-colors">
            Denetim
          </a>
          <a routerLink="/admin/config" routerLinkActive="!text-white !border-ember-500"
            class="px-3 h-full flex items-center border-b-2 border-transparent text-stone-400 hover:text-white font-medium transition-colors">
            Ayarlar
          </a>
        }

      </nav>
    </div>
  </div>
  }

</header>
` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Navbar, { className: "Navbar", filePath: "app/core/layout/navbar/navbar.ts", lineNumber: 13 });
})();

// src/app/core/layout/footer/footer.ts
function Footer_Conditional_13_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li")(1, "a", 17);
    \u0275\u0275text(2, "Giri\u015F Yap");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(3, "li")(4, "a", 18);
    \u0275\u0275text(5, "Kay\u0131t Ol");
    \u0275\u0275elementEnd()();
  }
}
function Footer_Conditional_13_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li")(1, "a", 19);
    \u0275\u0275text(2, "Sipari\u015Flerim");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(3, "li")(4, "a", 20);
    \u0275\u0275text(5, "Profilim");
    \u0275\u0275elementEnd()();
  }
}
function Footer_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "h4", 13);
    \u0275\u0275text(2, "Ma\u011Faza");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "ul", 14)(4, "li")(5, "a", 15);
    \u0275\u0275text(6, "T\xFCm \xDCr\xFCnler");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "li")(8, "a", 16);
    \u0275\u0275text(9, "Sepetim");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(10, "div")(11, "h4", 13);
    \u0275\u0275text(12, "Hesap");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "ul", 14);
    \u0275\u0275conditionalCreate(14, Footer_Conditional_13_Conditional_14_Template, 6, 0);
    \u0275\u0275conditionalCreate(15, Footer_Conditional_13_Conditional_15_Template, 6, 0);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(14);
    \u0275\u0275conditional(ctx_r0.auth.currentUserRole() === "GUEST" ? 14 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.auth.currentUserRole() === "INDIVIDUAL" ? 15 : -1);
  }
}
function Footer_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "h4", 13);
    \u0275\u0275text(2, "Ma\u011Faza Paneli");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "ul", 14)(4, "li")(5, "a", 21);
    \u0275\u0275text(6, "Dashboard");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "li")(8, "a", 22);
    \u0275\u0275text(9, "\xDCr\xFCnlerim");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "li")(11, "a", 23);
    \u0275\u0275text(12, "Sipari\u015Fler");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "li")(14, "a", 24);
    \u0275\u0275text(15, "Analitik");
    \u0275\u0275elementEnd()()()();
  }
}
function Footer_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "h4", 13);
    \u0275\u0275text(2, "Admin Paneli");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "ul", 14)(4, "li")(5, "a", 25);
    \u0275\u0275text(6, "Genel Bak\u0131\u015F");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "li")(8, "a", 26);
    \u0275\u0275text(9, "Kullan\u0131c\u0131lar");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "li")(11, "a", 27);
    \u0275\u0275text(12, "Ma\u011Fazalar");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "li")(14, "a", 28);
    \u0275\u0275text(15, "Analitik");
    \u0275\u0275elementEnd()()()();
  }
}
function Footer_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "h4", 13);
    \u0275\u0275text(2, "Ara\xE7lar");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "ul", 14)(4, "li")(5, "a", 29);
    \u0275\u0275text(6, "AI Asistan");
    \u0275\u0275elementEnd()()()();
  }
}
var Footer = class _Footer {
  auth = inject(AuthService);
  currentYear = (/* @__PURE__ */ new Date()).getFullYear();
  // Automatically updates the copyright year
  static \u0275fac = function Footer_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Footer)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Footer, selectors: [["app-footer"]], decls: 22, vars: 5, consts: [[1, "bg-white", "border-t", "border-stone-200", "mt-auto"], [1, "container", "mx-auto", "px-4", "max-w-7xl", "py-10"], [1, "flex", "flex-col", "md:flex-row", "justify-between", "gap-10"], [1, "space-y-3", "max-w-xs"], ["routerLink", "/", 1, "flex", "items-center", "gap-2"], [1, "w-7", "h-7", "rounded-lg", "bg-gradient-to-br", "from-orange-500", "to-red-600", "flex", "items-center", "justify-center", "flex-shrink-0"], ["viewBox", "0 0 24 24", "fill", "currentColor", 1, "w-3.5", "h-3.5", "text-white"], ["d", "M12.017 2C12.017 2 6 8 6 13.5a6.017 6.017 0 0 0 12 0C18 8 12.017 2 12.017 2zm-.017 15a2 2 0 0 1-2-2c0-1.5 1-3 2-4 1 1 2 2.5 2 4a2 2 0 0 1-2 2z"], [1, "text-base", "font-semibold", "text-stone-900"], [1, "text-sm", "text-stone-400", "leading-relaxed"], [1, "flex", "flex-wrap", "gap-12"], [1, "border-t", "border-stone-100", "mt-8", "pt-6", "flex", "flex-col", "sm:flex-row", "justify-between", "items-center", "gap-2", "text-xs", "text-stone-400"], [1, "text-stone-300"], [1, "text-xs", "font-semibold", "text-stone-500", "uppercase", "tracking-wider", "mb-4"], [1, "space-y-2.5", "text-sm", "text-stone-600"], ["routerLink", "/catalog", 1, "hover:text-ember-500", "transition-colors"], ["routerLink", "/cart", 1, "hover:text-ember-500", "transition-colors"], ["routerLink", "/auth/login", 1, "hover:text-ember-500", "transition-colors"], ["routerLink", "/auth/register", 1, "hover:text-ember-500", "transition-colors"], ["routerLink", "/individual/profile/orders", 1, "hover:text-ember-500", "transition-colors"], ["routerLink", "/individual/profile/details", 1, "hover:text-ember-500", "transition-colors"], ["routerLink", "/corporate/dashboard", 1, "hover:text-ember-500", "transition-colors"], ["routerLink", "/corporate/catalog", 1, "hover:text-ember-500", "transition-colors"], ["routerLink", "/corporate/orders", 1, "hover:text-ember-500", "transition-colors"], ["routerLink", "/corporate/analytics", 1, "hover:text-ember-500", "transition-colors"], ["routerLink", "/admin/dashboard", 1, "hover:text-ember-500", "transition-colors"], ["routerLink", "/admin/users", 1, "hover:text-ember-500", "transition-colors"], ["routerLink", "/admin/stores", 1, "hover:text-ember-500", "transition-colors"], ["routerLink", "/admin/analytics", 1, "hover:text-ember-500", "transition-colors"], ["routerLink", "/ai-assistant", 1, "hover:text-ember-500", "transition-colors"]], template: function Footer_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "footer", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "a", 4)(5, "div", 5);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(6, "svg", 6);
      \u0275\u0275element(7, "path", 7);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(8, "span", 8);
      \u0275\u0275text(9, "ember");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(10, "p", 9);
      \u0275\u0275text(11, " Al\u0131\u015Fveri\u015Fi ak\u0131ll\u0131, h\u0131zl\u0131 ve keyifli hale getiren \xE7ok kirac\u0131l\u0131 e-ticaret platformu. ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(12, "div", 10);
      \u0275\u0275conditionalCreate(13, Footer_Conditional_13_Template, 16, 2);
      \u0275\u0275conditionalCreate(14, Footer_Conditional_14_Template, 16, 0, "div");
      \u0275\u0275conditionalCreate(15, Footer_Conditional_15_Template, 16, 0, "div");
      \u0275\u0275conditionalCreate(16, Footer_Conditional_16_Template, 7, 0, "div");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(17, "div", 11)(18, "p");
      \u0275\u0275text(19);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(20, "p", 12);
      \u0275\u0275text(21, "Powered by DataPulse");
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(13);
      \u0275\u0275conditional(ctx.auth.currentUserRole() === "INDIVIDUAL" || ctx.auth.currentUserRole() === "GUEST" ? 13 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.auth.currentUserRole() === "CORPORATE" ? 14 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.auth.currentUserRole() === "ADMIN" ? 15 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.auth.currentUserRole() !== "GUEST" ? 16 : -1);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1("\xA9 ", ctx.currentYear, " ember. T\xFCm haklar\u0131 sakl\u0131d\u0131r.");
    }
  }, dependencies: [CommonModule, RouterModule, RouterLink], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Footer, [{
    type: Component,
    args: [{ selector: "app-footer", standalone: true, imports: [CommonModule, RouterModule], template: `<footer class="bg-white border-t border-stone-200 mt-auto">
  <div class="container mx-auto px-4 max-w-7xl py-10">

    <div class="flex flex-col md:flex-row justify-between gap-10">

      <!-- \u2500\u2500 Marka \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
      <div class="space-y-3 max-w-xs">
        <a routerLink="/" class="flex items-center gap-2">
          <div class="w-7 h-7 rounded-lg bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center flex-shrink-0">
            <svg class="w-3.5 h-3.5 text-white" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12.017 2C12.017 2 6 8 6 13.5a6.017 6.017 0 0 0 12 0C18 8 12.017 2 12.017 2zm-.017 15a2 2 0 0 1-2-2c0-1.5 1-3 2-4 1 1 2 2.5 2 4a2 2 0 0 1-2 2z"/>
            </svg>
          </div>
          <span class="text-base font-semibold text-stone-900">ember</span>
        </a>
        <p class="text-sm text-stone-400 leading-relaxed">
          Al\u0131\u015Fveri\u015Fi ak\u0131ll\u0131, h\u0131zl\u0131 ve keyifli hale getiren \xE7ok kirac\u0131l\u0131 e-ticaret platformu.
        </p>
      </div>

      <!-- \u2500\u2500 Linkler \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
      <div class="flex flex-wrap gap-12">

        <!-- INDIVIDUAL / GUEST -->
        @if (auth.currentUserRole() === 'INDIVIDUAL' || auth.currentUserRole() === 'GUEST') {
          <div>
            <h4 class="text-xs font-semibold text-stone-500 uppercase tracking-wider mb-4">Ma\u011Faza</h4>
            <ul class="space-y-2.5 text-sm text-stone-600">
              <li><a routerLink="/catalog" class="hover:text-ember-500 transition-colors">T\xFCm \xDCr\xFCnler</a></li>
              <li><a routerLink="/cart" class="hover:text-ember-500 transition-colors">Sepetim</a></li>
            </ul>
          </div>

          <div>
            <h4 class="text-xs font-semibold text-stone-500 uppercase tracking-wider mb-4">Hesap</h4>
            <ul class="space-y-2.5 text-sm text-stone-600">
              @if (auth.currentUserRole() === 'GUEST') {
                <li><a routerLink="/auth/login" class="hover:text-ember-500 transition-colors">Giri\u015F Yap</a></li>
                <li><a routerLink="/auth/register" class="hover:text-ember-500 transition-colors">Kay\u0131t Ol</a></li>
              }
              @if (auth.currentUserRole() === 'INDIVIDUAL') {
                <li><a routerLink="/individual/profile/orders" class="hover:text-ember-500 transition-colors">Sipari\u015Flerim</a></li>
                <li><a routerLink="/individual/profile/details" class="hover:text-ember-500 transition-colors">Profilim</a></li>
              }
            </ul>
          </div>
        }

        <!-- CORPORATE -->
        @if (auth.currentUserRole() === 'CORPORATE') {
          <div>
            <h4 class="text-xs font-semibold text-stone-500 uppercase tracking-wider mb-4">Ma\u011Faza Paneli</h4>
            <ul class="space-y-2.5 text-sm text-stone-600">
              <li><a routerLink="/corporate/dashboard" class="hover:text-ember-500 transition-colors">Dashboard</a></li>
              <li><a routerLink="/corporate/catalog" class="hover:text-ember-500 transition-colors">\xDCr\xFCnlerim</a></li>
              <li><a routerLink="/corporate/orders" class="hover:text-ember-500 transition-colors">Sipari\u015Fler</a></li>
              <li><a routerLink="/corporate/analytics" class="hover:text-ember-500 transition-colors">Analitik</a></li>
            </ul>
          </div>
        }

        <!-- ADMIN -->
        @if (auth.currentUserRole() === 'ADMIN') {
          <div>
            <h4 class="text-xs font-semibold text-stone-500 uppercase tracking-wider mb-4">Admin Paneli</h4>
            <ul class="space-y-2.5 text-sm text-stone-600">
              <li><a routerLink="/admin/dashboard" class="hover:text-ember-500 transition-colors">Genel Bak\u0131\u015F</a></li>
              <li><a routerLink="/admin/users" class="hover:text-ember-500 transition-colors">Kullan\u0131c\u0131lar</a></li>
              <li><a routerLink="/admin/stores" class="hover:text-ember-500 transition-colors">Ma\u011Fazalar</a></li>
              <li><a routerLink="/admin/analytics" class="hover:text-ember-500 transition-colors">Analitik</a></li>
            </ul>
          </div>
        }

        <!-- AI Asistan \u2014 giri\u015F yapm\u0131\u015F herkes -->
        @if (auth.currentUserRole() !== 'GUEST') {
          <div>
            <h4 class="text-xs font-semibold text-stone-500 uppercase tracking-wider mb-4">Ara\xE7lar</h4>
            <ul class="space-y-2.5 text-sm text-stone-600">
              <li><a routerLink="/ai-assistant" class="hover:text-ember-500 transition-colors">AI Asistan</a></li>
            </ul>
          </div>
        }

      </div>
    </div>

    <!-- \u2500\u2500 Alt \xE7izgi \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
    <div class="border-t border-stone-100 mt-8 pt-6 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-stone-400">
      <p>&copy; {{ currentYear }} ember. T\xFCm haklar\u0131 sakl\u0131d\u0131r.</p>
      <p class="text-stone-300">Powered by DataPulse</p>
    </div>

  </div>
</footer>
` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Footer, { className: "Footer", filePath: "app/core/layout/footer/footer.ts", lineNumber: 12 });
})();

// src/app/features/ai-assistant/chatbot-widget.ts
function ChatbotWidget_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "button", 1);
    \u0275\u0275domListener("click", function ChatbotWidget_Conditional_0_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openChatbot());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275domElementStart(1, "svg", 2);
    \u0275\u0275domElement(2, "path", 3);
    \u0275\u0275domElementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275domElement(3, "span", 4);
    \u0275\u0275domElementEnd();
  }
}
var ChatbotWidget = class _ChatbotWidget {
  authService = inject(AuthService);
  router = inject(Router);
  isLoggedIn = signal(false, ...ngDevMode ? [{ debugName: "isLoggedIn" }] : (
    /* istanbul ignore next */
    []
  ));
  constructor() {
    const role = this.authService.currentUserRole();
    this.isLoggedIn.set(role !== "GUEST");
  }
  openChatbot() {
    this.router.navigate(["/ai-assistant"]);
  }
  static \u0275fac = function ChatbotWidget_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ChatbotWidget)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ChatbotWidget, selectors: [["app-chatbot-widget"]], decls: 1, vars: 1, consts: [["title", "AI Asistan", "id", "chatbot-widget-btn", 1, "chatbot-fab"], ["title", "AI Asistan", "id", "chatbot-widget-btn", 1, "chatbot-fab", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 24 24", "fill", "currentColor", 1, "fab-icon"], ["d", "M12 2a2 2 0 012 2c0 .74-.4 1.39-1 1.73V7h1a7 7 0 017 7h1a1 1 0 110 2h-1.07A7.001 7.001 0 0113 22h-2a7.001 7.001 0 01-6.93-6H3a1 1 0 110-2h1a7 7 0 017-7h1V5.73A2.002 2.002 0 0112 2zm-1 9a5 5 0 00-5 5 5 5 0 005 5h2a5 5 0 005-5 5 5 0 00-5-5h-2zm-1 3a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm4 0a1.5 1.5 0 110 3 1.5 1.5 0 010-3z"], [1, "fab-pulse"]], template: function ChatbotWidget_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275conditionalCreate(0, ChatbotWidget_Conditional_0_Template, 4, 0, "button", 0);
    }
    if (rf & 2) {
      \u0275\u0275conditional(ctx.isLoggedIn() ? 0 : -1);
    }
  }, styles: ["\n\n.chatbot-fab[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 24px;\n  right: 24px;\n  width: 56px;\n  height: 56px;\n  border-radius: 16px;\n  border: none;\n  background:\n    linear-gradient(\n      135deg,\n      #7c3aed,\n      #3b82f6);\n  color: white;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: 0 8px 32px rgba(124, 58, 237, 0.4);\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n  z-index: 1000;\n}\n.chatbot-fab[_ngcontent-%COMP%]:hover {\n  transform: scale(1.1) translateY(-2px);\n  box-shadow: 0 12px 40px rgba(124, 58, 237, 0.5);\n}\n.chatbot-fab[_ngcontent-%COMP%]:active {\n  transform: scale(0.95);\n}\n.fab-icon[_ngcontent-%COMP%] {\n  width: 26px;\n  height: 26px;\n  z-index: 1;\n}\n.fab-pulse[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  border-radius: 16px;\n  background:\n    linear-gradient(\n      135deg,\n      #7c3aed,\n      #3b82f6);\n  animation: _ngcontent-%COMP%_fabPulse 2s ease-in-out infinite;\n  z-index: 0;\n}\n@keyframes _ngcontent-%COMP%_fabPulse {\n  0% {\n    transform: scale(1);\n    opacity: 0.4;\n  }\n  50% {\n    transform: scale(1.15);\n    opacity: 0;\n  }\n  100% {\n    transform: scale(1);\n    opacity: 0;\n  }\n}\n@media (max-width: 768px) {\n  .chatbot-fab[_ngcontent-%COMP%] {\n    bottom: 16px;\n    right: 16px;\n    width: 50px;\n    height: 50px;\n  }\n}\n/*# sourceMappingURL=chatbot-widget.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ChatbotWidget, [{
    type: Component,
    args: [{ selector: "app-chatbot-widget", standalone: true, template: `
    @if (isLoggedIn()) {
      <button
        class="chatbot-fab"
        (click)="openChatbot()"
        title="AI Asistan"
        id="chatbot-widget-btn"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="fab-icon">
          <path d="M12 2a2 2 0 012 2c0 .74-.4 1.39-1 1.73V7h1a7 7 0 017 7h1a1 1 0 110 2h-1.07A7.001 7.001 0 0113 22h-2a7.001 7.001 0 01-6.93-6H3a1 1 0 110-2h1a7 7 0 017-7h1V5.73A2.002 2.002 0 0112 2zm-1 9a5 5 0 00-5 5 5 5 0 005 5h2a5 5 0 005-5 5 5 0 00-5-5h-2zm-1 3a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm4 0a1.5 1.5 0 110 3 1.5 1.5 0 010-3z"/>
        </svg>
        <span class="fab-pulse"></span>
      </button>
    }
  `, styles: ["/* angular:styles/component:scss;bf106245193b5178636eca8d742c59593a7412a9652392053044c012ace02228;/home/yusuf/e-commerce-2026/frontend/src/app/features/ai-assistant/chatbot-widget.ts */\n.chatbot-fab {\n  position: fixed;\n  bottom: 24px;\n  right: 24px;\n  width: 56px;\n  height: 56px;\n  border-radius: 16px;\n  border: none;\n  background:\n    linear-gradient(\n      135deg,\n      #7c3aed,\n      #3b82f6);\n  color: white;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: 0 8px 32px rgba(124, 58, 237, 0.4);\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n  z-index: 1000;\n}\n.chatbot-fab:hover {\n  transform: scale(1.1) translateY(-2px);\n  box-shadow: 0 12px 40px rgba(124, 58, 237, 0.5);\n}\n.chatbot-fab:active {\n  transform: scale(0.95);\n}\n.fab-icon {\n  width: 26px;\n  height: 26px;\n  z-index: 1;\n}\n.fab-pulse {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  border-radius: 16px;\n  background:\n    linear-gradient(\n      135deg,\n      #7c3aed,\n      #3b82f6);\n  animation: fabPulse 2s ease-in-out infinite;\n  z-index: 0;\n}\n@keyframes fabPulse {\n  0% {\n    transform: scale(1);\n    opacity: 0.4;\n  }\n  50% {\n    transform: scale(1.15);\n    opacity: 0;\n  }\n  100% {\n    transform: scale(1);\n    opacity: 0;\n  }\n}\n@media (max-width: 768px) {\n  .chatbot-fab {\n    bottom: 16px;\n    right: 16px;\n    width: 50px;\n    height: 50px;\n  }\n}\n/*# sourceMappingURL=chatbot-widget.css.map */\n"] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ChatbotWidget, { className: "ChatbotWidget", filePath: "app/features/ai-assistant/chatbot-widget.ts", lineNumber: 89 });
})();

// src/app/core/services/toast.service.ts
var ToastService = class _ToastService {
  toasts = signal([], ...ngDevMode ? [{ debugName: "toasts" }] : (
    /* istanbul ignore next */
    []
  ));
  nextId = 0;
  success(message, duration = 3500) {
    this.add("success", message, duration);
  }
  error(message, duration = 4500) {
    this.add("error", message, duration);
  }
  warning(message, duration = 4e3) {
    this.add("warning", message, duration);
  }
  info(message, duration = 3500) {
    this.add("info", message, duration);
  }
  dismiss(id) {
    this.toasts.update((list) => list.filter((t) => t.id !== id));
  }
  add(type, message, duration) {
    const id = ++this.nextId;
    this.toasts.update((list) => [...list, { id, type, message }]);
    setTimeout(() => this.dismiss(id), duration);
  }
  static \u0275fac = function ToastService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ToastService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ToastService, factory: _ToastService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ToastService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

// src/app/shared/components/ember-toast/ember-toast.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function EmberToastComponent_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 1);
    \u0275\u0275element(1, "div", 2);
    \u0275\u0275elementStart(2, "p", 3);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 4);
    \u0275\u0275listener("click", function EmberToastComponent_For_2_Template_button_click_4_listener() {
      const toast_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.toastService.dismiss(toast_r2.id));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(5, "svg", 5);
    \u0275\u0275element(6, "path", 6);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const toast_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("ngClass", ctx_r2.toastClass(toast_r2));
    \u0275\u0275advance();
    \u0275\u0275property("innerHTML", ctx_r2.icon(toast_r2.type), \u0275\u0275sanitizeHtml);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(toast_r2.message);
  }
}
var EmberToastComponent = class _EmberToastComponent {
  toastService = inject(ToastService);
  toastClass(toast) {
    const map = {
      success: "bg-white border-lime-200 text-lime-800",
      error: "bg-white border-red-200 text-red-800",
      warning: "bg-white border-amber-200 text-amber-800",
      info: "bg-white border-stone-200 text-stone-800"
    };
    return map[toast.type];
  }
  icon(type) {
    const icons = {
      success: `<svg fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" class="text-lime-600"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/></svg>`,
      error: `<svg fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" class="text-red-600"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/></svg>`,
      warning: `<svg fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" class="text-amber-600"><path stroke-linecap="round" stroke-linejoin="round" d="M12 9v4m0 4h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/></svg>`,
      info: `<svg fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" class="text-stone-500"><path stroke-linecap="round" stroke-linejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>`
    };
    return icons[type] ?? icons["info"];
  }
  static \u0275fac = function EmberToastComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _EmberToastComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EmberToastComponent, selectors: [["ember-toast"]], decls: 3, vars: 0, consts: [[1, "fixed", "bottom-5", "right-5", "z-[9999]", "flex", "flex-col", "gap-2", "w-80", "pointer-events-none"], [1, "pointer-events-auto", "flex", "items-start", "gap-3", "rounded-xl", "border", "px-4", "py-3", "shadow-lg", 3, "ngClass"], [1, "flex-shrink-0", "w-5", "h-5", "mt-0.5", 3, "innerHTML"], [1, "text-sm", "font-medium", "flex-1"], [1, "flex-shrink-0", "opacity-50", "hover:opacity-100", "transition-opacity", 3, "click"], ["fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", "stroke-width", "2", 1, "w-4", "h-4"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M6 18L18 6M6 6l12 12"]], template: function EmberToastComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275repeaterCreate(1, EmberToastComponent_For_2_Template, 7, 3, "div", 1, _forTrack0);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275repeater(ctx.toastService.toasts());
    }
  }, dependencies: [CommonModule, NgClass], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EmberToastComponent, [{
    type: Component,
    args: [{
      selector: "ember-toast",
      standalone: true,
      imports: [CommonModule],
      template: `
    <div class="fixed bottom-5 right-5 z-[9999] flex flex-col gap-2 w-80 pointer-events-none">
      @for (toast of toastService.toasts(); track toast.id) {
        <div
          [ngClass]="toastClass(toast)"
          class="pointer-events-auto flex items-start gap-3 rounded-xl border px-4 py-3 shadow-lg"
        >
          <div [innerHTML]="icon(toast.type)" class="flex-shrink-0 w-5 h-5 mt-0.5"></div>
          <p class="text-sm font-medium flex-1">{{ toast.message }}</p>
          <button (click)="toastService.dismiss(toast.id)" class="flex-shrink-0 opacity-50 hover:opacity-100 transition-opacity">
            <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/>
            </svg>
          </button>
        </div>
      }
    </div>
  `
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EmberToastComponent, { className: "EmberToastComponent", filePath: "app/shared/components/ember-toast/ember-toast.component.ts", lineNumber: 28 });
})();

// src/app/app.ts
function App_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-navbar");
  }
}
function App_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-footer")(1, "app-chatbot-widget");
  }
}
var App = class _App {
  title = signal("datapulse-frontend", ...ngDevMode ? [{ debugName: "title" }] : (
    /* istanbul ignore next */
    []
  ));
  isAuthRoute = signal(false, ...ngDevMode ? [{ debugName: "isAuthRoute" }] : (
    /* istanbul ignore next */
    []
  ));
  isAiRoute = signal(false, ...ngDevMode ? [{ debugName: "isAiRoute" }] : (
    /* istanbul ignore next */
    []
  ));
  router = inject(Router);
  constructor() {
    this.router.events.pipe(filter((event) => event instanceof NavigationEnd)).subscribe((event) => {
      const url = event.urlAfterRedirects || event.url;
      this.isAuthRoute.set(url.includes("/auth"));
      this.isAiRoute.set(url.includes("/ai-assistant"));
    });
  }
  static \u0275fac = function App_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _App)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _App, selectors: [["app-root"]], decls: 6, vars: 2, consts: [[1, "min-h-screen", "flex", "flex-col", "bg-ember-50"], [1, "flex-grow"]], template: function App_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275conditionalCreate(1, App_Conditional_1_Template, 1, 0, "app-navbar");
      \u0275\u0275elementStart(2, "main", 1);
      \u0275\u0275element(3, "router-outlet");
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(4, App_Conditional_4_Template, 2, 0);
      \u0275\u0275element(5, "ember-toast");
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275conditional(!ctx.isAuthRoute() ? 1 : -1);
      \u0275\u0275advance(3);
      \u0275\u0275conditional(!ctx.isAuthRoute() && !ctx.isAiRoute() ? 4 : -1);
    }
  }, dependencies: [RouterOutlet, Navbar, Footer, ChatbotWidget, EmberToastComponent], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(App, [{
    type: Component,
    args: [{ selector: "app-root", imports: [RouterOutlet, Navbar, Footer, ChatbotWidget, EmberToastComponent], template: '<div class="min-h-screen flex flex-col bg-ember-50">\n  \n  @if (!isAuthRoute()) {\n    <app-navbar></app-navbar>\n  }\n\n  <main class="flex-grow">\n    <router-outlet></router-outlet>\n  </main>\n\n  @if (!isAuthRoute() && !isAiRoute()) {\n    <app-footer></app-footer>\n    <app-chatbot-widget></app-chatbot-widget>\n  }\n\n\n  <ember-toast></ember-toast>\n</div>\n' }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(App, { className: "App", filePath: "app/app.ts", lineNumber: 15 });
})();

// src/main.ts
bootstrapApplication(App, appConfig).catch((err) => console.error(err));
//# sourceMappingURL=main.js.map
