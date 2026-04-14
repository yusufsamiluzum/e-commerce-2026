import {
  notCorporateGuard
} from "./chunk-H6XBDJ4F.js";
import {
  AuthService
} from "./chunk-LK4C7XHL.js";
import {
  CartService
} from "./chunk-VP2T37FR.js";
import {
  NavigationEnd,
  Router,
  RouterLink,
  RouterModule,
  RouterOutlet,
  bootstrapApplication,
  provideClientHydration,
  provideRouter,
  withEventReplay,
  withInMemoryScrolling,
  withViewTransitions
} from "./chunk-XXXBABRB.js";
import {
  CommonModule,
  Component,
  __spreadValues,
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
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-7LZR64HY.js";

// src/app/app.routes.ts
var routes = [
  { path: "", redirectTo: "/catalog", pathMatch: "full" },
  __spreadValues({ path: "catalog", loadChildren: () => import("./chunk-GTR4Y342.js").then((m) => m.CatalogModule), canActivate: [notCorporateGuard] }, false ? { \u0275entryName: "src/app/features/catalog/catalog-module.ts" } : {}),
  __spreadValues({ path: "cart", loadChildren: () => import("./chunk-Q323QED3.js").then((m) => m.CartModule), canActivate: [notCorporateGuard] }, false ? { \u0275entryName: "src/app/features/cart/cart-module.ts" } : {}),
  __spreadValues({ path: "checkout", loadChildren: () => import("./chunk-T6RFDLZI.js").then((m) => m.CheckoutModule), canActivate: [notCorporateGuard] }, false ? { \u0275entryName: "src/app/features/checkout/checkout-module.ts" } : {}),
  __spreadValues({ path: "individual", loadChildren: () => import("./chunk-S4IDDNOO.js").then((m) => m.IndividualModule), canActivate: [notCorporateGuard] }, false ? { \u0275entryName: "src/app/features/individual/individual-module.ts" } : {}),
  __spreadValues({ path: "auth", loadChildren: () => import("./chunk-JORFZFJP.js").then((m) => m.AuthModule) }, false ? { \u0275entryName: "src/app/features/auth/auth-module.ts" } : {}),
  __spreadValues({ path: "admin", loadChildren: () => import("./chunk-FBJGXVMO.js").then((m) => m.AdminModule) }, false ? { \u0275entryName: "src/app/features/admin/admin-module.ts" } : {}),
  __spreadValues({ path: "corporate", loadChildren: () => import("./chunk-OFL4KLV5.js").then((m) => m.CorporateModule) }, false ? { \u0275entryName: "src/app/features/corporate/corporate-module.ts" } : {}),
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
function Navbar_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18)(1, "a", 30);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 31);
    \u0275\u0275element(3, "path", 32);
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, " Sign In ");
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(5, "a", 33);
    \u0275\u0275text(6, " Register ");
    \u0275\u0275elementEnd()();
  }
}
function Navbar_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 19)(1, "div", 34);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 35);
    \u0275\u0275element(3, "path", 36);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(4, "span", 37);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 38)(7, "p", 39);
    \u0275\u0275text(8, "Your Cart");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "p", 40);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.cartService.totalItems());
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("$", ctx_r0.cartService.totalPrice().toFixed(2));
  }
}
function Navbar_Conditional_27_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 41);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 31);
    \u0275\u0275element(2, "path", 48);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Sipari\u015Flerim ");
    \u0275\u0275elementEnd();
  }
}
function Navbar_Conditional_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 20);
    \u0275\u0275conditionalCreate(1, Navbar_Conditional_27_Conditional_1_Template, 4, 0, "a", 41);
    \u0275\u0275elementStart(2, "a", 42)(3, "div", 43);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(4, "svg", 31);
    \u0275\u0275element(5, "path", 44);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(6, "div", 38)(7, "p", 39);
    \u0275\u0275text(8, "Ho\u015F geldin");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "p", 45);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(11, "button", 46);
    \u0275\u0275listener("click", function Navbar_Conditional_27_Template_button_click_11_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.logout());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(12, "svg", 31);
    \u0275\u0275element(13, "path", 47);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.auth.currentUserRole() === "INDIVIDUAL" ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", ctx_r0.getProfileLink());
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r0.auth.currentUserName() || "Hesab\u0131m");
  }
}
function Navbar_Conditional_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 28);
    \u0275\u0275text(1, "Home");
    \u0275\u0275elementEnd();
  }
}
function Navbar_Conditional_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 49);
    \u0275\u0275text(1, "Shop All");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "a", 50);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(3, "svg", 51);
    \u0275\u0275element(4, "path", 52);
    \u0275\u0275elementEnd();
    \u0275\u0275text(5, " Deals ");
    \u0275\u0275elementEnd();
  }
}
function Navbar_Conditional_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 29);
    \u0275\u0275text(1, "Purchase History");
    \u0275\u0275elementEnd();
  }
}
function Navbar_Conditional_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 53);
    \u0275\u0275text(1, "Dashboard");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "a", 54);
    \u0275\u0275text(3, "Products");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "a", 55);
    \u0275\u0275text(5, "Inventory");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "a", 56);
    \u0275\u0275text(7, "Store Orders");
    \u0275\u0275elementEnd();
  }
}
function Navbar_Conditional_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 57);
    \u0275\u0275text(1, "Overview");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "a", 58);
    \u0275\u0275text(3, "Manage Users");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "a", 59);
    \u0275\u0275text(5, "Stores");
    \u0275\u0275elementEnd();
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
      return "/admin/profile/details";
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
  logout() {
    this.auth.logout();
    this.router.navigate(["/"]);
  }
  static \u0275fac = function Navbar_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Navbar)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Navbar, selectors: [["app-navbar"]], decls: 41, vars: 9, consts: [[1, "bg-gray-900", "sticky", "top-0", "z-50", "shadow-md", "border-b", "border-gray-800"], [1, "bg-indigo-950", "text-gray-300", "text-xs", "py-1.5", "px-4", "text-center", "hidden", "sm:flex", "justify-between", "items-center", "border-b", "border-gray-800"], [1, "flex-1", "text-center", "font-medium", "tracking-wide"], [1, "flex", "gap-4", "text-indigo-300"], ["href", "#", 1, "hover:text-white", "transition-colors"], [1, "container", "mx-auto", "px-4", "py-3", "lg:py-4"], [1, "flex", "items-center", "justify-between", "gap-4", "lg:gap-8"], [1, "text-2xl", "lg:text-3xl", "font-black", "text-white", "tracking-tight", "flex", "items-center", "gap-2", "flex-shrink-0", 3, "routerLink"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", "stroke-width", "2", 1, "h-8", "w-8", "lg:h-9", "lg:w-9", "text-blue-500"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M13 10V3L4 14h7v7l9-11h-7z"], [1, "text-blue-500"], [1, "hidden", "md:flex", "flex-1", "max-w-2xl", "relative", "group"], [1, "absolute", "inset-y-0", "left-0", "pl-4", "flex", "items-center", "pointer-events-none"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", 1, "h-5", "w-5", "text-gray-400", "group-focus-within:text-blue-500", "transition-colors"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"], ["type", "text", "placeholder", "Search for products, categories, brands...", 1, "w-full", "bg-gray-800", "border", "border-gray-700", "rounded-lg", "py-2.5", "pl-11", "pr-24", "text-white", "focus:bg-gray-800", "focus:border-blue-500", "focus:ring-4", "focus:ring-blue-500/20", "outline-none", "transition-all", "text-sm", "placeholder-gray-400"], [1, "absolute", "inset-y-1.5", "right-1.5", "bg-blue-600", "hover:bg-blue-700", "text-white", "px-4", "text-sm", "font-medium", "rounded-md", "transition-colors", "shadow-sm"], [1, "flex", "items-center", "gap-5", "lg:gap-7", "flex-shrink-0"], [1, "hidden", "sm:flex", "items-center", "gap-4"], ["routerLink", "/cart", 1, "relative", "group", "p-1", "flex", "items-center", "gap-2"], [1, "flex", "items-center", "gap-4", "relative", "group"], [1, "mt-4", "flex", "md:hidden", "relative", "group"], [1, "absolute", "inset-y-0", "left-0", "pl-3", "flex", "items-center", "pointer-events-none"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", 1, "h-5", "w-5", "text-gray-400"], ["type", "text", "placeholder", "Search...", 1, "w-full", "bg-gray-800", "border", "border-gray-700", "rounded-lg", "py-2.5", "pl-10", "pr-4", "text-white", "focus:bg-gray-800", "focus:border-blue-500", "focus:ring-2", "focus:ring-blue-500/20", "outline-none", "transition-all", "text-sm"], [1, "border-t", "border-gray-800", "hidden", "md:block", "w-full"], [1, "container", "mx-auto", "px-4"], [1, "flex", "items-center", "space-x-8", "font-medium", "text-sm", "text-gray-300", "h-12"], ["routerLink", "/", 1, "hover:text-blue-400", "transition-colors", "h-full", "flex", "items-center", "border-b-2", "border-transparent", "hover:border-blue-500"], ["routerLink", "/individual/orders", 1, "hover:text-blue-400", "transition-colors", "h-full", "flex", "items-center", "border-b-2", "border-transparent", "hover:border-blue-500"], ["routerLink", "/auth/login", 1, "text-sm", "font-semibold", "text-gray-300", "hover:text-blue-400", "transition-colors", "flex", "items-center", "gap-1.5"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", 1, "h-5", "w-5"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "1.5", "d", "M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"], ["routerLink", "/auth/register", 1, "text-sm", "font-semibold", "bg-gray-800", "border", "border-gray-700", "text-white", "px-4", "py-2", "rounded-lg", "hover:bg-gray-700", "transition-colors", "shadow-sm"], [1, "relative"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", 1, "h-7", "w-7", "text-gray-300", "group-hover:text-blue-400", "transition-colors"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "1.5", "d", "M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"], [1, "absolute", "-top-1.5", "-right-1.5", "bg-red-500", "text-white", "text-[10px]", "font-bold", "h-[18px]", "w-[18px]", "flex", "items-center", "justify-center", "rounded-full", "shadow-sm", "ring-2", "ring-gray-900", "border-none"], [1, "hidden", "lg:block", "text-left"], [1, "text-[10px]", "font-semibold", "text-gray-400", "uppercase", "tracking-wide", "mb-0.5"], [1, "text-sm", "font-bold", "text-white", "leading-none"], ["routerLink", "/individual/profile/orders", 1, "text-sm", "font-semibold", "text-gray-300", "hover:text-blue-400", "transition-colors", "flex", "items-center", "gap-1.5", "hidden", "lg:flex"], [1, "flex", "items-center", "gap-2.5", "cursor-pointer", 3, "routerLink"], [1, "h-10", "w-10", "bg-gray-800", "text-blue-400", "rounded-full", "flex", "items-center", "justify-center", "border", "border-gray-700", "shadow-sm", "group-hover:bg-blue-600", "group-hover:text-white", "group-hover:border-blue-500", "transition-all"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"], [1, "text-sm", "font-semibold", "text-white", "group-hover:text-blue-400", "leading-none"], ["title", "Logout", 1, "p-2", "text-gray-400", "hover:text-red-500", "hover:bg-gray-800", "rounded-full", "transition-all", 3, "click"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"], ["routerLink", "/catalog", 1, "hover:text-blue-400", "transition-colors", "h-full", "flex", "items-center", "border-b-2", "border-transparent", "hover:border-blue-500"], ["routerLink", "/deals", 1, "hover:text-blue-400", "transition-colors", "h-full", "flex", "items-center", "border-b-2", "border-transparent", "hover:border-blue-500", "text-red-500", "font-semibold", "gap-1"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", 1, "h-4", "w-4"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M13 10V3L4 14h7v7l9-11h-7z"], ["routerLink", "/corporate/dashboard", 1, "hover:text-blue-400", "transition-colors", "h-full", "flex", "items-center", "border-b-2", "border-transparent", "hover:border-blue-500"], ["routerLink", "/corporate/catalog", 1, "hover:text-blue-400", "transition-colors", "h-full", "flex", "items-center", "border-b-2", "border-transparent", "hover:border-blue-500"], ["routerLink", "/corporate/inventory", 1, "hover:text-blue-400", "transition-colors", "h-full", "flex", "items-center", "border-b-2", "border-transparent", "hover:border-blue-500"], ["routerLink", "/corporate/orders", 1, "hover:text-blue-400", "transition-colors", "h-full", "flex", "items-center", "border-b-2", "border-transparent", "hover:border-blue-500"], ["routerLink", "/admin/dashboard", 1, "hover:text-blue-400", "transition-colors", "h-full", "flex", "items-center", "border-b-2", "border-transparent", "hover:border-blue-500"], ["routerLink", "/admin/users", 1, "hover:text-blue-400", "transition-colors", "h-full", "flex", "items-center", "border-b-2", "border-transparent", "hover:border-blue-500"], ["routerLink", "/admin/stores", 1, "hover:text-blue-400", "transition-colors", "h-full", "flex", "items-center", "border-b-2", "border-transparent", "hover:border-blue-500"]], template: function Navbar_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "header", 0)(1, "div", 1)(2, "div", 2);
      \u0275\u0275text(3, " \u{1F680} Free shipping on all orders over $50! ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "div", 3)(5, "a", 4);
      \u0275\u0275text(6, "Help Center");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "a", 4);
      \u0275\u0275text(8, "Track Order");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(9, "div", 5)(10, "div", 6)(11, "a", 7);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(12, "svg", 8);
      \u0275\u0275element(13, "path", 9);
      \u0275\u0275elementEnd();
      \u0275\u0275text(14, " DataPulse");
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(15, "span", 10);
      \u0275\u0275text(16, ".");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(17, "div", 11)(18, "div", 12);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(19, "svg", 13);
      \u0275\u0275element(20, "path", 14);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275element(21, "input", 15);
      \u0275\u0275elementStart(22, "button", 16);
      \u0275\u0275text(23, " Search ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(24, "div", 17);
      \u0275\u0275conditionalCreate(25, Navbar_Conditional_25_Template, 7, 0, "div", 18);
      \u0275\u0275conditionalCreate(26, Navbar_Conditional_26_Template, 11, 2, "a", 19);
      \u0275\u0275conditionalCreate(27, Navbar_Conditional_27_Template, 14, 3, "div", 20);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(28, "div", 21)(29, "div", 22);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(30, "svg", 23);
      \u0275\u0275element(31, "path", 14);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275element(32, "input", 24);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(33, "div", 25)(34, "div", 26)(35, "nav", 27);
      \u0275\u0275conditionalCreate(36, Navbar_Conditional_36_Template, 2, 0, "a", 28);
      \u0275\u0275conditionalCreate(37, Navbar_Conditional_37_Template, 6, 0);
      \u0275\u0275conditionalCreate(38, Navbar_Conditional_38_Template, 2, 0, "a", 29);
      \u0275\u0275conditionalCreate(39, Navbar_Conditional_39_Template, 8, 0);
      \u0275\u0275conditionalCreate(40, Navbar_Conditional_40_Template, 6, 0);
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(11);
      \u0275\u0275property("routerLink", ctx.getHomeLink());
      \u0275\u0275advance(14);
      \u0275\u0275conditional(ctx.auth.currentUserRole() === "GUEST" ? 25 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.auth.currentUserRole() === "INDIVIDUAL" || ctx.auth.currentUserRole() === "GUEST" ? 26 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.auth.currentUserRole() !== "GUEST" ? 27 : -1);
      \u0275\u0275advance(9);
      \u0275\u0275conditional(ctx.auth.currentUserRole() !== "CORPORATE" && ctx.auth.currentUserRole() !== "ADMIN" ? 36 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.auth.currentUserRole() === "INDIVIDUAL" || ctx.auth.currentUserRole() === "GUEST" ? 37 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.auth.currentUserRole() === "INDIVIDUAL" ? 38 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.auth.currentUserRole() === "CORPORATE" ? 39 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.auth.currentUserRole() === "ADMIN" ? 40 : -1);
    }
  }, dependencies: [CommonModule, RouterModule, RouterLink], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Navbar, [{
    type: Component,
    args: [{ selector: "app-navbar", standalone: true, imports: [CommonModule, RouterModule], template: `<header class="bg-gray-900 sticky top-0 z-50 shadow-md border-b border-gray-800">
  <!-- Top announcement bar -->
  <div class="bg-indigo-950 text-gray-300 text-xs py-1.5 px-4 text-center hidden sm:flex justify-between items-center border-b border-gray-800">
    <div class="flex-1 text-center font-medium tracking-wide">
      \u{1F680} Free shipping on all orders over $50! 
    </div>
    <div class="flex gap-4 text-indigo-300">
      <a href="#" class="hover:text-white transition-colors">Help Center</a>
      <a href="#" class="hover:text-white transition-colors">Track Order</a>
    </div>
  </div>

  <!-- Main Navbar -->
  <div class="container mx-auto px-4 py-3 lg:py-4">
    <div class="flex items-center justify-between gap-4 lg:gap-8">
      
      <!-- Logo -->
      <a [routerLink]="getHomeLink()" class="text-2xl lg:text-3xl font-black text-white tracking-tight flex items-center gap-2 flex-shrink-0">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 lg:h-9 lg:w-9 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
        DataPulse<span class="text-blue-500">.</span>
      </a>

      <!-- Search Bar (Desktop) -->
      <div class="hidden md:flex flex-1 max-w-2xl relative group">
        <div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400 group-focus-within:text-blue-500 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
        <input type="text" placeholder="Search for products, categories, brands..." class="w-full bg-gray-800 border border-gray-700 rounded-lg py-2.5 pl-11 pr-24 text-white focus:bg-gray-800 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 outline-none transition-all text-sm placeholder-gray-400">
        <button class="absolute inset-y-1.5 right-1.5 bg-blue-600 hover:bg-blue-700 text-white px-4 text-sm font-medium rounded-md transition-colors shadow-sm">
          Search
        </button>
      </div>

      <!-- Right Actions -->
      <div class="flex items-center gap-5 lg:gap-7 flex-shrink-0">
        
        <!-- Guest Links -->
        @if (auth.currentUserRole() === 'GUEST') {
          <div class="hidden sm:flex items-center gap-4">
            <a routerLink="/auth/login" class="text-sm font-semibold text-gray-300 hover:text-blue-400 transition-colors flex items-center gap-1.5">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
              </svg>
              Sign In
            </a>
            <a routerLink="/auth/register" class="text-sm font-semibold bg-gray-800 border border-gray-700 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors shadow-sm">
              Register
            </a>
          </div>
        }

        <!-- Cart icon -->
        @if (auth.currentUserRole() === 'INDIVIDUAL' || auth.currentUserRole() === 'GUEST') {
        <a routerLink="/cart" class="relative group p-1 flex items-center gap-2">
          <div class="relative">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 text-gray-300 group-hover:text-blue-400 transition-colors"
              fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
            <span
              class="absolute -top-1.5 -right-1.5 bg-red-500 text-white text-[10px] font-bold h-[18px] w-[18px] flex items-center justify-center rounded-full shadow-sm ring-2 ring-gray-900 border-none">{{ cartService.totalItems() }}</span>
          </div>
          <div class="hidden lg:block text-left">
            <p class="text-[10px] font-semibold text-gray-400 uppercase tracking-wide mb-0.5">Your Cart</p>
            <p class="text-sm font-bold text-white leading-none">\${{ cartService.totalPrice().toFixed(2) }}</p>
          </div>
        </a>
        }

        <!-- Profile/Logout for logged in -->
        @if (auth.currentUserRole() !== 'GUEST') {
          <div class="flex items-center gap-4 relative group">
            
            @if (auth.currentUserRole() === 'INDIVIDUAL') {
            <a routerLink="/individual/profile/orders" class="text-sm font-semibold text-gray-300 hover:text-blue-400 transition-colors flex items-center gap-1.5 hidden lg:flex">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                 <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
              Sipari\u015Flerim
            </a>
            }

            <a [routerLink]="getProfileLink()" 
               class="flex items-center gap-2.5 cursor-pointer">
              <div class="h-10 w-10 bg-gray-800 text-blue-400 rounded-full flex items-center justify-center border border-gray-700 shadow-sm group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-500 transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <div class="hidden lg:block text-left">
                <p class="text-[10px] font-semibold text-gray-400 uppercase tracking-wide mb-0.5">Ho\u015F geldin</p>
                <p class="text-sm font-semibold text-white group-hover:text-blue-400 leading-none">{{ auth.currentUserName() || 'Hesab\u0131m' }}</p>
              </div>
            </a>
            <button (click)="logout()" title="Logout" class="p-2 text-gray-400 hover:text-red-500 hover:bg-gray-800 rounded-full transition-all">
               <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                 <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
               </svg>
            </button>
          </div>
        }
      </div>
    </div>

    <!-- Mobile Search Bar (Visible only on small screens) -->
    <div class="mt-4 flex md:hidden relative group">
      <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </div>
      <input type="text" placeholder="Search..." class="w-full bg-gray-800 border border-gray-700 rounded-lg py-2.5 pl-10 pr-4 text-white focus:bg-gray-800 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all text-sm">
    </div>
  </div>

  <!-- Bottom Navigation Category Bar -->
  <div class="border-t border-gray-800 hidden md:block w-full">
    <div class="container mx-auto px-4">
      <nav class="flex items-center space-x-8 font-medium text-sm text-gray-300 h-12">
        @if (auth.currentUserRole() !== 'CORPORATE' && auth.currentUserRole() !== 'ADMIN') {
          <a routerLink="/" class="hover:text-blue-400 transition-colors h-full flex items-center border-b-2 border-transparent hover:border-blue-500">Home</a>
        }
        
        @if (auth.currentUserRole() === 'INDIVIDUAL' || auth.currentUserRole() === 'GUEST') {
          <a routerLink="/catalog" class="hover:text-blue-400 transition-colors h-full flex items-center border-b-2 border-transparent hover:border-blue-500">Shop All</a>
          <a routerLink="/deals" class="hover:text-blue-400 transition-colors h-full flex items-center border-b-2 border-transparent hover:border-blue-500 text-red-500 font-semibold gap-1">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            Deals
          </a>
        }
        
        @if (auth.currentUserRole() === 'INDIVIDUAL') {
          <a routerLink="/individual/orders" class="hover:text-blue-400 transition-colors h-full flex items-center border-b-2 border-transparent hover:border-blue-500">Purchase History</a>
        }

        @if (auth.currentUserRole() === 'CORPORATE') {
          <a routerLink="/corporate/dashboard" class="hover:text-blue-400 transition-colors h-full flex items-center border-b-2 border-transparent hover:border-blue-500">Dashboard</a>
          <a routerLink="/corporate/catalog" class="hover:text-blue-400 transition-colors h-full flex items-center border-b-2 border-transparent hover:border-blue-500">Products</a>
          <a routerLink="/corporate/inventory" class="hover:text-blue-400 transition-colors h-full flex items-center border-b-2 border-transparent hover:border-blue-500">Inventory</a>
          <a routerLink="/corporate/orders" class="hover:text-blue-400 transition-colors h-full flex items-center border-b-2 border-transparent hover:border-blue-500">Store Orders</a>
        }

        @if (auth.currentUserRole() === 'ADMIN') {
          <a routerLink="/admin/dashboard" class="hover:text-blue-400 transition-colors h-full flex items-center border-b-2 border-transparent hover:border-blue-500">Overview</a>
          <a routerLink="/admin/users" class="hover:text-blue-400 transition-colors h-full flex items-center border-b-2 border-transparent hover:border-blue-500">Manage Users</a>
          <a routerLink="/admin/stores" class="hover:text-blue-400 transition-colors h-full flex items-center border-b-2 border-transparent hover:border-blue-500">Stores</a>
        }
      </nav>
    </div>
  </div>
</header>
` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Navbar, { className: "Navbar", filePath: "app/core/layout/navbar/navbar.ts", lineNumber: 13 });
})();

// src/app/core/layout/footer/footer.ts
function Footer_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li")(1, "a", 30);
    \u0275\u0275text(2, "Shop Catalog");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(3, "li")(4, "a", 31);
    \u0275\u0275text(5, "Categories");
    \u0275\u0275elementEnd()();
  }
}
function Footer_Conditional_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li")(1, "a", 32);
    \u0275\u0275text(2, "Sell with Us ");
    \u0275\u0275elementStart(3, "span", 33);
    \u0275\u0275text(4, "NEW");
    \u0275\u0275elementEnd()()();
  }
}
function Footer_Conditional_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li")(1, "a", 34);
    \u0275\u0275text(2, "Dashboard");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(3, "li")(4, "a", 35);
    \u0275\u0275text(5, "Products");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "li")(7, "a", 36);
    \u0275\u0275text(8, "Store Orders");
    \u0275\u0275elementEnd()();
  }
}
var Footer = class _Footer {
  auth = inject(AuthService);
  currentYear = (/* @__PURE__ */ new Date()).getFullYear();
  // Automatically updates the copyright year
  static \u0275fac = function Footer_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Footer)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Footer, selectors: [["app-footer"]], decls: 66, vars: 4, consts: [[1, "bg-gray-900", "text-gray-300", "pt-16", "pb-8", "border-t", "border-gray-800", "mt-auto"], [1, "container", "mx-auto", "px-4", "max-w-7xl"], [1, "grid", "grid-cols-1", "md:grid-cols-2", "lg:grid-cols-4", "gap-12", "mb-12"], [1, "space-y-4"], ["routerLink", "/", 1, "text-2xl", "font-bold", "text-white", "flex", "items-center", "gap-2", "mb-4"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", 1, "h-8", "w-8", "text-blue-500"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M13 10V3L4 14h7v7l9-11h-7z"], [1, "text-sm", "text-gray-400", "leading-relaxed"], [1, "flex", "gap-4", "pt-2"], ["href", "#", 1, "text-gray-400", "hover:text-white", "transition-colors"], [1, "sr-only"], ["fill", "currentColor", "viewBox", "0 0 24 24", 1, "h-6", "w-6"], ["d", "M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"], ["d", "M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"], [1, "text-white", "font-semibold", "mb-6", "uppercase", "tracking-wider", "text-sm"], [1, "space-y-3", "text-sm"], ["routerLink", "/about", 1, "hover:text-blue-500", "transition-colors"], ["routerLink", "/help", 1, "hover:text-blue-500", "transition-colors"], ["routerLink", "/contact", 1, "hover:text-blue-500", "transition-colors"], ["routerLink", "/shipping", 1, "hover:text-blue-500", "transition-colors"], ["routerLink", "/returns", 1, "hover:text-blue-500", "transition-colors"], [1, "text-sm", "text-gray-400", "mb-4"], [1, "flex", "flex-col", "gap-2", 3, "submit"], ["type", "email", "placeholder", "Enter your email", 1, "w-full", "bg-gray-800", "border", "border-gray-700", "rounded-lg", "px-4", "py-2.5", "text-sm", "text-white", "focus:outline-none", "focus:border-blue-500", "focus:ring-1", "focus:ring-blue-500", "transition-colors"], ["type", "submit", 1, "w-full", "bg-blue-600", "hover:bg-blue-700", "text-white", "font-medium", "py-2.5", "rounded-lg", "transition-colors", "text-sm"], [1, "border-t", "border-gray-800", "pt-8", "flex", "flex-col", "md:flex-row", "justify-between", "items-center", "gap-4", "text-xs", "text-gray-500"], [1, "flex", "gap-6"], ["routerLink", "/privacy", 1, "hover:text-white", "transition-colors"], ["routerLink", "/terms", 1, "hover:text-white", "transition-colors"], ["routerLink", "/cookies", 1, "hover:text-white", "transition-colors"], ["routerLink", "/catalog", 1, "hover:text-blue-500", "transition-colors"], ["routerLink", "/categories", 1, "hover:text-blue-500", "transition-colors"], ["routerLink", "/auth/register", 1, "hover:text-blue-500", "transition-colors", "flex", "items-center", "gap-2"], [1, "bg-blue-600", "text-white", "text-[10px]", "px-1.5", "py-0.5", "rounded"], ["routerLink", "/corporate/dashboard", 1, "hover:text-blue-500", "transition-colors"], ["routerLink", "/corporate/catalog", 1, "hover:text-blue-500", "transition-colors"], ["routerLink", "/corporate/orders", 1, "hover:text-blue-500", "transition-colors"]], template: function Footer_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "footer", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "a", 4);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(5, "svg", 5);
      \u0275\u0275element(6, "path", 6);
      \u0275\u0275elementEnd();
      \u0275\u0275text(7, " DataPulse ");
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(8, "p", 7);
      \u0275\u0275text(9, " Empowering your digital lifestyle with premium electronics and accessories. Discover reliability, performance, and innovation all in one place. ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "div", 8)(11, "a", 9)(12, "span", 10);
      \u0275\u0275text(13, "Twitter");
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(14, "svg", 11);
      \u0275\u0275element(15, "path", 12);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(16, "a", 9)(17, "span", 10);
      \u0275\u0275text(18, "LinkedIn");
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(19, "svg", 11);
      \u0275\u0275element(20, "path", 13);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(21, "div")(22, "h3", 14);
      \u0275\u0275text(23, "Quick Links");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(24, "ul", 15);
      \u0275\u0275conditionalCreate(25, Footer_Conditional_25_Template, 6, 0);
      \u0275\u0275elementStart(26, "li")(27, "a", 16);
      \u0275\u0275text(28, "About Us");
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(29, Footer_Conditional_29_Template, 5, 0, "li");
      \u0275\u0275conditionalCreate(30, Footer_Conditional_30_Template, 9, 0);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(31, "div")(32, "h3", 14);
      \u0275\u0275text(33, "Support");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(34, "ul", 15)(35, "li")(36, "a", 17);
      \u0275\u0275text(37, "Help Center");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(38, "li")(39, "a", 18);
      \u0275\u0275text(40, "Contact Us");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(41, "li")(42, "a", 19);
      \u0275\u0275text(43, "Shipping & Delivery");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(44, "li")(45, "a", 20);
      \u0275\u0275text(46, "Returns & Exchanges");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(47, "div")(48, "h3", 14);
      \u0275\u0275text(49, "Stay in the Loop");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(50, "p", 21);
      \u0275\u0275text(51, "Subscribe to our newsletter for exclusive offers and tech news.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(52, "form", 22);
      \u0275\u0275listener("submit", function Footer_Template_form_submit_52_listener($event) {
        return $event.preventDefault();
      });
      \u0275\u0275element(53, "input", 23);
      \u0275\u0275elementStart(54, "button", 24);
      \u0275\u0275text(55, " Subscribe ");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(56, "div", 25)(57, "p");
      \u0275\u0275text(58);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(59, "div", 26)(60, "a", 27);
      \u0275\u0275text(61, "Privacy Policy");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(62, "a", 28);
      \u0275\u0275text(63, "Terms of Service");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(64, "a", 29);
      \u0275\u0275text(65, "Cookie Settings");
      \u0275\u0275elementEnd()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(25);
      \u0275\u0275conditional(ctx.auth.currentUserRole() === "GUEST" || ctx.auth.currentUserRole() === "INDIVIDUAL" ? 25 : -1);
      \u0275\u0275advance(4);
      \u0275\u0275conditional(ctx.auth.currentUserRole() === "GUEST" ? 29 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.auth.currentUserRole() === "CORPORATE" ? 30 : -1);
      \u0275\u0275advance(28);
      \u0275\u0275textInterpolate1("\xA9 ", ctx.currentYear, " DataPulse Inc. All rights reserved.");
    }
  }, dependencies: [CommonModule, RouterModule, RouterLink], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Footer, [{
    type: Component,
    args: [{ selector: "app-footer", standalone: true, imports: [CommonModule, RouterModule], template: `<footer class="bg-gray-900 text-gray-300 pt-16 pb-8 border-t border-gray-800 mt-auto">
  <div class="container mx-auto px-4 max-w-7xl">
    
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
      
      <div class="space-y-4">
        <a routerLink="/" class="text-2xl font-bold text-white flex items-center gap-2 mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
          DataPulse
        </a>
        <p class="text-sm text-gray-400 leading-relaxed">
          Empowering your digital lifestyle with premium electronics and accessories. 
          Discover reliability, performance, and innovation all in one place.
        </p>
        <div class="flex gap-4 pt-2">
          <a href="#" class="text-gray-400 hover:text-white transition-colors">
            <span class="sr-only">Twitter</span>
            <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"/></svg>
          </a>
          <a href="#" class="text-gray-400 hover:text-white transition-colors">
            <span class="sr-only">LinkedIn</span>
            <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
          </a>
        </div>
      </div>

      <div>
        <h3 class="text-white font-semibold mb-6 uppercase tracking-wider text-sm">Quick Links</h3>
        <ul class="space-y-3 text-sm">
          @if (auth.currentUserRole() === 'GUEST' || auth.currentUserRole() === 'INDIVIDUAL') {
            <li><a routerLink="/catalog" class="hover:text-blue-500 transition-colors">Shop Catalog</a></li>
            <li><a routerLink="/categories" class="hover:text-blue-500 transition-colors">Categories</a></li>
          }
          <li><a routerLink="/about" class="hover:text-blue-500 transition-colors">About Us</a></li>
          @if (auth.currentUserRole() === 'GUEST') {
            <li><a routerLink="/auth/register" class="hover:text-blue-500 transition-colors flex items-center gap-2">Sell with Us <span class="bg-blue-600 text-white text-[10px] px-1.5 py-0.5 rounded">NEW</span></a></li>
          }
          @if (auth.currentUserRole() === 'CORPORATE') {
            <li><a routerLink="/corporate/dashboard" class="hover:text-blue-500 transition-colors">Dashboard</a></li>
            <li><a routerLink="/corporate/catalog" class="hover:text-blue-500 transition-colors">Products</a></li>
            <li><a routerLink="/corporate/orders" class="hover:text-blue-500 transition-colors">Store Orders</a></li>
          }
        </ul>
      </div>

      <div>
        <h3 class="text-white font-semibold mb-6 uppercase tracking-wider text-sm">Support</h3>
        <ul class="space-y-3 text-sm">
          <li><a routerLink="/help" class="hover:text-blue-500 transition-colors">Help Center</a></li>
          <li><a routerLink="/contact" class="hover:text-blue-500 transition-colors">Contact Us</a></li>
          <li><a routerLink="/shipping" class="hover:text-blue-500 transition-colors">Shipping & Delivery</a></li>
          <li><a routerLink="/returns" class="hover:text-blue-500 transition-colors">Returns & Exchanges</a></li>
        </ul>
      </div>

      <div>
        <h3 class="text-white font-semibold mb-6 uppercase tracking-wider text-sm">Stay in the Loop</h3>
        <p class="text-sm text-gray-400 mb-4">Subscribe to our newsletter for exclusive offers and tech news.</p>
        <form class="flex flex-col gap-2" (submit)="$event.preventDefault()">
          <input type="email" placeholder="Enter your email" 
                 class="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors">
          <button type="submit" class="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2.5 rounded-lg transition-colors text-sm">
            Subscribe
          </button>
        </form>
      </div>
      
    </div>

    <div class="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
      <p>&copy; {{ currentYear }} DataPulse Inc. All rights reserved.</p>
      
      <div class="flex gap-6">
        <a routerLink="/privacy" class="hover:text-white transition-colors">Privacy Policy</a>
        <a routerLink="/terms" class="hover:text-white transition-colors">Terms of Service</a>
        <a routerLink="/cookies" class="hover:text-white transition-colors">Cookie Settings</a>
      </div>
    </div>
    
  </div>
</footer>
` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Footer, { className: "Footer", filePath: "app/core/layout/footer/footer.ts", lineNumber: 12 });
})();

// src/app/app.ts
function App_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-navbar");
  }
}
function App_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-footer");
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
  router = inject(Router);
  constructor() {
    this.router.events.pipe(filter((event) => event instanceof NavigationEnd)).subscribe((event) => {
      this.isAuthRoute.set(event.url.includes("/auth") || event.urlAfterRedirects?.includes("/auth"));
    });
  }
  static \u0275fac = function App_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _App)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _App, selectors: [["app-root"]], decls: 5, vars: 2, consts: [[1, "min-h-screen", "flex", "flex-col", "bg-gray-50"], [1, "flex-grow"]], template: function App_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275conditionalCreate(1, App_Conditional_1_Template, 1, 0, "app-navbar");
      \u0275\u0275elementStart(2, "main", 1);
      \u0275\u0275element(3, "router-outlet");
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(4, App_Conditional_4_Template, 1, 0, "app-footer");
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275conditional(!ctx.isAuthRoute() ? 1 : -1);
      \u0275\u0275advance(3);
      \u0275\u0275conditional(!ctx.isAuthRoute() ? 4 : -1);
    }
  }, dependencies: [RouterOutlet, Navbar, Footer], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(App, [{
    type: Component,
    args: [{ selector: "app-root", imports: [RouterOutlet, Navbar, Footer], template: '<div class="min-h-screen flex flex-col bg-gray-50">\n  \n  @if (!isAuthRoute()) {\n    <app-navbar></app-navbar>\n  }\n\n  <main class="flex-grow">\n    <router-outlet></router-outlet>\n  </main>\n\n  @if (!isAuthRoute()) {\n    <app-footer></app-footer>\n  }\n\n</div>\n' }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(App, { className: "App", filePath: "app/app.ts", lineNumber: 13 });
})();

// src/main.ts
bootstrapApplication(App, appConfig).catch((err) => console.error(err));
//# sourceMappingURL=main.js.map
