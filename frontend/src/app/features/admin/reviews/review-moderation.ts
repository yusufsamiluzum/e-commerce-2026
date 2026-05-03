import { Component, inject, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminService, AdminReview, PageResponse } from '../services/admin.service';
import { Subject, switchMap, startWith, catchError, of, tap } from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-review-moderation',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './review-moderation.html'
})
export class ReviewModeration {
  private admin = inject(AdminService);

  currentPage = signal(0);
  selectedSentiment = signal<string | undefined>(undefined);
  confirmDeleteId = signal<number | null>(null);

  private refresh$ = new Subject<void>();

  reviewData = toSignal(
    this.refresh$.pipe(
      startWith(undefined),
      switchMap(() => this.admin.getAllReviews(this.currentPage(), 20, this.selectedSentiment())),
      catchError(() => of({ content: [], totalElements: 0, totalPages: 0, number: 0, size: 20, first: true, last: true } as PageResponse<AdminReview>))
    ),
    { initialValue: null }
  );

  reviews = computed(() => this.reviewData()?.content ?? []);
  totalPages = computed(() => this.reviewData()?.totalPages ?? 0);

  sentimentFilters = ['ALL', 'POSITIVE', 'NEUTRAL', 'NEGATIVE'];

  sentimentColor(sentiment: string | null): string {
    switch (sentiment?.toUpperCase()) {
      case 'POSITIVE': return 'text-lime-700 bg-lime-50';
      case 'NEGATIVE': return 'text-red-600 bg-red-50';
      case 'NEUTRAL': return 'text-amber-700 bg-amber-50';
      default: return 'text-stone-500 bg-stone-100';
    }
  }

  filterBySentiment(sentiment: string) {
    this.selectedSentiment.set(sentiment === 'ALL' ? undefined : sentiment);
    this.currentPage.set(0);
    this.refresh$.next();
  }

  goToPage(page: number) {
    this.currentPage.set(page);
    this.refresh$.next();
  }

  confirmDelete(reviewId: number) {
    this.confirmDeleteId.set(reviewId);
  }

  cancelDelete() {
    this.confirmDeleteId.set(null);
  }

  deleteReview(reviewId: number) {
    this.admin.deleteReview(reviewId).subscribe(() => {
      this.confirmDeleteId.set(null);
      this.refresh$.next();
    });
  }

  starsArray(rating: number): number[] {
    return Array.from({ length: 5 }, (_, i) => i < rating ? 1 : 0);
  }
}
