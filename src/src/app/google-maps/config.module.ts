import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { GOOGLE_MAPS_API_KEY } from 'src/app/google-maps/api-key.token';

@NgModule({
  imports: [
    HttpClientModule,
    HttpClientJsonpModule,
  ],
})
export class GoogleMapsConfigModule {
  static forRoot(googleMapsApiKey: string): ModuleWithProviders<GoogleMapsConfigModule> {
    return <ModuleWithProviders<GoogleMapsConfigModule>> {
      ngModule: GoogleMapsConfigModule,
      providers: [
        { provide: GOOGLE_MAPS_API_KEY, useValue: googleMapsApiKey, },
      ],
    };
  }
}
