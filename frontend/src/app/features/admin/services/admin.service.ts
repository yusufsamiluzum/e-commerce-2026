import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';

// ─── Platform Dashboard ─────────────────────────────────────
export interface PlatformStats {
  totalUsers: number;
  totalIndividualUsers: number;
  totalCorporateUsers: number;
  totalStores: number;
  activeStores: number;
  pendingStores: number;
  suspendedStores: number;
  totalOrders: number;
  totalRevenue: number;
  suspendedUsers: number;
  totalProducts: number;
  totalCategories: number;
}

// ─── Kullanıcı Yönetimi ─────────────────────────────────────
export interface AdminUser {
  id: number;
  fullName: string;
  email: string;
  roleType: string;
  status: string;
  gender: string;
  createdAt: string;
}

// ─── Mağaza Yönetimi ────────────────────────────────────────
export interface AdminStore {
  id: number;
  name: string;
  description: string;
  status: string;
  baseCurrency: string;
  createdAt: string;
  ownerName: string;
  ownerEmail: string;
  totalProducts: number;
  activeProducts: number;
  totalOrders: number;
  totalRevenue: number;
  averageRating: number;
}

// ─── Kategori Yönetimi ──────────────────────────────────────
export interface AdminCategory {
  id: number;
  name: string;
  parentId: number | null;
  children: AdminCategory[];
}

// ─── Sistem Konfigürasyonu ──────────────────────────────────
export interface SystemConfigItem {
  id: number;
  configKey: string;
  configValue: string;
  isSecret: boolean;
  updatedAt: string;
}

// ─── Audit Log ──────────────────────────────────────────────
export interface AuditLogItem {
  id: number;
  userId: number;
  userName: string;
  actionPerformed: string;
  entityType: string;
  entityId: number;
  ipAddress: string;
  timestamp: string;
}

// ─── Sipariş Yönetimi ───────────────────────────────────────
export interface AdminOrder {
  id: number;
  userName: string;
  userEmail: string;
  storeName: string;
  storeId: number;
  status: string;
  totalPrice: number;
  orderDate: string;
  itemCount: number;
  shipmentStatus: string | null;
  trackingNumber: string | null;
  carrier: string | null;
}

// ─── İade Yönetimi ──────────────────────────────────────────
export interface AdminRefund {
  id: number;
  orderId: number;
  userName: string;
  userEmail: string;
  storeName: string;
  productName: string;
  refundAmount: number;
  reason: string;
  status: string;
  processedAt: string;
}

// ─── Gelir Trend ────────────────────────────────────────────
export interface RevenueTrendItem {
  date: string;
  revenue: number;
  orderCount: number;
}

// ─── Yorum Moderasyonu ──────────────────────────────────────
export interface AdminReview {
  id: number;
  userName: string;
  userEmail: string;
  productName: string;
  storeName: string;
  starRating: number;
  sentiment: string;
  reviewText: string;
  helpfulVotes: number;
  totalVotes: number;
  createdAt: string;
}

// ─── Spring Page Response ───────────────────────────────────
export interface PageResponse<T> {
  content: T[];
  totalElements: number;
  totalPages: number;
  number: number;
  size: number;
  first: boolean;
  last: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  private http = inject(HttpClient);
  private baseUrl = `${environment.apiUrl}/api/admin`;

  // ─── Platform Dashboard ─────────────────────────────────────

  getDashboard(): Observable<PlatformStats> {
    return this.http.get<PlatformStats>(`${this.baseUrl}/dashboard`);
  }

  getRevenueTrend(days = 30): Observable<any[]> {
    const params = new HttpParams().set('days', days);
    return this.http.get<any[]>(`${this.baseUrl}/dashboard/revenue-trend`, { params });
  }

  // ─── Kullanıcı Yönetimi ─────────────────────────────────────

  getAllUsers(page = 0, size = 20): Observable<PageResponse<AdminUser>> {
    const params = new HttpParams().set('page', page).set('size', size);
    return this.http.get<PageResponse<AdminUser>>(`${this.baseUrl}/users`, { params });
  }

  updateUserStatus(userId: number, status: string): Observable<AdminUser> {
    return this.http.patch<AdminUser>(`${this.baseUrl}/users/${userId}/status`, { status });
  }

  // ─── Mağaza Yönetimi ────────────────────────────────────────

