import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from './material.module';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ConfirmComponent } from './components/confirm/confirm.component';
import { FamilymoviesComponent } from './components/familymovies/familymovies.component';



@NgModule({
  declarations: [
    SidenavComponent,
    ConfirmComponent,
    FamilymoviesComponent
  ],
  exports:[
    SidenavComponent,
    FamilymoviesComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule,
    MaterialModule,
    HttpClientModule
  ]
})
export class SharedModule { }
