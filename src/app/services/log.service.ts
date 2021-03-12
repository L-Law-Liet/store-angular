import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LogService {

  constructor() { }

  log(message: any): void{
    console.log(new Date().toDateString()+':  ' + message);
  }
}
