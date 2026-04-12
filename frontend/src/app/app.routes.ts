import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: '/catalog', pathMatch: 'full' },
  { path: 'catalog', loadChildren: () => import('./features/catalog/catalog-module').then(m => m.CatalogModule) },
  { path: 'cart', loadChildren: () => import('./features/cart/cart-module').then(m => m.CartModule) },
  { path: 'checkout', loadChildren: () => import('./features/checkout/checkout-module').then(m => m.CheckoutModule) },
  { path: '**', redirectTo: '/catalog' }
];
