import { EventEmitter } from '@angular/core';

export interface ModalComponentConfig<ResultType> {
  modalFormId?: string;
  modalResult?: ResultType;
  modalShowSubmitButton?: boolean;
  modalSubmit?: EventEmitter<void>;
  modalTitle?: string;
}
