import { ChangeContext } from '@angular-slider/ngx-slider';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'City-past';

  outputSliderRange(range: ChangeContext): void {
    const datesRange = `Start: ${range.value} End: ${range.highValue}`;
    console.log(datesRange);
  }
}
