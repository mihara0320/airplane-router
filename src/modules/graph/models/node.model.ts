export class Node<T> {
  data: T;
  adjacent: Node<T>[];

  constructor(data: T) {
    this.data = data;
    this.adjacent = [];
  }

  addAdjacent(node: Node<T>): void {
    this.adjacent.push(node);
  }
}
