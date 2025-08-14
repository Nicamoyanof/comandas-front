import { Component, OnInit, inject, signal } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatChipsModule } from '@angular/material/chips';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ApiService, TableSummary } from '../../services/api.service';
import { RestaurantTable } from '../../models/restaurant-table.model';
import { TableCardComponent } from '../shared/table-card.component';
import { groupItems } from '../../utils/group-items.util';

@Component({
  selector: 'app-reception',
  standalone: true,
  templateUrl: './reception.page.html',
  styleUrls: ['./reception.page.scss'],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatInputModule,
    MatChipsModule,
    MatProgressBarModule,
    MatButtonModule,
    MatSnackBarModule,
    ReactiveFormsModule,
    TableCardComponent,
    CurrencyPipe
  ]
})
export class ReceptionPage implements OnInit {
  private api = inject(ApiService);
  private snack = inject(MatSnackBar);

  tables: RestaurantTable[] = [];
  filteredTables: RestaurantTable[] = [];
  selectedTable?: RestaurantTable;
  summary?: TableSummary;
  loadingSummary = false;

  search = new FormControl('');
  statusFilter = signal<RestaurantTable['status'][]>([]);

  ngOnInit() {
    this.loadTables();
    this.search.valueChanges.pipe(takeUntilDestroyed()).subscribe(() => this.applyFilters());
  }

  loadTables() {
    this.api.getTables().subscribe({
      next: (tables) => {
        this.tables = tables;
        this.applyFilters();
      },
      error: () => this.snack.open('Error loading tables', 'Close', { duration: 3000 })
    });
  }

  applyFilters() {
    const term = (this.search.value ?? '').toString();
    this.filteredTables = this.tables.filter((t) => {
      const matchTerm = term ? t.table_number.toString().includes(term) : true;
      const matchStatus = this.statusFilter().length ? this.statusFilter().includes(t.status) : true;
      return matchTerm && matchStatus;
    });
  }

  toggleStatus(status: RestaurantTable['status']) {
    const current = this.statusFilter();
    if (current.includes(status)) {
      this.statusFilter.set(current.filter((s) => s !== status));
    } else {
      this.statusFilter.set([...current, status]);
    }
    this.applyFilters();
  }

  openTable(table: RestaurantTable) {
    this.selectedTable = table;
    this.loadingSummary = true;
    this.api.getTableSummary(table.table_id).subscribe({
      next: (summary) => {
        this.summary = summary;
        this.loadingSummary = false;
      },
      error: () => {
        this.snack.open('Error loading summary', 'Close', { duration: 3000 });
        this.loadingSummary = false;
      }
    });
  }

  closeDetails() {
    this.selectedTable = undefined;
    this.summary = undefined;
  }

  get groupedItems() {
    return groupItems((this.summary?.items as any) || []);
  }

  issueTicket(method: 'cash' | 'card' | 'qr' | 'account_credit') {
    const orderId = this.summary?.openOrder?.order_id;
    if (!orderId) return;
    this.api.createTicket(orderId, method).subscribe({
      next: (ticket) => {
        this.snack.open('Ticket issued', 'Close', { duration: 3000 });
        window.open(`/receipt/${ticket.ticket_id}`, '_blank');
      },
      error: () => this.snack.open('Error issuing ticket', 'Close', { duration: 3000 })
    });
  }
}
