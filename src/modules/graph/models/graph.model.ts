import { Edge } from '@modules/graph/models/edge.model';
import * as _ from 'lodash';

interface IBestPath {
  distance: number;
  hops: string[];
}

export class Graph {
  _adjMap: Map<string, Edge[]> = new Map();
  _minDistances: Map<string, IBestPath> = new Map();

  addEdge(iata: string, edge: Edge): void {
    if (this._adjMap.has(iata)) {
      const edges = this._adjMap.get(iata);
      edges.push(edge);
      this._adjMap.set(iata, edges);
    } else {
      this._adjMap.set(iata, [edge]);
    }
  }

  findShortestPaths(srcIata: string) {
    const visited = new Set<string>();
    this.initMinDistances();
    this._minDistances.set(srcIata, { distance: 0, hops: [] });

    while (visited.size != this._adjMap.size) {
      const { vertex, currentBestPath } = Graph.getVertexWithMinDistance(
        this._minDistances,
        visited,
      );

      if (currentBestPath.distance === Infinity) {
        break;
      }

      visited.add(vertex);

      const edges = this._adjMap.get(vertex);

      edges.forEach((edge) => {
        const { iata, distance } = edge;

        if (visited.has(iata)) {
          return;
        }

        const potentialMinDistance = currentBestPath.distance + distance;
        const bestPath = this._minDistances.get(iata);

        if (potentialMinDistance < currentBestPath) {
          let currentHops = bestPath.hops;
          currentHops = _.dropRight(currentHops);
          currentHops.push(iata);
          this._minDistances.set(iata, {
            distance: potentialMinDistance,
            hops: currentHops,
          });
        }
      });
    }

    return _.omitBy(this._minDistances, (value) => {
      return value === Infinity;
    });
  }

  private initMinDistances() {
    for (const iata of this._adjMap.keys()) {
      this._minDistances.set(iata, { distance: Infinity, hops: [] });
    }
  }

  private static getVertexWithMinDistance(
    minDistances: Map<string, IBestPath>,
    visited: Set<string>,
  ) {
    let currentBestPath = null;
    let vertex = null;

    for (const [iata, bestPath] of minDistances.entries()) {
      if (visited.has(iata)) {
        continue;
      }
      if (bestPath.distance <= Infinity) {
        vertex = iata;
        currentBestPath = bestPath;
      }
    }

    return { vertex, currentBestPath };
  }
}
