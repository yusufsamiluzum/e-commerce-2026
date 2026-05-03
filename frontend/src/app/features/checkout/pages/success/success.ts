import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-checkout-success',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="min-h-screen bg-[#FEF7ED] flex items-center justify-center px-4 py-16">
      <div class="bg-white border border-stone-200 rounded-2xl p-12 max-w-lg w-full text-center">

        <!-- Başarı İkonu -->
        <div class="w-20 h-20 bg-lime-50 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg class="h-9 w-9 text-lime-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>

        <!-- Başlık -->
        <h1 class="text-2xl font-medium text-stone-900 mb-2">Siparişiniz Alındı!</h1>
        <p class="text-sm text-stone-500 mb-8 leading-relaxed">
          Ödemeniz başarıyla tamamlandı. Siparişiniz en kısa sürede hazırlanıp kargoya verilecektir.
        </p>

        <!-- Ember Marka Rozeti -->
        <div class="flex items-center justify-center gap-2 bg-orange-50 rounded-lg px-4 py-3 mb-8">
          <div class="w-6 h-6 rounded-md bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center flex-shrink-0">
            <svg class="w-3.5 h-3.5 text-white" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12.017 2C12.017 2 6 8 6 13.5a6.017 6.017 0 0 0 12 0C18 8 12.017 2 12.017 2zm-.017 15a2 2 0 0 1-2-2c0-1.5 1-3 2-4 1 1 2 2.5 2 4a2 2 0 0 1-2 2z"/>
            </svg>
          </div>
          <span class="text-sm text-stone-600">ember'dan alışveriş yaptığınız için teşekkürler!</span>
        </div>

        <!-- CTA Butonları -->
        <div class="flex flex-col sm:flex-row gap-3">
          <a routerLink="/individual/user-orders"
            class="flex-1 flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white text-sm font-medium py-2.5 rounded-lg transition-colors">
            <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round"
                d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>
            Siparişlerim
          </a>
          <a routerLink="/catalog"
            class="flex-1 flex items-center justify-center gap-2 bg-white border border-stone-200 hover:border-stone-300 text-stone-700 text-sm font-medium py-2.5 rounded-lg transition-colors">
            Alışverişe Devam
          </a>
        </div>

      </div>
    </div>
  `
})
export class CheckoutSuccessComponent {}
