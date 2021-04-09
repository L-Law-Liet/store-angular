import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { BaseUrlsService as BaseUrl } from './base-urls.service';
import {Category} from '../models/category.model';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  CATEGORY_URL = BaseUrl.URL + 'categories';

  public categories: Category[] = [];

  constructor(private http: HttpClient) {  }

  updateCategories(): void{
     this.http.get<Category[]>(this.CATEGORY_URL).subscribe(
       (res) => {
        this.categories = res;
      }
    );
  }

  addCategory(fd: FormData): Observable<any>{
    return this.http.post(this.CATEGORY_URL, fd);
  }

  updateCategory(id: number, fd: FormData): Observable<any>{
    console.log(fd);
    return this.http.put(this.CATEGORY_URL + '/' + id, fd);
  }
  removeCategory(id: number): Observable<any>{
    return this.http.delete(this.CATEGORY_URL + `/${id}`);
  }
  getCategory(id: any): Observable<any>{
    return this.http.get(this.CATEGORY_URL + `/${id}`);
  }
}
