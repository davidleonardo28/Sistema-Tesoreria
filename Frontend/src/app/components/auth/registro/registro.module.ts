import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { RegistroRoutingModule } from './registro-routing.module';
import { RegistroComponent } from './registro.component';

@NgModule({
  declarations: [RegistroComponent],
  imports: [ReactiveFormsModule, CommonModule, RegistroRoutingModule],
})
export class RegistroModule {}
