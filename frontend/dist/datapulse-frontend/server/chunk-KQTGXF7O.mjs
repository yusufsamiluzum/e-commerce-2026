import './polyfills.server.mjs';
import {
  AuthService
} from "./chunk-3Y3G2XM7.mjs";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-ZZHQPMHV.mjs";
import {
  DomSanitizer
} from "./chunk-P2EBPDNO.mjs";
import {
  Component,
  HttpClient,
  Injectable,
  PLATFORM_ID,
  ViewChild,
  inject,
  isPlatformBrowser,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵqueryRefresh,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeHtml,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuery
} from "./chunk-K2NYDLGG.mjs";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-T2KOBY73.mjs";

// src/app/core/services/chatbot.service.ts
var ChatbotService = class _ChatbotService {
  http = inject(HttpClient);
  apiUrl = "http://localhost:8080/api/chat";
  /**
   * Kullanıcının sorusunu chatbot'a iletir.
   * Backend JWT cookie üzerinden kullanıcıyı tanır ve RBAC context'i ekler.
   */
  askQuestion(question) {
    const request = { question };
    return this.http.post(`${this.apiUrl}/ask`, request);
  }
  static \u0275fac = function ChatbotService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ChatbotService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ChatbotService, factory: _ChatbotService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ChatbotService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// src/app/features/ai-assistant/chatbot-page.ts
var _c0 = ["messagesContainer"];
var _c1 = ["chatInput"];
function ChatbotPage_Conditional_16_For_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 28);
    \u0275\u0275listener("click", function ChatbotPage_Conditional_16_For_10_Template_button_click_0_listener() {
      const suggestion_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.sendSuggestion(suggestion_r3));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const suggestion_r3 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", suggestion_r3, " ");
  }
}
function ChatbotPage_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13)(1, "div", 22);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 23);
    \u0275\u0275element(3, "path", 7);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(4, "h2", 24);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 25);
    \u0275\u0275text(7, "E-ticaret verileriniz hakk\u0131nda do\u011Fal dilde sorular sorabilirsiniz.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 26);
    \u0275\u0275repeaterCreate(9, ChatbotPage_Conditional_16_For_10_Template, 2, 1, "button", 27, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("Merhaba, ", ctx_r3.userName(), "! \u{1F44B}");
    \u0275\u0275advance(4);
    \u0275\u0275repeater(ctx_r3.suggestions);
  }
}
function ChatbotPage_For_18_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 30);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 20);
    \u0275\u0275element(2, "path", 35);
    \u0275\u0275elementEnd()();
  }
}
function ChatbotPage_For_18_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 32);
    \u0275\u0275element(1, "span")(2, "span")(3, "span");
    \u0275\u0275elementEnd();
  }
}
function ChatbotPage_For_18_Conditional_4_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 37);
  }
  if (rf & 2) {
    const $index_r5 = \u0275\u0275nextContext(2).$index;
    \u0275\u0275property("id", "chart-" + $index_r5);
  }
}
function ChatbotPage_For_18_Conditional_4_Conditional_2_For_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const key_r6 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(key_r6);
  }
}
function ChatbotPage_For_18_Conditional_4_Conditional_2_For_8_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const key_r7 = ctx.$implicit;
    const row_r8 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r8[key_r7]);
  }
}
function ChatbotPage_For_18_Conditional_4_Conditional_2_For_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr");
    \u0275\u0275repeaterCreate(1, ChatbotPage_For_18_Conditional_4_Conditional_2_For_8_For_2_Template, 2, 1, "td", null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const msg_r9 = \u0275\u0275nextContext(3).$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r3.getTableHeaders(msg_r9.rawData));
  }
}
function ChatbotPage_For_18_Conditional_4_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 38)(1, "table", 39)(2, "thead")(3, "tr");
    \u0275\u0275repeaterCreate(4, ChatbotPage_For_18_Conditional_4_Conditional_2_For_5_Template, 2, 1, "th", null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "tbody");
    \u0275\u0275repeaterCreate(7, ChatbotPage_For_18_Conditional_4_Conditional_2_For_8_Template, 3, 0, "tr", null, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const msg_r9 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275repeater(ctx_r3.getTableHeaders(msg_r9.rawData));
    \u0275\u0275advance(3);
    \u0275\u0275repeater(msg_r9.rawData);
  }
}
function ChatbotPage_For_18_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 36);
    \u0275\u0275conditionalCreate(1, ChatbotPage_For_18_Conditional_4_Conditional_1_Template, 1, 1, "div", 37);
    \u0275\u0275conditionalCreate(2, ChatbotPage_For_18_Conditional_4_Conditional_2_Template, 9, 0, "div", 38);
  }
  if (rf & 2) {
    const msg_r9 = \u0275\u0275nextContext().$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275property("innerHTML", ctx_r3.sanitize(msg_r9.content), \u0275\u0275sanitizeHtml);
    \u0275\u0275advance();
    \u0275\u0275conditional(msg_r9.plotlyJson ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(msg_r9.rawData && msg_r9.rawData.length > 0 && msg_r9.rawData.length <= 20 ? 2 : -1);
  }
}
function ChatbotPage_For_18_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 34);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 20);
    \u0275\u0275element(2, "path", 40);
    \u0275\u0275elementEnd()();
  }
}
function ChatbotPage_For_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 29);
    \u0275\u0275conditionalCreate(1, ChatbotPage_For_18_Conditional_1_Template, 3, 0, "div", 30);
    \u0275\u0275elementStart(2, "div", 31);
    \u0275\u0275conditionalCreate(3, ChatbotPage_For_18_Conditional_3_Template, 4, 0, "div", 32)(4, ChatbotPage_For_18_Conditional_4_Template, 3, 3);
    \u0275\u0275elementStart(5, "span", 33);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(7, ChatbotPage_For_18_Conditional_7_Template, 3, 0, "div", 34);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const msg_r9 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275classProp("user-row", msg_r9.role === "user")("assistant-row", msg_r9.role === "assistant");
    \u0275\u0275advance();
    \u0275\u0275conditional(msg_r9.role === "assistant" ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275classProp("user-bubble", msg_r9.role === "user")("assistant-bubble", msg_r9.role === "assistant");
    \u0275\u0275advance();
    \u0275\u0275conditional(msg_r9.isLoading ? 3 : 4);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r3.formatTime(msg_r9.timestamp));
    \u0275\u0275advance();
    \u0275\u0275conditional(msg_r9.role === "user" ? 7 : -1);
  }
}
function ChatbotPage_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 19);
    \u0275\u0275element(1, "circle", 41)(2, "path", 42);
    \u0275\u0275elementEnd();
  }
}
function ChatbotPage_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 20);
    \u0275\u0275element(1, "path", 43);
    \u0275\u0275elementEnd();
  }
}
var ChatbotPage = class _ChatbotPage {
  messagesContainer;
  chatInput;
  chatbotService = inject(ChatbotService);
  authService = inject(AuthService);
  sanitizer = inject(DomSanitizer);
  platformId = inject(PLATFORM_ID);
  // State
  messages = signal([], ...ngDevMode ? [{ debugName: "messages" }] : (
    /* istanbul ignore next */
    []
  ));
  isLoading = signal(false, ...ngDevMode ? [{ debugName: "isLoading" }] : (
    /* istanbul ignore next */
    []
  ));
  currentQuestion = "";
  inputFocused = false;
  // Kullanıcı adı
  userName = this.authService.currentUserName;
  // Öneri soruları — rol bazlı
  suggestions = this.getSuggestions();
  shouldScroll = false;
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
    if (!question || this.isLoading())
      return;
    const userMessage = {
      role: "user",
      content: question,
      timestamp: /* @__PURE__ */ new Date()
    };
    const loadingMessage = {
      role: "assistant",
      content: "",
      timestamp: /* @__PURE__ */ new Date(),
      isLoading: true
    };
    this.messages.update((msgs) => [...msgs, userMessage, loadingMessage]);
    this.currentQuestion = "";
    this.isLoading.set(true);
    this.shouldScroll = true;
    this.chatbotService.askQuestion(question).subscribe({
      next: (response) => {
        this.messages.update((msgs) => {
          const updated = msgs.filter((m) => !m.isLoading);
          updated.push({
            role: "assistant",
            content: response.textResponse,
            plotlyJson: response.plotlyJson,
            rawData: response.rawData,
            timestamp: /* @__PURE__ */ new Date()
          });
          return updated;
        });
        this.isLoading.set(false);
        this.shouldScroll = true;
        if (response.plotlyJson && isPlatformBrowser(this.platformId)) {
          this.renderChart(response.plotlyJson);
        }
      },
      error: () => {
        this.messages.update((msgs) => {
          const updated = msgs.filter((m) => !m.isLoading);
          updated.push({
            role: "assistant",
            content: "\xDCzg\xFCn\xFCm, bir hata olu\u015Ftu. L\xFCtfen tekrar deneyin.",
            timestamp: /* @__PURE__ */ new Date()
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
  sendSuggestion(suggestion) {
    this.currentQuestion = suggestion;
    this.sendMessage();
  }
  /**
   * DOMPurify ile XSS korumalı HTML sanitizasyonu.
   * LLM yanıtlarındaki user-generated content (review yorumları vb.) güvenli hale gelir.
   */
  sanitize(content) {
    let html = content.replace(/\n/g, "<br>").replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>").replace(/\*(.*?)\*/g, "<em>$1</em>").replace(/•/g, "&#8226;");
    return this.sanitizer.bypassSecurityTrustHtml(html);
  }
  /**
   * Tablo header'larını raw data'dan çıkarır
   */
  getTableHeaders(data) {
    if (!data || data.length === 0)
      return [];
    return Object.keys(data[0]);
  }
  /**
   * Zaman formatı
   */
  formatTime(date) {
    return new Date(date).toLocaleTimeString("tr-TR", {
      hour: "2-digit",
      minute: "2-digit"
    });
  }
  /**
   * Plotly grafiğini güvenli şekilde render eder.
   * eval() veya Function() KULLANILMAZ — sadece JSON config tüketilir.
   */
  async renderChart(plotlyJson) {
    try {
      const config = JSON.parse(plotlyJson);
      const Plotly = await import("./chunk-N4IXDYR2.mjs");
      setTimeout(() => {
        const chartElements = document.querySelectorAll('[id^="chart-"]');
        const lastChart = chartElements[chartElements.length - 1];
        if (lastChart) {
          Plotly.newPlot(lastChart, config.data || [], __spreadProps(__spreadValues({}, config.layout), {
            paper_bgcolor: "#1a1a2e",
            plot_bgcolor: "#1a1a2e",
            font: { color: "#e0e0e0" },
            margin: { t: 40, r: 20, b: 40, l: 50 }
          }), { responsive: true, displayModeBar: false });
        }
      }, 100);
    } catch (e) {
      console.error("Plotly render hatas\u0131:", e);
    }
  }
  /**
   * Rol bazlı öneri soruları
   */
  getSuggestions() {
    const role = this.authService.currentUserRole();
    switch (role) {
      case "ADMIN":
        return [
          "Son ay\u0131n toplam geliri ne kadar?",
          "Kategorilere g\xF6re sat\u0131\u015F da\u011F\u0131l\u0131m\u0131",
          "En \xE7ok satan 5 \xFCr\xFCn hangileri?",
          "Ka\xE7 aktif ma\u011Faza var?"
        ];
      case "CORPORATE":
        return [
          "Bug\xFCnk\xFC sipari\u015Flerim ka\xE7 tane?",
          "En \xE7ok satan \xFCr\xFCn\xFCm hangisi?",
          "Bu ay\u0131n toplam geliri",
          "Bekleyen iadelerim var m\u0131?"
        ];
      default:
        return [
          "Son sipari\u015Flerim neler?",
          "Toplam harcamam ne kadar?",
          "En son yazd\u0131\u011F\u0131m yorumlar",
          "\u0130ade durumum nedir?"
        ];
    }
  }
  /**
   * Mesaj alanını en alta kaydır
   */
  scrollToBottom() {
    try {
      if (this.messagesContainer) {
        const el = this.messagesContainer.nativeElement;
        el.scrollTop = el.scrollHeight;
      }
    } catch (_) {
    }
  }
  static \u0275fac = function ChatbotPage_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ChatbotPage)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ChatbotPage, selectors: [["app-chatbot-page"]], viewQuery: function ChatbotPage_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c0, 5)(_c1, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.messagesContainer = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.chatInput = _t.first);
    }
  }, decls: 28, vars: 7, consts: [["messagesContainer", ""], ["chatInput", ""], [1, "chatbot-container"], [1, "chatbot-header"], [1, "header-left"], [1, "ai-avatar"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 24 24", "fill", "currentColor", 1, "w-6", "h-6"], ["d", "M12 2a2 2 0 012 2c0 .74-.4 1.39-1 1.73V7h1a7 7 0 017 7h1a1 1 0 110 2h-1.07A7.001 7.001 0 0113 22h-2a7.001 7.001 0 01-6.93-6H3a1 1 0 110-2h1a7 7 0 017-7h1V5.73A2.002 2.002 0 0112 2zm-1 9a5 5 0 00-5 5 5 5 0 005 5h2a5 5 0 005-5 5 5 0 00-5-5h-2zm-1 3a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm4 0a1.5 1.5 0 110 3 1.5 1.5 0 010-3z"], [1, "header-title"], [1, "header-subtitle"], [1, "header-badge"], [1, "status-dot"], [1, "messages-area"], [1, "welcome-screen"], [1, "message-row", 3, "user-row", "assistant-row"], [1, "input-area"], [1, "input-wrapper"], ["type", "text", "placeholder", "Bir soru sorun... \xD6rn: Son ay\u0131n toplam geliri ne kadar?", "id", "chatbot-input", 1, "chat-input", 3, "ngModelChange", "keydown.enter", "focus", "blur", "ngModel", "disabled"], ["id", "chatbot-send-btn", 1, "send-btn", 3, "click", "disabled"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", 1, "animate-spin", "w-5", "h-5"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 24 24", "fill", "currentColor", 1, "w-5", "h-5"], [1, "input-hint"], [1, "welcome-icon"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 24 24", "fill", "currentColor", 1, "w-16", "h-16"], [1, "welcome-title"], [1, "welcome-desc"], [1, "suggestion-chips"], [1, "chip"], [1, "chip", 3, "click"], [1, "message-row"], [1, "msg-avatar", "assistant-avatar"], [1, "message-bubble"], [1, "typing-indicator"], [1, "message-time"], [1, "msg-avatar", "user-avatar"], ["d", "M12 2a2 2 0 012 2c0 .74-.4 1.39-1 1.73V7h1a7 7 0 017 7h1a1 1 0 110 2h-1.07A7.001 7.001 0 0113 22h-2a7.001 7.001 0 01-6.93-6H3a1 1 0 110-2h1a7 7 0 017-7h1V5.73A2.002 2.002 0 0112 2z"], [1, "message-text", 3, "innerHTML"], [1, "chart-container", 3, "id"], [1, "data-table-wrapper"], [1, "data-table"], ["d", "M12 12c2.7 0 5-2.3 5-5s-2.3-5-5-5-5 2.3-5 5 2.3 5 5 5zm0 2c-3.3 0-10 1.7-10 5v2h20v-2c0-3.3-6.7-5-10-5z"], ["cx", "12", "cy", "12", "r", "10", "stroke", "currentColor", "stroke-width", "4", 1, "opacity-25"], ["fill", "currentColor", "d", "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z", 1, "opacity-75"], ["d", "M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"]], template: function ChatbotPage_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 2)(1, "div", 3)(2, "div", 4)(3, "div", 5);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(4, "svg", 6);
      \u0275\u0275element(5, "path", 7);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(6, "div")(7, "h1", 8);
      \u0275\u0275text(8, "DataPulse AI");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "span", 9);
      \u0275\u0275text(10, "Text2SQL Analiz Asistan\u0131");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(11, "div", 10);
      \u0275\u0275element(12, "span", 11);
      \u0275\u0275text(13, " \xC7evrimi\xE7i ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(14, "div", 12, 0);
      \u0275\u0275conditionalCreate(16, ChatbotPage_Conditional_16_Template, 11, 1, "div", 13);
      \u0275\u0275repeaterCreate(17, ChatbotPage_For_18_Template, 8, 12, "div", 14, \u0275\u0275repeaterTrackByIndex);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(19, "div", 15)(20, "div", 16)(21, "input", 17, 1);
      \u0275\u0275twoWayListener("ngModelChange", function ChatbotPage_Template_input_ngModelChange_21_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.currentQuestion, $event) || (ctx.currentQuestion = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275listener("keydown.enter", function ChatbotPage_Template_input_keydown_enter_21_listener() {
        return ctx.sendMessage();
      })("focus", function ChatbotPage_Template_input_focus_21_listener() {
        return ctx.inputFocused = true;
      })("blur", function ChatbotPage_Template_input_blur_21_listener() {
        return ctx.inputFocused = false;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(23, "button", 18);
      \u0275\u0275listener("click", function ChatbotPage_Template_button_click_23_listener() {
        return ctx.sendMessage();
      });
      \u0275\u0275conditionalCreate(24, ChatbotPage_Conditional_24_Template, 3, 0, ":svg:svg", 19)(25, ChatbotPage_Conditional_25_Template, 2, 0, ":svg:svg", 20);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(26, "p", 21);
      \u0275\u0275text(27, "AI yan\u0131tlar\u0131 her zaman do\u011Fru olmayabilir. Kritik kararlar i\xE7in verileri do\u011Frulay\u0131n.");
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(16);
      \u0275\u0275conditional(ctx.messages().length === 0 ? 16 : -1);
      \u0275\u0275advance();
      \u0275\u0275repeater(ctx.messages());
      \u0275\u0275advance(3);
      \u0275\u0275classProp("focused", ctx.inputFocused);
      \u0275\u0275advance();
      \u0275\u0275twoWayProperty("ngModel", ctx.currentQuestion);
      \u0275\u0275property("disabled", ctx.isLoading());
      \u0275\u0275advance(2);
      \u0275\u0275property("disabled", !ctx.currentQuestion.trim() || ctx.isLoading());
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.isLoading() ? 24 : 25);
    }
  }, dependencies: [FormsModule, DefaultValueAccessor, NgControlStatus, NgModel], styles: ['@charset "UTF-8";\n\n\n\n[_nghost-%COMP%] {\n  display: block;\n  height: calc(100vh - 64px);\n}\n.chatbot-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  overflow: hidden;\n  background:\n    linear-gradient(\n      135deg,\n      #0a0a0f 0%,\n      #111127 50%,\n      #0a0a0f 100%);\n  color: #e0e0e0;\n}\n.chatbot-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 16px 24px;\n  background: rgba(255, 255, 255, 0.03);\n  border-bottom: 1px solid rgba(255, 255, 255, 0.06);\n  -webkit-backdrop-filter: blur(12px);\n  backdrop-filter: blur(12px);\n  flex-shrink: 0;\n}\n.header-left[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.ai-avatar[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border-radius: 12px;\n  background:\n    linear-gradient(\n      135deg,\n      #7c3aed,\n      #3b82f6);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: white;\n}\n.ai-avatar[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 22px;\n  height: 22px;\n}\n.header-title[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 700;\n  color: #f5f5f5;\n  margin: 0;\n  letter-spacing: -0.3px;\n}\n.header-subtitle[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #888;\n}\n.header-badge[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 12px;\n  color: #10b981;\n  background: rgba(16, 185, 129, 0.1);\n  padding: 4px 12px;\n  border-radius: 20px;\n  border: 1px solid rgba(16, 185, 129, 0.2);\n}\n.status-dot[_ngcontent-%COMP%] {\n  width: 6px;\n  height: 6px;\n  border-radius: 50%;\n  background: #10b981;\n  animation: _ngcontent-%COMP%_pulse-dot 2s ease-in-out infinite;\n}\n@keyframes _ngcontent-%COMP%_pulse-dot {\n  0%, 100% {\n    opacity: 1;\n    box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.4);\n  }\n  50% {\n    opacity: 0.7;\n    box-shadow: 0 0 0 4px rgba(16, 185, 129, 0);\n  }\n}\n.messages-area[_ngcontent-%COMP%] {\n  flex: 1;\n  min-height: 0;\n  overflow-y: auto;\n  padding: 24px;\n  scroll-behavior: smooth;\n}\n.messages-area[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 6px;\n}\n.messages-area[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: transparent;\n}\n.messages-area[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: rgba(255, 255, 255, 0.1);\n  border-radius: 3px;\n}\n.welcome-screen[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  height: 100%;\n  text-align: center;\n  animation: _ngcontent-%COMP%_fadeIn 0.5s ease-out;\n}\n.welcome-icon[_ngcontent-%COMP%] {\n  width: 80px;\n  height: 80px;\n  border-radius: 24px;\n  background:\n    linear-gradient(\n      135deg,\n      #7c3aed,\n      #3b82f6);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: white;\n  margin-bottom: 20px;\n  box-shadow: 0 8px 32px rgba(124, 58, 237, 0.3);\n}\n.welcome-icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n}\n.welcome-title[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 700;\n  color: #f5f5f5;\n  margin: 0 0 8px;\n}\n.welcome-desc[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #888;\n  margin: 0 0 28px;\n  max-width: 400px;\n}\n.suggestion-chips[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n  justify-content: center;\n  max-width: 500px;\n}\n.chip[_ngcontent-%COMP%] {\n  padding: 8px 16px;\n  border-radius: 20px;\n  border: 1px solid rgba(124, 58, 237, 0.3);\n  background: rgba(124, 58, 237, 0.08);\n  color: #c4b5fd;\n  font-size: 13px;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n.chip[_ngcontent-%COMP%]:hover {\n  background: rgba(124, 58, 237, 0.2);\n  border-color: rgba(124, 58, 237, 0.5);\n  transform: translateY(-1px);\n}\n.message-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n  margin-bottom: 16px;\n  animation: _ngcontent-%COMP%_slideIn 0.3s ease-out;\n}\n.message-row.user-row[_ngcontent-%COMP%] {\n  justify-content: flex-end;\n}\n.message-row.assistant-row[_ngcontent-%COMP%] {\n  justify-content: flex-start;\n}\n.msg-avatar[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n  margin-top: 4px;\n}\n.msg-avatar[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 18px;\n  height: 18px;\n}\n.msg-avatar.assistant-avatar[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #7c3aed,\n      #3b82f6);\n  color: white;\n}\n.msg-avatar.user-avatar[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.1);\n  color: #aaa;\n}\n.message-bubble[_ngcontent-%COMP%] {\n  max-width: 70%;\n  padding: 12px 16px;\n  border-radius: 16px;\n  position: relative;\n  line-height: 1.6;\n  font-size: 14px;\n}\n.message-bubble.user-bubble[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #7c3aed,\n      #6d28d9);\n  color: white;\n  border-bottom-right-radius: 4px;\n}\n.message-bubble.assistant-bubble[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.05);\n  border: 1px solid rgba(255, 255, 255, 0.08);\n  border-bottom-left-radius: 4px;\n  -webkit-backdrop-filter: blur(8px);\n  backdrop-filter: blur(8px);\n}\n.message-text[_ngcontent-%COMP%] {\n  word-wrap: break-word;\n  white-space: pre-wrap;\n}\n.message-time[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 10px;\n  color: rgba(255, 255, 255, 0.35);\n  margin-top: 6px;\n  text-align: right;\n}\n.typing-indicator[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 4px;\n  padding: 4px 0;\n}\n.typing-indicator[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  background: #7c3aed;\n  animation: _ngcontent-%COMP%_typingBounce 1.4s ease-in-out infinite;\n}\n.typing-indicator[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(2) {\n  animation-delay: 0.2s;\n}\n.typing-indicator[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(3) {\n  animation-delay: 0.4s;\n}\n@keyframes _ngcontent-%COMP%_typingBounce {\n  0%, 60%, 100% {\n    transform: translateY(0);\n    opacity: 0.4;\n  }\n  30% {\n    transform: translateY(-6px);\n    opacity: 1;\n  }\n}\n.chart-container[_ngcontent-%COMP%] {\n  margin-top: 12px;\n  border-radius: 12px;\n  overflow: hidden;\n  background: rgba(26, 26, 46, 0.8);\n  border: 1px solid rgba(255, 255, 255, 0.06);\n  min-height: 300px;\n}\n.data-table-wrapper[_ngcontent-%COMP%] {\n  margin-top: 12px;\n  overflow-x: auto;\n  border-radius: 8px;\n  border: 1px solid rgba(255, 255, 255, 0.08);\n}\n.data-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 12px;\n}\n.data-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background: rgba(124, 58, 237, 0.15);\n  color: #c4b5fd;\n  padding: 8px 12px;\n  text-align: left;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.08);\n  white-space: nowrap;\n}\n.data-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 6px 12px;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.04);\n  color: #ccc;\n  white-space: nowrap;\n}\n.data-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background: rgba(124, 58, 237, 0.05);\n}\n.input-area[_ngcontent-%COMP%] {\n  padding: 16px 24px;\n  background: rgba(255, 255, 255, 0.02);\n  border-top: 1px solid rgba(255, 255, 255, 0.06);\n}\n.input-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  background: rgba(255, 255, 255, 0.05);\n  border: 1px solid rgba(255, 255, 255, 0.1);\n  border-radius: 14px;\n  padding: 4px 4px 4px 16px;\n  transition: all 0.3s ease;\n}\n.input-wrapper.focused[_ngcontent-%COMP%] {\n  border-color: rgba(124, 58, 237, 0.5);\n  box-shadow: 0 0 0 3px rgba(124, 58, 237, 0.1);\n}\n.chat-input[_ngcontent-%COMP%] {\n  flex: 1;\n  background: transparent;\n  border: none;\n  outline: none;\n  color: #e0e0e0;\n  font-size: 14px;\n  padding: 10px 0;\n}\n.chat-input[_ngcontent-%COMP%]::placeholder {\n  color: #555;\n}\n.chat-input[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n}\n.send-btn[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border-radius: 10px;\n  border: none;\n  background:\n    linear-gradient(\n      135deg,\n      #7c3aed,\n      #3b82f6);\n  color: white;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.2s ease;\n  flex-shrink: 0;\n}\n.send-btn[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n}\n.send-btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  transform: scale(1.05);\n  box-shadow: 0 4px 16px rgba(124, 58, 237, 0.4);\n}\n.send-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.4;\n  cursor: not-allowed;\n}\n.input-hint[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #555;\n  text-align: center;\n  margin: 8px 0 0;\n}\n@keyframes _ngcontent-%COMP%_fadeIn {\n  from {\n    opacity: 0;\n    transform: translateY(8px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@keyframes _ngcontent-%COMP%_slideIn {\n  from {\n    opacity: 0;\n    transform: translateY(10px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@media (max-width: 768px) {\n  .chatbot-header[_ngcontent-%COMP%] {\n    padding: 12px 16px;\n  }\n  .messages-area[_ngcontent-%COMP%] {\n    padding: 16px;\n  }\n  .input-area[_ngcontent-%COMP%] {\n    padding: 12px 16px;\n  }\n  .message-bubble[_ngcontent-%COMP%] {\n    max-width: 85%;\n  }\n  .welcome-title[_ngcontent-%COMP%] {\n    font-size: 20px;\n  }\n  .suggestion-chips[_ngcontent-%COMP%] {\n    gap: 6px;\n  }\n  .chip[_ngcontent-%COMP%] {\n    font-size: 12px;\n    padding: 6px 12px;\n  }\n}\n/*# sourceMappingURL=chatbot-page.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ChatbotPage, [{
    type: Component,
    args: [{ selector: "app-chatbot-page", standalone: true, imports: [FormsModule], template: `<!-- Chatbot Page \u2014 Tam ekran AI asistan sayfas\u0131 -->
<div class="chatbot-container">

  <!-- Header -->
  <div class="chatbot-header">
    <div class="header-left">
      <div class="ai-avatar">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
          <path d="M12 2a2 2 0 012 2c0 .74-.4 1.39-1 1.73V7h1a7 7 0 017 7h1a1 1 0 110 2h-1.07A7.001 7.001 0 0113 22h-2a7.001 7.001 0 01-6.93-6H3a1 1 0 110-2h1a7 7 0 017-7h1V5.73A2.002 2.002 0 0112 2zm-1 9a5 5 0 00-5 5 5 5 0 005 5h2a5 5 0 005-5 5 5 0 00-5-5h-2zm-1 3a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm4 0a1.5 1.5 0 110 3 1.5 1.5 0 010-3z"/>
        </svg>
      </div>
      <div>
        <h1 class="header-title">DataPulse AI</h1>
        <span class="header-subtitle">Text2SQL Analiz Asistan\u0131</span>
      </div>
    </div>
    <div class="header-badge">
      <span class="status-dot"></span>
      \xC7evrimi\xE7i
    </div>
  </div>

  <!-- Messages Area -->
  <div class="messages-area" #messagesContainer>

    @if (messages().length === 0) {
      <!-- Welcome Screen -->
      <div class="welcome-screen">
        <div class="welcome-icon">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-16 h-16">
            <path d="M12 2a2 2 0 012 2c0 .74-.4 1.39-1 1.73V7h1a7 7 0 017 7h1a1 1 0 110 2h-1.07A7.001 7.001 0 0113 22h-2a7.001 7.001 0 01-6.93-6H3a1 1 0 110-2h1a7 7 0 017-7h1V5.73A2.002 2.002 0 0112 2zm-1 9a5 5 0 00-5 5 5 5 0 005 5h2a5 5 0 005-5 5 5 0 00-5-5h-2zm-1 3a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm4 0a1.5 1.5 0 110 3 1.5 1.5 0 010-3z"/>
          </svg>
        </div>
        <h2 class="welcome-title">Merhaba, {{ userName() }}! \u{1F44B}</h2>
        <p class="welcome-desc">E-ticaret verileriniz hakk\u0131nda do\u011Fal dilde sorular sorabilirsiniz.</p>
        
        <div class="suggestion-chips">
          @for (suggestion of suggestions; track suggestion) {
            <button class="chip" (click)="sendSuggestion(suggestion)">
              {{ suggestion }}
            </button>
          }
        </div>
      </div>
    }

    @for (msg of messages(); track $index) {
      <div class="message-row" [class.user-row]="msg.role === 'user'" [class.assistant-row]="msg.role === 'assistant'">
        
        @if (msg.role === 'assistant') {
          <div class="msg-avatar assistant-avatar">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5">
              <path d="M12 2a2 2 0 012 2c0 .74-.4 1.39-1 1.73V7h1a7 7 0 017 7h1a1 1 0 110 2h-1.07A7.001 7.001 0 0113 22h-2a7.001 7.001 0 01-6.93-6H3a1 1 0 110-2h1a7 7 0 017-7h1V5.73A2.002 2.002 0 0112 2z"/>
            </svg>
          </div>
        }

        <div class="message-bubble" [class.user-bubble]="msg.role === 'user'" [class.assistant-bubble]="msg.role === 'assistant'">
          
          @if (msg.isLoading) {
            <!-- Typing indicator -->
            <div class="typing-indicator">
              <span></span><span></span><span></span>
            </div>
          } @else {
            <div class="message-text" [innerHTML]="sanitize(msg.content)"></div>
            
            <!-- Plotly Chart -->
            @if (msg.plotlyJson) {
              <div class="chart-container" [id]="'chart-' + $index"></div>
            }

            <!-- Raw Data Table -->
            @if (msg.rawData && msg.rawData.length > 0 && msg.rawData.length <= 20) {
              <div class="data-table-wrapper">
                <table class="data-table">
                  <thead>
                    <tr>
                      @for (key of getTableHeaders(msg.rawData); track key) {
                        <th>{{ key }}</th>
                      }
                    </tr>
                  </thead>
                  <tbody>
                    @for (row of msg.rawData; track $index) {
                      <tr>
                        @for (key of getTableHeaders(msg.rawData); track key) {
                          <td>{{ row[key] }}</td>
                        }
                      </tr>
                    }
                  </tbody>
                </table>
              </div>
            }
          }

          <span class="message-time">{{ formatTime(msg.timestamp) }}</span>
        </div>

        @if (msg.role === 'user') {
          <div class="msg-avatar user-avatar">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5">
              <path d="M12 12c2.7 0 5-2.3 5-5s-2.3-5-5-5-5 2.3-5 5 2.3 5 5 5zm0 2c-3.3 0-10 1.7-10 5v2h20v-2c0-3.3-6.7-5-10-5z"/>
            </svg>
          </div>
        }
      </div>
    }
  </div>

  <!-- Input Area -->
  <div class="input-area">
    <div class="input-wrapper" [class.focused]="inputFocused">
      <input
        type="text"
        #chatInput
        [(ngModel)]="currentQuestion"
        (keydown.enter)="sendMessage()"
        (focus)="inputFocused = true"
        (blur)="inputFocused = false"
        placeholder="Bir soru sorun... \xD6rn: Son ay\u0131n toplam geliri ne kadar?"
        [disabled]="isLoading()"
        class="chat-input"
        id="chatbot-input"
      />
      <button 
        class="send-btn" 
        (click)="sendMessage()" 
        [disabled]="!currentQuestion.trim() || isLoading()"
        id="chatbot-send-btn"
      >
        @if (isLoading()) {
          <svg class="animate-spin w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
          </svg>
        } @else {
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5">
            <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
          </svg>
        }
      </button>
    </div>
    <p class="input-hint">AI yan\u0131tlar\u0131 her zaman do\u011Fru olmayabilir. Kritik kararlar i\xE7in verileri do\u011Frulay\u0131n.</p>
  </div>
</div>
`, styles: ['@charset "UTF-8";\n\n/* src/app/features/ai-assistant/chatbot-page.scss */\n:host {\n  display: block;\n  height: calc(100vh - 64px);\n}\n.chatbot-container {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  overflow: hidden;\n  background:\n    linear-gradient(\n      135deg,\n      #0a0a0f 0%,\n      #111127 50%,\n      #0a0a0f 100%);\n  color: #e0e0e0;\n}\n.chatbot-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 16px 24px;\n  background: rgba(255, 255, 255, 0.03);\n  border-bottom: 1px solid rgba(255, 255, 255, 0.06);\n  -webkit-backdrop-filter: blur(12px);\n  backdrop-filter: blur(12px);\n  flex-shrink: 0;\n}\n.header-left {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.ai-avatar {\n  width: 40px;\n  height: 40px;\n  border-radius: 12px;\n  background:\n    linear-gradient(\n      135deg,\n      #7c3aed,\n      #3b82f6);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: white;\n}\n.ai-avatar svg {\n  width: 22px;\n  height: 22px;\n}\n.header-title {\n  font-size: 18px;\n  font-weight: 700;\n  color: #f5f5f5;\n  margin: 0;\n  letter-spacing: -0.3px;\n}\n.header-subtitle {\n  font-size: 12px;\n  color: #888;\n}\n.header-badge {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 12px;\n  color: #10b981;\n  background: rgba(16, 185, 129, 0.1);\n  padding: 4px 12px;\n  border-radius: 20px;\n  border: 1px solid rgba(16, 185, 129, 0.2);\n}\n.status-dot {\n  width: 6px;\n  height: 6px;\n  border-radius: 50%;\n  background: #10b981;\n  animation: pulse-dot 2s ease-in-out infinite;\n}\n@keyframes pulse-dot {\n  0%, 100% {\n    opacity: 1;\n    box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.4);\n  }\n  50% {\n    opacity: 0.7;\n    box-shadow: 0 0 0 4px rgba(16, 185, 129, 0);\n  }\n}\n.messages-area {\n  flex: 1;\n  min-height: 0;\n  overflow-y: auto;\n  padding: 24px;\n  scroll-behavior: smooth;\n}\n.messages-area::-webkit-scrollbar {\n  width: 6px;\n}\n.messages-area::-webkit-scrollbar-track {\n  background: transparent;\n}\n.messages-area::-webkit-scrollbar-thumb {\n  background: rgba(255, 255, 255, 0.1);\n  border-radius: 3px;\n}\n.welcome-screen {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  height: 100%;\n  text-align: center;\n  animation: fadeIn 0.5s ease-out;\n}\n.welcome-icon {\n  width: 80px;\n  height: 80px;\n  border-radius: 24px;\n  background:\n    linear-gradient(\n      135deg,\n      #7c3aed,\n      #3b82f6);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: white;\n  margin-bottom: 20px;\n  box-shadow: 0 8px 32px rgba(124, 58, 237, 0.3);\n}\n.welcome-icon svg {\n  width: 44px;\n  height: 44px;\n}\n.welcome-title {\n  font-size: 24px;\n  font-weight: 700;\n  color: #f5f5f5;\n  margin: 0 0 8px;\n}\n.welcome-desc {\n  font-size: 14px;\n  color: #888;\n  margin: 0 0 28px;\n  max-width: 400px;\n}\n.suggestion-chips {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n  justify-content: center;\n  max-width: 500px;\n}\n.chip {\n  padding: 8px 16px;\n  border-radius: 20px;\n  border: 1px solid rgba(124, 58, 237, 0.3);\n  background: rgba(124, 58, 237, 0.08);\n  color: #c4b5fd;\n  font-size: 13px;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n.chip:hover {\n  background: rgba(124, 58, 237, 0.2);\n  border-color: rgba(124, 58, 237, 0.5);\n  transform: translateY(-1px);\n}\n.message-row {\n  display: flex;\n  gap: 10px;\n  margin-bottom: 16px;\n  animation: slideIn 0.3s ease-out;\n}\n.message-row.user-row {\n  justify-content: flex-end;\n}\n.message-row.assistant-row {\n  justify-content: flex-start;\n}\n.msg-avatar {\n  width: 32px;\n  height: 32px;\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n  margin-top: 4px;\n}\n.msg-avatar svg {\n  width: 18px;\n  height: 18px;\n}\n.msg-avatar.assistant-avatar {\n  background:\n    linear-gradient(\n      135deg,\n      #7c3aed,\n      #3b82f6);\n  color: white;\n}\n.msg-avatar.user-avatar {\n  background: rgba(255, 255, 255, 0.1);\n  color: #aaa;\n}\n.message-bubble {\n  max-width: 70%;\n  padding: 12px 16px;\n  border-radius: 16px;\n  position: relative;\n  line-height: 1.6;\n  font-size: 14px;\n}\n.message-bubble.user-bubble {\n  background:\n    linear-gradient(\n      135deg,\n      #7c3aed,\n      #6d28d9);\n  color: white;\n  border-bottom-right-radius: 4px;\n}\n.message-bubble.assistant-bubble {\n  background: rgba(255, 255, 255, 0.05);\n  border: 1px solid rgba(255, 255, 255, 0.08);\n  border-bottom-left-radius: 4px;\n  -webkit-backdrop-filter: blur(8px);\n  backdrop-filter: blur(8px);\n}\n.message-text {\n  word-wrap: break-word;\n  white-space: pre-wrap;\n}\n.message-time {\n  display: block;\n  font-size: 10px;\n  color: rgba(255, 255, 255, 0.35);\n  margin-top: 6px;\n  text-align: right;\n}\n.typing-indicator {\n  display: flex;\n  gap: 4px;\n  padding: 4px 0;\n}\n.typing-indicator span {\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  background: #7c3aed;\n  animation: typingBounce 1.4s ease-in-out infinite;\n}\n.typing-indicator span:nth-child(2) {\n  animation-delay: 0.2s;\n}\n.typing-indicator span:nth-child(3) {\n  animation-delay: 0.4s;\n}\n@keyframes typingBounce {\n  0%, 60%, 100% {\n    transform: translateY(0);\n    opacity: 0.4;\n  }\n  30% {\n    transform: translateY(-6px);\n    opacity: 1;\n  }\n}\n.chart-container {\n  margin-top: 12px;\n  border-radius: 12px;\n  overflow: hidden;\n  background: rgba(26, 26, 46, 0.8);\n  border: 1px solid rgba(255, 255, 255, 0.06);\n  min-height: 300px;\n}\n.data-table-wrapper {\n  margin-top: 12px;\n  overflow-x: auto;\n  border-radius: 8px;\n  border: 1px solid rgba(255, 255, 255, 0.08);\n}\n.data-table {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 12px;\n}\n.data-table th {\n  background: rgba(124, 58, 237, 0.15);\n  color: #c4b5fd;\n  padding: 8px 12px;\n  text-align: left;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.08);\n  white-space: nowrap;\n}\n.data-table td {\n  padding: 6px 12px;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.04);\n  color: #ccc;\n  white-space: nowrap;\n}\n.data-table tbody tr:hover {\n  background: rgba(124, 58, 237, 0.05);\n}\n.input-area {\n  padding: 16px 24px;\n  background: rgba(255, 255, 255, 0.02);\n  border-top: 1px solid rgba(255, 255, 255, 0.06);\n}\n.input-wrapper {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  background: rgba(255, 255, 255, 0.05);\n  border: 1px solid rgba(255, 255, 255, 0.1);\n  border-radius: 14px;\n  padding: 4px 4px 4px 16px;\n  transition: all 0.3s ease;\n}\n.input-wrapper.focused {\n  border-color: rgba(124, 58, 237, 0.5);\n  box-shadow: 0 0 0 3px rgba(124, 58, 237, 0.1);\n}\n.chat-input {\n  flex: 1;\n  background: transparent;\n  border: none;\n  outline: none;\n  color: #e0e0e0;\n  font-size: 14px;\n  padding: 10px 0;\n}\n.chat-input::placeholder {\n  color: #555;\n}\n.chat-input:disabled {\n  opacity: 0.5;\n}\n.send-btn {\n  width: 40px;\n  height: 40px;\n  border-radius: 10px;\n  border: none;\n  background:\n    linear-gradient(\n      135deg,\n      #7c3aed,\n      #3b82f6);\n  color: white;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.2s ease;\n  flex-shrink: 0;\n}\n.send-btn svg {\n  width: 20px;\n  height: 20px;\n}\n.send-btn:hover:not(:disabled) {\n  transform: scale(1.05);\n  box-shadow: 0 4px 16px rgba(124, 58, 237, 0.4);\n}\n.send-btn:disabled {\n  opacity: 0.4;\n  cursor: not-allowed;\n}\n.input-hint {\n  font-size: 11px;\n  color: #555;\n  text-align: center;\n  margin: 8px 0 0;\n}\n@keyframes fadeIn {\n  from {\n    opacity: 0;\n    transform: translateY(8px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@keyframes slideIn {\n  from {\n    opacity: 0;\n    transform: translateY(10px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@media (max-width: 768px) {\n  .chatbot-header {\n    padding: 12px 16px;\n  }\n  .messages-area {\n    padding: 16px;\n  }\n  .input-area {\n    padding: 12px 16px;\n  }\n  .message-bubble {\n    max-width: 85%;\n  }\n  .welcome-title {\n    font-size: 20px;\n  }\n  .suggestion-chips {\n    gap: 6px;\n  }\n  .chip {\n    font-size: 12px;\n    padding: 6px 12px;\n  }\n}\n/*# sourceMappingURL=chatbot-page.css.map */\n'] }]
  }], null, { messagesContainer: [{
    type: ViewChild,
    args: ["messagesContainer"]
  }], chatInput: [{
    type: ViewChild,
    args: ["chatInput"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ChatbotPage, { className: "ChatbotPage", filePath: "app/features/ai-assistant/chatbot-page.ts", lineNumber: 23 });
})();
export {
  ChatbotPage
};
//# sourceMappingURL=chunk-KQTGXF7O.mjs.map
