import {
  HttpClient,
  Injectable,
  inject,
  setClassMetadata,
  ɵɵdefineInjectable
} from "./chunk-OBD62CNA.js";

// src/app/core/services/review.service.ts
var ReviewService = class _ReviewService {
  http = inject(HttpClient);
  apiUrl = "http://localhost:8080/api/products";
  getReviewsByProductId(productId) {
    return this.http.get(`${this.apiUrl}/${productId}/reviews`);
  }
  addReview(productId, review) {
    return this.http.post(`${this.apiUrl}/${productId}/reviews`, review);
  }
  getMyReviews() {
    return this.http.get("http://localhost:8080/api/users/me/reviews");
  }
  deleteReview(reviewId) {
    return this.http.delete(`http://localhost:8080/api/products/reviews/${reviewId}`);
  }
  static \u0275fac = function ReviewService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ReviewService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ReviewService, factory: _ReviewService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ReviewService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

export {
  ReviewService
};
//# sourceMappingURL=chunk-AA5HKDI2.js.map
