import {Component, HostListener, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-shapes-result',
  templateUrl: './shapes-result.component.html',
  styleUrls: ['./shapes-result.component.scss']
})
export class ShapesResultComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: boolean,
              private dialogRef: MatDialogRef<ShapesResultComponent>) {
  }

  @HostListener('window:keyup.esc')
  onKeyUp() {
    this.dialogRef.close();
  }
}
