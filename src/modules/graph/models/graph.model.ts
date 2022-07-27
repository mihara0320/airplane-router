import { Edge } from '@modules/graph/models/edge.model';

export class Graph {
  _map: Map<string, Edge[]> = new Map();

  addEdge(iata: string, edge: Edge) {
    if (this._map.has(iata)) {
      const edges = this._map.get(iata);
      edges.push(edge);
      this._map.set(iata, edges);
    } else {
      this._map.set(iata, [edge]);
    }
  }
}
