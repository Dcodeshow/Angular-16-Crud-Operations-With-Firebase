import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mypipe',
})
export class MyPipe implements PipeTransform {
  transform(value: any) {
    return value.toUpperCase();
  }
}
