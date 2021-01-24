import { ComponentType } from '@angular/cdk/overlay';
import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';

import { ModalComponent } from './modal/modal.component';

@Injectable({ providedIn: 'root' })
export class ModalService {
  constructor(private readonly _modal: MatDialog) {}

  openModal<T>(
    component: ComponentType<T>,
    title?: string
  ): Observable<boolean> {
    const dialogRef = this._modal.open(ModalComponent);

    dialogRef.componentInstance.createModalComponent(component, title);

    return dialogRef.afterClosed();
  }
}
