import { IEdge, IVertex } from '@modules/graph/interfaces/graph.interface';

export class Vertex implements IVertex {
  iata: string;
  edges: IEdge[] = [];

  constructor(iata: string) {
    this.iata = iata;
  }

  addEdge(edge: IEdge) {
    this.edges.push(edge);
  }
}
