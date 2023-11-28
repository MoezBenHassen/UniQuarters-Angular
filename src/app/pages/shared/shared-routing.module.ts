import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { LayoutComponent } from './layout/layout.component';
import { GetDeleteChambreComponent } from '../chambre/get-delete-chambre/get-delete-chambre.component';
import { ListReservationsComponent } from 'src/app/features/reservation/list-reservations/list-reservations.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent,
      },
      {
        path: 'chambre',
        component: GetDeleteChambreComponent,
      },
      {
        path: 'reservations',
        loadChildren: () =>
          import('../../features/reservation/reservation.module').then(
            (m) => m.ReservationModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SharedRoutingModule {}

