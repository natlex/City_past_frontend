import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { GoogleMapViewConfig } from './models/google-map-view-config';
import { GoogleMapViewConfigService } from './services/google-map-view-config.service';

@NgModule({
  imports: [CommonModule],
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
