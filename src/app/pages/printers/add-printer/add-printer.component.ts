import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MaterialModule } from '../../../material.module';
import { PrinterService } from '../../../services/printer.service';

@Component({
  selector: 'app-add-printer',
  standalone: true,
  imports: [MaterialModule, ReactiveFormsModule],
  templateUrl: './add-printer.component.html',
  styleUrl: './add-printer.component.scss'
})
export class AddPrinterComponent implements OnInit {
  form: FormGroup;
  isEdit = false;
  printerId: number | null = null;
  locations = [
    { value: 'kitchen', viewValue: 'Cocina' },
    { value: 'cashier', viewValue: 'Caja' }
  ];

  constructor(
    private fb: FormBuilder,
    private printerService: PrinterService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      location: ['', Validators.required],
      ip_address: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if (params['id']) {
        this.isEdit = true;
        this.printerId = +params['id'];
        this.printerService.getById(this.printerId).subscribe(printer => {
          this.form.patchValue(printer);
        });
      }
    });
  }

  submit(): void {
    if (this.form.invalid) {
      return;
    }
    const data = this.form.value;

    if (this.isEdit && this.printerId) {
      this.printerService.update(this.printerId, data).subscribe(() => {
        alert('Impresora actualizada');
        this.router.navigate(['/printers/table']);
      });
    } else {
      this.printerService.create(data).subscribe(() => {
        alert('Impresora creada');
        this.router.navigate(['/printers/table']);
      });
    }
  }
}
