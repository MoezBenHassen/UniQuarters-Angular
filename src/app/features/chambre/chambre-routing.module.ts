import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListChambreComponent } from './list-chambre/list-chambre.component';
import { ChambrePublicReservationComponent } from './chambre-public-reservation/chambre-public-reservation.component';


const routes: Routes = [
  {path:'', component:ListChambreComponent},
  {path:'GetChambresByFoyer', component:ChambrePublicReservationComponent}
 
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChambreRoutingModule { }
