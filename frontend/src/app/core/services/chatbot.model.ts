/**
 * Chatbot TypeScript modelleri.
 * Backend ChatRequestDto / ChatResponseDto ile %100 eşleşir.
 */

export interface ChatRequest {
  question: string;
}

export interface ChatResponse {
  textResponse: string;
  plotlyJson?: string | null;
  rawData?: any[] | null;
  sqlQuery?: string | null;
}

export interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
  plotlyJson?: string | null;
  rawData?: any[] | null;
  timestamp: Date;
  isLoading?: boolean;
}
