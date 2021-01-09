import { Routes } from '@angular/router';
import { GoogleMapsScriptLoader } from 'src/app/google-maps';
import { MainComponent } from './main.component';

export const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    resolve: {
      googleMapsScriptLoaded: GoogleMapsScriptLoader,
    },
  },
];
