import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {SharedModule} from './dashboard/shared/shared.module';
import { LoginComponent } from './login/login.component';
import {CommonModule} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { VacinaModalComponent } from './dashboard/cadastrar-vacina/vacina-modal/vacina-modal.component';
import { AlertModalComponent } from './core/alert-modal/alert-modal.component';
import { ConfirmModalComponent } from './core/confirm-modal/confirm-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    VacinaModalComponent,
    AlertModalComponent,
    ConfirmModalComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
