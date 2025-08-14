import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MaterialModule } from '../../../material.module';
import { OrderDetailService } from '../../../services/order-detail.service';

@Component({
  selector: 'app-add-order-detail',
  standalone: true,
  imports: [MaterialModule, ReactiveFormsModule],
  templateUrl: './add-order-detail.component.html',
  styleUrl: './add-order-detail.component.scss'
})
export class AddOrderDetailComponent implements OnInit {
  form: FormGroup;
  isEdit = false;
  detailId: number | null = null;

  constructor(
    private fb: FormBuilder,
    private orderDetailService: OrderDetailService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.form = this.fb.group({
      order_id: ['', Validators.required],
      product_id: ['', Validators.required],
      quantity: [1, [Validators.required, Validators.min(1)]],
      modifiers: ['']
    });
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if (params['id']) {
        this.isEdit = true;
        this.detailId = +params['id'];
        this.orderDetailService.getById(this.detailId).subscribe(detail => {
          this.form.patchValue(detail);
        });
      }
    });
  }

  submit(): void {
    if (this.form.invalid) {
      return;
    }
    const data = this.form.value;

    if (this.isEdit && this.detailId) {
      this.orderDetailService.update(this.detailId, data).subscribe(() => {
        alert('Detalle actualizado');
        this.router.navigate(['/order-details/table']);
      });
    } else {
      this.orderDetailService.create(data).subscribe(() => {
        alert('Detalle creado');
        this.router.navigate(['/order-details/table']);
      });
    }
  }
}

