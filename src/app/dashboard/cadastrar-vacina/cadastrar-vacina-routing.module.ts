import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CadastrarVacinaComponent} from './cadastrar-vacina.component';

const routes: Routes = [
  {
    path: '',
    component: CadastrarVacinaComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CadastrarVacinaRoutingModule { }
