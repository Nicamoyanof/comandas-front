import { Component } from '@angular/core';
import { Printer } from '../../../models/Printer.model';
import { PrinterService } from '../../../services/printer.service';
import { MaterialModule } from '../../../material.module';
import { DynamicFilterComponent } from '../../../shared/dynamic-filter/dynamic-filter.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-table-printers',
  standalone: true,
  imports: [MaterialModule, DynamicFilterComponent, RouterModule],
  templateUrl: './table-printers.component.html',
  styleUrl: './table-printers.component.scss'
})
export class TablePrintersComponent {
  displayedColumns: string[] = ['printer_id', 'name', 'location', 'ip_address', 'actions'];
  printers: Printer[] = [];
  isLoading = true;

  constructor(private printerService: PrinterService) {}

  ngOnInit(): void {
    this.loadPrinters();
  }

  loadPrinters(): void {
    this.printerService.getAll().subscribe({
      next: data => {
        this.printers = data;
        this.isLoading = false;
      },
      error: err => {
        console.error('Error fetching printers', err);
        this.isLoading = false;
      }
    });
  }

  delete(id: number): void {
    if (confirm('¿Eliminar impresora?')) {
      this.printerService.delete(id).subscribe(() => {
        this.printers = this.printers.filter(p => p.printer_id !== id);
      });
    }
  }
}
