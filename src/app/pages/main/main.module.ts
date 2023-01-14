import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatMenuModule} from "@angular/material/menu";
import {LangPanelComponent} from "../../components/lang-panel/lang-panel.component";
import {TranslateModule} from "@ngx-translate/core";


@NgModule({
  declarations: [
    MainComponent
  ],
    imports: [
        CommonModule,
        MainRoutingModule,
        MatIconModule,
        MatButtonModule,
        MatMenuModule,
        LangPanelComponent,
        TranslateModule
    ]
})
export class MainModule { }
