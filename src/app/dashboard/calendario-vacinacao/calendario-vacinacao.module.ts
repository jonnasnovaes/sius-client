import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CalendarioVacinacaoRoutingModule } from './calendario-vacinacao-routing.module';
import {CalendarioVacinacaoComponent} from './calendario-vacinacao.component';
import {SharedModule} from '../shared/shared.module';


@NgModule({
  declarations: [
    CalendarioVacinacaoComponent
  ],
  imports: [
    SharedModule,
    CalendarioVacinacaoRoutingModule
  ],
  exports: [
    CalendarioVacinacaoComponent
  ]
})
export class CalendarioVacinacaoModule { }
