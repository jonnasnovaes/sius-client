import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {SharedModule} from './dashboard/shared/shared.module';
import {MatSidenavModule} from '@angular/material/sidenav';
import { CalendarioVacinacaoComponent } from './dashboard/calendario-vacinacao/calendario-vacinacao.component';
import { RegistrarVacinacaoComponent } from './dashboard/registrar-vacinacao/registrar-vacinacao.component';
import { VerificarEstoqueComponent } from './dashboard/verificar-estoque/verificar-estoque.component';
import { SolicitarVacinaComponent } from './dashboard/solicitar-vacina/solicitar-vacina.component';
import { RegistrarLoteComponent } from './dashboard/registrar-lote/registrar-lote.component';
import { RegistrarCadernetaComponent } from './dashboard/registrar-caderneta/registrar-caderneta.component';
import { CadastrarVacinaComponent } from './dashboard/cadastrar-vacina/cadastrar-vacina.component';
import { LiberarLoteComponent } from './dashboard/liberar-lote/liberar-lote.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistrarVacinacaoComponent,
    VerificarEstoqueComponent,
    RegistrarLoteComponent,
    RegistrarCadernetaComponent,
    SolicitarVacinaComponent,
    CadastrarVacinaComponent,
    LiberarLoteComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
