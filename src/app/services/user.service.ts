import { Injectable } from '@angular/core';
import {BaseUrlsService as BaseUrl} from './base-urls.service';
import {HttpClient} from '@angular/common/http';
import {Observable, Subject} from 'rxjs';
import {User} from '../models/user.model';
import {map, mergeMap, switchMap, tap} from 'rxjs/operators';
import {Router} from '@angular/router';
import {LogService} from './log.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  LOGIN_URL = BaseUrl.URL + 'login';
  AUTH = BaseUrl.URL + 'auth';
  REGISTER_URL = BaseUrl.URL + 'register';
  SET_AVATAR = BaseUrl.URL + 'user/avatar/';
  SET_BALANCE = BaseUrl.URL + 'user/bill/';
  USERS_URL = BaseUrl.URL + 'users/';


  // @ts-ignore
  user: User;

  constructor(private http: HttpClient,
              private router: Router,
              private logger: LogService) { }

  login(user: any): Observable<{token: string}>{
    return this.http.post<{token: string}>(this.LOGIN_URL, user).pipe(
      tap(
        ({token}) => {
          console.log('serv', token);
          this.setToken(token);
          this.updateUser();
        },
        error => {
          this.logger.log(error);
        }
      )
    );
  }
  register(user: any): Observable<{token: string}>{
    console.log(user);
    // @ts-ignore
    return this.http.post<{token: string}>(this.REGISTER_URL, user).pipe(
      tap(
        ({token}) => {
          console.log('serv', token);
          this.setToken(token);
          this.updateUser();
        },
        error => {
          this.logger.log(error);
        }
      )
    );
  }
  updateUser(): void{
    // @ts-ignore
    this.http.post(this.AUTH).subscribe(
      res => {
        // @ts-ignore
        this.setUser(res);
      }
    );
  }
  logout(): void{
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    // @ts-ignore
    this.user = null;
    this.router.navigate(['/']);
  }
  isAuth(): boolean{
    return !!localStorage.getItem('user');
  }
  getToken(): any {
    localStorage.getItem('token');
  }

  // tslint:disable-next-line:typedef
  setToken(token: any) {
    localStorage.setItem('token', token);
  }
  setUser(user: User){
    this.user = user
    console.log('set', user);
    localStorage.removeItem('user');
    // @ts-ignore
    localStorage.setItem('user', JSON.stringify(user));
  }
  getUser(){
    // @ts-ignore
    return JSON.parse(localStorage.getItem('user'));
  }
  setAvatar(image: File): Observable<any>{
    let fd = new FormData();
    fd.append('image', image);
    console.log(fd);
    return this.http.post(this.SET_AVATAR + this.user.id, fd);
  }

  updateProfile(user: User){
    console.log(user);
    return this.http.put(this.USERS_URL + this.user.id, user);
  }

  topUpBalance(balance: number): Observable<any>{
    let fd = new FormData();
    // @ts-ignore
    fd.append('bill', balance);
    return this.http.post(this.SET_BALANCE + this.user.id, fd);
  }
}
