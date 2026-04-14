import {
  HttpClient,
  Injectable,
  inject,
  setClassMetadata,
  ɵɵdefineInjectable
} from "./chunk-7LZR64HY.js";

// src/app/core/services/user.service.ts
var UserService = class _UserService {
  http = inject(HttpClient);
  apiUrl = "http://localhost:8080/api/users";
  getProfile() {
    return this.http.get(`${this.apiUrl}/profile`);
  }
  updateProfile(request) {
    return this.http.put(`${this.apiUrl}/profile`, request);
  }
  getMyPreferences() {
    return this.http.get(`${this.apiUrl}/me/preferences`);
  }
  updateMyPreferences(dto) {
    return this.http.put(`${this.apiUrl}/me/preferences`, dto);
  }
  static \u0275fac = function UserService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _UserService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _UserService, factory: _UserService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UserService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

export {
  UserService
};
//# sourceMappingURL=chunk-6INRL67R.js.map
