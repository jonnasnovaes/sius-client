import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CadastrarVacinaComponent} from '../cadastrar-vacina/cadastrar-vacina.component';
import {LiberarLoteComponent} from './liberar-lote.component';

const routes: Routes = [
  {
    path: '',
    component: LiberarLoteComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LiberarLoteRoutingModule { }
