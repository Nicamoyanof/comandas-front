import { Component } from '@angular/core';
import { User } from '../../../models/User.model';
import { UserService } from '../../../services/user.service';
import { MaterialModule } from '../../../material.module';
import { DynamicFilterComponent } from '../../../shared/dynamic-filter/dynamic-filter.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-table-users',
  standalone: true,
  imports: [MaterialModule, DynamicFilterComponent, RouterModule],
  templateUrl: './table-users.component.html',
  styleUrl: './table-users.component.scss'
})
export class TableUsersComponent {
  displayedColumns: string[] = ['userId', 'fullName', 'username', 'roleId', 'active', 'actions'];
  users: User[] = [];
  isLoading = true;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers(): void {
    this.userService.getAll().subscribe({
      next: data => {
        this.users = data;
        this.isLoading = false;
      },
      error: err => {
        console.error('Error fetching users', err);
        this.isLoading = false;
      }
    });
  }

  delete(id: number): void {
    if (confirm('¿Eliminar usuario?')) {
      this.userService.delete(id).subscribe(() => {
        this.users = this.users.filter(u => u.userId !== id);
      });
    }
  }
}
