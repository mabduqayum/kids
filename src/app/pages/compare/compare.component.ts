import {Component, OnInit} from '@angular/core';
import {Compare} from "../../interfaces/compare";
import {MatDialog} from "@angular/material/dialog";
import {Router} from "@angular/router";
import {CompareResultComponent} from "./compare-result/compare-result.component";

@Component({
  selector: 'app-compare',
  templateUrl: './compare.component.html',
  styleUrls: ['./compare.component.scss']
})
export class CompareComponent implements OnInit {
  compareQuestions: Compare[] = [];
  currentIndex = 0;
  private points = 0;

  constructor(public dialog: MatDialog,
              public router: Router) {
    for (let i = 0; i < 4; i++) {
      this.compareQuestions.push({n1: this.randInt(1, 9), n2: this.randInt(1, 9)});
    }
    for (let i = 0; i < 3; i++) {
      this.compareQuestions.push({n1: this.randInt(1, 20), n2: this.randInt(1, 20)});
    }
    for (let i = 0; i < 3; i++) {
      this.compareQuestions.push({n1: this.randInt(1, 100), n2: this.randInt(1, 100)});
    }
    console.log(this.compareQuestions);
    console.log(this.currentIndex);
  }

  ngOnInit(): void {
  }

  onClick(): void {
    if (this.currentIndex === this.compareQuestions.length - 1) {
      this.openDialog(true);
      return;
    }
    this.currentIndex++;
  }

  private goToMenu() {
    this.router.navigate(['/'],);
  }

  private playAgain() {
    window.location.reload();
  }

  private openDialog(data: boolean): void {
    const dialogRef = this.dialog.open(CompareResultComponent,
      {data: data, width: '600px', disableClose: true});

    dialogRef.afterClosed().subscribe(result => {
      if (result === 'playAgain') {
        this.playAgain();
      } else if (result === 'goToMenu') {
        this.goToMenu();
      }
    });
  }

  private randInt(start: number, end: number) {
    return Math.floor(Math.random() * end + start);
  }
}
