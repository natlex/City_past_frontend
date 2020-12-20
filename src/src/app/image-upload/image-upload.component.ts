import { Component, ChangeDetectionStrategy } from '@angular/core';
import { NgxDropzoneChangeEvent } from 'ngx-dropzone';

@Component({
  selector: 'app-image-upload',
  templateUrl: './image-upload.component.html',
  styleUrls: ['./image-upload.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ImageUploadComponent {
  images: File[] = [];

  onSelect(event: NgxDropzoneChangeEvent): void {
    this.images.push(...event.addedFiles);
  }

  onRemove(event: File): void {
    this.images.splice(this.images.indexOf(event), 1);
  }
}
