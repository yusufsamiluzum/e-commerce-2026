import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup } from '@angular/forms';
import { environment } from '../../../../environments/environment';

export interface DemoAccount {
  label: string;
  values: Record<string, string>;
}

@Component({
  selector: 'app-demo-fill',
  standalone: true,
  imports: [CommonModule],
  template: `
    @if (!isProd) {
    <div [class]="dark
      ? 'mt-4 p-3 bg-stone-800 border border-stone-700 rounded-xl'
      : 'mt-4 p-3 bg-amber-50 border border-amber-200 rounded-xl'">
      <p [class]="dark ? 'text-[10px] font-semibold text-orange-400 uppercase tracking-widest mb-2'
                       : 'text-[10px] font-semibold text-amber-600 uppercase tracking-widest mb-2'">Demo Hesaplar</p>
      <div class="flex flex-wrap gap-1.5">
        @for (account of accounts; track account.label) {
        <button type="button" (click)="fill(account)"
          [class]="dark
            ? 'px-2.5 py-1 text-xs font-medium rounded-lg bg-stone-700 border border-stone-600 text-orange-300 hover:bg-stone-600 transition-colors'
            : 'px-2.5 py-1 text-xs font-medium rounded-lg bg-white border border-amber-300 text-amber-700 hover:bg-amber-100 transition-colors'">
          {{ account.label }}
        </button>
        }
      </div>
    </div>
    }
  `,
})
export class DemoFillComponent {
  @Input() accounts: DemoAccount[] = [];
  @Input() form!: FormGroup;
  @Input() dark = false;

  isProd = environment.production;

  fill(account: DemoAccount) {
    this.form.patchValue(account.values);
  }
}
