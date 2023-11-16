import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mypipe',
})
export class MyPipe implements PipeTransform {
  transform(value: any, gender: any) {
    if (gender == 'Male') {
      return 'Mr :' + value;
    } else {
      return 'Ms :' + value;
    }
  }
}
