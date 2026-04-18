import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.html'
})
export class Navbar {
  auth = inject(AuthService); // Inject the signal state
  cartService = inject(CartService); // Inject the cart service
  private router = inject(Router);

  getProfileLink(): string {
    const role = this.auth.currentUserRole();
    if (role === 'ADMIN') return '/admin/dashboard';
    if (role === 'CORPORATE') return '/corporate/profile/details';
    return '/individual/profile/details';
  }

  getHomeLink(): string {
    const role = this.auth.currentUserRole();
    if (role === 'CORPORATE') return '/corporate/dashboard';
    if (role === 'ADMIN') return '/admin/dashboard';
    return '/';
  }

  logout() {
    this.auth.logout();
    this.router.navigate(['/']);
  }
}
