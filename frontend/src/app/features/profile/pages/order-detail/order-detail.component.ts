import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { OrderService, Order } from '../../../../core/services/order.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-order-detail',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="max-w-4xl mx-auto p-4">
      <div class="mb-6 flex justify-between items-center">
        <h1 class="text-2xl font-bold text-gray-900">Sipariş Detayı</h1>
        <a routerLink="/profile/orders" class="text-blue-600 hover:text-blue-800 flex items-center">
          <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
          </svg>
          Siparişlere Dön
        </a>
      </div>

      @if (order$ | async; as order) {
        <div class="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden mb-8">
          <div class="bg-gray-50 border-b border-gray-200 px-6 py-4 flex flex-col md:flex-row md:items-center justify-between">
            <div>
              <p class="text-sm font-medium text-gray-500 uppercase">Sipariş Numarası</p>
              <p class="text-lg font-bold text-gray-900">#{{ order.id }}</p>
            </div>
            <div class="mt-4 md:mt-0">
              <p class="text-sm font-medium text-gray-500 uppercase">Sipariş Tarihi</p>
              <p class="text-base text-gray-900">{{ order.orderDate | date:'dd.MM.yyyy HH:mm' }}</p>
            </div>
            <div class="mt-4 md:mt-0">
              <p class="text-sm font-medium text-gray-500 uppercase">Satıcı Mağaza</p>
              <p class="text-base text-gray-900 font-semibold">{{ order.storeName }}</p>
            </div>
            <div class="mt-4 md:mt-0 text-right">
              <p class="text-sm font-medium text-gray-500 uppercase">Toplam Tutar</p>
              <p class="text-xl font-bold text-blue-600">{{ order.totalPrice | currency:'TRY':'symbol':'1.2-2' }}</p>
            </div>
          </div>

          <!-- Timeline -->
          <div class="px-6 py-8">
            <h2 class="text-lg font-bold text-gray-800 mb-6">Teslimat Durumu</h2>
            <div class="relative max-w-2xl mx-auto">
              <!-- Progress Bar Track -->
              <div class="absolute inset-0 top-1/2 -ml-2 -translate-y-1/2 w-full h-1 bg-gray-200 z-0"></div>
              <!-- Active Progress -->
              <div class="absolute inset-0 top-1/2 -ml-2 -translate-y-1/2 h-1 bg-green-500 z-0 transition-all duration-500"
                   [style.width]="getTimelineWidth(order.status)"></div>

              <!-- Steps -->
              <div class="relative z-10 flex justify-between">
                <!-- PENDING -->
                <div class="flex flex-col items-center">
                  <div class="w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm"
                              [class.bg-green-500]="isStepActive('PENDING', order.status)"
                              [class.text-white]="isStepActive('PENDING', order.status)"
                              [class.bg-gray-200]="!isStepActive('PENDING', order.status)"
                              [class.text-gray-500]="!isStepActive('PENDING', order.status)">
                    1
                  </div>
                  <p class="mt-2 text-xs font-semibold"
                            [class.text-green-600]="isStepActive('PENDING', order.status)"
                            [class.text-gray-500]="!isStepActive('PENDING', order.status)">
                    Bekliyor
                  </p>
                </div>
                <!-- PROCESSING -->
                <div class="flex flex-col items-center">
                  <div class="w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm"
                              [class.bg-green-500]="isStepActive('PROCESSING', order.status)"
                              [class.text-white]="isStepActive('PROCESSING', order.status)"
                              [class.bg-gray-200]="!isStepActive('PROCESSING', order.status)"
                              [class.text-gray-500]="!isStepActive('PROCESSING', order.status)">
                    2
                  </div>
                  <p class="mt-2 text-xs font-semibold"
                            [class.text-green-600]="isStepActive('PROCESSING', order.status)"
                            [class.text-gray-500]="!isStepActive('PROCESSING', order.status)">
                    Hazırlanıyor
                  </p>
                </div>
                <!-- SHIPPED -->
                <div class="flex flex-col items-center">
                  <div class="w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm"
                              [class.bg-green-500]="isStepActive('SHIPPED', order.status)"
                              [class.text-white]="isStepActive('SHIPPED', order.status)"
                              [class.bg-gray-200]="!isStepActive('SHIPPED', order.status)"
                              [class.text-gray-500]="!isStepActive('SHIPPED', order.status)">
                    3
                  </div>
                  <p class="mt-2 text-xs font-semibold"
                            [class.text-green-600]="isStepActive('SHIPPED', order.status)"
                            [class.text-gray-500]="!isStepActive('SHIPPED', order.status)">
                    Kargoya Verildi
                  </p>
                </div>
                <!-- DELIVERED -->
                <div class="flex flex-col items-center">
                  <div class="w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm"
                              [class.bg-green-500]="isStepActive('DELIVERED', order.status)"
                              [class.text-white]="isStepActive('DELIVERED', order.status)"
                              [class.bg-gray-200]="!isStepActive('DELIVERED', order.status)"
                              [class.text-gray-500]="!isStepActive('DELIVERED', order.status)">
                    4
                  </div>
                  <p class="mt-2 text-xs font-semibold"
                            [class.text-green-600]="isStepActive('DELIVERED', order.status)"
                            [class.text-gray-500]="!isStepActive('DELIVERED', order.status)">
                    Teslim Edildi
                  </p>
                </div>
              </div>
            </div>
            
            @if (order.status === 'CANCELLED') {
              <div class="mt-8 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center text-red-700">
                <svg class="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span class="font-medium">Bu sipariş iptal edilmiştir.</span>
              </div>
            }
          </div>

          <!-- İtemler -->
          <div class="px-6 py-6 border-t border-gray-100">
            <h3 class="text-lg font-bold text-gray-800 mb-4">Sipariş İçeriği ({{ order.items.length }} Ürün)</h3>
            <div class="space-y-4">
              @for (item of order.items; track item.id) {
                <div class="flex items-center p-4 border border-gray-100 rounded-lg hover:bg-gray-50 transition">
                  <div class="w-20 h-20 bg-gray-200 flex-shrink-0 rounded-md overflow-hidden mr-4">
                    <img [src]="item.productImageUrl" [alt]="item.productName" class="w-full h-full object-cover">
                  </div>
                  <div class="flex-grow">
                    <h4 class="text-base font-semibold text-gray-900">{{ item.productName }}</h4>
                    <p class="text-sm text-gray-500 mt-1">Birim Fiyat: {{ item.unitPrice | currency:'TRY':'symbol':'1.2-2' }}</p>
                  </div>
                  <div class="text-right">
                    <p class="text-sm font-medium text-gray-700">Adet: {{ item.quantity }}</p>
                    <p class="text-lg font-bold text-blue-600 mt-1">{{ item.totalPrice | currency:'TRY':'symbol':'1.2-2' }}</p>
                  </div>
                </div>
              }
            </div>
          </div>
        </div>
      } @else {
        <!-- Skeleton Loader -->
        <div class="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden mb-8 animate-pulse">
          <div class="bg-gray-50 px-6 py-4 flex justify-between h-24">
            <div class="w-1/4 h-4 bg-gray-200 rounded mt-2"></div>
            <div class="w-1/4 h-4 bg-gray-200 rounded mt-2"></div>
            <div class="w-1/4 h-4 bg-gray-200 rounded mt-2"></div>
          </div>
          <div class="px-6 py-12">
            <div class="h-4 bg-gray-200 rounded w-full mb-8"></div>
          </div>
          <div class="px-6 py-6 border-t border-gray-100">
            <div class="h-20 bg-gray-200 rounded w-full mb-4"></div>
            <div class="h-20 bg-gray-200 rounded w-full"></div>
          </div>
        </div>
      }
    </div>
  `
})
export class OrderDetailComponent implements OnInit {
  route = inject(ActivatedRoute);
  orderService = inject(OrderService);
  order$!: Observable<Order>;

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (id) {
      this.order$ = this.orderService.getOrderDetails(id);
    }
  }

  isStepActive(step: string, currentStatus: string): boolean {
    const statuses = ['PENDING', 'PROCESSING', 'SHIPPED', 'DELIVERED'];
    if (currentStatus === 'CANCELLED') return false;
    
    const stepIndex = statuses.indexOf(step);
    const currentIndex = statuses.indexOf(currentStatus);
    
    return stepIndex <= currentIndex;
  }

  getTimelineWidth(status: string): string {
    switch (status) {
      case 'PENDING': return '15%';
      case 'PROCESSING': return '50%';
      case 'SHIPPED': return '85%';
      case 'DELIVERED': return '100%';
      default: return '0%';
    }
  }
}
