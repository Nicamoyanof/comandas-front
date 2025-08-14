import { Routes } from '@angular/router';
import { TableProductsComponent } from './pages/products/table-products/table-products.component';
import { AddProductsComponent } from './pages/products/add-products/add-products.component';
import { TableCategoriesComponent } from './pages/categories/table-categories/table-categories.component';
import { AddCategoryComponent } from './pages/categories/add-category/add-category.component';
import { TableUsersComponent } from './pages/users/table-users/table-users.component';
import { AddUserComponent } from './pages/users/add-user/add-user.component';
import { AddOrderComponent } from './pages/orders/add-order/add-order.component';
import { TableOrderDetailsComponent } from './pages/order-details/table-order-details/table-order-details.component';
import { AddOrderDetailComponent } from './pages/order-details/add-order-detail/add-order-detail.component';
import { TableOrdersComponent } from './pages/orders/table-orders/table-orders.component';

export const routes: Routes = [
  { path: '', redirectTo: 'products/table', pathMatch: 'full' },
  {
    path: 'products',
    children: [
      {
        path: 'add',
        component: AddProductsComponent,
        data: { title: 'Agregar producto' }
      },
      {
        path: 'edit/:id',
        component: AddProductsComponent,
        data: { title: 'Editar producto' }
      },
      {
        path: 'table',
        component: TableProductsComponent,
        data: { title: 'Productos' }
      }
    ]
  },
  {
    path: 'categories',
    children: [
      {
        path: 'add',
        component: AddCategoryComponent,
        data: { title: 'Agregar categoría' }
      },
      {
        path: 'edit/:id',
        component: AddCategoryComponent,
        data: { title: 'Editar categoría' }
      },
      {
        path: 'table',
        component: TableCategoriesComponent,
        data: { title: 'Categorías' }
      }
    ]
  },
  {
    path: 'users',
    children: [
      {
        path: 'add',
        component: AddUserComponent,
        data: { title: 'Agregar usuario' }
      },
      {
        path: 'edit/:id',
        component: AddUserComponent,
        data: { title: 'Editar usuario' }
      },
      {
        path: 'table',
        component: TableUsersComponent,
        data: { title: 'Usuarios' }
      }
    ]
  },
  {
    path: 'orders',
    children: [
      {
        path: 'add',
        component: AddOrderComponent,
        data: { title: 'Agregar orden' }
      },
      {
        path: 'edit/:id',
        component: AddOrderComponent,
        data: { title: 'Editar orden' }
      },
      {
        path: 'table',
        component: TableOrdersComponent,
        data: { title: 'Órdenes' }
      }
    ]
  },
  {
    path: 'order-details',
    children: [
      {
        path: 'add',
        component: AddOrderDetailComponent,
        data: { title: 'Agregar detalle de orden' }
      },
      {
        path: 'edit/:id',
        component: AddOrderDetailComponent,
        data: { title: 'Editar detalle de orden' }
      },
      {
        path: 'table',
        component: TableOrderDetailsComponent,
        data: { title: 'Detalles de orden' }
      }
    ]
  }
];
