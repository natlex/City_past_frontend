import { ComponentType } from '@angular/cdk/overlay';
import { Injectable } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Observable } from 'rxjs';

import { ModalComponent } from './modal/modal.component';
import { ModalData } from './models/modal-data';

@Injectable({ providedIn: 'root' })
export class ModalService {
  constructor(private readonly _modal: MatDialog) {}

  openModal<InnerComponentType>(
    component: ComponentType<InnerComponentType>,
    title?: string
  ): Observable<boolean> {
    const dialogRef = this._modal.open(ModalComponent, <MatDialogConfig>{
      data: <ModalData<InnerComponentType>>{
        component,
        title,
      },
    });

    return dialogRef.afterClosed();
  }
}
