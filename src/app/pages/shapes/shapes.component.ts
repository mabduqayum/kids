import {Component, OnInit} from '@angular/core';
import {Shape} from "../../interfaces/shape";
import {CdkDragDrop, moveItemInArray, transferArrayItem} from "@angular/cdk/drag-drop";

@Component({
  selector: 'app-shapes',
  templateUrl: './shapes.component.html',
  styleUrls: ['./shapes.component.scss']
})
export class ShapesComponent implements OnInit {
  shapes: Shape[];
  polygon1: Shape[];
  polygon2: Shape[];
  todo = ['Get to work', 'Pick up groceries', 'Go home', 'Fall asleep'];

  done = ['Get up', 'Brush teeth', 'Take a shower', 'Check e-mail', 'Walk dog'];

  constructor() {
    this.shapes = [
      {dimension: 2, name: 'sphere'},
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
    this.polygon1 = []
    this.polygon2 = []
    shuffle(this.shapes);
  }

  ngOnInit(): void {
  }


  drop(event: CdkDragDrop<string[]>) {
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
  }
}


function shuffle(array: any[]) {
  let currentIndex = array.length;
  let randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {

    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
  }

  return array;
}
