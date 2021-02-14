import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AboutComponent } from 'src/app/about';
import { ModalService } from 'src/app/modal';

@Component({
  selector: 'app-header-panel',
  templateUrl: './header-panel.component.html',
  styleUrls: ['./header-panel.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderPanelComponent {
  constructor(private readonly _modal: ModalService) {}

  openAboutModal() {
    this._modal.openModal(AboutComponent);
  }
}
