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
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dahsboard.module').then(mod => mod.DahsboardModule)
  },
  {
    path: '**',
    redirectTo: 'login'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
