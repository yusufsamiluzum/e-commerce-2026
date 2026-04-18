import { Component, inject, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { toSignal } from '@angular/core/rxjs-interop';
import { catchError, of, Subject, switchMap, startWith } from 'rxjs';
import { AdminService, AdminUser, PageResponse } from '../services/admin.service';

@Component({
  selector: 'app-user-management',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './user-management.html'
})
export class UserManagement {
  private adminService = inject(AdminService);

  currentPage = signal(0);
  searchQuery = signal('');
  roleFilter = signal('ALL');
  statusFilter = signal('ALL');
  actionInProgress = signal<number | null>(null);

  private refresh$ = new Subject<void>();

  usersPage = toSignal(
    this.refresh$.pipe(
      startWith(undefined),
      switchMap(() => this.adminService.getAllUsers(this.currentPage(), 50).pipe(catchError(() => of(null))))
    ),
    { initialValue: null }
  );

  filteredUsers = computed(() => {
    const page = this.usersPage();
    if (page === null) return null;
    let users = page.content;

    const q = this.searchQuery().toLowerCase();
    if (q) {
      users = users.filter(u =>
        u.fullName.toLowerCase().includes(q) || u.email.toLowerCase().includes(q)
      );
    }

    const role = this.roleFilter();
    if (role !== 'ALL') {
      users = users.filter(u => u.roleType === role);
    }

    const status = this.statusFilter();
    if (status !== 'ALL') {
      users = users.filter(u => u.status === status);
    }

    return users;
  });

  toggleUserStatus(user: AdminUser) {
    const newStatus = user.status === 'ACTIVE' ? 'SUSPENDED' : 'ACTIVE';
    this.actionInProgress.set(user.id);
    this.adminService.updateUserStatus(user.id, newStatus).subscribe({
      next: () => {
        this.actionInProgress.set(null);
        this.refresh$.next();
      },
      error: () => this.actionInProgress.set(null)
    });
  }

  onSearch(event: Event) {
    this.searchQuery.set((event.target as HTMLInputElement).value);
  }

  onRoleFilter(role: string) {
    this.roleFilter.set(role);
  }

  onStatusFilter(status: string) {
    this.statusFilter.set(status);
  }

  goToPage(page: number) {
    this.currentPage.set(page);
    this.refresh$.next();
  }

  getRoleBadgeClass(role: string): string {
    switch (role) {
      case 'ADMIN': return 'bg-red-500/10 text-red-400 border-red-500/20';
      case 'CORPORATE': return 'bg-violet-500/10 text-violet-400 border-violet-500/20';
      case 'INDIVIDUAL': return 'bg-blue-500/10 text-blue-400 border-blue-500/20';
      default: return 'bg-gray-500/10 text-gray-400 border-gray-500/20';
    }
  }

  getStatusBadgeClass(status: string): string {
    switch (status) {
      case 'ACTIVE': return 'bg-green-500/10 text-green-400 border-green-500/20';
      case 'SUSPENDED': return 'bg-orange-500/10 text-orange-400 border-orange-500/20';
      case 'DELETED': return 'bg-red-500/10 text-red-400 border-red-500/20';
      default: return 'bg-gray-500/10 text-gray-400 border-gray-500/20';
    }
  }

  exportCsv() {
    this.adminService.exportCsv('users');
  }
}
