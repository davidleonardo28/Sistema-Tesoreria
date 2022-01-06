import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConciliacionBancariaComponent } from './conciliacion-bancaria.component';

const routes: Routes = [{
  
  path: '', component: ConciliacionBancariaComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConciliacionBancariaRoutingModule { }
