import { ComponentType } from '@angular/cdk/overlay';
import { Injectable } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Observable } from 'rxjs';

import { ModalModule } from './modal.module';
import { ModalComponent } from './modal/modal.component';

@Injectable({ providedIn: ModalModule })
export class ModalService {
  constructor(private readonly _modal: MatDialog) {}

  openModal<T>(
    component: ComponentType<T>,
    title?: string
  ): Observable<boolean> {
    const config = <MatDialogConfig>{
      autoFocus: true,
      panelClass: 'app-modal',
    };

    const dialogRef = this._modal.open(ModalComponent, config);

    dialogRef.componentInstance.createModalComponent(component, title);

    return dialogRef.afterClosed();
  }
}
