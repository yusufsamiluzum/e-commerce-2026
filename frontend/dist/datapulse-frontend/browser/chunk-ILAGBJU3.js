import {
  UserService
} from "./chunk-M7X4I4M4.js";
import {
  toSignal
} from "./chunk-XHSYZCYO.js";
import {
  CommonModule,
  Component,
  DatePipe,
  catchError,
  inject,
  of,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdomElement,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵpureFunction0,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-OBD62CNA.js";
import "./chunk-H2SRQSE4.js";

// src/app/features/individual/profile/user-profile/user-profile.ts
var _c0 = () => [1, 2];
var _c1 = () => [1, 2, 3, 4];
function UserProfile_Conditional_10_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "span", 17);
    \u0275\u0275domElement(1, "i", 38);
    \u0275\u0275text(2);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const profile_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", profile_r1.city, " ");
  }
}
function UserProfile_Conditional_10_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "span", 17);
    \u0275\u0275domElement(1, "i", 39);
    \u0275\u0275text(2);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const profile_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", profile_r1.age, " ya\u015F\u0131nda ");
  }
}
function UserProfile_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 6);
    \u0275\u0275domElement(1, "div", 7);
    \u0275\u0275domElementStart(2, "div", 8)(3, "div", 9)(4, "div", 10);
    \u0275\u0275text(5);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElement(6, "span", 11);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(7, "div", 12)(8, "h3", 13);
    \u0275\u0275text(9);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(10, "p", 14);
    \u0275\u0275domElement(11, "i", 15);
    \u0275\u0275text(12);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(13, "div", 16);
    \u0275\u0275conditionalCreate(14, UserProfile_Conditional_10_Conditional_14_Template, 3, 1, "span", 17);
    \u0275\u0275conditionalCreate(15, UserProfile_Conditional_10_Conditional_15_Template, 3, 1, "span", 17);
    \u0275\u0275domElementStart(16, "span", 18);
    \u0275\u0275domElement(17, "span", 19);
    \u0275\u0275text(18);
    \u0275\u0275domElementEnd()()()()();
    \u0275\u0275domElementStart(19, "div", 20)(20, "div", 21);
    \u0275\u0275domElement(21, "div", 22);
    \u0275\u0275domElementStart(22, "h3", 23)(23, "span", 24);
    \u0275\u0275domElement(24, "i", 25);
    \u0275\u0275domElementEnd();
    \u0275\u0275text(25, " Ki\u015Fisel Bilgiler ");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(26, "div", 26)(27, "div", 27)(28, "span", 28);
    \u0275\u0275text(29, "Ad Soyad");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(30, "span", 29);
    \u0275\u0275text(31);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(32, "div", 27)(33, "span", 28);
    \u0275\u0275text(34, "E-posta");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(35, "span", 30);
    \u0275\u0275text(36);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(37, "div", 27)(38, "span", 28);
    \u0275\u0275text(39, "Cinsiyet");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(40, "span", 31);
    \u0275\u0275text(41);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(42, "div", 32)(43, "span", 28);
    \u0275\u0275text(44, "Ya\u015F");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(45, "span", 31);
    \u0275\u0275text(46);
    \u0275\u0275domElementEnd()()()();
    \u0275\u0275domElementStart(47, "div", 33);
    \u0275\u0275domElement(48, "div", 34);
    \u0275\u0275domElementStart(49, "h3", 23)(50, "span", 35);
    \u0275\u0275domElement(51, "i", 36);
    \u0275\u0275domElementEnd();
    \u0275\u0275text(52, " Hesap Durumu ");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(53, "div", 26)(54, "div", 27)(55, "span", 28);
    \u0275\u0275text(56, "Hesap T\xFCr\xFC");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(57, "span", 29);
    \u0275\u0275text(58);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(59, "div", 27)(60, "span", 28);
    \u0275\u0275text(61, "Durum");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(62, "span", 37);
    \u0275\u0275domElement(63, "span", 19);
    \u0275\u0275text(64);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(65, "div", 27)(66, "span", 28);
    \u0275\u0275text(67, "Kay\u0131t Tarihi");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(68, "span", 31);
    \u0275\u0275text(69);
    \u0275\u0275pipe(70, "date");
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(71, "div", 32)(72, "span", 28);
    \u0275\u0275text(73, "\u015Eehir");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(74, "span", 31);
    \u0275\u0275text(75);
    \u0275\u0275domElementEnd()()()()();
  }
  if (rf & 2) {
    const profile_r1 = ctx;
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", (profile_r1.fullName || "U").charAt(0).toUpperCase(), " ");
    \u0275\u0275advance();
    \u0275\u0275classProp("bg-emerald-400", profile_r1.status === "ACTIVE")("bg-red-400", profile_r1.status !== "ACTIVE");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(profile_r1.fullName);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", profile_r1.email, " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(profile_r1.city ? 14 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(profile_r1.age ? 15 : -1);
    \u0275\u0275advance();
    \u0275\u0275classMap(profile_r1.status === "ACTIVE" ? "text-emerald-400 border-emerald-500/30 bg-emerald-500/10" : "text-red-400 border-red-500/30 bg-red-500/10");
    \u0275\u0275advance();
    \u0275\u0275classProp("bg-emerald-400", profile_r1.status === "ACTIVE")("bg-red-400", profile_r1.status !== "ACTIVE");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", profile_r1.status === "ACTIVE" ? "Aktif" : profile_r1.status, " ");
    \u0275\u0275advance(13);
    \u0275\u0275textInterpolate(profile_r1.fullName);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(profile_r1.email);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(profile_r1.gender || "Belirtilmedi");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(profile_r1.age ? profile_r1.age + " ya\u015F\u0131nda" : "Belirtilmedi");
    \u0275\u0275advance(12);
    \u0275\u0275textInterpolate(profile_r1.roleType);
    \u0275\u0275advance(4);
    \u0275\u0275classMap(profile_r1.status === "ACTIVE" ? "text-emerald-400 border-emerald-500/30 bg-emerald-500/10" : "text-red-400 border-red-500/30 bg-red-500/10");
    \u0275\u0275advance();
    \u0275\u0275classProp("bg-emerald-400", profile_r1.status === "ACTIVE")("bg-red-400", profile_r1.status !== "ACTIVE");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", profile_r1.status === "ACTIVE" ? "Aktif" : profile_r1.status, " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(70, 30, profile_r1.createdAt, "mediumDate"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(profile_r1.city || "Belirtilmedi");
  }
}
function UserProfile_Conditional_11_For_11_For_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 27);
    \u0275\u0275domElement(1, "div", 53)(2, "div", 54);
    \u0275\u0275domElementEnd();
  }
}
function UserProfile_Conditional_11_For_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 49)(1, "div", 50);
    \u0275\u0275domElement(2, "div", 51)(3, "div", 52);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(4, "div", 26);
    \u0275\u0275repeaterCreate(5, UserProfile_Conditional_11_For_11_For_6_Template, 3, 0, "div", 27, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(5);
    \u0275\u0275repeater(\u0275\u0275pureFunction0(0, _c1));
  }
}
function UserProfile_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 40)(1, "div", 41);
    \u0275\u0275domElement(2, "div", 42);
    \u0275\u0275domElementStart(3, "div", 43);
    \u0275\u0275domElement(4, "div", 44)(5, "div", 45);
    \u0275\u0275domElementStart(6, "div", 46);
    \u0275\u0275domElement(7, "div", 47)(8, "div", 48);
    \u0275\u0275domElementEnd()()()();
    \u0275\u0275domElementStart(9, "div", 20);
    \u0275\u0275repeaterCreate(10, UserProfile_Conditional_11_For_11_Template, 7, 1, "div", 49, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(10);
    \u0275\u0275repeater(\u0275\u0275pureFunction0(0, _c0));
  }
}
var UserProfile = class _UserProfile {
  userService = inject(UserService);
  profile = toSignal(this.userService.getProfile().pipe(catchError(() => of(null))), { initialValue: null });
  static \u0275fac = function UserProfile_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _UserProfile)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _UserProfile, selectors: [["app-user-profile"]], decls: 12, vars: 1, consts: [[1, "p-6", "md:p-8", "space-y-8"], [1, "flex", "items-center", "justify-between", "pb-5", "border-b", "border-white/5"], [1, "text-2xl", "font-black", "text-white", "tracking-tight"], [1, "text-gray-500", "text-sm", "mt-1"], [1, "hidden", "sm:inline-flex", "items-center", "gap-1.5", "px-3", "py-1.5", "rounded-full", "text-xs", "font-bold", "uppercase", "tracking-wider", "text-blue-300", "border", "border-blue-500/30", 2, "background", "rgba(59,130,246,0.1)"], [1, "w-1.5", "h-1.5", "rounded-full", "bg-blue-400"], [1, "relative", "rounded-2xl", "overflow-hidden", "border", "border-white/5", "p-6", "md:p-8", 2, "background", "linear-gradient(135deg, rgba(59,130,246,0.12) 0%, rgba(99,102,241,0.08) 50%, rgba(17,24,39,0) 100%)"], [1, "absolute", "top-0", "right-0", "w-64", "h-64", "rounded-full", "opacity-10", "pointer-events-none", 2, "background", "radial-gradient(circle, #3b82f6, transparent)", "transform", "translate(30%, -30%)"], [1, "relative", "flex", "flex-col", "sm:flex-row", "items-start", "sm:items-center", "gap-6"], [1, "relative", "flex-shrink-0"], [1, "w-20", "h-20", "md:w-24", "md:h-24", "rounded-2xl", "flex", "items-center", "justify-center", "text-3xl", "md:text-4xl", "font-black", "text-white", "shadow-2xl", 2, "background", "linear-gradient(135deg, #3b82f6 0%, #6366f1 100%)"], [1, "absolute", "-bottom-1", "-right-1", "w-5", "h-5", "rounded-full", "bg-emerald-400", "border-2", "border-gray-900", "shadow"], [1, "flex-1", "min-w-0"], [1, "text-2xl", "md:text-3xl", "font-black", "text-white", "leading-tight", "truncate"], [1, "text-blue-400", "mt-1", "text-sm", "font-medium", "flex", "items-center", "gap-2"], [1, "fas", "fa-envelope", "text-xs"], [1, "mt-3", "flex", "flex-wrap", "gap-2"], [1, "inline-flex", "items-center", "gap-1.5", "px-3", "py-1", "rounded-lg", "text-xs", "font-semibold", "text-gray-300", "border", "border-gray-700/60", "bg-gray-800/60"], [1, "inline-flex", "items-center", "gap-1.5", "px-3", "py-1", "rounded-lg", "text-xs", "font-semibold", "border"], [1, "w-1.5", "h-1.5", "rounded-full"], [1, "grid", "grid-cols-1", "md:grid-cols-2", "gap-5"], [1, "relative", "rounded-2xl", "border", "border-white/5", "p-6", "overflow-hidden", "group", "hover:border-blue-500/20", "transition-colors", "duration-300", 2, "background", "rgba(255,255,255,0.02)"], [1, "absolute", "top-0", "left-0", "w-full", "h-0.5", "rounded-t-2xl", 2, "background", "linear-gradient(90deg, #3b82f6, #6366f1)"], [1, "text-base", "font-bold", "text-white", "flex", "items-center", "gap-3", "mb-5"], [1, "w-8", "h-8", "rounded-lg", "flex", "items-center", "justify-center", 2, "background", "rgba(59,130,246,0.15)"], [1, "fas", "fa-id-card", "text-blue-400", "text-sm"], [1, "space-y-4"], [1, "flex", "items-center", "justify-between", "py-3", "border-b", "border-white/5"], [1, "text-xs", "font-semibold", "text-gray-500", "uppercase", "tracking-wider"], [1, "text-sm", "font-semibold", "text-gray-200"], [1, "text-sm", "font-medium", "text-gray-300", "truncate", "max-w-[180px]"], [1, "text-sm", "font-medium", "text-gray-300"], [1, "flex", "items-center", "justify-between", "py-3"], [1, "relative", "rounded-2xl", "border", "border-white/5", "p-6", "overflow-hidden", "group", "hover:border-indigo-500/20", "transition-colors", "duration-300", 2, "background", "rgba(255,255,255,0.02)"], [1, "absolute", "top-0", "left-0", "w-full", "h-0.5", "rounded-t-2xl", 2, "background", "linear-gradient(90deg, #6366f1, #8b5cf6)"], [1, "w-8", "h-8", "rounded-lg", "flex", "items-center", "justify-center", 2, "background", "rgba(99,102,241,0.15)"], [1, "fas", "fa-shield-alt", "text-indigo-400", "text-sm"], [1, "inline-flex", "items-center", "gap-1.5", "px-2.5", "py-1", "rounded-lg", "text-xs", "font-bold", "border"], [1, "fas", "fa-map-marker-alt", "text-gray-500"], [1, "fas", "fa-birthday-cake", "text-gray-500"], [1, "relative", "rounded-2xl", "border", "border-white/5", "p-6", "md:p-8", "animate-pulse", 2, "background", "rgba(255,255,255,0.02)"], [1, "flex", "flex-col", "sm:flex-row", "items-start", "sm:items-center", "gap-6"], [1, "w-20", "h-20", "md:w-24", "md:h-24", "rounded-2xl", "bg-gray-800", "flex-shrink-0"], [1, "flex-1", "space-y-3"], [1, "h-7", "bg-gray-700", "rounded-xl", "w-2/5"], [1, "h-4", "bg-gray-800", "rounded-lg", "w-1/3"], [1, "flex", "gap-2", "mt-2"], [1, "h-7", "bg-gray-800", "rounded-lg", "w-24"], [1, "h-7", "bg-gray-800", "rounded-lg", "w-20"], [1, "rounded-2xl", "border", "border-white/5", "p-6", "animate-pulse", 2, "background", "rgba(255,255,255,0.02)"], [1, "flex", "items-center", "gap-3", "mb-6"], [1, "w-8", "h-8", "bg-gray-800", "rounded-lg"], [1, "h-5", "bg-gray-700", "rounded-lg", "w-1/3"], [1, "h-3", "bg-gray-800", "rounded", "w-1/4"], [1, "h-4", "bg-gray-700", "rounded", "w-1/3"]], template: function UserProfile_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h2", 2);
      \u0275\u0275text(4, "Kullan\u0131c\u0131 Profili");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(5, "p", 3);
      \u0275\u0275text(6, "Hesap bilgileri ve ki\u015Fisel detaylar\u0131n\u0131z");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(7, "span", 4);
      \u0275\u0275domElement(8, "span", 5);
      \u0275\u0275text(9, "Bireysel M\xFC\u015Fteri ");
      \u0275\u0275domElementEnd()();
      \u0275\u0275conditionalCreate(10, UserProfile_Conditional_10_Template, 76, 33)(11, UserProfile_Conditional_11_Template, 12, 1);
      \u0275\u0275domElementEnd();
    }
    if (rf & 2) {
      let tmp_0_0;
      \u0275\u0275advance(10);
      \u0275\u0275conditional((tmp_0_0 = ctx.profile()) ? 10 : 11, tmp_0_0);
    }
  }, dependencies: [CommonModule, DatePipe], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UserProfile, [{
    type: Component,
    args: [{ selector: "app-user-profile", standalone: true, imports: [CommonModule], template: `<div class="p-6 md:p-8 space-y-8">

  <!-- Page Header -->
  <div class="flex items-center justify-between pb-5 border-b border-white/5">
    <div>
      <h2 class="text-2xl font-black text-white tracking-tight">Kullan\u0131c\u0131 Profili</h2>
      <p class="text-gray-500 text-sm mt-1">Hesap bilgileri ve ki\u015Fisel detaylar\u0131n\u0131z</p>
    </div>
    <span class="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-blue-300 border border-blue-500/30"
          style="background: rgba(59,130,246,0.1);">
      <span class="w-1.5 h-1.5 rounded-full bg-blue-400"></span>Bireysel M\xFC\u015Fteri
    </span>
  </div>

  @if (profile(); as profile) {

    <!-- Hero: Avatar + \xD6zet -->
    <div class="relative rounded-2xl overflow-hidden border border-white/5 p-6 md:p-8"
         style="background: linear-gradient(135deg, rgba(59,130,246,0.12) 0%, rgba(99,102,241,0.08) 50%, rgba(17,24,39,0) 100%);">
      <!-- Decorative glow -->
      <div class="absolute top-0 right-0 w-64 h-64 rounded-full opacity-10 pointer-events-none"
           style="background: radial-gradient(circle, #3b82f6, transparent); transform: translate(30%, -30%);"></div>

      <div class="relative flex flex-col sm:flex-row items-start sm:items-center gap-6">
        <!-- Avatar -->
        <div class="relative flex-shrink-0">
          <div class="w-20 h-20 md:w-24 md:h-24 rounded-2xl flex items-center justify-center text-3xl md:text-4xl font-black text-white shadow-2xl"
               style="background: linear-gradient(135deg, #3b82f6 0%, #6366f1 100%);">
            {{ (profile.fullName || 'U').charAt(0).toUpperCase() }}
          </div>
          <span class="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-emerald-400 border-2 border-gray-900 shadow"
                [class.bg-emerald-400]="profile.status === 'ACTIVE'"
                [class.bg-red-400]="profile.status !== 'ACTIVE'">
          </span>
        </div>

        <!-- \u0130sim + Bilgiler -->
        <div class="flex-1 min-w-0">
          <h3 class="text-2xl md:text-3xl font-black text-white leading-tight truncate">{{ profile.fullName }}</h3>
          <p class="text-blue-400 mt-1 text-sm font-medium flex items-center gap-2">
            <i class="fas fa-envelope text-xs"></i>{{ profile.email }}
          </p>
          <div class="mt-3 flex flex-wrap gap-2">
            @if (profile.city) {
              <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-semibold text-gray-300 border border-gray-700/60 bg-gray-800/60">
                <i class="fas fa-map-marker-alt text-gray-500"></i>{{ profile.city }}
              </span>
            }
            @if (profile.age) {
              <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-semibold text-gray-300 border border-gray-700/60 bg-gray-800/60">
                <i class="fas fa-birthday-cake text-gray-500"></i>{{ profile.age }} ya\u015F\u0131nda
              </span>
            }
            <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-semibold border"
                  [class]="profile.status === 'ACTIVE'
                    ? 'text-emerald-400 border-emerald-500/30 bg-emerald-500/10'
                    : 'text-red-400 border-red-500/30 bg-red-500/10'">
              <span class="w-1.5 h-1.5 rounded-full"
                    [class.bg-emerald-400]="profile.status === 'ACTIVE'"
                    [class.bg-red-400]="profile.status !== 'ACTIVE'"></span>
              {{ profile.status === 'ACTIVE' ? 'Aktif' : profile.status }}
            </span>
          </div>
        </div>
      </div>
    </div>

    <!-- Bilgi Kartlar\u0131 -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-5">

      <!-- Ki\u015Fisel Bilgiler -->
      <div class="relative rounded-2xl border border-white/5 p-6 overflow-hidden group hover:border-blue-500/20 transition-colors duration-300"
           style="background: rgba(255,255,255,0.02);">
        <div class="absolute top-0 left-0 w-full h-0.5 rounded-t-2xl"
             style="background: linear-gradient(90deg, #3b82f6, #6366f1);"></div>

        <h3 class="text-base font-bold text-white flex items-center gap-3 mb-5">
          <span class="w-8 h-8 rounded-lg flex items-center justify-center"
                style="background: rgba(59,130,246,0.15);">
            <i class="fas fa-id-card text-blue-400 text-sm"></i>
          </span>
          Ki\u015Fisel Bilgiler
        </h3>

        <div class="space-y-4">
          <div class="flex items-center justify-between py-3 border-b border-white/5">
            <span class="text-xs font-semibold text-gray-500 uppercase tracking-wider">Ad Soyad</span>
            <span class="text-sm font-semibold text-gray-200">{{ profile.fullName }}</span>
          </div>
          <div class="flex items-center justify-between py-3 border-b border-white/5">
            <span class="text-xs font-semibold text-gray-500 uppercase tracking-wider">E-posta</span>
            <span class="text-sm font-medium text-gray-300 truncate max-w-[180px]">{{ profile.email }}</span>
          </div>
          <div class="flex items-center justify-between py-3 border-b border-white/5">
            <span class="text-xs font-semibold text-gray-500 uppercase tracking-wider">Cinsiyet</span>
            <span class="text-sm font-medium text-gray-300">{{ profile.gender || 'Belirtilmedi' }}</span>
          </div>
          <div class="flex items-center justify-between py-3">
            <span class="text-xs font-semibold text-gray-500 uppercase tracking-wider">Ya\u015F</span>
            <span class="text-sm font-medium text-gray-300">{{ profile.age ? profile.age + ' ya\u015F\u0131nda' : 'Belirtilmedi' }}</span>
          </div>
        </div>
      </div>

      <!-- Hesap Durumu -->
      <div class="relative rounded-2xl border border-white/5 p-6 overflow-hidden group hover:border-indigo-500/20 transition-colors duration-300"
           style="background: rgba(255,255,255,0.02);">
        <div class="absolute top-0 left-0 w-full h-0.5 rounded-t-2xl"
             style="background: linear-gradient(90deg, #6366f1, #8b5cf6);"></div>

        <h3 class="text-base font-bold text-white flex items-center gap-3 mb-5">
          <span class="w-8 h-8 rounded-lg flex items-center justify-center"
                style="background: rgba(99,102,241,0.15);">
            <i class="fas fa-shield-alt text-indigo-400 text-sm"></i>
          </span>
          Hesap Durumu
        </h3>

        <div class="space-y-4">
          <div class="flex items-center justify-between py-3 border-b border-white/5">
            <span class="text-xs font-semibold text-gray-500 uppercase tracking-wider">Hesap T\xFCr\xFC</span>
            <span class="text-sm font-semibold text-gray-200">{{ profile.roleType }}</span>
          </div>
          <div class="flex items-center justify-between py-3 border-b border-white/5">
            <span class="text-xs font-semibold text-gray-500 uppercase tracking-wider">Durum</span>
            <span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-bold border"
                  [class]="profile.status === 'ACTIVE'
                    ? 'text-emerald-400 border-emerald-500/30 bg-emerald-500/10'
                    : 'text-red-400 border-red-500/30 bg-red-500/10'">
              <span class="w-1.5 h-1.5 rounded-full"
                    [class.bg-emerald-400]="profile.status === 'ACTIVE'"
                    [class.bg-red-400]="profile.status !== 'ACTIVE'"></span>
              {{ profile.status === 'ACTIVE' ? 'Aktif' : profile.status }}
            </span>
          </div>
          <div class="flex items-center justify-between py-3 border-b border-white/5">
            <span class="text-xs font-semibold text-gray-500 uppercase tracking-wider">Kay\u0131t Tarihi</span>
            <span class="text-sm font-medium text-gray-300">{{ profile.createdAt | date:'mediumDate' }}</span>
          </div>
          <div class="flex items-center justify-between py-3">
            <span class="text-xs font-semibold text-gray-500 uppercase tracking-wider">\u015Eehir</span>
            <span class="text-sm font-medium text-gray-300">{{ profile.city || 'Belirtilmedi' }}</span>
          </div>
        </div>
      </div>
    </div>

  } @else {
    <!-- Skeleton Loader -->
    <div class="relative rounded-2xl border border-white/5 p-6 md:p-8 animate-pulse"
         style="background: rgba(255,255,255,0.02);">
      <div class="flex flex-col sm:flex-row items-start sm:items-center gap-6">
        <div class="w-20 h-20 md:w-24 md:h-24 rounded-2xl bg-gray-800 flex-shrink-0"></div>
        <div class="flex-1 space-y-3">
          <div class="h-7 bg-gray-700 rounded-xl w-2/5"></div>
          <div class="h-4 bg-gray-800 rounded-lg w-1/3"></div>
          <div class="flex gap-2 mt-2">
            <div class="h-7 bg-gray-800 rounded-lg w-24"></div>
            <div class="h-7 bg-gray-800 rounded-lg w-20"></div>
          </div>
        </div>
      </div>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
      @for (i of [1, 2]; track i) {
        <div class="rounded-2xl border border-white/5 p-6 animate-pulse" style="background: rgba(255,255,255,0.02);">
          <div class="flex items-center gap-3 mb-6">
            <div class="w-8 h-8 bg-gray-800 rounded-lg"></div>
            <div class="h-5 bg-gray-700 rounded-lg w-1/3"></div>
          </div>
          <div class="space-y-4">
            @for (j of [1, 2, 3, 4]; track j) {
              <div class="flex items-center justify-between py-3 border-b border-white/5">
                <div class="h-3 bg-gray-800 rounded w-1/4"></div>
                <div class="h-4 bg-gray-700 rounded w-1/3"></div>
              </div>
            }
          </div>
        </div>
      }
    </div>
  }

</div>
` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(UserProfile, { className: "UserProfile", filePath: "app/features/individual/profile/user-profile/user-profile.ts", lineNumber: 15 });
})();
export {
  UserProfile
};
//# sourceMappingURL=chunk-ILAGBJU3.js.map
