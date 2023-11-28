import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProgressBarModule } from 'primeng/progressbar';
import { DialogModule } from 'primeng/dialog';
import { ListChambreComponent } from './list-chambre/list-chambre.component';
import { ChambreFormComponent } from './chambre-form/chambre-form.component';
import { ChambreRoutingModule } from './chambre-routing.module';


@NgModule({
    declarations: [
        ListChambreComponent,
        ChambreFormComponent
    ],
    imports: [
        TableModule,
        TagModule,
        ConfirmDialogModule,
        CommonModule,
        ChambreRoutingModule,
        FormsModule,
        ProgressBarModule,
        DialogModule,
        ReactiveFormsModule,

    ],
})
export class ChambreModule { }