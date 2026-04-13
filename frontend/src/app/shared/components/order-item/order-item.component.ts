import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-order-item',
  standalone: true,
  imports: [CommonModule],
  template: `
    <article class="rounded-2xl border border-slate-700/70 bg-slate-900/40 p-4 md:p-5 shadow-sm">
      <div class="flex items-start gap-4">
        <div class="w-20 h-20 rounded-xl bg-slate-950 border border-slate-700/60 flex-shrink-0 overflow-hidden flex items-center justify-center">
        @if (imageUrl) {
          <img [src]="imageUrl" [alt]="name" class="w-full h-full object-cover">
        } @else {
          <i class="fas fa-box text-gray-600 text-xl"></i>
        }
        </div>

        <div class="flex-1 min-w-0">
          <h4 class="text-white text-base font-semibold leading-tight">{{ name || 'Ürün' }}</h4>
          <div class="mt-3 flex flex-wrap items-center gap-3 text-sm">
            <span class="inline-flex items-center rounded-md bg-slate-800 border border-slate-700 px-2.5 py-1 text-slate-300">
              {{ quantity }} Adet
            </span>
            <span class="text-slate-500">Birim:</span>
            <span class="text-slate-300 font-medium">\${{ unitPrice | number:'1.2-2' }}</span>
          </div>
        </div>

        <div class="text-right flex flex-col items-end gap-2">
          <p class="text-xs uppercase tracking-wide text-slate-400">Toplam</p>
          <span class="text-white font-extrabold text-lg leading-none">\${{ totalPrice | number:'1.2-2' }}</span>
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
