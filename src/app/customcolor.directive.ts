import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appCustomcolor]',
})
export class CustomcolorDirective {
  constructor(private el: ElementRef) {
    el.nativeElement.classList.add('bg-danger');
  }
}
