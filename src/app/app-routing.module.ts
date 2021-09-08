import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CalendarioVacinacaoComponent} from './dashboard/calendario-vacinacao/calendario-vacinacao.component';
import {RegistrarVacinacaoComponent} from './dashboard/registrar-vacinacao/registrar-vacinacao.component';
import {VerificarEstoqueComponent} from './dashboard/verificar-estoque/verificar-estoque.component';
import {RegistrarLoteComponent} from './dashboard/registrar-lote/registrar-lote.component';
import {RegistrarCadernetaComponent} from './dashboard/registrar-caderneta/registrar-caderneta.component';
import {SolicitarVacinaComponent} from './dashboard/solicitar-vacina/solicitar-vacina.component';
import {CadastrarVacinaComponent} from './dashboard/cadastrar-vacina/cadastrar-vacina.component';
import {LiberarLoteComponent} from './dashboard/liberar-lote/liberar-lote.component';
import {LoginComponent} from './login/login.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
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
  },
  {
    path: 'cadastrar-vacina',
    component: CadastrarVacinaComponent
  },
  {
    path: 'liberar-lote',
    component: LiberarLoteComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
