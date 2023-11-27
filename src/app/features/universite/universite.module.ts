import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UniversiteRoutingModule } from './universite-routing.module';
import { ListUniversiteComponent } from './list-universite/list-universite.component';
import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { UniversiteFormComponent } from './universite-form/universite-form.component';
import { FormsModule } from '@angular/forms';
import { ProgressBarModule } from 'primeng/progressbar';
import { DialogModule } from 'primeng/dialog';


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
    ProgressBarModule,
    DialogModule
  ],
})
export class UniversiteModule { }
