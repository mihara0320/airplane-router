import { Edge, EdgeTracker } from '@modules/graph/models/edge.model';
import { AdjacencyList } from '@modules/graph/models/adjacency-list.model';
import { HeapItem, MinHeap } from '@modules/graph/models/min-heap.model';

export class Graph {
  adjacencyList: AdjacencyList = new AdjacencyList();

  addEdge(iata: string, edge: Edge): void {
    if (this.adjacencyList.has(iata)) {
      const edges = this.adjacencyList.get(iata);
      edges.push(edge);
      this.adjacencyList.set(iata, edges);
    } else {
      this.adjacencyList.set(iata, [edge]);
    }
  }

  static Dijkstra(adjacencyList: AdjacencyList, start: string) {
    const minDistances = new Map<string, EdgeTracker>();
    const initialDistances: HeapItem[] = [];

    for (const iata of adjacencyList.keys()) {
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

    const minHeap = new MinHeap();
    minHeap.init(initialDistances);
    minHeap.replace([start, 0]);

    while (!minHeap.isEmpty()) {
      const [vertex, currentMinDistance] = minHeap.poll();

      if (currentMinDistance === Infinity) {
        break;
      }

      const edges = adjacencyList.get(vertex);

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
