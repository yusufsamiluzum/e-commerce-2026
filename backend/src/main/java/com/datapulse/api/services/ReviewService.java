package com.datapulse.api.services;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import com.datapulse.api.dto.ReviewRequest;
import com.datapulse.api.dto.ReviewResponse;
import com.datapulse.api.entities.Product;
import com.datapulse.api.entities.Review;
import com.datapulse.api.entities.User;
import com.datapulse.api.repositories.ProductRepository;
import com.datapulse.api.repositories.ReviewRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class ReviewService {

    private final ReviewRepository reviewRepository;
    private final ProductRepository productRepository;

    @Transactional(readOnly = true)
    public List<ReviewResponse> getReviewsByProductId(Long productId) {
        return reviewRepository.findByProductIdOrderByCreatedAtDesc(productId).stream()
                .map(this::mapToResponse)
                .collect(Collectors.toList());
    }

    @Transactional
    public ReviewResponse addReview(Long productId, User user, ReviewRequest request) {
        Product product = productRepository.findById(productId)
            .orElseThrow(() -> new RuntimeException("Product not found with id: " + productId)); // Adjust exception type as needed

        Review review = Review.builder()
            .product(product)
            .user(user)
            .starRating(request.getStarRating())
            .reviewText(request.getReviewText())
            .build();

        Review savedReview = reviewRepository.save(review);
        updateProductRating(product);

        return mapToResponse(savedReview);
    }

    private void updateProductRating(Product product) {
        List<Review> productReviews = reviewRepository.findByProductIdOrderByCreatedAtDesc(product.getId());
        double averageRating = productReviews.stream()
                .mapToInt(Review::getStarRating)
                .average()
                .orElse(0.0);

        product.setAverageRating(Double.parseDouble(String.format("%.1f", averageRating).replace(",", ".")));
        product.setReviewCount(productReviews.size());
        productRepository.save(product);
    }

    private ReviewResponse mapToResponse(Review review) {
        return ReviewResponse.builder()
                .id(review.getId())
                .userName(review.getUser().getFullName())
                .starRating(review.getStarRating())
                .reviewText(review.getReviewText())
                .helpfulVotes(review.getHelpfulVotes())
                .createdAt(review.getCreatedAt())
                .build();
    }
}