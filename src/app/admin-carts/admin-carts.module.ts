import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminCartComponent } from './components/admin-cart/admin-cart.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    AdminCartComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
  ]
})
export class AdminCartsModule { }
