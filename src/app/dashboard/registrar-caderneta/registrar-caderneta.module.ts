import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegistrarCadernetaRoutingModule } from './registrar-caderneta-routing.module';
import {RegistrarCadernetaComponent} from './registrar-caderneta.component';


@NgModule({
  declarations: [
    RegistrarCadernetaComponent
  ],
  imports: [
    CommonModule,
    RegistrarCadernetaRoutingModule
  ],
  exports: [
    RegistrarCadernetaComponent
  ]
})
export class RegistrarCadernetaModule { }
