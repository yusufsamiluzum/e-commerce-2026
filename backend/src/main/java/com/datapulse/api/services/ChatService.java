package com.datapulse.api.services;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.client.RestClientException;
import org.springframework.web.client.RestTemplate;

import com.datapulse.api.dto.ChatResponseDto;
import com.datapulse.api.entities.Store;
import com.datapulse.api.entities.User;
import com.datapulse.api.exceptions.ResourceNotFoundException;
import com.datapulse.api.repositories.StoreRepository;
import com.datapulse.api.repositories.SystemConfigRepository;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

/**
 * Chat Service — Python chatbot servisine proxy çağrısı yapar.
 * JWT'den çıkarılan RBAC bilgilerini Python servisine güvenli şekilde iletir.
 * Admin panelinden ayarlanan LLM provider bilgisini SystemConfig'den okur.
 */
@Service
@RequiredArgsConstructor
@Slf4j
public class ChatService {

    private final StoreRepository storeRepository;
    private final SystemConfigRepository systemConfigRepository;
    private final RestTemplate restTemplate;

    @Value("${chatbot.service.url:http://localhost:8000}")
    private String chatbotServiceUrl;

    // SystemConfig key'leri
    private static final String CONFIG_LLM_PROVIDER = "chatbot_llm_provider";
    private static final String CONFIG_LLM_MODEL = "chatbot_llm_model";

    // Varsayılan değerler
    private static final String DEFAULT_LLM_PROVIDER = "openai";
    private static final String DEFAULT_LLM_MODEL = "gpt-4o-mini";

    /**
     * Kullanıcının sorusunu Python chatbot servisine iletir.
     * RBAC bilgilerini JWT'den çıkararak güvenli şekilde ekler.
     */
    @Transactional(readOnly = true)
    public ChatResponseDto askQuestion(String question, User currentUser) {
        log.info("Chat isteği: userId={}, role={}, question={}",
                currentUser.getId(), currentUser.getRoleType(), question);

        // RBAC context'i oluştur
        String userId = currentUser.getId().toString();
        String userRole = currentUser.getRoleType().name();
        String storeId = null;

        // Corporate kullanıcı için store_id çözümle
        if ("CORPORATE".equals(userRole)) {
            List<Store> stores = storeRepository.findByOwnerId(currentUser.getId());
            if (stores.isEmpty()) {
                throw new ResourceNotFoundException("Bu kullanıcıya ait mağaza bulunamadı.");
            }
            storeId = stores.get(0).getId().toString();
        }

        // Admin panelinden LLM ayarlarını oku
        String llmProvider = systemConfigRepository.findByConfigKey(CONFIG_LLM_PROVIDER)
                .map(config -> config.getConfigValue())
                .orElse(DEFAULT_LLM_PROVIDER);

        String llmModel = systemConfigRepository.findByConfigKey(CONFIG_LLM_MODEL)
                .map(config -> config.getConfigValue())
                .orElse(DEFAULT_LLM_MODEL);

        // Python servisine gönderilecek payload
        Map<String, Object> payload = new HashMap<>();
        payload.put("question", question);
        payload.put("user_role", userRole);
        payload.put("user_id", userId);
        payload.put("store_id", storeId);
        payload.put("llm_provider", llmProvider);
        payload.put("llm_model", llmModel);

        // HTTP isteği oluştur
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);
        HttpEntity<Map<String, Object>> request = new HttpEntity<>(payload, headers);

        try {
            @SuppressWarnings("unchecked")
            Map<String, Object> response = restTemplate.postForObject(
                    chatbotServiceUrl + "/chat",
                    request,
                    Map.class
            );

            if (response == null) {
                return ChatResponseDto.builder()
                        .textResponse("Chatbot servisinden yanıt alınamadı.")
                        .build();
            }

            return ChatResponseDto.builder()
                    .textResponse((String) response.get("text_response"))
                    .plotlyJson((String) response.get("plotly_json"))
                    .rawData(response.get("raw_data"))
                    .sqlQuery((String) response.get("sql_query"))
                    .build();

        } catch (RestClientException e) {
            log.error("Chatbot servisi ile iletişim hatası: {}", e.getMessage());
            return ChatResponseDto.builder()
                    .textResponse("AI asistan şu anda yanıt veremiyor. Lütfen daha sonra tekrar deneyin.")
                    .build();
        }
    }
}
