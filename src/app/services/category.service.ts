import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { BaseUrlsService as BaseUrl } from './base-urls.service';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  CATEGORY_URL = BaseUrl.URL + 'categories';
  constructor(private http: HttpClient) {  }

  getCategories(): Observable<any>{
    return this.http.get(this.CATEGORY_URL);
  }

}
