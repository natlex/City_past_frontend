import { Component, OnInit } from '@angular/core';
import {Options} from '@angular-slider/ngx-slider';

@Component({
  selector: 'app-date-slider',
  templateUrl: './date-slider.component.html',
  styleUrls: ['./date-slider.component.css']
})
export class DateSliderComponent implements OnInit {

  value = 1810;
  highValue = 1860;
  options: Options = {
    floor: 1800,
    ceil: 2020,
    showTicksValues: true,
    tickStep: 10,
    tickValueStep: 10
  };

  constructor() { }

  ngOnInit(): void {
  }

  onDateSliderChange(event: any): void {
    console.log(`Start: ${event.value} End: ${event.highValue}`);
  }

}
