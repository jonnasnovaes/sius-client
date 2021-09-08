import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSelectModule} from '@angular/material/select';
import {MatListModule} from '@angular/material/list';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatTableModule} from '@angular/material/table';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NgbModule,
    RouterModule,
    MatButtonModule,
    MatSidenavModule,
    MatMenuModule,
    MatIconModule,
    MatToolbarModule,
    MatSidenavModule,
    MatSelectModule,
    MatListModule,
    MatTableModule
  ],
  exports: [
    CommonModule,
    NgbModule,
    RouterModule,
    MatButtonModule,
    MatSidenavModule,
    MatMenuModule,
    MatIconModule,
    MatToolbarModule,
    MatSidenavModule,
    MatSelectModule,
    MatListModule,
    MatTableModule
  ]
})
export class SharedModule { }
