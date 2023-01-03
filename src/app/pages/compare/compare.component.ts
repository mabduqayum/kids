import {Component, ElementRef, HostListener, OnInit, ViewChild} from '@angular/core';
import {Compare} from "../../interfaces/compare";
import {MatDialog} from "@angular/material/dialog";
import {Router} from "@angular/router";
import {CompareResultComponent} from "./compare-result/compare-result.component";
import {Subscription, timeout, timer} from "rxjs";

@Component({
  selector: 'app-compare',
  templateUrl: './compare.component.html',
  styleUrls: ['./compare.component.scss']
})
export class CompareComponent implements OnInit {
  currentQuestion?: Compare;

  private questions: Compare[] = [];
  private currentIndex = 0;
  private points = 0;
  private isQuizCompleted = false;
  private timerSub?: Subscription;

  @ViewChild('left') leftBtn!: ElementRef;
  @ViewChild('right') rightBtn!: ElementRef;

  constructor(public dialog: MatDialog,
              public router: Router) {
  }

  ngOnInit(): void {
    this.generateQuestions();
    this.setCurrentQuestion();
  }

  @HostListener('window:keydown.ArrowLeft')
  onLeftClick(): void {
    if (this.isQuizCompleted) {
      return;
    }
    this.setTimedFocus(this.leftBtn);
    this.onClick();
  }

  @HostListener('window:keydown.ArrowRight')
  onRightClick(): void {
    if (this.isQuizCompleted) {
      return;
    }
    this.setTimedFocus(this.rightBtn);
    this.onClick(true);
  }

  private setTimedFocus(el: ElementRef): void {
    if (this.timerSub) {
      this.timerSub.unsubscribe();
    }
    el.nativeElement.focus();
    this.timerSub = timer(250).subscribe(() => el.nativeElement.blur());
  }

  private nextQuestion(): void {
    this.currentIndex++;
    this.setCurrentQuestion();
  }

  private setCurrentQuestion(): void {
    this.currentQuestion = this.questions[this.currentIndex];
  }

  private onClick(isRightClicked?: boolean): void {
    this.currentQuestion!.submittedAnswer = isRightClicked ? 1 : 0;
    if (this.currentQuestion!.left < this.currentQuestion!.right) {
      this.currentQuestion!.actualAnswer = 0;
    } else if (this.currentQuestion!.left > this.currentQuestion!.right) {
      this.currentQuestion!.actualAnswer = 1;
    } else {
      this.currentQuestion!.actualAnswer = this.currentQuestion!.submittedAnswer;
    }
    if (this.currentIndex === this.questions.length - 1) {
      this.completeQuiz();
      return;
    }
    this.nextQuestion();
  }

  private generateQuestions(): void {
    for (let i = 0; i < 4; i++) {
      this.questions.push({left: this.randInt(1, 9), right: this.randInt(1, 9)});
    }
    for (let i = 0; i < 3; i++) {
      this.questions.push({left: this.randInt(1, 20), right: this.randInt(1, 20)});
    }
    for (let i = 0; i < 3; i++) {
      this.questions.push({left: this.randInt(1, 100), right: this.randInt(1, 99)});
    }
  }

  private goToMenu(): void {
    this.router.navigate(['/'],).then(() => {
    });
  }

  private playAgain(): void {
    window.location.reload();
  }

  private completeQuiz(): void {
    this.isQuizCompleted = true;
    const lenQuestions = this.questions.length
    let correctCount = 0;
    for (const question of this.questions) {
      if (question.actualAnswer === question.submittedAnswer) {
        correctCount++;
      }
    }
    this.points = correctCount / lenQuestions;
    this.openDialog();
  }

  private openDialog(): void {
    const dialogRef = this.dialog.open(CompareResultComponent,
      {data: this.points, width: '600px', disableClose: true});

    dialogRef.afterClosed().subscribe(result => {
      if (result === 'playAgain') {
        this.playAgain();
      } else if (result === 'goToMenu') {
        this.goToMenu();
      }
    });
  }

  private randInt(start: number, end: number): number {
    return Math.floor(Math.random() * (end - start) + start);
  }
}
