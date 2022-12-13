import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShapesRoutingModule } from './shapes-routing.module';
import { ShapesComponent } from './shapes.component';
import {DragDropModule} from "@angular/cdk/drag-drop";


@NgModule({
  declarations: [
    ShapesComponent
  ],
  imports: [
    CommonModule,
    ShapesRoutingModule,
    DragDropModule,
  ]
})
export class ShapesModule { }
