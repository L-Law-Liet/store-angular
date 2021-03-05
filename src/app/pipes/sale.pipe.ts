import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sale'
})
export class SalePipe implements PipeTransform {

  transform(price: any, percent: any): any {
    return price * (100 - percent) / 100;
  }

}
