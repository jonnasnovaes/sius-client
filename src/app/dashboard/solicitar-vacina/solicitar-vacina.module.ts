import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SolicitarVacinaRoutingModule } from './solicitar-vacina-routing.module';
import {SolicitarVacinaComponent} from './solicitar-vacina.component';


@NgModule({
  declarations: [
    SolicitarVacinaComponent
  ],
  imports: [
    CommonModule,
    SolicitarVacinaRoutingModule
  ],
  exports: [
    SolicitarVacinaComponent
  ]
})
export class SolicitarVacinaModule { }
