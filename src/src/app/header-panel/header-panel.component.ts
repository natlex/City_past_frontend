import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AboutComponent } from 'src/app/about';
import { SiteSectionTypeNames, SiteSectionTypes } from 'src/app/main';
import { ModalService } from 'src/app/modal';

@Component({
  selector: 'app-header-panel',
  templateUrl: './header-panel.component.html',
  styleUrls: ['./header-panel.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderPanelComponent {
  readonly SiteSectionTypes = SiteSectionTypes;
  readonly SiteSectionTypeNames = SiteSectionTypeNames;

  constructor(private readonly _modal: ModalService) {}

  openModal(type: SiteSectionTypes) {
    switch (type) {
      case SiteSectionTypes.about:
        this._modal.openModal(AboutComponent, SiteSectionTypeNames.about);
        break;

      default:
        console.log('Unknown modal type');
        break;
    }
  }
}
