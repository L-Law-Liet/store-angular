import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {BaseUrlsService as BaseUrl} from './base-urls.service';
import {Feedback} from '../models/feedback.model';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {
  PRODUCT_URL = BaseUrl.URL + 'products/'
  ACCESS_URL = BaseUrl.URL + 'user/'
  FEEDBACK_URL = BaseUrl.URL + 'feedbacks'

  constructor(private http: HttpClient) { }

  getFeedbacks(id: number): Observable<any>{
    return this.http.get(this.PRODUCT_URL + id + '/feedbacks');
  }
  hasAccess(userId: number, productId: number): Observable<any>{
    return this.http.get(this.ACCESS_URL + userId + '/products/' + productId);
  }
  addFeedback(feedback: FormData): Observable<any>{
    return this.http.post(this.FEEDBACK_URL, feedback);
  }
}
