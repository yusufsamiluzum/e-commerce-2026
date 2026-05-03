import {
  HttpClient,
  HttpParams,
  Injectable,
  inject,
  setClassMetadata,
  ɵɵdefineInjectable
} from "./chunk-OBD62CNA.js";

// src/app/features/admin/services/admin.service.ts
var AdminService = class _AdminService {
  http = inject(HttpClient);
  baseUrl = "http://localhost:8080/api/admin";
  // ─── Platform Dashboard ─────────────────────────────────────
  getDashboard() {
    return this.http.get(`${this.baseUrl}/dashboard`);
  }
  getRevenueTrend(days = 30) {
    const params = new HttpParams().set("days", days);
    return this.http.get(`${this.baseUrl}/dashboard/revenue-trend`, { params });
  }
  // ─── Kullanıcı Yönetimi ─────────────────────────────────────
  getAllUsers(page = 0, size = 20) {
    const params = new HttpParams().set("page", page).set("size", size);
    return this.http.get(`${this.baseUrl}/users`, { params });
  }
  updateUserStatus(userId, status) {
    return this.http.patch(`${this.baseUrl}/users/${userId}/status`, { status });
  }
  // ─── Mağaza Yönetimi ────────────────────────────────────────
  getAllStores(page = 0, size = 20) {
    const params = new HttpParams().set("page", page).set("size", size);
    return this.http.get(`${this.baseUrl}/stores`, { params });
  }
  getStoreDetail(storeId) {
    return this.http.get(`${this.baseUrl}/stores/${storeId}`);
  }
  updateStoreStatus(storeId, status) {
    return this.http.patch(`${this.baseUrl}/stores/${storeId}/status`, { status });
  }
  getStoreComparison() {
    return this.http.get(`${this.baseUrl}/stores/comparison`);
  }
  // ─── Sipariş Yönetimi ───────────────────────────────────────
  getAllOrders(page = 0, size = 20, status) {
    let params = new HttpParams().set("page", page).set("size", size);
    if (status) {
      params = params.set("status", status);
    }
    return this.http.get(`${this.baseUrl}/orders`, { params });
  }
  updateOrderStatus(orderId, status) {
    return this.http.patch(`${this.baseUrl}/orders/${orderId}/status`, { status });
  }
  // ─── İade Yönetimi ───────────────────────────────────────────
  getAllRefunds(page = 0, size = 20, status) {
    let params = new HttpParams().set("page", page).set("size", size);
    if (status) {
      params = params.set("status", status);
    }
    return this.http.get(`${this.baseUrl}/refunds`, { params });
  }
  updateRefundStatus(refundId, status) {
    return this.http.patch(`${this.baseUrl}/refunds/${refundId}/status`, { status });
  }
  // ─── Kategori Yönetimi ──────────────────────────────────────
  getAllCategories() {
    return this.http.get(`${this.baseUrl}/categories`);
  }
  createCategory(name, parentId) {
    return this.http.post(`${this.baseUrl}/categories`, { name, parentId: parentId ?? null });
  }
  updateCategory(categoryId, name) {
    return this.http.put(`${this.baseUrl}/categories/${categoryId}`, { name });
  }
  deleteCategory(categoryId) {
    return this.http.delete(`${this.baseUrl}/categories/${categoryId}`);
  }
  // ─── Sistem Konfigürasyonu ──────────────────────────────────
  getAllConfigs() {
    return this.http.get(`${this.baseUrl}/config`);
  }
  updateConfig(configId, value) {
    return this.http.put(`${this.baseUrl}/config/${configId}`, { value });
  }
  // ─── Audit Log ──────────────────────────────────────────────
  getAuditLogs(page = 0, size = 20, entityType) {
    let params = new HttpParams().set("page", page).set("size", size);
    if (entityType) {
      params = params.set("entityType", entityType);
    }
    return this.http.get(`${this.baseUrl}/audit-logs`, { params });
  }
  // ─── Yorum Moderasyonu ──────────────────────────────────────
  getAllReviews(page = 0, size = 20, sentiment) {
    let params = new HttpParams().set("page", page).set("size", size);
    if (sentiment) {
      params = params.set("sentiment", sentiment);
    }
    return this.http.get(`${this.baseUrl}/reviews`, { params });
  }
  deleteReview(reviewId) {
    return this.http.delete(`${this.baseUrl}/reviews/${reviewId}`);
  }
  // ─── CSV Export ─────────────────────────────────────────────
  exportCsv(type) {
    this.http.get(`${this.baseUrl}/export/${type}`, { responseType: "blob" }).subscribe((blob) => {
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `${type}.csv`;
      a.click();
      window.URL.revokeObjectURL(url);
    });
  }
  static \u0275fac = function AdminService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AdminService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AdminService, factory: _AdminService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AdminService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

export {
  AdminService
};
//# sourceMappingURL=chunk-ZMDBUR24.js.map
