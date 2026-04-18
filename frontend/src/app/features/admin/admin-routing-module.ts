import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
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
    path: 'analytics',
    loadComponent: () => import('./analytics/platform-analytics').then(m => m.PlatformAnalytics)
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
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
