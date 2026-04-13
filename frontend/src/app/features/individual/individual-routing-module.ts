import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'profile',
    loadComponent: () => import('./profile/profile-layout/profile-layout').then(m => m.ProfileLayout),
    children: [
      { path: '', redirectTo: 'details', pathMatch: 'full' },
      { path: 'details', loadComponent: () => import('./profile/user-profile/user-profile').then(m => m.UserProfile) },
      { path: 'orders', loadComponent: () => import('./profile/user-orders/user-orders').then(m => m.UserOrders) },
      { path: 'refunds', loadComponent: () => import('./profile/user-refunds/user-refunds').then(m => m.UserRefunds) },
      { path: 'history', loadComponent: () => import('./profile/purchase-history/purchase-history').then(m => m.PurchaseHistory) },
      { path: 'reviews', loadComponent: () => import('./profile/my-reviews/my-reviews').then(m => m.MyReviews) },
      { path: 'spending', loadComponent: () => import('./profile/spending-analysis/spending-analysis').then(m => m.SpendingAnalysis) },
      { path: 'management', loadComponent: () => import('./profile/profile-management/profile-management').then(m => m.ProfileManagement) },
      { path: 'preferences', loadComponent: () => import('./profile/my-preferences/my-preferences').then(m => m.MyPreferences) },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IndividualRoutingModule { }
