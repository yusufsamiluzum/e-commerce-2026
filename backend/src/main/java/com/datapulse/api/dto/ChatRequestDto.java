package com.datapulse.api.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * Chatbot soru isteği DTO'su.
 * Frontend'den gelen kullanıcı sorusunu taşır.
 */
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class ChatRequestDto {

    private String question;
}
