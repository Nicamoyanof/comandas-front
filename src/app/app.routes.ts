import { Routes } from '@angular/router';
import { TableProductsComponent } from './pages/products/table-products/table-products.component';
import { AddProductsComponent } from './pages/products/add-products/add-products.component';

export const routes: Routes = [
  {
    path: 'products',
    children: [
      {
        path: 'add',
        component: AddProductsComponent
      },
      {
        path: 'edit/:id',
        component: AddProductsComponent
      },
      {
        path: 'table',
        component: TableProductsComponent
      }
    ]
  }
];
