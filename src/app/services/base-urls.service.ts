import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BaseUrlsService {
  public static URL = 'http://store.loc/api/';
  constructor() { }
}
