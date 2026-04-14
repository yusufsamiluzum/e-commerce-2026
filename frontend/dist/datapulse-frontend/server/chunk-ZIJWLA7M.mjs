import './polyfills.server.mjs';
import {
  AuthService
} from "./chunk-Q3VV5QH5.mjs";
import {
  Router
} from "./chunk-JORFZ7VT.mjs";
import {
  inject
} from "./chunk-JETRRDQP.mjs";

// src/app/core/guards/auth.guard.ts
var authGuard = () => {
  const authService = inject(AuthService);
  const router = inject(Router);
  if (authService.hasRole("GUEST")) {
    router.navigate(["/auth/login"]);
    return false;
  }
  return true;
};
var roleGuard = (route) => {
  const authService = inject(AuthService);
  const router = inject(Router);
  const expectedRoles = route.data?.["roles"] || [];
  const requireStore = route.data?.["requireStore"] === true;
  const currentUserRole = authService.currentUserRole();
  const hasRequiredRole = expectedRoles.includes(currentUserRole);
  if (!hasRequiredRole) {
    console.warn(`[RBAC] Access Denied: User role '${currentUserRole}' is not authorized to reach this view. Required: ${expectedRoles.join(",")}. Redirecting home.`);
    router.navigate(["/"]);
    return false;
  }
  if (requireStore && currentUserRole === "CORPORATE" && !authService.hasStore()) {
    console.warn(`[RBAC] Access Denied: User must set up store first.`);
    router.navigate(["/corporate/store-setup"]);
    return false;
  }
  return true;
};
var notCorporateGuard = () => {
  const authService = inject(AuthService);
  const router = inject(Router);
  if (authService.currentUserRole() === "CORPORATE") {
    console.warn("[RBAC] Corporate users cannot access customer pages. Redirecting to dashboard.");
    router.navigate(["/corporate/dashboard"]);
    return false;
  }
  return true;
};

export {
  authGuard,
  roleGuard,
  notCorporateGuard
};
//# sourceMappingURL=chunk-ZIJWLA7M.mjs.map
