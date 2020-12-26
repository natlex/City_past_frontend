import { InjectionToken } from '@angular/core';

import { GoogleMapViewConfig } from '../models/google-map-view-config';

export const GoogleMapViewConfigService = new InjectionToken<GoogleMapViewConfig>(
  'GoogleMapViewConfig'
);
