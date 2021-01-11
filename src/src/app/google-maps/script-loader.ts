import { HttpClient, HttpParams } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError, map, publishReplay, refCount } from 'rxjs/operators';
import { GOOGLE_MAPS_API_KEY } from './api-key.token';

const SCRIPT_URL = 'https://maps.googleapis.com/maps/api/js';

@Injectable({
  providedIn: 'root',
})
export class GoogleMapsScriptLoader implements Resolve<boolean> {
  readonly scriptLoaded$: Observable<boolean>;

  constructor(
    @Inject(GOOGLE_MAPS_API_KEY) apiKey: string,
    httpClient: HttpClient,
  ) {
    this.scriptLoaded$ = this._loadScript(httpClient, apiKey)
      .pipe(
        publishReplay(1),
        refCount(),
      );
  }

  resolve(_route: ActivatedRouteSnapshot, _state: RouterStateSnapshot): Observable<boolean> {
    return this.scriptLoaded$;
  }

  _loadScript(httpClient: HttpClient, apiKey: string): Observable<boolean> {
    const queryParams = new HttpParams().append('key', apiKey);
    const url = `${SCRIPT_URL}?${queryParams.toString()}`;

    return httpClient.jsonp(url, 'callback').pipe(
      map(() => true),
      catchError(() => of(false)),
    );
  }
}
