import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ChatRequest, ChatResponse } from './chatbot.model';

/**
 * Chatbot Service — Backend /api/chat/ask endpoint'ini tüketir.
 * RBAC bilgileri backend'de JWT'den çıkarılır, frontend'den gönderilmez.
 */
@Injectable({
  providedIn: 'root'
})
export class ChatbotService {
  private http = inject(HttpClient);
  private apiUrl = 'http://localhost:8080/api/chat';

  /**
   * Kullanıcının sorusunu chatbot'a iletir.
   * Backend JWT cookie üzerinden kullanıcıyı tanır ve RBAC context'i ekler.
   */
  askQuestion(question: string): Observable<ChatResponse> {
    const request: ChatRequest = { question };
    return this.http.post<ChatResponse>(`${this.apiUrl}/ask`, request);
  }
}
