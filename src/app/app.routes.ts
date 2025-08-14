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
import { AddOrderComponent } from './pages/orders/add-order/add-order.component';

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
  ,
  {
    path: 'users',
    children: [
      {
        path: 'add',
        component: AddUserComponent
      },
      {
        path: 'edit/:id',
        component: AddUserComponent
      },
      {
        path: 'table',
        component: TableUsersComponent
      }
    ]
  }
  ,
  {
    path: 'orders',
    children: [
      {
        path: 'add',
        component: AddOrderComponent
      },
      {
        path: 'edit/:id',
        component: AddOrderComponent
      },
      {
        path: 'table',
        component: TableOrdersComponent
      }
    ]
  }
  ,
  {
    path: 'order-details',
    children: [
      {
        path: 'add',
        component: AddOrderDetailComponent
      },
      {
        path: 'edit/:id',
        component: AddOrderDetailComponent
      },
      {
        path: 'table',
        component: TableOrderDetailsComponent
      }
    ]
  }
];
