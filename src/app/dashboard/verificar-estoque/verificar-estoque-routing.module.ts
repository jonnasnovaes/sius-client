import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CadastrarVacinaComponent} from '../cadastrar-vacina/cadastrar-vacina.component';
import {VerificarEstoqueComponent} from './verificar-estoque.component';

const routes: Routes = [
  {
    path: '',
    component: VerificarEstoqueComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VerificarEstoqueRoutingModule { }
