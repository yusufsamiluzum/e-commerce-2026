import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastService, Toast } from '../../../core/services/toast.service';

@Component({
  selector: 'ember-toast',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="fixed bottom-5 right-5 z-[9999] flex flex-col gap-2 w-80 pointer-events-none">
      @for (toast of toastService.toasts(); track toast.id) {
        <div
          [ngClass]="toastClass(toast)"
          class="pointer-events-auto flex items-start gap-3 rounded-xl border px-4 py-3 shadow-lg"
        >
          <div [innerHTML]="icon(toast.type)" class="flex-shrink-0 w-5 h-5 mt-0.5"></div>
          <p class="text-sm font-medium flex-1">{{ toast.message }}</p>
          <button (click)="toastService.dismiss(toast.id)" class="flex-shrink-0 opacity-50 hover:opacity-100 transition-opacity">
            <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/>
            </svg>
          </button>
        </div>
      }
    </div>
  `,
})
export class EmberToastComponent {
  readonly toastService = inject(ToastService);

  toastClass(toast: Toast): string {
    const map: Record<string, string> = {
      success: 'bg-white border-lime-200 text-lime-800',
      error:   'bg-white border-red-200 text-red-800',
      warning: 'bg-white border-amber-200 text-amber-800',
      info:    'bg-white border-stone-200 text-stone-800',
    };
    return map[toast.type];
  }

  icon(type: string): string {
    const icons: Record<string, string> = {
      success: `<svg fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" class="text-lime-600"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/></svg>`,
      error:   `<svg fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" class="text-red-600"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/></svg>`,
      warning: `<svg fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" class="text-amber-600"><path stroke-linecap="round" stroke-linejoin="round" d="M12 9v4m0 4h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/></svg>`,
      info:    `<svg fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" class="text-stone-500"><path stroke-linecap="round" stroke-linejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>`,
    };
    return icons[type] ?? icons['info'];
  }
}
