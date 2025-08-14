import { Routes } from '@angular/router';
import { TableProductsComponent } from './pages/products/table-products/table-products.component';
import { AddProductsComponent } from './pages/products/add-products/add-products.component';
import { TableCategoriesComponent } from './pages/categories/table-categories/table-categories.component';
import { AddCategoryComponent } from './pages/categories/add-category/add-category.component';

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
  ,
  {
    path: 'categories',
    children: [
      {
        path: 'add',
        component: AddCategoryComponent
      },
      {
        path: 'edit/:id',
        component: AddCategoryComponent
      },
      {
        path: 'table',
        component: TableCategoriesComponent
      }
    ]
  }
];
