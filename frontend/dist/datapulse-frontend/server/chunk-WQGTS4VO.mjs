import './polyfills.server.mjs';
import {
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  MaxValidator,
  MinValidator,
  NgControlStatus,
  NgControlStatusGroup,
  NgSelectOption,
  NumberValueAccessor,
  ReactiveFormsModule,
  SelectControlValueAccessor,
  Validators,
  ɵNgNoValidate,
  ɵNgSelectMultipleOption
} from "./chunk-CKOBKXXM.mjs";
import {
  UserService
} from "./chunk-MQO5QGZI.mjs";
import {
  CommonModule,
  Component,
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-JETRRDQP.mjs";
import "./chunk-T2KOBY73.mjs";

// src/app/features/individual/profile/profile-management/profile-management.ts
var _c0 = () => [1, 2, 3, 4];
function ProfileManagement_Conditional_6_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "span", 37);
    \u0275\u0275element(2, "i", 47);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Profiliniz ba\u015Far\u0131yla g\xFCncellendi! ");
    \u0275\u0275elementEnd();
  }
}
function ProfileManagement_Conditional_6_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7)(1, "span", 48);
    \u0275\u0275element(2, "i", 49);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.saveError(), " ");
  }
}
function ProfileManagement_Conditional_6_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 24);
    \u0275\u0275element(1, "i", 50);
    \u0275\u0275text(2, " Ad Soyad en az 3 karakter olmal\u0131d\u0131r. ");
    \u0275\u0275elementEnd();
  }
}
function ProfileManagement_Conditional_6_Conditional_47_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 24);
    \u0275\u0275element(1, "i", 50);
    \u0275\u0275text(2, " Ge\xE7erli bir ya\u015F giriniz (18-120). ");
    \u0275\u0275elementEnd();
  }
}
function ProfileManagement_Conditional_6_Conditional_69_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 51);
    \u0275\u0275text(1, " Kaydediliyor... ");
  }
}
function ProfileManagement_Conditional_6_Conditional_70_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 52);
    \u0275\u0275text(1, " De\u011Fi\u015Fiklikleri Kaydet ");
  }
}
function ProfileManagement_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275conditionalCreate(1, ProfileManagement_Conditional_6_Conditional_1_Template, 4, 0, "div", 6);
    \u0275\u0275conditionalCreate(2, ProfileManagement_Conditional_6_Conditional_2_Template, 4, 1, "div", 7);
    \u0275\u0275elementStart(3, "form", 8);
    \u0275\u0275listener("ngSubmit", function ProfileManagement_Conditional_6_Template_form_ngSubmit_3_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onSubmit());
    });
    \u0275\u0275elementStart(4, "div", 9);
    \u0275\u0275element(5, "div", 10);
    \u0275\u0275elementStart(6, "div", 0)(7, "div", 11)(8, "div", 12)(9, "span", 13);
    \u0275\u0275element(10, "i", 14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div")(12, "h3", 15);
    \u0275\u0275text(13, "Ki\u015Fisel Bilgiler");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "p", 16);
    \u0275\u0275text(15, "Ad\u0131n\u0131z, cinsiyetiniz ve ya\u015F\u0131n\u0131z");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(16, "div", 17)(17, "div", 18)(18, "label", 19);
    \u0275\u0275text(19, "Ad Soyad");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div", 20)(21, "div", 21);
    \u0275\u0275element(22, "i", 22);
    \u0275\u0275elementEnd();
    \u0275\u0275element(23, "input", 23);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(24, ProfileManagement_Conditional_6_Conditional_24_Template, 3, 0, "p", 24);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "div", 25)(26, "label", 26);
    \u0275\u0275text(27, "Cinsiyet");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "div", 20)(29, "div", 21);
    \u0275\u0275element(30, "i", 27);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "select", 28)(32, "option", 29);
    \u0275\u0275text(33, "Erkek");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "option", 30);
    \u0275\u0275text(35, "Kad\u0131n");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "option", 31);
    \u0275\u0275text(37, "Belirtmek \u0130stemiyorum");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(38, "div", 32);
    \u0275\u0275element(39, "i", 33);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(40, "div", 25)(41, "label", 34);
    \u0275\u0275text(42, "Ya\u015F");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "div", 20)(44, "div", 21);
    \u0275\u0275element(45, "i", 35);
    \u0275\u0275elementEnd();
    \u0275\u0275element(46, "input", 36);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(47, ProfileManagement_Conditional_6_Conditional_47_Template, 3, 0, "p", 24);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(48, "div", 11)(49, "div", 12)(50, "span", 37);
    \u0275\u0275element(51, "i", 38);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(52, "div")(53, "h3", 15);
    \u0275\u0275text(54, "Konum");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(55, "p", 16);
    \u0275\u0275text(56, "Bulundu\u011Funuz \u015Fehir");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(57, "div", 39)(58, "label", 40);
    \u0275\u0275text(59, "\u015Eehir");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(60, "div", 20)(61, "div", 21);
    \u0275\u0275element(62, "i", 41);
    \u0275\u0275elementEnd();
    \u0275\u0275element(63, "input", 42);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(64, "div", 43)(65, "p", 44);
    \u0275\u0275element(66, "i", 45);
    \u0275\u0275text(67, "Bilgileriniz g\xFCvenle saklanmaktad\u0131r. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(68, "button", 46);
    \u0275\u0275conditionalCreate(69, ProfileManagement_Conditional_6_Conditional_69_Template, 2, 0)(70, ProfileManagement_Conditional_6_Conditional_70_Template, 2, 0);
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    let tmp_4_0;
    let tmp_5_0;
    let tmp_6_0;
    let tmp_7_0;
    let tmp_8_0;
    let tmp_9_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.saveSuccess() ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.saveError() ? 2 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("formGroup", ctx_r1.profileForm);
    \u0275\u0275advance(20);
    \u0275\u0275classProp("border-red-500", ((tmp_4_0 = ctx_r1.profileForm.get("fullName")) == null ? null : tmp_4_0.invalid) && ((tmp_4_0 = ctx_r1.profileForm.get("fullName")) == null ? null : tmp_4_0.touched))("border-gray-700", !(((tmp_5_0 = ctx_r1.profileForm.get("fullName")) == null ? null : tmp_5_0.invalid) && ((tmp_5_0 = ctx_r1.profileForm.get("fullName")) == null ? null : tmp_5_0.touched)));
    \u0275\u0275advance();
    \u0275\u0275conditional(((tmp_6_0 = ctx_r1.profileForm.get("fullName")) == null ? null : tmp_6_0.invalid) && ((tmp_6_0 = ctx_r1.profileForm.get("fullName")) == null ? null : tmp_6_0.touched) ? 24 : -1);
    \u0275\u0275advance(22);
    \u0275\u0275classProp("border-red-500", ((tmp_7_0 = ctx_r1.profileForm.get("age")) == null ? null : tmp_7_0.invalid) && ((tmp_7_0 = ctx_r1.profileForm.get("age")) == null ? null : tmp_7_0.touched))("border-gray-700", !(((tmp_8_0 = ctx_r1.profileForm.get("age")) == null ? null : tmp_8_0.invalid) && ((tmp_8_0 = ctx_r1.profileForm.get("age")) == null ? null : tmp_8_0.touched)));
    \u0275\u0275advance();
    \u0275\u0275conditional(((tmp_9_0 = ctx_r1.profileForm.get("age")) == null ? null : tmp_9_0.invalid) && ((tmp_9_0 = ctx_r1.profileForm.get("age")) == null ? null : tmp_9_0.touched) ? 47 : -1);
    \u0275\u0275advance(21);
    \u0275\u0275property("disabled", ctx_r1.profileForm.invalid || ctx_r1.isSaving() || !ctx_r1.profileForm.dirty);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.isSaving() ? 69 : 70);
  }
}
function ProfileManagement_Conditional_7_For_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 25);
    \u0275\u0275element(1, "div", 60)(2, "div", 61);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const i_r3 = ctx.$implicit;
    \u0275\u0275classProp("sm:col-span-2", i_r3 === 1);
  }
}
function ProfileManagement_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5)(1, "div", 53)(2, "div", 54);
    \u0275\u0275element(3, "div", 55)(4, "div", 56);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 17);
    \u0275\u0275repeaterCreate(6, ProfileManagement_Conditional_7_For_7_Template, 3, 2, "div", 57, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 58);
    \u0275\u0275element(9, "div", 59);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(6);
    \u0275\u0275repeater(\u0275\u0275pureFunction0(0, _c0));
  }
}
var ProfileManagement = class _ProfileManagement {
  fb = inject(FormBuilder);
  userService = inject(UserService);
  profileForm;
  // signal tabanlı state — null: yükleniyor, false: hazır
  isLoading = signal(true, ...ngDevMode ? [{ debugName: "isLoading" }] : (
    /* istanbul ignore next */
    []
  ));
  isSaving = signal(false, ...ngDevMode ? [{ debugName: "isSaving" }] : (
    /* istanbul ignore next */
    []
  ));
  saveSuccess = signal(false, ...ngDevMode ? [{ debugName: "saveSuccess" }] : (
    /* istanbul ignore next */
    []
  ));
  saveError = signal("", ...ngDevMode ? [{ debugName: "saveError" }] : (
    /* istanbul ignore next */
    []
  ));
  ngOnInit() {
    this.profileForm = this.fb.group({
      fullName: ["", [Validators.required, Validators.minLength(3)]],
      gender: ["MALE"],
      age: [null, [Validators.min(18), Validators.max(120)]],
      city: [""]
    });
    this.userService.getProfile().subscribe({
      next: (profile) => {
        this.profileForm.patchValue({
          fullName: profile.fullName,
          gender: profile.gender || "MALE",
          age: profile.age,
          city: profile.city
        });
        this.isLoading.set(false);
      },
      error: () => {
        this.saveError.set("Profil bilgileri y\xFCklenirken bir hata olu\u015Ftu.");
        this.isLoading.set(false);
      }
    });
  }
  onSubmit() {
    if (this.profileForm.invalid || this.isSaving())
      return;
    this.isSaving.set(true);
    this.saveSuccess.set(false);
    this.saveError.set("");
    const request = this.profileForm.value;
    this.userService.updateProfile(request).subscribe({
      next: () => {
        this.isSaving.set(false);
        this.saveSuccess.set(true);
        this.profileForm.markAsPristine();
        setTimeout(() => this.saveSuccess.set(false), 3e3);
      },
      error: () => {
        this.isSaving.set(false);
        this.saveError.set("Profil g\xFCncellenirken bir hata olu\u015Ftu. L\xFCtfen tekrar deneyin.");
      }
    });
  }
  static \u0275fac = function ProfileManagement_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ProfileManagement)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProfileManagement, selectors: [["app-profile-management"]], decls: 8, vars: 1, consts: [[1, "p-6", "md:p-8", "space-y-8"], [1, "pb-5", "border-b", "border-white/5"], [1, "text-2xl", "font-black", "text-white", "tracking-tight"], [1, "text-gray-500", "text-sm", "mt-1"], [1, "max-w-3xl", "space-y-5"], [1, "max-w-3xl"], [1, "flex", "items-center", "gap-3", "px-4", "py-3.5", "rounded-xl", "border", "border-emerald-500/30", "text-emerald-400", "text-sm", "font-medium", 2, "background", "rgba(16,185,129,0.08)"], [1, "flex", "items-center", "gap-3", "px-4", "py-3.5", "rounded-xl", "border", "border-red-500/30", "text-red-400", "text-sm", "font-medium", 2, "background", "rgba(239,68,68,0.08)"], [3, "ngSubmit", "formGroup"], [1, "relative", "rounded-2xl", "border", "border-white/5", "overflow-hidden", 2, "background", "rgba(255,255,255,0.02)"], [1, "absolute", "top-0", "left-0", "w-full", "h-0.5", 2, "background", "linear-gradient(90deg, #3b82f6, #6366f1, #8b5cf6)"], [1, "space-y-6"], [1, "flex", "items-center", "gap-3", "pb-4", "border-b", "border-white/5"], [1, "w-8", "h-8", "rounded-lg", "flex", "items-center", "justify-center", "flex-shrink-0", 2, "background", "rgba(59,130,246,0.15)"], [1, "fas", "fa-user", "text-blue-400", "text-sm"], [1, "text-base", "font-bold", "text-white"], [1, "text-xs", "text-gray-500", "mt-0.5"], [1, "grid", "grid-cols-1", "sm:grid-cols-2", "gap-5"], [1, "space-y-2", "sm:col-span-2"], ["for", "fullName", 1, "block", "text-xs", "font-bold", "text-gray-400", "uppercase", "tracking-wider"], [1, "relative"], [1, "absolute", "inset-y-0", "left-0", "pl-4", "flex", "items-center", "pointer-events-none"], [1, "fas", "fa-id-card", "text-gray-600"], ["type", "text", "id", "fullName", "formControlName", "fullName", "placeholder", "Ad\u0131n\u0131z\u0131 ve soyad\u0131n\u0131z\u0131 girin", 1, "w-full", "bg-gray-900/60", "border", "text-white", "text-sm", "rounded-xl", "pl-11", "pr-4", "py-3", "focus:outline-none", "focus:ring-2", "focus:ring-blue-500/40", "focus:border-blue-500/60", "transition-all", "duration-200", "placeholder-gray-600"], [1, "text-red-400", "text-xs", "flex", "items-center", "gap-1.5", "mt-1"], [1, "space-y-2"], ["for", "gender", 1, "block", "text-xs", "font-bold", "text-gray-400", "uppercase", "tracking-wider"], [1, "fas", "fa-venus-mars", "text-gray-600"], ["id", "gender", "formControlName", "gender", 1, "w-full", "bg-gray-900/60", "border", "border-gray-700", "text-white", "text-sm", "rounded-xl", "pl-11", "pr-10", "py-3", "focus:outline-none", "focus:ring-2", "focus:ring-blue-500/40", "focus:border-blue-500/60", "transition-all", "duration-200", "appearance-none", "cursor-pointer"], ["value", "MALE"], ["value", "FEMALE"], ["value", "OTHER"], [1, "absolute", "inset-y-0", "right-0", "pr-4", "flex", "items-center", "pointer-events-none"], [1, "fas", "fa-chevron-down", "text-gray-600", "text-xs"], ["for", "age", 1, "block", "text-xs", "font-bold", "text-gray-400", "uppercase", "tracking-wider"], [1, "fas", "fa-birthday-cake", "text-gray-600"], ["type", "number", "id", "age", "formControlName", "age", "min", "18", "max", "120", "placeholder", "Ya\u015F\u0131n\u0131z\u0131 girin", 1, "w-full", "bg-gray-900/60", "border", "text-white", "text-sm", "rounded-xl", "pl-11", "pr-4", "py-3", "focus:outline-none", "focus:ring-2", "focus:ring-blue-500/40", "focus:border-blue-500/60", "transition-all", "duration-200", "placeholder-gray-600"], [1, "w-8", "h-8", "rounded-lg", "flex", "items-center", "justify-center", "flex-shrink-0", 2, "background", "rgba(16,185,129,0.15)"], [1, "fas", "fa-map-marker-alt", "text-emerald-400", "text-sm"], [1, "space-y-2", "max-w-sm"], ["for", "city", 1, "block", "text-xs", "font-bold", "text-gray-400", "uppercase", "tracking-wider"], [1, "fas", "fa-city", "text-gray-600"], ["type", "text", "id", "city", "formControlName", "city", "placeholder", "\xD6rn: \u0130stanbul", 1, "w-full", "bg-gray-900/60", "border", "border-gray-700", "text-white", "text-sm", "rounded-xl", "pl-11", "pr-4", "py-3", "focus:outline-none", "focus:ring-2", "focus:ring-blue-500/40", "focus:border-blue-500/60", "transition-all", "duration-200", "placeholder-gray-600"], [1, "flex", "items-center", "justify-between", "pt-4", "border-t", "border-white/5"], [1, "text-xs", "text-gray-600", "hidden", "sm:block"], [1, "fas", "fa-lock", "mr-1.5"], ["type", "submit", 1, "relative", "inline-flex", "items-center", "gap-2.5", "px-7", "py-3", "rounded-xl", "text-sm", "font-bold", "text-white", "transition-all", "duration-200", "disabled:opacity-40", "disabled:cursor-not-allowed", "hover:shadow-lg", "active:scale-95", 2, "background", "linear-gradient(135deg, #3b82f6, #6366f1)", 3, "disabled"], [1, "fas", "fa-check-circle"], [1, "w-8", "h-8", "rounded-lg", "flex", "items-center", "justify-center", "flex-shrink-0", 2, "background", "rgba(239,68,68,0.15)"], [1, "fas", "fa-exclamation-circle"], [1, "fas", "fa-exclamation-triangle"], [1, "fas", "fa-circle-notch", "fa-spin"], [1, "fas", "fa-save"], [1, "rounded-2xl", "border", "border-white/5", "p-6", "md:p-8", "animate-pulse", 2, "background", "rgba(255,255,255,0.02)"], [1, "flex", "items-center", "gap-3", "mb-8", "pb-4", "border-b", "border-white/5"], [1, "w-8", "h-8", "bg-gray-800", "rounded-lg"], [1, "h-5", "bg-gray-700", "rounded-lg", "w-1/3"], [1, "space-y-2", 3, "sm:col-span-2"], [1, "flex", "justify-end", "mt-8", "pt-4", "border-t", "border-white/5"], [1, "h-12", "w-48", "bg-gray-700", "rounded-xl"], [1, "h-3", "bg-gray-800", "rounded", "w-1/4"], [1, "h-12", "bg-gray-800", "rounded-xl", "w-full"]], template: function ProfileManagement_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h2", 2);
      \u0275\u0275text(3, "Profil Y\xF6netimi");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "p", 3);
      \u0275\u0275text(5, "Ki\u015Fisel bilgilerinizi ve ileti\u015Fim detaylar\u0131n\u0131z\u0131 g\xFCncelleyin");
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(6, ProfileManagement_Conditional_6_Template, 71, 15, "div", 4)(7, ProfileManagement_Conditional_7_Template, 10, 1, "div", 5);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(6);
      \u0275\u0275conditional(!ctx.isLoading() ? 6 : 7);
    }
  }, dependencies: [CommonModule, ReactiveFormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, MinValidator, MaxValidator, FormGroupDirective, FormControlName], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProfileManagement, [{
    type: Component,
    args: [{ selector: "app-profile-management", standalone: true, imports: [CommonModule, ReactiveFormsModule], template: `<div class="p-6 md:p-8 space-y-8">

  <!-- Page Header -->
  <div class="pb-5 border-b border-white/5">
    <h2 class="text-2xl font-black text-white tracking-tight">Profil Y\xF6netimi</h2>
    <p class="text-gray-500 text-sm mt-1">Ki\u015Fisel bilgilerinizi ve ileti\u015Fim detaylar\u0131n\u0131z\u0131 g\xFCncelleyin</p>
  </div>

  @if (!isLoading()) {
    <div class="max-w-3xl space-y-5">

      <!-- Bildirimler -->
      @if (saveSuccess()) {
        <div class="flex items-center gap-3 px-4 py-3.5 rounded-xl border border-emerald-500/30 text-emerald-400 text-sm font-medium"
             style="background: rgba(16,185,129,0.08);">
          <span class="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                style="background: rgba(16,185,129,0.15);">
            <i class="fas fa-check-circle"></i>
          </span>
          Profiliniz ba\u015Far\u0131yla g\xFCncellendi!
        </div>
      }
      @if (saveError()) {
        <div class="flex items-center gap-3 px-4 py-3.5 rounded-xl border border-red-500/30 text-red-400 text-sm font-medium"
             style="background: rgba(239,68,68,0.08);">
          <span class="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                style="background: rgba(239,68,68,0.15);">
            <i class="fas fa-exclamation-circle"></i>
          </span>
          {{ saveError() }}
        </div>
      }

      <!-- Form -->
      <form [formGroup]="profileForm" (ngSubmit)="onSubmit()">
        <div class="relative rounded-2xl border border-white/5 overflow-hidden"
             style="background: rgba(255,255,255,0.02);">
          <div class="absolute top-0 left-0 w-full h-0.5"
               style="background: linear-gradient(90deg, #3b82f6, #6366f1, #8b5cf6);"></div>

          <div class="p-6 md:p-8 space-y-8">

            <!-- Ki\u015Fisel Bilgiler Section -->
            <div class="space-y-6">
              <div class="flex items-center gap-3 pb-4 border-b border-white/5">
                <span class="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                      style="background: rgba(59,130,246,0.15);">
                  <i class="fas fa-user text-blue-400 text-sm"></i>
                </span>
                <div>
                  <h3 class="text-base font-bold text-white">Ki\u015Fisel Bilgiler</h3>
                  <p class="text-xs text-gray-500 mt-0.5">Ad\u0131n\u0131z, cinsiyetiniz ve ya\u015F\u0131n\u0131z</p>
                </div>
              </div>

              <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">

                <!-- Ad Soyad -->
                <div class="space-y-2 sm:col-span-2">
                  <label for="fullName" class="block text-xs font-bold text-gray-400 uppercase tracking-wider">Ad Soyad</label>
                  <div class="relative">
                    <div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <i class="fas fa-id-card text-gray-600"></i>
                    </div>
                    <input type="text" id="fullName" formControlName="fullName"
                      placeholder="Ad\u0131n\u0131z\u0131 ve soyad\u0131n\u0131z\u0131 girin"
                      class="w-full bg-gray-900/60 border text-white text-sm rounded-xl pl-11 pr-4 py-3
                             focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-blue-500/60
                             transition-all duration-200 placeholder-gray-600"
                      [class.border-red-500]="profileForm.get('fullName')?.invalid && profileForm.get('fullName')?.touched"
                      [class.border-gray-700]="!(profileForm.get('fullName')?.invalid && profileForm.get('fullName')?.touched)">
                  </div>
                  @if (profileForm.get('fullName')?.invalid && profileForm.get('fullName')?.touched) {
                    <p class="text-red-400 text-xs flex items-center gap-1.5 mt-1">
                      <i class="fas fa-exclamation-triangle"></i> Ad Soyad en az 3 karakter olmal\u0131d\u0131r.
                    </p>
                  }
                </div>

                <!-- Cinsiyet -->
                <div class="space-y-2">
                  <label for="gender" class="block text-xs font-bold text-gray-400 uppercase tracking-wider">Cinsiyet</label>
                  <div class="relative">
                    <div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <i class="fas fa-venus-mars text-gray-600"></i>
                    </div>
                    <select id="gender" formControlName="gender"
                      class="w-full bg-gray-900/60 border border-gray-700 text-white text-sm rounded-xl pl-11 pr-10 py-3
                             focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-blue-500/60
                             transition-all duration-200 appearance-none cursor-pointer">
                      <option value="MALE">Erkek</option>
                      <option value="FEMALE">Kad\u0131n</option>
                      <option value="OTHER">Belirtmek \u0130stemiyorum</option>
                    </select>
                    <div class="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none">
                      <i class="fas fa-chevron-down text-gray-600 text-xs"></i>
                    </div>
                  </div>
                </div>

                <!-- Ya\u015F -->
                <div class="space-y-2">
                  <label for="age" class="block text-xs font-bold text-gray-400 uppercase tracking-wider">Ya\u015F</label>
                  <div class="relative">
                    <div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <i class="fas fa-birthday-cake text-gray-600"></i>
                    </div>
                    <input type="number" id="age" formControlName="age" min="18" max="120"
                      placeholder="Ya\u015F\u0131n\u0131z\u0131 girin"
                      class="w-full bg-gray-900/60 border text-white text-sm rounded-xl pl-11 pr-4 py-3
                             focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-blue-500/60
                             transition-all duration-200 placeholder-gray-600"
                      [class.border-red-500]="profileForm.get('age')?.invalid && profileForm.get('age')?.touched"
                      [class.border-gray-700]="!(profileForm.get('age')?.invalid && profileForm.get('age')?.touched)">
                  </div>
                  @if (profileForm.get('age')?.invalid && profileForm.get('age')?.touched) {
                    <p class="text-red-400 text-xs flex items-center gap-1.5 mt-1">
                      <i class="fas fa-exclamation-triangle"></i> Ge\xE7erli bir ya\u015F giriniz (18-120).
                    </p>
                  }
                </div>

              </div>
            </div>

            <!-- Konum Section -->
            <div class="space-y-6">
              <div class="flex items-center gap-3 pb-4 border-b border-white/5">
                <span class="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                      style="background: rgba(16,185,129,0.15);">
                  <i class="fas fa-map-marker-alt text-emerald-400 text-sm"></i>
                </span>
                <div>
                  <h3 class="text-base font-bold text-white">Konum</h3>
                  <p class="text-xs text-gray-500 mt-0.5">Bulundu\u011Funuz \u015Fehir</p>
                </div>
              </div>

              <!-- \u015Eehir -->
              <div class="space-y-2 max-w-sm">
                <label for="city" class="block text-xs font-bold text-gray-400 uppercase tracking-wider">\u015Eehir</label>
                <div class="relative">
                  <div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <i class="fas fa-city text-gray-600"></i>
                  </div>
                  <input type="text" id="city" formControlName="city"
                    placeholder="\xD6rn: \u0130stanbul"
                    class="w-full bg-gray-900/60 border border-gray-700 text-white text-sm rounded-xl pl-11 pr-4 py-3
                           focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-blue-500/60
                           transition-all duration-200 placeholder-gray-600">
                </div>
              </div>
            </div>

            <!-- Submit -->
            <div class="flex items-center justify-between pt-4 border-t border-white/5">
              <p class="text-xs text-gray-600 hidden sm:block">
                <i class="fas fa-lock mr-1.5"></i>Bilgileriniz g\xFCvenle saklanmaktad\u0131r.
              </p>
              <button type="submit"
                [disabled]="profileForm.invalid || isSaving() || !profileForm.dirty"
                class="relative inline-flex items-center gap-2.5 px-7 py-3 rounded-xl text-sm font-bold text-white
                       transition-all duration-200 disabled:opacity-40 disabled:cursor-not-allowed
                       hover:shadow-lg active:scale-95"
                style="background: linear-gradient(135deg, #3b82f6, #6366f1);">
                @if (isSaving()) {
                  <i class="fas fa-circle-notch fa-spin"></i> Kaydediliyor...
                } @else {
                  <i class="fas fa-save"></i> De\u011Fi\u015Fiklikleri Kaydet
                }
              </button>
            </div>

          </div>
        </div>
      </form>
    </div>

  } @else {
    <!-- Skeleton Loader -->
    <div class="max-w-3xl">
      <div class="rounded-2xl border border-white/5 p-6 md:p-8 animate-pulse" style="background: rgba(255,255,255,0.02);">
        <div class="flex items-center gap-3 mb-8 pb-4 border-b border-white/5">
          <div class="w-8 h-8 bg-gray-800 rounded-lg"></div>
          <div class="h-5 bg-gray-700 rounded-lg w-1/3"></div>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
          @for (i of [1, 2, 3, 4]; track i) {
            <div class="space-y-2" [class.sm:col-span-2]="i === 1">
              <div class="h-3 bg-gray-800 rounded w-1/4"></div>
              <div class="h-12 bg-gray-800 rounded-xl w-full"></div>
            </div>
          }
        </div>
        <div class="flex justify-end mt-8 pt-4 border-t border-white/5">
          <div class="h-12 w-48 bg-gray-700 rounded-xl"></div>
        </div>
      </div>
    </div>
  }

</div>
` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProfileManagement, { className: "ProfileManagement", filePath: "app/features/individual/profile/profile-management/profile-management.ts", lineNumber: 12 });
})();
export {
  ProfileManagement
};
//# sourceMappingURL=chunk-WQGTS4VO.mjs.map
