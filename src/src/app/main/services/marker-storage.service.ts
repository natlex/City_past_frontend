import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Marker } from '../models/marker';

@Injectable({
  providedIn: 'root',
})
export class MarkerStorageService {
  getAllMarkers(): Observable<Marker[]> {
    return of([
      <Marker>{
        coordinates: {
          latitude: 61.77625594945171,
          longitude: 34.30834442808107,
        },
      },
      <Marker>{
        coordinates: {
          latitude: 61.784380796376816,
          longitude: 34.3447208404541,
        },
      },
      <Marker>{
        coordinates: {
          latitude: 61.7900890068273,
          longitude: 34.37491568247985,
        },
      },
      <Marker>{
        coordinates: {
          latitude: 61.79136849012713,
          longitude: 34.3645658348205,
        },
      },
      <Marker>{
        coordinates: {
          latitude: 61.79573094898839,
          longitude: 34.375072717666626,
        },
      },
    ]);
  }

  createMarker(): Observable<string> {
    return of('Marker was added successfully');
  }
}
