import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Review, ReviewRequest } from '../../shared/models/review.model';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {
  private http = inject(HttpClient);
  private apiUrl = `${environment.apiUrl}/api/products`;

  getReviewsByProductId(productId: number): Observable<Review[]> {
    return this.http.get<Review[]>(`${this.apiUrl}/${productId}/reviews`);
  }

  addReview(productId: number, review: ReviewRequest): Observable<Review> {
    return this.http.post<Review>(`${this.apiUrl}/${productId}/reviews`, review);
  }

  getMyReviews(): Observable<any[]> {
    return this.http.get<any[]>(`${environment.apiUrl}/api/users/me/reviews`);
  }

  deleteReview(reviewId: number): Observable<void> {
    return this.http.delete<void>(`${environment.apiUrl}/api/products/reviews/${reviewId}`);
  }
}
