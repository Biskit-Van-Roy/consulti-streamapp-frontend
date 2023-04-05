import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesComponent } from './components/movies/movies.component';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from '../shared/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { SharedModule } from "../shared/shared.module";




@NgModule({
    declarations: [
        MoviesComponent
    ],
    imports: [
        CommonModule,
        MaterialModule,
        FlexLayoutModule,
        MatCardModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        SharedModule,
      
    ]
})
export class MoviesModule { }
