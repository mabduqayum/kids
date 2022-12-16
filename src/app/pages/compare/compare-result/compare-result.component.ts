import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA} from "@angular/material/dialog";

@Component({
  selector: 'app-compare-result',
  templateUrl: './compare-result.component.html',
  styleUrls: ['./compare-result.component.scss']
})
export class CompareResultComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: boolean) {
  }
}
