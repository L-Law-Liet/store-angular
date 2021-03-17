import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {BaseUrlsService as BaseUrl} from './base-urls.service';
import {UserService} from './user.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  CART_URL = BaseUrl.URL + 'users/';


  constructor(private http: HttpClient,
              private userService: UserService) { }

  getCart(): Observable<any>{
    return this.http.get(this.CART_URL + this.userService.user.id + '/carts');
  }

  addToCart(req: FormData): Observable<any>{
    return this.http.post(this.CART_URL + this.userService.user.id + '/carts', req);
  }
  removeFromCart(id: number): Observable<any>{
    return this.http.delete(this.CART_URL + this.userService.user.id + '/carts/' + id);
  }
  contains(id: number): Observable<any>{
    return this.http.get(this.CART_URL + this.userService.user.id + '/carts/' + id);
  }
}
