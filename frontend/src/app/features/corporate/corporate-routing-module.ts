import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard, roleGuard } from '../../core/guards/auth.guard';

const routes: Routes = [
  // Mağaza kurulumu — store yok ise buraya yönlendirilir
  {
    path: 'store-setup',
    loadComponent: () => import('./store-setup/store-setup').then(m => m.StoreSetup),
    canActivate: [authGuard, roleGuard],
    data: { roles: ['CORPORATE'] }
  },
  // Profil — sidebar layout ile tüm alt sayfalara erişim
  {
    path: 'profile',
    loadComponent: () => import('./profile/corporate-profile-layout').then(m => m.CorporateProfileLayout),
    canActivate: [authGuard, roleGuard],
    data: { roles: ['CORPORATE'], requireStore: true },
    children: [
      {
        path: 'details',
        loadComponent: () => import('./profile/corporate-profile-details').then(m => m.CorporateProfileDetails),
      },
      {
        path: '',
        redirectTo: 'details',
        pathMatch: 'full'
      }
    ]
  },
  // Dashboard — navbar + footer'dan erişim
  {
    path: 'dashboard',
    loadComponent: () => import('./dashboard/dashboard').then(m => m.CorporateDashboard),
    canActivate: [authGuard, roleGuard],
    data: { roles: ['CORPORATE'], requireStore: true }
  },
  // Ürün Kataloğu — navbar "Products" + footer "Products"
  {
    path: 'catalog',
    loadComponent: () => import('./catalog/catalog-list/catalog-list').then(m => m.CatalogList),
    canActivate: [authGuard, roleGuard],
    data: { roles: ['CORPORATE'], requireStore: true }
  },
  // Envanter — navbar "Inventory"
  {
    path: 'inventory',
    loadComponent: () => import('./inventory/inventory').then(m => m.Inventory),
    canActivate: [authGuard, roleGuard],
    data: { roles: ['CORPORATE'], requireStore: true }
  },
  // Mağaza Siparişleri — navbar "Store Orders" + footer "Store Orders"
  {
    path: 'orders',
    loadComponent: () => import('./orders/store-orders').then(m => m.StoreOrders),
    canActivate: [authGuard, roleGuard],
    data: { roles: ['CORPORATE'], requireStore: true }
  },
  // Satış Analitiği
  {
    path: 'analytics',
    loadComponent: () => import('./analytics/sales-analytics').then(m => m.SalesAnalytics),
    canActivate: [authGuard, roleGuard],
    data: { roles: ['CORPORATE'], requireStore: true }
  },
  // Müşteri Segmentasyonu
  {
    path: 'customers',
    loadComponent: () => import('./customers/customer-segmentation').then(m => m.CustomerSegmentation),
    canActivate: [authGuard, roleGuard],
    data: { roles: ['CORPORATE'], requireStore: true }
  },
  // Yorum Yönetimi
  {
    path: 'reviews',
    loadComponent: () => import('./reviews/store-reviews').then(m => m.StoreReviews),
    canActivate: [authGuard, roleGuard],
    data: { roles: ['CORPORATE'], requireStore: true }
  },
  // Varsayılan yönlendirme
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CorporateRoutingModule { }
