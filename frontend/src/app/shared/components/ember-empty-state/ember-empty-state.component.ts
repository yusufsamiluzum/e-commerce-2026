import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ember-empty-state',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="flex flex-col items-center justify-center py-16 px-6 text-center">
      <div class="w-16 h-16 rounded-full bg-ember-50 flex items-center justify-center mb-4">
        <ng-content select="[icon]"></ng-content>
      </div>
      <h3 class="text-base font-medium text-stone-900 mb-1">{{ title }}</h3>
      @if (description) {
        <p class="text-sm text-stone-500 max-w-xs">{{ description }}</p>
      }
      @if (ctaLabel) {
        <button
          (click)="ctaClick.emit()"
          class="mt-5 inline-flex items-center gap-2 bg-ember-500 hover:bg-ember-600 text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors"
        >
          {{ ctaLabel }}
        </button>
      }
    </div>
  `,
})
export class EmberEmptyStateComponent {
  @Input() title!: string;
  @Input() description?: string;
  @Input() ctaLabel?: string;
  @Output() ctaClick = new EventEmitter<void>();
}
