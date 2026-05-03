import './polyfills.server.mjs';
import {
  AdminService
} from "./chunk-2MVXU3MM.mjs";
import {
  FormsModule
} from "./chunk-ZZHQPMHV.mjs";
import {
  toSignal
} from "./chunk-MX5BFGVJ.mjs";
import {
  CommonModule,
  Component,
  DatePipe,
  Subject,
  catchError,
  computed,
  inject,
  of,
  setClassMetadata,
  signal,
  startWith,
  switchMap,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdomElement,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵdomListener,
  ɵɵdomProperty,
  ɵɵgetCurrentView,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵpureFunction0,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-K2NYDLGG.mjs";
import "./chunk-T2KOBY73.mjs";

// src/app/features/admin/users/user-management.ts
var _c0 = () => ["ALL", "ADMIN", "CORPORATE", "INDIVIDUAL"];
var _c1 = () => ["ALL", "ACTIVE", "SUSPENDED"];
var _c2 = () => [1, 2, 3, 4, 5, 6, 7, 8];
var _c3 = () => [];
var _forTrack0 = ($index, $item) => $item.id;
function UserManagement_For_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "button", 16);
    \u0275\u0275domListener("click", function UserManagement_For_19_Template_button_click_0_listener() {
      const role_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onRoleFilter(role_r2));
    });
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const role_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classMap(ctx_r2.roleFilter() === role_r2 ? "bg-blue-600 text-white px-3 py-1.5 rounded-md text-xs font-medium transition-all" : "text-gray-400 px-3 py-1.5 rounded-md text-xs font-medium hover:text-white hover:bg-gray-800 transition-all");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", role_r2 === "ALL" ? "T\xFCm\xFC" : role_r2, " ");
  }
}
function UserManagement_For_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "button", 16);
    \u0275\u0275domListener("click", function UserManagement_For_22_Template_button_click_0_listener() {
      const status_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onStatusFilter(status_r5));
    });
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const status_r5 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classMap(ctx_r2.statusFilter() === status_r5 ? "bg-blue-600 text-white px-3 py-1.5 rounded-md text-xs font-medium transition-all" : "text-gray-400 px-3 py-1.5 rounded-md text-xs font-medium hover:text-white hover:bg-gray-800 transition-all");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", status_r5 === "ALL" ? "T\xFCm\xFC" : status_r5 === "ACTIVE" ? "Aktif" : "Ask\u0131da", " ");
  }
}
function UserManagement_Conditional_23_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 17);
    \u0275\u0275domElement(1, "div", 18);
    \u0275\u0275domElementStart(2, "div", 19);
    \u0275\u0275domElement(3, "div", 20)(4, "div", 21);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElement(5, "div", 22)(6, "div", 23);
    \u0275\u0275domElementEnd();
  }
}
function UserManagement_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 15);
    \u0275\u0275repeaterCreate(1, UserManagement_Conditional_23_For_2_Template, 7, 0, "div", 17, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275repeater(\u0275\u0275pureFunction0(0, _c2));
  }
}
function UserManagement_Conditional_24_For_17_Conditional_21_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275domElementStart(0, "svg", 44);
    \u0275\u0275domElement(1, "circle", 45)(2, "path", 46);
    \u0275\u0275domElementEnd();
  }
}
function UserManagement_Conditional_24_For_17_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "button", 43);
    \u0275\u0275domListener("click", function UserManagement_Conditional_24_For_17_Conditional_21_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const user_r7 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.toggleUserStatus(user_r7));
    });
    \u0275\u0275conditionalCreate(1, UserManagement_Conditional_24_For_17_Conditional_21_Conditional_1_Template, 3, 0, ":svg:svg", 44);
    \u0275\u0275text(2);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const user_r7 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275classMap(user_r7.status === "ACTIVE" ? "text-xs px-3 py-1.5 rounded-lg font-medium bg-orange-500/10 text-orange-400 border border-orange-500/20 hover:bg-orange-500/20 transition-all disabled:opacity-50" : "text-xs px-3 py-1.5 rounded-lg font-medium bg-green-500/10 text-green-400 border border-green-500/20 hover:bg-green-500/20 transition-all disabled:opacity-50");
    \u0275\u0275domProperty("disabled", ctx_r2.actionInProgress() === user_r7.id);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.actionInProgress() === user_r7.id ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", user_r7.status === "ACTIVE" ? "Ask\u0131ya Al" : "Aktif Et", " ");
  }
}
function UserManagement_Conditional_24_For_17_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "span", 42);
    \u0275\u0275text(1, "\u2014");
    \u0275\u0275domElementEnd();
  }
}
function UserManagement_Conditional_24_For_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "tr", 29)(1, "td", 31)(2, "div", 32)(3, "div", 33);
    \u0275\u0275text(4);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(5, "div")(6, "p", 34);
    \u0275\u0275text(7);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(8, "p", 35);
    \u0275\u0275text(9);
    \u0275\u0275domElementEnd()()()();
    \u0275\u0275domElementStart(10, "td", 31)(11, "span", 36);
    \u0275\u0275text(12);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(13, "td", 31)(14, "span", 37);
    \u0275\u0275domElement(15, "span", 38);
    \u0275\u0275text(16);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(17, "td", 39);
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "date");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(20, "td", 40);
    \u0275\u0275conditionalCreate(21, UserManagement_Conditional_24_For_17_Conditional_21_Template, 3, 5, "button", 41)(22, UserManagement_Conditional_24_For_17_Conditional_22_Template, 2, 0, "span", 42);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const user_r7 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275classMap(user_r7.roleType === "ADMIN" ? "bg-red-500/10 text-red-400" : user_r7.roleType === "CORPORATE" ? "bg-violet-500/10 text-violet-400" : "bg-blue-500/10 text-blue-400");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", user_r7.fullName.charAt(0), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(user_r7.fullName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(user_r7.email);
    \u0275\u0275advance(2);
    \u0275\u0275classMap(ctx_r2.getRoleBadgeClass(user_r7.roleType));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", user_r7.roleType, " ");
    \u0275\u0275advance(2);
    \u0275\u0275classMap(ctx_r2.getStatusBadgeClass(user_r7.status));
    \u0275\u0275advance();
    \u0275\u0275classMap(user_r7.status === "ACTIVE" ? "bg-green-400" : user_r7.status === "SUSPENDED" ? "bg-orange-400" : "bg-red-400");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", user_r7.status, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(19, 15, user_r7.createdAt, "dd MMM yyyy"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275conditional(user_r7.roleType !== "ADMIN" ? 21 : 22);
  }
}
function UserManagement_Conditional_24_ForEmpty_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "tr")(1, "td", 47);
    \u0275\u0275text(2, " Araman\u0131zla e\u015Fle\u015Fen kullan\u0131c\u0131 bulunamad\u0131. ");
    \u0275\u0275domElementEnd()();
  }
}
function UserManagement_Conditional_24_Conditional_19_For_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "button", 16);
    \u0275\u0275domListener("click", function UserManagement_Conditional_24_Conditional_19_For_5_Template_button_click_0_listener() {
      const $index_r9 = \u0275\u0275restoreView(_r8).$index;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.goToPage($index_r9));
    });
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const $index_r9 = ctx.$index;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275classMap(ctx_r2.currentPage() === $index_r9 ? "h-8 w-8 rounded-md bg-blue-600 text-white text-xs font-medium" : "h-8 w-8 rounded-md bg-gray-800 text-gray-400 text-xs font-medium hover:bg-gray-700 transition-colors");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", $index_r9 + 1, " ");
  }
}
function UserManagement_Conditional_24_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 30)(1, "p", 35);
    \u0275\u0275text(2);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "div", 48);
    \u0275\u0275repeaterCreate(4, UserManagement_Conditional_24_Conditional_19_For_5_Template, 2, 3, "button", 14, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" Toplam ", ctx_r2.usersPage().totalElements, " kullan\u0131c\u0131 ");
    \u0275\u0275advance(2);
    \u0275\u0275repeater(\u0275\u0275pureFunction0(1, _c3).constructor(ctx_r2.usersPage().totalPages));
  }
}
function UserManagement_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 15)(1, "div", 24)(2, "table", 25)(3, "thead")(4, "tr", 26)(5, "th", 27);
    \u0275\u0275text(6, "Kullan\u0131c\u0131");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(7, "th", 27);
    \u0275\u0275text(8, "Rol");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(9, "th", 27);
    \u0275\u0275text(10, "Durum");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(11, "th", 27);
    \u0275\u0275text(12, "Kay\u0131t Tarihi");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(13, "th", 28);
    \u0275\u0275text(14, "\u0130\u015Flem");
    \u0275\u0275domElementEnd()()();
    \u0275\u0275domElementStart(15, "tbody");
    \u0275\u0275repeaterCreate(16, UserManagement_Conditional_24_For_17_Template, 23, 18, "tr", 29, _forTrack0, false, UserManagement_Conditional_24_ForEmpty_18_Template, 3, 0, "tr");
    \u0275\u0275domElementEnd()()();
    \u0275\u0275conditionalCreate(19, UserManagement_Conditional_24_Conditional_19_Template, 6, 2, "div", 30);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(16);
    \u0275\u0275repeater(ctx_r2.filteredUsers());
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r2.usersPage() !== null && ctx_r2.usersPage().totalPages > 1 ? 19 : -1);
  }
}
var UserManagement = class _UserManagement {
  adminService = inject(AdminService);
  currentPage = signal(0, ...ngDevMode ? [{ debugName: "currentPage" }] : (
    /* istanbul ignore next */
    []
  ));
  searchQuery = signal("", ...ngDevMode ? [{ debugName: "searchQuery" }] : (
    /* istanbul ignore next */
    []
  ));
  roleFilter = signal("ALL", ...ngDevMode ? [{ debugName: "roleFilter" }] : (
    /* istanbul ignore next */
    []
  ));
  statusFilter = signal("ALL", ...ngDevMode ? [{ debugName: "statusFilter" }] : (
    /* istanbul ignore next */
    []
  ));
  actionInProgress = signal(null, ...ngDevMode ? [{ debugName: "actionInProgress" }] : (
    /* istanbul ignore next */
    []
  ));
  refresh$ = new Subject();
  usersPage = toSignal(this.refresh$.pipe(startWith(void 0), switchMap(() => this.adminService.getAllUsers(this.currentPage(), 50).pipe(catchError(() => of(null))))), { initialValue: null });
  filteredUsers = computed(() => {
    const page = this.usersPage();
    if (page === null)
      return null;
    let users = page.content;
    const q = this.searchQuery().toLowerCase();
    if (q) {
      users = users.filter((u) => u.fullName.toLowerCase().includes(q) || u.email.toLowerCase().includes(q));
    }
    const role = this.roleFilter();
    if (role !== "ALL") {
      users = users.filter((u) => u.roleType === role);
    }
    const status = this.statusFilter();
    if (status !== "ALL") {
      users = users.filter((u) => u.status === status);
    }
    return users;
  }, ...ngDevMode ? [{ debugName: "filteredUsers" }] : (
    /* istanbul ignore next */
    []
  ));
  toggleUserStatus(user) {
    const newStatus = user.status === "ACTIVE" ? "SUSPENDED" : "ACTIVE";
    this.actionInProgress.set(user.id);
    this.adminService.updateUserStatus(user.id, newStatus).subscribe({
      next: () => {
        this.actionInProgress.set(null);
        this.refresh$.next();
      },
      error: () => this.actionInProgress.set(null)
    });
  }
  onSearch(event) {
    this.searchQuery.set(event.target.value);
  }
  onRoleFilter(role) {
    this.roleFilter.set(role);
  }
  onStatusFilter(status) {
    this.statusFilter.set(status);
  }
  goToPage(page) {
    this.currentPage.set(page);
    this.refresh$.next();
  }
  getRoleBadgeClass(role) {
    switch (role) {
      case "ADMIN":
        return "bg-red-500/10 text-red-400 border-red-500/20";
      case "CORPORATE":
        return "bg-violet-500/10 text-violet-400 border-violet-500/20";
      case "INDIVIDUAL":
        return "bg-blue-500/10 text-blue-400 border-blue-500/20";
      default:
        return "bg-gray-500/10 text-gray-400 border-gray-500/20";
    }
  }
  getStatusBadgeClass(status) {
    switch (status) {
      case "ACTIVE":
        return "bg-green-500/10 text-green-400 border-green-500/20";
      case "SUSPENDED":
        return "bg-orange-500/10 text-orange-400 border-orange-500/20";
      case "DELETED":
        return "bg-red-500/10 text-red-400 border-red-500/20";
      default:
        return "bg-gray-500/10 text-gray-400 border-gray-500/20";
    }
  }
  exportCsv() {
    this.adminService.exportCsv("users");
  }
  static \u0275fac = function UserManagement_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _UserManagement)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _UserManagement, selectors: [["app-user-management"]], decls: 25, vars: 4, consts: [[1, "min-h-screen", "bg-gray-950", "text-white"], [1, "container", "mx-auto", "px-4", "py-8"], [1, "flex", "items-center", "justify-between", "mb-8"], [1, "text-3xl", "font-bold", "tracking-tight"], [1, "text-gray-400", "mt-1"], [1, "flex", "items-center", "gap-2", "bg-emerald-600", "hover:bg-emerald-700", "text-white", "px-4", "py-2.5", "rounded-lg", "text-sm", "font-medium", "transition-colors", "shadow-lg", "shadow-emerald-500/20", 3, "click"], ["fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", 1, "h-4", "w-4"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"], [1, "flex", "flex-col", "sm:flex-row", "gap-3", "mb-6"], [1, "relative", "flex-1"], ["fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", 1, "absolute", "left-3", "top-1/2", "-translate-y-1/2", "h-4", "w-4", "text-gray-500"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"], ["type", "text", "placeholder", "\u0130sim veya e-posta ile ara...", 1, "w-full", "bg-gray-900", "border", "border-gray-800", "rounded-lg", "py-2.5", "pl-10", "pr-4", "text-sm", "text-white", "placeholder-gray-500", "focus:border-blue-500", "focus:ring-2", "focus:ring-blue-500/20", "outline-none", "transition-all", 3, "input"], [1, "flex", "gap-1.5", "bg-gray-900", "border", "border-gray-800", "rounded-lg", "p-1"], [3, "class"], [1, "bg-gray-900", "border", "border-gray-800", "rounded-xl", "overflow-hidden"], [3, "click"], [1, "px-6", "py-4", "border-b", "border-gray-800", "animate-pulse", "flex", "items-center", "gap-4"], [1, "h-9", "w-9", "bg-gray-800", "rounded-full"], [1, "flex-1", "space-y-2"], [1, "h-3", "bg-gray-800", "rounded", "w-32"], [1, "h-2", "bg-gray-800", "rounded", "w-48"], [1, "h-5", "w-16", "bg-gray-800", "rounded-full"], [1, "h-5", "w-14", "bg-gray-800", "rounded-full"], [1, "overflow-x-auto"], [1, "w-full", "text-sm"], [1, "border-b", "border-gray-800", "text-xs", "text-gray-500", "uppercase", "tracking-wider"], [1, "text-left", "px-6", "py-3", "font-medium"], [1, "text-right", "px-6", "py-3", "font-medium"], [1, "border-b", "border-gray-800/50", "hover:bg-gray-800/30", "transition-colors"], [1, "px-6", "py-4", "border-t", "border-gray-800", "flex", "items-center", "justify-between"], [1, "px-6", "py-4"], [1, "flex", "items-center", "gap-3"], [1, "h-9", "w-9", "rounded-full", "flex", "items-center", "justify-center", "text-sm", "font-bold"], [1, "font-medium", "text-white"], [1, "text-xs", "text-gray-500"], [1, "inline-flex", "items-center", "px-2", "py-0.5", "rounded-full", "text-xs", "font-medium", "border"], [1, "inline-flex", "items-center", "gap-1.5", "px-2", "py-0.5", "rounded-full", "text-xs", "font-medium", "border"], [1, "h-1.5", "w-1.5", "rounded-full"], [1, "px-6", "py-4", "text-gray-400", "text-xs"], [1, "px-6", "py-4", "text-right"], [3, "disabled", "class"], [1, "text-xs", "text-gray-600"], [3, "click", "disabled"], ["viewBox", "0 0 24 24", 1, "animate-spin", "h-3", "w-3", "inline", "mr-1"], ["cx", "12", "cy", "12", "r", "10", "stroke", "currentColor", "stroke-width", "4", "fill", "none", 1, "opacity-25"], ["fill", "currentColor", "d", "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z", 1, "opacity-75"], ["colspan", "5", 1, "px-6", "py-12", "text-center", "text-gray-500"], [1, "flex", "gap-1"]], template: function UserManagement_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div")(4, "h1", 3);
      \u0275\u0275text(5, "Kullan\u0131c\u0131 Y\xF6netimi");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(6, "p", 4);
      \u0275\u0275text(7, "Platformdaki t\xFCm kullan\u0131c\u0131lar\u0131 y\xF6netin");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(8, "button", 5);
      \u0275\u0275domListener("click", function UserManagement_Template_button_click_8_listener() {
        return ctx.exportCsv();
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275domElementStart(9, "svg", 6);
      \u0275\u0275domElement(10, "path", 7);
      \u0275\u0275domElementEnd();
      \u0275\u0275text(11, " CSV Export ");
      \u0275\u0275domElementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275domElementStart(12, "div", 8)(13, "div", 9);
      \u0275\u0275namespaceSVG();
      \u0275\u0275domElementStart(14, "svg", 10);
      \u0275\u0275domElement(15, "path", 11);
      \u0275\u0275domElementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275domElementStart(16, "input", 12);
      \u0275\u0275domListener("input", function UserManagement_Template_input_input_16_listener($event) {
        return ctx.onSearch($event);
      });
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(17, "div", 13);
      \u0275\u0275repeaterCreate(18, UserManagement_For_19_Template, 2, 3, "button", 14, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(20, "div", 13);
      \u0275\u0275repeaterCreate(21, UserManagement_For_22_Template, 2, 3, "button", 14, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275domElementEnd()();
      \u0275\u0275conditionalCreate(23, UserManagement_Conditional_23_Template, 3, 1, "div", 15);
      \u0275\u0275conditionalCreate(24, UserManagement_Conditional_24_Template, 20, 2, "div", 15);
      \u0275\u0275domElementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(18);
      \u0275\u0275repeater(\u0275\u0275pureFunction0(2, _c0));
      \u0275\u0275advance(3);
      \u0275\u0275repeater(\u0275\u0275pureFunction0(3, _c1));
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.usersPage() === null ? 23 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.filteredUsers() !== null ? 24 : -1);
    }
  }, dependencies: [CommonModule, FormsModule, DatePipe], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UserManagement, [{
    type: Component,
    args: [{ selector: "app-user-management", standalone: true, imports: [CommonModule, FormsModule], template: `<div class="min-h-screen bg-gray-950 text-white">
  <div class="container mx-auto px-4 py-8">

    <div class="flex items-center justify-between mb-8">
      <div>
        <h1 class="text-3xl font-bold tracking-tight">Kullan\u0131c\u0131 Y\xF6netimi</h1>
        <p class="text-gray-400 mt-1">Platformdaki t\xFCm kullan\u0131c\u0131lar\u0131 y\xF6netin</p>
      </div>
      <button (click)="exportCsv()" class="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2.5 rounded-lg text-sm font-medium transition-colors shadow-lg shadow-emerald-500/20">
        <svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>
        CSV Export
      </button>
    </div>

    <!-- Filtreler -->
    <div class="flex flex-col sm:flex-row gap-3 mb-6">
      <!-- Arama -->
      <div class="relative flex-1">
        <svg class="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
        </svg>
        <input type="text" placeholder="\u0130sim veya e-posta ile ara..."
               (input)="onSearch($event)"
               class="w-full bg-gray-900 border border-gray-800 rounded-lg py-2.5 pl-10 pr-4 text-sm text-white placeholder-gray-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all">
      </div>

      <!-- Rol Filtresi -->
      <div class="flex gap-1.5 bg-gray-900 border border-gray-800 rounded-lg p-1">
        @for (role of ['ALL', 'ADMIN', 'CORPORATE', 'INDIVIDUAL']; track role) {
          <button (click)="onRoleFilter(role)"
                  [class]="roleFilter() === role
                    ? 'bg-blue-600 text-white px-3 py-1.5 rounded-md text-xs font-medium transition-all'
                    : 'text-gray-400 px-3 py-1.5 rounded-md text-xs font-medium hover:text-white hover:bg-gray-800 transition-all'">
            {{ role === 'ALL' ? 'T\xFCm\xFC' : role }}
          </button>
        }
      </div>

      <!-- Durum Filtresi -->
      <div class="flex gap-1.5 bg-gray-900 border border-gray-800 rounded-lg p-1">
        @for (status of ['ALL', 'ACTIVE', 'SUSPENDED']; track status) {
          <button (click)="onStatusFilter(status)"
                  [class]="statusFilter() === status
                    ? 'bg-blue-600 text-white px-3 py-1.5 rounded-md text-xs font-medium transition-all'
                    : 'text-gray-400 px-3 py-1.5 rounded-md text-xs font-medium hover:text-white hover:bg-gray-800 transition-all'">
            {{ status === 'ALL' ? 'T\xFCm\xFC' : (status === 'ACTIVE' ? 'Aktif' : 'Ask\u0131da') }}
          </button>
        }
      </div>
    </div>

    <!-- Skeleton -->
    @if (usersPage() === null) {
      <div class="bg-gray-900 border border-gray-800 rounded-xl overflow-hidden">
        @for (i of [1,2,3,4,5,6,7,8]; track i) {
          <div class="px-6 py-4 border-b border-gray-800 animate-pulse flex items-center gap-4">
            <div class="h-9 w-9 bg-gray-800 rounded-full"></div>
            <div class="flex-1 space-y-2">
              <div class="h-3 bg-gray-800 rounded w-32"></div>
              <div class="h-2 bg-gray-800 rounded w-48"></div>
            </div>
            <div class="h-5 w-16 bg-gray-800 rounded-full"></div>
            <div class="h-5 w-14 bg-gray-800 rounded-full"></div>
          </div>
        }
      </div>
    }

    <!-- Tablo -->
    @if (filteredUsers() !== null) {
      <div class="bg-gray-900 border border-gray-800 rounded-xl overflow-hidden">
        <div class="overflow-x-auto">
          <table class="w-full text-sm">
            <thead>
              <tr class="border-b border-gray-800 text-xs text-gray-500 uppercase tracking-wider">
                <th class="text-left px-6 py-3 font-medium">Kullan\u0131c\u0131</th>
                <th class="text-left px-6 py-3 font-medium">Rol</th>
                <th class="text-left px-6 py-3 font-medium">Durum</th>
                <th class="text-left px-6 py-3 font-medium">Kay\u0131t Tarihi</th>
                <th class="text-right px-6 py-3 font-medium">\u0130\u015Flem</th>
              </tr>
            </thead>
            <tbody>
              @for (user of filteredUsers(); track user.id) {
                <tr class="border-b border-gray-800/50 hover:bg-gray-800/30 transition-colors">
                  <td class="px-6 py-4">
                    <div class="flex items-center gap-3">
                      <div class="h-9 w-9 rounded-full flex items-center justify-center text-sm font-bold"
                           [class]="user.roleType === 'ADMIN' ? 'bg-red-500/10 text-red-400' : user.roleType === 'CORPORATE' ? 'bg-violet-500/10 text-violet-400' : 'bg-blue-500/10 text-blue-400'">
                        {{ user.fullName.charAt(0) }}
                      </div>
                      <div>
                        <p class="font-medium text-white">{{ user.fullName }}</p>
                        <p class="text-xs text-gray-500">{{ user.email }}</p>
                      </div>
                    </div>
                  </td>
                  <td class="px-6 py-4">
                    <span class="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium border"
                          [class]="getRoleBadgeClass(user.roleType)">
                      {{ user.roleType }}
                    </span>
                  </td>
                  <td class="px-6 py-4">
                    <span class="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-xs font-medium border"
                          [class]="getStatusBadgeClass(user.status)">
                      <span class="h-1.5 w-1.5 rounded-full"
                            [class]="user.status === 'ACTIVE' ? 'bg-green-400' : user.status === 'SUSPENDED' ? 'bg-orange-400' : 'bg-red-400'"></span>
                      {{ user.status }}
                    </span>
                  </td>
                  <td class="px-6 py-4 text-gray-400 text-xs">
                    {{ user.createdAt | date:'dd MMM yyyy' }}
                  </td>
                  <td class="px-6 py-4 text-right">
                    @if (user.roleType !== 'ADMIN') {
                      <button (click)="toggleUserStatus(user)"
                              [disabled]="actionInProgress() === user.id"
                              [class]="user.status === 'ACTIVE'
                                ? 'text-xs px-3 py-1.5 rounded-lg font-medium bg-orange-500/10 text-orange-400 border border-orange-500/20 hover:bg-orange-500/20 transition-all disabled:opacity-50'
                                : 'text-xs px-3 py-1.5 rounded-lg font-medium bg-green-500/10 text-green-400 border border-green-500/20 hover:bg-green-500/20 transition-all disabled:opacity-50'">
                        @if (actionInProgress() === user.id) {
                          <svg class="animate-spin h-3 w-3 inline mr-1" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" fill="none"/><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/></svg>
                        }
                        {{ user.status === 'ACTIVE' ? 'Ask\u0131ya Al' : 'Aktif Et' }}
                      </button>
                    } @else {
                      <span class="text-xs text-gray-600">\u2014</span>
                    }
                  </td>
                </tr>
              } @empty {
                <tr>
                  <td colspan="5" class="px-6 py-12 text-center text-gray-500">
                    Araman\u0131zla e\u015Fle\u015Fen kullan\u0131c\u0131 bulunamad\u0131.
                  </td>
                </tr>
              }
            </tbody>
          </table>
        </div>

        <!-- Sayfalama -->
        @if (usersPage() !== null && usersPage()!.totalPages > 1) {
          <div class="px-6 py-4 border-t border-gray-800 flex items-center justify-between">
            <p class="text-xs text-gray-500">
              Toplam {{ usersPage()!.totalElements }} kullan\u0131c\u0131
            </p>
            <div class="flex gap-1">
              @for (p of [].constructor(usersPage()!.totalPages); track $index) {
                <button (click)="goToPage($index)"
                        [class]="currentPage() === $index
                          ? 'h-8 w-8 rounded-md bg-blue-600 text-white text-xs font-medium'
                          : 'h-8 w-8 rounded-md bg-gray-800 text-gray-400 text-xs font-medium hover:bg-gray-700 transition-colors'">
                  {{ $index + 1 }}
                </button>
              }
            </div>
          </div>
        }
      </div>
    }
  </div>
</div>
` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(UserManagement, { className: "UserManagement", filePath: "app/features/admin/users/user-management.ts", lineNumber: 14 });
})();
export {
  UserManagement
};
//# sourceMappingURL=chunk-S6NIOBZB.mjs.map
