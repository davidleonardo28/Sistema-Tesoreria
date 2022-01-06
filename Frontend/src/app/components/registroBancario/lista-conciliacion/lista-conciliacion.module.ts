import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListaConciliacionRoutingModule } from './lista-conciliacion-routing.module';
import { ListaConciliacionComponent } from './lista-conciliacion.component';
import { MaterialModule } from 'src/app/material.module';
import { MatTableModule } from '@angular/material/table'
  


@NgModule({
  declarations: [
    ListaConciliacionComponent
  ],
  imports: [
    CommonModule,
    ListaConciliacionRoutingModule,MaterialModule,MatTableModule
  ]
})
export class ListaConciliacionModule { }
