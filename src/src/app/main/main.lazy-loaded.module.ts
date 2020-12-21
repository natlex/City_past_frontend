import { NgxSliderModule } from '@angular-slider/ngx-slider';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { GoogleMapsModule } from '@angular/google-maps';
import { RouterModule } from '@angular/router';

import { DateSliderComponent } from '../date-slider/date-slider.component';
import { GoogleMapComponent } from './components/google-map/google-map.component';
import { MainComponent } from './main.component';
import { routes } from './main.routes';
import { MapsModule } from './maps.module';

@NgModule({
  declarations: [MainComponent, DateSliderComponent, GoogleMapComponent],
  imports: [
    CommonModule,
    GoogleMapsModule,
    RouterModule.forChild(routes),
    NgxSliderModule,
    MapsModule,
  ],
})
export class MainLazyLoadedModule {}
