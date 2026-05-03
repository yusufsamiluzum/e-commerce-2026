import {
  CorporateService
} from "./chunk-XN2NLGPB.js";
import {
  AuthService
} from "./chunk-OLUDDFS4.js";
import {
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  NgControlStatus,
  NgControlStatusGroup,
  NgSelectOption,
  ReactiveFormsModule,
  SelectControlValueAccessor,
  Validators,
  ɵNgNoValidate,
  ɵNgSelectMultipleOption
} from "./chunk-MKAKFE2K.js";
import {
  Router
} from "./chunk-N6CICK2R.js";
import "./chunk-27YRKIWA.js";
import {
  CommonModule,
  Component,
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-OBD62CNA.js";
import "./chunk-H2SRQSE4.js";

// src/app/features/corporate/store-setup/store-setup.ts
var _forTrack0 = ($index, $item) => $item.code;
function StoreSetup_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 22);
    \u0275\u0275element(2, "path", 23);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(3, "p", 24);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.errorMessage());
  }
}
function StoreSetup_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 25);
    \u0275\u0275element(2, "path", 26);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(3, "p", 27);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.successMessage());
  }
}
function StoreSetup_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 14);
    \u0275\u0275text(1, "Store name is required");
    \u0275\u0275elementEnd();
  }
}
function StoreSetup_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 14);
    \u0275\u0275text(1, "Store name must be at least 2 characters");
    \u0275\u0275elementEnd();
  }
}
function StoreSetup_For_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 19);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const currency_r2 = ctx.$implicit;
    \u0275\u0275property("value", currency_r2.code);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(currency_r2.label);
  }
}
function StoreSetup_Conditional_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 28);
    \u0275\u0275element(1, "circle", 29)(2, "path", 30);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4, "Creating Store...");
    \u0275\u0275elementEnd();
  }
}
function StoreSetup_Conditional_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 31);
    \u0275\u0275element(1, "path", 32);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3, "Launch Store");
    \u0275\u0275elementEnd();
  }
}
var StoreSetup = class _StoreSetup {
  fb = inject(FormBuilder);
  router = inject(Router);
  corporateService = inject(CorporateService);
  authService = inject(AuthService);
  isLoading = signal(false, ...ngDevMode ? [{ debugName: "isLoading" }] : (
    /* istanbul ignore next */
    []
  ));
  errorMessage = signal(null, ...ngDevMode ? [{ debugName: "errorMessage" }] : (
    /* istanbul ignore next */
    []
  ));
  successMessage = signal(null, ...ngDevMode ? [{ debugName: "successMessage" }] : (
    /* istanbul ignore next */
    []
  ));
  storeForm = this.fb.group({
    name: ["", [Validators.required, Validators.minLength(2), Validators.maxLength(100)]],
    description: [""],
    baseCurrency: ["USD", [Validators.required, Validators.minLength(3), Validators.maxLength(3)]]
  });
  currencies = [
    { code: "USD", label: "US Dollar ($)" },
    { code: "EUR", label: "Euro (\u20AC)" },
    { code: "TRY", label: "Turkish Lira (\u20BA)" },
    { code: "GBP", label: "British Pound (\xA3)" },
    { code: "JPY", label: "Japanese Yen (\xA5)" }
  ];
  onSubmit() {
    if (this.storeForm.invalid)
      return;
    this.isLoading.set(true);
    this.errorMessage.set(null);
    this.corporateService.createStore(this.storeForm.value).subscribe({
      next: () => {
        this.successMessage.set("Ma\u011Fazan\u0131z ba\u015Far\u0131yla olu\u015Fturuldu! Y\xF6nlendiriliyorsunuz...");
        this.authService.hasStore.set(true);
        localStorage.setItem("has_store", "true");
        setTimeout(() => {
          this.router.navigate(["/corporate/dashboard"]);
        }, 1500);
      },
      error: (err) => {
        this.isLoading.set(false);
        this.errorMessage.set(err.error?.message || "Ma\u011Faza olu\u015Fturulurken bir hata olu\u015Ftu.");
      }
    });
  }
  static \u0275fac = function StoreSetup_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _StoreSetup)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _StoreSetup, selectors: [["app-store-setup"]], decls: 35, vars: 7, consts: [[1, "min-h-screen", "bg-gradient-to-br", "from-gray-950", "via-gray-900", "to-indigo-950", "flex", "items-center", "justify-center", "px-4", "py-12"], [1, "w-full", "max-w-lg"], [1, "text-center", "mb-8"], [1, "inline-flex", "items-center", "justify-center", "w-16", "h-16", "rounded-2xl", "bg-blue-600/20", "border", "border-blue-500/30", "mb-5"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", "stroke-width", "1.5", 1, "h-8", "w-8", "text-blue-400"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M13 10V3L4 14h7v7l9-11h-7z"], [1, "text-3xl", "font-bold", "text-white", "mb-2"], [1, "text-gray-400", "text-sm"], [1, "bg-gray-900/80", "border", "border-gray-800", "rounded-2xl", "p-8", "shadow-2xl", "backdrop-blur-sm"], [1, "mb-6", "p-4", "bg-red-500/10", "border", "border-red-500/30", "rounded-xl", "flex", "items-start", "gap-3"], [1, "mb-6", "p-4", "bg-emerald-500/10", "border", "border-emerald-500/30", "rounded-xl", "flex", "items-start", "gap-3"], [1, "space-y-6", 3, "ngSubmit", "formGroup"], ["for", "storeName", 1, "block", "text-sm", "font-semibold", "text-gray-300", "mb-2"], ["id", "storeName", "formControlName", "name", "type", "text", "placeholder", "e.g. Tech Haven, Fashion Hub...", 1, "w-full", "bg-gray-800/50", "border", "border-gray-700", "rounded-xl", "py-3", "px-4", "text-white", "placeholder-gray-500", "focus:border-blue-500", "focus:ring-2", "focus:ring-blue-500/20", "outline-none", "transition-all", "text-sm"], [1, "text-red-400", "text-xs", "mt-1.5"], ["for", "storeDescription", 1, "block", "text-sm", "font-semibold", "text-gray-300", "mb-2"], ["id", "storeDescription", "formControlName", "description", "rows", "3", "placeholder", "Tell customers about your store...", 1, "w-full", "bg-gray-800/50", "border", "border-gray-700", "rounded-xl", "py-3", "px-4", "text-white", "placeholder-gray-500", "focus:border-blue-500", "focus:ring-2", "focus:ring-blue-500/20", "outline-none", "transition-all", "text-sm", "resize-none"], ["for", "baseCurrency", 1, "block", "text-sm", "font-semibold", "text-gray-300", "mb-2"], ["id", "baseCurrency", "formControlName", "baseCurrency", 1, "w-full", "bg-gray-800/50", "border", "border-gray-700", "rounded-xl", "py-3", "px-4", "text-white", "focus:border-blue-500", "focus:ring-2", "focus:ring-blue-500/20", "outline-none", "transition-all", "text-sm", "appearance-none", "cursor-pointer"], [1, "bg-gray-800", 3, "value"], ["type", "submit", 1, "w-full", "py-3.5", "px-6", "bg-blue-600", "hover:bg-blue-700", "text-white", "font-semibold", "rounded-xl", "transition-all", "duration-200", "disabled:opacity-50", "disabled:cursor-not-allowed", "flex", "items-center", "justify-center", "gap-2", "shadow-lg", "shadow-blue-600/20", 3, "disabled"], [1, "text-center", "text-gray-500", "text-xs", "mt-6"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", 1, "h-5", "w-5", "text-red-400", "mt-0.5", "flex-shrink-0"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z"], [1, "text-red-300", "text-sm"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", 1, "h-5", "w-5", "text-emerald-400", "mt-0.5", "flex-shrink-0"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"], [1, "text-emerald-300", "text-sm"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", 1, "animate-spin", "h-5", "w-5"], ["cx", "12", "cy", "12", "r", "10", "stroke", "currentColor", "stroke-width", "4", 1, "opacity-25"], ["fill", "currentColor", "d", "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z", 1, "opacity-75"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", 1, "h-5", "w-5"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M13 10V3L4 14h7v7l9-11h-7z"]], template: function StoreSetup_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(4, "svg", 4);
      \u0275\u0275element(5, "path", 5);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(6, "h1", 6);
      \u0275\u0275text(7, "Create Your Store");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "p", 7);
      \u0275\u0275text(9, "Set up your store to start selling on DataPulse");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(10, "div", 8);
      \u0275\u0275conditionalCreate(11, StoreSetup_Conditional_11_Template, 5, 1, "div", 9);
      \u0275\u0275conditionalCreate(12, StoreSetup_Conditional_12_Template, 5, 1, "div", 10);
      \u0275\u0275elementStart(13, "form", 11);
      \u0275\u0275listener("ngSubmit", function StoreSetup_Template_form_ngSubmit_13_listener() {
        return ctx.onSubmit();
      });
      \u0275\u0275elementStart(14, "div")(15, "label", 12);
      \u0275\u0275text(16, "Store Name *");
      \u0275\u0275elementEnd();
      \u0275\u0275element(17, "input", 13);
      \u0275\u0275conditionalCreate(18, StoreSetup_Conditional_18_Template, 2, 0, "p", 14);
      \u0275\u0275conditionalCreate(19, StoreSetup_Conditional_19_Template, 2, 0, "p", 14);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(20, "div")(21, "label", 15);
      \u0275\u0275text(22, "Description");
      \u0275\u0275elementEnd();
      \u0275\u0275element(23, "textarea", 16);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(24, "div")(25, "label", 17);
      \u0275\u0275text(26, "Base Currency *");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(27, "select", 18);
      \u0275\u0275repeaterCreate(28, StoreSetup_For_29_Template, 2, 2, "option", 19, _forTrack0);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(30, "button", 20);
      \u0275\u0275conditionalCreate(31, StoreSetup_Conditional_31_Template, 5, 0)(32, StoreSetup_Conditional_32_Template, 4, 0);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(33, "p", 21);
      \u0275\u0275text(34, " You can update your store details later from your profile settings. ");
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      let tmp_3_0;
      let tmp_4_0;
      \u0275\u0275advance(11);
      \u0275\u0275conditional(ctx.errorMessage() !== null ? 11 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.successMessage() !== null ? 12 : -1);
      \u0275\u0275advance();
      \u0275\u0275property("formGroup", ctx.storeForm);
      \u0275\u0275advance(5);
      \u0275\u0275conditional(((tmp_3_0 = ctx.storeForm.get("name")) == null ? null : tmp_3_0.touched) && ((tmp_3_0 = ctx.storeForm.get("name")) == null ? null : tmp_3_0.errors == null ? null : tmp_3_0.errors["required"]) ? 18 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(((tmp_4_0 = ctx.storeForm.get("name")) == null ? null : tmp_4_0.touched) && ((tmp_4_0 = ctx.storeForm.get("name")) == null ? null : tmp_4_0.errors == null ? null : tmp_4_0.errors["minlength"]) ? 19 : -1);
      \u0275\u0275advance(9);
      \u0275\u0275repeater(ctx.currencies);
      \u0275\u0275advance(2);
      \u0275\u0275property("disabled", ctx.storeForm.invalid || ctx.isLoading());
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.isLoading() ? 31 : 32);
    }
  }, dependencies: [CommonModule, ReactiveFormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StoreSetup, [{
    type: Component,
    args: [{ selector: "app-store-setup", standalone: true, imports: [CommonModule, ReactiveFormsModule], template: `<div class="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-indigo-950 flex items-center justify-center px-4 py-12">
  <div class="w-full max-w-lg">
    
    <!-- Header -->
    <div class="text-center mb-8">
      <div class="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-blue-600/20 border border-blue-500/30 mb-5">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
          <path stroke-linecap="round" stroke-linejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      </div>
      <h1 class="text-3xl font-bold text-white mb-2">Create Your Store</h1>
      <p class="text-gray-400 text-sm">Set up your store to start selling on DataPulse</p>
    </div>

    <!-- Form Card -->
    <div class="bg-gray-900/80 border border-gray-800 rounded-2xl p-8 shadow-2xl backdrop-blur-sm">
      
      <!-- Error -->
      @if (errorMessage() !== null) {
        <div class="mb-6 p-4 bg-red-500/10 border border-red-500/30 rounded-xl flex items-start gap-3">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-red-400 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
          </svg>
          <p class="text-red-300 text-sm">{{ errorMessage() }}</p>
        </div>
      }

      <!-- Success -->
      @if (successMessage() !== null) {
        <div class="mb-6 p-4 bg-emerald-500/10 border border-emerald-500/30 rounded-xl flex items-start gap-3">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-emerald-400 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <p class="text-emerald-300 text-sm">{{ successMessage() }}</p>
        </div>
      }

      <form [formGroup]="storeForm" (ngSubmit)="onSubmit()" class="space-y-6">
        
        <!-- Store Name -->
        <div>
          <label for="storeName" class="block text-sm font-semibold text-gray-300 mb-2">Store Name *</label>
          <input 
            id="storeName"
            formControlName="name" 
            type="text" 
            placeholder="e.g. Tech Haven, Fashion Hub..."
            class="w-full bg-gray-800/50 border border-gray-700 rounded-xl py-3 px-4 text-white placeholder-gray-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all text-sm"
          >
          @if (storeForm.get('name')?.touched && storeForm.get('name')?.errors?.['required']) {
            <p class="text-red-400 text-xs mt-1.5">Store name is required</p>
          }
          @if (storeForm.get('name')?.touched && storeForm.get('name')?.errors?.['minlength']) {
            <p class="text-red-400 text-xs mt-1.5">Store name must be at least 2 characters</p>
          }
        </div>

        <!-- Description -->
        <div>
          <label for="storeDescription" class="block text-sm font-semibold text-gray-300 mb-2">Description</label>
          <textarea 
            id="storeDescription"
            formControlName="description" 
            rows="3"
            placeholder="Tell customers about your store..."
            class="w-full bg-gray-800/50 border border-gray-700 rounded-xl py-3 px-4 text-white placeholder-gray-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all text-sm resize-none"
          ></textarea>
        </div>

        <!-- Currency -->
        <div>
          <label for="baseCurrency" class="block text-sm font-semibold text-gray-300 mb-2">Base Currency *</label>
          <select 
            id="baseCurrency"
            formControlName="baseCurrency"
            class="w-full bg-gray-800/50 border border-gray-700 rounded-xl py-3 px-4 text-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all text-sm appearance-none cursor-pointer"
          >
            @for (currency of currencies; track currency.code) {
              <option [value]="currency.code" class="bg-gray-800">{{ currency.label }}</option>
            }
          </select>
        </div>

        <!-- Submit Button -->
        <button 
          type="submit" 
          [disabled]="storeForm.invalid || isLoading()"
          class="w-full py-3.5 px-6 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-lg shadow-blue-600/20"
        >
          @if (isLoading()) {
            <svg class="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
              <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
            </svg>
            <span>Creating Store...</span>
          } @else {
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            <span>Launch Store</span>
          }
        </button>
      </form>
    </div>

    <!-- Footer Note -->
    <p class="text-center text-gray-500 text-xs mt-6">
      You can update your store details later from your profile settings.
    </p>
  </div>
</div>
` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(StoreSetup, { className: "StoreSetup", filePath: "app/features/corporate/store-setup/store-setup.ts", lineNumber: 14 });
})();
export {
  StoreSetup
};
//# sourceMappingURL=chunk-CMC2AWCQ.js.map
