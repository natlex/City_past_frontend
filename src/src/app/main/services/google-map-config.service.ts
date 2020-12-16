import { InjectionToken } from '@angular/core';

import { GoogleMapConfig } from '../models/google-map-config';

export const GoogleMapConfigService = new InjectionToken<GoogleMapConfig>(
  'GoogleMapConfig'
);
