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
      case 'ADMIN': return 'bg-red-50 text-red-600 border-red-200';
      case 'CORPORATE': return 'bg-violet-50 text-violet-600 border-violet-200';
      case 'INDIVIDUAL': return 'bg-orange-50 text-orange-600 border-orange-200';
      default: return 'bg-stone-50 text-stone-500 border-stone-200';
    }
  }

  getStatusBadgeClass(status: string): string {
    switch (status) {
      case 'ACTIVE': return 'bg-lime-50 text-lime-700 border-lime-200';
      case 'SUSPENDED': return 'bg-amber-50 text-amber-700 border-amber-200';
      case 'DELETED': return 'bg-red-50 text-red-600 border-red-200';
      default: return 'bg-stone-50 text-stone-500 border-stone-200';
    }
  }

  exportCsv() {
    this.adminService.exportCsv('users');
  }
}
