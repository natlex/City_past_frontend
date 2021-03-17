import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { GoogleMapsModule } from '@angular/google-maps';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { RouterModule } from '@angular/router';
import { AboutComponent } from 'src/app/about';
import { DateSliderModule } from 'src/app/date-slider';
import { MarkerDialogComponent } from 'src/app/main/components';

import { GoogleMapComponent } from './components/google-map/google-map.component';
import { MainComponent } from './main.component';
import { routes } from './main.routes';
import { MapsModule } from './maps.module';

@NgModule({
  declarations: [
    AboutComponent,
    GoogleMapComponent,
    MainComponent,
    MarkerDialogComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    GoogleMapsModule,
    RouterModule.forChild(routes),
    MapsModule,
    MatButtonModule,
    MatDatepickerModule,
    MatDialogModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    DateSliderModule,
  ],
})
export class MainLazyLoadedModule {}
