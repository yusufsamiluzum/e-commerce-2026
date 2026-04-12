export interface Review {
  id: number;
  userName: string;
  starRating: number;
  reviewText: string;
  helpfulVotes: number;
  createdAt: string;
}

export interface ReviewRequest {
  starRating: number;
  reviewText: string;
}