import { ComponentFixture, TestBed } from '@angular/core/testing';
import { KitchenPage } from './kitchen.page';
import { ApiService } from '../../services/api.service';
import { of } from 'rxjs';

describe('KitchenPage', () => {
  let fixture: ComponentFixture<KitchenPage>;
  let component: KitchenPage;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KitchenPage],
      providers: [
        {
          provide: ApiService,
          useValue: {
            getOrders: () => of([{ order_id: 1, table_id: 1, user_id: 1, status: 'pending', created_at: '' }]),
            updateOrderStatus: () => of({})
          }
        }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(KitchenPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should move order to in_progress', () => {
    const order = component.pending[0];
    component.move(order, 'in_progress');
    expect(order.status).toBe('in_progress');
  });
});
