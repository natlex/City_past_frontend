import { CommonModule } from '@angular/common';
import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { environment } from '../../environments/environment';
import { GoogleMapApiConfig } from './models/google-map-api-config';
import { GoogleMapViewConfig } from './models/google-map-view-config';
import { GoogleMapApiConfigService } from './services/google-map-api-config.service';
import { GoogleMapViewConfigService } from './services/google-map-view-config.service';

@NgModule({
  imports: [CommonModule, HttpClientModule, HttpClientJsonpModule],
  providers: [
    {
      provide: GoogleMapApiConfigService,
      useValue: <GoogleMapApiConfig>{
        googleMapApiKey: environment.googleMapApiKey,
      },
    },
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
