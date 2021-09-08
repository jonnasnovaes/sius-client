import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegistrarVacinacaoRoutingModule } from './registrar-vacinacao-routing.module';
import {RegistrarVacinacaoComponent} from './registrar-vacinacao.component';
import {SharedModule} from '../shared/shared.module';


@NgModule({
  declarations: [
    RegistrarVacinacaoComponent
  ],
  imports: [
    RegistrarVacinacaoRoutingModule,
    SharedModule
  ],
  exports: [
    RegistrarVacinacaoComponent
  ]
})
export class RegistrarVacinacaoModule { }
