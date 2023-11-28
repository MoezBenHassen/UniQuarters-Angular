import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { LayoutComponent } from './features/shared/layout/layout.component';
import { LoginComponent } from './features/login/login.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: '',
    redirectTo: '/home', pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'gestion-foyer',
    component: LayoutComponent,
    children: [
      {
        path: 'universite',
        loadChildren: () => import('./features/universite/universite.module').then((m) => m.UniversiteModule),
      },
      {
        path: 'chambre',
        loadChildren: () => import('./features/chambre/chambre.module').then((m) => m.ChambreModule),
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
