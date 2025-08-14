import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AddRestaurantTableComponent } from './add-restaurant-table.component';

describe('AddRestaurantTableComponent', () => {
  let component: AddRestaurantTableComponent;
  let fixture: ComponentFixture<AddRestaurantTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddRestaurantTableComponent, HttpClientTestingModule, RouterTestingModule]
    }).compileComponents();

    fixture = TestBed.createComponent(AddRestaurantTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
