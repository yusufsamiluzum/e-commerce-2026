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
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-K2NYDLGG.mjs";
import "./chunk-T2KOBY73.mjs";

// src/app/features/admin/reviews/review-moderation.ts
var _c0 = () => [1, 2, 3, 4];
var _forTrack0 = ($index, $item) => $item.id;
function ReviewModeration_For_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "button", 8);
    \u0275\u0275domListener("click", function ReviewModeration_For_9_Template_button_click_0_listener() {
      const s_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.filterBySentiment(s_r2));
    });
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const s_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classMap(ctx_r2.selectedSentiment() === s_r2 || s_r2 === "ALL" && !ctx_r2.selectedSentiment() ? "bg-blue-600 text-white shadow-lg shadow-blue-500/20" : "bg-gray-800 text-gray-300 hover:bg-gray-700");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", s_r2 === "ALL" ? "T\xFCm\xFC" : s_r2 === "POSITIVE" ? "\u{1F60A} Pozitif" : s_r2 === "NEGATIVE" ? "\u{1F620} Negatif" : "\u{1F610} N\xF6tr", " ");
  }
}
function ReviewModeration_Conditional_10_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 9);
    \u0275\u0275domElement(1, "div", 10)(2, "div", 11)(3, "div", 12)(4, "div", 13);
    \u0275\u0275domElementEnd();
  }
}
function ReviewModeration_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 6);
    \u0275\u0275repeaterCreate(1, ReviewModeration_Conditional_10_For_2_Template, 5, 0, "div", 9, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275repeater(\u0275\u0275pureFunction0(0, _c0));
  }
}
function ReviewModeration_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 7)(1, "div", 14);
    \u0275\u0275text(2, "\u{1F4DD}");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "p", 15);
    \u0275\u0275text(4, "Yorum bulunamad\u0131");
    \u0275\u0275domElementEnd()();
  }
}
function ReviewModeration_Conditional_12_For_2_For_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275domElementStart(0, "svg", 34);
    \u0275\u0275domElement(1, "path", 35);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const star_r4 = ctx.$implicit;
    \u0275\u0275classMap(star_r4 ? "text-yellow-400" : "text-gray-600");
  }
}
function ReviewModeration_Conditional_12_For_2_Conditional_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "div", 32)(1, "span", 36);
    \u0275\u0275text(2, "Emin misin?");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "button", 37);
    \u0275\u0275domListener("click", function ReviewModeration_Conditional_12_For_2_Conditional_29_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r5);
      const review_r6 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.deleteReview(review_r6.id));
    });
    \u0275\u0275text(4, "Sil");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(5, "button", 38);
    \u0275\u0275domListener("click", function ReviewModeration_Conditional_12_For_2_Conditional_29_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.cancelDelete());
    });
    \u0275\u0275text(6, "\u0130ptal");
    \u0275\u0275domElementEnd()();
  }
}
function ReviewModeration_Conditional_12_For_2_Conditional_30_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "button", 39);
    \u0275\u0275domListener("click", function ReviewModeration_Conditional_12_For_2_Conditional_30_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r7);
      const review_r6 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.confirmDelete(review_r6.id));
    });
    \u0275\u0275text(1, " \u{1F5D1}\uFE0F Kald\u0131r ");
    \u0275\u0275domElementEnd();
  }
}
function ReviewModeration_Conditional_12_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 16)(1, "div", 18)(2, "div")(3, "p", 19);
    \u0275\u0275text(4);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(5, "p", 20);
    \u0275\u0275text(6);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(7, "div", 21);
    \u0275\u0275repeaterCreate(8, ReviewModeration_Conditional_12_For_2_For_9_Template, 2, 2, ":svg:svg", 22, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(10, "div", 23)(11, "span", 24);
    \u0275\u0275text(12);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(13, "span", 25);
    \u0275\u0275text(14, "\u2022");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(15, "span", 26);
    \u0275\u0275text(16);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(17, "div", 27)(18, "span", 28);
    \u0275\u0275text(19);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(20, "p", 29);
    \u0275\u0275text(21);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(22, "div", 30)(23, "div", 31)(24, "span");
    \u0275\u0275text(25);
    \u0275\u0275pipe(26, "date");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(27, "span");
    \u0275\u0275text(28);
    \u0275\u0275domElementEnd()();
    \u0275\u0275conditionalCreate(29, ReviewModeration_Conditional_12_For_2_Conditional_29_Template, 7, 0, "div", 32)(30, ReviewModeration_Conditional_12_For_2_Conditional_30_Template, 2, 0, "button", 33);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const review_r6 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(review_r6.userName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(review_r6.userEmail);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r2.starsArray(review_r6.starRating));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(review_r6.productName);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(review_r6.storeName);
    \u0275\u0275advance(2);
    \u0275\u0275classMap(ctx_r2.sentimentColor(review_r6.sentiment));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", review_r6.sentiment || "N/A", " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(review_r6.reviewText);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(26, 12, review_r6.createdAt, "dd MMM yyyy"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("\u{1F44D} ", review_r6.helpfulVotes, "/", review_r6.totalVotes);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.confirmDeleteId() === review_r6.id ? 29 : 30);
  }
}
function ReviewModeration_Conditional_12_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "div", 17)(1, "button", 40);
    \u0275\u0275domListener("click", function ReviewModeration_Conditional_12_Conditional_3_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.goToPage(ctx_r2.currentPage() - 1));
    });
    \u0275\u0275text(2, " \u2190 \xD6nceki ");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "span", 41);
    \u0275\u0275text(4);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(5, "button", 40);
    \u0275\u0275domListener("click", function ReviewModeration_Conditional_12_Conditional_3_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.goToPage(ctx_r2.currentPage() + 1));
    });
    \u0275\u0275text(6, " Sonraki \u2192 ");
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r2.currentPage() === 0 ? "bg-gray-800 text-gray-600 cursor-not-allowed" : "bg-gray-800 text-gray-300 hover:bg-gray-700");
    \u0275\u0275domProperty("disabled", ctx_r2.currentPage() === 0);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", ctx_r2.currentPage() + 1, " / ", ctx_r2.totalPages());
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r2.currentPage() >= ctx_r2.totalPages() - 1 ? "bg-gray-800 text-gray-600 cursor-not-allowed" : "bg-gray-800 text-gray-300 hover:bg-gray-700");
    \u0275\u0275domProperty("disabled", ctx_r2.currentPage() >= ctx_r2.totalPages() - 1);
  }
}
function ReviewModeration_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 6);
    \u0275\u0275repeaterCreate(1, ReviewModeration_Conditional_12_For_2_Template, 31, 15, "div", 16, _forTrack0);
    \u0275\u0275domElementEnd();
    \u0275\u0275conditionalCreate(3, ReviewModeration_Conditional_12_Conditional_3_Template, 7, 8, "div", 17);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.reviews());
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r2.totalPages() > 1 ? 3 : -1);
  }
}
var ReviewModeration = class _ReviewModeration {
  admin = inject(AdminService);
  currentPage = signal(0, ...ngDevMode ? [{ debugName: "currentPage" }] : (
    /* istanbul ignore next */
    []
  ));
  selectedSentiment = signal(void 0, ...ngDevMode ? [{ debugName: "selectedSentiment" }] : (
    /* istanbul ignore next */
    []
  ));
  confirmDeleteId = signal(null, ...ngDevMode ? [{ debugName: "confirmDeleteId" }] : (
    /* istanbul ignore next */
    []
  ));
  refresh$ = new Subject();
  reviewData = toSignal(this.refresh$.pipe(startWith(void 0), switchMap(() => this.admin.getAllReviews(this.currentPage(), 20, this.selectedSentiment())), catchError(() => of({ content: [], totalElements: 0, totalPages: 0, number: 0, size: 20, first: true, last: true }))), { initialValue: null });
  reviews = computed(() => this.reviewData()?.content ?? [], ...ngDevMode ? [{ debugName: "reviews" }] : (
    /* istanbul ignore next */
    []
  ));
  totalPages = computed(() => this.reviewData()?.totalPages ?? 0, ...ngDevMode ? [{ debugName: "totalPages" }] : (
    /* istanbul ignore next */
    []
  ));
  sentimentFilters = ["ALL", "POSITIVE", "NEUTRAL", "NEGATIVE"];
  sentimentColor(sentiment) {
    switch (sentiment?.toUpperCase()) {
      case "POSITIVE":
        return "text-green-400 bg-green-900/30";
      case "NEGATIVE":
        return "text-red-400 bg-red-900/30";
      case "NEUTRAL":
        return "text-yellow-400 bg-yellow-900/30";
      default:
        return "text-gray-400 bg-gray-800";
    }
  }
  filterBySentiment(sentiment) {
    this.selectedSentiment.set(sentiment === "ALL" ? void 0 : sentiment);
    this.currentPage.set(0);
    this.refresh$.next();
  }
  goToPage(page) {
    this.currentPage.set(page);
    this.refresh$.next();
  }
  confirmDelete(reviewId) {
    this.confirmDeleteId.set(reviewId);
  }
  cancelDelete() {
    this.confirmDeleteId.set(null);
  }
  deleteReview(reviewId) {
    this.admin.deleteReview(reviewId).subscribe(() => {
      this.confirmDeleteId.set(null);
      this.refresh$.next();
    });
  }
  starsArray(rating) {
    return Array.from({ length: 5 }, (_, i) => i < rating ? 1 : 0);
  }
  static \u0275fac = function ReviewModeration_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ReviewModeration)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ReviewModeration, selectors: [["app-review-moderation"]], decls: 13, vars: 1, consts: [[1, "p-6", "space-y-6"], [1, "flex", "flex-col", "md:flex-row", "md:items-center", "md:justify-between", "gap-4"], [1, "text-2xl", "font-bold", "text-white"], [1, "text-gray-400", "text-sm", "mt-1"], [1, "flex", "gap-2", "flex-wrap"], [1, "px-4", "py-2", "rounded-lg", "text-sm", "font-medium", "transition-all", 3, "class"], [1, "grid", "gap-4", "md:grid-cols-2"], [1, "text-center", "py-16", "text-gray-500"], [1, "px-4", "py-2", "rounded-lg", "text-sm", "font-medium", "transition-all", 3, "click"], [1, "bg-gray-900", "rounded-xl", "p-5", "border", "border-gray-800", "animate-pulse"], [1, "h-4", "bg-gray-700", "rounded", "w-3/4", "mb-3"], [1, "h-3", "bg-gray-700", "rounded", "w-1/2", "mb-4"], [1, "h-16", "bg-gray-700", "rounded", "mb-3"], [1, "h-3", "bg-gray-700", "rounded", "w-1/3"], [1, "text-5xl", "mb-4"], [1, "text-lg", "font-medium"], [1, "bg-gray-900", "rounded-xl", "p-5", "border", "border-gray-800", "hover:border-gray-700", "transition-colors", "relative", "group"], [1, "flex", "items-center", "justify-center", "gap-2", "pt-4"], [1, "flex", "items-start", "justify-between", "mb-3"], [1, "text-white", "font-semibold", "text-sm"], [1, "text-gray-500", "text-xs"], [1, "flex", "items-center", "gap-1"], ["fill", "currentColor", "viewBox", "0 0 20 20", 1, "w-4", "h-4", 3, "class"], [1, "flex", "items-center", "gap-2", "mb-3"], [1, "text-xs", "text-blue-400", "bg-blue-900/20", "px-2", "py-0.5", "rounded"], [1, "text-xs", "text-gray-500"], [1, "text-xs", "text-gray-400"], [1, "mb-3"], [1, "text-xs", "font-medium", "px-2", "py-0.5", "rounded-full"], [1, "text-gray-300", "text-sm", "leading-relaxed", "mb-3", "line-clamp-3"], [1, "flex", "items-center", "justify-between", "pt-3", "border-t", "border-gray-800"], [1, "flex", "items-center", "gap-3", "text-xs", "text-gray-500"], [1, "flex", "items-center", "gap-2"], [1, "text-xs", "text-red-400", "hover:text-red-300", "hover:bg-red-900/20", "px-2", "py-1", "rounded", "transition-colors", "opacity-0", "group-hover:opacity-100"], ["fill", "currentColor", "viewBox", "0 0 20 20", 1, "w-4", "h-4"], ["d", "M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"], [1, "text-red-400", "text-xs"], [1, "text-xs", "bg-red-600", "hover:bg-red-700", "text-white", "px-2", "py-1", "rounded", "transition-colors", 3, "click"], [1, "text-xs", "bg-gray-700", "hover:bg-gray-600", "text-gray-300", "px-2", "py-1", "rounded", "transition-colors", 3, "click"], [1, "text-xs", "text-red-400", "hover:text-red-300", "hover:bg-red-900/20", "px-2", "py-1", "rounded", "transition-colors", "opacity-0", "group-hover:opacity-100", 3, "click"], [1, "px-3", "py-1.5", "text-sm", "rounded-lg", "transition-colors", 3, "click", "disabled"], [1, "text-sm", "text-gray-400"]], template: function ReviewModeration_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h1", 2);
      \u0275\u0275text(4, "Yorum Moderasyonu");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(5, "p", 3);
      \u0275\u0275text(6, "Platform genelindeki \xFCr\xFCn yorumlar\u0131n\u0131 incele ve y\xF6net");
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(7, "div", 4);
      \u0275\u0275repeaterCreate(8, ReviewModeration_For_9_Template, 2, 3, "button", 5, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275domElementEnd();
      \u0275\u0275conditionalCreate(10, ReviewModeration_Conditional_10_Template, 3, 1, "div", 6)(11, ReviewModeration_Conditional_11_Template, 5, 0, "div", 7)(12, ReviewModeration_Conditional_12_Template, 4, 1);
      \u0275\u0275domElementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(8);
      \u0275\u0275repeater(ctx.sentimentFilters);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(!ctx.reviewData() ? 10 : ctx.reviews().length === 0 ? 11 : 12);
    }
  }, dependencies: [CommonModule, DatePipe], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ReviewModeration, [{
    type: Component,
    args: [{ selector: "app-review-moderation", standalone: true, imports: [CommonModule], template: `<div class="p-6 space-y-6">
  <!-- Header -->
  <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
    <div>
      <h1 class="text-2xl font-bold text-white">Yorum Moderasyonu</h1>
      <p class="text-gray-400 text-sm mt-1">Platform genelindeki \xFCr\xFCn yorumlar\u0131n\u0131 incele ve y\xF6net</p>
    </div>
  </div>

  <!-- Sentiment Filter Tabs -->
  <div class="flex gap-2 flex-wrap">
    @for (s of sentimentFilters; track s) {
      <button
        (click)="filterBySentiment(s)"
        [class]="(selectedSentiment() === s || (s === 'ALL' && !selectedSentiment()))
          ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/20'
          : 'bg-gray-800 text-gray-300 hover:bg-gray-700'"
        class="px-4 py-2 rounded-lg text-sm font-medium transition-all">
        {{ s === 'ALL' ? 'T\xFCm\xFC' : s === 'POSITIVE' ? '\u{1F60A} Pozitif' : s === 'NEGATIVE' ? '\u{1F620} Negatif' : '\u{1F610} N\xF6tr' }}
      </button>
    }
  </div>

  <!-- Reviews Grid -->
  @if (!reviewData()) {
    <!-- Skeleton -->
    <div class="grid gap-4 md:grid-cols-2">
      @for (i of [1,2,3,4]; track i) {
        <div class="bg-gray-900 rounded-xl p-5 border border-gray-800 animate-pulse">
          <div class="h-4 bg-gray-700 rounded w-3/4 mb-3"></div>
          <div class="h-3 bg-gray-700 rounded w-1/2 mb-4"></div>
          <div class="h-16 bg-gray-700 rounded mb-3"></div>
          <div class="h-3 bg-gray-700 rounded w-1/3"></div>
        </div>
      }
    </div>
  } @else if (reviews().length === 0) {
    <div class="text-center py-16 text-gray-500">
      <div class="text-5xl mb-4">\u{1F4DD}</div>
      <p class="text-lg font-medium">Yorum bulunamad\u0131</p>
    </div>
  } @else {
    <div class="grid gap-4 md:grid-cols-2">
      @for (review of reviews(); track review.id) {
        <div class="bg-gray-900 rounded-xl p-5 border border-gray-800 hover:border-gray-700 transition-colors relative group">
          <!-- Header: User + Stars -->
          <div class="flex items-start justify-between mb-3">
            <div>
              <p class="text-white font-semibold text-sm">{{ review.userName }}</p>
              <p class="text-gray-500 text-xs">{{ review.userEmail }}</p>
            </div>
            <div class="flex items-center gap-1">
              @for (star of starsArray(review.starRating); track $index) {
                <svg class="w-4 h-4" [class]="star ? 'text-yellow-400' : 'text-gray-600'" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              }
            </div>
          </div>

          <!-- Product + Store -->
          <div class="flex items-center gap-2 mb-3">
            <span class="text-xs text-blue-400 bg-blue-900/20 px-2 py-0.5 rounded">{{ review.productName }}</span>
            <span class="text-xs text-gray-500">\u2022</span>
            <span class="text-xs text-gray-400">{{ review.storeName }}</span>
          </div>

          <!-- Sentiment Badge -->
          <div class="mb-3">
            <span [class]="sentimentColor(review.sentiment)" class="text-xs font-medium px-2 py-0.5 rounded-full">
              {{ review.sentiment || 'N/A' }}
            </span>
          </div>

          <!-- Review Text -->
          <p class="text-gray-300 text-sm leading-relaxed mb-3 line-clamp-3">{{ review.reviewText }}</p>

          <!-- Footer: Date + Actions -->
          <div class="flex items-center justify-between pt-3 border-t border-gray-800">
            <div class="flex items-center gap-3 text-xs text-gray-500">
              <span>{{ review.createdAt | date:'dd MMM yyyy' }}</span>
              <span>\u{1F44D} {{ review.helpfulVotes }}/{{ review.totalVotes }}</span>
            </div>

            @if (confirmDeleteId() === review.id) {
              <div class="flex items-center gap-2">
                <span class="text-red-400 text-xs">Emin misin?</span>
                <button (click)="deleteReview(review.id)" class="text-xs bg-red-600 hover:bg-red-700 text-white px-2 py-1 rounded transition-colors">Sil</button>
                <button (click)="cancelDelete()" class="text-xs bg-gray-700 hover:bg-gray-600 text-gray-300 px-2 py-1 rounded transition-colors">\u0130ptal</button>
              </div>
            } @else {
              <button (click)="confirmDelete(review.id)"
                class="text-xs text-red-400 hover:text-red-300 hover:bg-red-900/20 px-2 py-1 rounded transition-colors opacity-0 group-hover:opacity-100">
                \u{1F5D1}\uFE0F Kald\u0131r
              </button>
            }
          </div>
        </div>
      }
    </div>

    <!-- Pagination -->
    @if (totalPages() > 1) {
      <div class="flex items-center justify-center gap-2 pt-4">
        <button (click)="goToPage(currentPage() - 1)" [disabled]="currentPage() === 0"
          class="px-3 py-1.5 text-sm rounded-lg transition-colors"
          [class]="currentPage() === 0 ? 'bg-gray-800 text-gray-600 cursor-not-allowed' : 'bg-gray-800 text-gray-300 hover:bg-gray-700'">
          \u2190 \xD6nceki
        </button>
        <span class="text-sm text-gray-400">{{ currentPage() + 1 }} / {{ totalPages() }}</span>
        <button (click)="goToPage(currentPage() + 1)" [disabled]="currentPage() >= totalPages() - 1"
          class="px-3 py-1.5 text-sm rounded-lg transition-colors"
          [class]="currentPage() >= totalPages() - 1 ? 'bg-gray-800 text-gray-600 cursor-not-allowed' : 'bg-gray-800 text-gray-300 hover:bg-gray-700'">
          Sonraki \u2192
        </button>
      </div>
    }
  }
</div>
` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ReviewModeration, { className: "ReviewModeration", filePath: "app/features/admin/reviews/review-moderation.ts", lineNumber: 13 });
})();
export {
  ReviewModeration
};
//# sourceMappingURL=chunk-TNLLC7V2.mjs.map
