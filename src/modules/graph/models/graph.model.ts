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
   * @see [Heap data structure - raywenderlich] (https://www.raywenderlich.com/books/data-structures-algorithms-in-swift/v3.0/chapters/22-the-heap-data-structure)
   */
  static Dijkstra(
    adjacencyList: AdjacencyList,
    start: string,
  ): MinDistanceList {
    const minDistances = new MinDistanceList();
    const initialDistances: HeapItem[] = [];

    // O(V)
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

    // O(V)
    minHeap.init(initialDistances);

    // O(log(V))
    minHeap.replace([start, 0]);

    // O(V)
    while (!minHeap.isEmpty()) {
      // O(log(n))
      const [vertex, currentMinDistance] = minHeap.poll();

      if (currentMinDistance === Infinity) {
        break;
      }

      const edges = adjacencyList.get(vertex);

      // O(E)
      for (const edge of edges) {
        const { dest, distance } = edge;

        const currentDistance = currentMinDistance + distance;
        const currentPath = minDistances.get(dest);

        if (currentDistance < currentPath?.totalDistance) {
          currentPath.totalDistance = currentDistance;
          currentPath.previousEdge = edge;

          minDistances.set(dest, currentPath);

          // O(log(V))
          minHeap.push([dest, currentDistance]);
        }
      }
    }
    return minDistances;
  }

  static VisualizePath(src: string, sortedEdges: Edge[]): string {
    return `${src} -> ${sortedEdges.map((edges) => edges.dest).join(' -> ')}`;
  }
}
