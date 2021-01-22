import { NgModule } from '@angular/core';
import { AboutComponent } from 'src/app/about';
import { SharedModule } from 'src/app/shared';

import { ModalComponent } from './modal/modal.component';

@NgModule({
  declarations: [AboutComponent, ModalComponent],
  imports: [SharedModule],
})
export class ModalModule {}
