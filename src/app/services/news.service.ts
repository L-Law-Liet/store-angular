import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {BaseUrlsService as BaseUrl} from './base-urls.service';
import {Observable} from 'rxjs';
import {FormGroup} from '@angular/forms';

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
  getArticle(id: any): Observable<any>{
    return this.http.get(this.NEWS_URL + '/' + id);
  }
  removeArticle(id: number): Observable<any>{
    return this.http.delete(this.NEWS_URL + '/' + id);
  }
  addArticle(fd: FormData): Observable<any>{
    console.log('--', fd);
    return this.http.post(this.NEWS_URL, fd);
  }
  updateArticle(id: number, fd: FormData): Observable<any>{
    console.log(fd);
    return this.http.put(this.NEWS_URL + '/' + id, fd);
  }
}
