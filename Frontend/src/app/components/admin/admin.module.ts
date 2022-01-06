import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { MaterialModule } from 'src/app/material.module';
import {MatNativeDateModule} from '@angular/material/core';
import { VerUsuariosComponent } from './ver-usuarios/ver-usuarios.component';
//import {TableComponent} from '../../../shared/components/table/table.component';


@NgModule({
  declarations: [
    AdminComponent
    
  ],
  imports: [
    CommonModule,
    MatNativeDateModule,
    AdminRoutingModule, 
    MaterialModule
  ],
  providers: [],
  bootstrap: [AdminComponent]
})
export class AdminModule { }