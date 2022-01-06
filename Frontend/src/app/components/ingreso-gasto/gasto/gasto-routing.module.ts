import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GastoComponent } from './gasto.component';

const routes: Routes = [{ path: '', component: GastoComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GastoRoutingModule { }
