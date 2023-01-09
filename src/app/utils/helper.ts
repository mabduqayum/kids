import {SubscriptionLike} from "rxjs";

export function cleanSubscription(valSub?: SubscriptionLike): void {
  if (valSub && !valSub.closed) {
    valSub.unsubscribe();
  }
}

export function cleanSubscriptions(arr: SubscriptionLike[]): void {
  while (arr && arr.length) {
    cleanSubscription(arr.pop());
  }
}
