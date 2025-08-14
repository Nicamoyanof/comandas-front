import { TitleCasePipe } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-dynamic-filter',
  standalone: true,
  imports: [TitleCasePipe, FormsModule, ReactiveFormsModule],
  templateUrl: './dynamic-filter.component.html',
  styleUrl: './dynamic-filter.component.scss',
})
export class DynamicFilterComponent {
  @Input() columns: string[] = []; // Columnas que se pueden filtrar
  @Input() data: any[] = []; // Datos originales
  @Output() filteredData = new EventEmitter<any[]>(); // Datos filtrados

  filters: { [key: string]: string } | any = {};

  applyFilter() {
    let filtered = this.data;

    Object.keys(this.filters).forEach((key) => {
      const value = this.filters[key]?.toLowerCase();
      if (value) {
        filtered = filtered.filter((item) =>
          item[key]?.toString().toLowerCase().includes(value)
        );
      }
    });

    this.filteredData.emit(filtered);
  }
}
