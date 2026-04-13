import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReviewService } from '../../../../core/services/review.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { BehaviorSubject, of } from 'rxjs';
import { switchMap, catchError, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-my-reviews',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './my-reviews.html'
})
export class MyReviews {
  private reviewService = inject(ReviewService);

  // Silme sonrası listeyi yeniden tetiklemek için
  private refresh$ = new BehaviorSubject<void>(undefined);

  // toSignal → null: yükleniyor | []: boş | [...]: dolu
  reviews = toSignal(
    this.refresh$.pipe(
      switchMap(() =>
        this.reviewService.getMyReviews().pipe(
          shareReplay(1),
          catchError(() => {
            this.apiError.set('Yorumlar yüklenirken bir hata oluştu. Lütfen sayfayı yenileyin.');
            return of([] as any[]);
          })
        )
      )
    ),
    { initialValue: null }
  );

  // Durum sinyalleri
  deletingId    = signal<number | null>(null);
  deleteError   = signal<string>('');
  confirmDeleteId = signal<number | null>(null);
  apiError      = signal<string>('');

  getStarsArray(rating: number): number[] {
    return Array(Math.max(0, Math.min(5, rating))).fill(0);
  }

  getEmptyStarsArray(rating: number): number[] {
    return Array(5 - Math.max(0, Math.min(5, rating))).fill(0);
  }

  askDelete(reviewId: number): void {
    this.confirmDeleteId.set(reviewId);
    this.deleteError.set('');
  }

  cancelDelete(): void {
    this.confirmDeleteId.set(null);
  }

  confirmDelete(reviewId: number): void {
    this.deletingId.set(reviewId);
    this.confirmDeleteId.set(null);

    this.reviewService.deleteReview(reviewId).subscribe({
      next: () => {
        this.deletingId.set(null);
        this.refresh$.next(); // Listeyi yenile
      },
      error: () => {
        this.deletingId.set(null);
        this.deleteError.set('Yorum silinirken bir hata oluştu. Lütfen tekrar deneyin.');
        setTimeout(() => this.deleteError.set(''), 4000);
      }
    });
  }
}
