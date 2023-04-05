import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviesComponent } from '../movies/components/movies/movies.component';
import { PerfilComponent } from '../perfil/components/perfil/perfil.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from 'src/app/components/login/login.component';




const childRoutes: Routes = [
  { path: '', component: LoginComponent},
  { path: 'home', component:  PerfilComponent},
  { path: 'profiles', component: PerfilComponent },
]

@NgModule({
  imports: [RouterModule.forChild(childRoutes)],
  exports: [RouterModule],

})
export class RouterChildModule { }
