import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IngresoRoutingModule } from './ingreso-routing.module';
import { IngresoComponent } from './ingreso.component';


@NgModule({
  declarations: [
    IngresoComponent
  ],
  imports: [
    CommonModule,
    IngresoRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class IngresoModule { }
