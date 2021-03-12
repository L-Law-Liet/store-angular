import { Injectable } from '@angular/core';
import {SalePipe} from '../pipes/sale.pipe';

@Injectable({
  providedIn: 'root'
})
export class PipesService {

  constructor() { }
  sale(price: any, percent: any): number{
    return new SalePipe().transform(price, percent);
  }
}
