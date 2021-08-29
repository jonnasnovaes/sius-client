import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CalendarioVacinacaoRoutingModule } from './calendario-vacinacao-routing.module';
import {CalendarioVacinacaoComponent} from './calendario-vacinacao.component';
import {SharedModule} from '../shared/shared.module';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    CalendarioVacinacaoComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    CalendarioVacinacaoRoutingModule
  ],
  exports: [
    CalendarioVacinacaoComponent
  ]
})
export class CalendarioVacinacaoModule { }
