import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ProductService } from '../../../services/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MaterialModule } from '../../../material.module';
import { Product } from '../../../models/Product.model';

@Component({
  selector: 'app-add-products',
  standalone: true,
  imports: [MaterialModule, FormsModule, ReactiveFormsModule],
  templateUrl: './add-products.component.html',
  styleUrl: './add-products.component.scss'
})
export class AddProductsComponent {
  form: FormGroup;
  isEdit = false;
  productId: number | null = null;
  categories = [
    { id: 1, name: 'Comida' },
    { id: 2, name: 'Bebidas' },
    { id: 3, name: 'Postres' }
  ]; // Puedes reemplazar por fetch a /api/categories

  constructor(
    private fb: FormBuilder,
    private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      description: [''],
      price: [0, [Validators.required, Validators.min(0)]],
      available: [true],
      category_id: [null, Validators.required]
    });
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if (params['id']) {
        this.isEdit = true;
        this.productId = +params['id'];
        this.loadProduct(this.productId);
      }
    });
  }

  loadProduct(id: number) {
    this.productService.getById(id).subscribe(product => {
      this.form.patchValue(product);
    });
  }

  submit() {
    if (this.form.invalid) return;

    const product: Product = this.form.value;

    if (this.isEdit && this.productId) {
      this.productService.update(this.productId, product).subscribe(() => {
        alert('Producto actualizado');
        this.router.navigate(['/products']);
      });
    } else {
      this.productService.create(product).subscribe(() => {
        alert('Producto creado');
        this.router.navigate(['/products']);
      });
    }
  }
}
