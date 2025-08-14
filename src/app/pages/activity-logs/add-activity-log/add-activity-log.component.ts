import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MaterialModule } from '../../../material.module';
import { ActivityLogService } from '../../../services/activity-log.service';

@Component({
  selector: 'app-add-activity-log',
  standalone: true,
  imports: [MaterialModule, ReactiveFormsModule],
  templateUrl: './add-activity-log.component.html',
  styleUrl: './add-activity-log.component.scss'
})
export class AddActivityLogComponent implements OnInit {
  form: FormGroup;
  isEdit = false;
  logId: number | null = null;

  constructor(
    private fb: FormBuilder,
    private activityLogService: ActivityLogService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.form = this.fb.group({
      user_id: ['', Validators.required],
      action: ['', Validators.required],
      log_time: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if (params['id']) {
        this.isEdit = true;
        this.logId = +params['id'];
        this.activityLogService.getById(this.logId).subscribe(log => {
          this.form.patchValue(log);
        });
      }
    });
  }

  submit(): void {
    if (this.form.invalid) {
      return;
    }
    const data = this.form.value;

    if (this.isEdit && this.logId) {
      this.activityLogService.update(this.logId, data).subscribe(() => {
        alert('Log actualizado');
        this.router.navigate(['/activity-logs/table']);
      });
    } else {
      this.activityLogService.create(data).subscribe(() => {
        alert('Log creado');
        this.router.navigate(['/activity-logs/table']);
      });
    }
  }
}

