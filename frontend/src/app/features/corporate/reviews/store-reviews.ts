import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CorporateService, StoreReview } from '../services/corporate.service';

@Component({
  selector: 'app-store-reviews',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './store-reviews.html'
})
export class StoreReviews {
  private corporateService = inject(CorporateService);

  reviews = signal<StoreReview[]>([]);
  isLoading = signal(true);
  searchTerm = signal('');
  filterRating = signal<number | null>(null);

  // Reply system
  replyingTo = signal<number | null>(null);
  replyText = signal('');
  isSendingReply = signal(false);

  sentimentLabels: Record<string, string> = {
    'positive': 'Olumlu',
    'neutral': 'Nötr',
    'negative': 'Olumsuz',
    'POSITIVE': 'Olumlu',
    'NEUTRAL': 'Nötr',
    'NEGATIVE': 'Olumsuz'
  };

  sentimentColors: Record<string, string> = {
    'positive': 'text-emerald-400 bg-emerald-500/10',
    'neutral': 'text-gray-400 bg-gray-500/10',
    'negative': 'text-red-400 bg-red-500/10',
    'POSITIVE': 'text-emerald-400 bg-emerald-500/10',
    'NEUTRAL': 'text-gray-400 bg-gray-500/10',
    'NEGATIVE': 'text-red-400 bg-red-500/10'
  };

  constructor() {
    this.loadReviews();
  }

  loadReviews() {
    this.isLoading.set(true);
    this.corporateService.getStoreReviews().subscribe({
      next: (reviews) => {
        this.reviews.set(reviews);
        this.isLoading.set(false);
      },
      error: () => this.isLoading.set(false)
    });
  }

  get filteredReviews(): StoreReview[] {
    let list = this.reviews();
    const term = this.searchTerm().toLowerCase();
    if (term) {
      list = list.filter(r =>
        r.productName.toLowerCase().includes(term) ||
        r.customerName.toLowerCase().includes(term) ||
        (r.reviewText && r.reviewText.toLowerCase().includes(term))
      );
    }
    const rating = this.filterRating();
    if (rating !== null) {
      list = list.filter(r => r.starRating === rating);
    }
    return list;
  }

  get avgRating(): number {
    const all = this.reviews();
    if (!all.length) return 0;
    return all.reduce((sum, r) => sum + r.starRating, 0) / all.length;
  }

  get ratingDistribution(): { rating: number; count: number }[] {
    const all = this.reviews();
    return [5, 4, 3, 2, 1].map(rating => ({
      rating,
      count: all.filter(r => r.starRating === rating).length
    }));
  }

  get repliedCount(): number {
    return this.reviews().filter(r => r.ownerReply).length;
  }

  getStars(rating: number): string {
    return '★'.repeat(rating) + '☆'.repeat(5 - rating);
  }

  // ─── Reply Methods ─────────────────────────────────

  openReplyForm(reviewId: number) {
    this.replyingTo.set(reviewId);
    this.replyText.set('');
  }

  cancelReply() {
    this.replyingTo.set(null);
    this.replyText.set('');
  }

  submitReply(reviewId: number) {
    const text = this.replyText().trim();
    if (!text) return;

    this.isSendingReply.set(true);
    this.corporateService.replyToReview(reviewId, text).subscribe({
      next: (updated) => {
        // Listedeki review'u güncelle
        const current = this.reviews();
        this.reviews.set(current.map(r => r.id === updated.id ? updated : r));
        this.replyingTo.set(null);
        this.replyText.set('');
        this.isSendingReply.set(false);
      },
      error: () => this.isSendingReply.set(false)
    });
  }

  startEditReply(review: StoreReview) {
    this.replyingTo.set(review.id);
    this.replyText.set(review.ownerReply || '');
  }

  deleteReply(reviewId: number) {
    this.corporateService.deleteReply(reviewId).subscribe({
      next: (updated) => {
        const current = this.reviews();
        this.reviews.set(current.map(r => r.id === updated.id ? updated : r));
      }
    });
  }
}
