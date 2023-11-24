import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyPipe } from '../pipes/mypipes.pipe';

@NgModule({
  declarations: [MyPipe],
  imports: [CommonModule],
  exports: [MyPipe],
})
export class SharemoduleModule {
  constructor() {
    console.log('Share Module');
  }
}
