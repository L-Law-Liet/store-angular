import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BaseUrlsService {
  public static URL = 'http://store.loc/api/';
  public static AUTH_URL = 'http://store.loc/';
  constructor() { }
}
