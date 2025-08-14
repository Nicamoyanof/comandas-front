import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { OrderDetail } from '../../../models/OrderDetail.model';
import { OrderDetailService } from '../../../services/order-detail.service';
import { MaterialModule } from '../../../material.module';
import { DynamicFilterComponent } from '../../../shared/dynamic-filter/dynamic-filter.component';

@Component({
  selector: 'app-table-order-details',
  standalone: true,
  imports: [MaterialModule, DynamicFilterComponent, RouterModule],
  templateUrl: './table-order-details.component.html',
  styleUrl: './table-order-details.component.scss'
})
export class TableOrderDetailsComponent {
  displayedColumns: string[] = ['order_detail_id', 'order_id', 'product_id', 'quantity', 'modifiers', 'actions'];
  details: OrderDetail[] = [];
  isLoading = true;

  constructor(private orderDetailService: OrderDetailService) {}

  ngOnInit(): void {
    this.loadDetails();
  }

  loadDetails(): void {
    this.orderDetailService.getAll().subscribe({
      next: data => {
        this.details = data;
        this.isLoading = false;
      },
      error: err => {
        console.error('Error fetching order details', err);
        this.isLoading = false;
      }
    });
  }

  delete(id: number): void {
    if (confirm('¿Eliminar detalle?')) {
      this.orderDetailService.delete(id).subscribe(() => {
        this.details = this.details.filter(d => d.order_detail_id !== id);
      });
    }
  }
}
