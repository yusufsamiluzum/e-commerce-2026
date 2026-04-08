import { Injectable, signal, PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

export type UserRole = 'GUEST' | 'INDIVIDUAL' | 'CORPORATE' | 'ADMIN';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private platformId = inject(PLATFORM_ID);

  // Signal holds the current user's role, defaulting to GUEST.
  // GUEST -> not logged in. INDIVIDUAL, CORPORATE, ADMIN -> logged in.
  currentUserRole = signal<UserRole>('GUEST');

  constructor() {
    this.loadStateOnStartup();
  }

  // Automatically hydrates Role type from localStorage on browser refresh.
  // NOTE: We only store non-sensitive flags here; the actual token is a secure cookie!
  private loadStateOnStartup() {
    if (isPlatformBrowser(this.platformId)) {
      const cachedRole = localStorage.getItem('current_role') as UserRole | null;
      if (cachedRole) {
        this.currentUserRole.set(cachedRole);
      }
    }
  }

  // Update state upon successful login
  loginSuccess(role: UserRole) {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('current_role', role);
    }
    this.currentUserRole.set(role);
  }

  // To truly logout, you need to make an HTTP request to an endpoint 
  // (e.g. /api/auth/logout) which destroys the backend cookie.
  // This just clears the local non-sensitive state.
  logout() {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.removeItem('current_role');
    }
    this.currentUserRole.set('GUEST');
  }

  // RBAC Helper: Used to quickly answer if the current user has access
  hasRole(role: UserRole): boolean {
    return this.currentUserRole() === role;
  }
}
