import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CuentasBancariasDOSRoutingModule } from './cuentas-bancarias-dos-routing.module';
import { CuentasBancariasDOSComponent } from './cuentas-bancarias-dos.component';
import { MaterialModule } from 'src/app/material.module';
import { MatTableModule } from '@angular/material/table'  


@NgModule({
  declarations: [
    CuentasBancariasDOSComponent
  ],
  imports: [
    CommonModule,
    CuentasBancariasDOSRoutingModule,MaterialModule, MatTableModule
  ]
})
export class CuentasBancariasDOSModule { }
