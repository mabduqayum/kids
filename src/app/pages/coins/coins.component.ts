import {Component, OnInit} from '@angular/core';
import {randomChoice, randomSample, shuffle} from "../../utils/random";
import {Coin, CoinQuestion} from "../../interfaces/coin";
import {LinkedList, LLNode} from "../../classes/linked-list";
import {CompareResultComponent} from "../compare/compare-result/compare-result.component";
import {MatDialog} from "@angular/material/dialog";
import {Router} from "@angular/router";

@Component({
  selector: 'app-coins',
  templateUrl: './coins.component.html',
  styleUrls: ['./coins.component.scss']
})
export class CoinsComponent implements OnInit {
  currentQuestion: LLNode<CoinQuestion>;
  fishers = ['fluffy', 'dog', 'bird', 'cat']

  private allCoins: Coin[] = []
  private pulho: Coin[] = [];
  private questions: LinkedList<CoinQuestion> = new LinkedList<CoinQuestion>();
  private tangaho: Coin[] = [];

  constructor(public dialog: MatDialog,
              public router: Router) {
    this.setAllCoins();
    this.setQuestions();
    this.currentQuestion = this.questions.head!;
  }

  ngOnInit(): void {
  }


  onAnswerClick(index: number) {
    this.currentQuestion.value.selectedChoiceIndex = index;
    if (!this.currentQuestion.next) {
      this.calculateResult();
      return;
    }
    this.currentQuestion = this.currentQuestion.next!;
  }

  private setAllCoins(): void {
    const tangaho = [1, 2, 5, 10, 20, 25, 50]
    for (const tanga of tangaho) {
      this.tangaho.push({src: `${tanga} dir`, value: tanga});
    }
    const pulho = [1, 3, 5]
    for (const pul of pulho) {
      this.pulho.push({src: `${pul} tjs`, value: pul * 100});
    }
    this.allCoins = [...this.tangaho, ...this.pulho];
    shuffle(this.allCoins);
  }

  private setQuestions(): void {
    let choices: Coin[];
    let rightChoice: Coin;
    let rightChoiceIndex: number;

    function getRightChoiceIndex(array: Coin[], rightChoice: Coin): number {
      let index = 0;
      while (array[index].value !== rightChoice.value) {
        index++;
      }
      return index;
    }


    function biggestCoin(choices: Coin[]): Coin {
      let index = 0;
      for (let i = 0; i < 4; i++) {
        if (choices[i].value > choices[index].value) {
          index = i;
        }
      }
      return choices[index];
    }

    function smallestCoin(choices: Coin[]): Coin {
      let index = 0;
      for (let i = 0; i < 4; i++) {
        if (choices[i].value < choices[index].value) {
          index = i;
        }
      }
      return choices[index];
    }

    const addQuestion = (question: number): void => {
      shuffle(choices);
      rightChoiceIndex = getRightChoiceIndex(choices, rightChoice);
      this.questions.append({
        questionI18Index: question,
        choices: choices,
        rightChoiceIndex: rightChoiceIndex
      });
    }

    for (let i = 0; i < 2; i++) {
      choices = this.pulho.slice();
      rightChoice = randomChoice(this.tangaho);
      choices.push(rightChoice);
      addQuestion(1);
    }

    for (let i = 0; i < 2; i++) {
      choices = randomSample(this.tangaho, 3);
      rightChoice = randomChoice(this.pulho);
      choices.push(rightChoice);
      addQuestion(2);
    }


    for (let i = 0; i < 2; i++) {
      choices = randomSample(this.allCoins, 4);
      rightChoice = biggestCoin(choices);
      addQuestion(3);
    }

    for (let i = 0; i < 2; i++) {
      choices = randomSample(this.allCoins, 4);
      rightChoice = smallestCoin(choices);
      addQuestion(4);
    }
  }

  private calculateResult() {
    let rez = 0;
    const maxRez = 8;
    let questionSample = this.questions.head;
    while (questionSample?.value) {
      if (questionSample.value.selectedChoiceIndex === questionSample.value.rightChoiceIndex) {
        rez++;
      }
      questionSample = questionSample.next;
    }
    this.openDialog(rez / maxRez);
  }

  private openDialog(points: number): void {
    const dialogRef = this.dialog.open(CompareResultComponent,
      {data: points, width: '600px', disableClose: true});

    dialogRef.afterClosed().subscribe(result => {
      if (result === 'playAgain') {
        this.playAgain();
      } else if (result === 'goToMenu') {
        this.goToMenu();
      }
    });
  }

  private goToMenu(): void {
    this.router.navigate(['/'],).then(() => {
    });
  }

  private playAgain(): void {
    window.location.reload();
  }
}
