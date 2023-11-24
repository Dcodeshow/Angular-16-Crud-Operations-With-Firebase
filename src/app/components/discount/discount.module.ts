import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DiscountComponent } from './discount.component';
import { FormsModule } from '@angular/forms';
import { SharemoduleModule } from 'src/app/sharemodule/sharemodule.module';

@NgModule({
  declarations: [DiscountComponent],
  imports: [CommonModule, FormsModule, SharemoduleModule, SharemoduleModule],
})
export class DiscountModule {
  constructor() {
    console.log('Discount Module');
  }
}
