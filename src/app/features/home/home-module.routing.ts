import { RouterModule, Routes } from '@angular/router'
import { NgModule } from '@angular/core';
import { HomePageComponent } from './home-page/home-page.component';
import { ChambrePublicReservationComponent } from '../chambre/chambre-public-reservation/chambre-public-reservation.component';
import { ListUniversiteFilteredComponent } from '../universite/list-universite-filtered/list-universite-filtered.component';

const routes: Routes = [
    {
 
          path: ``,
          component: HomePageComponent
        },

        {path:'GetChambresByFoyer', component:ChambrePublicReservationComponent},
        { path: 'filtre/:address', component: ListUniversiteFilteredComponent },


    ]
    
   

  



@NgModule({
    imports: [RouterModule.forChild(routes)],

  exports: [RouterModule],
})
export class HomeRoutingModule { }
