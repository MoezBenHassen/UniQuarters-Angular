import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReservationRoutingModule } from './reservation-routing.module';
import { ListReservationsComponent } from './list-reservations/list-reservations.component';
import { FormReservationComponent } from './form-reservation/form-reservation.component';
import { DialogService } from 'primeng/dynamicdialog';
import { ConfirmationService, MessageService } from 'primeng/api';
import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { FormsModule } from '@angular/forms';
import { ProgressBarModule } from 'primeng/progressbar';
import { DialogModule } from 'primeng/dialog';

@NgModule({
  declarations: [
    ListReservationsComponent,
    FormReservationComponent
  ],
  imports: [
    ReservationRoutingModule,
    TableModule,
    TagModule,
    ConfirmDialogModule,
    CommonModule,
    FormsModule,
    ProgressBarModule,
    DialogModule
  ]
})
export class ReservationModule { }
