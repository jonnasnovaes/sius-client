import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CalendarioVacinacaoComponent} from './dashboard/calendario-vacinacao/calendario-vacinacao.component';
import {RegistrarVacinacaoComponent} from './dashboard/registrar-vacinacao/registrar-vacinacao.component';
import {VerificarEstoqueComponent} from './dashboard/verificar-estoque/verificar-estoque.component';
import {RegistrarLoteComponent} from './dashboard/registrar-lote/registrar-lote.component';
import {RegistrarCadernetaComponent} from './dashboard/registrar-caderneta/registrar-caderneta.component';
import {SolicitarVacinaComponent} from './dashboard/solicitar-vacina/solicitar-vacina.component';

const routes: Routes = [
  {
    path: 'calendario-vacinacao',
    component: CalendarioVacinacaoComponent
  },
  {
    path: 'registrar-vacinacao',
    component: RegistrarVacinacaoComponent
  },
  {
    path: 'verificar-estoque',
    component: VerificarEstoqueComponent
  },
  {
    path: 'solicitar-vacina',
    component: SolicitarVacinaComponent
  },
  {
    path: 'registrar-lote',
    component: RegistrarLoteComponent
  },
  {
    path: 'registrar-caderneta',
    component: RegistrarCadernetaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
