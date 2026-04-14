import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService, UserRole } from '../services/auth.service';

export const authGuard: CanActivateFn = () => {
  const authService = inject(AuthService);
  const router = inject(Router);

  // If you're a GUEST, you haven't logged in. Redirect to login.
  if (authService.hasRole('GUEST')) {
    router.navigate(['/auth/login']);
    return false;
  }
  
  return true;
};

// Validates against required roles passed in the route data: 
// Example: { data: { roles: ['ADMIN'] } }
export const roleGuard: CanActivateFn = (route) => {
  const authService = inject(AuthService);
  const router = inject(Router);
  
  const expectedRoles: UserRole[] = route.data?.['roles'] || [];
  const requireStore = route.data?.['requireStore'] === true;

  const currentUserRole = authService.currentUserRole();
  const hasRequiredRole = expectedRoles.includes(currentUserRole);

  // If user does NOT have the right role, block navigation.
  if (!hasRequiredRole) {
    // Possibly navigate to an access-denied or home page.
    console.warn(`[RBAC] Access Denied: User role '${currentUserRole}' is not authorized to reach this view. Required: ${expectedRoles.join(',')}. Redirecting home.`);
    router.navigate(['/']);
    return false;
  }

  // Check if store requires setup for corporate route
  if (requireStore && currentUserRole === 'CORPORATE' && !authService.hasStore()) {
    console.warn(`[RBAC] Access Denied: User must set up store first.`);
    router.navigate(['/corporate/store-setup']);
    return false;
  }

  return true;
};

// Blocks CORPORATE users from accessing customer-facing pages (Home, Catalog, Cart, etc.)
export const notCorporateGuard: CanActivateFn = () => {
  const authService = inject(AuthService);
  const router = inject(Router);

  if (authService.currentUserRole() === 'CORPORATE') {
    console.warn('[RBAC] Corporate users cannot access customer pages. Redirecting to dashboard.');
    router.navigate(['/corporate/dashboard']);
    return false;
  }

  return true;
};
