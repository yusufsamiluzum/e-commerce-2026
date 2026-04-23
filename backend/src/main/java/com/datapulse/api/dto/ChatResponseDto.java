package com.datapulse.api.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * Chatbot yanıt DTO'su.
 * Python chatbot servisinden dönen sonucu frontend'e iletir.
 */
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class ChatResponseDto {

    // Analysis Agent tarafından üretilen doğal dil yanıtı
    private String textResponse;

    // Plotly JSON config (nullable — grafik gerekmiyorsa null)
    private String plotlyJson;

    // Ham sorgu sonuçları (nullable — tablo gösterimi için)
    private Object rawData;

    // Çalıştırılan SQL (opsiyonel — transparency/debug)
    private String sqlQuery;
}
