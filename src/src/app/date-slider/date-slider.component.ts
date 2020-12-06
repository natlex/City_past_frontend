import { ChangeContext, Options } from '@angular-slider/ngx-slider';
import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-date-slider',
  templateUrl: './date-slider.component.html',
  styleUrls: ['./date-slider.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DateSliderComponent {

  @Output() onSliderChange = new EventEmitter<string>();

  value = 1810;
  highValue = 1860;
  options: Options = {
    floor: 1800,
    ceil: new Date().getFullYear(),
    showTicksValues: true,
    tickStep: 10,
    tickValueStep: 10
  };

  onDateSliderChange(event: ChangeContext): void {
    const datesRange = `Start: ${event.value} End: ${event.highValue}`;
    this.onSliderChange.emit(datesRange);
  }
}
