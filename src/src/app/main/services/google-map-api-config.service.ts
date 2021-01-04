import { InjectionToken } from '@angular/core';

import { GoogleMapApiConfig } from '../models/google-map-api-config';

export const GoogleMapApiConfigService = new InjectionToken<GoogleMapApiConfig>(
  'GoogleMapApiConfig'
);
