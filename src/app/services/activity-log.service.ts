import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivityLog } from '../models/ActivityLog.model';

@Injectable({
  providedIn: 'root'
})
export class ActivityLogService {
  private apiUrl = 'http://localhost:3000/api/activity-logs';

  constructor(private http: HttpClient) {}

  getAll(): Observable<ActivityLog[]> {
    return this.http.get<ActivityLog[]>(this.apiUrl);
  }

  getById(id: number): Observable<ActivityLog> {
    return this.http.get<ActivityLog>(`${this.apiUrl}/${id}`);
  }

  create(log: Partial<ActivityLog>): Observable<ActivityLog> {
    return this.http.post<ActivityLog>(this.apiUrl, log);
  }

  update(id: number, log: Partial<ActivityLog>): Observable<ActivityLog> {
    return this.http.put<ActivityLog>(`${this.apiUrl}/${id}`, log);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
