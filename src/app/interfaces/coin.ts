export interface Coin {
  src: string;
  value: number;
}

export interface CoinQuestion {
  choices: Coin[];
  questionI18Index: number;
  rightChoiceIndex: number;
  selectedChoiceIndex?: number;
}
