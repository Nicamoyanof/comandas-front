import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ApiService } from './api.service';
import { environment } from '../../environments/environment';

describe('ApiService', () => {
  let service: ApiService;
  let http: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ApiService]
    });
    service = TestBed.inject(ApiService);
    http = TestBed.inject(HttpTestingController);
  });

  afterEach(() => http.verify());

  it('should get tables', () => {
    const mock = [{ table_id: 1, table_number: 1, status: 'free' }];
    service.getTables().subscribe((tables) => {
      expect(tables.length).toBe(1);
    });
    const req = http.expectOne(environment.apiUrl + '/tables');
    expect(req.request.method).toBe('GET');
    req.flush(mock);
  });

  it('should handle error on updateOrderStatus', () => {
    service.updateOrderStatus(1, 'ready').subscribe({
      next: () => fail('should error'),
      error: (err) => expect(err.status).toBe(500)
    });
    const req = http.expectOne(environment.apiUrl + '/orders/1/status');
    expect(req.request.method).toBe('PATCH');
    req.flush('Error', { status: 500, statusText: 'Server Error' });
  });
});
