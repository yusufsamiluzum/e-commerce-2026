package com.datapulse.api.dto;

import java.time.LocalDateTime;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data @NoArgsConstructor @AllArgsConstructor @Builder
public class AdminReviewDto {
    private Long id;
    private String userName;
    private String userEmail;
    private String productName;
    private String storeName;
    private Integer starRating;
    private String sentiment;
    private String reviewText;
    private Integer helpfulVotes;
    private Integer totalVotes;
    private LocalDateTime createdAt;
}
