import { Component } from '@angular/core';
import { Order } from '../../../models/Order.model';
import { OrderService } from '../../../services/order.service';
import { MaterialModule } from '../../../material.module';
import { DynamicFilterComponent } from '../../../shared/dynamic-filter/dynamic-filter.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-table-orders',
  standalone: true,
  imports: [MaterialModule, DynamicFilterComponent, RouterModule],
  templateUrl: './table-orders.component.html',
  styleUrl: './table-orders.component.scss'
})
export class TableOrdersComponent {
  displayedColumns: string[] = ['order_id', 'table_id', 'user_id', 'status', 'created_at', 'actions'];
  orders: Order[] = [];
  isLoading = true;

  constructor(private orderService: OrderService) {}

  ngOnInit(): void {
    this.loadOrders();
  }

  loadOrders(): void {
    this.orderService.getAll().subscribe({
      next: data => {
        this.orders = data;
        this.isLoading = false;
      },
      error: err => {
        console.error('Error fetching orders', err);
        this.isLoading = false;
      }
    });
  }

  delete(id: number): void {
    if (confirm('¿Eliminar orden?')) {
      this.orderService.delete(id).subscribe(() => {
        this.orders = this.orders.filter(o => o.order_id !== id);
      });
    }
  }
}
