import {
  HttpClient,
  Injectable,
  inject,
  setClassMetadata,
  ɵɵdefineInjectable
} from "./chunk-OBD62CNA.js";

// src/app/features/corporate/services/corporate.service.ts
var CorporateService = class _CorporateService {
  http = inject(HttpClient);
  baseUrl = "http://localhost:8080/api/corporate";
  // ─── Mağaza ────────────────────────────────────────────
  createStore(request) {
    return this.http.post(`${this.baseUrl}/store`, request);
  }
  getMyStore() {
    return this.http.get(`${this.baseUrl}/store`);
  }
  updateStore(request) {
    return this.http.put(`${this.baseUrl}/store`, request);
  }
  // ─── Dashboard ─────────────────────────────────────────
  getDashboard() {
    return this.http.get(`${this.baseUrl}/dashboard`);
  }
  // ─── Ürün Kataloğu ────────────────────────────────────
  getMyProducts() {
    return this.http.get(`${this.baseUrl}/products`);
  }
  getProductDetail(id) {
    return this.http.get(`${this.baseUrl}/products/${id}`);
  }
  createProduct(request) {
    return this.http.post(`${this.baseUrl}/products`, request);
  }
  updateProduct(id, request) {
    return this.http.put(`${this.baseUrl}/products/${id}`, request);
  }
  deactivateProduct(id) {
    return this.http.delete(`${this.baseUrl}/products/${id}`);
  }
  reactivateProduct(id) {
    return this.http.patch(`${this.baseUrl}/products/${id}/reactivate`, {});
  }
  // ─── Kategoriler ──────────────────────────────────────
  getCategories() {
    return this.http.get(`${this.baseUrl}/categories`);
  }
  // ─── Sipariş Yönetimi ─────────────────────────────────
  getStoreOrders(status) {
    const params = status ? `?status=${status}` : "";
    return this.http.get(`${this.baseUrl}/orders${params}`);
  }
  getStoreOrdersByDate(date) {
    return this.http.get(`${this.baseUrl}/orders?date=${date}`);
  }
  updateOrderStatus(orderId, status) {
    return this.http.patch(`${this.baseUrl}/orders/${orderId}/status`, { status });
  }
  // ─── Envanter Yönetimi ────────────────────────────────
  getInventory() {
    return this.http.get(`${this.baseUrl}/inventory`);
  }
  updateStock(productId, quantity) {
    return this.http.patch(`${this.baseUrl}/inventory/${productId}/stock`, { quantity });
  }
  // ─── Satış Analitiği ──────────────────────────────────
  getSalesAnalytics(startDate, endDate) {
    let params = "";
    if (startDate && endDate) {
      params = `?startDate=${startDate}&endDate=${endDate}`;
    }
    return this.http.get(`${this.baseUrl}/analytics${params}`);
  }
  // ─── Müşteri Segmentasyonu ────────────────────────────
  getCustomerSegmentation() {
    return this.http.get(`${this.baseUrl}/customers`);
  }
  // ─── Yorum Yönetimi ───────────────────────────────────
  getStoreReviews() {
    return this.http.get(`${this.baseUrl}/reviews`);
  }
  replyToReview(reviewId, reply) {
    return this.http.put(`${this.baseUrl}/reviews/${reviewId}/reply`, { reply });
  }
  deleteReply(reviewId) {
    return this.http.delete(`${this.baseUrl}/reviews/${reviewId}/reply`);
  }
  // ─── İade Yönetimi ─────────────────────────────────────
  getStoreRefunds(status) {
    const params = status ? `?status=${status}` : "";
    return this.http.get(`${this.baseUrl}/refunds${params}`);
  }
  respondToRefund(refundId, status) {
    return this.http.patch(`${this.baseUrl}/refunds/${refundId}/status`, { status });
  }
  static \u0275fac = function CorporateService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CorporateService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _CorporateService, factory: _CorporateService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CorporateService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

export {
  CorporateService
};
//# sourceMappingURL=chunk-XN2NLGPB.js.map
