import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegistrarLoteRoutingModule } from './registrar-lote-routing.module';
import {RegistrarLoteComponent} from './registrar-lote.component';


@NgModule({
  declarations: [
    RegistrarLoteComponent
  ],
  imports: [
    CommonModule,
    RegistrarLoteRoutingModule
  ],
  exports: [
    RegistrarLoteComponent
  ]
})
export class RegistrarLoteModule { }
