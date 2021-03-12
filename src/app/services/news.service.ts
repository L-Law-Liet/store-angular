import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BaseUrlsService as BaseUrl} from './base-urls.service';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  NEWS_URL = BaseUrl.URL + 'news';
  NEWS_PAGEABLE = this.NEWS_URL + '/pageable';

  constructor(private http: HttpClient) { }

  getNewsPageable(page?: any): Observable<any>{
    let param = '';
    if (page){
      param = '?page=' + page;
    }
    console.log(this.NEWS_PAGEABLE + param);
    return this.http.get(this.NEWS_PAGEABLE + param);
  }
  getNews(): Observable<any>{
    return this.http.get(this.NEWS_URL);
  }
}
