import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SolicitarVacinaRoutingModule } from './solicitar-vacina-routing.module';
import {SolicitarVacinaComponent} from './solicitar-vacina.component';
import {SharedModule} from '../shared/shared.module';


@NgModule({
  declarations: [
    SolicitarVacinaComponent
  ],
  imports: [
    SolicitarVacinaRoutingModule,
    SharedModule
  ],
  exports: [
    SolicitarVacinaComponent
  ]
})
export class SolicitarVacinaModule { }
