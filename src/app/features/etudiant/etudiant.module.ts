import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EtudiantRoutingModule } from './etudiant-routing.module';
import { ListEtudiantComponent } from './list-etudiant/list-etudiant.component';
import { EtudiantFormComponent } from './etudiant-form/etudiant-form.component';


@NgModule({
  declarations: [
    ListEtudiantComponent,
    EtudiantFormComponent
  ],
  imports: [
    CommonModule,
    EtudiantRoutingModule
  ]
})
export class EtudiantModule { }
