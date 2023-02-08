import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {getMessage} from "../../../utils/get-message";

@Component({
  selector: 'app-coins-result',
  templateUrl: './coins-result.component.html',
  styleUrls: ['./coins-result.component.scss']
})
export class CoinsResultComponent {
  message?: string;

  constructor(@Inject(MAT_DIALOG_DATA) public data: number,) {
    this.message = getMessage(data);
  }
}
