import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ember-skeleton',
  standalone: true,
  imports: [CommonModule],
  template: `
    @for (i of items; track i) {
      <div [class]="'bg-stone-200 animate-pulse ' + rounded + ' ' + width + ' ' + height + ' ' + extraClass"></div>
    }
  `,
})
export class EmberSkeletonComponent {
  @Input() width = 'w-full';
  @Input() height = 'h-4';
  @Input() rounded = 'rounded';
  @Input() count = 1;
  @Input() extraClass = '';

  get items(): number[] {
    return Array.from({ length: this.count }, (_, i) => i);
  }
}
