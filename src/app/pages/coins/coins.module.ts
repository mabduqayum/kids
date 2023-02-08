import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoinsRoutingModule } from './coins-routing.module';
import { CoinsComponent } from './coins.component';
import {MenuButtonComponent} from "../../components/menu-button/menu-button.component";
import {TranslateModule} from "@ngx-translate/core";
import {MatRippleModule} from "@angular/material/core";
import { CoinsResultComponent } from './coins-result/coins-result.component';
import {MatDialogModule} from "@angular/material/dialog";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";


@NgModule({
  declarations: [
    CoinsComponent,
    CoinsResultComponent
  ],
  imports: [
    CommonModule,
    CoinsRoutingModule,
    MenuButtonComponent,
    TranslateModule,
    MatRippleModule,
    MatDialogModule,
    MatIconModule,
    MatButtonModule
  ]
})
export class CoinsModule { }
