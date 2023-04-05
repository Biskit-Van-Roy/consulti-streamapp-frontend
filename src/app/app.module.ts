import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardModule } from './modules/dashboard/dashboard.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MoviesModule } from './modules/movies/movies.module';
import { SigninComponent } from './components/signin/signin.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PerfilModule } from './modules/perfil/perfil.module';
import { FamilymoviesComponent } from './modules/shared/components/familymovies/familymovies.component';
import { SharedModule } from "./modules/shared/shared.module";



@NgModule({
    declarations: [
        AppComponent,
        SigninComponent,
        LoginComponent,
      
    ],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        DashboardModule,
        BrowserAnimationsModule,
        MoviesModule,
        PerfilModule,
        FormsModule,
        HttpClientModule,
        SharedModule
    ]
})
export class AppModule { }
