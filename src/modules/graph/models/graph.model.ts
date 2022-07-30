import Heap from 'heap-js';
import * as _ from 'lodash';
import { Edge } from '@modules/graph/models/edge.model';

interface IPath {
  totalDistance: number;
  paths: string[];
  depth: number;
}

export class Graph {
  _adjMap: Map<string, Edge[]> = new Map();
  _minDistances: Map<string, IPath>;

  addEdge(iata: string, edge: Edge): void {
    if (this._adjMap.has(iata)) {
      const edges = this._adjMap.get(iata);
      edges.push(edge);
      this._adjMap.set(iata, edges);
    } else {
      this._adjMap.set(iata, [edge]);
    }
  }

  dijkstras(start: string) {
    const minHeap = new Heap();
    const minDistances = new Map<string, IPath>();

    for (const iata of this._adjMap.keys()) {
      minDistances.set(iata, {
        totalDistance: Infinity,
        paths: [],
        depth: 0,
      });
    }

    const visited = new Set<string>();
    let currentDepth = 0;

    this._minDistances.set(start, {
      totalDistance: 0,
      paths: [],
      depth: currentDepth,
    });

    while (visited.size < this._adjMap.size) {
      const { vertex, currentMinDistance } = Graph.getVertexWithMinDistance(
        this._minDistances,
        visited,
      );

      if (currentMinDistance === Infinity) {
        break;
      }

      visited.add(vertex);

      const edges = this._adjMap.get(vertex);

      for (const edge of edges) {
        const { iata, distance } = edge;

        if (visited.has(iata)) {
          continue;
        }

        const currentDistance = currentMinDistance + distance;
        const currentPath = this._minDistances.get(iata);

        if (currentDistance < currentPath?.totalDistance) {
          currentPath.totalDistance = currentDistance;

          currentPath.paths.push(vertex);

          if (currentDepth === currentPath.depth) {
            currentPath.paths.push(iata);
            currentPath.depth += 1;
          } else {
            const paths = _.dropRight(currentPath.paths);
            currentPath.paths = _.concat(paths, [iata]);
          }

          this._minDistances.set(iata, currentPath);
        }
      }

      const arr = Array.from(this._minDistances);
      const de = _.filter(arr, (o) => {
        return o[1].totalDistance !== Infinity;
      });

      currentDepth += 1;
    }

    const arr = Array.from(this._minDistances);
    const de = _.filter(arr, (o) => {
      return o[1].totalDistance !== Infinity;
    });

    const de1 = _.orderBy(de, (o) => o[1].paths.length, ['desc']);
    return de1;
    return _.omitBy(this._minDistances, (path: IPath) => {
      return path.totalDistance === Infinity;
    });
  }

  private static getVertexWithMinDistance(
    minDistances: Map<string, IPath>,
    visited: Set<string>,
  ) {
    let currentMinDistance = Infinity;
    let vertex = null;

    for (const [iata, currentPath] of minDistances.entries()) {
      if (visited.has(iata)) {
        continue;
      }
      if (currentPath.totalDistance <= currentMinDistance) {
        vertex = iata;
        currentMinDistance = currentPath.totalDistance;
      }
    }

    return { vertex, currentMinDistance };
  }
}
