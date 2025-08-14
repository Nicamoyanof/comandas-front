import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Printer } from '../models/Printer.model';

@Injectable({
  providedIn: 'root'
})
export class PrinterService {
  private apiUrl = 'http://localhost:3000/api/printers';

  constructor(private http: HttpClient) {}

  getAll(): Observable<Printer[]> {
    return this.http.get<Printer[]>(this.apiUrl);
  }

  getById(id: number): Observable<Printer> {
    return this.http.get<Printer>(`${this.apiUrl}/${id}`);
  }

  create(printer: Partial<Printer>): Observable<Printer> {
    return this.http.post<Printer>(this.apiUrl, printer);
  }

  update(id: number, printer: Partial<Printer>): Observable<Printer> {
    return this.http.put<Printer>(`${this.apiUrl}/${id}`, printer);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
