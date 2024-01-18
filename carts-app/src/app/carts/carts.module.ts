import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartsRoutingModule } from './carts-routing.module';
import { CartsComponent } from './carts.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    CartsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    CartsRoutingModule
  ]
})
export class CartsModule { }
