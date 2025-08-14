import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule, CurrencyPipe, DatePipe } from '@angular/common';
import { ApiService } from '../../services/api.service';
import { Ticket } from '../../models/ticket.model';
import { OrderDetail } from '../../models/order-detail.model';

@Component({
  selector: 'app-receipt',
  standalone: true,
  templateUrl: './receipt.page.html',
  styleUrls: ['./receipt.page.css'],
  imports: [CommonModule, CurrencyPipe, DatePipe]
})
export class ReceiptPage implements OnInit {
  private route = inject(ActivatedRoute);
  private api = inject(ApiService);

  ticket?: Ticket;
  details: (OrderDetail & { product?: { name: string; price: number } })[] = [];

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('ticketId'));
    this.api.getTicket(id).subscribe((ticket) => {
      this.ticket = ticket;
      this.api.getOrderDetails(ticket.order_id).subscribe((res) => {
        this.details = res.details;
        setTimeout(() => window.print());
      });
    });
  }
}
