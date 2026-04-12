import { Routes } from '@angular/router';

export const profileRoutes: Routes = [
  {
    path: 'orders',
    loadComponent: () => import('./pages/order-list/order-list.component').then(m => m.OrderListComponent)
  },
  {
    path: 'orders/:id',
    loadComponent: () => import('./pages/order-detail/order-detail.component').then(m => m.OrderDetailComponent)
  }
];
