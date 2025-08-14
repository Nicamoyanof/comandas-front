import { Component } from '@angular/core';
import { Category } from '../../../models/Category.model';
import { CategoryService } from '../../../services/category.service';
import { MaterialModule } from '../../../material.module';
import { DynamicFilterComponent } from '../../../shared/dynamic-filter/dynamic-filter.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-table-categories',
  standalone: true,
  imports: [MaterialModule, DynamicFilterComponent, RouterModule],
  templateUrl: './table-categories.component.html',
  styleUrl: './table-categories.component.scss'
})
export class TableCategoriesComponent {
  displayedColumns: string[] = ['category_id', 'name', 'actions'];
  categories: Category[] = [];
  isLoading = true;

  constructor(private categoryService: CategoryService) {}

  ngOnInit(): void {
    this.loadCategories();
  }

  loadCategories(): void {
    this.categoryService.getAll().subscribe({
      next: data => {
        this.categories = data;
        this.isLoading = false;
      },
      error: err => {
        console.error('Error fetching categories', err);
        this.isLoading = false;
      }
    });
  }

  delete(id: number): void {
    if (confirm('¿Eliminar categoría?')) {
      this.categoryService.delete(id).subscribe(() => {
        this.categories = this.categories.filter(c => c.category_id !== id);
      });
    }
  }
}
