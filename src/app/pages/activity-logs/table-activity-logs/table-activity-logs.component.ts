import { Component } from '@angular/core';
import { ActivityLog } from '../../../models/ActivityLog.model';
import { ActivityLogService } from '../../../services/activity-log.service';
import { MaterialModule } from '../../../material.module';
import { DynamicFilterComponent } from '../../../shared/dynamic-filter/dynamic-filter.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-table-activity-logs',
  standalone: true,
  imports: [MaterialModule, DynamicFilterComponent, RouterModule],
  templateUrl: './table-activity-logs.component.html',
  styleUrl: './table-activity-logs.component.scss'
})
export class TableActivityLogsComponent {
  displayedColumns: string[] = ['log_id', 'user_id', 'action', 'log_time', 'actions'];
  logs: ActivityLog[] = [];
  isLoading = true;

  constructor(private activityLogService: ActivityLogService) {}

  ngOnInit(): void {
    this.loadLogs();
  }

  loadLogs(): void {
    this.activityLogService.getAll().subscribe({
      next: data => {
        this.logs = data;
        this.isLoading = false;
      },
      error: err => {
        console.error('Error fetching logs', err);
        this.isLoading = false;
      }
    });
  }

  delete(id: number): void {
    if (confirm('¿Eliminar log?')) {
      this.activityLogService.delete(id).subscribe(() => {
        this.logs = this.logs.filter(l => l.log_id !== id);
      });
    }
  }
}
