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
public class ReviewResponse {
    private Long id;
    private String userName;
    private Integer starRating;
    private String reviewText;
    private Integer helpfulVotes;
    private LocalDateTime createdAt;
}