import { Routes } from '@angular/router';
import { authGuard, roleGuard } from './core/guards/auth.guard';

export const routes: Routes = [
  // Public route
  {
    path: '',
    redirectTo: 'catalog',
    pathMatch: 'full',
  },
  {
    path: 'catalog',
    loadChildren: () => import('./features/catalog/catalog-module').then((m) => m.CatalogModule),
  },

  // Protected routes (Guards apply Role Based Access Control)
  {
    path: 'admin',
    loadChildren: () => import('./features/admin/admin-module').then((m) => m.AdminModule),
    canActivate: [authGuard, roleGuard], // Must be logged in AND have ADMIN role.
    data: { roles: ['ADMIN'] } // Only admins can access this section.
  },
  {
    path: 'corporate',
    loadChildren: () =>
      import('./features/corporate/corporate-module').then((m) => m.CorporateModule),
    canActivate: [authGuard, roleGuard],
    data: { roles: ['CORPORATE', 'ADMIN'] } // Corporate Users or Admins.
  },
  {
    path: 'individual',
    loadChildren: () =>
      import('./features/individual/individual-module').then((m) => m.IndividualModule),
    canActivate: [authGuard, roleGuard],
    data: { roles: ['INDIVIDUAL', 'ADMIN'] }
  },
  {
    path: 'chat',
    loadChildren: () =>
      import('./features/ai-assistant/ai-assistant-module').then((m) => m.AiAssistantModule),
    canActivate: [authGuard] // Any authenticated user can chat.
  },

  // Fallback route for 404s
  {
    path: '**',
    redirectTo: 'catalog',
  },
];
