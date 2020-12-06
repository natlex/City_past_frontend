import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'City-past';

  outputSliderRange(range: string): void {
    console.log(range);
  }
}
