import { Edge } from '@modules/graph/models/edge.model';
import { AdjacencyList } from '@modules/graph/models/adjacency-list.model';
import { HeapItem, MinHeap } from '@modules/graph/models/min-heap.model';
import { MinDistanceList } from '@modules/graph/models/min-distance-list.model';

export class Graph {
  adjacencyList: AdjacencyList = new AdjacencyList();

  /**
   * @description
   * Add an edge to a vertex
   * @param iata An unique IATA code which is represented as vertex
   * @param edge A flight connection which is represented as weighted edge between vertices
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
   * @description
   * Dijkstra's algorithm implementation. O((V+E) * log(V)) time | O(V) space - where V is the number of vertices and E is the number of edges in the graph
   * @param adjacencyList An adjacency list representation of airports & routes
   * @param start An IATA code which represent starting vertex of Dijkstra's algorithm
   * @return {MinDistanceList} A map contains the shortest distance from the source airport to each airport & its edge history
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

    const minHeap = new MinHeap();

    // O(V)
    minHeap.init(initialDistances);

    // O(log(V))
    minHeap.replace([start, 0]);

    // O(V)
    while (!minHeap.isEmpty()) {
      // O(1)
      const [vertex, currentMinDistance] = minHeap.poll();

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
          minHeap.push([dest, currentDistance]);
        }
      }
    }
    return shortestPaths;
  }

  /**
   * @description
   * Visualize path in string representation
   * @param src An IATA code of source airport
   * @param sortedEdges A List of sorted edges in visiting order
   * @returns {string} Representation of path, such as "A -> B -> C -> D"
   */
  static VisualizePath(src: string, sortedEdges: Edge[]): string {
    return `${src} -> ${sortedEdges.map((edges) => edges.dest).join(' -> ')}`;
  }
}
