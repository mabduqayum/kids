import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-coins',
  templateUrl: './coins.component.html',
  styleUrls: ['./coins.component.scss']
})
export class CoinsComponent implements OnInit {
  coins: Coin[] = []
  allCoins: Coin[] = []
  fishers = ['fluffy', 'dog', 'bird', 'cat']

  constructor() {
    this.getCoins();
    this.shuffle(this.allCoins);
    this.coins = this.allCoins.slice(0, 4);
    console.log(this.coins);
  }

  private shuffle<T>(array: T[]): T[] {
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

  private getCoins(): void {
    const tangaho = [1, 2, 5, 10, 20, 25, 50];
    for (const tanga of tangaho) {
      this.allCoins.push({src: `${tanga} dir`});
    }
    const pulho = [1, 3, 5];
    for (const pul of pulho) {
      this.allCoins.push({src: `${pul} tjs`});
    }
  }

  ngOnInit(): void {
  }

}

interface Coin {
  src: string;
}
