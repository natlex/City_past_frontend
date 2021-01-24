import {
  ChangeDetectionStrategy,
  Component,
  ComponentFactoryResolver,
  Type,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';

@Component({
  selector: 'app-modal',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
})
export class ModalComponent {
  title?: string;

  get hasTitle() {
    return Boolean(this.title);
  }

  @ViewChild('content', { static: true, read: ViewContainerRef })
  private readonly _containerRef!: ViewContainerRef;

  constructor(private readonly resolver: ComponentFactoryResolver) {}

  createModalComponent<T>(componentType: Type<T>, title?: string) {
    const factory = this.resolver.resolveComponentFactory(componentType);

    this._containerRef.createComponent(factory);

    this.title = title;
  }
}
