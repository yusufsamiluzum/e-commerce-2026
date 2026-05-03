import {
  Component, signal, inject, ViewChild, ElementRef,
  AfterViewChecked, PLATFORM_ID
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { ChatbotService } from '../../core/services/chatbot.service';
import { AuthService } from '../../core/services/auth.service';
import { ChatMessage } from '../../core/services/chatbot.model';

/**
 * Chatbot Page — Tam ekran AI asistan sayfası.
 * Standalone Component (AI_RULES uyumlu — NgModule yok).
 */
@Component({
  selector: 'app-chatbot-page',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './chatbot-page.html',
  styleUrl: './chatbot-page.scss'
})
export class ChatbotPage implements AfterViewChecked {
  @ViewChild('messagesContainer') private messagesContainer!: ElementRef;
  @ViewChild('chatInput') private chatInput!: ElementRef;

  private chatbotService = inject(ChatbotService);
  private authService = inject(AuthService);
  private sanitizer = inject(DomSanitizer);
  private platformId = inject(PLATFORM_ID);

  // State
  messages = signal<ChatMessage[]>([]);
  isLoading = signal(false);
  currentQuestion = '';
  inputFocused = false;

  // Kullanıcı adı
  userName = this.authService.currentUserName;

  // Öneri soruları — rol bazlı
  suggestions = this.getSuggestions();

  private shouldScroll = false;

  ngAfterViewChecked() {
    if (this.shouldScroll) {
      this.scrollToBottom();
      this.shouldScroll = false;
    }
  }

  /**
   * Mesaj gönder
   */
  sendMessage() {
    const question = this.currentQuestion.trim();
    if (!question || this.isLoading()) return;

    // Kullanıcı mesajını ekle
    const userMessage: ChatMessage = {
      role: 'user',
      content: question,
      timestamp: new Date()
    };

    // Loading mesajını ekle
    const loadingMessage: ChatMessage = {
      role: 'assistant',
      content: '',
      timestamp: new Date(),
      isLoading: true
    };

    this.messages.update(msgs => [...msgs, userMessage, loadingMessage]);
    this.currentQuestion = '';
    this.isLoading.set(true);
    this.shouldScroll = true;

    // API çağrısı
    this.chatbotService.askQuestion(question).subscribe({
      next: (response) => {
        // Loading mesajını kaldır ve gerçek yanıtı ekle
        this.messages.update(msgs => {
          const updated = msgs.filter(m => !m.isLoading);
          updated.push({
            role: 'assistant',
            content: response.textResponse,
            plotlyJson: response.plotlyJson,
            rawData: response.rawData,
            timestamp: new Date()
          });
          return updated;
        });
        this.isLoading.set(false);
        this.shouldScroll = true;

        // Plotly grafiğini render et (chart varsa)
        if (response.plotlyJson && isPlatformBrowser(this.platformId)) {
          this.renderChart(response.plotlyJson);
        }
      },
      error: () => {
        this.messages.update(msgs => {
          const updated = msgs.filter(m => !m.isLoading);
          updated.push({
            role: 'assistant',
            content: 'Üzgünüm, bir hata oluştu. Lütfen tekrar deneyin.',
            timestamp: new Date()
          });
          return updated;
        });
        this.isLoading.set(false);
        this.shouldScroll = true;
      }
    });
  }

  /**
   * Öneri chip'ine tıklayınca
   */
  sendSuggestion(suggestion: string) {
    this.currentQuestion = suggestion;
    this.sendMessage();
  }

  /**
   * DOMPurify ile XSS korumalı HTML sanitizasyonu.
   * LLM yanıtlarındaki user-generated content (review yorumları vb.) güvenli hale gelir.
   */
  sanitize(content: string): SafeHtml {
    // Basit markdown-like dönüşümler
    let html = content
      .replace(/\n/g, '<br>')
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/\*(.*?)\*/g, '<em>$1</em>')
      .replace(/•/g, '&#8226;');

    // Angular'ın built-in sanitizer'ı XSS'e karşı korur
    return this.sanitizer.bypassSecurityTrustHtml(html);
  }

  /**
   * Tablo header'larını raw data'dan çıkarır
   */
  getTableHeaders(data: any[]): string[] {
    if (!data || data.length === 0) return [];
    return Object.keys(data[0]);
  }

  /**
   * Zaman formatı
   */
  formatTime(date: Date): string {
    return new Date(date).toLocaleTimeString('tr-TR', {
      hour: '2-digit',
      minute: '2-digit'
    });
  }

  /**
   * Plotly grafiğini güvenli şekilde render eder.
   * eval() veya Function() KULLANILMAZ — sadece JSON config tüketilir.
   */
  private async renderChart(plotlyJson: string) {
    try {
      const config = JSON.parse(plotlyJson);
      // Plotly'yi dynamic import ile yükle (bundle size optimizasyonu)
      const Plotly = await import('plotly.js-dist-min');

      // Son mesajın chart container'ını bul
      setTimeout(() => {
        const chartElements = document.querySelectorAll('[id^="chart-"]');
        const lastChart = chartElements[chartElements.length - 1];
        if (lastChart) {
          Plotly.newPlot(
            lastChart as HTMLElement,
            config.data || [],
            {
              ...config.layout,
              paper_bgcolor: '#ffffff',
              plot_bgcolor: '#fafaf9',
              font: { color: '#1c1917' },
              margin: { t: 40, r: 20, b: 40, l: 50 }
            },
            { responsive: true, displayModeBar: false }
          );
        }
      }, 100);
    } catch (e) {
      console.error('Plotly render hatası:', e);
    }
  }

  /**
   * Rol bazlı öneri soruları
   */
  private getSuggestions(): string[] {
    const role = this.authService.currentUserRole();
    switch (role) {
      case 'ADMIN':
        return [
          'Son ayın toplam geliri ne kadar?',
          'Kategorilere göre satış dağılımı',
          'En çok satan 5 ürün hangileri?',
          'Kaç aktif mağaza var?'
        ];
      case 'CORPORATE':
        return [
          'Bugünkü siparişlerim kaç tane?',
          'En çok satan ürünüm hangisi?',
          'Bu ayın toplam geliri',
          'Bekleyen iadelerim var mı?'
        ];
      default:
        return [
          'Son siparişlerim neler?',
          'Toplam harcamam ne kadar?',
          'En son yazdığım yorumlar',
          'İade durumum nedir?'
        ];
    }
  }

  /**
   * Mesaj alanını en alta kaydır
   */
  private scrollToBottom() {
    try {
      if (this.messagesContainer) {
        const el = this.messagesContainer.nativeElement;
        el.scrollTop = el.scrollHeight;
      }
    } catch (_) {}
  }
}
