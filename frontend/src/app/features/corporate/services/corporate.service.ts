import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface StoreDto {
  id: number;
  name: string;
  description: string;
  status: string;
  baseCurrency: string;
  createdAt: string;
}

export interface StoreRequest {
  name: string;
  description: string;
  baseCurrency: string;
}

export interface StoreDashboardResponse {
  totalRevenue: number;
  totalOrders: number;
  averageOrderValue: number;
  activeProducts: number;
  lowStockProducts: number;
  pendingOrders: number;
  processingOrders: number;
  shippedOrders: number;
  deliveredOrders: number;
  cancelledOrders: number;
  averageRating: number;
  totalReviews: number;
}

export interface ProductImage {
  id: number;
  productId: number;
  imageUrl: string;
  altText: string;
  displayOrder: number;
  isPrimary: boolean;
}

export interface CorporateProduct {
  id: number;
  sku: string;
  name: string;
  description: string;
  unitPrice: number;
  originalPrice: number;
  stockQuantity: number;
  categoryId: number;
  categoryName: string;
  imageUrl: string;
  averageRating: number;
  reviewCount: number;
  isFeatured: boolean;
  isActive: boolean;
  createdAt: string;
  images: ProductImage[];
}

export interface ProductRequest {
  sku: string;
  name: string;
  description: string;
  unitPrice: number;
  originalPrice?: number;
  stockQuantity: number;
  categoryId?: number;
  isFeatured?: boolean;
}

export interface Category {
  id: number;
  name: string;
  parent: Category | null;
  subCategories: Category[];
}

export interface OrderItem {
  id: number;
  productName: string;
  productSku: string;
  quantity: number;
  unitPrice: number;
  totalPrice: number;
}

export interface CorporateOrder {
  id: number;
  customerName: string;
  customerEmail: string;
  status: string;
  totalPrice: number;
  orderDate: string;
  items: OrderItem[];
}

export interface InventoryItem {
  productId: number;
  productName: string;
  sku: string;
  categoryName: string;
  stockQuantity: number;
  unitPrice: number;
  isActive: boolean;
  stockStatus: 'OK' | 'LOW' | 'OUT_OF_STOCK';
}

export interface TopProduct {
  productName: string;
  sku: string;
  totalQuantitySold: number;
  totalRevenue: number;
}

export interface StatusCount {
  status: string;
  count: number;
}

export interface DailyRevenue {
  date: string;
  revenue: number;
  orderCount: number;
}

export interface SalesAnalyticsResponse {
  totalRevenue: number;
  totalOrders: number;
  totalProductsSold: number;
  topProducts: TopProduct[];
  statusDistribution: StatusCount[];
  dailyRevenue: DailyRevenue[];
}

export interface CitySegment {
  city: string;
  count: number;
}

export interface MembershipSegment {
  membershipType: string;
  count: number;
}

export interface TopCustomer {
  customerName: string;
  email: string;
  city: string;
  membershipType: string;
  totalOrders: number;
  totalSpent: number;
}

export interface CustomerSegmentationResponse {
  totalCustomers: number;
  byCity: CitySegment[];
  byMembership: MembershipSegment[];
  topCustomers: TopCustomer[];
}

export interface StoreReview {
  id: number;
  customerName: string;
  productName: string;
  productSku: string;
  starRating: number;
  sentiment: string;
  reviewText: string;
  helpfulVotes: number;
  totalVotes: number;
  ownerReply: string | null;
  replyDate: string | null;
  createdAt: string;
}

// ─── İade Yönetimi ──────────────────────────────────────
export interface StoreRefund {
  id: number;
  orderId: number;
  customerName: string;
  customerEmail: string;
  productName: string;
  refundAmount: number;
  reason: string;
  status: string;
  processedAt: string;
}

@Injectable({
  providedIn: 'root'
})
export class CorporateService {
  private http = inject(HttpClient);
  private baseUrl = 'http://localhost:8080/api/corporate';

  // ─── Mağaza ────────────────────────────────────────────

  createStore(request: StoreRequest): Observable<StoreDto> {
    return this.http.post<StoreDto>(`${this.baseUrl}/store`, request);
  }

  getMyStore(): Observable<StoreDto> {
    return this.http.get<StoreDto>(`${this.baseUrl}/store`);
  }

