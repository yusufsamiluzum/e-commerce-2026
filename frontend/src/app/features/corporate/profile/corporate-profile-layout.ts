import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-corporate-profile-layout',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './corporate-profile-layout.html'
})
export class CorporateProfileLayout {
  auth = inject(AuthService);

  menuItems = [
    { path: '/corporate/profile/details', label: 'Profil Bilgileri', icon: 'user' },
    { path: '/corporate/dashboard', label: 'Dashboard', icon: 'dashboard' },
    { path: '/corporate/catalog', label: 'Ürün Kataloğu', icon: 'catalog' },
    { path: '/corporate/inventory', label: 'Envanter Yönetimi', icon: 'inventory' },
    { path: '/corporate/orders', label: 'Sipariş Yönetimi', icon: 'orders' },
    { path: '/corporate/analytics', label: 'Satış Analitiği', icon: 'analytics' },
    { path: '/corporate/customers', label: 'Müşteri Segmentasyonu', icon: 'customers' },
    { path: '/corporate/reviews', label: 'Yorum Yönetimi', icon: 'reviews' },
  ];
}
