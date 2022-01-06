import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VerUsuarioRoutingModule } from './ver-usuario.routing.module';
import { VerUsuariosComponent } from './ver-usuarios.component';
import { MaterialModule } from 'src/app/material.module';
import {MatNativeDateModule} from '@angular/material/core';



@NgModule({
  declarations: [
    VerUsuariosComponent,
    
  ],
  imports: [
    CommonModule,
    MatNativeDateModule,
    VerUsuarioRoutingModule, 
    MaterialModule
  ],
  providers: [],
  bootstrap: [VerUsuariosComponent]
})
export class VerUsuarioModule { }