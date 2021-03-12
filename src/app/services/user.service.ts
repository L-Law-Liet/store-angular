import { Injectable } from '@angular/core';
import {BaseUrlsService as BaseUrl} from './base-urls.service';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '../models/user.model';
import {map, mergeMap, switchMap, tap} from 'rxjs/operators';
import {Router} from '@angular/router';
import {LogService} from './log.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  // @ts-ignore
  user: User;
  LOGIN_URL = BaseUrl.URL + 'login';
  AUTH = BaseUrl.URL + 'auth';
  REGISTER_URL = BaseUrl.URL + 'register';
  SET_AVATAR = BaseUrl.URL + 'user/avatar/';
  USERS_URL = BaseUrl.URL + 'users/';

  constructor(private http: HttpClient,
              private router: Router,
              private logger: LogService) { }

  login(user: any): Observable<{token: string}>{
    return this.http.post<{token: string}>(this.LOGIN_URL, user).pipe(
      tap(
        ({token}) => {
          console.log('serv', token);
          this.setToken(token);
          this.getUser();
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
          this.getUser();
        },
        error => {
          this.logger.log(error);
        }
      )
    );
  }
  getUser(): Observable<any>{
    // @ts-ignore
    return this.http.post(this.AUTH);
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
}
