import { Edge } from '@modules/graph/models/edge.model';
import * as _ from 'lodash';

export class Graph {
  _adjMap: Map<string, Edge[]> = new Map();
  _minDistances: Map<string, number> = new Map();

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
    this._minDistances.set(srcIata, 0);

    while (visited.size != this._adjMap.size) {
      const { vertex, minDistance } = this.getVertexWithMinDistance(
        this._minDistances,
        visited,
      );

      if (minDistance === Infinity) {
        break;
      }

      visited.add(vertex);

      const edges = this._adjMap.get(vertex);

      edges.forEach((edge) => {
        const { iata, distance } = edge;

        if (visited.has(iata)) {
          return;
        }

        const potentialMinDistance = minDistance + distance;
        const currentMinDistance = this._minDistances.get(iata);

        if (potentialMinDistance < currentMinDistance) {
          this._minDistances[iata] = potentialMinDistance;
        }
      });
    }
    return _.filter(this._minDistances, (value) => {
      return value !== Infinity;
    });
  }

  private initMinDistances() {
    for (const iata of this._adjMap.keys()) {
      this._minDistances.set(iata, Infinity);
    }
  }

  private getVertexWithMinDistance(
    minDistances: Map<string, number>,
    visited: Set<string>,
  ) {
    let minDistance = Infinity;
    let vertex = null;

    for (const [iata, distance] of minDistances.entries()) {
      if (visited.has(iata)) {
        continue;
      }
      if (distance <= minDistance) {
        vertex = iata;
        minDistance = distance;
      }
    }

    return { vertex, minDistance };
  }
}