  getAllStores(page = 0, size = 20): Observable<PageResponse<AdminStore>> {
    const params = new HttpParams().set('page', page).set('size', size);
    return this.http.get<PageResponse<AdminStore>>(`${this.baseUrl}/stores`, { params });
  }

  getStoreDetail(storeId: number): Observable<AdminStore> {
    return this.http.get<AdminStore>(`${this.baseUrl}/stores/${storeId}`);
  }

  updateStoreStatus(storeId: number, status: string): Observable<AdminStore> {
    return this.http.patch<AdminStore>(`${this.baseUrl}/stores/${storeId}/status`, { status });
  }

  getStoreComparison(): Observable<AdminStore[]> {
    return this.http.get<AdminStore[]>(`${this.baseUrl}/stores/comparison`);
  }

  // ─── Sipariş Yönetimi ───────────────────────────────────────

  getAllOrders(page = 0, size = 20, status?: string): Observable<PageResponse<AdminOrder>> {
    let params = new HttpParams().set('page', page).set('size', size);
    if (status) {
      params = params.set('status', status);
    }
    return this.http.get<PageResponse<AdminOrder>>(`${this.baseUrl}/orders`, { params });
  }

  updateOrderStatus(orderId: number, status: string): Observable<AdminOrder> {
    return this.http.patch<AdminOrder>(`${this.baseUrl}/orders/${orderId}/status`, { status });
  }

  // ─── İade Yönetimi ───────────────────────────────────────────

  getAllRefunds(page = 0, size = 20, status?: string): Observable<PageResponse<AdminRefund>> {
    let params = new HttpParams().set('page', page).set('size', size);
    if (status) {
      params = params.set('status', status);
    }
    return this.http.get<PageResponse<AdminRefund>>(`${this.baseUrl}/refunds`, { params });
  }

  updateRefundStatus(refundId: number, status: string): Observable<AdminRefund> {
    return this.http.patch<AdminRefund>(`${this.baseUrl}/refunds/${refundId}/status`, { status });
  }

  // ─── Kategori Yönetimi ──────────────────────────────────────

  getAllCategories(): Observable<AdminCategory[]> {
    return this.http.get<AdminCategory[]>(`${this.baseUrl}/categories`);
  }

  createCategory(name: string, parentId?: number): Observable<AdminCategory> {
    return this.http.post<AdminCategory>(`${this.baseUrl}/categories`, { name, parentId: parentId ?? null });
  }

  updateCategory(categoryId: number, name: string): Observable<AdminCategory> {
    return this.http.put<AdminCategory>(`${this.baseUrl}/categories/${categoryId}`, { name });
  }

  deleteCategory(categoryId: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/categories/${categoryId}`);
  }

  // ─── Sistem Konfigürasyonu ──────────────────────────────────

  getAllConfigs(): Observable<SystemConfigItem[]> {
    return this.http.get<SystemConfigItem[]>(`${this.baseUrl}/config`);
  }

  updateConfig(configId: number, value: string): Observable<SystemConfigItem> {
    return this.http.put<SystemConfigItem>(`${this.baseUrl}/config/${configId}`, { value });
  }

  // ─── Audit Log ──────────────────────────────────────────────

  getAuditLogs(page = 0, size = 20, entityType?: string): Observable<PageResponse<AuditLogItem>> {
    let params = new HttpParams().set('page', page).set('size', size);
    if (entityType) {
      params = params.set('entityType', entityType);
    }
    return this.http.get<PageResponse<AuditLogItem>>(`${this.baseUrl}/audit-logs`, { params });
  }

  // ─── Yorum Moderasyonu ──────────────────────────────────────

  getAllReviews(page = 0, size = 20, sentiment?: string): Observable<PageResponse<AdminReview>> {
    let params = new HttpParams().set('page', page).set('size', size);
    if (sentiment) {
      params = params.set('sentiment', sentiment);
    }
    return this.http.get<PageResponse<AdminReview>>(`${this.baseUrl}/reviews`, { params });
  }

  deleteReview(reviewId: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/reviews/${reviewId}`);
  }

  // ─── CSV Export ─────────────────────────────────────────────

  exportCsv(type: 'users' | 'orders' | 'stores'): void {
    this.http.get(`${this.baseUrl}/export/${type}`, { responseType: 'blob' }).subscribe(blob => {
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `${type}.csv`;
      a.click();
      window.URL.revokeObjectURL(url);
    });
  }
}
