import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConciliacionBancariaRoutingModule } from './conciliacion-bancaria-routing.module';
import { ConciliacionBancariaComponent } from './conciliacion-bancaria.component';
import { MaterialModule } from 'src/app/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {MatSelectModule} from '@angular/material/select';
import { MatTooltipModule } from '@angular/material/tooltip';

@NgModule({
  declarations: [ConciliacionBancariaComponent],
  imports: [
    CommonModule,
    ConciliacionBancariaRoutingModule,
    MaterialModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatTooltipModule,
    MatSelectModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ConciliacionBancariaModule {}
