import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VerMovimientosRoutingModule } from './ver-movimientos-routing.module';
import { VerMovimientosComponent } from './ver-movimientos.component';
import { MaterialModule } from 'src/app/material.module';
import {MatNativeDateModule} from '@angular/material/core';


@NgModule({
  declarations: [
    VerMovimientosComponent
  ],
  imports: [
    CommonModule,
    VerMovimientosRoutingModule,
    MaterialModule,
    MatNativeDateModule
  ],
  providers: [],
  bootstrap: [VerMovimientosComponent]
})
export class VerMovimientosModule { }
