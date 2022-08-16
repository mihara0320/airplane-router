import { Edge } from '@modules/graph/models/edge.model';

export interface IShortestPathResult {
  totalDistanceInKm: number;
  path: string;
  edges: Edge[];
}
