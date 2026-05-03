import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLayout } from './admin-layout';

const routes: Routes = [
  {
    path: '',
    component: AdminLayout,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      {
        path: 'dashboard',
        loadComponent: () => import('./dashboard/admin-dashboard').then(m => m.AdminDashboard)
      },
      {
        path: 'users',
        loadComponent: () => import('./users/user-management').then(m => m.UserManagement)
      },
      {
        path: 'stores',
        loadComponent: () => import('./stores/store-management').then(m => m.StoreManagement)
      },
      {
        path: 'orders',
        loadComponent: () => import('./orders/order-management').then(m => m.OrderManagement)
      },
      {
        path: 'refunds',
        loadComponent: () => import('./refunds/refund-management').then(m => m.RefundManagement)
      },
      {
        path: 'analytics',
        loadComponent: () => import('./analytics/platform-analytics').then(m => m.PlatformAnalytics)
      },
      {
        path: 'reviews',
        loadComponent: () => import('./reviews/review-moderation').then(m => m.ReviewModeration)
      },
      {
        path: 'categories',
        loadComponent: () => import('./categories/category-management').then(m => m.CategoryManagement)
      },
      {
        path: 'audit-logs',
        loadComponent: () => import('./audit-logs/audit-logs').then(m => m.AuditLogs)
      },
      {
        path: 'config',
        loadComponent: () => import('./config/system-config').then(m => m.SystemConfig)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
