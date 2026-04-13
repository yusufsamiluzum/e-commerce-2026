import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: '/catalog', pathMatch: 'full' },
  { path: 'catalog', loadChildren: () => import('./features/catalog/catalog-module').then(m => m.CatalogModule) },
  { path: 'cart', loadChildren: () => import('./features/cart/cart-module').then(m => m.CartModule) },
  { path: 'checkout', loadChildren: () => import('./features/checkout/checkout-module').then(m => m.CheckoutModule) },
  { path: 'individual', loadChildren: () => import('./features/individual/individual-module').then(m => m.IndividualModule) },
  { path: 'auth', loadChildren: () => import('./features/auth/auth-module').then(m => m.AuthModule) },
  { path: 'admin', loadChildren: () => import('./features/admin/admin-module').then(m => m.AdminModule) },
  { path: 'corporate', loadChildren: () => import('./features/corporate/corporate-module').then(m => m.CorporateModule) },
  { path: '**', redirectTo: '/catalog' }
];
