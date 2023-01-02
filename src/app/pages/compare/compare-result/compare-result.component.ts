import {Component, HostListener, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-compare-result',
  templateUrl: './compare-result.component.html',
  styleUrls: ['./compare-result.component.scss']
})
export class CompareResultComponent {
  message?: string;

  constructor(@Inject(MAT_DIALOG_DATA) public data: number,
              private dialogRef: MatDialogRef<CompareResultComponent>) {
    this.updateMessage(data);
  }

  @HostListener('window:keyup.esc')
  onKeyUp() {
    this.dialogRef.close();
  }

  updateMessage(points: number) {
    if (points < .5) {
      this.message = 'Try next time';
    } else if (points < .65) {
      this.message = 'Good';
    } else if (points < .75) {
      this.message = 'Well done';
    } else if (points < 1) {
      this.message = 'Excellent';
    } else {
      this.message = 'Perfect';
    }
  }
}
