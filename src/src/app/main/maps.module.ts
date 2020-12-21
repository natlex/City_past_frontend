import { CommonModule } from '@angular/common';
import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';
import { ModuleWithProviders, NgModule } from '@angular/core';

import { GoogleMapConfig } from './models/google-map-config';
import { GoogleMapConfigService } from './services/google-map-config.service';

@NgModule({
  imports: [CommonModule, HttpClientModule, HttpClientJsonpModule],
})
export class MapsModule {
  static forRoot(config: GoogleMapConfig): ModuleWithProviders<MapsModule> {
    return {
      ngModule: MapsModule,
      providers: [
        {
          provide: GoogleMapConfigService,
          useValue: config,
        },
      ],
    };
  }
}
