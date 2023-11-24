import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManageuserComponent } from './manageuser.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from 'src/app/app.routing.module';
import { SharemoduleModule } from 'src/app/sharemodule/sharemodule.module';

@NgModule({
  declarations: [ManageuserComponent],
  imports: [CommonModule, FormsModule, SharemoduleModule],
})
export class ManageuserModule {
  constructor() {
    console.log('Manageuser Module');
  }
}
