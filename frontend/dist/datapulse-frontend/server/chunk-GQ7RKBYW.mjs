import './polyfills.server.mjs';
import {
  AuthService
} from "./chunk-3Y3G2XM7.mjs";
import {
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  NgControlStatus,
  NgControlStatusGroup,
  ReactiveFormsModule,
  RequiredValidator,
  Validators,
  ɵNgNoValidate
} from "./chunk-ZZHQPMHV.mjs";
import {
  Router,
  RouterLink,
  RouterModule
} from "./chunk-6SS2UPAN.mjs";
import "./chunk-P2EBPDNO.mjs";
import {
  CommonModule,
  Component,
  NgIf,
  NgModule,
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
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
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-K2NYDLGG.mjs";
import "./chunk-T2KOBY73.mjs";

// src/app/features/auth/pages/login/login.ts
function LoginComponent_div_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 15);
    \u0275\u0275element(2, "path", 16);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(3, "span", 17);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.errorMsg);
  }
}
function LoginComponent_form_17__svg_svg_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 26);
    \u0275\u0275element(1, "circle", 27)(2, "path", 28);
    \u0275\u0275elementEnd();
  }
}
function LoginComponent_form_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "form", 18);
    \u0275\u0275listener("ngSubmit", function LoginComponent_form_17_Template_form_ngSubmit_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onSubmit());
    });
    \u0275\u0275elementStart(1, "div")(2, "label", 19);
    \u0275\u0275text(3, "E-posta Adresi");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 20);
    \u0275\u0275element(5, "input", 21);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div")(7, "label", 22);
    \u0275\u0275text(8, "\u015Eifre");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 20);
    \u0275\u0275element(10, "input", 23);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div")(12, "button", 24);
    \u0275\u0275template(13, LoginComponent_form_17__svg_svg_13_Template, 3, 0, "svg", 25);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("formGroup", ctx_r0.individualForm);
    \u0275\u0275advance(12);
    \u0275\u0275property("disabled", ctx_r0.individualForm.invalid || ctx_r0.isLoading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.isLoading);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.isLoading ? "Giri\u015F Yap\u0131l\u0131yor..." : "Giri\u015F Yap", " ");
  }
}
function LoginComponent_form_18__svg_svg_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 26);
    \u0275\u0275element(1, "circle", 27)(2, "path", 28);
    \u0275\u0275elementEnd();
  }
}
function LoginComponent_form_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "form", 18);
    \u0275\u0275listener("ngSubmit", function LoginComponent_form_18_Template_form_ngSubmit_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onSubmit());
    });
    \u0275\u0275elementStart(1, "div")(2, "label", 29);
    \u0275\u0275text(3, "Kurumsal E-posta Adresi");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 20);
    \u0275\u0275element(5, "input", 30);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div")(7, "label", 31);
    \u0275\u0275text(8, "\u015Eifre");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 20);
    \u0275\u0275element(10, "input", 32);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div")(12, "button", 33);
    \u0275\u0275template(13, LoginComponent_form_18__svg_svg_13_Template, 3, 0, "svg", 25);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("formGroup", ctx_r0.corporateForm);
    \u0275\u0275advance(12);
    \u0275\u0275property("disabled", ctx_r0.corporateForm.invalid || ctx_r0.isLoading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.isLoading);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.isLoading ? "Giri\u015F Yap\u0131l\u0131yor..." : "Kurumsal Giri\u015F Yap", " ");
  }
}
var LoginComponent = class _LoginComponent {
  activeTab = "individual";
  authService = inject(AuthService);
  router = inject(Router);
  fb = inject(FormBuilder);
  errorMsg = "";
  isLoading = false;
  individualForm = this.fb.group({
    email: ["", [Validators.required, Validators.email]],
    password: ["", [Validators.required, Validators.minLength(6)]]
  });
  corporateForm = this.fb.group({
    email: ["", [Validators.required, Validators.email]],
    password: ["", [Validators.required, Validators.minLength(6)]]
  });
  switchTab(tab) {
    this.activeTab = tab;
    this.errorMsg = "";
  }
  onSubmit() {
    this.errorMsg = "";
    if (this.activeTab === "individual") {
      if (this.individualForm.invalid)
        return;
      this.isLoading = true;
      this.authService.loginIndividual(this.individualForm.value).subscribe({
        next: () => {
          this.isLoading = false;
          this.router.navigate(["/catalog"]);
        },
        error: (err) => {
          this.isLoading = false;
          this.errorMsg = err.error?.message || "Giri\u015F ba\u015Far\u0131s\u0131z. Bilgilerinizi kontrol ediniz.";
        }
      });
    } else {
      if (this.corporateForm.invalid)
        return;
      this.isLoading = true;
      this.authService.loginCorporate(this.corporateForm.value).subscribe({
        next: (res) => {
          this.isLoading = false;
          if (res.hasStore) {
            this.router.navigate(["/corporate"]);
          } else {
            this.router.navigate(["/corporate/store-setup"]);
          }
        },
        error: (err) => {
          this.isLoading = false;
          this.errorMsg = err.error?.message || "Kurumsal giri\u015F ba\u015Far\u0131s\u0131z. Bilgilerinizi kontrol ediniz.";
        }
      });
    }
  }
  static \u0275fac = function LoginComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LoginComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LoginComponent, selectors: [["app-login"]], decls: 19, vars: 11, consts: [[1, "min-h-screen", "bg-gray-50", "flex", "flex-col", "justify-center", "py-12", "sm:px-6", "lg:px-8"], [1, "sm:mx-auto", "sm:w-full", "sm:max-w-md"], [1, "mx-auto", "h-12", "w-12", "bg-blue-600", "rounded-xl", "flex", "items-center", "justify-center", "shadow-sm"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", 1, "h-6", "w-6", "text-white"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"], [1, "mt-6", "text-center", "text-3xl", "font-extrabold", "text-gray-900"], [1, "mt-2", "text-center", "text-sm", "text-gray-600"], [1, "mt-8", "sm:mx-auto", "sm:w-full", "sm:max-w-md"], [1, "bg-white", "py-8", "px-4", "shadow-sm", "sm:rounded-2xl", "sm:px-10", "border", "border-gray-100"], [1, "flex", "border-b", "border-gray-200", "mb-6"], [1, "flex-1", "py-3", "text-sm", "font-medium", "text-center", "border-b-2", "transition-colors", "text-gray-500", "hover:text-gray-700", "focus:outline-none", "focus:text-blue-600", 3, "click"], [1, "flex-1", "py-3", "text-sm", "font-medium", "text-center", "border-b-2", "transition-colors", "text-gray-500", "hover:text-gray-700", "focus:outline-none", "focus:text-gray-900", 3, "click"], ["class", "mb-5 bg-red-50 p-4 rounded-lg flex items-start border border-red-100", 4, "ngIf"], ["class", "space-y-6", 3, "formGroup", "ngSubmit", 4, "ngIf"], [1, "mb-5", "bg-red-50", "p-4", "rounded-lg", "flex", "items-start", "border", "border-red-100"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", 1, "h-5", "w-5", "text-red-400", "mt-0.5", "mr-2", "shrink-0"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"], [1, "text-sm", "font-medium", "text-red-800"], [1, "space-y-6", 3, "ngSubmit", "formGroup"], ["for", "ind-email", 1, "block", "text-sm", "font-medium", "text-gray-700"], [1, "mt-2", "relative"], ["id", "ind-email", "formControlName", "email", "type", "email", "autocomplete", "email", 1, "appearance-none", "block", "w-full", "px-4", "py-3", "border", "border-gray-200", "rounded-lg", "shadow-sm", "placeholder-gray-400", "focus:outline-none", "focus:ring-2", "focus:ring-blue-500", "focus:border-transparent", "sm:text-sm", "transition-all", "duration-200"], ["for", "ind-password", 1, "block", "text-sm", "font-medium", "text-gray-700"], ["id", "ind-password", "formControlName", "password", "type", "password", "autocomplete", "current-password", 1, "appearance-none", "block", "w-full", "px-4", "py-3", "border", "border-gray-200", "rounded-lg", "shadow-sm", "placeholder-gray-400", "focus:outline-none", "focus:ring-2", "focus:ring-blue-500", "focus:border-transparent", "sm:text-sm", "transition-all", "duration-200"], ["type", "submit", 1, "w-full", "flex", "justify-center", "py-3", "px-4", "border", "border-transparent", "rounded-lg", "shadow-sm", "text-sm", "font-bold", "text-white", "bg-blue-600", "hover:bg-blue-700", "focus:outline-none", "focus:ring-2", "focus:ring-offset-2", "focus:ring-blue-500", "disabled:opacity-60", "disabled:cursor-not-allowed", "transition-all", "duration-200", 3, "disabled"], ["class", "animate-spin -ml-1 mr-2 h-4 w-4 text-white", "xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", 4, "ngIf"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", 1, "animate-spin", "-ml-1", "mr-2", "h-4", "w-4", "text-white"], ["cx", "12", "cy", "12", "r", "10", "stroke", "currentColor", "stroke-width", "4", 1, "opacity-25"], ["fill", "currentColor", "d", "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z", 1, "opacity-75"], ["for", "corp-email", 1, "block", "text-sm", "font-medium", "text-gray-700"], ["id", "corp-email", "formControlName", "email", "type", "email", "autocomplete", "email", 1, "appearance-none", "block", "w-full", "px-4", "py-3", "border", "border-gray-200", "rounded-lg", "shadow-sm", "placeholder-gray-400", "focus:outline-none", "focus:ring-2", "focus:ring-gray-900", "focus:border-transparent", "sm:text-sm", "transition-all", "duration-200"], ["for", "corp-password", 1, "block", "text-sm", "font-medium", "text-gray-700"], ["id", "corp-password", "formControlName", "password", "type", "password", "autocomplete", "current-password", 1, "appearance-none", "block", "w-full", "px-4", "py-3", "border", "border-gray-200", "rounded-lg", "shadow-sm", "placeholder-gray-400", "focus:outline-none", "focus:ring-2", "focus:ring-gray-900", "focus:border-transparent", "sm:text-sm", "transition-all", "duration-200"], ["type", "submit", 1, "w-full", "flex", "justify-center", "flex-row", "items-center", "py-3", "px-4", "border", "border-transparent", "rounded-lg", "shadow-sm", "text-sm", "font-bold", "text-white", "bg-gray-900", "hover:bg-gray-800", "focus:outline-none", "focus:ring-2", "focus:ring-offset-2", "focus:ring-gray-900", "disabled:opacity-60", "disabled:cursor-not-allowed", "transition-all", "duration-200", 3, "disabled"]], template: function LoginComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(3, "svg", 3);
      \u0275\u0275element(4, "path", 4);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(5, "h2", 5);
      \u0275\u0275text(6, "Giri\u015F Yap\u0131n");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "p", 6);
      \u0275\u0275text(8, " E-ticaret deneyimine kald\u0131\u011F\u0131n\u0131z yerden devam edin ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(9, "div", 7)(10, "div", 8)(11, "div", 9)(12, "button", 10);
      \u0275\u0275listener("click", function LoginComponent_Template_button_click_12_listener() {
        return ctx.switchTab("individual");
      });
      \u0275\u0275text(13, " Bireysel M\xFC\u015Fteri ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "button", 11);
      \u0275\u0275listener("click", function LoginComponent_Template_button_click_14_listener() {
        return ctx.switchTab("corporate");
      });
      \u0275\u0275text(15, " Kurumsal Sat\u0131c\u0131 ");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(16, LoginComponent_div_16_Template, 5, 1, "div", 12)(17, LoginComponent_form_17_Template, 15, 4, "form", 13)(18, LoginComponent_form_18_Template, 15, 4, "form", 13);
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(12);
      \u0275\u0275classProp("border-blue-500", ctx.activeTab === "individual")("text-blue-600", ctx.activeTab === "individual");
      \u0275\u0275advance(2);
      \u0275\u0275classProp("border-gray-900", ctx.activeTab === "corporate")("text-gray-900", ctx.activeTab === "corporate");
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.errorMsg);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.activeTab === "individual");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.activeTab === "corporate");
    }
  }, dependencies: [CommonModule, NgIf, ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LoginComponent, [{
    type: Component,
    args: [{ selector: "app-login", imports: [CommonModule, ReactiveFormsModule], template: `<div class="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
  <div class="sm:mx-auto sm:w-full sm:max-w-md">
    <!-- Logo or Icon Placeholder -->
    <div class="mx-auto h-12 w-12 bg-blue-600 rounded-xl flex items-center justify-center shadow-sm">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    </div>
    <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">Giri\u015F Yap\u0131n</h2>
    <p class="mt-2 text-center text-sm text-gray-600">
      E-ticaret deneyimine kald\u0131\u011F\u0131n\u0131z yerden devam edin
    </p>
  </div>

  <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
    <div class="bg-white py-8 px-4 shadow-sm sm:rounded-2xl sm:px-10 border border-gray-100">
      
      <!-- Tabs -->
      <div class="flex border-b border-gray-200 mb-6">
        <button (click)="switchTab('individual')" [class.border-blue-500]="activeTab === 'individual'" [class.text-blue-600]="activeTab === 'individual'" class="flex-1 py-3 text-sm font-medium text-center border-b-2 transition-colors text-gray-500 hover:text-gray-700 focus:outline-none focus:text-blue-600">
          Bireysel M\xFC\u015Fteri
        </button>
        <button (click)="switchTab('corporate')" [class.border-gray-900]="activeTab === 'corporate'" [class.text-gray-900]="activeTab === 'corporate'" class="flex-1 py-3 text-sm font-medium text-center border-b-2 transition-colors text-gray-500 hover:text-gray-700 focus:outline-none focus:text-gray-900">
          Kurumsal Sat\u0131c\u0131
        </button>
      </div>

      <!-- Error Alert -->
      <div *ngIf="errorMsg" class="mb-5 bg-red-50 p-4 rounded-lg flex items-start border border-red-100">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-red-400 mt-0.5 mr-2 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <span class="text-sm font-medium text-red-800">{{ errorMsg }}</span>
      </div>

      <!-- Individual Form -->
      <form *ngIf="activeTab === 'individual'" [formGroup]="individualForm" (ngSubmit)="onSubmit()" class="space-y-6">
        <div>
          <label for="ind-email" class="block text-sm font-medium text-gray-700">E-posta Adresi</label>
          <div class="mt-2 relative">
            <input id="ind-email" formControlName="email" type="email" autocomplete="email" class="appearance-none block w-full px-4 py-3 border border-gray-200 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent sm:text-sm transition-all duration-200">
          </div>
        </div>

        <div>
          <label for="ind-password" class="block text-sm font-medium text-gray-700">\u015Eifre</label>
          <div class="mt-2 relative">
            <input id="ind-password" formControlName="password" type="password" autocomplete="current-password" class="appearance-none block w-full px-4 py-3 border border-gray-200 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent sm:text-sm transition-all duration-200">
          </div>
        </div>

        <div>
          <button type="submit" [disabled]="individualForm.invalid || isLoading" class="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-bold text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-200">
            <svg *ngIf="isLoading" class="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
              <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            {{ isLoading ? 'Giri\u015F Yap\u0131l\u0131yor...' : 'Giri\u015F Yap' }}
          </button>
        </div>
      </form>

      <!-- Corporate Form -->
      <form *ngIf="activeTab === 'corporate'" [formGroup]="corporateForm" (ngSubmit)="onSubmit()" class="space-y-6">
        <div>
          <label for="corp-email" class="block text-sm font-medium text-gray-700">Kurumsal E-posta Adresi</label>
          <div class="mt-2 relative">
            <input id="corp-email" formControlName="email" type="email" autocomplete="email" class="appearance-none block w-full px-4 py-3 border border-gray-200 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent sm:text-sm transition-all duration-200">
          </div>
        </div>

        <div>
          <label for="corp-password" class="block text-sm font-medium text-gray-700">\u015Eifre</label>
          <div class="mt-2 relative">
            <input id="corp-password" formControlName="password" type="password" autocomplete="current-password" class="appearance-none block w-full px-4 py-3 border border-gray-200 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent sm:text-sm transition-all duration-200">
          </div>
        </div>

        <div>
          <button type="submit" [disabled]="corporateForm.invalid || isLoading" class="w-full flex justify-center flex-row items-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-bold text-white bg-gray-900 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-200">
            <svg *ngIf="isLoading" class="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
              <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            {{ isLoading ? 'Giri\u015F Yap\u0131l\u0131yor...' : 'Kurumsal Giri\u015F Yap' }}
          </button>
        </div>
      </form>

    </div>
  </div>
</div>

` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LoginComponent, { className: "LoginComponent", filePath: "app/features/auth/pages/login/login.ts", lineNumber: 13 });
})();

// src/app/features/auth/pages/register/register.ts
function RegisterComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.errorMessage(), " ");
  }
}
function RegisterComponent_Conditional_53_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Processing... ");
  }
}
function RegisterComponent_Conditional_54_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Create account ");
  }
}
var RegisterComponent = class _RegisterComponent {
  fb = inject(FormBuilder);
  authService = inject(AuthService);
  router = inject(Router);
  activeTab = signal("INDIVIDUAL", ...ngDevMode ? [{ debugName: "activeTab" }] : (
    /* istanbul ignore next */
    []
  ));
  isLoading = signal(false, ...ngDevMode ? [{ debugName: "isLoading" }] : (
    /* istanbul ignore next */
    []
  ));
  errorMessage = signal("", ...ngDevMode ? [{ debugName: "errorMessage" }] : (
    /* istanbul ignore next */
    []
  ));
  individualForm = this.fb.group({
    firstName: ["", Validators.required],
    lastName: ["", Validators.required],
    email: ["", [Validators.required, Validators.email]],
    password: ["", [Validators.required, Validators.minLength(6)]]
  });
  corporateForm = this.fb.group({
    companyName: ["", Validators.required],
    taxId: ["", Validators.required],
    email: ["", [Validators.required, Validators.email]],
    password: ["", [Validators.required, Validators.minLength(6)]]
  });
  setTab(tab) {
    this.activeTab.set(tab);
    this.errorMessage.set("");
  }
  onSubmit() {
    if (this.activeTab() === "INDIVIDUAL" && this.individualForm.invalid)
      return;
    if (this.activeTab() === "CORPORATE" && this.corporateForm.invalid)
      return;
    this.isLoading.set(true);
    this.errorMessage.set("");
    if (this.activeTab() === "INDIVIDUAL") {
      this.authService.registerIndividual(this.individualForm.value).subscribe({
        next: () => {
          this.router.navigate(["/auth/login"]);
        },
        error: (err) => {
          this.errorMessage.set(err.error?.message || "Registration failed. Check your data.");
          this.isLoading.set(false);
        },
        complete: () => this.isLoading.set(false)
      });
    } else {
      this.authService.registerCorporate(this.corporateForm.value).subscribe({
        next: () => {
          this.router.navigate(["/auth/login"]);
        },
        error: (err) => {
          this.errorMessage.set(err.error?.message || "Registration failed. Check your data.");
          this.isLoading.set(false);
        },
        complete: () => this.isLoading.set(false)
      });
    }
  }
  static \u0275fac = function RegisterComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RegisterComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RegisterComponent, selectors: [["app-register"]], decls: 55, vars: 13, consts: [[1, "min-h-screen", "flex", "items-center", "justify-center", "bg-gray-50", "py-12", "px-4", "sm:px-6", "lg:px-8"], [1, "max-w-md", "w-full", "space-y-8", "bg-white", "p-8", "rounded-xl", "shadow-md", "border", "border-gray-100"], [1, "mt-2", "text-center", "text-3xl", "font-extrabold", "text-gray-900"], [1, "mt-2", "text-center", "text-sm", "text-gray-600"], ["routerLink", "/auth/login", 1, "font-medium", "text-blue-600", "hover:text-blue-500"], ["role", "group", 1, "flex", "rounded-md", "shadow-sm"], ["type", "button", 1, "rounded-l-lg", "flex-1", "border", "border-gray-200", "px-4", "py-2", "text-sm", "font-medium", "focus:z-10", "focus:ring-2", "focus:ring-blue-500", "transition-colors", 3, "click"], ["type", "button", 1, "rounded-r-lg", "flex-1", "border", "border-gray-200", "border-l-0", "px-4", "py-2", "text-sm", "font-medium", "focus:z-10", "focus:ring-2", "focus:ring-blue-500", "transition-colors", 3, "click"], [1, "bg-red-50", "text-red-700", "p-3", "rounded-lg", "text-sm", "mb-4", "border", "border-red-100"], [1, "mt-8", "space-y-6", 3, "ngSubmit"], [1, "space-y-4", 3, "formGroup"], [1, "grid", "grid-cols-2", "gap-4"], ["for", "firstName", 1, "block", "text-sm", "font-medium", "text-gray-700"], ["id", "firstName", "formControlName", "firstName", "type", "text", "autocomplete", "given-name", "required", "", 1, "mt-1", "appearance-none", "relative", "block", "w-full", "px-3", "py-2", "border", "border-gray-300", "placeholder-gray-500", "text-gray-900", "rounded-md", "focus:outline-none", "focus:ring-blue-500", "focus:border-blue-500", "sm:text-sm"], ["for", "lastName", 1, "block", "text-sm", "font-medium", "text-gray-700"], ["id", "lastName", "formControlName", "lastName", "type", "text", "autocomplete", "family-name", "required", "", 1, "mt-1", "appearance-none", "relative", "block", "w-full", "px-3", "py-2", "border", "border-gray-300", "placeholder-gray-500", "text-gray-900", "rounded-md", "focus:outline-none", "focus:ring-blue-500", "focus:border-blue-500", "sm:text-sm"], ["for", "email", 1, "block", "text-sm", "font-medium", "text-gray-700"], ["id", "email", "formControlName", "email", "type", "email", "autocomplete", "email", "required", "", 1, "mt-1", "appearance-none", "relative", "block", "w-full", "px-3", "py-2", "border", "border-gray-300", "placeholder-gray-500", "text-gray-900", "rounded-md", "focus:outline-none", "focus:ring-blue-500", "focus:border-blue-500", "sm:text-sm"], ["for", "password", 1, "block", "text-sm", "font-medium", "text-gray-700"], ["id", "password", "formControlName", "password", "type", "password", "autocomplete", "new-password", "required", "", 1, "mt-1", "appearance-none", "relative", "block", "w-full", "px-3", "py-2", "border", "border-gray-300", "placeholder-gray-500", "text-gray-900", "rounded-md", "focus:outline-none", "focus:ring-blue-500", "focus:border-blue-500", "sm:text-sm"], ["for", "companyName", 1, "block", "text-sm", "font-medium", "text-gray-700"], ["id", "companyName", "formControlName", "companyName", "type", "text", "required", "", 1, "mt-1", "appearance-none", "relative", "block", "w-full", "px-3", "py-2", "border", "border-gray-300", "placeholder-gray-500", "text-gray-900", "rounded-md", "focus:outline-none", "focus:ring-blue-500", "focus:border-blue-500", "sm:text-sm"], ["for", "taxId", 1, "block", "text-sm", "font-medium", "text-gray-700"], ["id", "taxId", "formControlName", "taxId", "type", "text", "required", "", 1, "mt-1", "appearance-none", "relative", "block", "w-full", "px-3", "py-2", "border", "border-gray-300", "placeholder-gray-500", "text-gray-900", "rounded-md", "focus:outline-none", "focus:ring-blue-500", "focus:border-blue-500", "sm:text-sm"], ["for", "corpEmail", 1, "block", "text-sm", "font-medium", "text-gray-700"], ["id", "corpEmail", "formControlName", "email", "type", "email", "autocomplete", "email", "required", "", 1, "mt-1", "appearance-none", "relative", "block", "w-full", "px-3", "py-2", "border", "border-gray-300", "placeholder-gray-500", "text-gray-900", "rounded-md", "focus:outline-none", "focus:ring-blue-500", "focus:border-blue-500", "sm:text-sm"], ["for", "corpPassword", 1, "block", "text-sm", "font-medium", "text-gray-700"], ["id", "corpPassword", "formControlName", "password", "type", "password", "autocomplete", "new-password", "required", "", 1, "mt-1", "appearance-none", "relative", "block", "w-full", "px-3", "py-2", "border", "border-gray-300", "placeholder-gray-500", "text-gray-900", "rounded-md", "focus:outline-none", "focus:ring-blue-500", "focus:border-blue-500", "sm:text-sm"], ["type", "submit", 1, "group", "relative", "w-full", "flex", "justify-center", "py-2.5", "px-4", "border", "border-transparent", "text-sm", "font-medium", "rounded-lg", "text-white", "bg-blue-600", "hover:bg-blue-700", "focus:outline-none", "focus:ring-2", "focus:ring-offset-2", "focus:ring-blue-500", "transition-colors", "disabled:opacity-50", "disabled:cursor-not-allowed", 3, "disabled"]], template: function RegisterComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h2", 2);
      \u0275\u0275text(4, "Create an account");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "p", 3);
      \u0275\u0275text(6, " Or ");
      \u0275\u0275elementStart(7, "a", 4);
      \u0275\u0275text(8, "sign in to your existing account");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(9, "div", 5)(10, "button", 6);
      \u0275\u0275listener("click", function RegisterComponent_Template_button_click_10_listener() {
        return ctx.setTab("INDIVIDUAL");
      });
      \u0275\u0275text(11, " Individual ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "button", 7);
      \u0275\u0275listener("click", function RegisterComponent_Template_button_click_12_listener() {
        return ctx.setTab("CORPORATE");
      });
      \u0275\u0275text(13, " Corporate ");
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(14, RegisterComponent_Conditional_14_Template, 2, 1, "div", 8);
      \u0275\u0275elementStart(15, "form", 9);
      \u0275\u0275listener("ngSubmit", function RegisterComponent_Template_form_ngSubmit_15_listener() {
        return ctx.onSubmit();
      });
      \u0275\u0275elementStart(16, "div", 10)(17, "div", 11)(18, "div")(19, "label", 12);
      \u0275\u0275text(20, "First name");
      \u0275\u0275elementEnd();
      \u0275\u0275element(21, "input", 13);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(22, "div")(23, "label", 14);
      \u0275\u0275text(24, "Last name");
      \u0275\u0275elementEnd();
      \u0275\u0275element(25, "input", 15);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(26, "div")(27, "label", 16);
      \u0275\u0275text(28, "Email address");
      \u0275\u0275elementEnd();
      \u0275\u0275element(29, "input", 17);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(30, "div")(31, "label", 18);
      \u0275\u0275text(32, "Password");
      \u0275\u0275elementEnd();
      \u0275\u0275element(33, "input", 19);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(34, "div", 10)(35, "div")(36, "label", 20);
      \u0275\u0275text(37, "Company Name");
      \u0275\u0275elementEnd();
      \u0275\u0275element(38, "input", 21);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(39, "div")(40, "label", 22);
      \u0275\u0275text(41, "Tax ID");
      \u0275\u0275elementEnd();
      \u0275\u0275element(42, "input", 23);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(43, "div")(44, "label", 24);
      \u0275\u0275text(45, "Email address");
      \u0275\u0275elementEnd();
      \u0275\u0275element(46, "input", 25);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(47, "div")(48, "label", 26);
      \u0275\u0275text(49, "Password");
      \u0275\u0275elementEnd();
      \u0275\u0275element(50, "input", 27);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(51, "div")(52, "button", 28);
      \u0275\u0275conditionalCreate(53, RegisterComponent_Conditional_53_Template, 1, 0)(54, RegisterComponent_Conditional_54_Template, 1, 0);
      \u0275\u0275elementEnd()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(10);
      \u0275\u0275classMap(ctx.activeTab() === "INDIVIDUAL" ? "bg-blue-600 text-white" : "bg-white text-gray-700 hover:text-blue-600 hover:bg-gray-50");
      \u0275\u0275advance(2);
      \u0275\u0275classMap(ctx.activeTab() === "CORPORATE" ? "bg-blue-600 text-white" : "bg-white text-gray-700 hover:text-blue-600 hover:bg-gray-50");
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.errorMessage() ? 14 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275classProp("hidden", ctx.activeTab() !== "INDIVIDUAL");
      \u0275\u0275property("formGroup", ctx.individualForm);
      \u0275\u0275advance(18);
      \u0275\u0275classProp("hidden", ctx.activeTab() !== "CORPORATE");
      \u0275\u0275property("formGroup", ctx.corporateForm);
      \u0275\u0275advance(18);
      \u0275\u0275property("disabled", ctx.isLoading());
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.isLoading() ? 53 : 54);
    }
  }, dependencies: [CommonModule, ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, FormGroupDirective, FormControlName, RouterModule, RouterLink], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RegisterComponent, [{
    type: Component,
    args: [{ selector: "app-register", standalone: true, imports: [CommonModule, ReactiveFormsModule, RouterModule], template: `<div class="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
  <div class="max-w-md w-full space-y-8 bg-white p-8 rounded-xl shadow-md border border-gray-100">
    <div>
      <h2 class="mt-2 text-center text-3xl font-extrabold text-gray-900">Create an account</h2>
      <p class="mt-2 text-center text-sm text-gray-600">
        Or
        <a routerLink="/auth/login" class="font-medium text-blue-600 hover:text-blue-500">sign in to your existing account</a>
      </p>
    </div>

    <!-- Tabs -->
    <div class="flex rounded-md shadow-sm" role="group">
      <button type="button" (click)="setTab('INDIVIDUAL')"
        [class]="activeTab() === 'INDIVIDUAL' ? 'bg-blue-600 text-white' : 'bg-white text-gray-700 hover:text-blue-600 hover:bg-gray-50'"
        class="rounded-l-lg flex-1 border border-gray-200 px-4 py-2 text-sm font-medium focus:z-10 focus:ring-2 focus:ring-blue-500 transition-colors">
        Individual
      </button>
      <button type="button" (click)="setTab('CORPORATE')"
        [class]="activeTab() === 'CORPORATE' ? 'bg-blue-600 text-white' : 'bg-white text-gray-700 hover:text-blue-600 hover:bg-gray-50'"
        class="rounded-r-lg flex-1 border border-gray-200 border-l-0 px-4 py-2 text-sm font-medium focus:z-10 focus:ring-2 focus:ring-blue-500 transition-colors">
        Corporate
      </button>
    </div>

    @if (errorMessage()) {
      <div class="bg-red-50 text-red-700 p-3 rounded-lg text-sm mb-4 border border-red-100">
        {{ errorMessage() }}
      </div>
    }

    <form class="mt-8 space-y-6" (ngSubmit)="onSubmit()">
      
      <!-- Individual Form -->
      <div [class.hidden]="activeTab() !== 'INDIVIDUAL'" [formGroup]="individualForm" class="space-y-4">
        <div class="grid grid-cols-2 gap-4">
          <div>
            <label for="firstName" class="block text-sm font-medium text-gray-700">First name</label>
            <input id="firstName" formControlName="firstName" type="text" autocomplete="given-name" required
              class="mt-1 appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
          </div>
          <div>
            <label for="lastName" class="block text-sm font-medium text-gray-700">Last name</label>
            <input id="lastName" formControlName="lastName" type="text" autocomplete="family-name" required
              class="mt-1 appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
          </div>
        </div>
        <div>
          <label for="email" class="block text-sm font-medium text-gray-700">Email address</label>
          <input id="email" formControlName="email" type="email" autocomplete="email" required
            class="mt-1 appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
        </div>
        <div>
          <label for="password" class="block text-sm font-medium text-gray-700">Password</label>
          <input id="password" formControlName="password" type="password" autocomplete="new-password" required
            class="mt-1 appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
        </div>
      </div>

      <!-- Corporate Form -->
      <div [class.hidden]="activeTab() !== 'CORPORATE'" [formGroup]="corporateForm" class="space-y-4">
        <div>
          <label for="companyName" class="block text-sm font-medium text-gray-700">Company Name</label>
          <input id="companyName" formControlName="companyName" type="text" required
            class="mt-1 appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
        </div>
        <div>
          <label for="taxId" class="block text-sm font-medium text-gray-700">Tax ID</label>
          <input id="taxId" formControlName="taxId" type="text" required
            class="mt-1 appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
        </div>
        <div>
          <label for="corpEmail" class="block text-sm font-medium text-gray-700">Email address</label>
          <input id="corpEmail" formControlName="email" type="email" autocomplete="email" required
            class="mt-1 appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
        </div>
        <div>
          <label for="corpPassword" class="block text-sm font-medium text-gray-700">Password</label>
          <input id="corpPassword" formControlName="password" type="password" autocomplete="new-password" required
            class="mt-1 appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
        </div>
      </div>

      <div>
        <button type="submit" [disabled]="isLoading()"
          class="group relative w-full flex justify-center py-2.5 px-4 border border-transparent text-sm font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed">
          @if (isLoading()) {
            Processing...
          } @else {
            Create account
          }
        </button>
      </div>
    </form>
  </div>
</div>` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RegisterComponent, { className: "RegisterComponent", filePath: "app/features/auth/pages/register/register.ts", lineNumber: 13 });
})();

// src/app/features/auth/pages/admin-login/admin-login.ts
function AdminLoginComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 20);
    \u0275\u0275element(2, "path", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(3, "span", 22);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.errorMsg);
  }
}
function AdminLoginComponent__svg_svg_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 23);
    \u0275\u0275element(1, "circle", 24)(2, "path", 25);
    \u0275\u0275elementEnd();
  }
}
var AdminLoginComponent = class _AdminLoginComponent {
  authService = inject(AuthService);
  router = inject(Router);
  fb = inject(FormBuilder);
  errorMsg = "";
  isLoading = false;
  adminForm = this.fb.group({
    email: ["", [Validators.required, Validators.email]],
    password: ["", [Validators.required]]
  });
  onSubmit() {
    this.errorMsg = "";
    if (this.adminForm.invalid)
      return;
    this.isLoading = true;
    this.authService.loginAdmin(this.adminForm.value).subscribe({
      next: () => {
        this.isLoading = false;
        this.router.navigate(["/admin"]);
      },
      error: (err) => {
        this.isLoading = false;
        this.errorMsg = err.error?.message || "Yetkisiz eri\u015Fim. L\xFCtfen bilgilerinizi kontrol ediniz.";
      }
    });
  }
  static \u0275fac = function AdminLoginComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AdminLoginComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdminLoginComponent, selectors: [["app-admin-login"]], decls: 27, vars: 5, consts: [[1, "min-h-screen", "bg-gray-900", "flex", "flex-col", "justify-center", "py-12", "sm:px-6", "lg:px-8"], [1, "sm:mx-auto", "sm:w-full", "sm:max-w-md"], [1, "mx-auto", "h-12", "w-12", "bg-red-600", "rounded-xl", "flex", "items-center", "justify-center", "shadow-md"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", 1, "h-6", "w-6", "text-white"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"], [1, "mt-6", "text-center", "text-3xl", "font-extrabold", "text-white"], [1, "mt-2", "text-center", "text-sm", "text-gray-400"], [1, "mt-8", "sm:mx-auto", "sm:w-full", "sm:max-w-md"], [1, "bg-gray-800", "py-8", "px-4", "shadow-xl", "sm:rounded-2xl", "sm:px-10", "border", "border-gray-700"], ["class", "mb-5 bg-red-900/50 p-4 rounded-lg flex items-start border border-red-800", 4, "ngIf"], [1, "space-y-6", 3, "ngSubmit", "formGroup"], ["for", "admin-email", 1, "block", "text-sm", "font-medium", "text-gray-300"], [1, "mt-2", "relative"], ["id", "admin-email", "formControlName", "email", "type", "email", "autocomplete", "email", 1, "appearance-none", "block", "w-full", "px-4", "py-3", "bg-gray-700", "border", "border-gray-600", "rounded-lg", "shadow-sm", "text-white", "placeholder-gray-400", "focus:outline-none", "focus:ring-2", "focus:ring-red-500", "focus:border-transparent", "sm:text-sm", "transition-all", "duration-200"], ["for", "admin-password", 1, "block", "text-sm", "font-medium", "text-gray-300"], ["id", "admin-password", "formControlName", "password", "type", "password", "autocomplete", "current-password", 1, "appearance-none", "block", "w-full", "px-4", "py-3", "bg-gray-700", "border", "border-gray-600", "rounded-lg", "shadow-sm", "text-white", "placeholder-gray-400", "focus:outline-none", "focus:ring-2", "focus:ring-red-500", "focus:border-transparent", "sm:text-sm", "transition-all", "duration-200"], [1, "pt-2"], ["type", "submit", 1, "w-full", "flex", "justify-center", "items-center", "py-3", "px-4", "border", "border-transparent", "rounded-lg", "shadow-sm", "text-sm", "font-bold", "text-white", "bg-red-600", "hover:bg-red-700", "focus:outline-none", "focus:ring-2", "focus:ring-offset-2", "focus:ring-red-500", "disabled:opacity-50", "disabled:cursor-not-allowed", "transition-all", "duration-200", 3, "disabled"], ["class", "animate-spin -ml-1 mr-2 h-4 w-4 text-white", "xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", 4, "ngIf"], [1, "mb-5", "bg-red-900/50", "p-4", "rounded-lg", "flex", "items-start", "border", "border-red-800"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", 1, "h-5", "w-5", "text-red-500", "mt-0.5", "mr-2", "shrink-0"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"], [1, "text-sm", "font-medium", "text-red-200"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", 1, "animate-spin", "-ml-1", "mr-2", "h-4", "w-4", "text-white"], ["cx", "12", "cy", "12", "r", "10", "stroke", "currentColor", "stroke-width", "4", 1, "opacity-25"], ["fill", "currentColor", "d", "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z", 1, "opacity-75"]], template: function AdminLoginComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(3, "svg", 3);
      \u0275\u0275element(4, "path", 4);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(5, "h2", 5);
      \u0275\u0275text(6, "Y\xF6netici Giri\u015Fi");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "p", 6);
      \u0275\u0275text(8, " Yetkisiz eri\u015Fimler kay\u0131t alt\u0131na al\u0131nmaktad\u0131r ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(9, "div", 7)(10, "div", 8);
      \u0275\u0275template(11, AdminLoginComponent_div_11_Template, 5, 1, "div", 9);
      \u0275\u0275elementStart(12, "form", 10);
      \u0275\u0275listener("ngSubmit", function AdminLoginComponent_Template_form_ngSubmit_12_listener() {
        return ctx.onSubmit();
      });
      \u0275\u0275elementStart(13, "div")(14, "label", 11);
      \u0275\u0275text(15, "Y\xF6netici E-posta");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "div", 12);
      \u0275\u0275element(17, "input", 13);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(18, "div")(19, "label", 14);
      \u0275\u0275text(20, "Sistem \u015Eifresi");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(21, "div", 12);
      \u0275\u0275element(22, "input", 15);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(23, "div", 16)(24, "button", 17);
      \u0275\u0275template(25, AdminLoginComponent__svg_svg_25_Template, 3, 0, "svg", 18);
      \u0275\u0275text(26);
      \u0275\u0275elementEnd()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(11);
      \u0275\u0275property("ngIf", ctx.errorMsg);
      \u0275\u0275advance();
      \u0275\u0275property("formGroup", ctx.adminForm);
      \u0275\u0275advance(12);
      \u0275\u0275property("disabled", ctx.adminForm.invalid || ctx.isLoading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isLoading);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.isLoading ? "Do\u011Frulan\u0131yor..." : "Sisteme Giri\u015F Yap", " ");
    }
  }, dependencies: [CommonModule, NgIf, ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AdminLoginComponent, [{
    type: Component,
    args: [{ selector: "app-admin-login", imports: [CommonModule, ReactiveFormsModule], template: `<div class="min-h-screen bg-gray-900 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
  <div class="sm:mx-auto sm:w-full sm:max-w-md">
    <div class="mx-auto h-12 w-12 bg-red-600 rounded-xl flex items-center justify-center shadow-md">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    </div>
    <h2 class="mt-6 text-center text-3xl font-extrabold text-white">Y\xF6netici Giri\u015Fi</h2>
    <p class="mt-2 text-center text-sm text-gray-400">
      Yetkisiz eri\u015Fimler kay\u0131t alt\u0131na al\u0131nmaktad\u0131r
    </p>
  </div>

  <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
    <div class="bg-gray-800 py-8 px-4 shadow-xl sm:rounded-2xl sm:px-10 border border-gray-700">
      
      <!-- Error Alert -->
      <div *ngIf="errorMsg" class="mb-5 bg-red-900/50 p-4 rounded-lg flex items-start border border-red-800">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-red-500 mt-0.5 mr-2 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <span class="text-sm font-medium text-red-200">{{ errorMsg }}</span>
      </div>

      <form [formGroup]="adminForm" (ngSubmit)="onSubmit()" class="space-y-6">
        <div>
          <label for="admin-email" class="block text-sm font-medium text-gray-300">Y\xF6netici E-posta</label>
          <div class="mt-2 relative">
            <input id="admin-email" formControlName="email" type="email" autocomplete="email" class="appearance-none block w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg shadow-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent sm:text-sm transition-all duration-200">
          </div>
        </div>

        <div>
          <label for="admin-password" class="block text-sm font-medium text-gray-300">Sistem \u015Eifresi</label>
          <div class="mt-2 relative">
            <input id="admin-password" formControlName="password" type="password" autocomplete="current-password" class="appearance-none block w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg shadow-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent sm:text-sm transition-all duration-200">
          </div>
        </div>

        <div class="pt-2">
          <button type="submit" [disabled]="adminForm.invalid || isLoading" class="w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-bold text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200">
            <svg *ngIf="isLoading" class="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
              <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            {{ isLoading ? 'Do\u011Frulan\u0131yor...' : 'Sisteme Giri\u015F Yap' }}
          </button>
        </div>
      </form>

    </div>
  </div>
</div>

` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdminLoginComponent, { className: "AdminLoginComponent", filePath: "app/features/auth/pages/admin-login/admin-login.ts", lineNumber: 13 });
})();

// src/app/features/auth/auth-routing-module.ts
var routes = [
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "register",
    component: RegisterComponent
  },
  {
    path: "admin/login",
    component: AdminLoginComponent
  },
  {
    path: "",
    redirectTo: "login",
    pathMatch: "full"
  }
];
var AuthRoutingModule = class _AuthRoutingModule {
  static \u0275fac = function AuthRoutingModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AuthRoutingModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _AuthRoutingModule });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [RouterModule.forChild(routes), RouterModule] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AuthRoutingModule, [{
    type: NgModule,
    args: [{
      imports: [RouterModule.forChild(routes)],
      exports: [RouterModule]
    }]
  }], null, null);
})();

// src/app/features/auth/auth-module.ts
var AuthModule = class _AuthModule {
  static \u0275fac = function AuthModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AuthModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _AuthModule });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [
    CommonModule,
    AuthRoutingModule
  ] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AuthModule, [{
    type: NgModule,
    args: [{
      declarations: [],
      imports: [
        CommonModule,
        AuthRoutingModule
      ]
    }]
  }], null, null);
})();
export {
  AuthModule
};
//# sourceMappingURL=chunk-GQ7RKBYW.mjs.map
