import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RestaurantTable } from '../models/RestaurantTable.model';

@Injectable({
  providedIn: 'root'
})
export class RestaurantTableService {
  private apiUrl = 'http://localhost:3000/api/tables';

  constructor(private http: HttpClient) {}

  getAll(): Observable<RestaurantTable[]> {
    return this.http.get<RestaurantTable[]>(this.apiUrl);
  }

  getById(id: number): Observable<RestaurantTable> {
    return this.http.get<RestaurantTable>(`${this.apiUrl}/${id}`);
  }

  create(table: Partial<RestaurantTable>): Observable<RestaurantTable> {
    return this.http.post<RestaurantTable>(this.apiUrl, table);
  }

  update(id: number, table: Partial<RestaurantTable>): Observable<RestaurantTable> {
    return this.http.put<RestaurantTable>(`${this.apiUrl}/${id}`, table);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
