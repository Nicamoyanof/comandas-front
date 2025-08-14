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
import { AddActivityLogComponent } from './pages/activity-logs/add-activity-log/add-activity-log.component';
import { TableActivityLogsComponent } from './pages/activity-logs/table-activity-logs/table-activity-logs.component';
import { AddPrinterComponent } from './pages/printers/add-printer/add-printer.component';
import { TablePrintersComponent } from './pages/printers/table-printers/table-printers.component';
import { AddRestaurantTableComponent } from './pages/restaurant-tables/add-restaurant-table/add-restaurant-table.component';
import { TableRestaurantTablesComponent } from './pages/restaurant-tables/table-restaurant-tables/table-restaurant-tables.component';
import { AddTicketComponent } from './pages/tickets/add-ticket/add-ticket.component';
import { TableTicketsComponent } from './pages/tickets/table-tickets/table-tickets.component';

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
  },
  {
    path: 'activity-logs',
    children: [
      {
        path: 'add',
        component: AddActivityLogComponent,
        data: { title: 'Agregar log' }
      },
      {
        path: 'edit/:id',
        component: AddActivityLogComponent,
        data: { title: 'Editar log' }
      },
      {
        path: 'table',
        component: TableActivityLogsComponent,
        data: { title: 'Logs de actividad' }
      }
    ]
  },
  {
    path: 'printers',
    children: [
      {
        path: 'add',
        component: AddPrinterComponent,
        data: { title: 'Agregar impresora' }
      },
      {
        path: 'edit/:id',
        component: AddPrinterComponent,
        data: { title: 'Editar impresora' }
      },
      {
        path: 'table',
        component: TablePrintersComponent,
        data: { title: 'Impresoras' }
      }
    ]
  },
  {
    path: 'restaurant-tables',
    children: [
      {
        path: 'add',
        component: AddRestaurantTableComponent,
        data: { title: 'Agregar mesa' }
      },
      {
        path: 'edit/:id',
        component: AddRestaurantTableComponent,
        data: { title: 'Editar mesa' }
      },
      {
        path: 'table',
        component: TableRestaurantTablesComponent,
        data: { title: 'Mesas' }
      }
    ]
  },
  {
    path: 'tickets',
    children: [
      {
        path: 'add',
        component: AddTicketComponent,
        data: { title: 'Agregar ticket' }
      },
      {
        path: 'edit/:id',
        component: AddTicketComponent,
        data: { title: 'Editar ticket' }
      },
      {
        path: 'table',
        component: TableTicketsComponent,
        data: { title: 'Tickets' }
      }
    ]
  }
];
