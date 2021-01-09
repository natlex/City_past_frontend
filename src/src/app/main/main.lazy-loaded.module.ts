import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { GoogleMapsModule } from '@angular/google-maps';
import { RouterModule } from '@angular/router';
import { DateSliderModule } from 'src/app/date-slider';

import { GoogleMapComponent } from './components/google-map/google-map.component';
import { MainComponent } from './main.component';
import { routes } from './main.routes';
import { MapsModule } from './maps.module';

@NgModule({
  declarations: [MainComponent, GoogleMapComponent],
  imports: [
    CommonModule,
    GoogleMapsModule,
    RouterModule.forChild(routes),
    MapsModule,
    DateSliderModule,
  ],
})
export class MainLazyLoadedModule {}
