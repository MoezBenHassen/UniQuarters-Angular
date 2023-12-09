import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { LayoutComponent } from './features/shared/layout/layout.component';
import { LoginComponent } from './features/login/login.component';
import { DashboardComponent } from './features/dashboard/dashboard.component';
import { RoutePaths } from './models/routepaths';

import { ListUniversiteFilteredComponent } from './features/universite/list-universite-filtered/list-universite-filtered.component';


const routes: Routes = [
  {
    path: `${RoutePaths.HOME}`,
    component: HomeComponent
  },
  {
    path: '',
    redirectTo: `${RoutePaths.HOME}`, pathMatch: 'full'
  },

  //pour le moment pour le front office
  {path:'filtre/:address', component:ListUniversiteFilteredComponent},

  
  {
    path: `${RoutePaths.LOGIN}`,
    component: LoginComponent
  },
  {
    path: `${RoutePaths.GESTION}`,
    component: LayoutComponent,
    children: [
      {
        path: `${RoutePaths.DASHBOARD}`,
        component: DashboardComponent
      },
      {
        path: `${RoutePaths.UNIVERSITE}`,
        loadChildren: () => import('./features/universite/universite.module').then((m) => m.UniversiteModule),
      },
      {
        path: `${RoutePaths.CHAMBRE}`,
        loadChildren: () => import('./features/chambre/chambre.module').then((m) => m.ChambreModule),
      },
      {
        path: `${RoutePaths.RESERVATION}`,
        loadChildren: () => import('./features/reservation/reservation.module').then((m) => m.ReservationModule),
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
