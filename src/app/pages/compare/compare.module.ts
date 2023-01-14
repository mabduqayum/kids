import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompareRoutingModule } from './compare-routing.module';
import { CompareComponent } from './compare.component';
import {MenuButtonComponent} from "../../components/menu-button/menu-button.component";
import { CompareResultComponent } from './compare-result/compare-result.component';
import {MatDialogModule} from "@angular/material/dialog";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {TranslateModule} from "@ngx-translate/core";


@NgModule({
  declarations: [
    CompareComponent,
    CompareResultComponent
  ],
    imports: [
        CommonModule,
        CompareRoutingModule,
        MenuButtonComponent,
        MatDialogModule,
        MatIconModule,
        MatButtonModule,
        TranslateModule
    ]
})
export class CompareModule { }
