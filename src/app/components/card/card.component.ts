import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input() Title!: string;
  @Output() abc: any = new EventEmitter<any>();

  onclick() {
    this.abc.emit('Hello');
  }
}
