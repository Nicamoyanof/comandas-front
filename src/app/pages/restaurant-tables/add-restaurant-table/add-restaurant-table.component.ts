import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MaterialModule } from '../../../material.module';
import { RestaurantTableService } from '../../../services/restaurant-table.service';

@Component({
  selector: 'app-add-restaurant-table',
  standalone: true,
  imports: [MaterialModule, ReactiveFormsModule],
  templateUrl: './add-restaurant-table.component.html',
  styleUrl: './add-restaurant-table.component.scss'
})
export class AddRestaurantTableComponent implements OnInit {
  form: FormGroup;
  isEdit = false;
  tableId: number | null = null;
  statuses = [
    { value: 'free', viewValue: 'Libre' },
    { value: 'occupied', viewValue: 'Ocupada' },
    { value: 'reserved', viewValue: 'Reservada' },
    { value: 'waiting_payment', viewValue: 'Esperando pago' }
  ];

  constructor(
    private fb: FormBuilder,
    private tableService: RestaurantTableService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.form = this.fb.group({
      table_number: ['', Validators.required],
      status: ['free', Validators.required],
      section: ['']
    });
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if (params['id']) {
        this.isEdit = true;
        this.tableId = +params['id'];
        this.tableService.getById(this.tableId).subscribe(table => {
          this.form.patchValue(table);
        });
      }
    });
  }

  submit(): void {
    if (this.form.invalid) {
      return;
    }
    const data = this.form.value;

    if (this.isEdit && this.tableId) {
      this.tableService.update(this.tableId, data).subscribe(() => {
        alert('Mesa actualizada');
        this.router.navigate(['/restaurant-tables/table']);
      });
    } else {
      this.tableService.create(data).subscribe(() => {
        alert('Mesa creada');
        this.router.navigate(['/restaurant-tables/table']);
      });
    }
  }
}
