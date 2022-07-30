import Heap from 'heap-js';
import { Edge } from '@modules/graph/models/edge.model';

export interface IPath {
  totalDistance: number;
  previousEdge: Edge;
}

const customPriorityComparator = (a: [string, number], b: [string, number]) =>
  a[1] - b[1];

export class Graph {
  _adjMap: Map<string, Edge[]> = new Map();

  addEdge(iata: string, edge: Edge): void {
    if (this._adjMap.has(iata)) {
      const edges = this._adjMap.get(iata);
      edges.push(edge);
      this._adjMap.set(iata, edges);
    } else {
      this._adjMap.set(iata, [edge]);
    }
  }

  dijkstra(start: string) {
    const minDistances = new Map<string, IPath>();
    const initialDistances: [string, number][] = [];

    for (const iata of this._adjMap.keys()) {
      minDistances.set(iata, {
        totalDistance: Infinity,
        previousEdge: null,
      });
      initialDistances.push([iata, Infinity]);
    }

    minDistances.set(start, {
      totalDistance: 0,
      previousEdge: null,
    });

    const minHeap = new Heap<[string, number]>(customPriorityComparator);
    minHeap.init(initialDistances);
    minHeap.replace([start, 0]);

    while (!minHeap.isEmpty()) {
      const [vertex, currentMinDistance] = minHeap.poll();

      if (currentMinDistance === Infinity) {
        break;
      }

      const edges = this._adjMap.get(vertex);

      for (const edge of edges) {
        const { dest, distance } = edge;

        const currentDistance = currentMinDistance + distance;
        const currentPath = minDistances.get(dest);

        if (currentDistance < currentPath?.totalDistance) {
          currentPath.totalDistance = currentDistance;
          currentPath.previousEdge = edge;

          minDistances.set(dest, currentPath);
          minHeap.push([dest, currentDistance]);
        }
      }
    }
    return minDistances;
  }
}
