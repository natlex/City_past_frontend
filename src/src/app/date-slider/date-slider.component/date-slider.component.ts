import { ChangeContext, Options } from '@angular-slider/ngx-slider';
import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';
import { ISlider } from '../slider';

@Component({
  selector: 'app-date-slider',
  templateUrl: './date-slider.component.html',
  styleUrls: ['./date-slider.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DateSliderComponent {

  @Output() onSliderChange = new EventEmitter<ISlider>();

  value = 1810;
  highValue = 1860;
  options: Options = {
    floor: 1800,
    ceil: new Date().getFullYear(),
    showTicksValues: true,
    tickStep: 10,
    tickValueStep: 10,
  };

  onDateSliderChange(event: ChangeContext): void {
    const startDate = new Date().setFullYear(event.value);
    const endDate = new Date().setFullYear(event.highValue as number);

    const sliderRange: ISlider = {startDate: new Date(startDate), endDate: new Date(endDate)};

    this.onSliderChange.emit(sliderRange);
  }
}
