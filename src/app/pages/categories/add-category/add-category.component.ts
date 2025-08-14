import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MaterialModule } from '../../../material.module';
import { CategoryService } from '../../../services/category.service';

@Component({
  selector: 'app-add-category',
  standalone: true,
  imports: [MaterialModule, ReactiveFormsModule],
  templateUrl: './add-category.component.html',
  styleUrl: './add-category.component.scss'
})
export class AddCategoryComponent implements OnInit {
  form: FormGroup;
  isEdit = false;
  categoryId: number | null = null;

  constructor(
    private fb: FormBuilder,
    private categoryService: CategoryService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.form = this.fb.group({
      name: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if (params['id']) {
        this.isEdit = true;
        this.categoryId = +params['id'];
        this.categoryService.getById(this.categoryId).subscribe(category => {
          this.form.patchValue(category);
        });
      }
    });
  }

  submit(): void {
    if (this.form.invalid) {
      return;
    }
    const data = this.form.value;

    if (this.isEdit && this.categoryId) {
      this.categoryService.update(this.categoryId, data).subscribe(() => {
        alert('Categoría actualizada');
        this.router.navigate(['/categories/table']);
      });
    } else {
      this.categoryService.create(data).subscribe(() => {
        alert('Categoría creada');
        this.router.navigate(['/categories/table']);
      });
    }
  }
}
