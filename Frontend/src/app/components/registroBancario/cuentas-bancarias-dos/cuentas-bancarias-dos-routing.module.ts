import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CuentasBancariasDOSComponent } from './cuentas-bancarias-dos.component';

const routes: Routes = [{ path: '', component: CuentasBancariasDOSComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CuentasBancariasDOSRoutingModule { }
