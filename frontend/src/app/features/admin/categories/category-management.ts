import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { toSignal } from '@angular/core/rxjs-interop';
import { catchError, of, Subject, switchMap, startWith } from 'rxjs';
import { AdminService, AdminCategory } from '../services/admin.service';

@Component({
  selector: 'app-category-management',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './category-management.html'
})
export class CategoryManagement {
  private adminService = inject(AdminService);

  newCategoryName = signal('');
  newCategoryParentId = signal<number | undefined>(undefined);
  editingId = signal<number | null>(null);
  editingName = signal('');
  actionInProgress = signal(false);

  private refresh$ = new Subject<void>();

  categories = toSignal(
    this.refresh$.pipe(
      startWith(undefined),
      switchMap(() => this.adminService.getAllCategories().pipe(catchError(() => of(null))))
    ),
    { initialValue: null }
  );

  createCategory() {
    const name = this.newCategoryName().trim();
    if (!name) return;
    this.actionInProgress.set(true);
    this.adminService.createCategory(name, this.newCategoryParentId()).subscribe({
      next: () => {
        this.newCategoryName.set('');
        this.newCategoryParentId.set(undefined);
        this.actionInProgress.set(false);
        this.refresh$.next();
      },
      error: () => this.actionInProgress.set(false)
    });
  }

  startEdit(category: AdminCategory) {
    this.editingId.set(category.id);
    this.editingName.set(category.name);
  }

  saveEdit(categoryId: number) {
    const name = this.editingName().trim();
    if (!name) return;
    this.actionInProgress.set(true);
    this.adminService.updateCategory(categoryId, name).subscribe({
      next: () => {
        this.editingId.set(null);
        this.actionInProgress.set(false);
        this.refresh$.next();
      },
      error: () => this.actionInProgress.set(false)
    });
  }

  cancelEdit() {
    this.editingId.set(null);
  }

  deleteCategory(categoryId: number) {
    this.actionInProgress.set(true);
    this.adminService.deleteCategory(categoryId).subscribe({
      next: () => {
        this.actionInProgress.set(false);
        this.refresh$.next();
      },
      error: () => this.actionInProgress.set(false)
    });
  }
}
