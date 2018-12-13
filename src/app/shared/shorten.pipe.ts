import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'shorten'
})

export class ShortenPipe implements PipeTransform {

  transform(value: any, limit = 10): any {
    if (value.length < limit) {
      return value;
    } else {
      return value.substr(0, limit) + '...';
    }
  }
}
