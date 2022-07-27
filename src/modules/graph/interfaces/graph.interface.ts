export interface IVertex {
  iata: string;
  edges: IEdge[];
}

export interface IEdge {
  vertex: IVertex;
  distance: number;
}
