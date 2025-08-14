import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { OrderDetail } from '../models/OrderDetail.model';

@Injectable({
  providedIn: 'root'
})
export class OrderDetailService {
  private apiUrl = 'http://localhost:3000/api/order-details';

  constructor(private http: HttpClient) {}

  getAll(): Observable<OrderDetail[]> {
    return this.http.get<OrderDetail[]>(this.apiUrl);
  }

  getById(id: number): Observable<OrderDetail> {
    return this.http.get<OrderDetail>(`${this.apiUrl}/${id}`);
  }

  create(detail: Partial<OrderDetail>): Observable<OrderDetail> {
    return this.http.post<OrderDetail>(this.apiUrl, detail);
  }

  update(id: number, detail: Partial<OrderDetail>): Observable<OrderDetail> {
    return this.http.put<OrderDetail>(`${this.apiUrl}/${id}`, detail);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
