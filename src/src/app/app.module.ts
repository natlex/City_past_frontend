import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { DateSliderComponent } from './date-slider/date-slider.component';
import { NgModule } from '@angular/core';
import { NgxSliderModule } from '@angular-slider/ngx-slider';

@NgModule({
  declarations: [
    AppComponent,
    DateSliderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxSliderModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
