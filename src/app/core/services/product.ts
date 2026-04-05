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
  getProducts(search?: string, category?: string): Observable<Product[]> {
    let params = new HttpParams();
    if (search) params = params.set('search', search);
    if (category) params = params.set('category', category);

    return this.http.get<Product[]>(this.apiUrl, { params });
  }

  // Fetch a single product for the details page
  getProductById(id: number): Observable<Product> {
    return this.http.get<Product>(`${this.apiUrl}/${id}`);
  }
}
