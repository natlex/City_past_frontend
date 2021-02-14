import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  ViewChild,
} from '@angular/core';
import { NgForm } from '@angular/forms';
import { MAT_DATE_FORMATS } from '@angular/material/core';
import { MatDatepicker } from '@angular/material/datepicker';
import { tap } from 'rxjs/operators';
import { YEAR_MODE } from 'src/app/main/constants';
import { Marker } from 'src/app/main/models';
import { MarkerStorageService } from 'src/app/main/services';
import { ModalComponentConfig } from 'src/app/modal/models';

@Component({
  selector: 'app-marker-dialog',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './marker-dialog.component.html',
  styleUrls: ['./marker-dialog.component.css'],
  providers: [
    {
      provide: MAT_DATE_FORMATS,
      useValue: YEAR_MODE,
    },
  ],
})
export class MarkerDialogComponent implements ModalComponentConfig<Marker> {
  @ViewChild('form', { static: true })
  private readonly _form!: NgForm;

  address = '';
  description = '';

  get formInvalid() {
    return this._form.invalid;
  }

  marker!: Marker;

  modalFormId = 'marker-dialog-form';
  modalResult!: Marker;
  modalShowSubmitButton = true;
  modalSubmit = new EventEmitter<void>();
  modalTitle = 'Добавить метку на карте';

  name = '';
  url = '';
  year = new Date();

  constructor(private readonly _markerStorage: MarkerStorageService) {}

  submit() {
    if (this.formInvalid) return;

    this._markerStorage
      .createMarker(this.marker)
      .pipe(
        tap((marker) => {
          console.log(
            `Latitude: ${marker.coordinates.latitude}, Longitude: ${marker.coordinates.longitude}`
          );

          this.modalResult = marker;
        })
      )
      .subscribe();

    this.modalSubmit.emit();
  }

  openDatePicker(datepicker: MatDatepicker<Date>) {
    if (!datepicker.opened) {
      datepicker.open();
    }
  }

  yearSelected(chosenDate: Date, datepicker: MatDatepicker<Date>) {
    datepicker.close();

    this.year = chosenDate;
  }
}
