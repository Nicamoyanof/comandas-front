import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { TableActivityLogsComponent } from './table-activity-logs.component';

describe('TableActivityLogsComponent', () => {
  let component: TableActivityLogsComponent;
  let fixture: ComponentFixture<TableActivityLogsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TableActivityLogsComponent, HttpClientTestingModule, RouterTestingModule]
    }).compileComponents();

    fixture = TestBed.createComponent(TableActivityLogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
