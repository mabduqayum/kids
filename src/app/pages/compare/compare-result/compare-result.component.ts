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
    this.message = this.getMessage(data);
  }

  @HostListener('window:keyup.esc')
  onKeyUp() {
    this.dialogRef.close();
  }

  getMessage(points: number): string {
    if (points < .5) {
      return 'Try next time';
    } else if (points < .65) {
      return 'Good'
    } else if (points < .75) {
      return 'Well done'
    } else if (points < 1) {
      return 'Excellent'
    } else {
      return 'Perfect'
    }
  }
}
