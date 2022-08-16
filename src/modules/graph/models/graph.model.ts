import { Edge } from '@modules/graph/models/edge.model';
import { AdjacencyList } from '@modules/graph/models/adjacency-list.model';
import { HeapItem, MinHeap } from '@modules/graph/models/min-heap.model';
import { MinDistanceList } from '@modules/graph/models/min-distance-list.model';

export class Graph {
  adjacencyList: AdjacencyList = new AdjacencyList();

  /**
   * @description Add edge to a vertex
   * @param iata Unique airport id which is represented as vertex
   * @param edge Flight connection which is represented as weighted edge between vertices
   */
  addEdge(iata: string, edge: Edge): void {
    if (this.adjacencyList.has(iata)) {
      const edges = this.adjacencyList.get(iata);
      edges.push(edge);
      this.adjacencyList.set(iata, edges);
    } else {
      this.adjacencyList.set(iata, [edge]);
    }
  }

  /**
   * @description Dijkstra's algorithm implementation. O((V+E) * log(V)) time | O(V) space - where V is the number of vertices and E is the number of edges in the graph
   * @see [Dijkstra's algorithm implementation guide - geeksforgeeks](https://www.geeksforgeeks.org/dijkstras-algorithm-for-adjacency-list-representation-greedy-algo-8/)
   */
  static Dijkstra(
    adjacencyList: AdjacencyList,
    start: string,
  ): MinDistanceList {
    const shortestPaths = new MinDistanceList();
    const initialDistances: HeapItem[] = [];

    // O(V)
    for (const iata of adjacencyList.keys()) {
      shortestPaths.set(iata, {
        totalDistance: Infinity,
        previousEdge: null,
      });
      initialDistances.push([iata, Infinity]);
    }

    shortestPaths.set(start, {
      totalDistance: 0,
      previousEdge: null,
    });

    const visitedVerticesHeap = new MinHeap();

    // O(V)
    visitedVerticesHeap.init(initialDistances);

    // O(log(V))
    visitedVerticesHeap.replace([start, 0]);

    // O(V)
    while (!visitedVerticesHeap.isEmpty()) {
      // O(1)
      const [vertex, currentMinDistance] = visitedVerticesHeap.poll();

      if (currentMinDistance === Infinity) {
        break;
      }

      const edges = adjacencyList.get(vertex);

      // O(E)
      for (const edge of edges) {
        const { dest, distance } = edge;

        const currentDistance = currentMinDistance + distance;
        const currentPath = shortestPaths.get(dest);

        if (currentDistance < currentPath?.totalDistance) {
          currentPath.totalDistance = currentDistance;
          currentPath.previousEdge = edge;

          shortestPaths.set(dest, currentPath);

          // O(log(V))
          visitedVerticesHeap.push([dest, currentDistance]);
        }
      }
    }
    return shortestPaths;
  }
}
