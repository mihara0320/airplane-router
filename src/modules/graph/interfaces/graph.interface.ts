import { IAirport } from '@modules/airports/interfaces/airports.interface';

export interface IVertex {
  airport: IAirport;
  edges: IEdge[];
  depth: number;
}

export interface IEdge {
  vertex: IVertex;
  distance: number;
}
