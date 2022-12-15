import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompareRoutingModule } from './compare-routing.module';
import { CompareComponent } from './compare.component';
import {MenuButtonComponent} from "../../components/menu-button/menu-button.component";


@NgModule({
  declarations: [
    CompareComponent
  ],
  imports: [
    CommonModule,
    CompareRoutingModule,
    MenuButtonComponent
  ]
})
export class CompareModule { }
