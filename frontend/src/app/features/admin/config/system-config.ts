import { Component, computed, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { toSignal } from '@angular/core/rxjs-interop';
import { catchError, of, Subject, switchMap, startWith } from 'rxjs';
import { AdminService, SystemConfigItem } from '../services/admin.service';

interface ConfigGroup {
  label: string;
  icon: string;
  keys: string[];
}

const CONFIG_GROUPS: ConfigGroup[] = [
  {
    label: 'Genel',
    icon: '🏪',
    keys: ['site_name', 'currency', 'tax_rate'],
  },
  {
    label: 'AI / LLM',
    icon: '🤖',
    keys: ['chatbot_llm_provider', 'chatbot_llm_model', 'openai_api_key', 'anthropic_api_key', 'gemini_api_key', 'groq_api_key'],
  },
  {
    label: 'Ödeme',
    icon: '💳',
    keys: ['stripe_api_key'],
  },
];

const KEY_LABELS: Record<string, string> = {
  site_name: 'Site Adı',
  currency: 'Para Birimi',
  tax_rate: 'Vergi Oranı',
  chatbot_llm_provider: 'LLM Sağlayıcı',
  chatbot_llm_model: 'LLM Model',
  openai_api_key: 'OpenAI API Key',
  anthropic_api_key: 'Anthropic API Key',
  gemini_api_key: 'Gemini API Key',
  groq_api_key: 'Groq API Key',
  stripe_api_key: 'Stripe API Key',
};

@Component({
  selector: 'app-system-config',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './system-config.html',
})
export class SystemConfig {
  private adminService = inject(AdminService);

  editingId = signal<number | null>(null);
  editingValue = signal('');
  actionInProgress = signal(false);
  revealedIds = signal<Set<number>>(new Set());

  private refresh$ = new Subject<void>();

  configs = toSignal(
    this.refresh$.pipe(
      startWith(undefined),
      switchMap(() => this.adminService.getAllConfigs().pipe(catchError(() => of(null))))
    ),
    { initialValue: null }
  );

  groups = computed(() => {
    const all = this.configs();
    if (!all) return [];
    const map = new Map(all.map(c => [c.configKey, c]));
    return CONFIG_GROUPS.map(g => ({
      ...g,
      items: g.keys.map(k => map.get(k)).filter(Boolean) as SystemConfigItem[],
    })).filter(g => g.items.length > 0);
  });

  getLabel(key: string): string {
    return KEY_LABELS[key] ?? key;
  }

  isRevealed(id: number): boolean {
    return this.revealedIds().has(id);
  }

  toggleReveal(id: number) {
    const next = new Set(this.revealedIds());
    next.has(id) ? next.delete(id) : next.add(id);
    this.revealedIds.set(next);
  }

  maskedValue(value: string): string {
    if (!value) return '—';
    return '•'.repeat(Math.min(value.length, 24));
  }

  startEdit(config: SystemConfigItem) {
    this.editingId.set(config.id);
    this.editingValue.set(config.configValue);
  }

  saveEdit(configId: number) {
    const value = this.editingValue().trim();
    this.actionInProgress.set(true);
    this.adminService.updateConfig(configId, value).subscribe({
      next: () => {
        this.editingId.set(null);
        this.actionInProgress.set(false);
        this.refresh$.next();
      },
      error: () => this.actionInProgress.set(false),
    });
  }

  cancelEdit() {
    this.editingId.set(null);
  }
}
