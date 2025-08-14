import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MaterialModule } from '../../../material.module';
import { OrderService } from '../../../services/order.service';

@Component({
  selector: 'app-add-order',
  standalone: true,
  imports: [MaterialModule, ReactiveFormsModule],
  templateUrl: './add-order.component.html',
  styleUrl: './add-order.component.scss'
})
export class AddOrderComponent implements OnInit {
  form: FormGroup;
  isEdit = false;
  orderId: number | null = null;

  constructor(
    private fb: FormBuilder,
    private orderService: OrderService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.form = this.fb.group({
      table_id: [''],
      user_id: ['', Validators.required],
      status: ['pending', Validators.required],
      notes: ['']
    });
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if (params['id']) {
        this.isEdit = true;
        this.orderId = +params['id'];
        this.orderService.getById(this.orderId).subscribe(order => {
          this.form.patchValue(order);
        });
      }
    });
  }

  submit(): void {
    if (this.form.invalid) {
      return;
    }
    const data = this.form.value;

    if (this.isEdit && this.orderId) {
      this.orderService.update(this.orderId, data).subscribe(() => {
        alert('Orden actualizada');
        this.router.navigate(['/orders/table']);
      });
    } else {
      this.orderService.create(data).subscribe(() => {
        alert('Orden creada');
        this.router.navigate(['/orders/table']);
      });
    }
  }
}

