package com.datapulse.api.dto;

import java.time.LocalDateTime;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class StoreReviewDto {
    private Long id;
    private String customerName;
    private String productName;
    private String productSku;
    private Integer starRating;
    private String sentiment;
    private String reviewText;
    private Integer helpfulVotes;
    private Integer totalVotes;
    private String ownerReply;
    private LocalDateTime replyDate;
    private LocalDateTime createdAt;
}
