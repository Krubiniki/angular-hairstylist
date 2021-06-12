import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StepDisplayerRoutingModule } from 'src/app/step-displayer/step-displayer-routing.module';
import { HomeComponent } from './home/home.component';
import { SchedulingComponent } from './scheduling/scheduling.component';

@NgModule({
  declarations: [
    HomeComponent,
    SchedulingComponent
  ],
  imports: [
    CommonModule,
    StepDisplayerRoutingModule,
  ]
})
export class StepDisplayerModule { }
