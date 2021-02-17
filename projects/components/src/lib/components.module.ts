import { NgModule } from '@angular/core';
import { ComponentsComponent } from './components.component';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { DxButtonModule } from 'devextreme-angular/ui/button';
import { DxListModule } from 'devextreme-angular/ui/list';
import { CommonModule } from '@angular/common';
@NgModule({
  declarations: [ComponentsComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatTooltipModule,
    DxButtonModule,
    DxListModule
  ],
  exports: [ComponentsComponent],
  entryComponents: [ComponentsComponent]
})
export class ComponentsModule { }
