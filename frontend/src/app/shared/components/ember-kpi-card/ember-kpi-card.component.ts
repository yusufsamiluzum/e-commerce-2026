import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ember-kpi-card',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="bg-white rounded-xl border border-stone-200 p-5 flex flex-col gap-1">
      <p class="text-xs text-stone-500 font-medium uppercase tracking-wide">{{ label }}</p>
      <p class="text-2xl font-semibold text-stone-900 leading-tight">{{ value }}</p>
      @if (trendValue) {
        <div class="flex items-center gap-1 mt-0.5">
          @if (trend === 'up') {
            <svg class="w-3.5 h-3.5 text-lime-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M5 15l7-7 7 7"/>
            </svg>
            <span class="text-xs text-lime-600 font-medium">{{ trendValue }}</span>
          }
          @if (trend === 'down') {
            <svg class="w-3.5 h-3.5 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7"/>
            </svg>
            <span class="text-xs text-red-500 font-medium">{{ trendValue }}</span>
          }
          @if (trend === 'neutral') {
            <span class="text-xs text-stone-400 font-medium">{{ trendValue }}</span>
          }
        </div>
      }
    </div>
  `,
})
export class EmberKpiCardComponent {
  @Input() label!: string;
  @Input() value!: string;
  @Input() trend?: 'up' | 'down' | 'neutral';
  @Input() trendValue?: string;
}
