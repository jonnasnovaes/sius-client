import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegistrarCadernetaRoutingModule } from './registrar-caderneta-routing.module';
import {RegistrarCadernetaComponent} from './registrar-caderneta.component';
import {SharedModule} from '../shared/shared.module';


@NgModule({
  declarations: [
    RegistrarCadernetaComponent
  ],
  imports: [
    RegistrarCadernetaRoutingModule,
    SharedModule
  ],
  exports: [
    RegistrarCadernetaComponent
  ]
})
export class RegistrarCadernetaModule { }
