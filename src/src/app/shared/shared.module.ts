import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';

const exportingModules = [CommonModule, MatButtonModule, MatDialogModule];

@NgModule({
  imports: [...exportingModules],
  exports: [...exportingModules],
})
export class SharedModule {}
