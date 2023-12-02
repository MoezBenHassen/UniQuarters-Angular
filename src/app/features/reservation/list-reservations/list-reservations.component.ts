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

  isLoading = false;
  constructor(
    public reservationService: ReservationService,
    private readonly dialogService: DialogService,
    public messageService: MessageService,
    private confirmationService: ConfirmationService
  ) {}

  ngOnInit(): void {
    this.reservationService.getReservations();
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
      message: 'Êtes-vous sûr de vouloir annuler la réservation ?',
      acceptLabel: 'Cancel Reservation',
      rejectLabel: 'Annuler',
      accept: () => {
        this.isLoading = true;
        this.reservationService.cancelReservation(id).subscribe(
          (response: any) => {
            this.isLoading = false;
            console.log('Reservation cancelled successfully.');
            this.messageService.add({
              severity: 'success',
              summary: 'Succès',
              detail: response.message || 'La réservation a été annulée avec succées.',
            });

            this.reservationService.getReservations();
          },
          (error) => {
            this.isLoading = false;
            console.error('Error cancelling reservation:', error);
            this.messageService.add({
              severity: 'error',
              summary: 'Erreur',
              detail:
                error?.error?.message ||
                "Une erreur est survenue lors de l'annulation de la réservation.",
            });
          }
        );
      },
    });
  }

  validate(id: String) {
    this.confirmationService.confirm({
      message: 'Êtes-vous sûr de valider la réservation ?',
      acceptLabel: 'Valider',
      rejectLabel: 'Annuler',
      accept: () => {
        this.isLoading = true;
        this.reservationService.validateReservation(id).subscribe(
          (response: any) => {
            this.isLoading = false;
            console.log('Reservation validated successfully.');
            this.messageService.add({
              severity: 'success',
              summary: 'Succès',
              detail:
                response.message || 'La réservation a été validée avec succès.',
            });

            this.reservationService.getReservations();
          },
          (error) => {
            this.isLoading = false;
            console.error('Error validating reservation:', error);
            this.messageService.add({
              severity: 'error',
              summary: 'Erreur',
              detail:
                error?.error?.message ||
                'Une erreur est survenue lors de la validation de la réservation.',
            });
          }
        );
      },
    });
  }

  checkAffectedToEtudiants(reservation: Reservation): boolean {
    return reservation.etudiants.length > 0;
  }
}
