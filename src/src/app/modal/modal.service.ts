import { ComponentType } from '@angular/cdk/overlay';
import { Injectable } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';

import { ModalComponent } from './modal/modal.component';
import { ModalData } from './models/modal-data';

@Injectable({ providedIn: 'root' })
export class ModalService {
  constructor(private readonly _modal: MatDialog) {}

  openModal<InnerComponentType, ResultType>(
    component: ComponentType<InnerComponentType>,
    componentInitializer?: (component: InnerComponentType) => void
  ): Observable<ResultType> {
    const dialogRef = this._modal.open<
      ModalData<InnerComponentType>,
      InnerComponentType,
      ResultType
    >(ModalComponent, <MatDialogConfig>{
      data: <ModalData<InnerComponentType>>{
        component,
        componentInitializer,
      },
    });

    return dialogRef.afterClosed().pipe(
      filter((i) => typeof i !== 'undefined'),
      map((i) => <ResultType>i)
    );
  }
}
