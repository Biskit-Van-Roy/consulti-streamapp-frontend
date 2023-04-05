import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './pages/dashboard.component';
import { HomeComponent } from './components/home/home.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { PerfilModule } from '../perfil/perfil.module';
import { PerfilComponent } from '../perfil/components/perfil/perfil.component';



@NgModule({
  declarations: [
    DashboardComponent,
    HomeComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    PerfilModule
  ]
})
export class DashboardModule { }
