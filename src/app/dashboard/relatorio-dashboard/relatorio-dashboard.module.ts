import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RelatorioDashboardRoutingModule } from './relatorio-dashboard-routing.module';
import {RelatorioDashboardComponent} from './relatorio-dashboard.component';
import { GraficoComponent } from './grafico/grafico.component';
import {GoogleChartsModule} from 'angular-google-charts';
import {NgbPagination, NgbPaginationModule} from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    RelatorioDashboardComponent,
    GraficoComponent
  ],
  imports: [
    CommonModule,
    RelatorioDashboardRoutingModule,
    GoogleChartsModule,
    NgbPaginationModule
  ],
  exports: [
    RelatorioDashboardComponent
  ]
})
export class RelatorioDashboardModule { }
