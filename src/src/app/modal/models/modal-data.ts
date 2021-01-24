import { ComponentType } from '@angular/cdk/portal';

export interface ModalData<InnerComponentType> {
  component: ComponentType<InnerComponentType>;
  title?: string;
}
