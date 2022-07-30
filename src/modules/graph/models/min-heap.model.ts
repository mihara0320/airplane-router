import Heap from 'heap-js';

export type HeapItem = [string, number];

const customPriorityComparator = (a: HeapItem, b: HeapItem) => a[1] - b[1];

export class MinHeap extends Heap<HeapItem> {
  constructor() {
    super(customPriorityComparator);
  }
}
