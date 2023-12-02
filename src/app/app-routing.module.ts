import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { LayoutComponent } from './features/shared/layout/layout.component';
import { LoginComponent } from './features/login/login.component';
import { DashboardComponent } from './features/dashboard/dashboard.component';
import { RoutePaths } from './models/routepaths';

const routes: Routes = [
  {
    path: `${RoutePaths.HOME}`,
    component: HomeComponent
  },
  {
    path: '',
    redirectTo: `${RoutePaths.HOME}`, pathMatch: 'full'
  },

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
      },
      {
        path: `${RoutePaths.BLOC}`,
        loadChildren: () => import('./features/bloc/bloc.module').then((m) => m.BlocModule),
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
