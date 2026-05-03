import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-order-item',
  standalone: true,
  imports: [CommonModule],
  template: `
    <article class="rounded-xl border border-stone-200 bg-stone-50 px-4 py-3.5">
      <div class="flex items-center gap-3.5">
        <div class="w-14 h-14 rounded-lg bg-white border border-stone-200 flex-shrink-0 overflow-hidden flex items-center justify-center">
          @if (imageUrl) {
            <img [src]="imageUrl" [alt]="name" class="w-full h-full object-contain p-1">
          } @else {
            <svg class="w-7 h-7 text-stone-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1">
              <path stroke-linecap="round" stroke-linejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"/>
            </svg>
          }
        </div>

        <div class="flex-1 min-w-0">
          <h4 class="text-stone-900 text-sm font-medium leading-snug truncate">{{ name || 'Ürün' }}</h4>
          <div class="mt-1.5 flex flex-wrap items-center gap-2 text-xs">
            <span class="inline-flex items-center rounded-md bg-white border border-stone-200 px-2 py-0.5 text-stone-600 font-medium">
              {{ quantity }} Adet
            </span>
            <span class="text-stone-400">Birim:
              <span class="text-stone-600 font-medium">\${{ unitPrice | number:'1.2-2' }}</span>
            </span>
          </div>
        </div>

        <div class="text-right flex flex-col items-end gap-1 flex-shrink-0">
          <p class="text-[10px] uppercase tracking-wider text-stone-400 font-medium">Toplam</p>
          <span class="text-orange-500 font-semibold text-base leading-none">\${{ totalPrice | number:'1.2-2' }}</span>
          <ng-content></ng-content>
        </div>
      </div>
    </article>
  `
})
export class OrderItemComponent {
  @Input() imageUrl?: string;
  @Input() name!: string;
  @Input() quantity!: number;
  @Input() unitPrice!: number;
  @Input() totalPrice!: number;
}
