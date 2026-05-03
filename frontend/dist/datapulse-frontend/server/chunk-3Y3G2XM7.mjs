import './polyfills.server.mjs';
import {
  HttpClient,
  Injectable,
  PLATFORM_ID,
  inject,
  isPlatformBrowser,
  setClassMetadata,
  signal,
  tap,
  ɵɵdefineInjectable
} from "./chunk-K2NYDLGG.mjs";

// src/app/core/services/auth.service.ts
var AuthService = class _AuthService {
  platformId = inject(PLATFORM_ID);
  http = inject(HttpClient);
  baseUrl = "http://localhost:8080";
  // Signal holds the current user's role, defaulting to GUEST.
  // GUEST -> not logged in. INDIVIDUAL, CORPORATE, ADMIN -> logged in.
  currentUserRole = signal("GUEST", ...ngDevMode ? [{ debugName: "currentUserRole" }] : (
    /* istanbul ignore next */
    []
  ));
  hasStore = signal(false, ...ngDevMode ? [{ debugName: "hasStore" }] : (
    /* istanbul ignore next */
    []
  ));
  currentUserName = signal("", ...ngDevMode ? [{ debugName: "currentUserName" }] : (
    /* istanbul ignore next */
    []
  ));
  currentUserEmail = signal("", ...ngDevMode ? [{ debugName: "currentUserEmail" }] : (
    /* istanbul ignore next */
    []
  ));
  constructor() {
    this.loadStateOnStartup();
  }
  // Automatically hydrates Role type from localStorage on browser refresh.
  // NOTE: We only store non-sensitive flags here; the actual token is a secure cookie!
  loadStateOnStartup() {
    if (isPlatformBrowser(this.platformId)) {
      const cachedRole = localStorage.getItem("current_role");
      if (cachedRole) {
        this.currentUserRole.set(cachedRole);
      }
      const cachedHasStore = localStorage.getItem("has_store");
      if (cachedHasStore === "true") {
        this.hasStore.set(true);
      }
      const cachedName = localStorage.getItem("current_user_name");
      if (cachedName)
        this.currentUserName.set(cachedName);
      const cachedEmail = localStorage.getItem("current_user_email");
      if (cachedEmail)
        this.currentUserEmail.set(cachedEmail);
    }
  }
  loginIndividual(credentials) {
    return this.http.post(`${this.baseUrl}/api/auth/login/individual`, credentials).pipe(tap((res) => this.loginSuccess(res.role, res.hasStore, res.fullName, res.email)));
  }
  loginCorporate(credentials) {
    return this.http.post(`${this.baseUrl}/api/auth/login/corporate`, credentials).pipe(tap((res) => this.loginSuccess(res.role, res.hasStore, res.fullName, res.email)));
  }
  loginAdmin(credentials) {
    return this.http.post(`${this.baseUrl}/api/auth/login/admin`, credentials).pipe(tap((res) => this.loginSuccess(res.role, res.hasStore, res.fullName, res.email)));
  }
  registerIndividual(userData) {
    return this.http.post(`${this.baseUrl}/api/auth/register/individual`, userData);
  }
  registerCorporate(userData) {
    return this.http.post(`${this.baseUrl}/api/auth/register/corporate`, userData);
  }
  // Update state upon successful login
  loginSuccess(role, hasStore = false, fullName, email) {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem("current_role", role);
      if (role === "CORPORATE") {
        localStorage.setItem("has_store", String(hasStore));
      }
      if (fullName)
        localStorage.setItem("current_user_name", fullName);
      if (email)
        localStorage.setItem("current_user_email", email);
    }
    this.currentUserRole.set(role);
    this.hasStore.set(hasStore);
    if (fullName)
      this.currentUserName.set(fullName);
    if (email)
      this.currentUserEmail.set(email);
  }
  // To truly logout, you need to make an HTTP request to an endpoint 
  // (e.g. /api/auth/logout) which destroys the backend cookie.
  // This just clears the local non-sensitive state.
  logout() {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.removeItem("current_role");
      localStorage.removeItem("has_store");
      localStorage.removeItem("current_user_name");
      localStorage.removeItem("current_user_email");
    }
    this.currentUserRole.set("GUEST");
    this.hasStore.set(false);
    this.currentUserName.set("");
    this.currentUserEmail.set("");
  }
  // RBAC Helper: Used to quickly answer if the current user has access
  hasRole(role) {
    return this.currentUserRole() === role;
  }
  static \u0275fac = function AuthService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AuthService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AuthService, factory: _AuthService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AuthService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();

export {
  AuthService
};
//# sourceMappingURL=chunk-3Y3G2XM7.mjs.map
