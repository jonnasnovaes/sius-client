import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DahsboardRoutingModule } from './dahsboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import {SharedModule} from './shared/shared.module';
import {HeaderModule} from './shared/header/header.module';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    // BrowserModule,
    // BrowserAnimationsModule,
    SharedModule,
    DahsboardRoutingModule,
    HeaderModule,

  ],
  exports: [
    DashboardComponent,
    DahsboardRoutingModule,
  ]
})
export class DahsboardModule { }
