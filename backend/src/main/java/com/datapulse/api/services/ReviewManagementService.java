package com.datapulse.api.services;

import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.datapulse.api.dto.StoreReviewDto;
import com.datapulse.api.entities.Review;
import com.datapulse.api.entities.Store;
import com.datapulse.api.repositories.ReviewRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class ReviewManagementService {

    private final ReviewRepository reviewRepository;
    private final StoreService storeService;

    @Transactional(readOnly = true)
    public List<StoreReviewDto> getStoreReviews(String ownerEmail) {
        Store store = storeService.getStoreEntityByOwnerEmail(ownerEmail);
        List<Review> reviews = reviewRepository.findByProduct_Store_IdOrderByCreatedAtDesc(store.getId());
        return reviews.stream().map(this::mapToDto).collect(Collectors.toList());
    }

    @Transactional
    public StoreReviewDto replyToReview(String ownerEmail, Long reviewId, String replyText) {
        Store store = storeService.getStoreEntityByOwnerEmail(ownerEmail);
        Review review = reviewRepository.findById(reviewId)
                .orElseThrow(() -> new RuntimeException("Review not found"));

        // Güvenlik: Sadece kendi mağazasındaki ürüne gelen yoruma yanıt verebilir
        if (!review.getProduct().getStore().getId().equals(store.getId())) {
            throw new RuntimeException("Bu yoruma yanıt verme yetkiniz yok");
        }

        review.setOwnerReply(replyText);
        review.setReplyDate(LocalDateTime.now());
        reviewRepository.save(review);

        return mapToDto(review);
    }

    @Transactional
    public StoreReviewDto deleteReply(String ownerEmail, Long reviewId) {
        Store store = storeService.getStoreEntityByOwnerEmail(ownerEmail);
        Review review = reviewRepository.findById(reviewId)
                .orElseThrow(() -> new RuntimeException("Review not found"));

        if (!review.getProduct().getStore().getId().equals(store.getId())) {
            throw new RuntimeException("Bu yanıtı silme yetkiniz yok");
        }

        review.setOwnerReply(null);
        review.setReplyDate(null);
        reviewRepository.save(review);

        return mapToDto(review);
    }

    private StoreReviewDto mapToDto(Review r) {
        return StoreReviewDto.builder()
                .id(r.getId())
                .customerName(r.getUser() != null ? r.getUser().getFullName() : "—")
                .productName(r.getProduct() != null ? r.getProduct().getName() : "—")
                .productSku(r.getProduct() != null ? r.getProduct().getSku() : "—")
                .starRating(r.getStarRating())
                .sentiment(r.getSentiment())
                .reviewText(r.getReviewText())
                .helpfulVotes(r.getHelpfulVotes())
                .totalVotes(r.getTotalVotes())
                .ownerReply(r.getOwnerReply())
                .replyDate(r.getReplyDate())
                .createdAt(r.getCreatedAt())
                .build();
    }
}
