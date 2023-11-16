import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { DiscountComponent } from './components/discount/discount.component';
import { CustomcolorDirective } from './customcolor.directive';
import { Routes, RouterModule } from '@angular/router';
import { CardComponent } from './components/card/card.component';
import { MyservicesService } from './appServices/myservices.service';
import { HttpClientModule } from '@angular/common/http';
import { MyPipe } from './pipes/mypipes.pipe';
import { ProductsComponent } from './components/products/products.component';
import { ReactiveformComponent } from './components/reactiveform/reactiveform.component';
import { ManageuserComponent } from './components/manageuser/manageuser.component';

const routes: Routes = [
  {
    path: 'discount/:id',
    component: DiscountComponent,
  },
];

@NgModule({
  declarations: [
    AppComponent,
    DiscountComponent,
    CustomcolorDirective,
    CardComponent,
    MyPipe,
    ProductsComponent,
    ReactiveformComponent,
    ManageuserComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [MyservicesService],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor() {
    console.log('AppModule');
  }
}
