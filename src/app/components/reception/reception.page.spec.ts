import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReceptionPage } from './reception.page';
import { ApiService } from '../../services/api.service';
import { of } from 'rxjs';

describe('ReceptionPage', () => {
  let fixture: ComponentFixture<ReceptionPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReceptionPage],
      providers: [
        {
          provide: ApiService,
          useValue: { getTables: () => of([{ table_id: 1, table_number: 1, status: 'free' }]), getTableSummary: () => of({}) }
        }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(ReceptionPage);
    fixture.detectChanges();
  });

  it('should render table cards', () => {
    const cards = fixture.nativeElement.querySelectorAll('app-table-card');
    expect(cards.length).toBe(1);
  });
});
