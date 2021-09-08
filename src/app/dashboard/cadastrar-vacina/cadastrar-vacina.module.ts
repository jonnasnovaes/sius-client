import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CadastrarVacinaRoutingModule } from './cadastrar-vacina-routing.module';
import {CadastrarVacinaComponent} from './cadastrar-vacina.component';
import {SharedModule} from '../shared/shared.module';
import {BrowserModule} from '@angular/platform-browser';


@NgModule({
  declarations: [
    CadastrarVacinaComponent
  ],
  imports: [
    CommonModule,
    CadastrarVacinaRoutingModule,
    SharedModule
  ],
  exports: [
    CadastrarVacinaComponent
  ]
})
export class CadastrarVacinaModule { }
