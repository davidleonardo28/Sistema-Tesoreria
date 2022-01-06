import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarCuentaComponent } from './agregar-cuenta.component';

const routes: Routes = [{ path: '', component: AgregarCuentaComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AgregarCuentaRoutingModule { }
