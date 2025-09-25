import { Injectable } from '@angular/core';
import { IProduct } from '../models/iproduct';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_URLS } from '../constants/api_urls';

@Injectable({
  providedIn: 'root',
})
export class ProductServiceHttp {
  constructor(private httpClient: HttpClient) {}
  getProducts(): Observable<IProduct[]> {
    return this.httpClient.get<IProduct[]>(API_URLS.getAllProducts);
  }
  getDummyProducts(): Observable<IProduct[]> {
    return this.httpClient.get<IProduct[]>('https://dummyjson.com/products');
  }
  searchProducts(search: string): Observable<any> {
    return this.httpClient.get<any>(`${API_URLS.search}${search}`);
  }
}
