import {Component, OnInit} from '@angular/core';
import {randomChoice, randomSample, shuffle} from "../../utils/random";
import {Coin, CoinQuestion} from "../../interfaces/coin";
import {LinkedList, LLNode} from "../../classes/linked-list";

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

  constructor() {
    this.setAllCoins();
    this.setQuestions();
    this.currentQuestion = this.questions.head!;
  }

  ngOnInit(): void {
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
    const question1 = 'Choose "diram coin" among all off coins';
    const question2 = 'Choose "somoni coin" among all off coins';
    const question3 = 'Choose "biggest coin" among all off coins';
    const question4 = 'Choose "smallest coin" among all off coins';
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

    const addQuestion = (question: string): void => {
      shuffle(choices);
      rightChoiceIndex = getRightChoiceIndex(choices, rightChoice);
      this.questions.append({
        question: question,
        choices: choices,
        rightChoiceIndex: rightChoiceIndex
      });
    }

    for (let i = 0; i < 2; i++) {
      choices = this.pulho.slice();
      rightChoice = randomChoice(this.tangaho);
      choices.push(rightChoice);
      addQuestion(question1);
    }

    for (let i = 0; i < 2; i++) {
      choices = randomSample(this.tangaho, 3);
      rightChoice = randomChoice(this.pulho);
      choices.push(rightChoice);
      addQuestion(question2);
    }


    for (let i = 0; i < 2; i++) {
      choices = randomSample(this.allCoins, 4);
      rightChoice = biggestCoin(choices);
      addQuestion(question3);
    }

    for (let i = 0; i < 2; i++) {
      choices = randomSample(this.allCoins, 4);
      rightChoice = smallestCoin(choices);
      addQuestion(question4);
    }
  }

  onAnswerClick(index: number) {
    this.currentQuestion.value.selectedChoiceIndex = index;
    if (!this.currentQuestion.next) {
      return;
    }
    this.currentQuestion = this.currentQuestion.next!;
  }
}
