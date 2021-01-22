import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared';

import { GoogleMapViewConfig } from './models/google-map-view-config';
import { GoogleMapViewConfigService } from './services/google-map-view-config.service';

@NgModule({
  imports: [SharedModule],
  providers: [
    {
      provide: GoogleMapViewConfigService,
      useValue: <GoogleMapViewConfig>{
        options: <google.maps.MapOptions>{
          center: { lat: 61.783333, lng: 34.333333 },
          zoom: 13,
        },
      },
    },
  ],
})
export class MapsModule {}
