import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShapesRoutingModule } from './shapes-routing.module';
import { ShapesComponent } from './shapes.component';
import {DragDropModule} from "@angular/cdk/drag-drop";
import { ShapesResultComponent } from './shapes-result/shapes-result.component';
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatDialogModule} from "@angular/material/dialog";
import {MenuButtonComponent} from "../../components/menu-button/menu-button.component";


@NgModule({
  declarations: [
    ShapesComponent,
    ShapesResultComponent
  ],
  imports: [
    CommonModule,
    ShapesRoutingModule,
    DragDropModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MenuButtonComponent,
  ]
})
export class ShapesModule { }
