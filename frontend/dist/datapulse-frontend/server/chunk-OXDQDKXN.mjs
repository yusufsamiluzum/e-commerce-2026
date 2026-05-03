import './polyfills.server.mjs';
import {
  CorporateService
} from "./chunk-DZWYPOOC.mjs";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-ZZHQPMHV.mjs";
import {
  CommonModule,
  Component,
  DatePipe,
  DecimalPipe,
  inject,
  setClassMetadata,
  signal,
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
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-K2NYDLGG.mjs";
import "./chunk-T2KOBY73.mjs";

// src/app/features/corporate/reviews/store-reviews.ts
var _c0 = () => [1, 2, 3];
var _c1 = () => [5, 4, 3, 2, 1];
var _forTrack0 = ($index, $item) => $item.rating;
var _forTrack1 = ($index, $item) => $item.id;
function StoreReviews_Conditional_7_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "div", 7);
    \u0275\u0275element(2, "div", 8);
    \u0275\u0275elementStart(3, "div", 9);
    \u0275\u0275element(4, "div", 10)(5, "div", 11);
    \u0275\u0275elementEnd()()();
  }
}
function StoreReviews_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275repeaterCreate(1, StoreReviews_Conditional_7_For_2_Template, 6, 0, "div", 6, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275repeater(\u0275\u0275pureFunction0(0, _c0));
  }
}
function StoreReviews_Conditional_8_For_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 25)(1, "div", 32);
    \u0275\u0275element(2, "div", 33);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 34);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const rd_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("height", ctx_r2.reviews().length ? rd_r2.count / ctx_r2.reviews().length * 40 : 0, "px");
    \u0275\u0275property("title", rd_r2.rating + " y\u0131ld\u0131z: " + rd_r2.count + " yorum");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", rd_r2.rating, "\u2605");
  }
}
function StoreReviews_Conditional_8_For_34_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 35);
    \u0275\u0275listener("click", function StoreReviews_Conditional_8_For_34_Template_button_click_0_listener() {
      const r_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.filterRating.set(r_r5));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const r_r5 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275classMap(ctx_r2.filterRating() === r_r5 ? "bg-yellow-600 text-white" : "bg-gray-800 text-gray-400 hover:text-white");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", r_r5, "\u2605");
  }
}
function StoreReviews_Conditional_8_Conditional_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 31)(1, "h3", 36);
    \u0275\u0275text(2, "Yorum Bulunamad\u0131");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 37);
    \u0275\u0275text(4, "Filtreye uygun yorum yok.");
    \u0275\u0275elementEnd()();
  }
}
function StoreReviews_Conditional_8_Conditional_36_For_2_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 60);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const review_r6 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275classMap(ctx_r2.sentimentColors[review_r6.sentiment]);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.sentimentLabels[review_r6.sentiment] || review_r6.sentiment, " ");
  }
}
function StoreReviews_Conditional_8_Conditional_36_For_2_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 55);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const review_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(review_r6.reviewText);
  }
}
function StoreReviews_Conditional_8_Conditional_36_For_2_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 56);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const review_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" \u{1F44D} ", review_r6.helpfulVotes, "/", review_r6.totalVotes, " ki\u015Fi faydal\u0131 buldu ");
  }
}
function StoreReviews_Conditional_8_Conditional_36_For_2_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 57)(1, "div", 61)(2, "div", 46);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(3, "svg", 62);
    \u0275\u0275element(4, "path", 63);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(5, "span", 64);
    \u0275\u0275text(6, "Ma\u011Faza Yan\u0131t\u0131");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 46)(8, "span", 34);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "button", 65);
    \u0275\u0275listener("click", function StoreReviews_Conditional_8_Conditional_36_For_2_Conditional_26_Template_button_click_11_listener() {
      \u0275\u0275restoreView(_r7);
      const review_r6 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.startEditReply(review_r6));
    });
    \u0275\u0275text(12, "D\xFCzenle");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "button", 66);
    \u0275\u0275listener("click", function StoreReviews_Conditional_8_Conditional_36_For_2_Conditional_26_Template_button_click_13_listener() {
      \u0275\u0275restoreView(_r7);
      const review_r6 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.deleteReply(review_r6.id));
    });
    \u0275\u0275text(14, "Sil");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(15, "p", 55);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const review_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(10, 2, review_r6.replyDate, "dd MMM yyyy"));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(review_r6.ownerReply);
  }
}
function StoreReviews_Conditional_8_Conditional_36_For_2_Conditional_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 58)(1, "div", 67);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 62);
    \u0275\u0275element(3, "path", 63);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(4, "span", 64);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "textarea", 68);
    \u0275\u0275listener("ngModelChange", function StoreReviews_Conditional_8_Conditional_36_For_2_Conditional_27_Template_textarea_ngModelChange_6_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r2.replyText.set($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 69)(8, "button", 70);
    \u0275\u0275listener("click", function StoreReviews_Conditional_8_Conditional_36_For_2_Conditional_27_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r2.cancelReply());
    });
    \u0275\u0275text(9, " \u0130ptal ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "button", 71);
    \u0275\u0275listener("click", function StoreReviews_Conditional_8_Conditional_36_For_2_Conditional_27_Template_button_click_10_listener() {
      \u0275\u0275restoreView(_r8);
      const review_r6 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.submitReply(review_r6.id));
    });
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const review_r6 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(review_r6.ownerReply ? "Yan\u0131t\u0131 D\xFCzenle" : "Yan\u0131t Yaz");
    \u0275\u0275advance();
    \u0275\u0275property("ngModel", ctx_r2.replyText());
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", !ctx_r2.replyText().trim() || ctx_r2.isSendingReply());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.isSendingReply() ? "G\xF6nderiliyor..." : "Yan\u0131tla", " ");
  }
}
function StoreReviews_Conditional_8_Conditional_36_For_2_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 72);
    \u0275\u0275listener("click", function StoreReviews_Conditional_8_Conditional_36_For_2_Conditional_28_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r9);
      const review_r6 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.openReplyForm(review_r6.id));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 73);
    \u0275\u0275element(2, "path", 63);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Yan\u0131tla ");
    \u0275\u0275elementEnd();
  }
}
function StoreReviews_Conditional_8_Conditional_36_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 39)(1, "div", 41)(2, "div", 42)(3, "span", 43);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 44)(6, "div", 45)(7, "div", 46)(8, "span", 47);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "span", 48);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 46);
    \u0275\u0275conditionalCreate(13, StoreReviews_Conditional_8_Conditional_36_For_2_Conditional_13_Template, 2, 3, "span", 49);
    \u0275\u0275elementStart(14, "span", 50);
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "date");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(17, "p", 51)(18, "span", 52);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "span", 53);
    \u0275\u0275text(21, "\xB7");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "span", 54);
    \u0275\u0275text(23);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(24, StoreReviews_Conditional_8_Conditional_36_For_2_Conditional_24_Template, 2, 1, "p", 55);
    \u0275\u0275conditionalCreate(25, StoreReviews_Conditional_8_Conditional_36_For_2_Conditional_25_Template, 2, 2, "div", 56);
    \u0275\u0275conditionalCreate(26, StoreReviews_Conditional_8_Conditional_36_For_2_Conditional_26_Template, 17, 5, "div", 57);
    \u0275\u0275conditionalCreate(27, StoreReviews_Conditional_8_Conditional_36_For_2_Conditional_27_Template, 12, 4, "div", 58);
    \u0275\u0275conditionalCreate(28, StoreReviews_Conditional_8_Conditional_36_For_2_Conditional_28_Template, 4, 0, "button", 59);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const review_r6 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(review_r6.customerName.charAt(0));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(review_r6.customerName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.getStars(review_r6.starRating));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(review_r6.sentiment ? 13 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(16, 12, review_r6.createdAt, "dd MMM yyyy"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(review_r6.productName);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(review_r6.productSku);
    \u0275\u0275advance();
    \u0275\u0275conditional(review_r6.reviewText ? 24 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(review_r6.totalVotes > 0 ? 25 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(review_r6.ownerReply && ctx_r2.replyingTo() !== review_r6.id ? 26 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.replyingTo() === review_r6.id ? 27 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!review_r6.ownerReply && ctx_r2.replyingTo() !== review_r6.id ? 28 : -1);
  }
}
function StoreReviews_Conditional_8_Conditional_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 38);
    \u0275\u0275repeaterCreate(1, StoreReviews_Conditional_8_Conditional_36_For_2_Template, 29, 15, "div", 39, _forTrack1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 40);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.filteredReviews);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r2.filteredReviews.length, " yorum g\xF6steriliyor ");
  }
}
function StoreReviews_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 12)(1, "div", 13)(2, "p", 14);
    \u0275\u0275text(3, "Toplam Yorum");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 15);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 13)(7, "p", 16);
    \u0275\u0275text(8, "Ortalama Puan");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "p", 17);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "number");
    \u0275\u0275elementStart(12, "span", 18);
    \u0275\u0275text(13, "\u2B50");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(14, "div", 13)(15, "p", 19);
    \u0275\u0275text(16, "Yan\u0131tlanan");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "p", 20);
    \u0275\u0275text(18);
    \u0275\u0275elementStart(19, "span", 21);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(21, "div", 22)(22, "p", 23);
    \u0275\u0275text(23, "Puan Da\u011F\u0131l\u0131m\u0131");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "div", 24);
    \u0275\u0275repeaterCreate(25, StoreReviews_Conditional_8_For_26_Template, 5, 4, "div", 25, _forTrack0);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(27, "div", 26)(28, "div", 9)(29, "input", 27);
    \u0275\u0275twoWayListener("ngModelChange", function StoreReviews_Conditional_8_Template_input_ngModelChange_29_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.searchTerm, $event) || (ctx_r2.searchTerm = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function StoreReviews_Conditional_8_Template_input_ngModelChange_29_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.searchTerm.set($event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(30, "div", 28)(31, "button", 29);
    \u0275\u0275listener("click", function StoreReviews_Conditional_8_Template_button_click_31_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.filterRating.set(null));
    });
    \u0275\u0275text(32, "T\xFCm\xFC");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(33, StoreReviews_Conditional_8_For_34_Template, 2, 3, "button", 30, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(35, StoreReviews_Conditional_8_Conditional_35_Template, 5, 0, "div", 31)(36, StoreReviews_Conditional_8_Conditional_36_Template, 5, 1);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r2.reviews().length);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(11, 8, ctx_r2.avgRating, "1.1-1"), " ");
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r2.repliedCount);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("/ ", ctx_r2.reviews().length);
    \u0275\u0275advance(5);
    \u0275\u0275repeater(ctx_r2.ratingDistribution);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.searchTerm);
    \u0275\u0275advance(2);
    \u0275\u0275classMap(ctx_r2.filterRating() === null ? "bg-blue-600 text-white" : "bg-gray-800 text-gray-400 hover:text-white");
    \u0275\u0275advance(2);
    \u0275\u0275repeater(\u0275\u0275pureFunction0(11, _c1));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r2.filteredReviews.length === 0 ? 35 : 36);
  }
}
var StoreReviews = class _StoreReviews {
  corporateService = inject(CorporateService);
  reviews = signal([], ...ngDevMode ? [{ debugName: "reviews" }] : (
    /* istanbul ignore next */
    []
  ));
  isLoading = signal(true, ...ngDevMode ? [{ debugName: "isLoading" }] : (
    /* istanbul ignore next */
    []
  ));
  searchTerm = signal("", ...ngDevMode ? [{ debugName: "searchTerm" }] : (
    /* istanbul ignore next */
    []
  ));
  filterRating = signal(null, ...ngDevMode ? [{ debugName: "filterRating" }] : (
    /* istanbul ignore next */
    []
  ));
  // Reply system
  replyingTo = signal(null, ...ngDevMode ? [{ debugName: "replyingTo" }] : (
    /* istanbul ignore next */
    []
  ));
  replyText = signal("", ...ngDevMode ? [{ debugName: "replyText" }] : (
    /* istanbul ignore next */
    []
  ));
  isSendingReply = signal(false, ...ngDevMode ? [{ debugName: "isSendingReply" }] : (
    /* istanbul ignore next */
    []
  ));
  sentimentLabels = {
    "positive": "Olumlu",
    "neutral": "N\xF6tr",
    "negative": "Olumsuz",
    "POSITIVE": "Olumlu",
    "NEUTRAL": "N\xF6tr",
    "NEGATIVE": "Olumsuz"
  };
  sentimentColors = {
    "positive": "text-emerald-400 bg-emerald-500/10",
    "neutral": "text-gray-400 bg-gray-500/10",
    "negative": "text-red-400 bg-red-500/10",
    "POSITIVE": "text-emerald-400 bg-emerald-500/10",
    "NEUTRAL": "text-gray-400 bg-gray-500/10",
    "NEGATIVE": "text-red-400 bg-red-500/10"
  };
  constructor() {
    this.loadReviews();
  }
  loadReviews() {
    this.isLoading.set(true);
    this.corporateService.getStoreReviews().subscribe({
      next: (reviews) => {
        this.reviews.set(reviews);
        this.isLoading.set(false);
      },
      error: () => this.isLoading.set(false)
    });
  }
  get filteredReviews() {
    let list = this.reviews();
    const term = this.searchTerm().toLowerCase();
    if (term) {
      list = list.filter((r) => r.productName.toLowerCase().includes(term) || r.customerName.toLowerCase().includes(term) || r.reviewText && r.reviewText.toLowerCase().includes(term));
    }
    const rating = this.filterRating();
    if (rating !== null) {
      list = list.filter((r) => r.starRating === rating);
    }
    return list;
  }
  get avgRating() {
    const all = this.reviews();
    if (!all.length)
      return 0;
    return all.reduce((sum, r) => sum + r.starRating, 0) / all.length;
  }
  get ratingDistribution() {
    const all = this.reviews();
    return [5, 4, 3, 2, 1].map((rating) => ({
      rating,
      count: all.filter((r) => r.starRating === rating).length
    }));
  }
  get repliedCount() {
    return this.reviews().filter((r) => r.ownerReply).length;
  }
  getStars(rating) {
    return "\u2605".repeat(rating) + "\u2606".repeat(5 - rating);
  }
  // ─── Reply Methods ─────────────────────────────────
  openReplyForm(reviewId) {
    this.replyingTo.set(reviewId);
    this.replyText.set("");
  }
  cancelReply() {
    this.replyingTo.set(null);
    this.replyText.set("");
  }
  submitReply(reviewId) {
    const text = this.replyText().trim();
    if (!text)
      return;
    this.isSendingReply.set(true);
    this.corporateService.replyToReview(reviewId, text).subscribe({
      next: (updated) => {
        const current = this.reviews();
        this.reviews.set(current.map((r) => r.id === updated.id ? updated : r));
        this.replyingTo.set(null);
        this.replyText.set("");
        this.isSendingReply.set(false);
      },
      error: () => this.isSendingReply.set(false)
    });
  }
  startEditReply(review) {
    this.replyingTo.set(review.id);
    this.replyText.set(review.ownerReply || "");
  }
  deleteReply(reviewId) {
    this.corporateService.deleteReply(reviewId).subscribe({
      next: (updated) => {
        const current = this.reviews();
        this.reviews.set(current.map((r) => r.id === updated.id ? updated : r));
      }
    });
  }
  static \u0275fac = function StoreReviews_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _StoreReviews)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _StoreReviews, selectors: [["app-store-reviews"]], decls: 9, vars: 1, consts: [[1, "min-h-screen", "bg-gray-950"], [1, "max-w-7xl", "mx-auto", "px-4", "sm:px-6", "lg:px-8", "py-8"], [1, "mb-8"], [1, "text-3xl", "font-bold", "text-white"], [1, "text-gray-400", "text-sm", "mt-1"], [1, "space-y-4"], [1, "bg-gray-900/80", "border", "border-gray-800", "rounded-2xl", "p-5", "animate-pulse"], [1, "flex", "items-center", "gap-4"], [1, "h-10", "w-10", "bg-gray-700", "rounded-full"], [1, "flex-1"], [1, "h-4", "bg-gray-700", "rounded", "w-40", "mb-2"], [1, "h-3", "bg-gray-700", "rounded", "w-64"], [1, "grid", "grid-cols-2", "lg:grid-cols-5", "gap-4", "mb-8"], [1, "bg-gray-900/80", "border", "border-gray-800", "rounded-2xl", "p-5"], [1, "text-xs", "font-semibold", "text-gray-400", "uppercase", "tracking-wider", "mb-1"], [1, "text-2xl", "font-bold", "text-white"], [1, "text-xs", "font-semibold", "text-yellow-400", "uppercase", "tracking-wider", "mb-1"], [1, "text-2xl", "font-bold", "text-yellow-400"], [1, "text-base"], [1, "text-xs", "font-semibold", "text-blue-400", "uppercase", "tracking-wider", "mb-1"], [1, "text-2xl", "font-bold", "text-blue-400"], [1, "text-sm", "text-gray-500", "ml-1"], [1, "bg-gray-900/80", "border", "border-gray-800", "rounded-2xl", "p-5", "col-span-2"], [1, "text-xs", "font-semibold", "text-gray-400", "uppercase", "tracking-wider", "mb-2"], [1, "flex", "items-end", "gap-2", "h-10"], [1, "flex-1", "flex", "flex-col", "items-center", "gap-1"], [1, "flex", "flex-col", "sm:flex-row", "gap-4", "mb-6"], ["type", "text", "placeholder", "\xDCr\xFCn, m\xFC\u015Fteri veya yorum metni ile ara...", 1, "w-full", "bg-gray-900/80", "border", "border-gray-800", "rounded-xl", "py-2.5", "px-4", "text-white", "text-sm", "focus:border-blue-500", "outline-none", "transition-all", "placeholder-gray-500", 3, "ngModelChange", "ngModel"], [1, "flex", "gap-2"], [1, "px-4", "py-2.5", "rounded-xl", "text-sm", "font-medium", "transition-colors", 3, "click"], [1, "px-3", "py-2.5", "rounded-xl", "text-sm", "font-medium", "transition-colors", 3, "class"], [1, "bg-gray-900/80", "border", "border-gray-800", "rounded-2xl", "p-12", "text-center"], [1, "w-full", "bg-gray-800", "rounded-sm", "overflow-hidden", 2, "min-height", "4px"], [1, "bg-yellow-500", "rounded-sm", "transition-all", "duration-300", 3, "title"], [1, "text-[10px]", "text-gray-500"], [1, "px-3", "py-2.5", "rounded-xl", "text-sm", "font-medium", "transition-colors", 3, "click"], [1, "text-xl", "font-semibold", "text-white", "mb-2"], [1, "text-gray-400", "text-sm"], [1, "space-y-3"], [1, "bg-gray-900/80", "border", "border-gray-800", "rounded-2xl", "p-5", "hover:border-gray-700", "transition-all"], [1, "mt-4", "text-xs", "text-gray-500", "text-center"], [1, "flex", "items-start", "gap-4"], [1, "h-10", "w-10", "rounded-full", "bg-gray-700", "flex", "items-center", "justify-center", "flex-shrink-0"], [1, "text-sm", "font-bold", "text-gray-400"], [1, "flex-1", "min-w-0"], [1, "flex", "items-center", "justify-between", "mb-1"], [1, "flex", "items-center", "gap-2"], [1, "text-sm", "font-semibold", "text-white"], [1, "text-yellow-400", "text-sm", "tracking-wider"], [1, "text-[10px]", "font-medium", "px-2", "py-0.5", "rounded-lg", "uppercase", 3, "class"], [1, "text-[11px]", "text-gray-500"], [1, "text-xs", "text-gray-500", "mb-2"], [1, "text-gray-400"], [1, "mx-1"], [1, "font-mono"], [1, "text-sm", "text-gray-300", "leading-relaxed"], [1, "mt-2", "text-[11px]", "text-gray-500"], [1, "mt-3", "bg-blue-900/15", "border", "border-blue-800/30", "rounded-xl", "p-4"], [1, "mt-3", "bg-gray-800/50", "border", "border-gray-700", "rounded-xl", "p-4"], [1, "mt-3", "text-xs", "text-gray-500", "hover:text-blue-400", "flex", "items-center", "gap-1.5", "transition-colors"], [1, "text-[10px]", "font-medium", "px-2", "py-0.5", "rounded-lg", "uppercase"], [1, "flex", "items-center", "justify-between", "mb-2"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", "stroke-width", "2", 1, "h-3.5", "w-3.5", "text-blue-400"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6"], [1, "text-xs", "font-semibold", "text-blue-400"], [1, "text-[10px]", "text-gray-500", "hover:text-blue-400", "transition-colors", 3, "click"], [1, "text-[10px]", "text-gray-500", "hover:text-red-400", "transition-colors", 3, "click"], [1, "flex", "items-center", "gap-2", "mb-2"], ["rows", "3", "placeholder", "M\xFC\u015Fteriye yan\u0131t\u0131n\u0131z\u0131 yaz\u0131n...", 1, "w-full", "bg-gray-900", "border", "border-gray-700", "rounded-lg", "py-2.5", "px-3", "text-sm", "text-white", "placeholder-gray-500", "focus:border-blue-500", "outline-none", "transition-all", "resize-none", 3, "ngModelChange", "ngModel"], [1, "flex", "items-center", "justify-end", "gap-2", "mt-2"], [1, "text-xs", "text-gray-400", "hover:text-white", "px-3", "py-1.5", "rounded-lg", "transition-colors", 3, "click"], [1, "bg-blue-600", "hover:bg-blue-500", "disabled:bg-gray-700", "disabled:text-gray-500", "text-white", "text-xs", "font-semibold", "px-4", "py-1.5", "rounded-lg", "transition-colors", 3, "click", "disabled"], [1, "mt-3", "text-xs", "text-gray-500", "hover:text-blue-400", "flex", "items-center", "gap-1.5", "transition-colors", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", "stroke-width", "2", 1, "h-3.5", "w-3.5"]], template: function StoreReviews_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h1", 3);
      \u0275\u0275text(4, "Yorum Y\xF6netimi");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "p", 4);
      \u0275\u0275text(6, "\xDCr\xFCnlerinize gelen m\xFC\u015Fteri yorumlar\u0131n\u0131 inceleyin ve yan\u0131tlay\u0131n");
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(7, StoreReviews_Conditional_7_Template, 3, 1, "div", 5)(8, StoreReviews_Conditional_8_Template, 37, 12);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(7);
      \u0275\u0275conditional(ctx.isLoading() ? 7 : 8);
    }
  }, dependencies: [CommonModule, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, DecimalPipe, DatePipe], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StoreReviews, [{
    type: Component,
    args: [{ selector: "app-store-reviews", standalone: true, imports: [CommonModule, FormsModule], template: `<div class="min-h-screen bg-gray-950">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

    <!-- Header -->
    <div class="mb-8">
      <h1 class="text-3xl font-bold text-white">Yorum Y\xF6netimi</h1>
      <p class="text-gray-400 text-sm mt-1">\xDCr\xFCnlerinize gelen m\xFC\u015Fteri yorumlar\u0131n\u0131 inceleyin ve yan\u0131tlay\u0131n</p>
    </div>

    @if (isLoading()) {
      <div class="space-y-4">
        @for (i of [1,2,3]; track i) {
          <div class="bg-gray-900/80 border border-gray-800 rounded-2xl p-5 animate-pulse">
            <div class="flex items-center gap-4">
              <div class="h-10 w-10 bg-gray-700 rounded-full"></div>
              <div class="flex-1">
                <div class="h-4 bg-gray-700 rounded w-40 mb-2"></div>
                <div class="h-3 bg-gray-700 rounded w-64"></div>
              </div>
            </div>
          </div>
        }
      </div>
    } @else {

      <!-- Summary Row -->
      <div class="grid grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
        <div class="bg-gray-900/80 border border-gray-800 rounded-2xl p-5">
          <p class="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">Toplam Yorum</p>
          <p class="text-2xl font-bold text-white">{{ reviews().length }}</p>
        </div>
        <div class="bg-gray-900/80 border border-gray-800 rounded-2xl p-5">
          <p class="text-xs font-semibold text-yellow-400 uppercase tracking-wider mb-1">Ortalama Puan</p>
          <p class="text-2xl font-bold text-yellow-400">{{ avgRating | number:'1.1-1' }} <span class="text-base">\u2B50</span></p>
        </div>
        <div class="bg-gray-900/80 border border-gray-800 rounded-2xl p-5">
          <p class="text-xs font-semibold text-blue-400 uppercase tracking-wider mb-1">Yan\u0131tlanan</p>
          <p class="text-2xl font-bold text-blue-400">{{ repliedCount }}<span class="text-sm text-gray-500 ml-1">/ {{ reviews().length }}</span></p>
        </div>
        <!-- Rating Distribution mini -->
        <div class="bg-gray-900/80 border border-gray-800 rounded-2xl p-5 col-span-2">
          <p class="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Puan Da\u011F\u0131l\u0131m\u0131</p>
          <div class="flex items-end gap-2 h-10">
            @for (rd of ratingDistribution; track rd.rating) {
              <div class="flex-1 flex flex-col items-center gap-1">
                <div class="w-full bg-gray-800 rounded-sm overflow-hidden" style="min-height: 4px">
                  <div class="bg-yellow-500 rounded-sm transition-all duration-300"
                    [style.height.px]="reviews().length ? (rd.count / reviews().length) * 40 : 0"
                    [title]="rd.rating + ' y\u0131ld\u0131z: ' + rd.count + ' yorum'">
                  </div>
                </div>
                <span class="text-[10px] text-gray-500">{{ rd.rating }}\u2605</span>
              </div>
            }
          </div>
        </div>
      </div>

      <!-- Filters -->
      <div class="flex flex-col sm:flex-row gap-4 mb-6">
        <div class="flex-1">
          <input [(ngModel)]="searchTerm" type="text" placeholder="\xDCr\xFCn, m\xFC\u015Fteri veya yorum metni ile ara..."
            (ngModelChange)="searchTerm.set($event)"
            class="w-full bg-gray-900/80 border border-gray-800 rounded-xl py-2.5 px-4 text-white text-sm focus:border-blue-500 outline-none transition-all placeholder-gray-500">
        </div>
        <div class="flex gap-2">
          <button (click)="filterRating.set(null)"
            [class]="filterRating() === null ? 'bg-blue-600 text-white' : 'bg-gray-800 text-gray-400 hover:text-white'"
            class="px-4 py-2.5 rounded-xl text-sm font-medium transition-colors">T\xFCm\xFC</button>
          @for (r of [5,4,3,2,1]; track r) {
            <button (click)="filterRating.set(r)"
              [class]="filterRating() === r ? 'bg-yellow-600 text-white' : 'bg-gray-800 text-gray-400 hover:text-white'"
              class="px-3 py-2.5 rounded-xl text-sm font-medium transition-colors">{{ r }}\u2605</button>
          }
        </div>
      </div>

      @if (filteredReviews.length === 0) {
        <div class="bg-gray-900/80 border border-gray-800 rounded-2xl p-12 text-center">
          <h3 class="text-xl font-semibold text-white mb-2">Yorum Bulunamad\u0131</h3>
          <p class="text-gray-400 text-sm">Filtreye uygun yorum yok.</p>
        </div>
      } @else {
        <!-- Reviews List -->
        <div class="space-y-3">
          @for (review of filteredReviews; track review.id) {
            <div class="bg-gray-900/80 border border-gray-800 rounded-2xl p-5 hover:border-gray-700 transition-all">
              <div class="flex items-start gap-4">
                <!-- Avatar -->
                <div class="h-10 w-10 rounded-full bg-gray-700 flex items-center justify-center flex-shrink-0">
                  <span class="text-sm font-bold text-gray-400">{{ review.customerName.charAt(0) }}</span>
                </div>

                <div class="flex-1 min-w-0">
                  <!-- Top row -->
                  <div class="flex items-center justify-between mb-1">
                    <div class="flex items-center gap-2">
                      <span class="text-sm font-semibold text-white">{{ review.customerName }}</span>
                      <span class="text-yellow-400 text-sm tracking-wider">{{ getStars(review.starRating) }}</span>
                    </div>
                    <div class="flex items-center gap-2">
                      @if (review.sentiment) {
                        <span [class]="sentimentColors[review.sentiment]" class="text-[10px] font-medium px-2 py-0.5 rounded-lg uppercase">
                          {{ sentimentLabels[review.sentiment] || review.sentiment }}
                        </span>
                      }
                      <span class="text-[11px] text-gray-500">{{ review.createdAt | date:'dd MMM yyyy' }}</span>
                    </div>
                  </div>

                  <!-- Product Info -->
                  <p class="text-xs text-gray-500 mb-2">
                    <span class="text-gray-400">{{ review.productName }}</span>
                    <span class="mx-1">\xB7</span>
                    <span class="font-mono">{{ review.productSku }}</span>
                  </p>

                  <!-- Review Text -->
                  @if (review.reviewText) {
                    <p class="text-sm text-gray-300 leading-relaxed">{{ review.reviewText }}</p>
                  }

                  <!-- Votes -->
                  @if (review.totalVotes > 0) {
                    <div class="mt-2 text-[11px] text-gray-500">
                      \u{1F44D} {{ review.helpfulVotes }}/{{ review.totalVotes }} ki\u015Fi faydal\u0131 buldu
                    </div>
                  }

                  <!-- \u2500\u2500\u2500 Owner Reply Section \u2500\u2500\u2500 -->
                  @if (review.ownerReply && replyingTo() !== review.id) {
                    <!-- Existing Reply -->
                    <div class="mt-3 bg-blue-900/15 border border-blue-800/30 rounded-xl p-4">
                      <div class="flex items-center justify-between mb-2">
                        <div class="flex items-center gap-2">
                          <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6" />
                          </svg>
                          <span class="text-xs font-semibold text-blue-400">Ma\u011Faza Yan\u0131t\u0131</span>
                        </div>
                        <div class="flex items-center gap-2">
                          <span class="text-[10px] text-gray-500">{{ review.replyDate | date:'dd MMM yyyy' }}</span>
                          <button (click)="startEditReply(review)" class="text-[10px] text-gray-500 hover:text-blue-400 transition-colors">D\xFCzenle</button>
                          <button (click)="deleteReply(review.id)" class="text-[10px] text-gray-500 hover:text-red-400 transition-colors">Sil</button>
                        </div>
                      </div>
                      <p class="text-sm text-gray-300 leading-relaxed">{{ review.ownerReply }}</p>
                    </div>
                  }

                  <!-- Reply Form -->
                  @if (replyingTo() === review.id) {
                    <div class="mt-3 bg-gray-800/50 border border-gray-700 rounded-xl p-4">
                      <div class="flex items-center gap-2 mb-2">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6" />
                        </svg>
                        <span class="text-xs font-semibold text-blue-400">{{ review.ownerReply ? 'Yan\u0131t\u0131 D\xFCzenle' : 'Yan\u0131t Yaz' }}</span>
                      </div>
                      <textarea [ngModel]="replyText()" (ngModelChange)="replyText.set($event)"
                        rows="3" placeholder="M\xFC\u015Fteriye yan\u0131t\u0131n\u0131z\u0131 yaz\u0131n..."
                        class="w-full bg-gray-900 border border-gray-700 rounded-lg py-2.5 px-3 text-sm text-white placeholder-gray-500 focus:border-blue-500 outline-none transition-all resize-none"></textarea>
                      <div class="flex items-center justify-end gap-2 mt-2">
                        <button (click)="cancelReply()"
                          class="text-xs text-gray-400 hover:text-white px-3 py-1.5 rounded-lg transition-colors">
                          \u0130ptal
                        </button>
                        <button (click)="submitReply(review.id)"
                          [disabled]="!replyText().trim() || isSendingReply()"
                          class="bg-blue-600 hover:bg-blue-500 disabled:bg-gray-700 disabled:text-gray-500 text-white text-xs font-semibold px-4 py-1.5 rounded-lg transition-colors">
                          {{ isSendingReply() ? 'G\xF6nderiliyor...' : 'Yan\u0131tla' }}
                        </button>
                      </div>
                    </div>
                  }

                  <!-- Reply Button (when no reply exists and not replying) -->
                  @if (!review.ownerReply && replyingTo() !== review.id) {
                    <button (click)="openReplyForm(review.id)"
                      class="mt-3 text-xs text-gray-500 hover:text-blue-400 flex items-center gap-1.5 transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6" />
                      </svg>
                      Yan\u0131tla
                    </button>
                  }
                </div>
              </div>
            </div>
          }
        </div>

        <div class="mt-4 text-xs text-gray-500 text-center">
          {{ filteredReviews.length }} yorum g\xF6steriliyor
        </div>
      }
    }
  </div>
</div>
` }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(StoreReviews, { className: "StoreReviews", filePath: "app/features/corporate/reviews/store-reviews.ts", lineNumber: 12 });
})();
export {
  StoreReviews
};
//# sourceMappingURL=chunk-OXDQDKXN.mjs.map
