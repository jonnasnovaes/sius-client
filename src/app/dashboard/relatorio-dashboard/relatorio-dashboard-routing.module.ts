import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RegistrarVacinacaoComponent} from '../registrar-vacinacao/registrar-vacinacao.component';
import {RelatorioDashboardComponent} from './relatorio-dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: RelatorioDashboardComponent,
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RelatorioDashboardRoutingModule { }
