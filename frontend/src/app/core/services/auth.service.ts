import { Injectable, signal, PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

export type UserRole = 'GUEST' | 'INDIVIDUAL' | 'CORPORATE' | 'ADMIN';

export interface AuthResponse {
  role: UserRole;
  hasStore?: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private platformId = inject(PLATFORM_ID);
  private http = inject(HttpClient);
  private baseUrl = 'http://localhost:8080';

  // Signal holds the current user's role, defaulting to GUEST.
  // GUEST -> not logged in. INDIVIDUAL, CORPORATE, ADMIN -> logged in.
  currentUserRole = signal<UserRole>('GUEST');
  hasStore = signal<boolean>(false);

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
      
      const cachedHasStore = localStorage.getItem('has_store');
      if (cachedHasStore === 'true') {
        this.hasStore.set(true);
      }
    }
  }

  loginIndividual(credentials: any): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${this.baseUrl}/api/auth/login/individual`, credentials).pipe(
      tap(res => this.loginSuccess(res.role, res.hasStore))
    );
  }

  loginCorporate(credentials: any): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${this.baseUrl}/api/auth/login/corporate`, credentials).pipe(
      tap(res => this.loginSuccess(res.role, res.hasStore))
    );
  }

  loginAdmin(credentials: any): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${this.baseUrl}/api/auth/login/admin`, credentials).pipe(
      tap(res => this.loginSuccess(res.role, res.hasStore))
    );
  }

  registerIndividual(userData: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/api/auth/register/individual`, userData);
  }

  registerCorporate(userData: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/api/auth/register/corporate`, userData);
  }

  // Update state upon successful login
  loginSuccess(role: UserRole, hasStore: boolean = false) {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('current_role', role);
      if (role === 'CORPORATE') {
        localStorage.setItem('has_store', String(hasStore));
      }
    }
    this.currentUserRole.set(role);
    this.hasStore.set(hasStore);
  }

  // To truly logout, you need to make an HTTP request to an endpoint 
  // (e.g. /api/auth/logout) which destroys the backend cookie.
  // This just clears the local non-sensitive state.
  logout() {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.removeItem('current_role');
      localStorage.removeItem('has_store');
    }
    this.currentUserRole.set('GUEST');
    this.hasStore.set(false);
  }

  // RBAC Helper: Used to quickly answer if the current user has access
  hasRole(role: UserRole): boolean {
    return this.currentUserRole() === role;
  }
}
