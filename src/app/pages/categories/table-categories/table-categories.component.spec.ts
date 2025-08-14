import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { TableCategoriesComponent } from './table-categories.component';

describe('TableCategoriesComponent', () => {
  let component: TableCategoriesComponent;
  let fixture: ComponentFixture<TableCategoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TableCategoriesComponent, HttpClientTestingModule, RouterTestingModule]
    }).compileComponents();

    fixture = TestBed.createComponent(TableCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
