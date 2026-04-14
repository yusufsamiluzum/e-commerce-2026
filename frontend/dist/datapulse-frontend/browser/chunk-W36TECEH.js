import {
  AuthService
} from "./chunk-LK4C7XHL.js";
import {
  RouterLink,
  RouterLinkActive,
  RouterModule,
  RouterOutlet
} from "./chunk-XXXBABRB.js";
import {
  CommonModule,
  Component,
  inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-7LZR64HY.js";

// src/app/features/corporate/profile/corporate-profile-layout.ts
var _c0 = (a0) => ({ exact: a0 });
var _forTrack0 = ($index, $item) => $item.path;
function CorporateProfileLayout_For_19_Case_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 17);
    \u0275\u0275element(1, "path", 18);
    \u0275\u0275elementEnd();
  }
}
function CorporateProfileLayout_For_19_Case_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 17);
    \u0275\u0275element(1, "path", 19);
    \u0275\u0275elementEnd();
  }
}
function CorporateProfileLayout_For_19_Case_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 17);
    \u0275\u0275element(1, "path", 20);
    \u0275\u0275elementEnd();
  }
}
function CorporateProfileLayout_For_19_Case_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 17);
    \u0275\u0275element(1, "path", 21);
    \u0275\u0275elementEnd();
  }
}
function CorporateProfileLayout_For_19_Case_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 17);
    \u0275\u0275element(1, "path", 22);
    \u0275\u0275elementEnd();
  }
}
function CorporateProfileLayout_For_19_Case_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 17);
    \u0275\u0275element(1, "path", 23);
    \u0275\u0275elementEnd();
  }
}
function CorporateProfileLayout_For_19_Case_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 17);
    \u0275\u0275element(1, "path", 24);
    \u0275\u0275elementEnd();
  }
}
function CorporateProfileLayout_For_19_Case_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 17);
    \u0275\u0275element(1, "path", 25);
    \u0275\u0275elementEnd();
  }
}
function CorporateProfileLayout_For_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 15);
    \u0275\u0275conditionalCreate(1, CorporateProfileLayout_For_19_Case_1_Template, 2, 0, ":svg:svg", 17)(2, CorporateProfileLayout_For_19_Case_2_Template, 2, 0, ":svg:svg", 17)(3, CorporateProfileLayout_For_19_Case_3_Template, 2, 0, ":svg:svg", 17)(4, CorporateProfileLayout_For_19_Case_4_Template, 2, 0, ":svg:svg", 17)(5, CorporateProfileLayout_For_19_Case_5_Template, 2, 0, ":svg:svg", 17)(6, CorporateProfileLayout_For_19_Case_6_Template, 2, 0, ":svg:svg", 17)(7, CorporateProfileLayout_For_19_Case_7_Template, 2, 0, ":svg:svg", 17)(8, CorporateProfileLayout_For_19_Case_8_Template, 2, 0, ":svg:svg", 17);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_12_0;
    const item_r1 = ctx.$implicit;
    \u0275\u0275property("routerLink", item_r1.path)("routerLinkActiveOptions", \u0275\u0275pureFunction1(4, _c0, item_r1.path.includes("details")));
    \u0275\u0275advance();
    \u0275\u0275conditional((tmp_12_0 = item_r1.icon) === "user" ? 1 : tmp_12_0 === "dashboard" ? 2 : tmp_12_0 === "catalog" ? 3 : tmp_12_0 === "inventory" ? 4 : tmp_12_0 === "orders" ? 5 : tmp_12_0 === "analytics" ? 6 : tmp_12_0 === "customers" ? 7 : tmp_12_0 === "reviews" ? 8 : -1);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate1(" ", item_r1.label, " ");
  }
}
var CorporateProfileLayout = class _CorporateProfileLayout {
  auth = inject(AuthService);
  menuItems = [
    { path: "/corporate/profile/details", label: "Profil Bilgileri", icon: "user" },
    { path: "/corporate/dashboard", label: "Dashboard", icon: "dashboard" },
    { path: "/corporate/catalog", label: "\xDCr\xFCn Katalo\u011Fu", icon: "catalog" },
    { path: "/corporate/inventory", label: "Envanter Y\xF6netimi", icon: "inventory" },
    { path: "/corporate/orders", label: "Sipari\u015F Y\xF6netimi", icon: "orders" },
    { path: "/corporate/analytics", label: "Sat\u0131\u015F Analiti\u011Fi", icon: "analytics" },
    { path: "/corporate/customers", label: "M\xFC\u015Fteri Segmentasyonu", icon: "customers" },
    { path: "/corporate/reviews", label: "Yorum Y\xF6netimi", icon: "reviews" }
  ];
  static \u0275fac = function CorporateProfileLayout_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CorporateProfileLayout)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CorporateProfileLayout, selectors: [["app-corporate-profile-layout"]], decls: 22, vars: 2, consts: [[1, "min-h-screen", "bg-gray-950"], [1, "max-w-7xl", "mx-auto", "px-4", "sm:px-6", "lg:px-8", "py-8"], [1, "flex", "flex-col", "lg:flex-row", "gap-6"], [1, "w-full", "lg:w-72", "flex-shrink-0"], [1, "bg-gray-900/80", "border", "border-gray-800", "rounded-2xl", "overflow-hidden", "sticky", "top-24"], [1, "p-6", "border-b", "border-gray-800", "bg-gradient-to-br", "from-blue-900/30", "to-gray-900"], [1, "flex", "items-center", "gap-4"], [1, "h-14", "w-14", "rounded-full", "bg-blue-600/20", "border-2", "border-blue-500/40", "flex", "items-center", "justify-center", "flex-shrink-0"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", 1, "h-7", "w-7", "text-blue-400"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "1.5", "d", "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"], [1, "min-w-0"], [1, "text-sm", "font-bold", "text-white", "truncate"], [1, "text-xs", "text-gray-400", "truncate"], [1, "inline-block", "mt-1", "text-[10px]", "font-semibold", "text-blue-400", "bg-blue-500/10", "px-2", "py-0.5", "rounded-lg", "uppercase", "tracking-wider"], [1, "p-3"], ["routerLinkActive", "bg-blue-600/15 text-blue-400 border-blue-500/30", 1, "flex", "items-center", "gap-3", "px-4", "py-3", "rounded-xl", "text-sm", "font-medium", "text-gray-400", "hover:text-white", "hover:bg-gray-800/60", "border", "border-transparent", "transition-all", "mb-0.5", 3, "routerLink", "routerLinkActiveOptions"], [1, "flex-1", "min-w-0"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", "stroke-width", "1.5", 1, "h-[18px]", "w-[18px]", "flex-shrink-0"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"]], template: function CorporateProfileLayout_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "aside", 3)(4, "div", 4)(5, "div", 5)(6, "div", 6)(7, "div", 7);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(8, "svg", 8);
      \u0275\u0275element(9, "path", 9);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(10, "div", 10)(11, "p", 11);
      \u0275\u0275text(12);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "p", 12);
      \u0275\u0275text(14);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "span", 13);
      \u0275\u0275text(16, "Kurumsal");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(17, "nav", 14);
      \u0275\u0275repeaterCreate(18, CorporateProfileLayout_For_19_Template, 10, 6, "a", 15, _forTrack0);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(20, "main", 16);
      \u0275\u0275element(21, "router-outlet");
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(12);
      \u0275\u0275textInterpolate(ctx.auth.currentUserName());
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.auth.currentUserEmail());
      \u0275\u0275advance(4);
      \u0275\u0275repeater(ctx.menuItems);
    }
  }, dependencies: [CommonModule, RouterModule, RouterOutlet, RouterLink, RouterLinkActive], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CorporateProfileLayout, [{
    type: Component,
    args: [{ selector: "app-corporate-profile-layout", standalone: true, imports: [CommonModule, RouterModule], template: `<div class="min-h-screen bg-gray-950">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
    <div class="flex flex-col lg:flex-row gap-6">

      <!-- \u2500\u2500\u2500 Sol Sidebar \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
      <aside class="w-full lg:w-72 flex-shrink-0">
        <div class="bg-gray-900/80 border border-gray-800 rounded-2xl overflow-hidden sticky top-24">

          <!-- Profil \xD6zet -->
          <div class="p-6 border-b border-gray-800 bg-gradient-to-br from-blue-900/30 to-gray-900">
            <div class="flex items-center gap-4">
              <div class="h-14 w-14 rounded-full bg-blue-600/20 border-2 border-blue-500/40 flex items-center justify-center flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <div class="min-w-0">
                <p class="text-sm font-bold text-white truncate">{{ auth.currentUserName() }}</p>
                <p class="text-xs text-gray-400 truncate">{{ auth.currentUserEmail() }}</p>
                <span class="inline-block mt-1 text-[10px] font-semibold text-blue-400 bg-blue-500/10 px-2 py-0.5 rounded-lg uppercase tracking-wider">Kurumsal</span>
              </div>
            </div>
          </div>

          <!-- Men\xFC Linkleri -->
          <nav class="p-3">
            @for (item of menuItems; track item.path) {
              <a [routerLink]="item.path" routerLinkActive="bg-blue-600/15 text-blue-400 border-blue-500/30"
                [routerLinkActiveOptions]="{exact: item.path.includes('details')}"
                class="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-gray-400 hover:text-white hover:bg-gray-800/60 border border-transparent transition-all mb-0.5">

                <!-- Icons -->
                @switch (item.icon) {
                  @case ('user') {
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-[18px] w-[18px] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  }
                  @case ('dashboard') {
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-[18px] w-[18px] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                    </svg>
                  }
                  @case ('catalog') {
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-[18px] w-[18px] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                    </svg>
                  }
                  @case ('inventory') {
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-[18px] w-[18px] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                  }
                  @case ('orders') {
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-[18px] w-[18px] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                    </svg>
                  }
                  @case ('analytics') {
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-[18px] w-[18px] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  }
                  @case ('customers') {
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-[18px] w-[18px] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  }
                  @case ('reviews') {
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-[18px] w-[18px] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                    </svg>
                  }
                }

                {{ item.label }}
              </a>
            }
          </nav>
        </div>
      </aside>

      <!-- \u2500\u2500\u2500 Sa\u011F \u0130\xE7erik Alan\u0131 \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
      <main class="flex-1 min-w-0">
        <router-outlet></router-outlet>
      </main>

    </div>
  </div>
</div>
` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CorporateProfileLayout, { className: "CorporateProfileLayout", filePath: "app/features/corporate/profile/corporate-profile-layout.ts", lineNumber: 12 });
})();
export {
  CorporateProfileLayout
};
//# sourceMappingURL=chunk-W36TECEH.js.map
