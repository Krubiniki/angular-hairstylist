import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StepDisplayerModule } from 'src/app/step-displayer/step-displayer.module'

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StepDisplayerModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
