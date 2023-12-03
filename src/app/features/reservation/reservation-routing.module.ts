import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListReservationsComponent } from './list-reservations/list-reservations.component';
import { ListReservationsEtudiantComponent } from './list-reservations-etudiant/list-reservations-etudiant.component';

const routes: Routes = [
  {
    path: '',
    component: ListReservationsComponent,
  },
  // /etudiant/1
  {
    path: 'etudiant/:id',
    component: ListReservationsEtudiantComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReservationRoutingModule {}
