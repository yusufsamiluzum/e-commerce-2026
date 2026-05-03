import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ember-badge',
  standalone: true,
  imports: [CommonModule],
  template: `<span [ngClass]="classes"><ng-content></ng-content></span>`,
})
export class EmberBadgeComponent {
  @Input() variant: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled' | 'refund' | 'default' = 'default';

  get classes(): string {
    const base = 'inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium';
    const variants: Record<string, string> = {
      pending:    'bg-amber-100 text-amber-700',
      processing: 'bg-blue-100 text-blue-700',
      shipped:    'bg-purple-100 text-purple-700',
      delivered:  'bg-lime-100 text-lime-700',
      cancelled:  'bg-red-100 text-red-700',
      refund:     'bg-orange-100 text-orange-700',
      default:    'bg-stone-100 text-stone-600',
    };
    return `${base} ${variants[this.variant] ?? variants['default']}`;
  }
}
