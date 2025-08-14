import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TableOrderDetailsComponent } from './table-order-details.component';

describe('TableOrderDetailsComponent', () => {
  let component: TableOrderDetailsComponent;
  let fixture: ComponentFixture<TableOrderDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TableOrderDetailsComponent]
    });
    fixture = TestBed.createComponent(TableOrderDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
