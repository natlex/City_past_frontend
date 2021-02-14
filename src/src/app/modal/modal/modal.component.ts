import { ComponentType } from '@angular/cdk/overlay';
import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ComponentFactoryResolver,
  EventEmitter,
  Inject,
  OnDestroy,
  OnInit,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Subject } from 'rxjs';
import { takeUntil, tap } from 'rxjs/operators';
import { ModalComponentConfig } from 'src/app/modal/models';

import { ModalData } from '../models/modal-data';

@Component({
  selector: 'app-modal',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
})
export class ModalComponent<
  InnerComponentType extends ModalComponentConfig<ResultType>,
  ResultType
> implements
    OnInit,
    AfterViewInit,
    OnDestroy,
    ModalComponentConfig<ResultType> {
  component: ComponentType<InnerComponentType>;
  componentInitializer?: (component: InnerComponentType) => void;

  modalFormId?: string;
  modalFormInvalid?: boolean;
  modalResult?: ResultType;
  modalShowSubmitButton?: boolean;
  modalTitle?: string;
  modalSubmit?: EventEmitter<void>;

  get hasTitle() {
    return Boolean(this.modalTitle);
  }

  @ViewChild('content', { static: true, read: ViewContainerRef })
  private readonly _containerRef!: ViewContainerRef;

  private _component!: InnerComponentType;
  private readonly _alive = new Subject();

  constructor(
    @Inject(MAT_DIALOG_DATA)
    private readonly _data: ModalData<InnerComponentType>,
    private readonly _dialogRef: MatDialogRef<
      ModalComponent<InnerComponentType, ResultType>
    >,
    private readonly _resolver: ComponentFactoryResolver
  ) {
    this.component = this._data.component;
    this.componentInitializer = this._data?.componentInitializer;
  }

  ngOnInit() {
    const factory = this._resolver.resolveComponentFactory(
      this._data.component
    );

    const componentRef = this._containerRef.createComponent(factory);

    this._component = componentRef.instance;

    this.modalFormId = this._component?.modalFormId;
    this.modalShowSubmitButton = this._component?.modalShowSubmitButton;
    this.modalSubmit = this._component?.modalSubmit;
    this.modalTitle = this._component?.modalTitle;

    if (typeof this._data?.componentInitializer !== 'undefined') {
      this._data.componentInitializer(componentRef.instance);
    }
  }

  ngAfterViewInit() {
    if (typeof this.modalSubmit !== 'undefined') {
      this.modalSubmit
        .pipe(tap(() => this.submit(), takeUntil(this._alive)))
        .subscribe();
    }
  }

  ngOnDestroy() {
    this._alive.next();
    this._alive.complete();
  }

  submit() {
    this.modalResult = this._component.modalResult;
    this._dialogRef.close(this.modalResult);
  }
}
