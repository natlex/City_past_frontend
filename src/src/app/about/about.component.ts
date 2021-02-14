import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ModalComponentConfig } from 'src/app/modal/models';

@Component({
  selector: 'app-about',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent implements ModalComponentConfig<boolean> {
  modalTitle = 'О проекте';
  modalResult = true;
}
