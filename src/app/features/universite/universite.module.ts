import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UniversiteRoutingModule } from './universite-routing.module';
import { ListUniversiteComponent } from './list-universite/list-universite.component';
import { DialogService } from 'primeng/dynamicdialog';
import { ConfirmationService, MessageService } from 'primeng/api';
import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { UniversiteFormComponent } from './universite-form/universite-form.component';
import { FormsModule } from '@angular/forms';
import { ProgressBarModule } from 'primeng/progressbar';


@NgModule({
  declarations: [
    ListUniversiteComponent,
    UniversiteFormComponent
  ],
  imports: [
    TableModule,
    TagModule,
    ConfirmDialogModule,
    CommonModule,
    UniversiteRoutingModule,
    FormsModule,
    ProgressBarModule
  ],
})
export class UniversiteModule { }