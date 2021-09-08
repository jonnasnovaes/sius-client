import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CadastrarVacinaComponent} from '../cadastrar-vacina/cadastrar-vacina.component';
import {RegistrarLoteComponent} from './registrar-lote.component';

const routes: Routes = [
  {
    path: '',
    component: RegistrarLoteComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegistrarLoteRoutingModule { }
