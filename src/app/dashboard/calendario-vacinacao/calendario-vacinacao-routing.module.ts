import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CadastrarVacinaComponent} from '../cadastrar-vacina/cadastrar-vacina.component';
import {CalendarioVacinacaoComponent} from './calendario-vacinacao.component';

const routes: Routes = [
  {
    path: '',
    component: CalendarioVacinacaoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CalendarioVacinacaoRoutingModule { }
