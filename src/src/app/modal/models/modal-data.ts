import { ComponentType } from '@angular/cdk/overlay';

export interface ModalData<InnerComponentType> {
  component: ComponentType<InnerComponentType>;
  componentInitializer?: (component: InnerComponentType) => void;
}
