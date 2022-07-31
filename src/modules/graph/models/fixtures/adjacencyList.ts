import { AdjacencyList } from '@modules/graph/models/adjacency-list.model';
import { Edge } from '@modules/graph/models/edge.model';

export const adjList = new AdjacencyList();
adjList.set('A', [new Edge('A', 'B', 3), new Edge('A', 'C', 20)]);
adjList.set('B', [
  new Edge('B', 'A', 3),
  new Edge('B', 'C', 2),
  new Edge('B', 'D', 9),
  new Edge('B', 'E', 3),
]);
adjList.set('C', [
  new Edge('C', 'A', 7),
  new Edge('C', 'B', 2),
  new Edge('C', 'D', 20),
]);
adjList.set('D', [new Edge('D', 'B', 9), new Edge('D', 'C', 20)]);
adjList.set('E', [new Edge('E', 'B', 3), new Edge('E', 'F', 1)]);
adjList.set('F', [new Edge('F', 'E', 1)]);
adjList.set('G', []);
