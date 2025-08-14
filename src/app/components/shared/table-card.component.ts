import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { RestaurantTable } from '../../models/restaurant-table.model';

@Component({
  selector: 'app-table-card',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatChipsModule],
  templateUrl: './table-card.component.html',
  styleUrls: ['./table-card.component.scss']
})
export class TableCardComponent {
  @Input() table!: RestaurantTable;
  @Input() summary?: { items: number; amount: number };

  statusColor(status: RestaurantTable['status']): string {
    switch (status) {
      case 'free':
        return '#10B981';
      case 'occupied':
        return '#F59E0B';
      case 'reserved':
        return '#3B82F6';
      case 'waiting_payment':
        return '#8B5CF6';
      default:
        return '#ccc';
    }
  }
}
