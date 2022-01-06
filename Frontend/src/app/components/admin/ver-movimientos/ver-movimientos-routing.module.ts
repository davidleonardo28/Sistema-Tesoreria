import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VerMovimientosComponent } from './ver-movimientos.component';

const routes: Routes = [{ path: '', component: VerMovimientosComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VerMovimientosRoutingModule { }
