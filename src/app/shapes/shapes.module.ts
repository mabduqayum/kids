import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShapesRoutingModule } from './shapes-routing.module';
import { ShapesComponent } from './shapes.component';


@NgModule({
  declarations: [
    ShapesComponent
  ],
  imports: [
    CommonModule,
    ShapesRoutingModule
  ]
})
export class ShapesModule { }
