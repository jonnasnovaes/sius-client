import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CadastrarVacinaComponent} from '../cadastrar-vacina/cadastrar-vacina.component';
import {RegistrarCadernetaComponent} from './registrar-caderneta.component';

const routes: Routes = [
  {
    path: '',
    component: RegistrarCadernetaComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegistrarCadernetaRoutingModule { }
