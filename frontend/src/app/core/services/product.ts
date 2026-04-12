import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../../shared/models/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private http = inject(HttpClient);
  // Point this to your Spring Boot API URL
  private apiUrl = 'http://localhost:8080/api/products';

  // Fetch all products, optionally passing search/filter params
  getProducts(filters: any = {}): Observable<Product[]> {
    let params = new HttpParams();
    if (filters.search) params = params.set('search', filters.search);
    if (filters.categoryId) params = params.set('categoryId', filters.categoryId);
    if (filters.minPrice) params = params.set('minPrice', filters.minPrice);
    if (filters.maxPrice) params = params.set('maxPrice', filters.maxPrice);
    if (filters.sort) params = params.set('sort', filters.sort);

    return this.http.get<Product[]>(this.apiUrl, { params });
  }

  getCategories(): Observable<any[]> {
    return this.http.get<any[]>('http://localhost:8080/api/categories/tree');
  }

  // Fetch a single product for the details page
  getProductById(id: number): Observable<Product> {
    return this.http.get<Product>(`${this.apiUrl}/${id}`);
  }
}
