package com.datapulse.api.controllers;

import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.datapulse.api.dto.ChatRequestDto;
import com.datapulse.api.dto.ChatResponseDto;
import com.datapulse.api.entities.User;
import com.datapulse.api.services.ChatService;

import lombok.RequiredArgsConstructor;

/**
 * Chat Controller — AI Chatbot endpoint'i.
 * Tüm roller (INDIVIDUAL, CORPORATE, ADMIN) erişebilir.
 * RBAC bilgileri JWT'den çıkarılır, istemciden gelen rol bilgisine güvenilmez.
 */
@RestController
@RequestMapping("/api/chat")
@RequiredArgsConstructor
public class ChatController {

    private final ChatService chatService;

    /**
     * POST /api/chat/ask
     * Kullanıcının doğal dil sorusunu AI chatbot'a iletir.
     */
    @PostMapping("/ask")
    @PreAuthorize("hasAnyRole('INDIVIDUAL', 'CORPORATE', 'ADMIN')")
    public ResponseEntity<ChatResponseDto> askQuestion(
            Authentication authentication,
            @RequestBody ChatRequestDto request) {

        User currentUser = (User) authentication.getPrincipal();
        ChatResponseDto response = chatService.askQuestion(request.getQuestion(), currentUser);
        return ResponseEntity.ok(response);
    }
}
