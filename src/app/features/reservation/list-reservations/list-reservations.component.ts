import { Component, OnInit, ViewChild } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { DialogService } from 'primeng/dynamicdialog';
import { Table } from 'primeng/table';
import { Observable } from 'rxjs';
import { Reservation } from 'src/app/models/reservation';
import { ReservationService } from 'src/app/services/reservation.service';
import { ReservationFormComponent } from '../reservation-form/reservation-form.component';
@Component({
  selector: 'app-list-reservations',
  templateUrl: './list-reservations.component.html',
  styleUrls: ['./list-reservations.component.scss'],
})
export class ListReservationsComponent implements OnInit {
  @ViewChild('dt') table!: Table;

  reservations: Reservation[] = [];

  constructor(
    public reservationService: ReservationService,
    private readonly dialogService: DialogService,
    public messageService: MessageService,
    private confirmationService: ConfirmationService
  ) {}

  ngOnInit(): void {
    this.reservationService.getReservations().subscribe(
      (response: any) => {
        this.reservations = response.data.reservations;
        console.log(this.reservations);
      },
      (error) => {
        console.error('Error fetching data:', error);
      }
    );
  }

  Add() {
    this.dialogService.open(ReservationFormComponent, {
      header: 'Ajouter une nouvelle réservation',
    });
  }

  Edit(id: number) {
    this.dialogService.open(ReservationFormComponent, {
      data: { id },
      header: 'Modifier les informations de la réservation',
    });
  }

  Delete(id: number) {
    this.confirmationService.confirm({
      message: 'Êtes-vous sûr de vouloir effectuer cette action ?',
      acceptLabel: 'Supprimer',
      rejectLabel: 'Annuler',
      accept: () => {
        this.reservationService.cancelReservation(id).subscribe(
          () => {
            console.log('Reservation deleted successfully.');
          },
          (error) => {
            console.error('Error deleting reservation:', error);
          }
        );
      },
    });
  }
}
