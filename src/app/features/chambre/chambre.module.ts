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
import { InputTextModule } from 'primeng/inputtext';
import { NgSelectModule } from '@ng-select/ng-select';
import { InputNumberModule } from 'primeng/inputnumber';
import { RadioButtonModule } from 'primeng/radiobutton';
import { InputTextareaModule } from 'primeng/inputtextarea';
import {SelectButtonModule} from 'primeng/selectbutton';
import { ChipModule } from 'primeng/chip';


@NgModule({
    declarations: [
        ListChambreComponent,
        ChambreFormComponent
    ],
    imports: [
        ChipModule,
        SelectButtonModule,
        InputTextareaModule,
        RadioButtonModule,
        TableModule,
        InputNumberModule,
        NgSelectModule,
        TagModule,
        ConfirmDialogModule,
        CommonModule,
        ChambreRoutingModule,
        FormsModule,
        ProgressBarModule,
        DialogModule,
        ReactiveFormsModule,
        InputTextModule
    ],
})
export class ChambreModule { }
