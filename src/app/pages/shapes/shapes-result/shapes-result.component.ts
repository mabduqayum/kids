import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-shapes-result',
  templateUrl: './shapes-result.component.html',
  styleUrls: ['./shapes-result.component.scss']
})
export class ShapesResultComponent {
  @Input() allCorrect: boolean = true;

  constructor() {
  }
}
