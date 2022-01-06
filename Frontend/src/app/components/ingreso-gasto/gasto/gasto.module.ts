import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GastoRoutingModule } from './gasto-routing.module';
import { GastoComponent } from './gasto.component';


@NgModule({
  declarations: [
    GastoComponent
  ],
  imports: [
    CommonModule,
    GastoRoutingModule
  ]
})
export class GastoModule { }
