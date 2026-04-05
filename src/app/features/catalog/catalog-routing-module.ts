import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './pages/product-list/product-list';
import { ProductDetailComponent } from './pages/product-detail/product-detail';

const routes: Routes = [
  // Matches the base '/catalog' URL and loads the grid
  {
    path: '',
    component: ProductListComponent,
  },

  // Matches URLs like '/catalog/123' and loads the detail view
  // The ':id' is a dynamic parameter your component can read to fetch the right data
  {
    path: ':id',
    component: ProductDetailComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CatalogRoutingModule {}
