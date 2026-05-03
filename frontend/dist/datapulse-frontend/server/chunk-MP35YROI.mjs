import './polyfills.server.mjs';
import {
  AdminService
} from "./chunk-2MVXU3MM.mjs";
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
  ɵɵclassMap,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdomElement,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵdomListener,
  ɵɵgetCurrentView,
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
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-K2NYDLGG.mjs";
import "./chunk-T2KOBY73.mjs";

// src/app/features/admin/audit-logs/audit-logs.ts
var _c0 = () => ["", "USER", "STORE", "ORDER", "PRODUCT", "CATEGORY", "SYSTEM_CONFIG"];
var _c1 = () => [1, 2, 3, 4, 5, 6, 7, 8];
var _c2 = () => [];
var _forTrack0 = ($index, $item) => $item.id;
function AuditLogs_For_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "button", 8);
    \u0275\u0275domListener("click", function AuditLogs_For_9_Template_button_click_0_listener() {
      const type_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onEntityTypeFilter(type_r2));
    });
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const type_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classMap(ctx_r2.entityTypeFilter() === type_r2 ? "bg-blue-600 text-white px-3 py-1.5 rounded-md text-xs font-medium transition-all" : "text-gray-400 px-3 py-1.5 rounded-md text-xs font-medium hover:text-white hover:bg-gray-800 transition-all");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", type_r2 === "" ? "T\xFCm\xFC" : type_r2, " ");
  }
}
function AuditLogs_Conditional_10_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 9);
    \u0275\u0275domElement(1, "div", 10);
    \u0275\u0275domElementStart(2, "div", 11);
    \u0275\u0275domElement(3, "div", 12)(4, "div", 13);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElement(5, "div", 14);
    \u0275\u0275domElementEnd();
  }
}
function AuditLogs_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 7);
    \u0275\u0275repeaterCreate(1, AuditLogs_Conditional_10_For_2_Template, 6, 0, "div", 9, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275repeater(\u0275\u0275pureFunction0(0, _c1));
  }
}
function AuditLogs_Conditional_11_For_2_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "span", 26);
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const log_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" \xB7 ", log_r4.ipAddress);
  }
}
function AuditLogs_Conditional_11_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 15)(1, "div", 18)(2, "p", 19);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "date");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(5, "p", 20);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "date");
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(8, "div", 21)(9, "div", 22)(10, "span", 23);
    \u0275\u0275text(11);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(12, "span", 24);
    \u0275\u0275text(13);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(14, "p", 25);
    \u0275\u0275text(15);
    \u0275\u0275conditionalCreate(16, AuditLogs_Conditional_11_For_2_Conditional_16_Template, 2, 1, "span", 26);
    \u0275\u0275domElementEnd()()();
  }
  if (rf & 2) {
    const log_r4 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(4, 11, log_r4.timestamp, "HH:mm"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(7, 14, log_r4.timestamp, "dd/MM"));
    \u0275\u0275advance(4);
    \u0275\u0275classMap(ctx_r2.getActionColor(log_r4.actionPerformed));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", log_r4.actionPerformed, " ");
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r2.getEntityBadgeClass(log_r4.entityType));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", log_r4.entityType, " #", log_r4.entityId, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", log_r4.userName, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(log_r4.ipAddress ? 16 : -1);
  }
}
function AuditLogs_Conditional_11_ForEmpty_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 16);
    \u0275\u0275text(1, " Bu filtre ile e\u015Fle\u015Fen log kayd\u0131 bulunamad\u0131. ");
    \u0275\u0275domElementEnd();
  }
}
function AuditLogs_Conditional_11_Conditional_4_For_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "button", 8);
    \u0275\u0275domListener("click", function AuditLogs_Conditional_11_Conditional_4_For_5_Template_button_click_0_listener() {
      const $index_r6 = \u0275\u0275restoreView(_r5).$index;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.goToPage($index_r6));
    });
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const $index_r6 = ctx.$index;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275classMap(ctx_r2.currentPage() === $index_r6 ? "h-8 w-8 rounded-md bg-blue-600 text-white text-xs font-medium" : "h-8 w-8 rounded-md bg-gray-800 text-gray-400 text-xs font-medium hover:bg-gray-700 transition-colors");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", $index_r6 + 1, " ");
  }
}
function AuditLogs_Conditional_11_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 17)(1, "p", 27);
    \u0275\u0275text(2);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "div", 28);
    \u0275\u0275repeaterCreate(4, AuditLogs_Conditional_11_Conditional_4_For_5_Template, 2, 3, "button", 6, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" Toplam ", ctx_r2.logsPage().totalElements, " kay\u0131t ");
    \u0275\u0275advance(2);
    \u0275\u0275repeater(\u0275\u0275pureFunction0(1, _c2).constructor(ctx_r2.logsPage().totalPages));
  }
}
function AuditLogs_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 7);
    \u0275\u0275repeaterCreate(1, AuditLogs_Conditional_11_For_2_Template, 17, 17, "div", 15, _forTrack0, false, AuditLogs_Conditional_11_ForEmpty_3_Template, 2, 0, "div", 16);
    \u0275\u0275domElementEnd();
    \u0275\u0275conditionalCreate(4, AuditLogs_Conditional_11_Conditional_4_Template, 6, 2, "div", 17);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.logsPage().content);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r2.logsPage().totalPages > 1 ? 4 : -1);
  }
}
var AuditLogs = class _AuditLogs {
  adminService = inject(AdminService);
  currentPage = signal(0, ...ngDevMode ? [{ debugName: "currentPage" }] : (
    /* istanbul ignore next */
    []
  ));
  entityTypeFilter = signal("", ...ngDevMode ? [{ debugName: "entityTypeFilter" }] : (
    /* istanbul ignore next */
    []
  ));
  refresh$ = new Subject();
  logsPage = toSignal(this.refresh$.pipe(startWith(void 0), switchMap(() => this.adminService.getAuditLogs(this.currentPage(), 25, this.entityTypeFilter() || void 0).pipe(catchError(() => of(null))))), { initialValue: null });
  onEntityTypeFilter(type) {
    this.entityTypeFilter.set(type);
    this.currentPage.set(0);
    this.refresh$.next();
  }
  goToPage(page) {
    this.currentPage.set(page);
    this.refresh$.next();
  }
  getActionColor(action) {
    if (action.startsWith("CREATE"))
      return "text-green-400";
    if (action.startsWith("UPDATE"))
      return "text-blue-400";
    if (action.startsWith("DELETE"))
      return "text-red-400";
    if (action.startsWith("LOGIN"))
      return "text-cyan-400";
    if (action.startsWith("CANCEL"))
      return "text-orange-400";
    return "text-gray-400";
  }
  getEntityBadgeClass(type) {
    switch (type) {
      case "USER":
        return "bg-blue-500/10 text-blue-400";
      case "STORE":
        return "bg-emerald-500/10 text-emerald-400";
      case "ORDER":
        return "bg-violet-500/10 text-violet-400";
      case "PRODUCT":
        return "bg-amber-500/10 text-amber-400";
      case "CATEGORY":
        return "bg-pink-500/10 text-pink-400";
      case "SYSTEM_CONFIG":
        return "bg-cyan-500/10 text-cyan-400";
      default:
        return "bg-gray-500/10 text-gray-400";
    }
  }
  static \u0275fac = function AuditLogs_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AuditLogs)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AuditLogs, selectors: [["app-audit-logs"]], decls: 12, vars: 3, consts: [[1, "min-h-screen", "bg-gray-950", "text-white"], [1, "container", "mx-auto", "px-4", "py-8"], [1, "mb-8"], [1, "text-3xl", "font-bold", "tracking-tight"], [1, "text-gray-400", "mt-1"], [1, "flex", "gap-1.5", "bg-gray-900", "border", "border-gray-800", "rounded-lg", "p-1", "mb-6", "w-fit"], [3, "class"], [1, "space-y-2"], [3, "click"], [1, "bg-gray-900", "border", "border-gray-800", "rounded-lg", "p-4", "animate-pulse", "flex", "items-center", "gap-4"], [1, "h-8", "w-8", "bg-gray-800", "rounded-full"], [1, "flex-1", "space-y-2"], [1, "h-3", "bg-gray-800", "rounded", "w-48"], [1, "h-2", "bg-gray-800", "rounded", "w-32"], [1, "h-3", "bg-gray-800", "rounded", "w-24"], [1, "bg-gray-900", "border", "border-gray-800", "rounded-lg", "px-5", "py-3.5", "hover:border-gray-700", "transition-colors", "flex", "items-center", "gap-4"], [1, "py-16", "text-center", "text-gray-500"], [1, "mt-6", "flex", "items-center", "justify-between"], [1, "flex-shrink-0", "text-center", "w-16"], [1, "text-xs", "font-mono", "text-gray-500"], [1, "text-[10px]", "text-gray-600"], [1, "flex-1", "min-w-0"], [1, "flex", "items-center", "gap-2", "flex-wrap"], [1, "text-sm", "font-medium"], [1, "inline-flex", "items-center", "px-1.5", "py-0.5", "rounded", "text-[10px]", "font-medium"], [1, "text-xs", "text-gray-500", "mt-0.5", "truncate"], [1, "text-gray-600"], [1, "text-xs", "text-gray-500"], [1, "flex", "gap-1"]], template: function AuditLogs_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h1", 3);
      \u0275\u0275text(4, "Audit Logs");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(5, "p", 4);
      \u0275\u0275text(6, "Sistemdeki t\xFCm kritik aktiviteleri izleyin");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(7, "div", 5);
      \u0275\u0275repeaterCreate(8, AuditLogs_For_9_Template, 2, 3, "button", 6, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275domElementEnd();
      \u0275\u0275conditionalCreate(10, AuditLogs_Conditional_10_Template, 3, 1, "div", 7);
      \u0275\u0275conditionalCreate(11, AuditLogs_Conditional_11_Template, 5, 2);
      \u0275\u0275domElementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(8);
      \u0275\u0275repeater(\u0275\u0275pureFunction0(2, _c0));
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.logsPage() === null ? 10 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.logsPage() !== null ? 11 : -1);
    }
  }, dependencies: [CommonModule, DatePipe], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AuditLogs, [{
    type: Component,
    args: [{ selector: "app-audit-logs", standalone: true, imports: [CommonModule], template: `<div class="min-h-screen bg-gray-950 text-white">
  <div class="container mx-auto px-4 py-8">

    <div class="mb-8">
      <h1 class="text-3xl font-bold tracking-tight">Audit Logs</h1>
      <p class="text-gray-400 mt-1">Sistemdeki t\xFCm kritik aktiviteleri izleyin</p>
    </div>

    <!-- Filtreler -->
    <div class="flex gap-1.5 bg-gray-900 border border-gray-800 rounded-lg p-1 mb-6 w-fit">
      @for (type of ['', 'USER', 'STORE', 'ORDER', 'PRODUCT', 'CATEGORY', 'SYSTEM_CONFIG']; track type) {
        <button (click)="onEntityTypeFilter(type)"
                [class]="entityTypeFilter() === type
                  ? 'bg-blue-600 text-white px-3 py-1.5 rounded-md text-xs font-medium transition-all'
                  : 'text-gray-400 px-3 py-1.5 rounded-md text-xs font-medium hover:text-white hover:bg-gray-800 transition-all'">
          {{ type === '' ? 'T\xFCm\xFC' : type }}
        </button>
      }
    </div>

    <!-- Skeleton -->
    @if (logsPage() === null) {
      <div class="space-y-2">
        @for (i of [1,2,3,4,5,6,7,8]; track i) {
          <div class="bg-gray-900 border border-gray-800 rounded-lg p-4 animate-pulse flex items-center gap-4">
            <div class="h-8 w-8 bg-gray-800 rounded-full"></div>
            <div class="flex-1 space-y-2">
              <div class="h-3 bg-gray-800 rounded w-48"></div>
              <div class="h-2 bg-gray-800 rounded w-32"></div>
            </div>
            <div class="h-3 bg-gray-800 rounded w-24"></div>
          </div>
        }
      </div>
    }

    <!-- Log Listesi -->
    @if (logsPage() !== null) {
      <div class="space-y-2">
        @for (log of logsPage()!.content; track log.id) {
          <div class="bg-gray-900 border border-gray-800 rounded-lg px-5 py-3.5 hover:border-gray-700 transition-colors flex items-center gap-4">
            <!-- Zaman Damgas\u0131 -->
            <div class="flex-shrink-0 text-center w-16">
              <p class="text-xs font-mono text-gray-500">{{ log.timestamp | date:'HH:mm' }}</p>
              <p class="text-[10px] text-gray-600">{{ log.timestamp | date:'dd/MM' }}</p>
            </div>

            <!-- \u0130\xE7erik -->
            <div class="flex-1 min-w-0">
              <div class="flex items-center gap-2 flex-wrap">
                <span class="text-sm font-medium" [class]="getActionColor(log.actionPerformed)">
                  {{ log.actionPerformed }}
                </span>
                <span class="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-medium" [class]="getEntityBadgeClass(log.entityType)">
                  {{ log.entityType }} #{{ log.entityId }}
                </span>
              </div>
              <p class="text-xs text-gray-500 mt-0.5 truncate">
                {{ log.userName }}
                @if (log.ipAddress) {
                  <span class="text-gray-600"> \xB7 {{ log.ipAddress }}</span>
                }
              </p>
            </div>
          </div>
        } @empty {
          <div class="py-16 text-center text-gray-500">
            Bu filtre ile e\u015Fle\u015Fen log kayd\u0131 bulunamad\u0131.
          </div>
        }
      </div>

      <!-- Sayfalama -->
      @if (logsPage()!.totalPages > 1) {
        <div class="mt-6 flex items-center justify-between">
          <p class="text-xs text-gray-500">
            Toplam {{ logsPage()!.totalElements }} kay\u0131t
          </p>
          <div class="flex gap-1">
            @for (p of [].constructor(logsPage()!.totalPages); track $index) {
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
    }
  </div>
</div>
` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AuditLogs, { className: "AuditLogs", filePath: "app/features/admin/audit-logs/audit-logs.ts", lineNumber: 13 });
})();
export {
  AuditLogs
};
//# sourceMappingURL=chunk-MP35YROI.mjs.map
