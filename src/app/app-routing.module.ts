import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LayoutComponent } from './pages/shared/layout/layout.component';

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
    path: 'gestion-foyer',
    component: LayoutComponent,
    children: [
      {
        path: 'universite',
        loadChildren: () => import('./features/universite/universite.module').then((m) => m.UniversiteModule),
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
