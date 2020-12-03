import { ChangeContext, Options } from '@angular-slider/ngx-slider';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-date-slider',
  templateUrl: './date-slider.component.html',
  styleUrls: ['./date-slider.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DateSliderComponent {

  value = 1810;
  highValue = 1860;
  options: Options = {
    floor: 1800,
    ceil: 2020,
    showTicksValues: true,
    tickStep: 10,
    tickValueStep: 10
  };

  onDateSliderChange(event: ChangeContext): void {
    console.log(`Start: ${event.value} End: ${event.highValue}`);
  }

}
