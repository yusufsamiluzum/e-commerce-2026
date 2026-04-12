import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Review, ReviewRequest } from '../../shared/models/review.model';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {
  private http = inject(HttpClient);
  private apiUrl = 'http://localhost:8080/api/products';

  getReviewsByProductId(productId: number): Observable<Review[]> {
    return this.http.get<Review[]>(`${this.apiUrl}/${productId}/reviews`);
  }

  addReview(productId: number, review: ReviewRequest): Observable<Review> {
    return this.http.post<Review>(`${this.apiUrl}/${productId}/reviews`, review);
  }
}