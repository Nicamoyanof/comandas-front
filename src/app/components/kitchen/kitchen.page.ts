import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatButtonModule } from '@angular/material/button';
import { ApiService } from '../../services/api.service';
import { Order } from '../../models/order.model';
import { OrderCardComponent } from '../shared/order-card.component';

@Component({
  selector: 'app-kitchen',
  standalone: true,
  templateUrl: './kitchen.page.html',
  styleUrls: ['./kitchen.page.scss'],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatSnackBarModule,
    MatButtonModule,
    OrderCardComponent
  ]
})
export class KitchenPage implements OnInit {
  private api = inject(ApiService);
  private snack = inject(MatSnackBar);

  pending: Order[] = [];
  inProgress: Order[] = [];
  ready: Order[] = [];

  ngOnInit() {
    this.loadOrders();
  }

  loadOrders() {
    this.api.getOrders().subscribe({
      next: (orders) => {
        this.pending = orders.filter((o) => o.status === 'pending');
        this.inProgress = orders.filter((o) => o.status === 'in_progress');
        this.ready = orders.filter((o) => o.status === 'ready');
      },
      error: () => this.snack.open('Error loading orders', 'Close', { duration: 3000 })
    });
  }

  move(order: Order, status: Order['status']) {
    const prev = order.status;
    order.status = status;
    this.api.updateOrderStatus(order.order_id, status).subscribe({
      next: () => this.loadOrders(),
      error: () => {
        order.status = prev;
        this.snack.open('Error updating order', 'Close', { duration: 3000 });
      }
    });
  }
}
