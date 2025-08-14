import { Component } from '@angular/core';
import { Product } from '../../../models/Product.model';
import { ProductService } from '../../../services/product.service';
import { MaterialModule } from '../../../material.module';
import { CurrencyPipe } from '@angular/common';
import { DynamicFilterComponent } from "../../../shared/dynamic-filter/dynamic-filter.component";
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-table-products',
  standalone: true,
  imports: [MaterialModule, CurrencyPipe, DynamicFilterComponent, RouterModule],
  templateUrl: './table-products.component.html',
  styleUrl: './table-products.component.scss'
})
export class TableProductsComponent {
 displayedColumns: string[] = ['product_id', 'name', 'description', 'price', 'available', 'actions'];
  products: Product[] = [];
  isLoading = true;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getAllProducts().subscribe({
      next: (data) => {
        this.products = data;
        this.isLoading = false;
      },
      error: (err) => {
        console.error('Error fetching products', err);
        this.isLoading = false;
      }
    });
  }

  delete(id: number): void {
    if (confirm('¿Eliminar producto?')) {
      this.productService.delete(id).subscribe(() => {
        this.products = this.products.filter(p => p.product_id !== id);
      });
    }
  }
}
