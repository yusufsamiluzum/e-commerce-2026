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
  inject,
  of,
  setClassMetadata,
  signal,
  startWith,
  switchMap,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdomElement,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵdomListener,
  ɵɵdomProperty,
  ɵɵgetCurrentView,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵpureFunction0,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-K2NYDLGG.mjs";
import "./chunk-T2KOBY73.mjs";

// src/app/features/admin/config/system-config.ts
var _c0 = () => [1, 2, 3];
var _forTrack0 = ($index, $item) => $item.id;
function SystemConfig_Conditional_7_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 6);
    \u0275\u0275domElement(1, "div", 7)(2, "div", 8);
    \u0275\u0275domElementEnd();
  }
}
function SystemConfig_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 5);
    \u0275\u0275repeaterCreate(1, SystemConfig_Conditional_7_For_2_Template, 3, 0, "div", 6, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275repeater(\u0275\u0275pureFunction0(0, _c0));
  }
}
function SystemConfig_Conditional_8_For_2_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "div", 15)(1, "input", 19);
    \u0275\u0275domListener("input", function SystemConfig_Conditional_8_For_2_Conditional_8_Template_input_input_1_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.editingValue.set($event.target.value));
    })("keydown.enter", function SystemConfig_Conditional_8_For_2_Conditional_8_Template_input_keydown_enter_1_listener() {
      \u0275\u0275restoreView(_r1);
      const config_r3 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.saveEdit(config_r3.id));
    });
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(2, "button", 20);
    \u0275\u0275domListener("click", function SystemConfig_Conditional_8_For_2_Conditional_8_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r1);
      const config_r3 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.saveEdit(config_r3.id));
    });
    \u0275\u0275text(3, " Kaydet ");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(4, "button", 21);
    \u0275\u0275domListener("click", function SystemConfig_Conditional_8_For_2_Conditional_8_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.cancelEdit());
    });
    \u0275\u0275text(5, " \u0130ptal ");
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275domProperty("value", ctx_r1.editingValue());
    \u0275\u0275advance();
    \u0275\u0275domProperty("disabled", ctx_r1.actionInProgress());
  }
}
function SystemConfig_Conditional_8_For_2_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "p", 16);
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const config_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(config_r3.configValue);
  }
}
function SystemConfig_Conditional_8_For_2_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "p", 17);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "date");
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const config_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("Son g\xFCncelleme: ", \u0275\u0275pipeBind2(2, 1, config_r3.updatedAt, "dd MMM yyyy, HH:mm"));
  }
}
function SystemConfig_Conditional_8_For_2_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "button", 22);
    \u0275\u0275domListener("click", function SystemConfig_Conditional_8_For_2_Conditional_11_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const config_r3 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.startEdit(config_r3));
    });
    \u0275\u0275text(1, " D\xFCzenle ");
    \u0275\u0275domElementEnd();
  }
}
function SystemConfig_Conditional_8_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 9)(1, "div", 11)(2, "div", 12)(3, "span", 13);
    \u0275\u0275text(4);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(5, "div")(6, "p", 14);
    \u0275\u0275text(7);
    \u0275\u0275domElementEnd();
    \u0275\u0275conditionalCreate(8, SystemConfig_Conditional_8_For_2_Conditional_8_Template, 6, 2, "div", 15)(9, SystemConfig_Conditional_8_For_2_Conditional_9_Template, 2, 1, "p", 16);
    \u0275\u0275conditionalCreate(10, SystemConfig_Conditional_8_For_2_Conditional_10_Template, 3, 4, "p", 17);
    \u0275\u0275domElementEnd()();
    \u0275\u0275conditionalCreate(11, SystemConfig_Conditional_8_For_2_Conditional_11_Template, 2, 0, "button", 18);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const config_r3 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.getKeyIcon(config_r3.configKey));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(config_r3.configKey);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.editingId() === config_r3.id ? 8 : 9);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(config_r3.updatedAt ? 10 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.editingId() !== config_r3.id ? 11 : -1);
  }
}
function SystemConfig_Conditional_8_ForEmpty_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 10);
    \u0275\u0275text(1, " Konfig\xFCrasyon de\u011Feri bulunamad\u0131. ");
    \u0275\u0275domElementEnd();
  }
}
function SystemConfig_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 5);
    \u0275\u0275repeaterCreate(1, SystemConfig_Conditional_8_For_2_Template, 12, 5, "div", 9, _forTrack0, false, SystemConfig_Conditional_8_ForEmpty_3_Template, 2, 0, "div", 10);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.configs());
  }
}
var SystemConfig = class _SystemConfig {
  adminService = inject(AdminService);
  editingId = signal(null, ...ngDevMode ? [{ debugName: "editingId" }] : (
    /* istanbul ignore next */
    []
  ));
  editingValue = signal("", ...ngDevMode ? [{ debugName: "editingValue" }] : (
    /* istanbul ignore next */
    []
  ));
  actionInProgress = signal(false, ...ngDevMode ? [{ debugName: "actionInProgress" }] : (
    /* istanbul ignore next */
    []
  ));
  refresh$ = new Subject();
  configs = toSignal(this.refresh$.pipe(startWith(void 0), switchMap(() => this.adminService.getAllConfigs().pipe(catchError(() => of(null))))), { initialValue: null });
  startEdit(config) {
    this.editingId.set(config.id);
    this.editingValue.set(config.configValue);
  }
  saveEdit(configId) {
    const value = this.editingValue().trim();
    if (!value)
      return;
    this.actionInProgress.set(true);
    this.adminService.updateConfig(configId, value).subscribe({
      next: () => {
        this.editingId.set(null);
        this.actionInProgress.set(false);
        this.refresh$.next();
      },
      error: () => this.actionInProgress.set(false)
    });
  }
  cancelEdit() {
    this.editingId.set(null);
  }
  getKeyIcon(key) {
    switch (key) {
      case "site_name":
        return "\u{1F3F7}\uFE0F";
      case "currency":
        return "\u{1F4B1}";
      case "tax_rate":
        return "\u{1F4CA}";
      default:
        return "\u2699\uFE0F";
    }
  }
  static \u0275fac = function SystemConfig_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SystemConfig)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SystemConfig, selectors: [["app-system-config"]], decls: 9, vars: 2, consts: [[1, "min-h-screen", "bg-gray-950", "text-white"], [1, "container", "mx-auto", "px-4", "py-8"], [1, "mb-8"], [1, "text-3xl", "font-bold", "tracking-tight"], [1, "text-gray-400", "mt-1"], [1, "space-y-3"], [1, "bg-gray-900", "border", "border-gray-800", "rounded-xl", "p-5", "animate-pulse"], [1, "h-4", "bg-gray-800", "rounded", "w-24", "mb-2"], [1, "h-8", "bg-gray-800", "rounded", "w-48"], [1, "bg-gray-900", "border", "border-gray-800", "rounded-xl", "p-5", "hover:border-gray-700", "transition-colors"], [1, "py-16", "text-center", "text-gray-500"], [1, "flex", "items-start", "justify-between"], [1, "flex", "items-start", "gap-4"], [1, "text-2xl", "mt-0.5"], [1, "text-xs", "font-semibold", "text-gray-500", "uppercase", "tracking-wider", "mb-1"], [1, "flex", "items-center", "gap-2"], [1, "text-lg", "font-semibold", "text-white"], [1, "text-[10px]", "text-gray-600", "mt-1"], [1, "text-xs", "px-3", "py-1.5", "rounded-lg", "font-medium", "text-gray-400", "hover:text-blue-400", "hover:bg-blue-500/10", "transition-all"], ["type", "text", 1, "bg-gray-800", "border", "border-blue-500", "rounded-lg", "px-3", "py-2", "text-sm", "text-white", "outline-none", "w-64", "focus:ring-2", "focus:ring-blue-500/20", 3, "input", "keydown.enter", "value"], [1, "text-xs", "px-3", "py-2", "rounded-lg", "font-medium", "bg-green-500/10", "text-green-400", "border", "border-green-500/20", "hover:bg-green-500/20", "transition-all", "disabled:opacity-50", 3, "click", "disabled"], [1, "text-xs", "px-3", "py-2", "rounded-lg", "font-medium", "bg-gray-800", "text-gray-400", "hover:bg-gray-700", "transition-all", 3, "click"], [1, "text-xs", "px-3", "py-1.5", "rounded-lg", "font-medium", "text-gray-400", "hover:text-blue-400", "hover:bg-blue-500/10", "transition-all", 3, "click"]], template: function SystemConfig_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h1", 3);
      \u0275\u0275text(4, "Sistem Ayarlar\u0131");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(5, "p", 4);
      \u0275\u0275text(6, "Platform genelindeki global konfig\xFCrasyon de\u011Ferlerini y\xF6netin");
      \u0275\u0275domElementEnd()();
      \u0275\u0275conditionalCreate(7, SystemConfig_Conditional_7_Template, 3, 1, "div", 5);
      \u0275\u0275conditionalCreate(8, SystemConfig_Conditional_8_Template, 4, 1, "div", 5);
      \u0275\u0275domElementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(7);
      \u0275\u0275conditional(ctx.configs() === null ? 7 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.configs() !== null ? 8 : -1);
    }
  }, dependencies: [CommonModule, FormsModule, DatePipe], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SystemConfig, [{
    type: Component,
    args: [{ selector: "app-system-config", standalone: true, imports: [CommonModule, FormsModule], template: `<div class="min-h-screen bg-gray-950 text-white">
  <div class="container mx-auto px-4 py-8">

    <div class="mb-8">
      <h1 class="text-3xl font-bold tracking-tight">Sistem Ayarlar\u0131</h1>
      <p class="text-gray-400 mt-1">Platform genelindeki global konfig\xFCrasyon de\u011Ferlerini y\xF6netin</p>
    </div>

    <!-- Skeleton -->
    @if (configs() === null) {
      <div class="space-y-3">
        @for (i of [1,2,3]; track i) {
          <div class="bg-gray-900 border border-gray-800 rounded-xl p-5 animate-pulse">
            <div class="h-4 bg-gray-800 rounded w-24 mb-2"></div>
            <div class="h-8 bg-gray-800 rounded w-48"></div>
          </div>
        }
      </div>
    }

    @if (configs() !== null) {
      <div class="space-y-3">
        @for (config of configs(); track config.id) {
          <div class="bg-gray-900 border border-gray-800 rounded-xl p-5 hover:border-gray-700 transition-colors">
            <div class="flex items-start justify-between">
              <div class="flex items-start gap-4">
                <span class="text-2xl mt-0.5">{{ getKeyIcon(config.configKey) }}</span>
                <div>
                  <p class="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">{{ config.configKey }}</p>
                  @if (editingId() === config.id) {
                    <div class="flex items-center gap-2">
                      <input type="text"
                             [value]="editingValue()"
                             (input)="editingValue.set($any($event.target).value)"
                             (keydown.enter)="saveEdit(config.id)"
                             class="bg-gray-800 border border-blue-500 rounded-lg px-3 py-2 text-sm text-white outline-none w-64 focus:ring-2 focus:ring-blue-500/20">
                      <button (click)="saveEdit(config.id)"
                              [disabled]="actionInProgress()"
                              class="text-xs px-3 py-2 rounded-lg font-medium bg-green-500/10 text-green-400 border border-green-500/20 hover:bg-green-500/20 transition-all disabled:opacity-50">
                        Kaydet
                      </button>
                      <button (click)="cancelEdit()"
                              class="text-xs px-3 py-2 rounded-lg font-medium bg-gray-800 text-gray-400 hover:bg-gray-700 transition-all">
                        \u0130ptal
                      </button>
                    </div>
                  } @else {
                    <p class="text-lg font-semibold text-white">{{ config.configValue }}</p>
                  }
                  @if (config.updatedAt) {
                    <p class="text-[10px] text-gray-600 mt-1">Son g\xFCncelleme: {{ config.updatedAt | date:'dd MMM yyyy, HH:mm' }}</p>
                  }
                </div>
              </div>
              @if (editingId() !== config.id) {
                <button (click)="startEdit(config)"
                        class="text-xs px-3 py-1.5 rounded-lg font-medium text-gray-400 hover:text-blue-400 hover:bg-blue-500/10 transition-all">
                  D\xFCzenle
                </button>
              }
            </div>
          </div>
        } @empty {
          <div class="py-16 text-center text-gray-500">
            Konfig\xFCrasyon de\u011Feri bulunamad\u0131.
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SystemConfig, { className: "SystemConfig", filePath: "app/features/admin/config/system-config.ts", lineNumber: 14 });
})();
export {
  SystemConfig
};
//# sourceMappingURL=chunk-4CGBE34B.mjs.map
