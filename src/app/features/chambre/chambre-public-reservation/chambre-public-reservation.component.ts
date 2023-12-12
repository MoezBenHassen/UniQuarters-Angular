import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { AuthService } from 'src/app/services/auth.service';
import { ChambreService } from 'src/app/services/chambre.service';
import { ReservationService } from 'src/app/services/reservation.service';

@Component({
  selector: 'app-chambre-public-reservation',
  templateUrl: './chambre-public-reservation.component.html',
  styleUrls: ['./chambre-public-reservation.component.scss']
})
export class ChambrePublicReservationComponent {
  chambres: any[] = [];
  foyerId!: number;

  constructor(
    private reservationService :ReservationService,
    private authService: AuthService,
    public messageService :MessageService,
    private chambreService: ChambreService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.foyerId = params['foyerId'];
      this.fetchChambres();
    });
  }
  addReservation(idChambre: number) {
    this.authService.getLoggedInEtudiant().subscribe({
      next: (response: any) => {
        console.log('logged in etudiant response', response);
        const etudiantCin = response?.data?.etudiant.cin;
        this.reservationService.addReservation(idChambre, etudiantCin).subscribe({
          next: (response: any) => {
            console.log('🚀 ~ response', response);
            this.messageService.add({
              severity: 'success',
              summary: 'Success',
              detail: response.message || 'Reservation added successfully',
            });
            this.reservationService.getReservations();
          },
          error: err => {
            console.log(err);
            this.messageService.add({
              severity: 'error',
              summary: 'Error',
              detail: err?.error?.message || 'Something went wrong',
            });
          },
          complete: () => {
            console.log('completed');
          },
        });
      },
      error: error => {
        console.log('error:', error);
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: error?.error?.message || 'Something went wrong Getting logged in etudiant',
        });
      },
    });
  }
  fetchChambres(): void {
    this.chambreService.retrieveChambres().subscribe(
      (response: any) => {

        const allChambres: any[] = response.body.data.chambres;
        console.log(allChambres)
        // Filter chambres based on foyerName
        this.chambres = allChambres.filter(
          (chambre) => chambre.bloc.foyer.id == this.foyerId
          
        );
        console.log(this.chambres,this.foyerId)

      },
      (error) => {
        console.error('Error loading chambres:', error);
      }
    );
  }

}