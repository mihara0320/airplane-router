import { Edge } from '@modules/graph/models/edge.model';

export interface IShortestPathResult {
  totalDistance: number;
  path: string;
  edges: Edge[];
}
