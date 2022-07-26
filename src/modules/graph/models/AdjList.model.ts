import * as _ from 'lodash';

export class ADJList {
  map: Map<string, any[]>;
  distinctNode: Set<string>;

  constructor() {
    this.map = new Map();
    this.distinctNode = new Set();
  }

  addNode(node: string) {
    if (this.distinctNode.has(node)) {
      // console.log('already exist', node);
    } else {
      this.distinctNode.add(node);
    }
  }

  addEdge(nodeOne: string, nodeTwo: string, weight: number) {
    let tmp = [];
    if (this.distinctNode.has(nodeOne) && this.distinctNode.has(nodeTwo)) {
      if (this.map.has(nodeOne)) {
        const current = this.map.get(nodeOne);
        tmp = _.concat(tmp, current);
        tmp.push([nodeTwo, weight]);
        this.map.set(nodeOne, tmp);
      } else {
        tmp.push([nodeTwo, weight]);
        this.map.set(nodeOne, tmp);
      }
    }
  }
}
