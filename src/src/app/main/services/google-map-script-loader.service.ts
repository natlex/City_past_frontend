import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { GoogleMapApiConfig } from '../models/google-map-api-config';
import { GoogleMapApiConfigService } from './google-map-api-config.service';

@Injectable({
  providedIn: 'root',
})
export class GoogleMapScriptLoaderService {
  private readonly _url =
    'https://maps.googleapis.com/maps/api/js' +
    `?key=${this._config.googleMapApiKey}`;

  constructor(
    @Inject(GoogleMapApiConfigService)
    private readonly _config: GoogleMapApiConfig,
    private readonly _httpClient: HttpClient
  ) {}

  loadScript(): Observable<boolean> {
    return this._httpClient.jsonp(this._url, 'callback').pipe(
      map(() => true),
      catchError(() => of(false))
    );
  }
}
