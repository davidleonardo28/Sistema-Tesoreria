import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConciliacionBancariaRoutingModule } from './conciliacion-bancaria-routing.module';
import { ConciliacionBancariaComponent } from './conciliacion-bancaria.component';
import { MaterialModule } from 'src/app/material.module';
import { MatTableModule } from '@angular/material/table'  

@NgModule({
  declarations: [
    ConciliacionBancariaComponent
  ],
  imports: [
    CommonModule,
    ConciliacionBancariaRoutingModule, MaterialModule, MatTableModule
  ]
})
export class ConciliacionBancariaModule { }
