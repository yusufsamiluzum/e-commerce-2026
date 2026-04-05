import { Routes } from '@angular/router';

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

  // Protected routes (Guards will be added here later)
  {
    path: 'admin',
    loadChildren: () => import('./features/admin/admin-module').then((m) => m.AdminModule),
  },
  {
    path: 'corporate',
    loadChildren: () =>
      import('./features/corporate/corporate-module').then((m) => m.CorporateModule),
  },
  {
    path: 'individual',
    loadChildren: () =>
      import('./features/individual/individual-module').then((m) => m.IndividualModule),
  },
  {
    path: 'chat',
    loadChildren: () =>
      import('./features/ai-assistant/ai-assistant-module').then((m) => m.AiAssistantModule),
  },

  // Fallback route for 404s
  {
    path: '**',
    redirectTo: 'catalog',
  },
];
