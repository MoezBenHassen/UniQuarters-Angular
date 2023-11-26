import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListUniversiteComponent } from './list-universite/list-universite.component';
import { UniversiteFormComponent } from './universite-form/universite-form.component';

const routes: Routes = [
  {path:'', component:ListUniversiteComponent},
  {path:':id',component:UniversiteFormComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UniversiteRoutingModule { }
