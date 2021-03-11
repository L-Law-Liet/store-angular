import { Injectable } from '@angular/core';
import {BaseUrlsService as BaseUrl} from './base-urls.service';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '../models/user.model';
import {map, mergeMap, switchMap, tap} from 'rxjs/operators';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  // @ts-ignore
  user: User;
  LOGIN_URL = BaseUrl.URL + 'login';
  USER = BaseUrl.URL + 'user';
  REGISTER_URL = BaseUrl.URL + 'register';
  constructor(private http: HttpClient, private router: Router) { }

  login(user: any): Observable<{token: string}>{
    return this.http.post<{token: string}>(this.LOGIN_URL, user).pipe(
      tap(
        ({token}) => {
          console.log('serv', token);
          this.setToken(token);
          this.getUser();
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
          this.getUser();
        }
      )
    );
  }
  getUser(): Observable<any>{
    // @ts-ignore
    return this.http.post(this.USER);
  }
  logout(): void{
    localStorage.removeItem('token');
    // @ts-ignore
    this.user = null;
    this.router.navigate(['/']);
  }
  isAuth(): boolean{
    return !!localStorage.getItem('token');
  }
  getToken(): any {
    localStorage.getItem('token');
  }

  // tslint:disable-next-line:typedef
  setToken(token: any) {
    localStorage.setItem('token', token);
  }
  setUser(user: User){
    this.user = user;
  }
}
