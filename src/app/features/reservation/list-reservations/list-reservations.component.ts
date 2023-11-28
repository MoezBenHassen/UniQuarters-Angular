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
    this.getReservations();
  }

  add() {
    this.dialogService.open(ReservationFormComponent, {
      header: 'Ajouter une nouvelle réservation',
    });
  }

  edit(id: number) {
    this.dialogService.open(ReservationFormComponent, {
      data: { id },
      header: 'Modifier les informations de la réservation',
    });
  }

  cancel(id: number) {
    this.confirmationService.confirm({
      message: 'Êtes-vous sûr de vouloir effectuer cette action ?',
      acceptLabel: 'Cancel',
      rejectLabel: 'Annuler',
      accept: () => {
        this.reservationService.cancelReservation(id).subscribe(
          () => {
            console.log('Reservation cancelled successfully.');
            this.messageService.add({
              severity: 'success',
              summary: 'Succès',
              detail: 'La réservation a été annulée avec succès.',
            });

            this.getReservations();
          },
          (error) => {
            console.error('Error cancelling reservation:', error);
            this.messageService.add({
              severity: 'error',
              summary: 'Erreur',
              detail:
                "Une erreur est survenue lors de l'annulation de la réservation.",
            });
          }
        );
      },
    });
  }

  checkAffectedToEtudiants(reservation: Reservation): boolean {
    return reservation.etudiants.length > 0;
  }

  private getReservations() {
    console.log("Getting reservations...");
    this.reservationService.getReservations().subscribe(
      (response: any) => {
        this.reservations = response.data.reservations;
        console.log(this.reservations);
        console.log(this.checkAffectedToEtudiants(this.reservations[0]));

      },
      (error) => {
        console.error('Error fetching data:', error);
      }
    );
  }
}
