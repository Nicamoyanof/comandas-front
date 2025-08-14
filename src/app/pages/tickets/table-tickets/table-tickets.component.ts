import { Component } from '@angular/core';
import { Ticket } from '../../../models/Ticket.model';
import { TicketService } from '../../../services/ticket.service';
import { MaterialModule } from '../../../material.module';
import { DynamicFilterComponent } from '../../../shared/dynamic-filter/dynamic-filter.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-table-tickets',
  standalone: true,
  imports: [MaterialModule, DynamicFilterComponent, RouterModule],
  templateUrl: './table-tickets.component.html',
  styleUrl: './table-tickets.component.scss'
})
export class TableTicketsComponent {
  displayedColumns: string[] = ['ticket_id', 'order_id', 'total', 'payment_method', 'issued_at', 'actions'];
  tickets: Ticket[] = [];
  isLoading = true;

  constructor(private ticketService: TicketService) {}

  ngOnInit(): void {
    this.loadTickets();
  }

  loadTickets(): void {
    this.ticketService.getAll().subscribe({
      next: data => {
        this.tickets = data;
        this.isLoading = false;
      },
      error: err => {
        console.error('Error fetching tickets', err);
        this.isLoading = false;
      }
    });
  }

  delete(id: number): void {
    if (confirm('¿Eliminar ticket?')) {
      this.ticketService.delete(id).subscribe(() => {
        this.tickets = this.tickets.filter(t => t.ticket_id !== id);
      });
    }
  }
}
