import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { RelativeTimePipe } from '../../pipes/relative-time.pipe';
import { Order } from '../../models/order.model';
import { OrderDetail } from '../../models/order-detail.model';

@Component({
  selector: 'app-order-card',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule, MatChipsModule, MatIconModule, RelativeTimePipe],
  templateUrl: './order-card.component.html',
  styleUrls: ['./order-card.component.scss']
})
export class OrderCardComponent {
  @Input() order!: Order;
  @Input() details: (OrderDetail & { product?: { name: string } })[] = [];
  @Output() start = new EventEmitter<void>();
  @Output() ready = new EventEmitter<void>();
  @Output() undo = new EventEmitter<void>();
}
