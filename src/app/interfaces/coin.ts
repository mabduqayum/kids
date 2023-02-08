export interface Coin {
  src: string;
  value: number;
}

export interface CoinQuestion {
  choices: Coin[];
  question: string;
  rightChoiceIndex: number;
  selectedChoiceIndex?: number;
}
