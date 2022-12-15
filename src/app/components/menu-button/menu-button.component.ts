import { Component } from '@angular/core';
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-menu-button',
  templateUrl: './menu-button.component.html',
  styleUrls: ['./menu-button.component.scss'],
  imports: [
    MatIconModule,
    MatButtonModule,
    RouterLink
  ],
  standalone: true
})
export class MenuButtonComponent {

}
