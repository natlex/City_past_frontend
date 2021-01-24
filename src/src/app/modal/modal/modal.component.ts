import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ComponentFactoryResolver,
  Inject,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

import { ModalData } from '../models/modal-data';

@Component({
  selector: 'app-modal',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
})
export class ModalComponent<InnerComponentType> implements AfterViewInit {
  title?: string;

  get hasTitle() {
    return Boolean(this.title);
  }

  @ViewChild('content', { static: true, read: ViewContainerRef })
  private readonly _containerRef!: ViewContainerRef;

  constructor(
    @Inject(MAT_DIALOG_DATA)
    private readonly _data: ModalData<InnerComponentType>,
    private readonly _resolver: ComponentFactoryResolver
  ) {
    this.title = this._data.title;
  }

  ngAfterViewInit() {
    const factory = this._resolver.resolveComponentFactory(
      this._data.component
    );

    this._containerRef.createComponent(factory);
  }
}
