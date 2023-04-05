import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardRoutingModule } from './modules/dashboard/dashboard-routing.module';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './modules/dashboard/components/home/home.component';
import { SigninComponent } from './components/signin/signin.component';
import { DashboardComponent } from './modules/dashboard/pages/dashboard.component';
import { PerfilComponent } from './modules/perfil/components/perfil/perfil.component';
import { MoviesComponent } from './modules/movies/components/movies/movies.component';
import { FamilymoviesComponent } from './modules/shared/components/familymovies/familymovies.component';

const routes: Routes = [
  { path: '', component:LoginComponent },
  { path: 'home', component:MoviesComponent},
  { path: 'sign-in', component:SigninComponent },
  { path: 'profiles', component:PerfilComponent },
  { path: 'familiar', component:FamilymoviesComponent },
  

  
];

@NgModule({
  imports: [RouterModule.forRoot(
    routes,
    {enableTracing: false, useHash: true}
    ),
    DashboardRoutingModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
