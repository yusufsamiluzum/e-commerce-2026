import { Routes } from '@angular/router';
import { authGuard, notCorporateGuard, roleGuard } from './core/guards/auth.guard';

export const routes: Routes = [
  { path: '', redirectTo: '/catalog', pathMatch: 'full' },
  { path: 'catalog', loadChildren: () => import('./features/catalog/catalog-module').then(m => m.CatalogModule), canActivate: [notCorporateGuard] },
  { path: 'cart', loadChildren: () => import('./features/cart/cart-module').then(m => m.CartModule), canActivate: [notCorporateGuard] },
  { path: 'checkout', loadChildren: () => import('./features/checkout/checkout-module').then(m => m.CheckoutModule), canActivate: [notCorporateGuard] },
  { path: 'individual', loadChildren: () => import('./features/individual/individual-module').then(m => m.IndividualModule), canActivate: [notCorporateGuard] },
  { path: 'auth', loadChildren: () => import('./features/auth/auth-module').then(m => m.AuthModule) },
  { path: 'admin', loadChildren: () => import('./features/admin/admin-module').then(m => m.AdminModule), canActivate: [authGuard, roleGuard], data: { roles: ['ADMIN'] } },
  { path: 'corporate', loadChildren: () => import('./features/corporate/corporate-module').then(m => m.CorporateModule) },
  { path: '**', redirectTo: '/catalog' }
];

