import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { TableRestaurantTablesComponent } from './table-restaurant-tables.component';

describe('TableRestaurantTablesComponent', () => {
  let component: TableRestaurantTablesComponent;
  let fixture: ComponentFixture<TableRestaurantTablesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TableRestaurantTablesComponent, HttpClientTestingModule, RouterTestingModule]
    }).compileComponents();

    fixture = TestBed.createComponent(TableRestaurantTablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
