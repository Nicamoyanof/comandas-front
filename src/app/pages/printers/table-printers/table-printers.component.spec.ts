import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { TablePrintersComponent } from './table-printers.component';

describe('TablePrintersComponent', () => {
  let component: TablePrintersComponent;
  let fixture: ComponentFixture<TablePrintersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TablePrintersComponent, HttpClientTestingModule, RouterTestingModule]
    }).compileComponents();

    fixture = TestBed.createComponent(TablePrintersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
