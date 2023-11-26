import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { LayoutComponent } from './layout/layout.component';
import { GetDeleteChambreComponent } from '../chambre/get-delete-chambre/get-delete-chambre.component';
import { ListUniversiteComponent } from 'src/app/features/universite/list-universite/list-universite.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: 'chambre',
        component: GetDeleteChambreComponent
      },
      {
        path: 'universite',
        component: ListUniversiteComponent
      },
    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SharedRoutingModule { }