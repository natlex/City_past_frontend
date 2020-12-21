import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  OnInit,
} from '@angular/core';
import { of } from 'rxjs';

import { GoogleMapConfig } from '../../models/google-map-config';
import { GoogleMapConfigService } from '../../services/google-map-config.service';
import { GoogleMapScriptLoaderService } from '../../services/google-map-script-loader.service';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-google-map',
  templateUrl: './google-map.component.html',
  styleUrls: ['./google-map.component.css'],
})
export class GoogleMapComponent implements OnInit {
  loaded$ = of(false);
  markerPositions: google.maps.LatLng[] = [];

  constructor(
    @Inject(GoogleMapConfigService)
    private readonly _config: GoogleMapConfig,
    private readonly _loader: GoogleMapScriptLoaderService
  ) {}

  ngOnInit() {
    const url =
      'https://maps.googleapis.com/maps/api/js' +
      `?key=${this._config.googleMapApiKey}`;

    this.loaded$ = this._loader.loadScript(url);
  }

  addMarker(evnt: google.maps.MouseEvent) {
    this.markerPositions.push(evnt.latLng);

    console.log(
      `Latitude: ${evnt.latLng.lat()}, Longitude: ${evnt.latLng.lng()}`
    );
  }
}
