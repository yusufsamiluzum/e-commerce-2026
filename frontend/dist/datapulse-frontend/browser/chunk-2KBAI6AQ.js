import {
  ReviewService
} from "./chunk-F2OG5JAR.js";
import {
  RouterLink,
  RouterModule
} from "./chunk-XXXBABRB.js";
import {
  toSignal
} from "./chunk-QWXYW3ER.js";
import {
  BehaviorSubject,
  CommonModule,
  Component,
  DatePipe,
  catchError,
  inject,
  of,
  setClassMetadata,
  shareReplay,
  signal,
  switchMap,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-7LZR64HY.js";

// src/app/features/individual/profile/my-reviews/my-reviews.ts
var _c0 = () => [1, 2, 3];
var _c1 = (a0) => ["/katalog", a0];
var _forTrack0 = ($index, $item) => $item.id;
function MyReviews_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275element(1, "i", 7);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.apiError(), " ");
  }
}
function MyReviews_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275element(1, "i", 7);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.deleteError(), " ");
  }
}
function MyReviews_Conditional_8_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8);
    \u0275\u0275element(1, "div", 9);
    \u0275\u0275elementStart(2, "div", 10)(3, "div", 11);
    \u0275\u0275element(4, "div", 12)(5, "div", 13);
    \u0275\u0275elementEnd();
    \u0275\u0275element(6, "div", 14)(7, "div", 15);
    \u0275\u0275elementStart(8, "div", 16);
    \u0275\u0275element(9, "div", 17)(10, "div", 18);
    \u0275\u0275elementEnd()()();
  }
}
function MyReviews_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275repeaterCreate(1, MyReviews_Conditional_8_For_2_Template, 11, 0, "div", 8, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275repeater(\u0275\u0275pureFunction0(0, _c0));
  }
}
function MyReviews_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "div", 19);
    \u0275\u0275element(2, "i", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h3", 21);
    \u0275\u0275text(4, "Hen\xFCz De\u011Ferlendirme Yapmad\u0131n\u0131z");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 22);
    \u0275\u0275text(6, " Sat\u0131n ald\u0131\u011F\u0131n\u0131z \xFCr\xFCnleri de\u011Ferlendirerek di\u011Fer m\xFC\u015Fterilere yard\u0131mc\u0131 olabilirsiniz. ");
    \u0275\u0275elementEnd()();
  }
}
function MyReviews_Conditional_10_For_2_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 23)(1, "div", 48)(2, "div", 49)(3, "span", 50);
    \u0275\u0275element(4, "i", 51);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div")(6, "p", 52);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p", 53);
    \u0275\u0275text(9, "Bu i\u015Flem geri al\u0131namaz.");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "div", 54)(11, "button", 55);
    \u0275\u0275listener("click", function MyReviews_Conditional_10_For_2_Conditional_0_Template_button_click_11_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.cancelDelete());
    });
    \u0275\u0275text(12, " \u0130ptal ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "button", 56);
    \u0275\u0275listener("click", function MyReviews_Conditional_10_For_2_Conditional_0_Template_button_click_13_listener() {
      \u0275\u0275restoreView(_r2);
      const review_r3 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.confirmDelete(review_r3.id));
    });
    \u0275\u0275text(14, " Evet, Sil ");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const review_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1('"', review_r3.productName, '" yorumunu silmek istiyor musunuz?');
  }
}
function MyReviews_Conditional_10_For_2_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 28);
  }
  if (rf & 2) {
    const review_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("src", review_r3.productImageUrl, \u0275\u0275sanitizeUrl)("alt", review_r3.productName);
  }
}
function MyReviews_Conditional_10_For_2_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 29);
    \u0275\u0275element(1, "i", 57);
    \u0275\u0275elementStart(2, "span", 58);
    \u0275\u0275text(3, "G\xF6rsel yok");
    \u0275\u0275elementEnd()();
  }
}
function MyReviews_Conditional_10_For_2_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 33);
    \u0275\u0275element(1, "i", 59);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const review_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(3, 1, review_r3.createdAt, "dd MMM yyyy"), " ");
  }
}
function MyReviews_Conditional_10_For_2_For_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 36);
  }
}
function MyReviews_Conditional_10_For_2_For_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 37);
  }
}
function MyReviews_Conditional_10_For_2_Conditional_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 46);
    \u0275\u0275element(1, "i", 60);
    \u0275\u0275text(2, " Siliniyor... ");
    \u0275\u0275elementEnd();
  }
}
function MyReviews_Conditional_10_For_2_Conditional_31_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 61);
    \u0275\u0275listener("click", function MyReviews_Conditional_10_For_2_Conditional_31_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const review_r3 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.askDelete(review_r3.id));
    });
    \u0275\u0275element(1, "i", 62);
    \u0275\u0275text(2, " Sil ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275property("disabled", ctx_r0.confirmDeleteId() !== null);
  }
}
function MyReviews_Conditional_10_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, MyReviews_Conditional_10_For_2_Conditional_0_Template, 15, 1, "div", 23);
    \u0275\u0275elementStart(1, "div", 24)(2, "div", 25)(3, "div", 26)(4, "div", 27);
    \u0275\u0275conditionalCreate(5, MyReviews_Conditional_10_For_2_Conditional_5_Template, 1, 2, "img", 28)(6, MyReviews_Conditional_10_For_2_Conditional_6_Template, 4, 0, "div", 29);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 30)(8, "div", 31)(9, "a", 32);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(11, MyReviews_Conditional_10_For_2_Conditional_11_Template, 4, 4, "span", 33);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 34)(13, "div", 35);
    \u0275\u0275repeaterCreate(14, MyReviews_Conditional_10_For_2_For_15_Template, 1, 0, "i", 36, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275repeaterCreate(16, MyReviews_Conditional_10_For_2_For_17_Template, 1, 0, "i", 37, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "span", 38);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "div", 39);
    \u0275\u0275element(21, "i", 40);
    \u0275\u0275elementStart(22, "p", 41);
    \u0275\u0275text(23);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "div", 42)(25, "div", 43);
    \u0275\u0275element(26, "i", 44);
    \u0275\u0275elementStart(27, "span");
    \u0275\u0275text(28);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "div", 45);
    \u0275\u0275conditionalCreate(30, MyReviews_Conditional_10_For_2_Conditional_30_Template, 3, 0, "button", 46)(31, MyReviews_Conditional_10_For_2_Conditional_31_Template, 3, 1, "button", 47);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const review_r3 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275conditional(ctx_r0.confirmDeleteId() === review_r3.id ? 0 : -1);
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r0.confirmDeleteId() === review_r3.id ? "border-red-500/20 opacity-60" : "border-white/5 hover:border-white/10");
    \u0275\u0275advance(4);
    \u0275\u0275conditional(review_r3.productImageUrl ? 5 : 6);
    \u0275\u0275advance(4);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(11, _c1, review_r3.productId));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", review_r3.productName, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(review_r3.createdAt ? 11 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r0.getStarsArray(review_r3.starRating));
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r0.getEmptyStarsArray(review_r3.starRating));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", review_r3.starRating, "/5 ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(review_r3.reviewText);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", review_r3.helpfulVotes || 0, " ki\u015Fi faydal\u0131 buldu");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.deletingId() === review_r3.id ? 30 : 31);
  }
}
function MyReviews_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275repeaterCreate(1, MyReviews_Conditional_10_For_2_Template, 32, 13, null, null, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r0.reviews());
  }
}
var MyReviews = class _MyReviews {
  reviewService = inject(ReviewService);
  // Silme sonrası listeyi yeniden tetiklemek için
  refresh$ = new BehaviorSubject(void 0);
  // toSignal → null: yükleniyor | []: boş | [...]: dolu
  reviews = toSignal(this.refresh$.pipe(switchMap(() => this.reviewService.getMyReviews().pipe(shareReplay(1), catchError(() => {
    this.apiError.set("Yorumlar y\xFCklenirken bir hata olu\u015Ftu. L\xFCtfen sayfay\u0131 yenileyin.");
    return of([]);
  })))), { initialValue: null });
  // Durum sinyalleri
  deletingId = signal(null, ...ngDevMode ? [{ debugName: "deletingId" }] : (
    /* istanbul ignore next */
    []
  ));
  deleteError = signal("", ...ngDevMode ? [{ debugName: "deleteError" }] : (
    /* istanbul ignore next */
    []
  ));
  confirmDeleteId = signal(null, ...ngDevMode ? [{ debugName: "confirmDeleteId" }] : (
    /* istanbul ignore next */
    []
  ));
  apiError = signal("", ...ngDevMode ? [{ debugName: "apiError" }] : (
    /* istanbul ignore next */
    []
  ));
  getStarsArray(rating) {
    return Array(Math.max(0, Math.min(5, rating))).fill(0);
  }
  getEmptyStarsArray(rating) {
    return Array(5 - Math.max(0, Math.min(5, rating))).fill(0);
  }
  askDelete(reviewId) {
    this.confirmDeleteId.set(reviewId);
    this.deleteError.set("");
  }
  cancelDelete() {
    this.confirmDeleteId.set(null);
  }
  confirmDelete(reviewId) {
    this.deletingId.set(reviewId);
    this.confirmDeleteId.set(null);
    this.reviewService.deleteReview(reviewId).subscribe({
      next: () => {
        this.deletingId.set(null);
        this.refresh$.next();
      },
      error: () => {
        this.deletingId.set(null);
        this.deleteError.set("Yorum silinirken bir hata olu\u015Ftu. L\xFCtfen tekrar deneyin.");
        setTimeout(() => this.deleteError.set(""), 4e3);
      }
    });
  }
  static \u0275fac = function MyReviews_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MyReviews)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MyReviews, selectors: [["app-my-reviews"]], decls: 11, vars: 3, consts: [[1, "p-6", "md:p-8", "space-y-6"], [1, "pb-5", "border-b", "border-white/5"], [1, "text-2xl", "font-black", "text-white", "tracking-tight"], [1, "text-gray-500", "text-sm", "mt-1"], [1, "flex", "items-center", "gap-3", "px-4", "py-3.5", "rounded-xl", "border", "border-red-500/30", "text-red-400", "text-sm", "font-medium", 2, "background", "rgba(239,68,68,0.08)"], [1, "space-y-5"], [1, "flex", "flex-col", "items-center", "justify-center", "py-20", "text-center", "rounded-2xl", "border", "border-white/5", 2, "background", "rgba(255,255,255,0.01)"], [1, "fas", "fa-exclamation-circle"], [1, "rounded-2xl", "border", "border-white/5", "overflow-hidden", "animate-pulse", "flex", "flex-col", "md:flex-row", 2, "background", "rgba(255,255,255,0.02)"], [1, "md:w-52", "h-40", "md:h-auto", "bg-gray-800", "flex-shrink-0"], [1, "flex-1", "p-5", "space-y-4"], [1, "flex", "items-start", "justify-between", "gap-4"], [1, "h-4", "bg-gray-700", "rounded-lg", "w-2/3"], [1, "h-6", "bg-gray-800", "rounded-lg", "w-24", "flex-shrink-0"], [1, "h-5", "bg-gray-800", "rounded-lg", "w-32"], [1, "h-16", "bg-gray-800", "rounded-xl"], [1, "flex", "justify-between", "items-center", "pt-3", "border-t", "border-white/5"], [1, "h-3", "bg-gray-800", "rounded", "w-32"], [1, "h-8", "bg-gray-700", "rounded-lg", "w-16"], [1, "w-20", "h-20", "rounded-2xl", "flex", "items-center", "justify-center", "mb-5", "shadow-lg", 2, "background", "linear-gradient(135deg, rgba(234,179,8,0.15), rgba(245,158,11,0.1))"], [1, "fas", "fa-star", "text-3xl", "text-yellow-400"], [1, "text-xl", "font-black", "text-white", "mb-2"], [1, "text-gray-500", "max-w-sm", "text-sm", "leading-relaxed"], [1, "rounded-2xl", "border", "border-red-500/30", "overflow-hidden", 2, "background", "rgba(239,68,68,0.06)"], [1, "relative", "rounded-2xl", "border", "overflow-hidden", "transition-all", "duration-300", 2, "background", "rgba(255,255,255,0.02)"], [1, "flex", "flex-col", "md:flex-row", "gap-0"], [1, "md:w-52", "flex-shrink-0", "border-b", "md:border-b-0", "md:border-r", "border-white/5"], [1, "h-40", "md:h-full", "flex", "items-center", "justify-center", "overflow-hidden", 2, "background", "rgba(255,255,255,0.02)"], [1, "w-full", "h-full", "object-contain", "p-4", 3, "src", "alt"], [1, "flex", "flex-col", "items-center", "gap-2", "text-gray-700"], [1, "flex-1", "flex", "flex-col", "p-5", "md:p-6"], [1, "flex", "items-start", "justify-between", "gap-4", "mb-4"], [1, "text-sm", "font-bold", "text-blue-400", "hover:text-blue-300", "transition-colors", "leading-tight", "line-clamp-2", 3, "routerLink"], [1, "flex-shrink-0", "text-xs", "text-gray-500", "border", "border-gray-700/60", "px-2.5", "py-1", "rounded-lg", "flex", "items-center", "gap-1.5", 2, "background", "rgba(255,255,255,0.02)"], [1, "flex", "items-center", "gap-3", "mb-4"], [1, "flex", "gap-1"], [1, "fas", "fa-star", "text-yellow-400"], [1, "far", "fa-star", "text-gray-700"], [1, "text-xs", "font-bold", "text-yellow-400", "bg-yellow-500/10", "border", "border-yellow-500/20", "px-2", "py-0.5", "rounded-lg"], [1, "relative", "flex-1", "rounded-xl", "px-4", "py-4", "mb-4", "border-l-2", "border-blue-500/40", 2, "background", "rgba(255,255,255,0.02)"], [1, "fas", "fa-quote-left", "absolute", "top-3", "left-3", "text-gray-700", "text-xs"], [1, "text-gray-300", "text-sm", "leading-relaxed", "pl-4"], [1, "flex", "items-center", "justify-between", "pt-4", "border-t", "border-white/5"], [1, "flex", "items-center", "gap-2", "text-xs", "text-gray-500"], [1, "fas", "fa-thumbs-up", "text-gray-700"], [1, "flex", "gap-2"], ["disabled", "", 1, "inline-flex", "items-center", "gap-1.5", "text-xs", "font-semibold", "px-3", "py-1.5", "rounded-lg", "border", "border-red-500/30", "text-red-400", "opacity-70", "cursor-not-allowed", 2, "background", "rgba(239,68,68,0.05)"], [1, "inline-flex", "items-center", "gap-1.5", "text-xs", "font-semibold", "px-3", "py-1.5", "rounded-lg", "border", "transition-all", "duration-200", "text-red-400", "border-red-500/30", "hover:bg-red-500/10", "disabled:opacity-40", "disabled:cursor-not-allowed", 2, "background", "rgba(239,68,68,0.05)", 3, "disabled"], [1, "p-5", "flex", "flex-col", "sm:flex-row", "items-start", "sm:items-center", "justify-between", "gap-4"], [1, "flex", "items-center", "gap-3"], [1, "w-10", "h-10", "rounded-xl", "flex", "items-center", "justify-center", "flex-shrink-0", 2, "background", "rgba(239,68,68,0.15)"], [1, "fas", "fa-trash-alt", "text-red-400"], [1, "text-sm", "font-bold", "text-white"], [1, "text-xs", "text-gray-500", "mt-0.5"], [1, "flex", "gap-2", "flex-shrink-0"], [1, "px-4", "py-2", "rounded-lg", "text-xs", "font-bold", "text-gray-300", "border", "border-gray-600", "hover:border-gray-500", "hover:text-white", "transition-all", "duration-200", 2, "background", "rgba(255,255,255,0.03)", 3, "click"], [1, "px-4", "py-2", "rounded-lg", "text-xs", "font-bold", "text-white", "transition-all", "duration-200", "hover:shadow-lg", 2, "background", "linear-gradient(135deg, #ef4444, #dc2626)", 3, "click"], [1, "fas", "fa-image", "text-4xl"], [1, "text-xs"], [1, "far", "fa-calendar-alt", "text-gray-600"], [1, "fas", "fa-circle-notch", "fa-spin", "text-[10px]"], [1, "inline-flex", "items-center", "gap-1.5", "text-xs", "font-semibold", "px-3", "py-1.5", "rounded-lg", "border", "transition-all", "duration-200", "text-red-400", "border-red-500/30", "hover:bg-red-500/10", "disabled:opacity-40", "disabled:cursor-not-allowed", 2, "background", "rgba(239,68,68,0.05)", 3, "click", "disabled"], [1, "fas", "fa-trash-alt"]], template: function MyReviews_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h2", 2);
      \u0275\u0275text(3, "\xDCr\xFCn Yorumlar\u0131m");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "p", 3);
      \u0275\u0275text(5, "Sat\u0131n al\u0131p de\u011Ferlendirdi\u011Finiz t\xFCm \xFCr\xFCnler");
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(6, MyReviews_Conditional_6_Template, 3, 1, "div", 4);
      \u0275\u0275conditionalCreate(7, MyReviews_Conditional_7_Template, 3, 1, "div", 4);
      \u0275\u0275conditionalCreate(8, MyReviews_Conditional_8_Template, 3, 1, "div", 5)(9, MyReviews_Conditional_9_Template, 7, 0, "div", 6)(10, MyReviews_Conditional_10_Template, 3, 0, "div", 5);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(6);
      \u0275\u0275conditional(ctx.apiError() ? 6 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.deleteError() ? 7 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.reviews() === null ? 8 : ctx.reviews().length === 0 ? 9 : 10);
    }
  }, dependencies: [CommonModule, RouterModule, RouterLink, DatePipe], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MyReviews, [{
    type: Component,
    args: [{ selector: "app-my-reviews", standalone: true, imports: [CommonModule, RouterModule], template: `<div class="p-6 md:p-8 space-y-6">

  <!-- Page Header -->
  <div class="pb-5 border-b border-white/5">
    <h2 class="text-2xl font-black text-white tracking-tight">\xDCr\xFCn Yorumlar\u0131m</h2>
    <p class="text-gray-500 text-sm mt-1">Sat\u0131n al\u0131p de\u011Ferlendirdi\u011Finiz t\xFCm \xFCr\xFCnler</p>
  </div>

  <!-- API Hatas\u0131 -->
  @if (apiError()) {
    <div class="flex items-center gap-3 px-4 py-3.5 rounded-xl border border-red-500/30 text-red-400 text-sm font-medium"
         style="background: rgba(239,68,68,0.08);">
      <i class="fas fa-exclamation-circle"></i> {{ apiError() }}
    </div>
  }

  <!-- Silme Hatas\u0131 -->
  @if (deleteError()) {
    <div class="flex items-center gap-3 px-4 py-3.5 rounded-xl border border-red-500/30 text-red-400 text-sm font-medium"
         style="background: rgba(239,68,68,0.08);">
      <i class="fas fa-exclamation-circle"></i> {{ deleteError() }}
    </div>
  }

  @if (reviews() === null) {
    <!-- Skeleton -->
    <div class="space-y-5">
      @for (i of [1, 2, 3]; track i) {
        <div class="rounded-2xl border border-white/5 overflow-hidden animate-pulse flex flex-col md:flex-row"
             style="background: rgba(255,255,255,0.02);">
          <div class="md:w-52 h-40 md:h-auto bg-gray-800 flex-shrink-0"></div>
          <div class="flex-1 p-5 space-y-4">
            <div class="flex items-start justify-between gap-4">
              <div class="h-4 bg-gray-700 rounded-lg w-2/3"></div>
              <div class="h-6 bg-gray-800 rounded-lg w-24 flex-shrink-0"></div>
            </div>
            <div class="h-5 bg-gray-800 rounded-lg w-32"></div>
            <div class="h-16 bg-gray-800 rounded-xl"></div>
            <div class="flex justify-between items-center pt-3 border-t border-white/5">
              <div class="h-3 bg-gray-800 rounded w-32"></div>
              <div class="h-8 bg-gray-700 rounded-lg w-16"></div>
            </div>
          </div>
        </div>
      }
    </div>

  } @else if (reviews()!.length === 0) {
    <!-- Bo\u015F Durum -->
    <div class="flex flex-col items-center justify-center py-20 text-center rounded-2xl border border-white/5"
         style="background: rgba(255,255,255,0.01);">
      <div class="w-20 h-20 rounded-2xl flex items-center justify-center mb-5 shadow-lg"
           style="background: linear-gradient(135deg, rgba(234,179,8,0.15), rgba(245,158,11,0.1));">
        <i class="fas fa-star text-3xl text-yellow-400"></i>
      </div>
      <h3 class="text-xl font-black text-white mb-2">Hen\xFCz De\u011Ferlendirme Yapmad\u0131n\u0131z</h3>
      <p class="text-gray-500 max-w-sm text-sm leading-relaxed">
        Sat\u0131n ald\u0131\u011F\u0131n\u0131z \xFCr\xFCnleri de\u011Ferlendirerek di\u011Fer m\xFC\u015Fterilere yard\u0131mc\u0131 olabilirsiniz.
      </p>
    </div>

  } @else {
    <div class="space-y-5">
      @for (review of reviews()!; track review.id) {

        <!-- Silme Onay Kart\u0131 -->
        @if (confirmDeleteId() === review.id) {
          <div class="rounded-2xl border border-red-500/30 overflow-hidden"
               style="background: rgba(239,68,68,0.06);">
            <div class="p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div class="flex items-center gap-3">
                <span class="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                      style="background: rgba(239,68,68,0.15);">
                  <i class="fas fa-trash-alt text-red-400"></i>
                </span>
                <div>
                  <p class="text-sm font-bold text-white">"{{ review.productName }}" yorumunu silmek istiyor musunuz?</p>
                  <p class="text-xs text-gray-500 mt-0.5">Bu i\u015Flem geri al\u0131namaz.</p>
                </div>
              </div>
              <div class="flex gap-2 flex-shrink-0">
                <button (click)="cancelDelete()"
                  class="px-4 py-2 rounded-lg text-xs font-bold text-gray-300 border border-gray-600 hover:border-gray-500 hover:text-white transition-all duration-200"
                  style="background: rgba(255,255,255,0.03);">
                  \u0130ptal
                </button>
                <button (click)="confirmDelete(review.id)"
                  class="px-4 py-2 rounded-lg text-xs font-bold text-white transition-all duration-200 hover:shadow-lg"
                  style="background: linear-gradient(135deg, #ef4444, #dc2626);">
                  Evet, Sil
                </button>
              </div>
            </div>
          </div>
        }

        <!-- Yorum Kart\u0131 -->
        <div class="relative rounded-2xl border overflow-hidden transition-all duration-300"
             [class]="confirmDeleteId() === review.id
               ? 'border-red-500/20 opacity-60'
               : 'border-white/5 hover:border-white/10'"
             style="background: rgba(255,255,255,0.02);">

          <div class="flex flex-col md:flex-row gap-0">

            <!-- Sol: \xDCr\xFCn G\xF6rseli -->
            <div class="md:w-52 flex-shrink-0 border-b md:border-b-0 md:border-r border-white/5">
              <div class="h-40 md:h-full flex items-center justify-center overflow-hidden"
                   style="background: rgba(255,255,255,0.02);">
                @if (review.productImageUrl) {
                  <img [src]="review.productImageUrl" [alt]="review.productName"
                       class="w-full h-full object-contain p-4">
                } @else {
                  <div class="flex flex-col items-center gap-2 text-gray-700">
                    <i class="fas fa-image text-4xl"></i>
                    <span class="text-xs">G\xF6rsel yok</span>
                  </div>
                }
              </div>
            </div>

            <!-- Sa\u011F: Yorum Detay\u0131 -->
            <div class="flex-1 flex flex-col p-5 md:p-6">

              <!-- \xDCr\xFCn Ad\u0131 + Tarih -->
              <div class="flex items-start justify-between gap-4 mb-4">
                <a [routerLink]="['/katalog', review.productId]"
                   class="text-sm font-bold text-blue-400 hover:text-blue-300 transition-colors leading-tight line-clamp-2">
                  {{ review.productName }}
                </a>
                @if (review.createdAt) {
                  <span class="flex-shrink-0 text-xs text-gray-500 border border-gray-700/60 px-2.5 py-1 rounded-lg flex items-center gap-1.5"
                        style="background: rgba(255,255,255,0.02);">
                    <i class="far fa-calendar-alt text-gray-600"></i>
                    {{ review.createdAt | date:'dd MMM yyyy' }}
                  </span>
                }
              </div>

              <!-- Y\u0131ld\u0131z Rating -->
              <div class="flex items-center gap-3 mb-4">
                <div class="flex gap-1">
                  @for (star of getStarsArray(review.starRating); track $index) {
                    <i class="fas fa-star text-yellow-400"></i>
                  }
                  @for (empty of getEmptyStarsArray(review.starRating); track $index) {
                    <i class="far fa-star text-gray-700"></i>
                  }
                </div>
                <span class="text-xs font-bold text-yellow-400 bg-yellow-500/10 border border-yellow-500/20 px-2 py-0.5 rounded-lg">
                  {{ review.starRating }}/5
                </span>
              </div>

              <!-- Yorum Metni -->
              <div class="relative flex-1 rounded-xl px-4 py-4 mb-4 border-l-2 border-blue-500/40"
                   style="background: rgba(255,255,255,0.02);">
                <i class="fas fa-quote-left absolute top-3 left-3 text-gray-700 text-xs"></i>
                <p class="text-gray-300 text-sm leading-relaxed pl-4">{{ review.reviewText }}</p>
              </div>

              <!-- Footer -->
              <div class="flex items-center justify-between pt-4 border-t border-white/5">
                <div class="flex items-center gap-2 text-xs text-gray-500">
                  <i class="fas fa-thumbs-up text-gray-700"></i>
                  <span>{{ review.helpfulVotes || 0 }} ki\u015Fi faydal\u0131 buldu</span>
                </div>
                <div class="flex gap-2">
                  @if (deletingId() === review.id) {
                    <button disabled
                      class="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg border border-red-500/30 text-red-400 opacity-70 cursor-not-allowed"
                      style="background: rgba(239,68,68,0.05);">
                      <i class="fas fa-circle-notch fa-spin text-[10px]"></i> Siliniyor...
                    </button>
                  } @else {
                    <button (click)="askDelete(review.id)"
                      [disabled]="confirmDeleteId() !== null"
                      class="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg border transition-all duration-200
                             text-red-400 border-red-500/30 hover:bg-red-500/10 disabled:opacity-40 disabled:cursor-not-allowed"
                      style="background: rgba(239,68,68,0.05);">
                      <i class="fas fa-trash-alt"></i> Sil
                    </button>
                  }
                </div>
              </div>

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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MyReviews, { className: "MyReviews", filePath: "app/features/individual/profile/my-reviews/my-reviews.ts", lineNumber: 15 });
})();
export {
  MyReviews
};
//# sourceMappingURL=chunk-2KBAI6AQ.js.map
