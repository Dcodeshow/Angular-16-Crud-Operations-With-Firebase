import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { CustomcolorDirective } from './customcolor.directive';
import { CardComponent } from './components/card/card.component';
import { MyservicesService } from './appServices/myservices.service';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveformComponent } from './components/reactiveform/reactiveform.component';

import { AppRoutingModule } from './app.routing.module';

import { ManageuserModule } from './components/manageuser/manageuser.module';

@NgModule({
  declarations: [
    AppComponent,
    CustomcolorDirective,
    CardComponent,
    ReactiveformComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule,
    ManageuserModule,
  ],
  providers: [MyservicesService],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor() {
    console.log('AppModule');
  }
}
