import { Injectable, signal } from '@angular/core';

export type UserRole = 'GUEST' | 'USER' | 'CORPORATE' | 'ADMIN';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // By default, everyone is a guest until they log in
  currentUserRole = signal<UserRole>('GUEST');

  // Helper methods to simulate logging in for now
  setRole(role: UserRole) {
    this.currentUserRole.set(role);
  }

  logout() {
    this.currentUserRole.set('GUEST');
  }
}