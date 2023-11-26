import { NgModule } from "@angular/core";
import { PagesRoutingModule } from "./pages-routing.module";
import { HomeComponent } from './home/home.component';
import { NgSelectModule } from "@ng-select/ng-select";
import { CommonModule } from "@angular/common";
import {AutoCompleteModule} from 'primeng/autocomplete';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { StepsModule } from 'primeng/steps';
import { GetDeleteChambreComponent } from './chambre/get-delete-chambre/get-delete-chambre.component';
import { AddUpdateChambreComponent } from './chambre/add-update-chambre/add-update-chambre.component';
import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { DialogModule } from 'primeng/dialog';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import {ProgressSpinnerModule} from 'primeng/progressspinner';

import { ProgressBarModule } from 'primeng/progressbar';
import { ReactiveFormsModule } from "@angular/forms";
@NgModule({
    declarations: [
    HomeComponent,
    GetDeleteChambreComponent,
    AddUpdateChambreComponent
  ],
    imports: [
      CommonModule,
      AutoCompleteModule,
      PagesRoutingModule,
      NgSelectModule,
      InputTextModule,
      ButtonModule,
      StepsModule,
      TableModule,
      TagModule,
      DialogModule,
      ConfirmDialogModule,
      ProgressBarModule,
      ProgressSpinnerModule,
      ReactiveFormsModule
    ],

})
export class PagesModule { }