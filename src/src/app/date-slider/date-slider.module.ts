import { NgModule } from '@angular/core';
import { DateSliderComponentModule } from './date-slider.component';

@NgModule({
  imports: [
    DateSliderComponentModule,
  ],
  exports: [
    DateSliderComponentModule,
  ],
})
export class DateSliderModule { }
