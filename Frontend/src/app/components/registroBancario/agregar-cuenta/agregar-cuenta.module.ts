import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgregarCuentaRoutingModule } from './agregar-cuenta-routing.module';
import { AgregarCuentaComponent } from './agregar-cuenta.component';
import { MaterialModule } from 'src/app/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import {MatSelectModule} from '@angular/material/select';

@NgModule({
  declarations: [AgregarCuentaComponent],
  
  imports: [
    CommonModule,
    AgregarCuentaRoutingModule,
    MaterialModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatTooltipModule,MatSelectModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AgregarCuentaModule {}
