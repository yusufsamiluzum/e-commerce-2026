package com.datapulse.api.dto;

import java.time.LocalDateTime;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class MyReviewResponse {
    private Long id;
    private Long productId;
    private String productName;
    private String productImageUrl;
    private Integer starRating;
    private String reviewText;
    private Integer helpfulVotes;
    private LocalDateTime createdAt;
}
