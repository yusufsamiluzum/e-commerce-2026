import { Component, Input } from '@angular/core';

@Component({
  selector: 'ember-card',
  standalone: true,
  template: `
    <div [class]="'bg-white rounded-xl border border-stone-200 ' + padding + ' ' + extraClass">
      <ng-content></ng-content>
    </div>
  `,
})
export class EmberCardComponent {
  @Input() size: 'none' | 'sm' | 'md' | 'lg' = 'md';
  @Input() extraClass = '';

  get padding(): string {
    return { none: '', sm: 'p-4', md: 'p-5', lg: 'p-6' }[this.size];
  }
}
