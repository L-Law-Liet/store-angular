import { Injectable } from '@angular/core';
import {BaseUrlsService as BaseUrl} from './base-urls.service';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  CATEGORY_URL = BaseUrl.URL + 'category/';
  PRODUCT_URL = BaseUrl.URL + 'products';
  PRODUCTS_PAGEABLE = this.PRODUCT_URL + '/pageable';
  constructor(private http: HttpClient) { }

  getProductsByCategoryId(id: number): Observable<any>{
    return this.http.get(this.CATEGORY_URL + id + '/products');
  }
  getProduct(id: number): Observable<any>{
    return this.http.get(this.PRODUCT_URL + '/' + id);
  }
  getProducts(): Observable<any>{
    return this.http.get(this.PRODUCT_URL);
  }
  getProductsPageable(page?: any): Observable<any>{
    let param = '';
    if (page){
      param = '?page=' + page;
    }
    console.log(this.PRODUCTS_PAGEABLE + param);
    return this.http.get(this.PRODUCTS_PAGEABLE + param);
  }
}
