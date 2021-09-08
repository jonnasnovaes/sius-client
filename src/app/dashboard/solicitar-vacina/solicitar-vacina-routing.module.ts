import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CadastrarVacinaComponent} from '../cadastrar-vacina/cadastrar-vacina.component';
import {SolicitarVacinaComponent} from './solicitar-vacina.component';

const routes: Routes = [
  {
    path: '',
    component: SolicitarVacinaComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SolicitarVacinaRoutingModule { }
