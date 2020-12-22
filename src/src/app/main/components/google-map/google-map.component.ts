import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  OnInit,
} from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';

import { MapOptions } from '../../constants/map-options';
import { GoogleMapConfig } from '../../models/google-map-config';
import { Marker, MarkerCoordinates } from '../../models/marker';
import { GoogleMapConfigService } from '../../services/google-map-config.service';
import { GoogleMapScriptLoaderService } from '../../services/google-map-script-loader.service';
import { MarkerStorageService } from '../../services/marker-storage.service';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-google-map',
  templateUrl: './google-map.component.html',
  styleUrls: ['./google-map.component.css'],
})
export class GoogleMapComponent implements OnInit {
  loaded$ = new BehaviorSubject<boolean>(false);
  markers$ = new BehaviorSubject<Marker[]>([]);
  options = MapOptions;

  constructor(
    @Inject(GoogleMapConfigService)
    private readonly _config: GoogleMapConfig,
    private readonly _loader: GoogleMapScriptLoaderService,
    private readonly _markerStorage: MarkerStorageService
  ) {}

  ngOnInit() {
    this._loadMap();

    this._getMarkers();
  }

  addMarker(evnt: google.maps.MouseEvent, markers: Marker[]) {
    this._markerStorage
      .createMarker()
      .pipe(
        tap((result) => {
          if (!result) return;

          const coordinates = <MarkerCoordinates>{
            latitude: evnt.latLng.lat(),
            longitude: evnt.latLng.lng(),
          };

          this._addMarker(coordinates, markers);
        })
      )
      .subscribe();
  }

  private _addMarker(coordinates: MarkerCoordinates, markers: Marker[]) {
    const tempMarkers = markers;

    tempMarkers.push(<Marker>{ coordinates });

    this.markers$.next(tempMarkers);

    console.log(
      `Latitude: ${coordinates.latitude}, Longitude: ${coordinates.longitude}`
    );
  }

  private _getMarkers() {
    this._markerStorage
      .getAllMarkers()
      .pipe(tap((markers) => this.markers$.next(markers)))
      .subscribe();
  }

  private _loadMap() {
    const url =
      'https://maps.googleapis.com/maps/api/js' +
      `?key=${this._config.googleMapApiKey}`;

    this._loader.loadScript(url).subscribe(() => this.loaded$.next(true));
  }
}
