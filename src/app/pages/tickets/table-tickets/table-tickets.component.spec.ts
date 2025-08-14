import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { TableTicketsComponent } from './table-tickets.component';

describe('TableTicketsComponent', () => {
  let component: TableTicketsComponent;
  let fixture: ComponentFixture<TableTicketsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TableTicketsComponent, HttpClientTestingModule, RouterTestingModule]
    }).compileComponents();

    fixture = TestBed.createComponent(TableTicketsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
