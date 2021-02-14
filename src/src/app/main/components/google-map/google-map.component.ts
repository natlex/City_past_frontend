import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { map, scan, shareReplay, tap } from 'rxjs/operators';
import { MarkerDialogComponent } from 'src/app/main/components/marker-dialog';
import { ModalService } from 'src/app/modal';

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
    private readonly _markerStorage: MarkerStorageService,
    private readonly _modal: ModalService
  ) {}

  openMarkerModal(evnt: google.maps.MouseEvent) {
    const newMarker = <Marker>{
      coordinates: {
        latitude: evnt.latLng.lat(),
        longitude: evnt.latLng.lng(),
      },
    };

    this._modal
      .openModal<MarkerDialogComponent, Marker>(
        MarkerDialogComponent,
        (component) => {
          component.marker = newMarker;
        }
      )
      .pipe(
        tap((result) => {
          this._addedMarker$.next(result);
        })
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
