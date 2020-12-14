import { Component } from '@angular/core'
import { ISlider } from './date-slider/slider'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'City-past';

  outputSliderRange (range: ISlider): void {
    const datesRange = `Start: ${range.startDate.getFullYear()} End: ${range.endDate.getFullYear()}`
    console.log(datesRange)
  }
}
