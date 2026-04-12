import { Component, Input, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { BehaviorSubject, Observable } from 'rxjs';
import { ReviewService } from '../../../../core/services/review.service';
import { AuthService } from '../../../../core/services/auth.service';
import { Review, ReviewRequest } from '../../../../shared/models/review.model';

@Component({
  selector: 'app-product-reviews',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './product-reviews.component.html'
})
export class ProductReviewsComponent implements OnInit {
  @Input({ required: true }) productId!: number;

  private reviewService = inject(ReviewService);
  private authService = inject(AuthService);
  private fb = inject(FormBuilder);

  private reviewsSubject = new BehaviorSubject<Review[]>([]);
  reviews$ = this.reviewsSubject.asObservable();
  
  reviewForm: FormGroup;
  isSubmitting = false;

  get isAuthenticated(): boolean {
    return this.authService.currentUserRole() !== 'GUEST';
  }

  constructor() {
    this.reviewForm = this.fb.group({
      starRating: [5, [Validators.required, Validators.min(1), Validators.max(5)]],
      reviewText: ['', [Validators.required, Validators.minLength(3)]]
    });
  }

  ngOnInit(): void {
    this.loadReviews();
  }

  loadReviews(): void {
    this.reviewService.getReviewsByProductId(this.productId).subscribe({
      next: (reviews) => this.reviewsSubject.next(reviews),
      error: (err) => console.error('Failed to load reviews', err)
    });
  }

  setRating(rating: number): void {
    this.reviewForm.patchValue({ starRating: rating });
  }

  onSubmit(): void {
    if (this.reviewForm.invalid || !this.isAuthenticated) return;

    this.isSubmitting = true;
    this.reviewService.addReview(this.productId, this.reviewForm.value).subscribe({
      next: (newReview) => {
        const currentReviews = this.reviewsSubject.value;
        this.reviewsSubject.next([newReview, ...currentReviews]);
        this.reviewForm.reset({ starRating: 5, reviewText: '' });
        this.isSubmitting = false;
      },
      error: (err) => {
        console.error('Failed to add review', err);
        this.isSubmitting = false;
      }
    });
  }
}
