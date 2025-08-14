import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { RestaurantTable } from '../models/restaurant-table.model';
import { Order } from '../models/order.model';
import { OrderDetail } from '../models/order-detail.model';
import { Product } from '../models/product.model';
import { Ticket } from '../models/ticket.model';

export interface TableSummary {
  table: RestaurantTable;
  openOrder?: Order;
  items?: Array<{ id: number; name: string; qty: number; price: number; subtotal: number }>;
  totals?: { items: number; amount: number };
}

@Injectable({ providedIn: 'root' })
export class ApiService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getTables(): Observable<RestaurantTable[]> {
    return this.http
      .get<RestaurantTable[]>(`${this.apiUrl}/tables`)
      .pipe(catchError(this.handleError));
  }

  getTableSummary(tableId: number): Observable<TableSummary> {
    return this.http
      .get<TableSummary>(`${this.apiUrl}/tables/${tableId}/summary`)
      .pipe(catchError(this.handleError));
  }

  getOrders(params?: { status?: string; tableId?: number }): Observable<Order[]> {
    let httpParams = new HttpParams();
    if (params?.status) httpParams = httpParams.set('status', params.status);
    if (params?.tableId) httpParams = httpParams.set('tableId', params.tableId);
    return this.http
      .get<Order[]>(`${this.apiUrl}/orders`, { params: httpParams })
      .pipe(catchError(this.handleError));
  }

  getOrderDetails(orderId: number): Observable<{ order: Order; details: (OrderDetail & { product: Product })[] }> {
    return this.http
      .get<{ order: Order; details: (OrderDetail & { product: Product })[] }>(`${this.apiUrl}/orders/${orderId}/details`)
      .pipe(catchError(this.handleError));
  }

  updateOrderStatus(orderId: number, status: Order['status']): Observable<Order> {
    return this.http
      .patch<Order>(`${this.apiUrl}/orders/${orderId}/status`, { status })
      .pipe(catchError(this.handleError));
  }

  createTicket(orderId: number, payment_method: Ticket['payment_method']): Observable<Ticket> {
    return this.http
      .post<Ticket>(`${this.apiUrl}/tickets`, { order_id: orderId, payment_method })
      .pipe(catchError(this.handleError));
  }

  getTicket(ticketId: number): Observable<Ticket> {
    return this.http
      .get<Ticket>(`${this.apiUrl}/tickets/${ticketId}`)
      .pipe(catchError(this.handleError));
  }

  private handleError(error: any) {
    console.error(error);
    return throwError(() => error);
  }
}
