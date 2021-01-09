import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { map, scan, shareReplay, tap } from 'rxjs/operators';

import { GoogleMapViewConfig } from '../../models/google-map-view-config';
import { Marker } from '../../models/marker';
import { GoogleMapViewConfigService } from '../../services/google-map-view-config.service';
import { MarkerStorageService } from '../../services/marker-storage.service';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-google-map',
  templateUrl: './google-map.component.html',
  styleUrls: ['./google-map.component.css'],
})
export class GoogleMapComponent {
  readonly options = this._config.options;

  private readonly _addedMarker$ = new ReplaySubject<Marker>(1);

  private readonly _gottenMarkers$ = this._markerStorage
    .getAllMarkers()
    .pipe(shareReplay());

  readonly addedMarkersForMap$ = this._addedMarker$.pipe(
    scan(
      (markers, marker) => [...markers, this._makeMapMarker(marker)],
      <google.maps.LatLng[]>[]
    )
  );

  readonly gottenMarkersForMap$ = this._gottenMarkers$.pipe(
    map((markers) => markers.map((marker) => this._makeMapMarker(marker)))
  );

  constructor(
    @Inject(GoogleMapViewConfigService)
    private readonly _config: GoogleMapViewConfig,
    private readonly _markerStorage: MarkerStorageService
  ) {}

  addMarker(evnt: google.maps.MouseEvent) {
    const newMarker = <Marker>{
      coordinates: {
        latitude: evnt.latLng.lat(),
        longitude: evnt.latLng.lng(),
      },
    };

    this._markerStorage
      .createMarker(newMarker)
      .pipe(
        tap((marker) => this._addedMarker$.next(marker)),
        tap((marker) =>
          console.log(
            `Latitude: ${marker.coordinates.latitude}, Longitude: ${marker.coordinates.longitude}`
          )
        )
      )
      .subscribe();
  }

  private _makeMapMarker(marker: Marker): google.maps.LatLng {
    return new google.maps.LatLng(
      marker.coordinates.latitude,
      marker.coordinates.longitude
    );
  }
}
