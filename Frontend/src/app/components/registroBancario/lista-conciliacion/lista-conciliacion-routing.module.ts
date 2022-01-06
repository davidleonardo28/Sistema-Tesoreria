import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaConciliacionComponent } from './lista-conciliacion.component';

const routes: Routes = [{
  
  path: '', component: ListaConciliacionComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListaConciliacionRoutingModule { }
