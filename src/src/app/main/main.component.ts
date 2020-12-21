import { ChangeDetectionStrategy, Component } from '@angular/core';

import { ISlider } from '../date-slider/slider';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainComponent {
  outputSliderRange(range: ISlider): void {
    const datesRange = `Start: ${range.startDate.getFullYear()} End: ${range.endDate.getFullYear()}`;
    console.log(datesRange);
  }
}
