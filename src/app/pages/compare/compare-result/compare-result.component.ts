import {Component, HostListener, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {getMessage} from "../../../utils/get-message";

@Component({
  selector: 'app-compare-result',
  templateUrl: './compare-result.component.html',
  styleUrls: ['./compare-result.component.scss']
})
export class CompareResultComponent {
  message?: string;

  constructor(@Inject(MAT_DIALOG_DATA) public data: number,
              private dialogRef: MatDialogRef<CompareResultComponent>) {
    this.message = getMessage(data);
  }

  @HostListener('window:keyup.esc')
  onKeyUp() {
    this.dialogRef.close();
  }
}
