import { Component } from '@angular/core';
import { RestaurantTable } from '../../../models/RestaurantTable.model';
import { RestaurantTableService } from '../../../services/restaurant-table.service';
import { MaterialModule } from '../../../material.module';
import { DynamicFilterComponent } from '../../../shared/dynamic-filter/dynamic-filter.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-table-restaurant-tables',
  standalone: true,
  imports: [MaterialModule, DynamicFilterComponent, RouterModule],
  templateUrl: './table-restaurant-tables.component.html',
  styleUrl: './table-restaurant-tables.component.scss'
})
export class TableRestaurantTablesComponent {
  displayedColumns: string[] = ['table_id', 'table_number', 'status', 'section', 'actions'];
  tables: RestaurantTable[] = [];
  isLoading = true;

  constructor(private tableService: RestaurantTableService) {}

  ngOnInit(): void {
    this.loadTables();
  }

  loadTables(): void {
    this.tableService.getAll().subscribe({
      next: data => {
        this.tables = data;
        this.isLoading = false;
      },
      error: err => {
        console.error('Error fetching tables', err);
        this.isLoading = false;
      }
    });
  }

  delete(id: number): void {
    if (confirm('¿Eliminar mesa?')) {
      this.tableService.delete(id).subscribe(() => {
        this.tables = this.tables.filter(t => t.table_id !== id);
      });
    }
  }
}
