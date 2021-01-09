import { NgxSliderModule } from '@angular-slider/ngx-slider';
import { NgModule } from '@angular/core';
import { DateSliderComponent } from './date-slider.component';

@NgModule({
  imports: [
    NgxSliderModule,
  ],
  declarations: [
    DateSliderComponent,
  ],
  exports: [
    DateSliderComponent,
  ],
})
export class DateSliderComponentModule { }
