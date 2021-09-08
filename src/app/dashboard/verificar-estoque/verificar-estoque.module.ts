import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VerificarEstoqueRoutingModule } from './verificar-estoque-routing.module';
import {VerificarEstoqueComponent} from './verificar-estoque.component';
import {SharedModule} from '../shared/shared.module';


@NgModule({
  declarations: [
    VerificarEstoqueComponent
  ],
  imports: [
    VerificarEstoqueRoutingModule,
    SharedModule
  ],
  exports: [
    VerificarEstoqueComponent
  ]
})
export class VerificarEstoqueModule { }
