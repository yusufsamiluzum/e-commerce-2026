import './polyfills.server.mjs';
import {
  AuthService
} from "./chunk-3Y3G2XM7.mjs";
import {
  Router
} from "./chunk-6SS2UPAN.mjs";
import {
  inject
} from "./chunk-K2NYDLGG.mjs";

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
//# sourceMappingURL=chunk-OA3MIU4Y.mjs.map
