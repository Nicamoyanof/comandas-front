import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MaterialModule } from '../../../material.module';
import { TicketService } from '../../../services/ticket.service';

@Component({
  selector: 'app-add-ticket',
  standalone: true,
  imports: [MaterialModule, ReactiveFormsModule],
  templateUrl: './add-ticket.component.html',
  styleUrl: './add-ticket.component.scss'
})
export class AddTicketComponent implements OnInit {
  form: FormGroup;
  isEdit = false;
  ticketId: number | null = null;
  paymentMethods = [
    { value: 'cash', viewValue: 'Efectivo' },
    { value: 'card', viewValue: 'Tarjeta' },
    { value: 'qr', viewValue: 'QR' },
    { value: 'account_credit', viewValue: 'Crédito en cuenta' }
  ];

  constructor(
    private fb: FormBuilder,
    private ticketService: TicketService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.form = this.fb.group({
      order_id: ['', Validators.required],
      total: [0, [Validators.required, Validators.min(0)]],
      payment_method: ['cash', Validators.required],
      issued_at: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if (params['id']) {
        this.isEdit = true;
        this.ticketId = +params['id'];
        this.ticketService.getById(this.ticketId).subscribe(ticket => {
          this.form.patchValue(ticket);
        });
      }
    });
  }

  submit(): void {
    if (this.form.invalid) {
      return;
    }
    const data = this.form.value;

    if (this.isEdit && this.ticketId) {
      this.ticketService.update(this.ticketId, data).subscribe(() => {
        alert('Ticket actualizado');
        this.router.navigate(['/tickets/table']);
      });
    } else {
      this.ticketService.create(data).subscribe(() => {
        alert('Ticket creado');
        this.router.navigate(['/tickets/table']);
      });
    }
  }
}
