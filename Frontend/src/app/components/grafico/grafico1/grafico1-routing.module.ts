import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Grafico1Component } from './grafico1.component';

const routes: Routes = [{ path: '', component: Grafico1Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Grafico1RoutingModule { }
