import {
  HttpClient,
  Injectable,
  inject,
  setClassMetadata,
  ɵɵdefineInjectable
} from "./chunk-7LZR64HY.js";

// src/app/core/services/refund.service.ts
var RefundService = class _RefundService {
  http = inject(HttpClient);
  apiUrl = "http://localhost:8080/api/refunds";
  getMyRefunds() {
    return this.http.get(this.apiUrl);
  }
  createRefund(request) {
    return this.http.post(this.apiUrl, request);
  }
  static \u0275fac = function RefundService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RefundService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _RefundService, factory: _RefundService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RefundService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

export {
  RefundService
};
//# sourceMappingURL=chunk-RD4Q7KEU.js.map
