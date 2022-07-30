import { Edge } from '@modules/graph/models/edge.model';

export class Vertex {
  iata: string;
  edges: Edge[];
  depth: number;
  constructor(iata: string, depth: number) {
    this.iata = iata;
    this.edges = [];
    this.depth = depth;
  }

  addEdge(iata: string, distance: number) {
    this.edges.push(new Edge(this.iata, iata, distance));
  }
}
