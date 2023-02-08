export class LLNode<T> {
  value: T;
  next: LLNode<T> | null;

  constructor(value: T) {
    this.value = value;
    this.next = null;
  }
}

export class LinkedList<T> {
  head: LLNode<T> | null;
  tail: LLNode<T> | null;

  constructor() {
    this.head = null;
    this.tail = null;
  }

  append(value: T) {
    let newNode = new LLNode(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail!.next = newNode;
      this.tail = newNode;
    }
  }
}
