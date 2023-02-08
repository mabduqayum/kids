import {Component, OnInit} from '@angular/core';
import {Shape} from "../../interfaces/shape";
import {CdkDragDrop, moveItemInArray, transferArrayItem} from "@angular/cdk/drag-drop";
import {MatDialog} from '@angular/material/dialog';
import {ShapesResultComponent} from "./shapes-result/shapes-result.component";
import {Router} from "@angular/router";
import {shuffle} from "../../utils/random";

@Component({
  selector: 'app-shapes',
  templateUrl: './shapes.component.html',
  styleUrls: ['./shapes.component.scss']
})
export class ShapesComponent implements OnInit {
  shapes: Shape[];
  polygon: Shape[] = [];
  polyhedron: Shape[] = [];

  constructor(public dialog: MatDialog,
              public router: Router) {
    this.shapes = [
      {dimension: 2, name: 'circle'},
      {dimension: 2, name: 'triangle'},
      {dimension: 2, name: 'square'},
      {dimension: 2, name: 'rectangle'},
      {dimension: 2, name: 'hexagon'},
      {dimension: 3, name: 'sphere'},
      {dimension: 3, name: 'cylinder'},
      {dimension: 3, name: 'pyramid'},
      {dimension: 3, name: 'cube'},
      {dimension: 3, name: 'prism'},
    ]
    shuffle(this.shapes);
  }

  ngOnInit(): void {
  }

  drop(event: CdkDragDrop<Shape[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
    if (this.shapes.length === 0) {
      this.openDialog(this.checkAnswers());
    }
  }

  private checkAnswers(): boolean {
    function checkAll(shapes: Shape[], dimension: number): boolean {
      for (const shape of shapes) {
        if (shape.dimension !== dimension) {
          return false;
        }
      }
      return true;
    }

    return checkAll(this.polygon, 2) && checkAll(this.polyhedron, 3);
  }

  private openDialog(data: boolean): void {
    const dialogRef = this.dialog.open(ShapesResultComponent,
      {data: data, width: '600px', disableClose: true});

    dialogRef.afterClosed().subscribe(result => {
      if (result === 'playAgain') {
        this.playAgain();
      } else if (result === 'goToMenu') {
        this.goToMenu();
      }
    });
  }

  private playAgain() {
    window.location.reload();
  }

  private goToMenu() {
    this.router.navigate(['/'],).then();
  }
}



