import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CadastrarVacinaComponent} from '../cadastrar-vacina/cadastrar-vacina.component';
import {RegistrarVacinacaoComponent} from './registrar-vacinacao.component';

const routes: Routes = [
  {
    path: '',
    component: RegistrarVacinacaoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegistrarVacinacaoRoutingModule { }
