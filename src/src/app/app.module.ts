import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DateSliderComponent } from './date-slider/date-slider.component';
import {NgxSliderModule} from '@angular-slider/ngx-slider';

@NgModule({
  declarations: [
    AppComponent,
    DateSliderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxSliderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
