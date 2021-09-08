import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegistrarLoteRoutingModule } from './registrar-lote-routing.module';
import {RegistrarLoteComponent} from './registrar-lote.component';
import {SharedModule} from '../shared/shared.module';


@NgModule({
  declarations: [
    RegistrarLoteComponent
  ],
  imports: [
    RegistrarLoteRoutingModule,
    SharedModule
  ],
  exports: [
    RegistrarLoteComponent
  ]
})
export class RegistrarLoteModule { }
