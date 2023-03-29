import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PerfilComponent } from '../perfil/components/perfil/perfil.component';
import { HomeComponent } from './components/home/home.component';




const childRoutes: Routes = [
  { path: '', component: PerfilComponent},
  { path: 'home', component: HomeComponent},
  { path: 'profiles', component: PerfilComponent },
]

@NgModule({
  imports: [RouterModule.forChild(childRoutes)],
  exports: [RouterModule],

})
export class RouterChildModule { }
