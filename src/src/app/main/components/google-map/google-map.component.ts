import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { BehaviorSubject, combineLatest, Subject } from 'rxjs';
import { shareReplay, takeUntil, tap } from 'rxjs/operators';

import { GoogleMapConfig } from '../../models/google-map-config';
import { Marker } from '../../models/marker';
import { GoogleMapConfigService } from '../../services/google-map-config.service';
import { GoogleMapScriptLoaderService } from '../../services/google-map-script-loader.service';
import { MarkerStorageService } from '../../services/marker-storage.service';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-google-map',
  templateUrl: './google-map.component.html',
  styleUrls: ['./google-map.component.css'],
})
export class GoogleMapComponent implements OnInit, OnDestroy {
  readonly loaded$ = new BehaviorSubject<boolean>(false);
  readonly markers$ = this._markerStorage.getAllMarkers().pipe(shareReplay());
  readonly options = this._config.options;

  private readonly _alive$ = new Subject<void>();

  constructor(
    @Inject(GoogleMapConfigService)
    private readonly _config: GoogleMapConfig,
    private readonly _loader: GoogleMapScriptLoaderService,
    private readonly _markerStorage: MarkerStorageService
  ) {}

  ngOnInit() {
    this._loadMap();
  }

  ngOnDestroy() {
    this._alive$.next();
    this._alive$.complete();
  }

  addMarker(evnt: google.maps.MouseEvent) {
    const newMarker = <Marker>{
      coordinates: {
        latitude: evnt.latLng.lat(),
        longitude: evnt.latLng.lng(),
      },
    };

    combineLatest([this._markerStorage.createMarker(newMarker), this.markers$])
      .pipe(
        tap(([marker, markers]) => {
          if (!marker) return;

          this._addMarker(marker, markers);
        }),
        takeUntil(this._alive$)
      )
      .subscribe();
  }

  private _addMarker(marker: Marker, markers: Marker[]) {
    markers.push(marker);

    console.log(
      `Latitude: ${marker.coordinates.latitude}, Longitude: ${marker.coordinates.longitude}`
    );
  }

  private _loadMap() {
    const url =
      'https://maps.googleapis.com/maps/api/js' +
      `?key=${this._config.googleMapApiKey}`;

    this._loader.loadScript(url).subscribe(() => this.loaded$.next(true));
  }
}
