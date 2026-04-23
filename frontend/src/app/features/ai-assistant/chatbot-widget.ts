import { Component, signal, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';

/**
 * Chatbot Widget — Sağ alt köşede floating bubble.
 * Tıklandığında /ai-assistant route'una yönlendirir.
 * Sadece giriş yapmış kullanıcılara gösterilir.
 */
@Component({
  selector: 'app-chatbot-widget',
  standalone: true,
  template: `
    @if (isLoggedIn()) {
      <button
        class="chatbot-fab"
        (click)="openChatbot()"
        title="AI Asistan"
        id="chatbot-widget-btn"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="fab-icon">
          <path d="M12 2a2 2 0 012 2c0 .74-.4 1.39-1 1.73V7h1a7 7 0 017 7h1a1 1 0 110 2h-1.07A7.001 7.001 0 0113 22h-2a7.001 7.001 0 01-6.93-6H3a1 1 0 110-2h1a7 7 0 017-7h1V5.73A2.002 2.002 0 0112 2zm-1 9a5 5 0 00-5 5 5 5 0 005 5h2a5 5 0 005-5 5 5 0 00-5-5h-2zm-1 3a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm4 0a1.5 1.5 0 110 3 1.5 1.5 0 010-3z"/>
        </svg>
        <span class="fab-pulse"></span>
      </button>
    }
  `,
  styles: [`
    .chatbot-fab {
      position: fixed;
      bottom: 24px;
      right: 24px;
      width: 56px;
      height: 56px;
      border-radius: 16px;
      border: none;
      background: linear-gradient(135deg, #7c3aed, #3b82f6);
      color: white;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: 0 8px 32px rgba(124, 58, 237, 0.4);
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      z-index: 1000;

      &:hover {
        transform: scale(1.1) translateY(-2px);
        box-shadow: 0 12px 40px rgba(124, 58, 237, 0.5);
      }

      &:active {
        transform: scale(0.95);
      }
    }

    .fab-icon {
      width: 26px;
      height: 26px;
      z-index: 1;
    }

    .fab-pulse {
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: 16px;
      background: linear-gradient(135deg, #7c3aed, #3b82f6);
      animation: fabPulse 2s ease-in-out infinite;
      z-index: 0;
    }

    @keyframes fabPulse {
      0% { transform: scale(1); opacity: 0.4; }
      50% { transform: scale(1.15); opacity: 0; }
      100% { transform: scale(1); opacity: 0; }
    }

    @media (max-width: 768px) {
      .chatbot-fab {
        bottom: 16px;
        right: 16px;
        width: 50px;
        height: 50px;
      }
    }
  `]
})
export class ChatbotWidget {
  private authService = inject(AuthService);
  private router = inject(Router);

  isLoggedIn = signal(false);

  constructor() {
    // GUEST olmayan kullanıcılar için widget göster
    const role = this.authService.currentUserRole();
    this.isLoggedIn.set(role !== 'GUEST');
  }

  openChatbot() {
    this.router.navigate(['/ai-assistant']);
  }
}
