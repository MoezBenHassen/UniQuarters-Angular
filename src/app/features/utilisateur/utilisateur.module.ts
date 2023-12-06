import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UtilisateurRoutingModule } from './utilisateur-routing.module';
import { UtilisateurFormComponent } from './utilisateur-form/utilisateur-form.component';
import { ListUtilisateurComponent } from './list-utilisateur/list-utilisateur.component';


@NgModule({
  declarations: [
    UtilisateurFormComponent,
    ListUtilisateurComponent
  ],
  imports: [
    CommonModule,
    UtilisateurRoutingModule
  ]
})
export class UtilisateurModule { }
