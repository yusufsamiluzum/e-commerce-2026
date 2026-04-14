import './polyfills.server.mjs';
import {
  RefundService
} from "./chunk-NML6FOOG.mjs";
import {
  toSignal
} from "./chunk-7N4RX44S.mjs";
import {
  CommonModule,
  Component,
  DatePipe,
  catchError,
  inject,
  of,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
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
  ɵɵstyleProp,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-JETRRDQP.mjs";
import "./chunk-T2KOBY73.mjs";

// src/app/features/individual/profile/user-refunds/user-refunds.ts
var _c0 = () => [1, 2, 3];
var _forTrack0 = ($index, $item) => $item.id;
function UserRefunds_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 4);
    \u0275\u0275domElement(1, "i", 7);
    \u0275\u0275text(2);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.apiError(), " ");
  }
}
function UserRefunds_Conditional_7_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 8)(1, "div", 9)(2, "div", 10);
    \u0275\u0275domElement(3, "div", 11)(4, "div", 12)(5, "div", 13);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElement(6, "div", 14)(7, "div", 15);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(8, "div", 16);
    \u0275\u0275domElement(9, "div", 17)(10, "div", 18);
    \u0275\u0275domElementEnd()();
  }
}
function UserRefunds_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 5);
    \u0275\u0275repeaterCreate(1, UserRefunds_Conditional_7_For_2_Template, 11, 0, "div", 8, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275repeater(\u0275\u0275pureFunction0(0, _c0));
  }
}
function UserRefunds_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 6)(1, "div", 19);
    \u0275\u0275domElement(2, "i", 20);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "h3", 21);
    \u0275\u0275text(4, "Hen\xFCz \u0130ade Talebiniz Yok");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(5, "p", 22);
    \u0275\u0275text(6, "\u015Eimdiye kadar herhangi bir iade i\u015Flemi ger\xE7ekle\u015Ftirmediniz. \u0130ade etti\u011Finiz \xFCr\xFCnler burada listelenecektir.");
    \u0275\u0275domElementEnd()();
  }
}
function UserRefunds_Conditional_9_For_2_Case_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "span", 31);
    \u0275\u0275domElement(1, "i", 42);
    \u0275\u0275text(2, " Tamamland\u0131");
    \u0275\u0275domElementEnd();
  }
}
function UserRefunds_Conditional_9_For_2_Case_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "span", 32);
    \u0275\u0275domElement(1, "i", 43);
    \u0275\u0275text(2, " Beklemede");
    \u0275\u0275domElementEnd();
  }
}
function UserRefunds_Conditional_9_For_2_Case_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "span", 33);
    \u0275\u0275domElement(1, "i", 44);
    \u0275\u0275text(2, " Reddedildi");
    \u0275\u0275domElementEnd();
  }
}
function UserRefunds_Conditional_9_For_2_Case_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "span", 34);
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const refund_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(refund_r2.status);
  }
}
function UserRefunds_Conditional_9_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 23);
    \u0275\u0275domElement(1, "div", 24);
    \u0275\u0275domElementStart(2, "div", 25)(3, "div", 26)(4, "div", 27)(5, "span", 28);
    \u0275\u0275domElement(6, "i", 29);
    \u0275\u0275text(7);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(8, "span", 30);
    \u0275\u0275text(9);
    \u0275\u0275domElementEnd();
    \u0275\u0275conditionalCreate(10, UserRefunds_Conditional_9_For_2_Case_10_Template, 3, 0, "span", 31)(11, UserRefunds_Conditional_9_For_2_Case_11_Template, 3, 0, "span", 32)(12, UserRefunds_Conditional_9_For_2_Case_12_Template, 3, 0, "span", 33)(13, UserRefunds_Conditional_9_For_2_Case_13_Template, 2, 1, "span", 34);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(14, "p", 35);
    \u0275\u0275domElement(15, "i", 36);
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "date");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(18, "div", 37)(19, "span", 38);
    \u0275\u0275text(20, "Sebep: ");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(21, "span", 39);
    \u0275\u0275text(22);
    \u0275\u0275domElementEnd()()();
    \u0275\u0275domElementStart(23, "div", 40)(24, "p", 38);
    \u0275\u0275text(25, "\u0130ade Tutar\u0131");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(26, "p", 41);
    \u0275\u0275text(27);
    \u0275\u0275domElementEnd()()()();
  }
  if (rf & 2) {
    let tmp_14_0;
    const refund_r2 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275styleProp("background", refund_r2.status === "COMPLETED" ? "linear-gradient(90deg, #10b981, #059669)" : refund_r2.status === "PENDING" ? "linear-gradient(90deg, #eab308, #ca8a04)" : "linear-gradient(90deg, #ef4444, #dc2626)");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" Sipari\u015F ", refund_r2.orderId, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" Kalem #", refund_r2.orderItemId, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional((tmp_14_0 = refund_r2.status) === "COMPLETED" ? 10 : tmp_14_0 === "PENDING" ? 11 : tmp_14_0 === "REJECTED" ? 12 : 13);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" \u0130\u015Flem Tarihi: ", \u0275\u0275pipeBind2(17, 8, refund_r2.processedAt, "medium"), " ");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(refund_r2.reason);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("$", refund_r2.refundAmount == null ? null : refund_r2.refundAmount.toFixed(2));
  }
}
function UserRefunds_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 5);
    \u0275\u0275repeaterCreate(1, UserRefunds_Conditional_9_For_2_Template, 28, 11, "div", 23, _forTrack0);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r0.refunds());
  }
}
var UserRefunds = class _UserRefunds {
  refundService = inject(RefundService);
  apiError = signal("", ...ngDevMode ? [{ debugName: "apiError" }] : (
    /* istanbul ignore next */
    []
  ));
  refunds = toSignal(this.refundService.getMyRefunds().pipe(catchError(() => {
    this.apiError.set("\u0130ade talepleri y\xFCklenirken bir hata olu\u015Ftu. L\xFCtfen sayfay\u0131 yenileyin.");
    return of([]);
  })), { initialValue: null });
  static \u0275fac = function UserRefunds_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _UserRefunds)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _UserRefunds, selectors: [["app-user-refunds"]], decls: 10, vars: 2, consts: [[1, "p-6", "md:p-8", "space-y-6"], [1, "pb-5", "border-b", "border-white/5"], [1, "text-2xl", "font-black", "text-white", "tracking-tight"], [1, "text-gray-500", "text-sm", "mt-1"], [1, "flex", "items-center", "gap-3", "px-4", "py-3.5", "rounded-xl", "border", "border-red-500/30", "text-red-400", "text-sm", "font-medium", 2, "background", "rgba(239,68,68,0.08)"], [1, "space-y-4"], [1, "flex", "flex-col", "items-center", "justify-center", "py-20", "text-center", "rounded-2xl", "border", "border-white/5", 2, "background", "rgba(255,255,255,0.01)"], [1, "fas", "fa-exclamation-circle"], [1, "rounded-2xl", "border", "border-white/5", "p-5", "md:p-6", "animate-pulse", "flex", "flex-col", "md:flex-row", "justify-between", "gap-5", 2, "background", "rgba(255,255,255,0.02)"], [1, "flex-1", "space-y-3"], [1, "flex", "gap-2.5", "flex-wrap"], [1, "h-5", "bg-gray-700", "rounded-lg", "w-28"], [1, "h-5", "bg-gray-800", "rounded-lg", "w-20"], [1, "h-6", "bg-gray-800", "rounded-lg", "w-24"], [1, "h-3", "bg-gray-800", "rounded", "w-40"], [1, "h-10", "bg-gray-800", "rounded-xl"], [1, "flex", "flex-col", "items-end", "justify-center", "gap-2", "min-w-[100px]"], [1, "h-2", "bg-gray-800", "rounded", "w-16"], [1, "h-7", "bg-gray-700", "rounded", "w-24"], [1, "w-20", "h-20", "rounded-2xl", "flex", "items-center", "justify-center", "mb-5", "shadow-lg", 2, "background", "linear-gradient(135deg, rgba(249,115,22,0.15), rgba(234,88,12,0.1))"], [1, "fas", "fa-undo-alt", "text-3xl", "text-orange-400"], [1, "text-xl", "font-black", "text-white", "mb-2"], [1, "text-gray-500", "max-w-sm", "text-sm", "leading-relaxed"], [1, "relative", "rounded-2xl", "border", "border-white/5", "overflow-hidden", "hover:border-white/10", "transition-all", "duration-300", "hover:-translate-y-0.5", "hover:shadow-lg", 2, "background", "rgba(255,255,255,0.02)"], [1, "absolute", "top-0", "left-0", "w-full", "h-0.5"], [1, "flex", "flex-col", "md:flex-row", "md:items-center", "justify-between", "gap-5", "p-5", "md:p-6"], [1, "space-y-3", "flex-1"], [1, "flex", "flex-wrap", "items-center", "gap-2.5"], [1, "font-black", "text-white", "text-base", "flex", "items-center", "gap-2"], [1, "fas", "fa-hashtag", "text-gray-600", "text-sm"], [1, "text-xs", "text-gray-500", "border", "border-gray-700/60", "px-2", "py-0.5", "rounded-md", 2, "background", "rgba(255,255,255,0.02)"], [1, "inline-flex", "items-center", "gap-1.5", "px-2.5", "py-1", "rounded-lg", "text-xs", "font-bold", "border", "border-emerald-500/30", "text-emerald-400", 2, "background", "rgba(16,185,129,0.08)"], [1, "inline-flex", "items-center", "gap-1.5", "px-2.5", "py-1", "rounded-lg", "text-xs", "font-bold", "border", "border-yellow-500/30", "text-yellow-400", 2, "background", "rgba(234,179,8,0.08)"], [1, "inline-flex", "items-center", "gap-1.5", "px-2.5", "py-1", "rounded-lg", "text-xs", "font-bold", "border", "border-red-500/30", "text-red-400", 2, "background", "rgba(239,68,68,0.08)"], [1, "inline-flex", "items-center", "gap-1.5", "px-2.5", "py-1", "rounded-lg", "text-xs", "font-bold", "border", "border-gray-600/50", "text-gray-400", 2, "background", "rgba(255,255,255,0.03)"], [1, "text-xs", "text-gray-500", "flex", "items-center", "gap-2"], [1, "fas", "fa-calendar-alt", "text-gray-700"], [1, "rounded-xl", "px-3.5", "py-2.5", "border", "border-white/5", 2, "background", "rgba(255,255,255,0.02)"], [1, "text-[10px]", "font-bold", "text-gray-600", "uppercase", "tracking-wider"], [1, "text-sm", "text-gray-300"], [1, "flex", "md:flex-col", "items-center", "md:items-end", "justify-between", "md:justify-center", "gap-2", "md:min-w-[120px]"], [1, "text-2xl", "font-black", "text-orange-400"], [1, "fas", "fa-check-circle", "text-[10px]"], [1, "fas", "fa-clock", "text-[10px]"], [1, "fas", "fa-times-circle", "text-[10px]"]], template: function UserRefunds_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "div", 0)(1, "div", 1)(2, "h2", 2);
      \u0275\u0275text(3, "\u0130ade Taleplerim");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(4, "p", 3);
      \u0275\u0275text(5, "\u0130ade ba\u015Fvurular\u0131n\u0131z ve g\xFCncel durumlar\u0131");
      \u0275\u0275domElementEnd()();
      \u0275\u0275conditionalCreate(6, UserRefunds_Conditional_6_Template, 3, 1, "div", 4);
      \u0275\u0275conditionalCreate(7, UserRefunds_Conditional_7_Template, 3, 1, "div", 5)(8, UserRefunds_Conditional_8_Template, 7, 0, "div", 6)(9, UserRefunds_Conditional_9_Template, 3, 0, "div", 5);
      \u0275\u0275domElementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(6);
      \u0275\u0275conditional(ctx.apiError() ? 6 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.refunds() === null ? 7 : ctx.refunds().length === 0 ? 8 : 9);
    }
  }, dependencies: [CommonModule, DatePipe], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UserRefunds, [{
    type: Component,
    args: [{ selector: "app-user-refunds", standalone: true, imports: [CommonModule], template: `<div class="p-6 md:p-8 space-y-6">

  <!-- Page Header -->
  <div class="pb-5 border-b border-white/5">
    <h2 class="text-2xl font-black text-white tracking-tight">\u0130ade Taleplerim</h2>
    <p class="text-gray-500 text-sm mt-1">\u0130ade ba\u015Fvurular\u0131n\u0131z ve g\xFCncel durumlar\u0131</p>
  </div>

  <!-- API Hatas\u0131 -->
  @if (apiError()) {
    <div class="flex items-center gap-3 px-4 py-3.5 rounded-xl border border-red-500/30 text-red-400 text-sm font-medium"
         style="background: rgba(239,68,68,0.08);">
      <i class="fas fa-exclamation-circle"></i> {{ apiError() }}
    </div>
  }

  @if (refunds() === null) {
    <!-- Skeleton Loader: veri hen\xFCz gelmedi -->
    <div class="space-y-4">
      @for (i of [1, 2, 3]; track i) {
        <div class="rounded-2xl border border-white/5 p-5 md:p-6 animate-pulse flex flex-col md:flex-row justify-between gap-5"
             style="background: rgba(255,255,255,0.02);">
          <div class="flex-1 space-y-3">
            <div class="flex gap-2.5 flex-wrap">
              <div class="h-5 bg-gray-700 rounded-lg w-28"></div>
              <div class="h-5 bg-gray-800 rounded-lg w-20"></div>
              <div class="h-6 bg-gray-800 rounded-lg w-24"></div>
            </div>
            <div class="h-3 bg-gray-800 rounded w-40"></div>
            <div class="h-10 bg-gray-800 rounded-xl"></div>
          </div>
          <div class="flex flex-col items-end justify-center gap-2 min-w-[100px]">
            <div class="h-2 bg-gray-800 rounded w-16"></div>
            <div class="h-7 bg-gray-700 rounded w-24"></div>
          </div>
        </div>
      }
    </div>

  } @else if (refunds()!.length === 0) {
    <!-- Bo\u015F Durum -->
    <div class="flex flex-col items-center justify-center py-20 text-center rounded-2xl border border-white/5"
         style="background: rgba(255,255,255,0.01);">
      <div class="w-20 h-20 rounded-2xl flex items-center justify-center mb-5 shadow-lg"
           style="background: linear-gradient(135deg, rgba(249,115,22,0.15), rgba(234,88,12,0.1));">
        <i class="fas fa-undo-alt text-3xl text-orange-400"></i>
      </div>
      <h3 class="text-xl font-black text-white mb-2">Hen\xFCz \u0130ade Talebiniz Yok</h3>
      <p class="text-gray-500 max-w-sm text-sm leading-relaxed">\u015Eimdiye kadar herhangi bir iade i\u015Flemi ger\xE7ekle\u015Ftirmediniz. \u0130ade etti\u011Finiz \xFCr\xFCnler burada listelenecektir.</p>
    </div>

  } @else {
    <!-- \u0130ade Listesi -->
    <div class="space-y-4">
      @for (refund of refunds()!; track refund.id) {

        <div class="relative rounded-2xl border border-white/5 overflow-hidden hover:border-white/10
                    transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
             style="background: rgba(255,255,255,0.02);">
          <!-- left accent -->
          <div class="absolute top-0 left-0 w-full h-0.5"
               [style.background]="refund.status === 'COMPLETED'
                 ? 'linear-gradient(90deg, #10b981, #059669)'
                 : refund.status === 'PENDING'
                 ? 'linear-gradient(90deg, #eab308, #ca8a04)'
                 : 'linear-gradient(90deg, #ef4444, #dc2626)'">
          </div>

          <div class="flex flex-col md:flex-row md:items-center justify-between gap-5 p-5 md:p-6">

            <!-- Sol: \u0130ade Bilgisi -->
            <div class="space-y-3 flex-1">
              <!-- Sipari\u015F + Kalem + Durum -->
              <div class="flex flex-wrap items-center gap-2.5">
                <span class="font-black text-white text-base flex items-center gap-2">
                  <i class="fas fa-hashtag text-gray-600 text-sm"></i>
                  Sipari\u015F {{ refund.orderId }}
                </span>
                <span class="text-xs text-gray-500 border border-gray-700/60 px-2 py-0.5 rounded-md"
                      style="background: rgba(255,255,255,0.02);">
                  Kalem #{{ refund.orderItemId }}
                </span>

                @switch (refund.status) {
                  @case ('COMPLETED') {
                    <span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-bold border border-emerald-500/30 text-emerald-400"
                          style="background: rgba(16,185,129,0.08);"><i class="fas fa-check-circle text-[10px]"></i> Tamamland\u0131</span>
                  }
                  @case ('PENDING') {
                    <span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-bold border border-yellow-500/30 text-yellow-400"
                          style="background: rgba(234,179,8,0.08);"><i class="fas fa-clock text-[10px]"></i> Beklemede</span>
                  }
                  @case ('REJECTED') {
                    <span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-bold border border-red-500/30 text-red-400"
                          style="background: rgba(239,68,68,0.08);"><i class="fas fa-times-circle text-[10px]"></i> Reddedildi</span>
                  }
                  @default {
                    <span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-bold border border-gray-600/50 text-gray-400"
                          style="background: rgba(255,255,255,0.03);">{{ refund.status }}</span>
                  }
                }
              </div>

              <!-- Tarih -->
              <p class="text-xs text-gray-500 flex items-center gap-2">
                <i class="fas fa-calendar-alt text-gray-700"></i>
                \u0130\u015Flem Tarihi: {{ refund.processedAt | date:'medium' }}
              </p>

              <!-- Sebep -->
              <div class="rounded-xl px-3.5 py-2.5 border border-white/5" style="background: rgba(255,255,255,0.02);">
                <span class="text-[10px] font-bold text-gray-600 uppercase tracking-wider">Sebep: </span>
                <span class="text-sm text-gray-300">{{ refund.reason }}</span>
              </div>
            </div>

            <!-- Sa\u011F: \u0130ade Tutar\u0131 -->
            <div class="flex md:flex-col items-center md:items-end justify-between md:justify-center gap-2 md:min-w-[120px]">
              <p class="text-[10px] font-bold text-gray-600 uppercase tracking-wider">\u0130ade Tutar\u0131</p>
              <p class="text-2xl font-black text-orange-400">\${{ refund.refundAmount?.toFixed(2) }}</p>
            </div>

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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(UserRefunds, { className: "UserRefunds", filePath: "app/features/individual/profile/user-refunds/user-refunds.ts", lineNumber: 15 });
})();
export {
  UserRefunds
};
//# sourceMappingURL=chunk-Y344UYZ4.mjs.map
