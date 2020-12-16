import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class GoogleMapScriptLoaderService {
  constructor(private readonly _httpClient: HttpClient) {}

  loadScript(url: string): Observable<boolean> {
    return this._httpClient.jsonp(url, 'callback').pipe(
      map(() => true),
      catchError(() => of(false))
    );
  }
}
