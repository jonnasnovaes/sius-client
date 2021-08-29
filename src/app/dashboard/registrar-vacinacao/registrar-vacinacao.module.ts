import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegistrarVacinacaoRoutingModule } from './registrar-vacinacao-routing.module';
import {RegistrarVacinacaoComponent} from './registrar-vacinacao.component';


@NgModule({
  declarations: [
    RegistrarVacinacaoComponent
  ],
  imports: [
    CommonModule,
    RegistrarVacinacaoRoutingModule
  ],
  exports: [
    RegistrarVacinacaoComponent
  ]
})
export class RegistrarVacinacaoModule { }
