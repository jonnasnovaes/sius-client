import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LiberarLoteRoutingModule } from './liberar-lote-routing.module';
import {LiberarLoteComponent} from './liberar-lote.component';
import {SharedModule} from '../shared/shared.module';


@NgModule({
  declarations: [
    LiberarLoteComponent
  ],
  imports: [
    LiberarLoteRoutingModule,
    SharedModule
  ],
  exports: [
    LiberarLoteComponent
  ]
})
export class LiberarLoteModule { }
