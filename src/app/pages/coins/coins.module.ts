import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoinsRoutingModule } from './coins-routing.module';
import { CoinsComponent } from './coins.component';
import {MenuButtonComponent} from "../../components/menu-button/menu-button.component";


@NgModule({
  declarations: [
    CoinsComponent
  ],
    imports: [
        CommonModule,
        CoinsRoutingModule,
        MenuButtonComponent
    ]
})
export class CoinsModule { }
