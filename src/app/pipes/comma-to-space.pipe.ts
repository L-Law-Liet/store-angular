import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'commaToSpace'
})
export class CommaToSpacePipe implements PipeTransform {

  transform(value: any): any {
    return value.replace(/,/gi, ' ');
  }

}
