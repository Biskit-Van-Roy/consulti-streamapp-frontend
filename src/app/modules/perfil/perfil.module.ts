import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PerfilComponent } from './components/perfil/perfil.component';
import { MaterialModule } from '../shared/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NewPerfilComponent } from './components/new-perfil/new-perfil.component';
import { SharedModule } from "../shared/shared.module";



@NgModule({
    declarations: [
        PerfilComponent,
        NewPerfilComponent
    ],
    imports: [
        CommonModule,
        MaterialModule,
        FlexLayoutModule,
        FormsModule,
        ReactiveFormsModule,
        SharedModule
    ]
})
export class PerfilModule { }
