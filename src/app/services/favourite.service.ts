import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {BaseUrlsService as BaseUrl} from './base-urls.service';
import {UserService} from './user.service';

@Injectable({
  providedIn: 'root'
})
export class FavouriteService {
  FAVOURITE_URL = BaseUrl.URL + 'users/';

  constructor(private http: HttpClient,
              private userService: UserService) { }

  getFavourites(): Observable<any>{
    return this.http.get(this.FAVOURITE_URL + this.userService.user.id + '/favourites');
  }

  addToFavourites(req: FormData): Observable<any>{
    return this.http.post(this.FAVOURITE_URL + this.userService.user.id + '/favourites', req);
  }
  removeFromFavourites(id: number): Observable<any>{
    return this.http.delete(this.FAVOURITE_URL + this.userService.user.id + '/favourites/' + id);
  }
  contains(id: number): Observable<any>{
    return this.http.get(this.FAVOURITE_URL + this.userService.user.id + '/favourites/' + id);
  }
}
