import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-profile-layout',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './profile-layout.html',
  styleUrl: './profile-layout.scss',
})
export class ProfileLayout {
  menuItems = [
    { label: 'Kullanıcı Profili', path: 'details', icon: 'fas fa-user' },
    { label: 'Siparişlerim', path: 'orders', icon: 'fas fa-box' },
    { label: 'İade Taleplerim', path: 'refunds', icon: 'fas fa-undo' },
    { label: 'Satın Alım Geçmişi', path: 'history', icon: 'fas fa-history' },
    { label: 'Ürün Yorumlarım', path: 'reviews', icon: 'fas fa-star' },
    { label: 'Harcama Analizi', path: 'spending', icon: 'fas fa-chart-pie' },
    { label: 'Profil Yönetimi', path: 'management', icon: 'fas fa-cog' },
    { label: 'Tercihlerim', path: 'preferences', icon: 'fas fa-sliders-h' }
  ];
}
