import {
  RouterLink,
  RouterLinkActive,
  RouterModule,
  RouterOutlet
} from "./chunk-XXXBABRB.js";
import {
  CommonModule,
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-7LZR64HY.js";

// src/app/features/individual/profile/profile-layout/profile-layout.ts
var _c0 = () => ({ exact: true });
var _forTrack0 = ($index, $item) => $item.path;
function ProfileLayout_For_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 14)(1, "span", 19);
    \u0275\u0275element(2, "i");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 20);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    \u0275\u0275property("routerLink", "./" + item_r1.path)("routerLinkActiveOptions", \u0275\u0275pureFunction0(5, _c0));
    \u0275\u0275advance(2);
    \u0275\u0275classMap(item_r1.icon + " text-sm");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r1.label);
  }
}
var ProfileLayout = class _ProfileLayout {
  menuItems = [
    { label: "Kullan\u0131c\u0131 Profili", path: "details", icon: "fas fa-user" },
    { label: "Sipari\u015Flerim", path: "orders", icon: "fas fa-box" },
    { label: "\u0130ade Taleplerim", path: "refunds", icon: "fas fa-undo" },
    { label: "Sat\u0131n Al\u0131m Ge\xE7mi\u015Fi", path: "history", icon: "fas fa-history" },
    { label: "\xDCr\xFCn Yorumlar\u0131m", path: "reviews", icon: "fas fa-star" },
    { label: "Harcama Analizi", path: "spending", icon: "fas fa-chart-pie" },
    { label: "Profil Y\xF6netimi", path: "management", icon: "fas fa-cog" },
    { label: "Tercihlerim", path: "preferences", icon: "fas fa-sliders-h" }
  ];
  static \u0275fac = function ProfileLayout_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ProfileLayout)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProfileLayout, selectors: [["app-profile-layout"]], decls: 25, vars: 0, consts: [[1, "min-h-screen"], [1, "container", "mx-auto", "px-4", "py-6", "md:py-10"], [1, "flex", "flex-col", "md:flex-row", "gap-6", "md:gap-8"], [1, "w-full", "md:w-72", "flex-shrink-0"], [1, "md:sticky", "md:top-24", "rounded-2xl", "overflow-hidden", "border", "border-white/5", "shadow-2xl", 2, "background", "linear-gradient(145deg, #111827 0%, #0f172a 100%)"], [1, "p-6", "pb-5", "border-b", "border-white/5", "hidden", "md:block", 2, "background", "linear-gradient(135deg, rgba(59,130,246,0.08) 0%, rgba(99,102,241,0.05) 100%)"], [1, "flex", "items-center", "gap-4"], [1, "w-14", "h-14", "rounded-xl", "flex-shrink-0", "flex", "items-center", "justify-center", "text-xl", "font-black", "text-white", "shadow-lg", 2, "background", "linear-gradient(135deg, #3b82f6 0%, #6366f1 100%)"], [1, "fas", "fa-user"], [1, "min-w-0"], [1, "text-base", "font-bold", "text-white", "truncate"], [1, "inline-flex", "items-center", "gap-1", "mt-1", "px-2", "py-0.5", "rounded-full", "text-[10px]", "font-bold", "uppercase", "tracking-wider", "text-blue-300", "border", "border-blue-500/30", 2, "background", "rgba(59,130,246,0.1)"], [1, "w-1.5", "h-1.5", "rounded-full", "bg-emerald-400"], [1, "flex", "flex-row", "md:flex-col", "overflow-x-auto", "md:overflow-visible", "p-2", "md:p-3", "gap-1", 2, "scrollbar-width", "none"], ["type", "button", "routerLinkActive", "active-nav-item", 1, "nav-menu-item", "group", "relative", "flex", "items-center", "gap-3", "px-3", "py-2.5", "md:px-4", "md:py-3", "rounded-xl", "text-sm", "font-medium", "text-gray-400", "transition-all", "duration-200", "hover:text-white", "whitespace-nowrap", "min-w-max", "md:min-w-0", "md:w-full", "hover:bg-white/5", "border", "border-transparent", "hover:border-white/5", 3, "routerLink", "routerLinkActiveOptions"], [1, "hidden", "md:block", "p-4", "border-t", "border-white/5"], [1, "flex", "items-center", "gap-2", "text-xs", "text-gray-600", "hover:text-gray-400", "cursor-pointer", "transition-colors"], [1, "fas", "fa-question-circle"], [1, "flex-1", "rounded-2xl", "border", "border-white/5", "shadow-2xl", "overflow-hidden", "profile-main", 2, "background", "linear-gradient(145deg, #111827 0%, #0f172a 100%)", "min-height", "600px"], [1, "nav-icon", "w-8", "h-8", "flex-shrink-0", "rounded-lg", "flex", "items-center", "justify-center", "transition-all", "duration-200", "bg-gray-800", "group-hover:bg-gray-700"], [1, "hidden", "md:inline"]], template: function ProfileLayout_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "aside", 3)(4, "div", 4)(5, "div", 5)(6, "div", 6)(7, "div", 7);
      \u0275\u0275element(8, "i", 8);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "div", 9)(10, "h2", 10);
      \u0275\u0275text(11, "Hesab\u0131m");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "span", 11);
      \u0275\u0275element(13, "span", 12);
      \u0275\u0275text(14, " Bireysel M\xFC\u015Fteri ");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(15, "nav", 13);
      \u0275\u0275repeaterCreate(16, ProfileLayout_For_17_Template, 5, 6, "button", 14, _forTrack0);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "div", 15)(19, "div", 16);
      \u0275\u0275element(20, "i", 17);
      \u0275\u0275elementStart(21, "span");
      \u0275\u0275text(22, "Yard\u0131m ve Destek");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(23, "main", 18);
      \u0275\u0275element(24, "router-outlet");
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(16);
      \u0275\u0275repeater(ctx.menuItems);
    }
  }, dependencies: [CommonModule, RouterModule, RouterOutlet, RouterLink, RouterLinkActive], styles: ["\n\n.hide-scrollbar[_ngcontent-%COMP%] {\n  -ms-overflow-style: none;\n  scrollbar-width: none;\n}\n.hide-scrollbar[_ngcontent-%COMP%]::-webkit-scrollbar {\n  display: none;\n}\n/*# sourceMappingURL=profile-layout.css.map */", "\n\n.active-nav-item[_ngcontent-%COMP%] {\n  color: #93c5fd !important;\n  background: rgba(59, 130, 246, 0.12) !important;\n  border-color: rgba(59, 130, 246, 0.2) !important;\n}\n.active-nav-item[_ngcontent-%COMP%]   .nav-icon[_ngcontent-%COMP%] {\n  background: rgba(59, 130, 246, 0.2) !important;\n  color: #60a5fa;\n}\nnav[_ngcontent-%COMP%]::-webkit-scrollbar {\n  display: none;\n}\n.profile-main[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_profile-page-in 0.18s ease-out both;\n}\n@keyframes _ngcontent-%COMP%_profile-page-in {\n  from {\n    opacity: 0;\n    transform: translateY(6px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n/*# sourceMappingURL=profile-layout.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProfileLayout, [{
    type: Component,
    args: [{ selector: "app-profile-layout", standalone: true, imports: [CommonModule, RouterModule], template: `<div class="min-h-screen">
  <div class="container mx-auto px-4 py-6 md:py-10">
    <div class="flex flex-col md:flex-row gap-6 md:gap-8">

      <!-- Sidebar -->
      <aside class="w-full md:w-72 flex-shrink-0">
        <div class="md:sticky md:top-24 rounded-2xl overflow-hidden border border-white/5 shadow-2xl"
             style="background: linear-gradient(145deg, #111827 0%, #0f172a 100%);">

          <!-- Sidebar Header: Avatar + \u0130sim -->
          <div class="p-6 pb-5 border-b border-white/5 hidden md:block"
               style="background: linear-gradient(135deg, rgba(59,130,246,0.08) 0%, rgba(99,102,241,0.05) 100%);">
            <div class="flex items-center gap-4">
              <!-- Gradient Avatar -->
              <div class="w-14 h-14 rounded-xl flex-shrink-0 flex items-center justify-center text-xl font-black text-white shadow-lg"
                   style="background: linear-gradient(135deg, #3b82f6 0%, #6366f1 100%);">
                <i class="fas fa-user"></i>
              </div>
              <div class="min-w-0">
                <h2 class="text-base font-bold text-white truncate">Hesab\u0131m</h2>
                <span class="inline-flex items-center gap-1 mt-1 px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider text-blue-300 border border-blue-500/30"
                      style="background: rgba(59,130,246,0.1);">
                  <span class="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                  Bireysel M\xFC\u015Fteri
                </span>
              </div>
            </div>
          </div>

          <!-- Navigation -->
          <nav class="flex flex-row md:flex-col overflow-x-auto md:overflow-visible p-2 md:p-3 gap-1"
               style="scrollbar-width: none;">
            @for (item of menuItems; track item.path) {
              <button
                type="button"
                [routerLink]="'./' + item.path"
                routerLinkActive="active-nav-item"
                [routerLinkActiveOptions]="{ exact: true }"
                class="nav-menu-item group relative flex items-center gap-3 px-3 py-2.5 md:px-4 md:py-3 rounded-xl text-sm font-medium text-gray-400 transition-all duration-200 hover:text-white whitespace-nowrap min-w-max md:min-w-0 md:w-full
                       hover:bg-white/5 border border-transparent hover:border-white/5">
                <!-- Icon container -->
                <span class="nav-icon w-8 h-8 flex-shrink-0 rounded-lg flex items-center justify-center transition-all duration-200
                             bg-gray-800 group-hover:bg-gray-700">
                  <i [class]="item.icon + ' text-sm'"></i>
                </span>
                <span class="hidden md:inline">{{ item.label }}</span>
              </button>
            }
          </nav>

          <!-- Bottom divider + help -->
          <div class="hidden md:block p-4 border-t border-white/5">
            <div class="flex items-center gap-2 text-xs text-gray-600 hover:text-gray-400 cursor-pointer transition-colors">
              <i class="fas fa-question-circle"></i>
              <span>Yard\u0131m ve Destek</span>
            </div>
          </div>
        </div>
      </aside>

      <!-- Main Content -->
      <main class="flex-1 rounded-2xl border border-white/5 shadow-2xl overflow-hidden profile-main"
            style="background: linear-gradient(145deg, #111827 0%, #0f172a 100%); min-height: 600px;">
        <router-outlet></router-outlet>
      </main>

    </div>
  </div>
</div>

<style>
  .active-nav-item {
    color: #93c5fd !important;
    background: rgba(59, 130, 246, 0.12) !important;
    border-color: rgba(59, 130, 246, 0.2) !important;
  }
  .active-nav-item .nav-icon {
    background: rgba(59, 130, 246, 0.2) !important;
    color: #60a5fa;
  }
  nav::-webkit-scrollbar { display: none; }

  /* Route ge\xE7i\u015Flerinde fade-in \u2014 flicker'\u0131 yumu\u015Fat\u0131r */
  .profile-main > * {
    animation: profile-page-in 0.18s ease-out both;
  }
  @keyframes profile-page-in {
    from { opacity: 0; transform: translateY(6px); }
    to   { opacity: 1; transform: translateY(0); }
  }
</style>
`, styles: ["/* src/app/features/individual/profile/profile-layout/profile-layout.scss */\n.hide-scrollbar {\n  -ms-overflow-style: none;\n  scrollbar-width: none;\n}\n.hide-scrollbar::-webkit-scrollbar {\n  display: none;\n}\n/*# sourceMappingURL=profile-layout.css.map */\n", "/* angular:styles/component:css;aeb1dd510ad84a4c54f7309ccacf2f3a4f912cb13ee2ddaa2f6f23f0abcea831;/home/yusuf/e-commerce-2026/frontend/src/app/features/individual/profile/profile-layout/profile-layout.html */\n.active-nav-item {\n  color: #93c5fd !important;\n  background: rgba(59, 130, 246, 0.12) !important;\n  border-color: rgba(59, 130, 246, 0.2) !important;\n}\n.active-nav-item .nav-icon {\n  background: rgba(59, 130, 246, 0.2) !important;\n  color: #60a5fa;\n}\nnav::-webkit-scrollbar {\n  display: none;\n}\n.profile-main > * {\n  animation: profile-page-in 0.18s ease-out both;\n}\n@keyframes profile-page-in {\n  from {\n    opacity: 0;\n    transform: translateY(6px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n/*# sourceMappingURL=profile-layout.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProfileLayout, { className: "ProfileLayout", filePath: "app/features/individual/profile/profile-layout/profile-layout.ts", lineNumber: 12 });
})();
export {
  ProfileLayout
};
//# sourceMappingURL=chunk-HPMULM74.js.map
