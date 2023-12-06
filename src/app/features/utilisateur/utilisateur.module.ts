import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UtilisateurRoutingModule } from './utilisateur-routing.module';
import { UtilisateurFormComponent } from './utilisateur-form/utilisateur-form.component';
import { ListUtilisateurComponent } from './list-utilisateur/list-utilisateur.component';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';


@NgModule({
  declarations: [
    UtilisateurFormComponent,
    ListUtilisateurComponent
  ],
  imports: [
    ConfirmDialogModule,
    ToastModule,
    FormsModule,
    InputTextModule,
    TableModule,
    CommonModule,
    UtilisateurRoutingModule
  ]
})
export class UtilisateurModule { }
