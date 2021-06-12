import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { SchedulingComponent } from './scheduling/scheduling.component';

const routes: Routes = [
  { path:'', component: HomeComponent },
  { path:'agendamento', component: SchedulingComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StepDisplayerRoutingModule { }