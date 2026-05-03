import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard, roleGuard } from '../../core/guards/auth.guard';
import { CorporateLayout } from './corporate-layout';

const routes: Routes = [
  // Mağaza kurulumu — sidebar olmadan
  {
    path: 'store-setup',
    loadComponent: () => import('./store-setup/store-setup').then(m => m.StoreSetup),
    canActivate: [authGuard, roleGuard],
    data: { roles: ['CORPORATE'] }
  },
  // Profil — kendi layout'u var
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
      { path: '', redirectTo: 'details', pathMatch: 'full' }
    ]
  },
  // Ana panel — Ember sidebar layout
  {
    path: '',
    component: CorporateLayout,
    canActivate: [authGuard, roleGuard],
    data: { roles: ['CORPORATE'] },
    children: [
      {
        path: 'dashboard',
        loadComponent: () => import('./dashboard/dashboard').then(m => m.CorporateDashboard),
        data: { requireStore: true }
      },
      {
        path: 'catalog',
        loadComponent: () => import('./catalog/catalog-list/catalog-list').then(m => m.CatalogList),
        data: { requireStore: true }
      },
      {
        path: 'inventory',
        loadComponent: () => import('./inventory/inventory').then(m => m.Inventory),
        data: { requireStore: true }
      },
      {
        path: 'orders',
        loadComponent: () => import('./orders/store-orders').then(m => m.StoreOrders),
        data: { requireStore: true }
      },
      {
        path: 'refunds',
        loadComponent: () => import('./refunds/store-refunds').then(m => m.StoreRefunds),
        data: { requireStore: true }
      },
      {
        path: 'analytics',
        loadComponent: () => import('./analytics/sales-analytics').then(m => m.SalesAnalytics),
        data: { requireStore: true }
      },
      {
        path: 'customers',
        loadComponent: () => import('./customers/customer-segmentation').then(m => m.CustomerSegmentation),
        data: { requireStore: true }
      },
      {
        path: 'reviews',
        loadComponent: () => import('./reviews/store-reviews').then(m => m.StoreReviews),
        data: { requireStore: true }
      },
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CorporateRoutingModule { }