  updateStore(request: StoreRequest): Observable<StoreDto> {
    return this.http.put<StoreDto>(`${this.baseUrl}/store`, request);
  }

  // ─── Dashboard ─────────────────────────────────────────

  getDashboard(): Observable<StoreDashboardResponse> {
    return this.http.get<StoreDashboardResponse>(`${this.baseUrl}/dashboard`);
  }

  // ─── Ürün Kataloğu ────────────────────────────────────

  getMyProducts(): Observable<CorporateProduct[]> {
    return this.http.get<CorporateProduct[]>(`${this.baseUrl}/products`);
  }

  getProductDetail(id: number): Observable<CorporateProduct> {
    return this.http.get<CorporateProduct>(`${this.baseUrl}/products/${id}`);
  }

  createProduct(request: ProductRequest): Observable<CorporateProduct> {
    return this.http.post<CorporateProduct>(`${this.baseUrl}/products`, request);
  }

  updateProduct(id: number, request: ProductRequest): Observable<CorporateProduct> {
    return this.http.put<CorporateProduct>(`${this.baseUrl}/products/${id}`, request);
  }

  deactivateProduct(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/products/${id}`);
  }

  reactivateProduct(id: number): Observable<void> {
    return this.http.patch<void>(`${this.baseUrl}/products/${id}/reactivate`, {});
  }

  // ─── Kategoriler ──────────────────────────────────────

  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(`${this.baseUrl}/categories`);
  }

  // ─── Sipariş Yönetimi ─────────────────────────────────

  getStoreOrders(status?: string): Observable<CorporateOrder[]> {
    const params = status ? `?status=${status}` : '';
    return this.http.get<CorporateOrder[]>(`${this.baseUrl}/orders${params}`);
  }

  getStoreOrdersByDate(date: string): Observable<CorporateOrder[]> {
    return this.http.get<CorporateOrder[]>(`${this.baseUrl}/orders?date=${date}`);
  }

  updateOrderStatus(orderId: number, status: string): Observable<CorporateOrder> {
    return this.http.patch<CorporateOrder>(`${this.baseUrl}/orders/${orderId}/status`, { status });
  }

  // ─── Envanter Yönetimi ────────────────────────────────

  getInventory(): Observable<InventoryItem[]> {
    return this.http.get<InventoryItem[]>(`${this.baseUrl}/inventory`);
  }

  updateStock(productId: number, quantity: number): Observable<InventoryItem> {
    return this.http.patch<InventoryItem>(`${this.baseUrl}/inventory/${productId}/stock`, { quantity });
  }

  // ─── Satış Analitiği ──────────────────────────────────

  getSalesAnalytics(startDate?: string, endDate?: string): Observable<SalesAnalyticsResponse> {
    let params = '';
    if (startDate && endDate) {
      params = `?startDate=${startDate}&endDate=${endDate}`;
    }
    return this.http.get<SalesAnalyticsResponse>(`${this.baseUrl}/analytics${params}`);
  }

  // ─── Müşteri Segmentasyonu ────────────────────────────

  getCustomerSegmentation(): Observable<CustomerSegmentationResponse> {
    return this.http.get<CustomerSegmentationResponse>(`${this.baseUrl}/customers`);
  }

  // ─── Yorum Yönetimi ───────────────────────────────────

  getStoreReviews(): Observable<StoreReview[]> {
    return this.http.get<StoreReview[]>(`${this.baseUrl}/reviews`);
  }

  replyToReview(reviewId: number, reply: string): Observable<StoreReview> {
    return this.http.put<StoreReview>(`${this.baseUrl}/reviews/${reviewId}/reply`, { reply });
  }

  deleteReply(reviewId: number): Observable<StoreReview> {
    return this.http.delete<StoreReview>(`${this.baseUrl}/reviews/${reviewId}/reply`);
  }

  // ─── İade Yönetimi ─────────────────────────────────────

  getStoreRefunds(status?: string): Observable<StoreRefund[]> {
    const params = status ? `?status=${status}` : '';
    return this.http.get<StoreRefund[]>(`${this.baseUrl}/refunds${params}`);
  }

  respondToRefund(refundId: number, status: string): Observable<StoreRefund> {
    return this.http.patch<StoreRefund>(`${this.baseUrl}/refunds/${refundId}/status`, { status });
  }
}
