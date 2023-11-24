import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products.component';
import { SharemoduleModule } from 'src/app/sharemodule/sharemodule.module';

@NgModule({
  declarations: [ProductsComponent],
  imports: [CommonModule, SharemoduleModule],
})
export class ProductsModule {
  constructor() {
    console.log('Products Module');
  }
}
