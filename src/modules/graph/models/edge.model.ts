import { IEdge, IVertex } from '@modules/graph/interfaces/graph.interface';

export class Edge implements IEdge {
  vertex: IVertex;
  distance: number;

  constructor(vertex: IVertex, distance: number) {
    this.vertex = vertex;
    this.distance = distance;
  }
}
