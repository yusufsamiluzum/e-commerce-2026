import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { OrderService, Order } from '../../../../core/services/order.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-order-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="max-w-4xl mx-auto p-4">
      <h1 class="text-2xl font-bold text-gray-900 mb-6">Siparişlerim</h1>
      
      @if (orders$ | async; as orders) {
        @if (orders.length === 0) {
          <div class="text-center py-10 bg-gray-50 rounded-lg">
            <p class="text-gray-500">Henüz siparişiniz bulunmuyor.</p>
            <a routerLink="/catalog" class="mt-4 inline-block text-blue-600 hover:underline">Alışverişe Başla</a>
          </div>
        } @else {
          <div class="space-y-4">
            @for (order of orders; track order.id) {
              <div class="bg-white border border-gray-200 shadow-sm rounded-lg p-5 flex flex-col sm:flex-row justify-between items-start sm:items-center hover:shadow-md transition-shadow">
                <div>
                  <h3 class="text-lg font-semibold text-gray-800">Sipariş #{{ order.id }}</h3>
                  <p class="text-sm text-gray-500">{{ order.orderDate | date:'dd.MM.yyyy HH:mm' }}</p>
                  <p class="text-sm text-gray-600 mt-1">Mağaza: {{ order.storeName }}</p>
                </div>
                <div class="mt-4 sm:mt-0 text-right">
                  <p class="text-xl font-bold text-gray-900">{{ order.totalPrice | currency:'TRY':'symbol':'1.2-2' }}</p>
                  <span class="inline-block mt-2 px-3 py-1 text-xs font-semibold rounded-full"
                    [class.bg-yellow-100]="order.status === 'PENDING' || order.status === 'PROCESSING'"
                    [class.text-yellow-800]="order.status === 'PENDING' || order.status === 'PROCESSING'"
                    [class.bg-blue-100]="order.status === 'SHIPPED'"
                    [class.text-blue-800]="order.status === 'SHIPPED'"
                    [class.bg-green-100]="order.status === 'DELIVERED'"
                    [class.text-green-800]="order.status === 'DELIVERED'"
                    [class.bg-red-100]="order.status === 'CANCELLED'"
                    [class.text-red-800]="order.status === 'CANCELLED'">
                    {{ order.status }}
                  </span>
                </div>
                <div class="mt-4 sm:mt-0 sm:ml-4">
                  <a [routerLink]="['/profile/orders', order.id]" class="block w-full sm:w-auto text-center bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
                    Detayları Gör
                  </a>
                </div>
              </div>
            }
          </div>
        }
      } @else {
        <div class="space-y-4">
          @for (i of [1, 2, 3]; track i) {
            <div class="bg-white border shadow-sm rounded-lg p-5 animate-pulse flex flex-col sm:flex-row justify-between">
              <div class="space-y-2 w-1/3">
                <div class="h-5 bg-gray-200 rounded w-1/2"></div>
                <div class="h-4 bg-gray-200 rounded w-3/4"></div>
              </div>
              <div class="w-24 h-10 bg-gray-200 rounded mt-4 sm:mt-0"></div>
            </div>
          }
        </div>
      }
    </div>
  `
})
export class OrderListComponent implements OnInit {
  orderService = inject(OrderService);
  orders$!: Observable<Order[]>;

  ngOnInit() {
    this.orders$ = this.orderService.getUserOrders();
  }
}
