import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GoogleMapScriptLoaderMockService {
  loadScript(): Observable<boolean> {
    return of(true);
  }
}
