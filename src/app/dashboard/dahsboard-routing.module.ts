import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DashboardComponent} from './dashboard.component';
import {CalendarioVacinacaoComponent} from './calendario-vacinacao/calendario-vacinacao.component';
import {RegistrarVacinacaoComponent} from './registrar-vacinacao/registrar-vacinacao.component';
import {VerificarEstoqueComponent} from './verificar-estoque/verificar-estoque.component';
import {SolicitarVacinaComponent} from './solicitar-vacina/solicitar-vacina.component';
import {RegistrarLoteComponent} from './registrar-lote/registrar-lote.component';
import {RegistrarCadernetaComponent} from './registrar-caderneta/registrar-caderneta.component';
import {CadastrarVacinaComponent} from './cadastrar-vacina/cadastrar-vacina.component';
import {LiberarLoteComponent} from './liberar-lote/liberar-lote.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: 'calendario-vacinacao',
        loadChildren: () => import('./calendario-vacinacao/calendario-vacinacao.module').then(m => m.CalendarioVacinacaoModule),
      },
      {
        path: 'registrar-vacinacao',
        loadChildren: () => import('./registrar-vacinacao/registrar-vacinacao.module').then(m => m.RegistrarVacinacaoModule),
      },
      {
        path: 'verificar-estoque',
        loadChildren: () => import('./verificar-estoque/verificar-estoque.module').then(m => m.VerificarEstoqueModule)
      },
      {
        path: 'solicitar-vacina',
        loadChildren: () => import('./solicitar-vacina/solicitar-vacina.module').then(m => m.SolicitarVacinaModule),
      },
      {
        path: 'registrar-lote',
        loadChildren: () => import('./registrar-lote/registrar-lote.module').then(m => m.RegistrarLoteModule),
      },
      {
        path: 'registrar-caderneta',
        loadChildren: () => import('./registrar-caderneta/registrar-caderneta.module').then(m => m.RegistrarCadernetaModule),
      },
      {
        path: 'cadastrar-vacina',
        loadChildren: () => import('./cadastrar-vacina/cadastrar-vacina.module').then(m => m.CadastrarVacinaModule),
      },
      {
        path: 'liberar-lote',
        loadChildren: () => import('./liberar-lote/liberar-lote.module').then(m => m.LiberarLoteModule),
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DahsboardRoutingModule { }
