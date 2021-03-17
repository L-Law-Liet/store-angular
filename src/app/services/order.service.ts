import { Injectable } from '@angular/core';
import {BaseUrlsService as BaseUrl} from './base-urls.service';
import {HttpClient} from '@angular/common/http';
import {UserService} from './user.service';
import {Observable} from 'rxjs';
import {Product} from '../models/product.model';
import {Cart} from '../models/cart.model';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  ORDER_URL = BaseUrl.URL + 'user/';

  constructor(private http: HttpClient,
              private userService: UserService) { }

  makeOrder(total: number, cart: Cart[]): Observable<any>{
    let fd = new FormData();
    // @ts-ignore
    fd.append('total', total);
    // @ts-ignore
    fd.append('cart', JSON.stringify(cart));
    return this.http.post(this.ORDER_URL + this.userService.user.id + '/order', fd);
  }

  getOrderItems(): Observable<any>{
    return this.http.get(this.ORDER_URL + this.userService.user.id + '/order');
  }
}
