import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IngresoRoutingModule } from './ingreso-routing.module';
import { IngresoComponent } from './ingreso.component';


@NgModule({
  declarations: [
    IngresoComponent
  ],
  imports: [
    CommonModule,
    IngresoRoutingModule
  ]
})
export class IngresoModule { }
