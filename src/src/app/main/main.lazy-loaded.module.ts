import { NgModule } from '@angular/core';
import { GoogleMapsModule } from '@angular/google-maps';
import { RouterModule } from '@angular/router';
import { DateSliderModule } from 'src/app/date-slider';
import { SharedModule } from 'src/app/shared/shared.module';

import { GoogleMapComponent } from './components/google-map/google-map.component';
import { MainComponent } from './main.component';
import { routes } from './main.routes';
import { MapsModule } from './maps.module';

@NgModule({
  declarations: [MainComponent, GoogleMapComponent],
  imports: [
    GoogleMapsModule,
    RouterModule.forChild(routes),
    MapsModule,
    DateSliderModule,
    SharedModule,
  ],
})
export class MainLazyLoadedModule {}
