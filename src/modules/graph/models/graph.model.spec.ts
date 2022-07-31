import { Graph } from './graph.model';
import { adjList } from '@modules/graph/models/fixtures/adjacencyList';

describe('Graph Model', () => {
  it('finds the shortest paths with 1 hop', () => {
    const src = 'A';
    const dest = 'B';
    const minDistances = Graph.Dijkstra(adjList, src);
    expect(minDistances.get(dest)).toEqual({
      totalDistance: 3,
      previousEdge: {
        src: 'A',
        dest: 'B',
        distance: 3,
      },
    });
  });

  it('finds the shortest paths with multiple hops', () => {
    const src = 'A';
    const dest = 'F';
    const minDistances = Graph.Dijkstra(adjList, src);
    expect(minDistances.get(dest)).toEqual({
      totalDistance: 7,
      previousEdge: {
        src: 'E',
        dest: 'F',
        distance: 1,
      },
    });
  });

  it('does not finds the shortest paths for isolated vertex', () => {
    const src = 'A';
    const dest = 'G';
    const minDistances = Graph.Dijkstra(adjList, src);
    expect(minDistances.get(dest)).toEqual({
      totalDistance: Infinity,
      previousEdge: null,
    });
  });
});
