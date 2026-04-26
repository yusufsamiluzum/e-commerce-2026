import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ToastService } from '../../services/toast.service';

@Component({
  selector: 'app-toast',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="fixed top-20 right-4 z-[60] flex flex-col gap-2 pointer-events-none">
      @for (toast of toastService.toasts(); track toast.id) {
        <div
          class="pointer-events-auto flex items-center gap-3 min-w-[280px] max-w-sm
                 bg-white rounded-xl shadow-2xl border-l-4 px-4 py-3
                 animate-[slideIn_0.25s_ease-out]"
          [class.border-teal-500]="toast.type === 'success'"
          [class.border-red-500]="toast.type === 'error'"
          [class.border-blue-500]="toast.type === 'info'"
        >
          @if (toast.imageUrl) {
            <img
              [src]="toast.imageUrl"
              class="w-10 h-10 rounded-lg object-cover flex-shrink-0 bg-gray-100"
              alt=""
            />
          } @else {
            <div
              class="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0"
              [class.bg-teal-100]="toast.type === 'success'"
              [class.bg-red-100]="toast.type === 'error'"
              [class.bg-blue-100]="toast.type === 'info'"
            >
              @if (toast.type === 'success') {
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              } @else if (toast.type === 'error') {
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              } @else {
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              }
            </div>
          }

          <div class="flex-1 min-w-0">
            <p class="text-sm font-semibold text-gray-900 truncate">{{ toast.message }}</p>
            @if (toast.actionLabel && toast.actionRoute) {
              <a
                [routerLink]="toast.actionRoute"
                (click)="toastService.dismiss(toast.id)"
                class="text-xs font-bold text-teal-600 hover:text-teal-700 underline"
              >
                {{ toast.actionLabel }} →
              </a>
            }
          </div>

          <button
            (click)="toastService.dismiss(toast.id)"
            class="text-gray-400 hover:text-gray-600 flex-shrink-0"
            aria-label="Kapat"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      }
    </div>

    <style>
      @keyframes slideIn {
        from { transform: translateX(120%); opacity: 0; }
        to   { transform: translateX(0);     opacity: 1; }
      }
    </style>
  `,
})
export class ToastComponent {
  toastService = inject(ToastService);
}
